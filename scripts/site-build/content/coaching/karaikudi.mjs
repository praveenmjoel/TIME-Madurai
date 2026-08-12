import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How far is Karaikudi from Madurai?', a: 'Approximately 90 km — a distance that typically means weighing weekday relocation against a longer daily commute, depending on the student\'s routine.' },
  { q: 'Is JIPMER a realistic NEET target discussed for Karaikudi students?', a: 'Yes — JIPMER Puducherry and its newer Karaikal campus are both covered in our AIIMS &amp; JIPMER guide, alongside AIIMS Madurai, as premier options relevant to South Tamil Nadu students generally.' },
];

export const karaikudiPage = buildLeafPage({
  slug: 'coaching/karaikudi',
  title: 'JEE & NEET Coaching for Karaikudi Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 90 km from Karaikudi, with full engineering and medical admissions guidance.',
  canonical: '/coaching/karaikudi/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Karaikudi' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Karaikudi Students',
  heroSubtitle: 'Karaikudi — the heart of Chettinad, known for its distinctive architecture and cuisine — sits roughly 90 km from our Madurai centre.',
  stats: [ { value: '~90 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'A structured JEE/NEET programme and full counselling support for students weighing relocation for the preparation years.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'AIIMS & JIPMER Guide', href: '/medical/aiims-jipmer/', blurb: 'Premier medical institutes relevant to South Tamil Nadu students.' },
        { title: 'Engineering Hub', href: '/engineering/', blurb: 'IITs, NITs, branches, and every entrance exam.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Karaikudi students — quick answers',
  ctaHeading: 'Have questions about preparing from Karaikudi?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
