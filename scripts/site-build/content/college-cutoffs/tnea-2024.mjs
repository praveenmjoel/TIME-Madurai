import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How much lower are cutoffs for BC/MBC/SC categories at these colleges?',
    a: 'Typically 3–8 marks lower than OC at the same college, though the gap varies by college and year. Always check the specific college\'s category-wise breakdown on tneaonline.org rather than assuming a fixed offset.',
  },
  {
    q: 'What cutoff range should I target for a "safe" TNEA outcome?',
    a: 'Students in the 185–194 range should look at Tier 2 aided colleges (TCE, NEC, Mepco Schlenk, GCT) — they have strong placement records and affordable fees (₹30,000–60,000/year) without needing a near-perfect cutoff.',
  },
];

export const tneaCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/tnea-2024',
  title: 'TNEA 2024 Cutoffs: CSE, ECE & Mechanical by College | T.I.M.E. Madurai',
  description: 'TNEA 2024 Round 3 (final) closing cutoffs for OC category at the top Tamil Nadu government and aided engineering colleges.',
  canonical: '/college-cutoffs/tnea-2024/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'TNEA Cutoffs 2024' }],
  eyebrow: '2024 cycle · tnea',
  heroTitle: 'TNEA 2024 Cutoffs',
  heroSubtitle: 'Out of 200 — the Maths + (Physics + Chemistry)/2 formula, applied to Tamil Nadu\'s top TNEA-admitted colleges.',
  stats: [],
  toc: [
    { id: 'cutoffs', label: 'Cutoffs by College' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Round 3 (final) closing cutoffs, OC category, 2024 cycle.',
  sections: [
    {
      id: 'cutoffs',
      title: 'TNEA 2024 cutoffs (OC), out of 200',
      table: {
        columns: ['College', 'CSE cutoff (OC)', 'ECE cutoff (OC)', 'Mech cutoff (OC)'],
        rows: [
          ['College of Engineering, Guindy (CEG), Chennai', '~196–198', '~194–196', '~192–194'],
          ['PSG College of Technology, Coimbatore (Aided)', '~194–197', '~192–195', '~189–192'],
          ['Coimbatore Institute of Technology (Aided)', '~192–195', '~190–193', '~186–190'],
          ['Government College of Technology (GCT), Coimbatore', '~193–196', '~191–194', '~187–191'],
          ['Thiagarajar College of Engineering (TCE), Madurai (Aided)', '~191–194', '~188–192', '~183–188'],
          ['National Engineering College (NEC), Kovilpatti (Aided)', '~188–192', '~184–189', '~178–184'],
          ['SSN College, Chennai (Aided)', '~194–197', '~192–195', '~188–192'],
          ['Mepco Schlenk Engineering College, Sivakasi (Aided)', '~187–191', '~183–188', '~176–182'],
          ['Kumaraguru College of Technology, Coimbatore (Unaided)', '~183–188', '~179–184', '~170–176'],
          ['Bannari Amman Institute of Technology, Sathyamangalam', '~182–187', '~177–182', '~168–174'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'CEG — the oldest engineering college in Asia — is the gold standard for TNEA admissions, requiring a cutoff of 196+ for CSE (OC), demanding near-perfect scores across all three subjects. Students in the 185–194 range should target Tier 2 aided colleges like TCE, NEC, Mepco Schlenk, or GCT, which offer strong placement records at affordable fees (₹30,000–60,000/year).',
      },
    },
  ],
  faqs,
  faqTitle: 'TNEA cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Want your board-marks cutoff projected against these numbers?',
  ctaSub: 'A counsellor can help you plan your TNEA college list.',
});
