import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How hard is BITSAT compared to JEE Main?',
    a: 'The PCM difficulty is roughly equivalent to JEE Main, not JEE Advanced. The real differentiator is speed — 130 questions in 180 minutes works out to under 1.4 minutes per question, and a bonus-question system rewards students who finish fast and accurately. Students scoring 95+ percentile in JEE Main typically already have the PCM foundation and mainly need to practice speed plus the English/Reasoning sections.',
  },
  {
    q: 'Does a board topper get automatic BITS admission?',
    a: 'Yes, for the very top rank — the 1st-rank topper of any Class 12 board gets direct admission to any BITS campus and programme of their choice, bypassing BITSAT entirely. This applies only to the single top rank per board.',
  },
];

export const bitsatPage = buildLeafPage({
  slug: 'engineering/admissions/bitsat',
  title: 'BITSAT 2026: Pattern, Cutoffs & Why It Matters for TN Students | T.I.M.E. Madurai',
  description: 'BITSAT exam pattern, marking scheme, campus-wise cutoffs, and why BITS Hyderabad and Pilani are worth targeting for Tamil Nadu JEE aspirants.',
  canonical: '/engineering/admissions/bitsat/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions', href: '/engineering/admissions/' }, { label: 'BITSAT' }],
  eyebrow: 'entrance exam',
  heroTitle: 'BITSAT',
  heroSubtitle: 'The entrance test for BITS Pilani, Goa, and Hyderabad — India\'s most respected private engineering institution group.',
  stats: [
    { value: '130', label: 'Questions in 3 hours' },
    { value: '390', label: 'Total base marks' },
    { value: '3', label: 'BITS campuses in India' },
  ],
  toc: [
    { id: 'pattern', label: 'Pattern & Marking' },
    { id: 'strategy', label: 'Why It Matters for TN' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'BITSAT is conducted entirely online across a multi-day test window, and unlike JEE, a strong performance can mean bonus questions and a genuinely different pacing strategy.',
  sections: [
    {
      id: 'pattern',
      eyebrow: 'the mechanics',
      title: 'Pattern & marking',
      table: {
        columns: ['Parameter', 'Detail'],
        rows: [
          ['Eligibility', '75% aggregate PCM + English in Class 12; min. 60% in each subject'],
          ['Mode', 'Online CBT — candidate chooses their slot in the May–June window'],
          ['Questions', '130 in 3 hours — Physics (40), Chemistry (40), Maths (40), English (15), Reasoning (10)'],
          ['Marking', '+3 correct, −1 wrong; up to 12 bonus questions if all 130 answered within time'],
          ['Total marks', '390 (up to 426 with bonus)'],
          ['Approx. cutoff (2024)', 'BITS Pilani CSE ~390+; BITS Hyderabad CSE ~370–385'],
        ],
      },
    },
    {
      id: 'strategy',
      eyebrow: 'the tn angle',
      title: 'Why BITSAT matters for TN students specifically',
      cards: [
        { title: 'BITS Hyderabad', href: '/engineering/private-engineering-colleges/', blurb: 'The most popular BITS campus for TN students due to proximity — a realistic target at a score of 340–370.' },
      ],
      cardCols: 1,
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'BITSAT has English Proficiency and Logical Reasoning sections (25 questions combined) that JEE doesn\'t test. These are relatively easy marks — two weeks of grammar, reading comprehension, and reasoning-puzzle practice on top of your JEE PCM prep can add 22–25 out of 25 to your score.',
      },
    },
  ],
  faqs,
  faqTitle: 'BITSAT — quick answers',
  backLink: { label: 'all entrance exams', href: '/engineering/admissions/' },
  ctaHeading: 'Adding BITSAT to your exam calendar?',
  ctaSub: 'The speed-based format needs its own practice routine — let\'s build one.',
});
