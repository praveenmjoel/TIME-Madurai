import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How much higher are OBC-NCL, SC, and ST closing ranks compared to General?',
    a: 'As a rough multiplier on these GEN figures: OBC-NCL ranks run roughly 2–3× higher, SC roughly 5–8× higher, and ST roughly 12–15× higher. So a GEN closing rank of 130 for IIT Madras CSE might correspond to an SC closing rank in the 650–1,000+ range — always check the exact category rank on josaa.nic.in rather than applying these multipliers precisely.',
  },
  {
    q: 'Is this data still accurate for the current year?',
    a: 'Treat it as a planning benchmark, not a guarantee. These are 2024-cycle figures — cutoffs shift annually based on paper difficulty and applicant numbers. Always verify current-year opening/closing ranks at josaa.nic.in before finalising your choice list.',
  },
];

export const iitCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/iit-jee-advanced-2024',
  title: 'IIT Closing Ranks 2024: JEE Advanced Cutoffs by Branch | T.I.M.E. Madurai',
  description: 'JEE Advanced 2024 Round 6 closing ranks (General category) across every major IIT and branch combination.',
  canonical: '/college-cutoffs/iit-jee-advanced-2024/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'IIT Cutoffs 2024' }],
  eyebrow: '2024 cycle · jee advanced',
  heroTitle: 'IIT Closing Ranks — JEE Advanced 2024',
  heroSubtitle: 'Round 6, General category (Open/Unreserved) closing ranks. OBC-NCL runs roughly 2–3× higher, SC 5–8×, and ST 12–15× these figures.',
  stats: [],
  toc: [
    { id: 'ranks', label: 'Closing Ranks by IIT & Branch' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Use these as planning benchmarks, not guarantees — always cross-check current-year data at josaa.nic.in before finalising choices.',
  sections: [
    {
      id: 'ranks',
      title: 'GEN closing ranks, Round 6, 2024',
      table: {
        columns: ['IIT', 'Programme', 'Approx. GEN closing rank (CRL)'],
        rows: [
          ['IIT Bombay', 'CSE', '~70'],
          ['IIT Bombay', 'Electrical Engineering', '~350'],
          ['IIT Bombay', 'Mechanical Engineering', '~1,100'],
          ['IIT Delhi', 'CSE', '~100'],
          ['IIT Delhi', 'Electrical Engineering', '~400'],
          ['IIT Delhi', 'Chemical Engineering', '~1,800'],
          ['IIT Madras', 'CSE', '~130'],
          ['IIT Madras', 'Electrical Engineering (5-yr Integrated)', '~500'],
          ['IIT Madras', 'Mechanical Engineering', '~1,400'],
          ['IIT Kanpur', 'CSE', '~200'],
          ['IIT Kanpur', 'Aerospace Engineering', '~2,200'],
          ['IIT Kharagpur', 'CSE', '~300'],
          ['IIT Kharagpur', 'Electronics &amp; Electrical Comm. Engg.', '~700'],
          ['IIT Roorkee', 'CSE', '~500'],
          ['IIT Roorkee', 'Civil Engineering', '~4,500'],
          ['IIT Guwahati', 'CSE', '~1,200'],
          ['IIT Hyderabad', 'CSE', '~1,500'],
          ['IIT BHU Varanasi', 'CSE', '~2,500'],
          ['IIT Indore', 'CSE', '~2,800'],
          ['IIT Patna / Mandi / Jodhpur', 'CSE', '~4,000–6,000'],
          ['Newer IITs (Tirupati, Palakkad, Dharwad, Bhilai, Goa, Jammu, Dhanbad)', 'CSE', '~6,000–10,000'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'IIT Madras is the most relevant IIT for TN students geographically. Its CSE closing rank of ~130 (GEN) is extremely competitive, but for OBC-NCL TN students the CSE closing rank runs approximately 300–500 CRL — very achievable for a top-tier JEE aspirant with consistent 99+ percentile in JEE Main.',
      },
    },
  ],
  faqs,
  faqTitle: 'IIT cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Want your rank benchmarked against this year\'s expected trends?',
  ctaSub: 'A counsellor can help translate historical data into a realistic target.',
});
