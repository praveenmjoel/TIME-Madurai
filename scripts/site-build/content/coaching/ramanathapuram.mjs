import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How far is Ramanathapuram from Madurai?', a: 'Approximately 110 km — the longest distance among the South TN towns we serve, meaning most Ramanathapuram families weigh weekday or full-term relocation to Madurai over a daily commute.' },
  { q: 'Is JIPMER a realistic option given Ramanathapuram\'s coastal location?', a: 'Yes — Ramanathapuram\'s geography (the gateway to Rameswaram) doesn\'t change eligibility for JIPMER Puducherry, JIPMER Karaikal, or AIIMS Madurai — all are covered in our AIIMS &amp; JIPMER guide, and admission runs purely on NEET score, not geography.' },
];

export const ramanathapuramPage = buildLeafPage({
  slug: 'coaching/ramanathapuram',
  title: 'JEE & NEET Coaching for Ramanathapuram Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 110 km from Ramanathapuram, with full engineering and medical admissions guidance.',
  canonical: '/coaching/ramanathapuram/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Ramanathapuram' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Ramanathapuram Students',
  heroSubtitle: 'Ramanathapuram — gateway to Rameswaram and the Gulf of Mannar coast — sits roughly 110 km from our Madurai centre, the largest city and natural education hub for the region.',
  stats: [ { value: '~110 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'A structured JEE/NEET programme and full counselling support for students relocating to Madurai for the preparation years.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'AIIMS & JIPMER Guide', href: '/medical/aiims-jipmer/', blurb: 'Premier medical institutes relevant to South Tamil Nadu students.' },
        { title: 'Scholarships Hub', href: '/scholarships/', blurb: 'Central, TN state, and institution-level scholarships.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Ramanathapuram students — quick answers',
  ctaHeading: 'Have questions about preparing from Ramanathapuram?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
