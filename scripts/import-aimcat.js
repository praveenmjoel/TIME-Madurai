/**
 * TIME Madurai – AIMCAT Result Importer
 *
 * Usage:
 *   node import-aimcat.js path/to/aimcat_MDCAB6A019_AIMCAT2724.json
 *
 * What it does:
 *   1. Reads the JSON produced by the browser bookmarklet
 *   2. Parses scorecard + question-level time analysis
 *   3. Writes a clean document to Firestore:
 *        aimcatResults/{email}_{aimcatId}
 *        e.g.  keerthypriya16102002@gmail.com_AIMCAT2724
 *
 * Requires:
 *   FIREBASE_SERVICE_ACCOUNT_JSON env var (same as daily-coaching.js)
 *   or a local service-account.json file in the scripts/ folder
 */

import { readFileSync, existsSync } from 'fs';
import { initializeApp, cert }     from 'firebase-admin/app';
import { getFirestore }            from 'firebase-admin/firestore';

// ── Student ID → email map (add new students as you extract their data) ──────
const STUDENT_ID_TO_EMAIL = {
  'MDCAB6A019': 'keerthypriya16102002@gmail.com',
  'MDCAB6A014': 'philipephraim2004@gmail.com',
  // Add others here as you run the bookmarklet for each student
};

// ── Column indices for _rawTimeAnalysis table (confirmed from extraction) ────
const COL = {
  Q_NO:         0,
  CORRECT_ANS:  1,
  SECTION:      2,   // 'VA/RC', 'DI/LR', 'QA'
  MY_ANS:       3,
  TEST_AREA:    4,   // 'VA', 'RC', 'DI', 'LR', 'QA'
  ATTEMPT_PCT:  5,
  CORRECT_PCT:  6,
  DIFFICULTY:   7,   // 'E', 'M', 'D', 'VD'
  MARKS:        8,
  NEG_MARKS:    9,
  TIME_SECS:   10,
  AVG_ALL:     11,
  AVG_CORRECT: 12,
};

const SECTION_KEY = { 'VA/RC': 'varc', 'DI/LR': 'dilr', 'QA': 'qa' };

// ─────────────────────────────────────────────────────────────────────────────

function processTimeAnalysis(rawTimeTable) {
  // rawTimeTable is _rawTimeAnalysis[index] where rows has the question data
  // Find the table that has the actual question rows (not the summary scorecard)
  const questionTable = rawTimeTable.find(t =>
    t.rows.length > 5 &&
    t.rows[0].includes('Question No.') &&
    t.rows[1] && t.rows[1][2] && ['VA/RC', 'DI/LR', 'QA'].includes(t.rows[1][2])
  );

  if (!questionTable) {
    console.warn('⚠ Could not find question-level time analysis table.');
    return { sections: null, questions: [] };
  }

  const sections = {};
  const questions = [];

  for (let i = 1; i < questionTable.rows.length; i++) {  // skip header row
    const r = questionTable.rows[i];
    if (r.length < 11) continue;

    const qNo    = parseInt(r[COL.Q_NO]);
    if (isNaN(qNo)) continue;

    const correctAnswer = r[COL.CORRECT_ANS];
    const sectionRaw    = r[COL.SECTION];
    const myAnswer      = r[COL.MY_ANS];
    const testArea      = r[COL.TEST_AREA];
    const difficulty    = r[COL.DIFFICULTY];
    const timeSecs      = parseInt(r[COL.TIME_SECS])  || 0;
    const avgTimeAll    = parseInt(r[COL.AVG_ALL])    || 0;
    const attemptPct    = parseFloat(r[COL.ATTEMPT_PCT]) || 0;
    const correctPct    = parseFloat(r[COL.CORRECT_PCT]) || 0;

    const sectionKey = SECTION_KEY[sectionRaw] || sectionRaw.toLowerCase();
    const skipped    = myAnswer === 'NA' || myAnswer === '';
    const isCorrect  = !skipped && myAnswer === correctAnswer;
    const isWrong    = !skipped && !isCorrect;
    const isEM       = difficulty === 'E' || difficulty === 'M';

    if (!sections[sectionKey]) {
      sections[sectionKey] = {
        attempted:      0,
        skipped:        0,
        correct:        0,
        wrong:          0,
        totalTimeSecs:  0,
        avgTimePerAttempted: 0,
        overTimeCount:  0,   // spent > 2.5× avg time (over-invested)
        easySkipped:    0,
        mediumSkipped:  0,
        easyWrong:      0,
        mediumWrong:    0,
      };
    }

    const s = sections[sectionKey];

    if (skipped) {
      s.skipped++;
      if (difficulty === 'E') s.easySkipped++;
      if (difficulty === 'M') s.mediumSkipped++;
    } else {
      s.attempted++;
      s.totalTimeSecs += timeSecs;
      if (isCorrect) s.correct++;
      if (isWrong) {
        s.wrong++;
        if (difficulty === 'E') s.easyWrong++;
        if (difficulty === 'M') s.mediumWrong++;
      }
      if (avgTimeAll > 0 && timeSecs > avgTimeAll * 2.5) s.overTimeCount++;
    }

    questions.push({
      qNo, section: sectionKey, testArea,
      myAnswer, correctAnswer,
      isCorrect, isWrong, skipped,
      difficulty, timeSecs, avgTimeAll,
      attemptPct, correctPct,
    });
  }

  // Compute averages
  for (const key of Object.keys(sections)) {
    const s = sections[key];
    s.avgTimePerAttempted = s.attempted > 0
      ? Math.round(s.totalTimeSecs / s.attempted) : 0;
  }

  return { sections, questions };
}

// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node import-aimcat.js path/to/aimcat_XXX_AIMCATXXX.json');
    process.exit(1);
  }
  if (!existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  // ── 1. Read JSON ────────────────────────────────────────────────────────────
  const raw = JSON.parse(readFileSync(filePath, 'utf8'));
  const { aimcatId, studentId, studentName, scorecard, subarea } = raw;

  // ── 2. Map student ID → email ───────────────────────────────────────────────
  const email = STUDENT_ID_TO_EMAIL[studentId];
  if (!email) {
    console.error(`❌ Unknown student ID: ${studentId}`);
    console.error('Add it to STUDENT_ID_TO_EMAIL in import-aimcat.js and re-run.');
    process.exit(1);
  }

  // ── 3. Time analysis — v4 bookmarklet pre-processes it; v2 needs processing ─
  let timeAnalysis, questions;
  if (raw.timeAnalysis && raw.questions) {
    // v4 format: already processed by the bookmarklet
    timeAnalysis = raw.timeAnalysis;
    questions    = raw.questions;
    console.log('📦 Using pre-processed time analysis from bookmarklet v4');
  } else if (raw._rawTimeAnalysis) {
    // v2 format: raw table dump, needs processing
    const result = processTimeAnalysis(raw._rawTimeAnalysis);
    timeAnalysis = result.sections;
    questions    = result.questions;
    console.log('📦 Processed raw time analysis from bookmarklet v2');
  } else {
    timeAnalysis = null;
    questions    = [];
    console.warn('⚠ No time analysis data found in JSON');
  }

  // ── 4. Build Firestore document ─────────────────────────────────────────────
  const doc = {
    email,
    studentId,
    studentName,
    aimcatId,
    importedAt:   new Date().toISOString(),
    scorecard:    scorecard    || null,
    subarea:      subarea      || null,   // per-subarea breakdown with question decisions
    timeAnalysis: timeAnalysis || null,   // aggregated per section
    questions,                            // per-question detail (all sections)
  };

  // ── 5. Init Firestore ───────────────────────────────────────────────────────
  let serviceAccount;
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } else {
    const localPath = new URL('./service-account.json', import.meta.url).pathname;
    if (!existsSync(localPath)) {
      console.error('❌ No Firebase credentials found.');
      console.error('Set FIREBASE_SERVICE_ACCOUNT_JSON env var, or place service-account.json in scripts/');
      process.exit(1);
    }
    serviceAccount = JSON.parse(readFileSync(localPath, 'utf8'));
  }

  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ── 6. Write to Firestore ───────────────────────────────────────────────────
  const docId = `${email}_${aimcatId}`;
  await db.collection('aimcatResults').doc(docId).set(doc);
  console.log(`✅ Imported → aimcatResults/${docId}`);

  // ── 7. Print summary ────────────────────────────────────────────────────────
  const sc = scorecard;
  if (sc) {
    console.log(`\nScorecard for ${studentName} (${aimcatId}):`);
    console.log(`  VA/RC  acc ${sc.varc.accuracy}%   net ${sc.varc.netScore}   ${sc.varc.percentile}%ile`);
    console.log(`  DI/LR  acc ${sc.dilr.accuracy}%   net ${sc.dilr.netScore}   ${sc.dilr.percentile}%ile`);
    console.log(`  QA     acc ${sc.qa.accuracy}%   net ${sc.qa.netScore}   ${sc.qa.percentile}%ile`);
    console.log(`  Total  net ${sc.total.netScore}   AIR ${sc.total.allIndiaRank}   ${sc.total.percentile}%ile`);
  }
  if (subarea) {
    console.log(`\nSubarea:`);
    for (const [sec, rows] of Object.entries(subarea)) {
      console.log(`  ${sec.toUpperCase().padEnd(5)}  ${rows.length} subareas: ${rows.map(r => r.subarea).join(', ')}`);
    }
  }
  if (timeAnalysis) {
    console.log(`\nTime Analysis:`);
    for (const [sec, s] of Object.entries(timeAnalysis)) {
      console.log(`  ${sec.toUpperCase().padEnd(5)}  attempted ${s.attempted}  skipped ${s.skipped}  avg ${s.avgTimePerAttempted}s/q  over-invested ${s.overTimeCount}  easy-skipped ${s.easySkipped}  easy-wrong ${s.easyWrong}`);
    }
  }
  console.log(`\nTotal questions: ${questions.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
