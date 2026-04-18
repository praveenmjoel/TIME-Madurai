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

const CLICKUP_WORKSPACE_ID = '9016591512';
const CLICKUP_API_BASE     = 'https://api.clickup.com/api/v3';

// Students to coach (email → display name)
const EMAIL_TO_NAME = {
  'philipephraim2004@gmail.com':    'Philip Ephraim',
  'rokininavaneeth@gmail.com':      'Rokini',
  'aravindc20712@gmail.com':        'Aravind C',
  'anushuyakumar2006@gmail.com':    'Anushuya V.K',
  'niranjanaa3105007@gmail.com':    'Niranjanaa',
  'riajoyin@gmail.com':             'Joy Maria Varsha',
  'sandhyasrinivasan1908@gmail.com':'Sandhya',
  'keerthypriya16102002@gmail.com': 'Keerthypriya',
  'jenanii286@gmail.com':           'Jenani I',
  'divyaamu2004@gmail.com':         'Dhivya Dharshinii',
  'rishirko1924@gmail.com':         'Rishi Kumar',
};

// First name only — used when addressing students in coaching messages
const EMAIL_TO_FIRST_NAME = {
  'philipephraim2004@gmail.com':    'Philip',
  'rokininavaneeth@gmail.com':      'Rokini',
  'aravindc20712@gmail.com':        'Aravind',
  'anushuyakumar2006@gmail.com':    'Anushuya',
  'niranjanaa3105007@gmail.com':    'Niranjanaa',
  'riajoyin@gmail.com':             'Joy',
  'sandhyasrinivasan1908@gmail.com':'Sandhya',
  'keerthypriya16102002@gmail.com': 'Keerthypriya',
  'jenanii286@gmail.com':           'Jenani',
  'divyaamu2004@gmail.com':         'Dhivya',
  'rishirko1924@gmail.com':         'Rishi',
};

// ClickUp DM channel IDs (one per student, hardcoded after manual creation)
const EMAIL_TO_DM_CHANNEL = {
  'philipephraim2004@gmail.com':    '8cpwh4r-27656',
  'rokininavaneeth@gmail.com':      '8cpwh4r-27696',
  'aravindc20712@gmail.com':        '8cpwh4r-27576',
  'anushuyakumar2006@gmail.com':    '8cpwh4r-27556',
  'niranjanaa3105007@gmail.com':    '8cpwh4r-27536',
  'riajoyin@gmail.com':             '8cpwh4r-26456',
  'sandhyasrinivasan1908@gmail.com':'8cpwh4r-27716',
  'keerthypriya16102002@gmail.com': '8cpwh4r-27636',
  'jenanii286@gmail.com':           '8cpwh4r-27616',
  'divyaamu2004@gmail.com':         '8cpwh4r-27596',
  'rishirko1924@gmail.com':         '8cpwh4r-27676',
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
  const BASE = `You are a high-performance CAT coach. Think: the kind of coach who trains Olympic athletes or top sports teams. Direct, human, no fluff. Your students are targeting 99+ percentile in CAT.

VOICE AND STYLE:
Write the way a real coach talks to a student they genuinely care about, not the way a data analyst writes a report. One sharp observation. One emotional beat. One action. That's it.
- Max 4 sentences. Every sentence must earn its place.
- Use AT MOST one specific number in the entire message — the one that matters most. Do not recite stats. Do not perform arithmetic. Do not quote formulas.
- No lists. Flowing prose only.
- No em dashes (the — character). Use commas, full stops, or colons.
- Warm but brutally honest. Name the exact flaw or the exact win. Never vague.
- End with one specific, concrete action for today. Not "study more" — a precise task with a time and a topic.

CRITICAL — NAME RULE: Your response is appended after "Good Morning [Name],\n\n". The very first word of your response MUST NOT be the student's name. Wrong: "Rokini\n\n..." or "Rokini, you...". Correct: "Fourteen active days..." or "That 89% accuracy...". Start with a number, a verb, or an observation — never the name.

HISTORY RULE: When previous coaching is provided, use the exact date label (yesterday, two days ago). Never fabricate a pattern. One previous message = one data point, not a trend.

CAT SCORING FACTS: correct MCQ = +3, wrong = -1. Break-even accuracy is 25%. Never say accuracy below 50% "wipes out marks" — that's wrong. Only accuracy below 25% is net negative.

N/A DATA RULE: If a section shows N/A accuracy, say "accuracy isn't being recorded yet for that section" — never write "N/A" in the message.

TESTS FIELD: "Tests given" = sectional practice tests only, not full CAT mocks. Never mention mocks or recommend taking one.`;

  const THEMES = {
    monday: `Theme: WEEKLY RESET
Look at the past week as a whole. Did they show up consistently? Is their study time actually growing, shrinking, or flat?
Coach the trajectory, not the numbers. Is this person building momentum or drifting? Set one clear priority for the week ahead.`,

    tuesday: `Theme: VARC
What's the story with their reading comprehension practice? Strong accuracy but low volume means they're playing it safe. Low accuracy means they're guessing. Zero practice means they're avoiding it entirely.
Speak to the specific pattern you see. Give one targeted habit to fix it today.`,

    wednesday: `Theme: DILR
DILR separates the top 1% from everyone else. Are they engaging with it or running from it?
Low question count = avoidance. Low accuracy = weak set-reading. Both have different fixes.
Cut to the real issue and give one concrete drill for today.`,

    thursday: `Theme: QA
Is their QA accuracy strong but volume low, or is accuracy the problem?
Low accuracy = concept gap, identify the chapter if possible. Low volume = fear or avoidance.
Be direct. Give one specific chapter or problem type to work on today.`,

    friday: `Theme: PRACTICE QUALITY
Are they spending time studying, or just time sitting with books? The key question: how many problems are they actually solving per session?
If volume is very low relative to hours, something is wrong — theory without solving, or stuck on problems without moving on. Don't mention a questions-per-hour figure. Just name the behaviour you see.
Give one habit adjustment that would immediately change the quality of their next session.`,

    saturday: `Theme: CONSISTENCY
Look at their active days and daily average. Consistency is everything at this stage of prep.
Are they showing up every day or disappearing for stretches? Speak to the pattern honestly.
One sentence of acknowledgement if they're consistent. One sharp call-out if they're not. Then one simple commitment for next week.`,

    sunday: `Theme: COMPETITION
CAT is relative. They need to beat 98 out of 100 people nationally.
Look at where this student sits in the squad. If they're ahead, raise the bar. If they're behind, make the gap real without crushing them.
One line that reminds them this is a race, not a personal project.`,
  };

  return `${BASE}\n\n${THEMES[theme] || THEMES.monday}`;
}

