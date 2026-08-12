import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How affordable is government MBBS in Tamil Nadu, really?',
    a: 'Extremely. Annual fees run ₹14,000–25,000 (tuition, hostel, and mess included), so the full 5.5-year cost rarely exceeds ₹3–5 lakh — versus ₹66 lakh to over ₹1.3 crore at a private college under management quota. This fee gap is one of the most consequential financial decisions a TN medical family will make.',
  },
  {
    q: 'Does it matter which TN government medical college I get, in career terms?',
    a: 'Less than most families assume. Every TN government MBBS seat gives the same access to NEET PG, the same MD/MS pathways, and the same Tamil Nadu Medical Council registration. Prestige differences between Madras Medical College and a newer district college matter far less than your own NEET PG performance later.',
  },
];

export const govtCollegesTNPage = buildLeafPage({
  slug: 'medical/government-medical-colleges-tamil-nadu',
  title: 'Government Medical Colleges in Tamil Nadu: Full List & Cutoffs 2024 | T.I.M.E. Madurai',
  description: 'Every government medical college in Tamil Nadu, with 2024-cycle NEET cutoffs by category — Madras Medical College, Stanley, Madurai, and the full district network.',
  canonical: '/medical/government-medical-colleges-tamil-nadu/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'Government Colleges in TN' }],
  eyebrow: 'medical · tamil nadu',
  heroTitle: 'Government Medical Colleges in Tamil Nadu',
  heroSubtitle: 'One of India\'s largest government medical college networks — nominal fees, and 85% of seats reserved for TN-domicile students.',
  stats: [
    { value: '29+', label: 'Government medical colleges in TN' },
    { value: '~2,700', label: 'Government MBBS seats' },
    { value: '₹14–25K/yr', label: 'Total annual fee' },
  ],
  toc: [
    { id: 'colleges', label: 'The Full List' },
    { id: 'cutoffs', label: '2024 Cutoffs' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Tamil Nadu government medical colleges are funded by the state government and admit through TN state counselling (85% of seats) and Central MCC counselling (the remaining 15% All India Quota).',
  sections: [
    {
      id: 'colleges',
      eyebrow: 'the network',
      title: 'Major government medical colleges',
      table: {
        columns: ['College', 'Location', 'Approx. MBBS seats'],
        rows: [
          ['Madras Medical College (MMC)', 'Chennai', '250 (oldest in Asia, est. 1835)'],
          ['Stanley Medical College', 'Chennai', '200'],
          ['Kilpauk Medical College', 'Chennai', '200'],
          ['Coimbatore Medical College (CMC)', 'Coimbatore', '200'],
          ['Madurai Medical College', 'Madurai', '200'],
          ['Thanjavur Medical College', 'Thanjavur', '200'],
          ['Tirunelveli Medical College', 'Tirunelveli', '200'],
          ['Trichy Government Medical College', 'Trichy', '200'],
          ['Salem Government Medical College', 'Salem', '200'],
          ['Dindigul, Sivaganga, Virudhunagar Govt Medical Colleges', 'Respective districts', '150 each'],
        ],
      },
      note: 'Full network spans 29+ colleges across nearly every TN district. Seat counts are approximate and updated periodically by NMC — verify at health.tn.gov.in and mcc.nic.in.',
    },
    {
      id: 'cutoffs',
      eyebrow: '2024 cycle, tn state quota',
      title: 'NEET cutoffs by category',
      table: {
        columns: ['College', 'General (OC)', 'BC', 'MBC', 'SC'],
        rows: [
          ['Madras Medical College', '640–660', '620–640', '610–630', '575–595'],
          ['Stanley Medical College', '620–640', '600–620', '590–610', '560–580'],
          ['Kilpauk Medical College', '615–635', '595–615', '585–605', '555–575'],
          ['Coimbatore Medical College', '600–625', '585–605', '575–595', '545–565'],
          ['Madurai Medical College', '595–620', '580–600', '570–590', '540–560'],
          ['Tirunelveli / Trichy Medical College', '590–615', '575–595', '565–585', '535–555'],
          ['Other district government colleges', '570–600', '555–580', '545–570', '515–545'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'The fee difference is the headline number worth internalising: government MBBS in TN costs under ₹5 lakh across the entire 5.5-year course, versus ₹66 lakh–₹1.3+ crore at a private college under management quota. See our Education Loans hub if a government seat isn\'t within reach this cycle.',
      },
    },
  ],
  faqs,
  faqTitle: 'TN government medical colleges — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Want your TN state-quota range estimated from a mock score?',
  ctaSub: 'A counsellor can project which district colleges are realistic for you.',
});
