import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the "Rule of 4" for negative marking?',
    a: 'In +4/−1 marking, you need to be right at least 1 in 4 times to break even. If you can eliminate even one wrong option, your odds improve from 25% to 33% — which statistically makes the question worth attempting. Below that confidence level, it\'s better to skip.',
  },
  {
    q: 'Why is OMR discipline specifically emphasised for NEET?',
    a: 'Because NEET is pen-and-paper — a misfilled bubble cannot be corrected with correction fluid and may be rejected outright. Many students have lost rank simply by filling Column B answers into Column A slots. Check your OMR alignment every 10 questions, not just at the end.',
  },
];

export const examDayStrategyPage = buildLeafPage({
  slug: 'exams/exam-day-strategy',
  title: 'JEE Main & NEET Exam-Day Strategy: Attempt Order & Timing | T.I.M.E. Madurai',
  description: 'The optimal question attempt order for JEE Main and NEET, negative-marking decision rules by confidence level, and NEET-specific OMR discipline.',
  canonical: '/exams/exam-day-strategy/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'Exam-Day Strategy' }],
  eyebrow: 'on the day itself',
  heroTitle: 'Exam-Day Strategy',
  heroSubtitle: 'The same preparation can produce very different scores depending on attempt order and negative-marking discipline. Here\'s the playbook.',
  stats: [],
  toc: [
    { id: 'jee-order', label: 'JEE Main Attempt Order' },
    { id: 'neet-order', label: 'NEET Attempt Order' },
    { id: 'negative', label: 'Negative Marking Rules' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Both exams reward a deliberate sequence over answering questions in paper order — here\'s the approach that consistently works.',
  sections: [
    {
      id: 'jee-order',
      eyebrow: 'computer-based, 3 hours',
      title: 'JEE Main — optimal attempt order',
      table: {
        columns: ['Step', 'Action', 'Time allocation'],
        rows: [
          ['1', 'Scan all 3 subjects quickly — identify easy questions everywhere', '5 minutes'],
          ['2', 'Attempt all easy MCQs first (&lt;1.5 min each)', '45 minutes'],
          ['3', 'Attempt NVQs you\'re confident about (no negative marking)', '20 minutes'],
          ['4', 'Return to medium-difficulty MCQs', '50 minutes'],
          ['5', 'Attempt remaining NVQs (educated guess — no penalty)', '15 minutes'],
          ['6', 'Review flagged questions', '25 minutes'],
        ],
      },
      note: 'Target: attempt 65–70 of the 90 available questions, well within the 75-question limit.',
    },
    {
      id: 'neet-order',
      eyebrow: 'pen-and-paper, 3h20m',
      title: 'NEET — optimal attempt order',
      table: {
        columns: ['Subject', 'Suggested time', 'Strategy'],
        rows: [
          ['Biology (Botany + Zoology)', '50–55 min', 'Attempt all 90 questions — fastest section if NCERT is strong'],
          ['Chemistry', '40–45 min', 'Physical first (numericals while fresh), then Organic, then Inorganic (fact-based, end of paper)'],
          ['Physics', '50–55 min', 'Most time-consuming — attempt easy formulas first, skip lengthy derivations, return later'],
          ['Buffer + review', '20 min', 'Check OMR bubbling; verify attempted/not-attempted count'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'OMR discipline is non-negotiable',
        text: 'In NEET, a misfilled OMR bubble cannot be corrected — it may be rejected entirely. Double-check every 10 questions, not just at the end. Many students have lost rank simply by filling Column B answers into Column A slots.',
      },
    },
    {
      id: 'negative',
      eyebrow: 'when to attempt, when to skip',
      title: 'Negative marking decision rules',
      table: {
        columns: ['Confidence level', 'JEE Main MCQ', 'NEET', 'JEE Advanced MCMQ'],
        rows: [
          ['&gt;90% confident', 'Attempt — strong +4 gain', 'Attempt — +4 gain', 'Mark all correct options'],
          ['60–90% confident', 'Attempt (accept occasional −1)', 'Attempt — expected value positive', 'Only if ALL correct options known'],
          ['40–60% confident', 'Skip MCQ; try the NVQ version instead', 'Skip — −1 risk not worth it', 'Skip entirely — −2 is brutal'],
          ['&lt;40% confident', 'Skip MCQ; NVQ has no penalty', 'Skip', 'Skip'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The Rule of 4',
        text: 'You need to be right at least 1 in 4 times to break even under +4/−1 marking. Eliminate even one wrong option and your odds jump from 25% to 33% — statistically worth attempting at that point.',
      },
    },
  ],
  faqs,
  faqTitle: 'Exam-day strategy — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Want to practice this attempt order under real time pressure?',
  ctaSub: 'A full-length mock under exam conditions is the only real test of a strategy.',
});