function buildUserPrompt(theme, students) {
  const lines = students.map(({ firstName, stats, rank, total, previousReports }) => {
    const s = stats;

    // Build previous coaching context if available
    let historySection = '';
    if (previousReports && previousReports.length > 0) {
      const todayIST = new Date(Date.now() + 5.5 * 60 * 60 * 1000).toISOString().slice(0, 10);
      const history = previousReports.map(r => {
        const msAgo   = new Date(todayIST).getTime() - new Date(r.date).getTime();
        const daysAgo = Math.round(msAgo / (1000 * 60 * 60 * 24));
        const label   = daysAgo === 0 ? 'today (earlier)'
                      : daysAgo === 1 ? 'yesterday'
                      : `${daysAgo} days ago`;
        return `  [${r.date} – ${label} – ${r.theme}]: ${r.message}`;
      }).join('\n');
      historySection = `\n  Previous coaching (newest first):\n${history}`;
    }

    return `Student: ${firstName}
  - Active days (last 14): ${s.activeDays}/14
  - Total study: ${s.totalHours}h (avg ${s.avgMinsPerDay} min/day)
  - Questions attempted: ${s.totalQ} (VARC: ${s.varcQ}, DILR: ${s.dilrQ}, QA: ${s.qaQ})
  - Accuracy: VARC ${s.varcAcc !== null ? s.varcAcc + '%' : 'N/A'}, DILR ${s.dilrAcc !== null ? s.dilrAcc + '%' : 'N/A'}, QA ${s.qaAcc !== null ? s.qaAcc + '%' : 'N/A'}
  - Tests given: ${s.totalTests}
  - Squad rank by effort: #${rank} of ${total}${historySection}`;
  }).join('\n\n');

  return `Here is the 14-day data for each student. Write one coaching message per student. Separate messages with a line containing only "---".

Remember: you are a coach, not a data analyst. Read the numbers to understand what's happening, then speak to the person — not the spreadsheet. Do not recite stats back at them. Use at most one number in the message.

Do NOT start any message with the student's name.

When previous coaching exists: did they act on it? If yes, acknowledge it and raise the bar. If no, name it plainly and hold them accountable. Build on history — never repeat the same advice from the previous session.\n\n${lines}`;
}

// ─── Firestore Readers / Writers ──────────────────────────────────────────────

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

