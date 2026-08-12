import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is BITSAT Pilani\'s cutoff really higher than BITS Hyderabad\'s?',
    a: 'Yes — BITS Pilani (the main, original campus) requires roughly 395–410 for CSE, while BITS Hyderabad needs roughly 370–385. Hyderabad is the more accessible campus for a similar BITS-brand outcome, and it\'s the closest campus geographically for Tamil Nadu students.',
  },
  {
    q: 'How does BITS Dubai compare on cutoffs and value?',
    a: 'BITS Dubai has a noticeably lower cutoff (~280–310 for CSE) since it\'s the international campus with a smaller applicant pool — but weigh it against currency-adjusted fees and career-network differences before treating it as an easier route to the same outcome.',
  },
];

export const bitsatCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/bitsat-2024',
  title: 'BITSAT 2024 Cutoffs: BITS Pilani, Goa & Hyderabad by Branch | T.I.M.E. Madurai',
  description: 'BITSAT 2024 Iteration 2 score cutoffs across BITS Pilani, Goa, Hyderabad, and Dubai campuses, by programme.',
  canonical: '/college-cutoffs/bitsat-2024/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'BITSAT Cutoffs 2024' }],
  eyebrow: '2024 cycle · bitsat',
  heroTitle: 'BITSAT 2024 Cutoffs',
  heroSubtitle: 'Score-based, not rank-based — BITS admits directly on your BITSAT score out of 390 (plus up to 36 bonus marks).',
  stats: [],
  toc: [
    { id: 'cutoffs', label: 'Cutoffs by Campus & Programme' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Figures are Iteration 2, 2024 cycle — treat as a planning benchmark since cutoffs shift with applicant pool strength each year.',
  sections: [
    {
      id: 'cutoffs',
      title: 'BITSAT 2024 score cutoffs (Iteration 2)',
      table: {
        columns: ['Campus', 'Programme', 'Approx. BITSAT score cutoff'],
        rows: [
          ['BITS Pilani (main)', 'CSE', '~395–410'],
          ['BITS Pilani (main)', 'Electronics &amp; Instrumentation (EI)', '~370–385'],
          ['BITS Pilani (main)', 'Mechanical Engineering', '~340–360'],
          ['BITS Pilani (main)', 'B.Pharm', '~295–315'],
          ['BITS Goa', 'CSE', '~380–395'],
          ['BITS Goa', 'Electronics &amp; Instrumentation', '~355–375'],
          ['BITS Hyderabad', 'CSE', '~370–385'],
          ['BITS Hyderabad', 'Electronics &amp; Communication', '~355–370'],
          ['BITS Hyderabad', 'Mechanical Engineering', '~320–340'],
          ['BITS Dubai', 'CSE', '~280–310 (lower; international campus)'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'BITS Pilani CSE with a score of 395+ is considered equivalent to top NIT CSE in industry perception — but annual fees are roughly ₹5–5.5 lakh, meaningfully higher than an NIT\'s ₹1.5–2 lakh/year. For TN students scoring 360+, BITS Hyderabad and Goa offer excellent CS and ECE programmes worth serious consideration alongside JoSAA options.',
      },
    },
  ],
  faqs,
  faqTitle: 'BITSAT cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Weighing BITSAT against your JEE Main preparation time?',
  ctaSub: 'A counsellor can help you balance both exam calendars.',
});
