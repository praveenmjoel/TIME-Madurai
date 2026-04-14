/**
 * TIME Madurai – Daily AI Coaching System
 *
 * Runs every day via GitHub Actions (7 AM IST / 1:30 AM UTC).
 * Reads the last 14 days of student data from Firestore,
 * generates individual AI coaching messages using Claude,
 * and posts a single formatted message to the ClickUp Academics channel.
 *
 * 7-Day Rotating Theme:
 *   Monday    → Weekly Kickoff & Goal Setting
 *   Tuesday   → VARC Deep-Dive
 *   Wednesday → DILR Deep-Dive
 *   Thursday  → QA Deep-Dive
 *   Friday    → Practice Quality & Efficiency
 *   Saturday  → Habits, Consistency & Mindset
 *   Sunday    → Squad Leaderboard & Competition Awareness
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import Anthropic from '@anthropic-ai/sdk';

// ─── Config ──────────────────────────────────────────────────────────────────

const CLICKUP_CHANNEL_ID  = '4-90162164615-8';
const CLICKUP_WORKSPACE_ID = '9016591512';
const CLICKUP_API_BASE    = 'https://api.clickup.com/api/v3';

// Students to coach (email → display name)
const EMAIL_TO_NAME = {
  'philipephraim2004@gmail.com':   'Philip Ephraim',
  'rokininavaneeth@gmail.com':     'Rokini',
  'aravindc20712@gmail.com':       'Aravind C',
  'anushuyakumar2006@gmail.com':   'Anushuya V.K',
  'niranjanaa3105007@gmail.com':   'Niranjanaa',
  'riajoyin@gmail.com':            'Joy Maria Varshaa',
  'sandhyasrinivasan1908@gmail.com':'Sandhya',
  'keerthypriya16102002@gmail.com':'Keerthypriya',
  'jenanii286@gmail.com':          'Jenani I',
  'aravindml2005@gmail.com':       'Aravindhan ML',
  'bardeepwi28@gmail.com':         'Bardeep M.R',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function prettyNameFromEmail(email) {
  const prefix = email.split('@')[0];
  return prefix
    .replace(/[._\-+]/g, ' ')
    .replace(/\d{4,}/g, '')
    .split(' ')
    .filter(w => w.length > 0)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
    .trim() || email;
}

function getStudentName(email) {
  return EMAIL_TO_NAME[email.toLowerCase()] || prettyNameFromEmail(email);
}

/** Returns a YYYY-MM-DD string for N days ago */
function dateNDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

/** Aggregate daily log entries into a summary object for one student.
 *  Field names match exactly what the app writes to Firestore. */
function aggregateEntries(entries) {
  let activeDays  = new Set();
  let totalMins   = 0;
  let totalTests  = 0;

  // Practice question counts
  let varcPracticeQ = 0, dilrPracticeQ = 0, qaPracticeQ = 0;

  // Test question counts (used for accuracy calculation)
  let varcTestQ = 0, dilrTestQ = 0, qaTestQ = 0;
  let varcCorrect = 0, dilrCorrect = 0, qaCorrect = 0;

  for (const e of entries) {
    if (e.date) activeDays.add(e.date);

    // Study minutes across all subjects + speed drills
    totalMins += (e.varcMins       || 0)
               + (e.dilrMins       || 0)
               + (e.qaMins         || 0)
               + (e.speedMath      || 0)
               + (e.flashCards     || 0)
               + (e.formulaPractice|| 0);

    // Tests taken
    totalTests += (e.varcTests || 0) + (e.dilrTests || 0) + (e.qaTests || 0);

    // Practice questions (direct drill)
    varcPracticeQ += (e.varcQuestions || 0);
    dilrPracticeQ += (e.dilrQuestions || 0);
    qaPracticeQ   += (e.qaQuestions   || 0);

    // Test questions covered (for accuracy)
    const vq = e.varcQCovered || 0;
    const dq = e.dilrQCovered || 0;
    const qq = e.qaQCovered   || 0;
    varcTestQ += vq;
    dilrTestQ += dq;
    qaTestQ   += qq;

    // Accuracy stored as 0-100 in Firestore
    varcCorrect += ((e.varcAccuracy || 0) / 100) * vq;
    dilrCorrect += ((e.dilrAccuracy || 0) / 100) * dq;
    qaCorrect   += ((e.qaAccuracy   || 0) / 100) * qq;
  }

  const pct = (correct, total) => total > 0 ? Math.round((correct / total) * 100) : null;
  const totalQ = varcPracticeQ + dilrPracticeQ + qaPracticeQ + varcTestQ + dilrTestQ + qaTestQ;

  return {
    activeDays:    activeDays.size,
    totalMins,
    totalHours:    Math.round(totalMins / 60 * 10) / 10,
    totalQ,
    totalTests,
    varcAcc:       pct(varcCorrect, varcTestQ),
    dilrAcc:       pct(dilrCorrect, dilrTestQ),
    qaAcc:         pct(qaCorrect,   qaTestQ),
    varcQ:         varcPracticeQ + varcTestQ,
    dilrQ:         dilrPracticeQ + dilrTestQ,
    qaQ:           qaPracticeQ   + qaTestQ,
    avgMinsPerDay: activeDays.size > 0 ? Math.round(totalMins / activeDays.size) : 0,
  };
}