/** Fetch the last `limit` coaching reports for a student, newest first */
async function fetchPreviousReports(db, email, limit = 3) {
  const snap = await db.collection('coachingReports')
    .where('email', '==', email.toLowerCase())
    .orderBy('date', 'desc')
    .limit(limit)
    .get();

  return snap.docs.map(d => d.data());
}

/** Save a coaching report to Firestore after it is sent */
async function saveCoachingReport(db, email, date, theme, message, stats) {
  const docId = email.replace(/[^a-z0-9]/gi, '_') + '__' + date;
  await db.collection('coachingReports').doc(docId).set({
    email:   email.toLowerCase(),
    date,
    theme,
    message,
    stats,
    savedAt: new Date().toISOString(),
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Init Firebase Admin
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Init Anthropic
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Sync API key to Firestore so the browser admin panel can use it without manual entry
  await db.collection('config').doc('secrets').set(
    { anthropicApiKey: process.env.ANTHROPIC_API_KEY },
    { merge: true }
  );

  const theme = getTodayTheme();
  const nowIST = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const dateStr = nowIST.toISOString().slice(0, 10);
  console.log(`Running coaching for theme: ${theme} (${dateStr} IST)`);

  // ── Idempotency check ──────────────────────────────────────────────────────
  // If any coaching report already exists for today, skip entirely.
  // This prevents backup cron schedules from sending duplicate messages.
  const alreadySent = await db.collection('coachingReports')
    .where('date', '==', dateStr)
    .limit(1)
    .get();
  if (!alreadySent.empty) {
    console.log(`Coaching already sent for ${dateStr}. Skipping.`);
    return;
  }

  // Fetch data
  const byEmail = await fetchAllStudentData(db);

  // Build student list with aggregated stats + previous coaching history
  const students = await Promise.all(
    Object.entries(EMAIL_TO_NAME).map(async ([email, name]) => {
      const entries         = byEmail[email.toLowerCase()] || [];
      const stats           = aggregateEntries(entries);
      const firstName       = EMAIL_TO_FIRST_NAME[email.toLowerCase()] || name.split(' ')[0];
      const previousReports = await fetchPreviousReports(db, email, 3);
      return { email, name, firstName, stats, previousReports };
    })
  );

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

  // Split into per-student sections (separated by ---)
  const feedbackBlocks = rawFeedback
    .split(/^---$/m)
    .map(b => b.trim())
    .filter(b => b.length > 0);

  // Theme label for the DM header
  const themeLabels = {
    monday:    '📅 Weekly Kickoff',
    tuesday:   '📖 VARC Day',
    wednesday: '🧩 DILR Day',
    thursday:  '🔢 QA Day',
    friday:    '⚡ Practice Quality',
    saturday:  '🧠 Habits & Mindset',
    sunday:    '🏆 Squad Leaderboard',
  };
  const themeLabel = themeLabels[theme] || 'Daily Coaching';

  // Helper: post a message to a channel
  async function postToChannel(channelId, content) {
    const res = await fetch(
      `${CLICKUP_API_BASE}/workspaces/${CLICKUP_WORKSPACE_ID}/chat/channels/${channelId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': process.env.CLICKUP_API_KEY,
          'Content-Type':  'application/json',
        },
        body: JSON.stringify({ content, content_format: 'text/md' }),
      }
    );
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to post to channel ${channelId}: ${res.status} ${text}`);
    }
    return res.json();
  }

  // Send individual DMs
  console.log(`Sending ${feedbackBlocks.length} individual DMs...`);
  let sent = 0, failed = 0;

  for (let i = 0; i < students.length; i++) {
    const student   = students[i];
    const feedback  = feedbackBlocks[i];
    const channelId = EMAIL_TO_DM_CHANNEL[student.email.toLowerCase()];

    if (!channelId) {
      console.warn(`No DM channel for ${student.name} (${student.email}), skipping.`);
      failed++;
      continue;
    }
    if (!feedback) {
      console.warn(`No feedback block for ${student.name}, skipping.`);
      failed++;
      continue;
    }

    try {
      const dmContent = `Good Morning ${student.firstName},\n\n${feedback}`;
      await postToChannel(channelId, dmContent);
      // Save report to Firestore for future cross-referencing
      await saveCoachingReport(db, student.email, dateStr, theme, feedback, student.stats);
      console.log(`Sent to ${student.name}`);
      sent++;
    } catch (err) {
      console.error(`Failed for ${student.name}: ${err.message}`);
      failed++;
    }
  }

  console.log(`Done. Sent: ${sent}, Failed: ${failed}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
