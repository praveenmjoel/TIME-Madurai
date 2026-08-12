import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How close is Madurai to Virudhunagar?', a: 'Approximately 45 km — one of the shortest distances among the South TN towns we serve, making a daily or near-daily commute genuinely practical for many families.' },
  { q: 'Does the same centre handle both TNEA and JoSAA counselling guidance?', a: 'Yes — Virudhunagar students preparing via JEE or TNEA (or both, which is common) get guidance through whichever counselling process ends up relevant after results.' },
];

export const virudhunagarPage = buildLeafPage({
  slug: 'coaching/virudhunagar',
  title: 'JEE & NEET Coaching for Virudhunagar Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 45 km from Virudhunagar — one of the shortest commutes among the towns we serve.',
  canonical: '/coaching/virudhunagar/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Virudhunagar' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Virudhunagar Students',
  heroSubtitle: 'Virudhunagar — a long-established trading and industrial town — sits roughly 45 km from our Madurai centre, close enough that a daily commute is genuinely practical for many families.',
  stats: [ { value: '~45 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'A structured JEE/NEET programme and full counselling support, close enough for a comfortable commute.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'TNEA Guide', href: '/engineering/admissions/tnea/', blurb: 'The board-marks-based route into TN government engineering colleges.' },
        { title: 'Engineering Hub', href: '/engineering/', blurb: 'IITs, NITs, branches, and every entrance exam.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Virudhunagar students — quick answers',
  ctaHeading: 'Have questions about preparing from Virudhunagar?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
