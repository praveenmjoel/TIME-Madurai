import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why is Multiple Correct MCQ (MCMQ) considered the most dangerous question type?',
    a: 'Because partial marking only applies when you select ALL correct options and zero wrong ones. Choosing even one wrong option — while correctly identifying the others — costs you −2, not partial credit. Only mark an MCMQ question fully if you are genuinely certain about every option.',
  },
  {
    q: 'Should I study Statistics and Probability for JEE Advanced?',
    a: 'Not for Advanced specifically — Statistics, Probability (old style), and Mathematical Reasoning are excluded from JEE Advanced\'s syllabus even though they appear in JEE Main. Keep them sharp for Main, but don\'t spend Advanced-prep time on them once you\'ve qualified.',
  },
];

export const jeeAdvancedExamPage = buildLeafPage({
  slug: 'exams/jee-advanced',
  title: 'JEE Advanced Exam Pattern & Question Types 2026 | T.I.M.E. Madurai',
  description: 'JEE Advanced\'s full question-type breakdown, the MCMQ partial-marking trap, and exactly which topics are excluded from the Advanced syllabus versus JEE Main.',
  canonical: '/exams/jee-advanced/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'JEE Advanced' }],
  eyebrow: 'exam deep-dive',
  heroTitle: 'JEE Advanced: Pattern & Question Types',
  heroSubtitle: 'Unlike JEE Main\'s stable MCQ+NVQ format, Advanced uses four to six different question types per paper — and the pattern changes every single year.',
  stats: [ { value: '2', label: 'Papers, same day' }, { value: '~360', label: 'Total marks (varies by year)' }, { value: '2', label: 'Max attempts allowed' } ],
  toc: [
    { id: 'types', label: 'Question Types' },
    { id: 'vs-main', label: 'Advanced vs. Main' },
    { id: 'exclusions', label: 'Syllabus Exclusions' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'For what rank gets which IIT, see our Engineering Admissions guide. This page covers the exam mechanics — question format and syllabus differences from JEE Main.',
  sections: [
    {
      id: 'types',
      eyebrow: 'no two years alike',
      title: 'JEE Advanced question types',
      table: {
        columns: ['Question type', 'Description', 'Negative marking'],
        rows: [
          ['Single Correct MCQ', '4 options, exactly 1 correct', '+3 / −1'],
          ['Multiple Correct MCQ (MCMQ)', '4 options, ≥1 correct; partial credit only if ALL correct chosen', '+4 full; +1–3 partial; −2 any wrong'],
          ['Numerical Value (NVQ)', 'Enter exact decimal/integer value', '+3 / 0 — no negative'],
          ['Matching List', 'Match items from Column I to Column II', '+3 / −1 (varies by year)'],
          ['Paragraph-based', '2–3 questions on a comprehension passage', 'Varies'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'The MCMQ trap',
        text: 'Multiple Correct MCQ is Advanced\'s most dangerous question type. Partial marking exists only when you select every correct option and none of the wrong ones — a single wrong selection, even alongside correct ones, costs −2. Only attempt an MCMQ fully when you\'re certain about every option.',
      },
    },
    {
      id: 'vs-main',
      eyebrow: 'what changes',
      title: 'JEE Advanced vs. JEE Main',
      table: {
        columns: ['Aspect', 'JEE Main', 'JEE Advanced'],
        rows: [
          ['Question style', 'Straightforward application', 'Conceptual, multi-step, novel problem types'],
          ['Syllabus', 'NCERT-based, well-defined', 'NCERT + beyond; some chapters excluded'],
          ['Pattern consistency', 'Relatively stable', 'Changes every year'],
          ['Time pressure', 'Manageable with practice', 'Severe — most students can\'t attempt everything'],
          ['Physics emphasis', 'Formula application', 'Derivation-level understanding required'],
        ],
      },
    },
    {
      id: 'exclusions',
      eyebrow: 'don\'t waste prep time',
      title: 'Topics excluded from JEE Advanced',
      table: {
        columns: ['Subject', 'Excluded from Advanced (present in Main)'],
        rows: [
          ['Mathematics', 'Statistics, Probability (old style), Mathematical Reasoning, parts of Sets'],
          ['Physics', 'Electronic Devices (Semiconductors), Communication Systems'],
          ['Chemistry', 'Chemistry in Everyday Life, Biomolecules (minor portions), Environmental Chemistry'],
        ],
      },
      note: 'Keep these topics sharp for JEE Main — just don\'t spend Advanced-specific prep time on them once you\'ve qualified.',
    },
  ],
  faqs,
  faqTitle: 'JEE Advanced pattern — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Making the jump from Main-level to Advanced-level thinking?',
  ctaSub: 'A focused test series with honest error analysis makes the difference.',
});
