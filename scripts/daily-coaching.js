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
  const BASE = `You are a world-class CAT exam coach. Your students are preparing for CAT with the explicit goal of scoring 99+ percentile. You have access to each student's study data for the past 14 days.

Your coaching style:
- BRUTALLY HONEST about weaknesses. Don't sugarcoat. Name the exact flaw.
- DEEPLY INSPIRING. Make them believe 99%ile is within reach if they fix this one thing.
- CONCISE. Max 5 sentences per student. Every word must earn its place.
- PERSONALISED. Mention the student's actual numbers, not generic advice.
- CRITICAL: Do NOT begin your feedback with the student's name under any circumstances. Not as a standalone word, not as the start of a sentence, not mid-opening line. The message already starts with "Good Morning [Name]," — your feedback picks up from the second paragraph. Begin directly with a verb, observation, or number.
- End with one punchy, specific action item for today.
- Write like a real human coach speaking directly to the student. Warm but no-nonsense.
- NEVER use em dashes (the — character). Use commas, full stops, or colons instead.
- NEVER use bullet points or numbered lists inside individual feedback. Flowing prose only.
- Avoid stiff, corporate or AI-sounding phrasing. Keep it natural and conversational.
- IMPORTANT: You do NOT have access to mock CAT test data. The "tests given" field is sectional practice tests only (VARC/DILR/QA mini-tests), not full mock CAT exams. NEVER mention mocks, NEVER recommend taking a mock, NEVER comment on mock frequency.
- When previous coaching history is provided, reference it accurately. Use the exact date gap: "yesterday", "two days ago", etc. NEVER say "last week", "repeatedly", "weeks of flagging", or imply a long history unless the data actually shows it. If there is only one previous message, that is ONE message. Do not fabricate a pattern that does not exist in the data.
- CAT SCORING FACTS you must know before making any claims about accuracy: correct MCQ = +3 marks, wrong MCQ = -1 mark. Break-even accuracy is 25% (1 correct offsets 3 wrongs). Any accuracy above 25% is net positive. NEVER say low accuracy "wipes out" marks or causes a "net-zero or negative section" unless the student's accuracy is genuinely below 25%. Do not invent or misstate scoring logic.`;

  const THEMES = {
    monday: `Today's theme: WEEKLY KICKOFF & GOAL SETTING
Focus areas: Overall study consistency over the past week, total hours invested, number of active study days.
Compare their week to what a 99%iler week looks like (~35 hours, 6+ active days, 200+ questions).
Set the tone for the week ahead. What is their #1 priority this week?`,

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
Focus areas: Minutes studied vs questions attempted (questions per hour), sectional test count.
A 99%iler attempts 50+ questions per hour with high accuracy. Low Q/hour = poor time management or weak fundamentals.
Low sectional test count means not enough benchmarking of individual sections.
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

  return `Here is the 14-day performance data for all students, along with their previous coaching history where available.

Write individual coaching feedback for EACH student. Separate each student's feedback with a line containing only "---".

Do NOT start any feedback with the student's name. Each message already has "Good Morning [Name]," prepended — your feedback begins in the next paragraph, starting directly with a verb or observation. Be brutal about weaknesses, inspiring about potential.

IMPORTANT — when previous coaching exists for a student:
- Explicitly reference what was flagged before. Did they act on it or ignore it?
- If they improved, acknowledge it specifically and raise the bar.
- If nothing changed, call it out directly. Name the pattern. Make the accountability real.
- Do not repeat generic advice that was already given. Build on the history.\n\n${lines}`;
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
