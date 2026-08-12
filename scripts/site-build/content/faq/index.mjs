import { buildLeafPage } from '../../lib/leaf.mjs';

const topFaqs = [
  {
    q: 'How many times can I appear for JEE Main and NEET?',
    a: 'JEE Main has no lifetime attempt limit — you can appear in consecutive years as long as you\'ve passed or are appearing in Class 12, with two sessions (January and April) each year. NEET UG also has no attempt limit, and as of the 2024 cycle, no upper age limit is being enforced pending the Supreme Court case — always verify the current year\'s NTA notification.',
  },
  {
    q: 'Is coaching mandatory to crack JEE or NEET?',
    a: 'No — many students succeed with self-study and online resources. Structured coaching provides chapter-wise pacing, All-India-benchmarked mock tests, and doubt-clearing that\'s hard to replicate alone, but the real differentiator at any preparation style is consistent daily practice.',
  },
  {
    q: 'Should I drop a year if I don\'t get my target college?',
    a: 'It depends on the gap. A drop year makes sense if your previous score was within 15–20 percentile/marks of your target (suggesting real improvement potential), you have a genuinely different preparation plan, and you\'re mentally prepared for a repeat year. See our full Droppers FAQ section for the detailed framework.',
  },
  {
    q: 'Can Tamil Nadu State Board students compete with CBSE students for JEE Advanced or NEET AIQ?',
    a: 'Yes, absolutely — many TN Board students have secured IIT seats and AIQ medical seats. The main gap is that TN Board syllabus is slightly less deep in certain areas (Mathematics: Probability, Sequences & Series; Chemistry: Inorganic depth) — these gaps are addressable with NCERT and targeted coaching material.',
  },
];

export const faqIndexPage = buildLeafPage({
  slug: 'faq',
  title: '100+ JEE & NEET FAQs: Real Questions, Straight Answers | T.I.M.E. Madurai',
  description: 'The most common questions students and parents ask about JEE, NEET, counselling, reservation, colleges, drop years, scholarships, and exam pressure — answered directly.',
  canonical: '/faq/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ' }],
  eyebrow: 'the questions everyone actually asks',
  heroTitle: '100+ JEE & NEET Questions, Answered',
  heroSubtitle: 'These are the exact questions students and parents ask at our centre, during orientation sessions, and across counselling calls — organised by topic, answered directly.',
  stats: [ { value: '100+', label: 'Questions answered' }, { value: '7', label: 'Topic categories' } ],
  toc: [
    { id: 'categories', label: 'Browse by Topic' },
    { id: 'faqs', label: 'Most Asked' },
  ],
  intro: 'Answers reflect the 2024–25 cycle — always verify current-year specifics from official portals before making decisions.',
  sections: [
    {
      id: 'categories',
      eyebrow: 'browse by topic',
      title: 'Every category, in depth',
      cards: [
        { title: 'JEE FAQs', href: '/faq/jee/', blurb: 'Registration, eligibility, JEE Advanced eligibility, and preparation strategy — 18 questions.' },
        { title: 'NEET FAQs', href: '/faq/neet/', blurb: 'Exam basics, Tamil medium, cutoffs, and Biology-first preparation strategy.' },
        { title: 'Counselling & Rank FAQs', href: '/faq/counselling-and-rank/', blurb: 'NIT Trichy seats, JoSAA process, TNEA formula, and TN medical counselling.' },
        { title: 'Reservation FAQs', href: '/faq/reservation/', blurb: 'OBC-NCL, EWS, the TN 7.5% government school quota, and certificate validity.' },
        { title: 'Colleges & Branches FAQs', href: '/faq/colleges-and-branches/', blurb: 'NIT Trichy vs. PSG, VIT vs. NIT, AIIMS vs. TN government MBBS, and more.' },
        { title: 'Droppers & Gap Year FAQs', href: '/faq/droppers/', blurb: 'Whether to drop, how it affects careers, and what to do differently.' },
        { title: 'Scholarships & Mental Health FAQs', href: '/faq/scholarships-and-mental-health/', blurb: 'NIT Trichy fees, loans without collateral, exam pressure, and family conflict.' },
      ],
    },
  ],
  faqs: topFaqs,
  faqTitle: 'The most-asked questions',
  ctaHeading: 'Didn\'t find your specific question?',
  ctaSub: 'Ask a counsellor directly — no question is too basic.',
});
