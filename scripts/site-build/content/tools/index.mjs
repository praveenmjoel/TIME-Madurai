import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Are these tools a substitute for a counsellor?',
    a: 'No — they\'re a starting point. Every tool here is built from our published cutoff and career data, but a counsellor can factor in things a calculator can\'t: your mock-test trend, your genuine interests, your family\'s financial picture, and the specific choice-filling strategy that turns a shortlist into an actual seat.',
  },
];

export const toolsIndexPage = buildLeafPage({
  slug: 'tools',
  title: 'JEE & NEET Tools: College Predictor & Comparison Calculators | T.I.M.E. Madurai',
  description: 'Interactive tools for JEE and NEET aspirants — a rank/score-based college predictor, plus branch, college, and career comparison calculators.',
  canonical: '/tools/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Tools' }],
  eyebrow: 'interactive tools',
  heroTitle: 'JEE & NEET Tools',
  heroSubtitle: 'Calculators built from our own published cutoff and career data — not generic estimates.',
  stats: [],
  toc: [ { id: 'tools', label: 'The Tools' }, { id: 'faqs', label: 'FAQs' } ],
  sections: [
    {
      id: 'tools',
      eyebrow: 'pick one',
      title: 'Every tool in this hub',
      cards: [
        { title: 'College Predictor', href: '/tools/college-predictor/', blurb: 'Enter your JEE rank or NEET score and category to see realistic college matches.' },
        { title: 'Branch Comparison', href: '/tools/branch-comparison/', blurb: 'Compare any two engineering branches — salary, recruiters, and demand outlook.' },
        { title: 'College Comparison', href: '/tools/college-comparison/', blurb: 'Compare any two institutions — fees, placements, and NIRF ranking.' },
        { title: 'Career Comparison', href: '/tools/career-comparison/', blurb: 'Compare any two career paths — 5-year salary, timeline, and job security.' },
      ],
      cardCols: 2,
    },
  ],
  faqs,
  faqTitle: 'About these tools',
  ctaHeading: 'Want a human to walk through your results with you?',
  ctaSub: 'Book a free counselling session — no pressure, no pitch.',
});
