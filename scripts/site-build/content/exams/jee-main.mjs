import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the difference between my "raw score" and my "NTA Score"?',
    a: 'Your raw score is your actual marks out of 300. Your NTA Score is a percentile — the percentage of candidates in your specific session who scored equal to or less than you. Because JEE Main runs across multiple sessions and shifts, NTA uses this normalisation so scores are comparable across different papers. Your final rank uses the better of your two sessions\' NTA scores.',
  },
  {
    q: 'Should I attempt all 10 Numerical Value Questions per subject?',
    a: 'Yes, if you have even moderate confidence — NVQs have no negative marking, so the worst outcome for a wrong attempt is zero, never a penalty. This makes them strategically the safest place to take an educated guess.',
  },
];

export const jeeMainExamPage = buildLeafPage({
  slug: 'exams/jee-main',
  title: 'JEE Main Exam Pattern & Syllabus Weightage 2026 | T.I.M.E. Madurai',
  description: 'The complete JEE Main pattern, marking scheme, and chapter-by-chapter syllabus weightage for Physics, Chemistry, and Maths — plus how NTA percentile scoring actually works.',
  canonical: '/exams/jee-main/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'JEE Main' }],
  eyebrow: 'exam deep-dive',
  heroTitle: 'JEE Main: Pattern & Syllabus Weightage',
  heroSubtitle: 'Two sessions, 300 marks, NCERT-based — but which chapters actually carry the most marks? Here\'s the historical breakdown by subject.',
  stats: [ { value: '300', label: 'Total marks' }, { value: '75/90', label: 'Questions attempted' }, { value: '2', label: 'Sessions per year' } ],
  toc: [
    { id: 'pattern', label: 'Pattern & Marking' },
    { id: 'weightage', label: 'Chapter Weightage' },
    { id: 'nta', label: 'NTA Score vs. Raw Score' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'For the score-to-college mapping (what rank gets you where), see our Engineering Admissions guide. This page is the exam mechanics — pattern, marking, and exactly which chapters to prioritise.',
  sections: [
    {
      id: 'pattern',
      eyebrow: 'the mechanics',
      title: 'Section-wise pattern (Paper 1, B.E./B.Tech)',
      table: {
        columns: ['Subject', 'Section A (MCQ)', 'Section B (NVQ)', 'Marks'],
        rows: [
          ['Physics', '20 MCQs (−1 wrong)', '10 NVQs (any 5, no negative)', '100'],
          ['Chemistry', '20 MCQs (−1 wrong)', '10 NVQs (any 5, no negative)', '100'],
          ['Mathematics', '20 MCQs (−1 wrong)', '10 NVQs (any 5, no negative)', '100'],
        ],
      },
      note: 'Duration: 3 hours (3h20m for PwD). MCQ marking: +4 correct, −1 wrong. NVQ marking: +4 correct, 0 wrong/unattempted — no negative marking at all in Section B.',
    },
    {
      id: 'weightage',
      eyebrow: '2019–2024 question analysis',
      title: 'Where the marks actually come from',
      table: {
        columns: ['Subject', 'Highest-weight chapters', 'Approx. marks share'],
        rows: [
          ['Physics', 'Mechanics (Kinematics, NLM, WEP)', '12–16 marks'],
          ['Physics', 'Electrostatics, Current Electricity, Magnetism, Modern Physics', '8–12 marks each'],
          ['Chemistry', 'Organic Chemistry (named reactions, mechanisms)', '20–24 marks'],
          ['Chemistry', 'Coordination Compounds, p-Block, Equilibrium', '8–12 marks each'],
          ['Mathematics', 'Coordinate Geometry (full)', '20–24 marks'],
          ['Mathematics', 'Calculus (limits, differentiation, integration)', '20–24 marks'],
          ['Mathematics', 'Algebra (matrices, determinants, complex numbers)', '12–16 marks'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'JEE Main syllabus aligns roughly 85% with the TN HSC syllabus. The gaps: Permutations &amp; Combinations and Binomial Theorem go deeper in JEE than TN board, and Inorganic Chemistry needs more NCERT detail than the TN textbook provides. Use NCERT as your primary Chemistry text from day one — the TN textbook alone isn\'t sufficient for Inorganic.',
      },
    },
    {
      id: 'nta',
      eyebrow: 'a common confusion',
      title: 'NTA Score vs. raw score',
      table: {
        columns: ['Term', 'Meaning'],
        rows: [
          ['Raw score', 'Your actual marks out of 300'],
          ['NTA Score / percentile', 'Percentage of candidates who scored equal to or less than you, in your session'],
          ['All-India Rank (AIR)', 'Derived from the merged percentile of both sessions — lower rank is better'],
          ['Which score counts?', 'The better of your Session 1 and Session 2 NTA scores'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'Don\'t skip Session 1 assuming you\'ll do better in Session 2. Session 1 often has a slightly less competitive pool, which can yield a higher percentile even for the same raw score. Always appear in both sessions — there\'s no downside.',
      },
    },
  ],
  faqs,
  faqTitle: 'JEE Main pattern — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Want a chapter-wise study plan built around this weightage?',
  ctaSub: 'A structured plan beats studying every chapter equally.',
});
