import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How many mock tests should I actually take before the real exam?',
    a: 'Weekly full-length mocks under real exam conditions, starting at least six months out — roughly 20–30 mocks minimum. Frequency matters less than what you do with each one afterward: without error analysis, a mock is just practice, not a diagnostic.',
  },
  {
    q: 'What should I actually do with a mock test once it\'s scored?',
    a: 'Categorise every wrong answer — silly mistake, conceptual gap, time pressure, or simply not studied — and log conceptual errors into a dedicated error book with the correct solution, within 24 hours. Any chapter with more than 2 errors in a single mock should get immediate re-revision before your next mock.',
  },
];

export const mockTestAnalysisPage = buildLeafPage({
  slug: 'exams/mock-test-analysis',
  title: 'Mock Test Analysis Protocol for JEE & NEET | T.I.M.E. Madurai',
  description: 'How to turn every mock test into a targeted revision plan — error categorisation, an error book, and progress tracking that actually improves rank.',
  canonical: '/exams/mock-test-analysis/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'Mock Test Analysis' }],
  eyebrow: 'the highest-leverage habit',
  heroTitle: 'Mock Test Analysis Protocol',
  heroSubtitle: 'Mock tests aren\'t just practice — they\'re data. A mock without structured analysis afterward is a wasted three hours.',
  stats: [ { value: '20–30', label: 'Minimum mocks recommended' }, { value: '24h', label: 'Window to update your error book' } ],
  toc: [
    { id: 'protocol', label: 'The Analysis Protocol' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Every mock test should generate actionable insight, not just a score to feel good or bad about.',
  sections: [
    {
      id: 'protocol',
      title: 'The full protocol, step by step',
      table: {
        columns: ['Step', 'Action', 'Frequency'],
        rows: [
          ['Take under real conditions', 'Full 3-hour test, no breaks, phone off, at the same time of day as your actual exam', 'Weekly, from 6 months before exam'],
          ['Score analysis', 'Calculate raw score; identify which chapters generated the most errors', 'Same day, after the mock'],
          ['Error categorisation', 'Log each wrong answer as: silly mistake / conceptual gap / time pressure / not studied', 'After every mock'],
          ['Error book update', 'Add conceptual errors to a dedicated Error Book with the correct solution', 'Within 24 hours'],
          ['Revision trigger', 'Any chapter with &gt;2 errors in a mock gets immediate re-revision', 'Before the next mock'],
          ['Progress tracking', 'Plot your score trend over time — look for the upward trend, not single-mock fluctuations', 'Monthly'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TIME UG (Knowledge Hive, Madurai) schedules All-India Test Series mocks that simulate JEE Main, JEE Advanced, and NEET conditions with genuine All-India ranking — far more valuable for calibration than centre-level tests alone, since they show where you actually stand against students across the country.',
      },
    },
  ],
  faqs,
  faqTitle: 'Mock test analysis — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Want to sit a full-length mock with a real chapter-wise error report?',
  ctaSub: 'A structured mock series beats scattered self-testing.',
});
