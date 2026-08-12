import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do VITEEE and SRMJEEE use the same kind of ranking?',
    a: 'Both are rank-based (not raw-score cutoffs like BITSAT), but VITEEE additionally uses a rank-order slot-booking system — earlier ranks book earlier and get first choice of campus and branch. SRMJEEE uses more conventional round-based counselling.',
  },
  {
    q: 'Is a newer VIT or SRM campus (Bhopal, AP, Trichy) a worse choice?',
    a: 'Generally lower-ranked in placement terms than the flagship campuses (VIT Vellore, SRM Kattankulathur), but not necessarily a poor choice — they\'re easier to get into and still carry the parent brand. Always verify the specific campus\'s current placement data rather than assuming brand equivalence.',
  },
];

export const viteeeSrmjeeeCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/viteee-srmjeee-2024',
  title: 'VITEEE & SRMJEEE 2024 Rank Bands by Campus & Branch | T.I.M.E. Madurai',
  description: 'VIT and SRM 2024 admission rank bands across Vellore, Chennai, Kattankulathur, and other campuses, by programme and specialisation.',
  canonical: '/college-cutoffs/viteee-srmjeee-2024/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'VITEEE & SRMJEEE 2024' }],
  eyebrow: '2024 cycle · vit & srm',
  heroTitle: 'VITEEE & SRMJEEE 2024 Rank Bands',
  heroSubtitle: 'Two of Tamil Nadu\'s largest private engineering intakes — here\'s what rank actually gets you at each campus and specialisation.',
  stats: [],
  toc: [
    { id: 'ranks', label: 'Rank Bands by Campus' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: '2024 cycle data — VIT uses rank-order slot booking, so earlier ranks get first choice of campus and branch combination.',
  sections: [
    {
      id: 'ranks',
      title: '2024 admission rank bands',
      table: {
        columns: ['Institution', 'Programme', 'Approx. rank for admission', 'Notes'],
        rows: [
          ['VIT Vellore', 'CSE (Core)', '&lt; 5,000', 'Fills fastest — highly competitive within VIT'],
          ['VIT Vellore', 'CSE with AI/ML or Data Science', '&lt; 10,000', 'Popular specialisation tracks'],
          ['VIT Vellore', 'ECE', '&lt; 15,000', 'Strong placement history'],
          ['VIT Chennai', 'CSE', '&lt; 20,000', 'Slightly easier than Vellore to get into'],
          ['VIT Bhopal / AP', 'CSE', '&lt; 40,000', 'Newer campuses; easier entry, same VIT brand'],
          ['SRM Kattankulathur', 'CSE (Core)', '&lt; 3,000 (SRM rank)', 'Flagship campus; Tier 1 SRM'],
          ['SRM Kattankulathur', 'CSE with AI or Cyber Security', '&lt; 8,000', 'Competitive specialisation tracks'],
          ['SRM Ramapuram / Vadapalani', 'CSE', '&lt; 20,000', 'Chennai city campuses; Tier 2 SRM'],
          ['SRM Amaravati / Haryana', 'CSE', '&lt; 40,000', 'Newer campuses; easier admission'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'VITEEE & SRMJEEE cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Deciding between a VIT and SRM specialisation track?',
  ctaSub: 'A counsellor can compare current placement data for both.',
});
