import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'Should I drop a year for JEE/NEET?', a: 'A drop year makes sense if: (1) your previous year score was within 15–20 percentile/marks of your target, suggesting realistic improvement potential; (2) you have a clear preparation plan that differs from last year; (3) you\'re mentally prepared for the isolation and pressure of a repeat year. It does NOT make sense if the gap was a fundamental knowledge/foundation problem rather than a preparation issue, or if you\'ve already spent 2+ years attempting.' },
  { q: 'Does dropping a year affect future job opportunities?', a: 'One gap year for JEE/NEET is extremely common and employers universally accept it. Multiple gap years can raise questions in some traditional companies, but in IT and healthcare, where skill and results matter most, even 2-year gaps are rarely penalised if explained clearly. Starting 1–2 years later doesn\'t significantly impact a 35-year career.' },
  { q: 'Can I attend coaching while dropping a year in Tamil Nadu?', a: 'Yes. TIME UG (Madurai, Chennai, Coimbatore) runs dedicated dropper/repeater batches with intensive schedules, alongside regular and crash-course programmes. Joining a structured dropper batch with timetabled daily practice, mock tests, and mentoring is strongly recommended over self-study alone for a drop year.' },
  { q: 'What should I do differently in a drop year compared to my Class 12 year?', a: 'Three key differences: (1) identify exactly which topics cost you marks in the previous attempt, using error analysis; (2) do significantly more mock tests under timed conditions — aim for 30+ full-length tests; (3) revise fundamentals, not just advanced content — many droppers focus on hard problems while forgetting basic formula errors that cost easy marks.' },
  { q: 'Can I study for both JEE and NEET in a drop year?', a: 'Technically yes, but practically very difficult. JEE and NEET preparation overlap in Physics and Chemistry but diverge in Mathematics (JEE) vs. Biology (NEET). Dual preparation in a drop year often leads to neither exam being prepared well. If you genuinely have aptitude for both, discuss with a mentor — but most mentors advise picking one and committing fully.' },
];

export const faqDroppersPage = buildLeafPage({
  slug: 'faq/droppers',
  title: 'Dropper & Gap Year FAQs for JEE & NEET | T.I.M.E. Madurai',
  description: 'Whether to drop a year, how it affects future opportunities, and what to actually do differently — real questions from droppers and their families.',
  canonical: '/faq/droppers/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }, { label: 'Droppers & Gap Year FAQs' }],
  eyebrow: 'faq · droppers',
  heroTitle: 'Dropper & Gap Year FAQs',
  heroSubtitle: 'The decision, the stigma question, and what a genuinely different second attempt actually looks like.',
  stats: [],
  toc: [ { id: 'faqs', label: 'All Questions' } ],
  sections: [],
  faqs,
  faqTitle: 'Droppers &amp; gap year — every question',
  backLink: { label: 'all FAQ categories', href: '/faq/' },
  ctaHeading: 'Weighing a drop year right now?',
  ctaSub: 'A structured, honest conversation beats deciding alone under pressure.',
});
