import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How far is Madurai from Theni for regular travel?', a: 'Approximately 75 km — a distance many Theni families already navigate for higher education and healthcare access, given Madurai\'s role as the region\'s largest city.' },
  { q: 'Is AIIMS Madurai relevant for Theni NEET aspirants specifically?', a: 'Yes — AIIMS Madurai, operational since 2022, is the closest AIIMS campus for Theni students, offering a premier medical institute option without the distance of AIIMS Delhi or older campuses.' },
];

export const theniPage = buildLeafPage({
  slug: 'coaching/theni',
  title: 'JEE & NEET Coaching for Theni Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 75 km from Theni, with AIIMS Madurai now a genuine local NEET target.',
  canonical: '/coaching/theni/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Theni' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Theni Students',
  heroSubtitle: 'Theni — gateway to the cardamom hills and Western Ghats — sits roughly 75 km from our Madurai centre, with Madurai serving as the region\'s natural hub for higher education and healthcare access.',
  stats: [ { value: '~75 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'A structured JEE/NEET programme and full counselling support, whether you commute in or relocate for the preparation years.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'AIIMS & JIPMER Guide', href: '/medical/aiims-jipmer/', blurb: 'Including AIIMS Madurai — the region\'s newest premier medical campus.' },
        { title: 'Medical Hub', href: '/medical/', blurb: 'NEET, MBBS, AYUSH, and allied health.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Theni students — quick answers',
  ctaHeading: 'Have questions about preparing from Theni?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
