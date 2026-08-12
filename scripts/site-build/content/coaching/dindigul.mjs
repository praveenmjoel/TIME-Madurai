import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'Is Madurai a realistic commute or relocation option for Dindigul students?', a: 'Yes — Dindigul is roughly 65 km from Madurai, among the closer South TN towns to our centre. Many families weigh a daily commute against relocating for the two most intensive preparation years; either can work depending on the student\'s routine and travel comfort.' },
  { q: 'Do you coach for both JEE and NEET?', a: 'Yes — the same centre runs structured JEE Main/Advanced and NEET UG preparation, so Dindigul students don\'t need to choose between two different institutes for engineering vs. medical prep.' },
];

export const dindigulPage = buildLeafPage({
  slug: 'coaching/dindigul',
  title: 'JEE & NEET Coaching for Dindigul Students | T.I.M.E. Madurai',
  description: 'Structured JEE and NEET preparation in Madurai, approximately 65 km from Dindigul — for students weighing a commute or relocation for serious exam preparation.',
  canonical: '/coaching/dindigul/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Dindigul' }],
  eyebrow: 'serving south tamil nadu',
  heroTitle: 'JEE & NEET Coaching for Dindigul Students',
  heroSubtitle: 'Dindigul — known for its lock industry and hill-country access via Kodaikanal — sits roughly 65 km from our Madurai centre, close enough for many families to consider daily commute or local relocation during the preparation years.',
  stats: [ { value: '~65 km', label: 'Approx. distance from Madurai' } ],
  toc: [ { id: 'resources', label: 'Start Here' }, { id: 'faqs', label: 'FAQs' } ],
  intro: 'Whether you\'re commuting in or relocating for the preparation years, the same structured JEE/NEET programme and counselling support applies.',
  sections: [
    {
      id: 'resources',
      eyebrow: 'where to start',
      title: 'Explore the full knowledge hub',
      cards: [
        { title: 'JEE Coaching in Madurai', href: '/coaching/jee-coaching-madurai/', blurb: 'The full JEE Main &amp; Advanced programme.' },
        { title: 'NEET Coaching in Madurai', href: '/coaching/neet-coaching-madurai/', blurb: 'The full NEET UG programme.' },
        { title: 'Engineering Hub', href: '/engineering/', blurb: 'IITs, NITs, branches, and every entrance exam.' },
        { title: 'Medical Hub', href: '/medical/', blurb: 'NEET, MBBS, AYUSH, and allied health.' },
      ],
    },
  ],
  faqs,
  faqTitle: 'Dindigul students — quick answers',
  ctaHeading: 'Have questions about commuting or relocating from Dindigul?',
  ctaSub: 'Talk to us — no pressure, just a conversation about what fits your family.',
});
