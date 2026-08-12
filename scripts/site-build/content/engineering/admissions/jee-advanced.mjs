import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How many students actually qualify JEE Advanced?',
    a: 'Only the top 2.5 lakh JEE Main candidates (category-wise) are even eligible to appear. Of those, roughly 17,000–18,000 qualify, and about 16,000 actually get an IIT seat through JoSAA — a small fraction of the ~12 lakh who clear the JEE Main cutoff in the first place.',
  },
  {
    q: 'Why do toppers score only 55–65% of the total marks?',
    a: 'That\'s simply how hard the paper is calibrated to be — the "surprise factor" is intentionally high, unlike JEE Main\'s relatively stable, predictable pattern. The exam tests conceptual depth over speed, and questions often require combining three or four concepts at once, so scoring even 55–65% represents excellent performance.',
  },
];

export const jeeAdvancedPage = buildLeafPage({
  slug: 'engineering/admissions/jee-advanced',
  title: 'JEE Advanced 2026: Pattern, Rank-to-IIT Mapping & Prep Strategy | T.I.M.E. Madurai',
  description: 'JEE Advanced exam pattern, how it differs from JEE Main, what rank gets which IIT, and what preparation actually needs to change for Advanced-level questions.',
  canonical: '/engineering/admissions/jee-advanced/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions', href: '/engineering/admissions/' }, { label: 'JEE Advanced' }],
  eyebrow: 'entrance exam',
  heroTitle: 'JEE Advanced',
  heroSubtitle: 'The gateway to all 23 IITs and IISc — widely considered one of the hardest undergraduate entrance exams in the world.',
  stats: [
    { value: '2.5L', label: 'Eligible from JEE Main' },
    { value: '~17K', label: 'Actually qualify' },
    { value: '2', label: 'Max attempts allowed' },
  ],
  toc: [
    { id: 'vs-main', label: 'Advanced vs. Main' },
    { id: 'ranks', label: 'What Rank Gets Which IIT' },
    { id: 'prep', label: 'What Prep Changes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Only the top 2.5 lakh JEE Main candidates by category-wise rank are eligible to even appear. The exam is used exclusively for IIT/IISc admission — not for NITs.',
  sections: [
    {
      id: 'vs-main',
      eyebrow: 'know the difference',
      title: 'JEE Advanced vs. JEE Main',
      table: {
        columns: ['Dimension', 'JEE Main', 'JEE Advanced'],
        rows: [
          ['Purpose', 'NITs, IIITs, CFTIs + Advanced qualifier', 'IITs and IISc only'],
          ['Difficulty', 'High — speed and accuracy', 'Very high — depth, multi-concept thinking'],
          ['Question types', 'Mostly MCQ + numerical', 'Complex MCQ, multi-correct, integer, match'],
          ['Pattern stability', 'Relatively stable year to year', 'Changes every year — highly unpredictable'],
          ['Attempts', 'Up to 3 years × 2 sessions', '2 attempts, consecutive years only'],
        ],
      },
    },
    {
      id: 'ranks',
      eyebrow: 'the question everyone asks',
      title: 'What rank gets which IIT?',
      table: {
        columns: ['IIT + branch', 'Approx. closing rank (Gen, 2024)'],
        rows: [
          ['IIT Bombay — CSE', '~70'],
          ['IIT Delhi — CSE', '~90'],
          ['IIT Madras — CSE', '~125'],
          ['IIT Kanpur — CSE', '~350'],
          ['IIT Bombay — Electrical Engg', '~300'],
          ['IIT Madras — Mechanical', '~2,000'],
          ['New IITs (Roorkee, BHU, etc.) — CSE', '~3,000–5,000'],
          ['New IITs — other branches', '~5,000–15,000'],
        ],
      },
      note: 'Source: JoSAA 2024 indicative opening/closing ranks. Always verify current-year data at josaa.nic.in.',
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'IIT Madras is the natural first choice for most qualifying TN students — being in Chennai, it has the largest TN student community of any IIT. Its Aerospace, Chemical, Civil, and Mechanical programmes are world-class even beyond CSE/ECE.',
      },
    },
    {
      id: 'prep',
      eyebrow: 'beyond jee main prep',
      title: 'What preparation needs to change',
      table: {
        columns: ['Focus area', 'What to do'],
        rows: [
          ['Conceptual depth', 'Practice questions that combine 3–4 concepts, not single-formula application'],
          ['Previous year papers', 'Solve JEE Advanced papers from 2007 onward — the thinking style is consistent even as format shifts'],
          ['Test series discipline', 'Stick to 1–2 quality series and go deeper, not wider — over-coaching across many series dilutes focus'],
          ['Error analysis', 'Score matters less than understanding why every wrong answer was wrong'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'A student who clears JEE Main with a great rank but underperforms in Advanced ends up with NIT options only — no IIT seat. Preparation must explicitly cover deeper, multi-concept problems beyond what JEE Main requires, not just more of the same practice.',
      },
    },
  ],
  faqs,
  faqTitle: 'JEE Advanced — quick answers',
  backLink: { label: 'all entrance exams', href: '/engineering/admissions/' },
  ctaHeading: 'Making the jump from JEE Main prep to Advanced-level thinking?',
  ctaSub: 'A focused test series with honest error analysis makes the difference.',
});
