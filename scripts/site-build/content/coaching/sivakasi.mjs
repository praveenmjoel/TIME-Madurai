import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How far is Sivakasi from Madurai?', a: 'Approximately 75 km — a distance many Sivakasi families already navigate for higher education and specialised services centred in Madurai.' },
  { q: 'Are Sivakasi students eligible for the same TN counselling processes as Madurai students?', a: 'Yes — TNEA, TN medical counselling, and JoSAA all work identically regardless of which Tamil Nadu town a student is from; what matters is your TN domicile status and category, both covered in our Counselling and Reservation hubs.' },
];

export const sivakasiPage = buildLeafPage({
  slug: 'coaching/sivakasi',
  title: 'JEE & NEET Coaching for Sivakasi Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 75 km from Sivakasi, with full engineering and medical admissions guidance.',
  canonical: '/coaching/sivakasi/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Sivakasi' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Sivakasi Students',
  heroSubtitle: 'Sivakasi — known nationally for its fireworks and printing industries — sits roughly 75 km from our Madurai centre.',
  stats: [ { value: '~75 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'A structured JEE/NEET programme and full counselling support, whether commuting in or relocating for the preparation years.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'Counselling Hub', href: '/counselling/', blurb: 'JoSAA, MCC, TNEA, and TN medical counselling processes.' },
        { title: 'Scholarships Hub', href: '/scholarships/', blurb: 'Central, TN state, and institution-level scholarships.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Sivakasi students — quick answers',
  ctaHeading: 'Have questions about preparing from Sivakasi?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
