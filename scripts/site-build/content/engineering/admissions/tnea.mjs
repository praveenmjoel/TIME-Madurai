import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is there really no entrance exam for TNEA?',
    a: 'Correct — TNEA is unique among the exams in this hub because admission runs purely on your Class 12 Physics, Chemistry, and Mathematics marks, using the cutoff formula. There\'s no separate test to prepare for; your board exam performance is the entire admissions criterion.',
  },
  {
    q: 'What is the TNEA random number, and does it actually matter?',
    a: 'Every registered student gets a random number assigned at registration, used purely to break ties when two students have identical cutoff marks. Registering early (as soon as the portal opens) gets you a lower random number, which is advantageous in ties — a student with cutoff 198.5 and random number 1,024 gets priority over one with the same cutoff and random number 98,342.',
  },
];

export const tneaPage = buildLeafPage({
  slug: 'engineering/admissions/tnea',
  title: 'TNEA 2026: Eligibility, Registration & Counselling Process | T.I.M.E. Madurai',
  description: 'How TNEA admission actually works — eligibility, the registration and random-number process, and the round-by-round counselling timeline. For college cutoffs, see our TN colleges guide.',
  canonical: '/engineering/admissions/tnea/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions', href: '/engineering/admissions/' }, { label: 'TNEA' }],
  eyebrow: 'entrance exam',
  heroTitle: 'TNEA — Tamil Nadu Engineering Admissions',
  heroSubtitle: 'No entrance exam. Admission to every government, government-aided, and self-financing engineering college in Tamil Nadu runs purely on Class 12 board marks.',
  stats: [
    { value: '0', label: 'Entrance exams required' },
    { value: '45%', label: 'Min. aggregate needed (Gen)' },
    { value: '3–4', label: 'Counselling rounds' },
  ],
  toc: [
    { id: 'eligibility', label: 'Eligibility & Basis' },
    { id: 'process', label: 'The Process' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'TNEA is managed by Anna University and is the most relevant admission process for the majority of Tamil Nadu engineering students — it covers everything except NITs, IITs, IIITs, and GFTIs, which use JoSAA instead.',
  sections: [
    {
      id: 'eligibility',
      eyebrow: 'the basics',
      title: 'Eligibility & admission basis',
      table: {
        columns: ['Parameter', 'Detail'],
        rows: [
          ['Eligibility', '10+2 with PCM; min. 45% aggregate (40% for reserved categories)'],
          ['Admission basis', 'No entrance test — pure merit from Class 12 board marks in PCM'],
          ['Boards accepted', 'Tamil Nadu Board, CBSE, ICSE, and other recognised boards, all equally'],
          ['Cut-off formula', 'Maths + (Physics ÷ 2) + (Chemistry ÷ 2), max 200'],
        ],
      },
      note: 'For the actual cutoff-to-college mapping and Tamil Nadu\'s top TNEA colleges, see our Best Engineering Colleges in Tamil Nadu guide.',
    },
    {
      id: 'process',
      eyebrow: 'step by step',
      title: 'The TNEA process',
      table: {
        columns: ['Step', 'Detail'],
        rows: [
          ['1. Registration', 'tneaonline.org — basic details + Class 12 marks; ₹500 (Gen) / ₹250 (SC/ST) fee'],
          ['2. Certificate upload', 'Class 12 mark sheet, community certificate, nativity, special category certificates'],
          ['3. Random number assignment', 'Breaks ties for identical cutoff marks — register early for a lower number'],
          ['4. Cut-off &amp; rank publication', 'TNEA calculates your cutoff mark and publishes your rank'],
          ['5. Choice filling', 'Fill college–branch combinations in preference order; update across rounds'],
          ['6. Round-wise allotment', '3–4 rounds typically, based on rank + reservation + choices'],
          ['7. Reporting', 'Report to your allotted college with original documents; pay tuition'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Register the moment the TNEA portal opens — your random number is assigned at registration and matters only when two students have identical cutoff marks, but there\'s no downside to registering early and every reason to.',
      },
    },
  ],
  faqs,
  faqTitle: 'TNEA — quick answers',
  backLink: { label: 'all entrance exams', href: '/engineering/admissions/' },
  ctaHeading: 'Want your TNEA cutoff estimated from mock board scores?',
  ctaSub: 'A counsellor can project your realistic college range early, not after results.',
});
