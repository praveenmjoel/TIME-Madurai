import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How far is Madurai from Sivaganga?', a: 'Approximately 50 km — close enough that many Sivaganga families already look to Madurai for higher education, healthcare, and specialised coaching.' },
  { q: 'Do you help with TN state reservation categories relevant to Sivaganga students?', a: 'Yes — our Reservation hub covers TN\'s BC, MBC, SC, and SCA categories in detail, including certificate requirements from the Tahsildar\'s office.' },
];

export const sivagangaPage = buildLeafPage({
  slug: 'coaching/sivaganga',
  title: 'JEE & NEET Coaching for Sivaganga Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 50 km from Sivaganga, with full TN reservation and counselling guidance.',
  canonical: '/coaching/sivaganga/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Sivaganga' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Sivaganga Students',
  heroSubtitle: 'Sivaganga — one of Tamil Nadu\'s historic districts — sits roughly 50 km from our Madurai centre, well within reach for regular commute or local relocation during preparation.',
  stats: [ { value: '~50 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'A structured JEE/NEET programme and full counselling support, including Tamil Nadu\'s specific reservation categories.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'Tamil Nadu Reservation Guide', href: '/reservation/tamil-nadu-reservation/', blurb: 'BC, MBC, SC, and SCA categories explained in full.' },
        { title: 'Counselling Hub', href: '/counselling/', blurb: 'JoSAA, MCC, TNEA, and TN medical counselling processes.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Sivaganga students — quick answers',
  ctaHeading: 'Have questions about preparing from Sivaganga?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
