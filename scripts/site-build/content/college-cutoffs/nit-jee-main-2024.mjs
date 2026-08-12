import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the practical difference between "HS" and "OS" in these tables?',
    a: 'HS (Home State) is the quota reserved for students from the NIT\'s own state — for NIT Trichy, that means Tamil Nadu residents. OS (Other State) is the pool everyone else competes in. Home State ranks are consistently less competitive at your home NIT than Other State ranks, which is the single biggest structural advantage in this entire system for TN students.',
  },
  {
    q: 'If I miss NIT Trichy CSE under Home State quota, what\'s my best next option?',
    a: 'Consider ECE at NITT Home State (a higher closing rank than CSE), or CSE at NIT Warangal/Surathkal under Other State quota — their GEN-OS closing ranks are often lower than NITT\'s GEN-HS CSE cutoff. IIITs like IIIT Hyderabad or Bangalore are also worth comparing at similar rank bands.',
  },
];

export const nitCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/nit-jee-main-2024',
  title: 'NIT Closing Ranks 2024: JEE Main Cutoffs by Branch | T.I.M.E. Madurai',
  description: 'JEE Main 2024 Round 6 closing ranks for NIT Trichy (Home State and Other State) and other top NITs, by branch.',
  canonical: '/college-cutoffs/nit-jee-main-2024/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'NIT Cutoffs 2024' }],
  eyebrow: '2024 cycle · jee main',
  heroTitle: 'NIT Closing Ranks — JEE Main 2024',
  heroSubtitle: 'NIT Trichy is the highest-value target for Tamil Nadu students specifically — its Home State quota closes at meaningfully lower ranks than the national pool.',
  stats: [],
  toc: [
    { id: 'nitt', label: 'NIT Trichy' },
    { id: 'others', label: 'Other Top NITs' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'HS = Home State quota (Tamil Nadu residents at NIT Trichy); OS = Other State quota, open to all-India competition.',
  sections: [
    {
      id: 'nitt',
      eyebrow: 'the top target',
      title: 'NIT Trichy — Home State (TN) closing ranks, 2024',
      table: {
        columns: ['Branch', 'GEN–HS closing CRL', 'OBC-NCL–HS closing CRL', 'SC–HS closing CRL'],
        rows: [
          ['Computer Science &amp; Engineering', '~5,500–7,000', '~12,000–15,000', '~35,000–45,000'],
          ['Electronics &amp; Comm. Engineering', '~8,000–10,000', '~18,000–22,000', '~50,000–65,000'],
          ['Electrical &amp; Electronics Engg.', '~12,000–15,000', '~25,000–30,000', '~70,000–90,000'],
          ['Mechanical Engineering', '~18,000–22,000', '~35,000–42,000', '~95,000–1,20,000'],
          ['Civil Engineering', '~30,000–38,000', '~55,000–65,000', '~1,50,000–1,80,000'],
          ['Chemical Engineering', '~25,000–32,000', '~48,000–58,000', '~1,20,000–1,50,000'],
          ['Metallurgical &amp; Materials Engg.', '~45,000–55,000', '~80,000–95,000', '~2,00,000+'],
        ],
      },
    },
    {
      id: 'others',
      eyebrow: 'beyond nitt',
      title: 'Other top NITs — GEN closing CRL (All India/OS quota), 2024',
      table: {
        columns: ['NIT', 'CSE (approx. GEN-OS)', 'ECE (approx. GEN-OS)', 'Notes'],
        rows: [
          ['NIT Warangal', '~3,000–4,500', '~6,000–8,000', 'Top NIT; strong placements; good for TN via OS quota'],
          ['NIT Surathkal', '~3,500–5,000', '~7,000–9,500', 'Excellent CSE/ECE; Mangalore campus'],
          ['NIT Calicut', '~4,000–5,500', '~8,000–11,000', 'Good research; OS accessible to TN'],
          ['NIT Rourkela', '~5,000–7,000', '~9,000–12,000', 'Old NIT; strong mining/metallurgy too'],
          ['MNIT Jaipur', '~4,500–6,000', '~9,000–12,500', 'Good campus; TN students via OS'],
          ['NIT Allahabad (MNNIT)', '~5,500–7,500', '~10,000–13,000', 'Growing placements'],
          ['NIT Trichy (OS)', '~2,500–3,800', '~5,000–7,000', 'TN students must compete in OS if missing HS cutoff'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'If you can\'t get CSE at NIT Trichy under Home State quota, consider: (1) ECE at NITT HS, which closes at a higher rank; (2) CSE at NIT Warangal or Surathkal under OS quota — their GEN-OS closing ranks are often lower than NITT\'s GEN-HS CSE cutoff; (3) CSE at IIITs like IIIT Hyderabad or Bangalore, which offer excellent CS education at similar rank bands.',
      },
    },
  ],
  faqs,
  faqTitle: 'NIT cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Want your JEE Main rank benchmarked against these?',
  ctaSub: 'A counsellor can help you build a realistic NIT choice list.',
});
