import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is IIIT Kancheepuram\'s closing rank really that much higher than IIIT Hyderabad\'s?',
    a: 'Yes, considerably — IIIT Hyderabad CSE closes around 2,500–3,500 while IIIT Kancheepuram CSE closes around 20,000–30,000. IIIT Kancheepuram is a newer, still-developing IIIT with a much larger accessible rank band, particularly under its TN Home State quota.',
  },
  {
    q: 'Does IIIT Hyderabad admit purely through JoSAA?',
    a: 'Not exclusively — IIIT Hyderabad is autonomous and runs its own admission process (UGEE) in addition to offering some seats through JoSAA. Check both routes if you\'re targeting this specific institute.',
  },
];

export const iiitCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/iiit-jee-main-2024',
  title: 'IIIT Closing Ranks 2024: JEE Main Cutoffs | T.I.M.E. Madurai',
  description: 'JEE Main 2024 closing ranks for IIIT Hyderabad, Delhi, Bangalore, Allahabad, and IIIT Kancheepuram (Tamil Nadu).',
  canonical: '/college-cutoffs/iiit-jee-main-2024/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'IIIT Cutoffs 2024' }],
  eyebrow: '2024 cycle · jee main',
  heroTitle: 'IIIT Closing Ranks — JEE Main 2024',
  heroSubtitle: 'From IIIT Hyderabad\'s IIT-rivaling CS programme to IIIT Kancheepuram\'s far more accessible Tamil Nadu quota.',
  stats: [],
  toc: [
    { id: 'ranks', label: 'Closing Ranks by IIIT' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'GEN closing ranks, 2024 cycle — always verify current-year data before finalising choices.',
  sections: [
    {
      id: 'ranks',
      title: 'IIIT closing ranks, 2024',
      table: {
        columns: ['IIIT', 'Programme', 'GEN closing CRL (approx.)', 'Notes'],
        rows: [
          ['IIIT Hyderabad', 'CSE (B.Tech)', '~2,500–3,500', 'Premier IIIT; top CS research; own exam (UGEE) + JoSAA seats'],
          ['IIIT Bangalore', 'CSE (Integrated M.Tech)', '~3,000–4,500', 'Strong industry connections; JoSAA seats available'],
          ['IIIT Allahabad', 'IT + ECE', '~4,000–6,000', 'Old IIIT; good placements; JoSAA'],
          ['IIIT Delhi', 'CSE', '~4,500–6,500', 'New IIIT but excellent; JoSAA'],
          ['IIIT Kancheepuram (TN)', 'CSE', '~20,000–30,000', 'TN IIIT; growing; near Chennai; HS TN quota available'],
          ['IIIT-DM Kancheepuram', 'Mechanical Design, Production', '~30,000–50,000', 'Manufacturing focus, niche'],
          ['IIIT Sri City (AP)', 'CSE', '~15,000–22,000', 'Good private IIIT; near TN border'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'IIIT Kancheepuram, a centrally funded IIIT in Tamil Nadu, offers Home State quota seats for TN students — its GEN-HS closing rank runs meaningfully better than GEN-OS. For TN students wanting an IIIT experience close to home with a CS focus, it\'s worth including in JoSAA choices, though infrastructure is still developing relative to older IIITs.',
      },
    },
  ],
  faqs,
  faqTitle: 'IIIT cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Comparing an IIIT seat against an NIT option?',
  ctaSub: 'A counsellor can help you weigh both against your rank realistically.',
});