/** Day-of-week theme (0=Sun … 6=Sat) */
function getTodayTheme() {
  const themes = {
    0: 'sunday',    // Squad Leaderboard & Competition Awareness
    1: 'monday',    // Weekly Kickoff & Goal Setting
    2: 'tuesday',   // VARC Deep-Dive
    3: 'wednesday', // DILR Deep-Dive
    4: 'thursday',  // QA Deep-Dive
    5: 'friday',    // Practice Quality & Efficiency
    6: 'saturday',  // Habits, Consistency & Mindset
  };
  // Use IST (UTC+5:30)
  const now = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  return themes[now.getUTCDay()];
}

// ─── Prompt Builder ───────────────────────────────────────────────────────────

function buildSystemPrompt(theme) {
  const BASE = `You are a world-class CAT exam coach. Your students are preparing for CAT with the explicit goal of scoring 99+ percentile. You have access to each student's study data for the past 14 days.

Your coaching style:
- BRUTALLY HONEST about weaknesses — don't sugarcoat, name the exact flaw
- DEEPLY INSPIRING — make them believe 99%ile is within reach if they fix this one thing
- CONCISE — max 5 sentences per student. Every word must earn its place.
- PERSONALISED — mention the student's actual numbers, not generic advice
- Use student's first name at the start
- End with one punchy, specific action item for today`;

  const THEMES = {
    monday: `Today's theme: WEEKLY KICKOFF & GOAL SETTING
Focus areas: Overall study consistency over the past week, total hours invested, number of active study days.
Compare their week to what a 99%iler week looks like (~35 hours, 6+ active days, 200+ questions, 3+ mocks).
Set the tone for the week ahead — what is their #1 goal this week?`,

    tuesday: `Today's theme: VARC (Verbal Ability & Reading Comprehension)
Focus areas: VARC accuracy percentage, number of VARC questions attempted.
A 99%iler targets 90%+ accuracy in VARC. Slow readers and those avoiding RC are disqualified.
Call out low VARC accuracy or zero VARC practice. Prescribe a specific daily RC habit.`,

    wednesday: `Today's theme: DILR (Data Interpretation & Logical Reasoning)
Focus areas: DILR accuracy percentage, DILR questions attempted.
DILR is the great differentiator — 99%ilers nail it, mediocre students skip it.
A 99%iler targets 85%+ accuracy. Slow set selection is fatal in CAT DILR.
Identify if they're avoiding DILR (low question count) or struggling with it (low accuracy).`,

    thursday: `Today's theme: QA (Quantitative Ability)
Focus areas: QA accuracy percentage, QA questions attempted.
QA is make-or-break for most engineers. 99%ilers hit 90%+ accuracy with speed.
Low accuracy means concept gaps. Low question count means fear or avoidance. Both are fatal.
Prescribe chapter-specific drills if needed.`,

    friday: `Today's theme: PRACTICE QUALITY & EFFICIENCY
Focus areas: Minutes studied vs questions attempted (questions per hour), number of tests given.
A 99%iler attempts 50+ questions per hour with high accuracy. Low Q/hour = poor time management or weak fundamentals.
Low test count (< 1 test/week) = not benchmarking = flying blind.
Cut right to the inefficiency and prescribe one habit fix.`,

    saturday: `Today's theme: HABITS, CONSISTENCY & MINDSET
Focus areas: Active study days out of 14, average daily study minutes, regularity of logging.
A 99%iler studies 7 days a week without exception. Consistency is the compound interest of CAT prep.
Missing 5+ days in 2 weeks is a red flag. Low daily average (<90 min) is a red flag.
Address the psychological pattern — is it distraction, procrastination, or lack of urgency?`,

    sunday: `Today's theme: SQUAD LEADERBOARD & COMPETITION AWARENESS
Focus areas: How this student compares to the best in the squad across hours, accuracy, and question volume.
Name the top performer(s) explicitly. Make the gap visceral.
CAT is a competition. You don't just need to improve — you need to beat 98 out of 100 candidates nationwide.
Light a fire under the underperformers. Acknowledge top performers and raise the bar for them.`,
  };

  return `${BASE}\n\n${THEMES[theme] || THEMES.monday}`;
}

