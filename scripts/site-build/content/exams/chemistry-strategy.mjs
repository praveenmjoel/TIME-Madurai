import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why does Chemistry need three different study approaches?',
    a: 'Because it\'s really three different subjects bundled under one name — Physical Chemistry is numerical and concept-driven, Organic is about recognising mechanisms and patterns, and Inorganic is largely memorisation-based, closely tracking NCERT facts and trends. Treating all three the same way wastes effort.',
  },
  {
    q: 'Is Inorganic Chemistry really just "read NCERT"?',
    a: 'For NEET specifically, yes — questions are frequently direct NCERT statements. For JEE Advanced, you need to go further and understand the exceptions and anomalies in periodic trends, since those are favourite question areas at that level.',
  },
];

export const chemistryStrategyPage = buildLeafPage({
  slug: 'exams/chemistry-strategy',
  title: 'Chemistry Preparation Strategy for JEE & NEET | T.I.M.E. Madurai',
  description: 'Why Physical, Organic, and Inorganic Chemistry each need a different study approach, with the recommended resources for each sub-division.',
  canonical: '/exams/chemistry-strategy/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'Chemistry Strategy' }],
  eyebrow: 'subject strategy',
  heroTitle: 'Chemistry: Three Subjects in One',
  heroSubtitle: 'Physical (numericals), Organic (mechanisms and pattern recognition), and Inorganic (facts and NCERT) each need a genuinely different approach.',
  stats: [],
  toc: [
    { id: 'subdivisions', label: 'The Three Sub-Divisions' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Students who study Chemistry as one undifferentiated subject tend to under-prepare at least one of these three areas — treat each with its own method.',
  sections: [
    {
      id: 'subdivisions',
      title: 'A different approach for each division',
      table: {
        columns: ['Sub-division', 'Approach', 'Key resources'],
        rows: [
          ['Physical Chemistry', 'Understand concepts; practise numericals daily — master Mole Concept, Electrochemistry, Chemical Kinetics', 'NCERT + N Avasthi (JEE) or VK Jaiswal'],
          ['Organic Chemistry', 'Learn mechanisms, not reactions by rote — draw each mechanism, identify functional groups', 'NCERT + MS Chouhan (JEE) or Morrison &amp; Boyd (advanced)'],
          ['Inorganic Chemistry', 'Read NCERT line by line, make notes, revise 3× before the exam — trends matter most', 'NCERT is primary; JD Lee for JEE Advanced supplement'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The NCERT rule for Inorganic',
        text: 'For NEET: simply read NCERT Inorganic Chemistry three times — questions are frequently direct NCERT statements. For JEE Advanced: go further and understand the exceptions and anomalies in periodic trends, since those are favourite question areas at that level.',
      },
    },
  ],
  faqs,
  faqTitle: 'Chemistry strategy — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Struggling to balance all three Chemistry divisions?',
  ctaSub: 'A structured weekly split keeps every division moving.',
});
