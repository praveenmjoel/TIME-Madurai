import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is JIPMER Karaikal really easier to get into than JIPMER Puducherry?',
    a: 'Yes — JIPMER Karaikal, the newer TN-based campus, closes roughly 20–25 marks lower than JIPMER Puducherry (2024: ~640–655 vs. ~665–678 GEN), while offering the exact same JIPMER degree and training quality. For TN students in that range, it\'s a genuinely smart target.',
  },
  {
    q: 'What\'s the actual fee difference between govt-quota and management-quota at these private colleges?',
    a: 'Substantial — govt-quota fees at private colleges typically run ₹1.5–3 lakh/year, while management-quota fees run ₹7–15 lakh/year at the same institution. Always confirm which quota a seat offer is under before assuming the fee level.',
  },
];

export const neetTnPrivateCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/neet-tn-private-2024',
  title: 'NEET 2024 TN Private Medical College Cutoffs & Fees | T.I.M.E. Madurai',
  description: 'NEET 2024 closing scores and fees at Tamil Nadu\'s top private medical colleges, plus JIPMER and other central medical institutes.',
  canonical: '/college-cutoffs/neet-tn-private-2024/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'NEET TN Private Cutoffs 2024' }],
  eyebrow: '2024 cycle · private & central',
  heroTitle: 'NEET 2024 — TN Private Colleges & Central Institutes',
  heroSubtitle: 'Sri Ramachandra, Saveetha, SRM, and JIPMER — what score gets you in, and what it actually costs.',
  stats: [],
  toc: [
    { id: 'private', label: 'TN Private Colleges' },
    { id: 'central', label: 'JIPMER & Central Institutes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: '2024 cycle indicative data — always verify current fees directly with the college, as management-quota rates shift year to year.',
  sections: [
    {
      id: 'private',
      eyebrow: 'govt-quota closing scores',
      title: 'Top TN private medical colleges, 2024',
      table: {
        columns: ['College', 'Location', 'Govt-quota closing NEET', 'Govt-quota fee', 'Management-quota fee'],
        rows: [
          ['Sri Ramachandra Institute (SRIHER)', 'Chennai', '~610–630', '₹1.5–2.5 lakh', '₹15–20 lakh'],
          ['Saveetha Medical College', 'Chennai', '~590–615', '₹1.5–2 lakh', '₹15–18 lakh'],
          ['Chettinad Health City', 'Kelambakkam', '~600–622', '₹2–3 lakh', '₹12–16 lakh'],
          ['SRM Medical College', 'Kattankulathur', '~595–618', '₹2–3 lakh', '₹15–20 lakh'],
          ['Vinayaka Mission Medical College', 'Salem', '~570–595', '₹2–2.5 lakh', '₹8–12 lakh'],
          ['ACS Medical College', 'Chennai', '~565–588', '₹2–2.5 lakh', '₹8–12 lakh'],
          ['Meenakshi Medical College', 'Enathur', '~558–582', '₹2–2.5 lakh', '₹8–11 lakh'],
        ],
      },
    },
    {
      id: 'central',
      eyebrow: 'aiq closing scores',
      title: 'JIPMER & other central medical institutes',
      table: {
        columns: ['Institute', 'GEN closing', 'OBC closing', 'SC closing'],
        rows: [
          ['JIPMER Puducherry', '~665–678', '~638–652', '~600–618'],
          ['JIPMER Karaikal (TN campus)', '~640–655', '~610–626', '~575–592'],
          ['VMMC &amp; Safdarjung Hospital, Delhi', '~662–675', '~635–650', '~598–615'],
          ['Maulana Azad Medical College, Delhi', '~660–674', '~632–648', '~595–612'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'JIPMER Karaikal is geographically adjacent to Tamil Nadu and very accessible for TN students, closing 20–25 marks lower than JIPMER Puducherry while offering the same JIPMER-quality degree.',
      },
    },
  ],
  faqs,
  faqTitle: 'TN private medical cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Comparing a private-college seat against waiting a year for government?',
  ctaSub: 'A counsellor can walk through the real cost-benefit with you.',
});