function buildUserPrompt(theme, students) {
  const lines = students.map(({ name, stats, rank, total }) => {
    const s = stats;
    return `Student: ${name}
  - Active days (last 14): ${s.activeDays}/14
  - Total study: ${s.totalHours}h (avg ${s.avgMinsPerDay} min/day)
  - Questions attempted: ${s.totalQ} (VARC: ${s.varcQ}, DILR: ${s.dilrQ}, QA: ${s.qaQ})
  - Accuracy: VARC ${s.varcAcc !== null ? s.varcAcc + '%' : 'N/A'}, DILR ${s.dilrAcc !== null ? s.dilrAcc + '%' : 'N/A'}, QA ${s.qaAcc !== null ? s.qaAcc + '%' : 'N/A'}
  - Tests given: ${s.totalTests}
  - Squad rank by effort: #${rank} of ${total}`;
  }).join('\n\n');

  return `Here is the 14-day performance data for all students. Write individual coaching feedback for EACH student. Separate each student's feedback with a line containing only "---". Address each student by first name. Be brutal about weaknesses, inspiring about potential.\n\n${lines}`;
}

// ─── Firestore Reader ─────────────────────────────────────────────────────────

async function fetchAllStudentData(db) {
  const startDate = dateNDaysAgo(14);
  const endDate   = dateNDaysAgo(0);

  const snap = await db.collection('dailyLogs')
    .where('date', '>=', startDate)
    .where('date', '<=', endDate)
    .get();

  // Group by student email (Firestore field is 'email', not 'userEmail')
  const byEmail = {};
  for (const doc of snap.docs) {
    const data = doc.data();
    const email = (data.email || '').toLowerCase();
    if (!email) continue;
    if (!byEmail[email]) byEmail[email] = [];
    byEmail[email].push(data);
  }

  return byEmail;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Init Firebase Admin
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Init Anthropic
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const theme = getTodayTheme();
  const nowIST = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const dateStr = nowIST.toISOString().slice(0, 10);
  console.log(`Running coaching for theme: ${theme} (${dateStr} IST)`);

  // Fetch data
  const byEmail = await fetchAllStudentData(db);

  // Build student list with aggregated stats
  const students = Object.entries(EMAIL_TO_NAME).map(([email, name]) => {
    const entries = byEmail[email.toLowerCase()] || [];
    const stats   = aggregateEntries(entries);
    return { email, name, stats };
  });

  // Sort by effort score (hours * active days) for ranking
  const sorted = [...students].sort((a, b) => {
    const scoreA = a.stats.totalHours * a.stats.activeDays;
    const scoreB = b.stats.totalHours * b.stats.activeDays;
    return scoreB - scoreA;
  });
  sorted.forEach((s, i) => { s.rank = i + 1; s.total = sorted.length; });
  students.forEach(s => {
    const found = sorted.find(x => x.email === s.email);
    s.rank  = found.rank;
    s.total = found.total;
  });

  // Generate coaching with Claude
  console.log('Calling Claude API...');
  const message = await anthropic.messages.create({
    model:      'claude-opus-4-6',
    max_tokens: 4096,
    system:     buildSystemPrompt(theme),
    messages: [
      { role: 'user', content: buildUserPrompt(theme, students) }
    ],
  });

  const rawFeedback = message.content[0].text;

  // Build ClickUp message
  const themeLabels = {
    monday:    '📅 WEEKLY KICKOFF',
    tuesday:   '📖 VARC DAY',
    wednesday: '🧩 DILR DAY',
    thursday:  '🔢 QA DAY',
    friday:    '⚡ PRACTICE QUALITY',
    saturday:  '🧠 HABITS & MINDSET',
    sunday:    '🏆 SQUAD LEADERBOARD',
  };

  const header = `*🎯 TIME Madurai – Daily Coaching Report*
*${themeLabels[theme] || 'DAILY COACHING'} | ${dateStr}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;

  const footer = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
_Keep going. 99%ile is earned one session at a time._`;

  const fullMessage = header + rawFeedback + footer;

  // Post to ClickUp
  console.log('Posting to ClickUp...');
  const response = await fetch(
    `${CLICKUP_API_BASE}/workspaces/${CLICKUP_WORKSPACE_ID}/chat/channels/${CLICKUP_CHANNEL_ID}/messages`,
    {
      method:  'POST',
      headers: {
        'Authorization': process.env.CLICKUP_API_KEY,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        content:        fullMessage,
        content_format: 'text/md',
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`ClickUp API error ${response.status}: ${text}`);
  }

  const result = await response.json();
  console.log('Posted successfully. Message ID:', result.id || result.message?.id || 'unknown');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
