import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What does a ₹60 lakh MBBS loan actually cost per month?',
    a: 'At 11% interest over 15 years, roughly ₹68,000/month EMI. That\'s more than most newly qualified MBBS doctors earn during their one-year internship and the 1–2 years typically spent preparing for NEET PG — a gap families need to plan around, not discover after the fact.',
  },
  {
    q: 'Is a government MBBS seat really that much cheaper to finance?',
    a: 'Dramatically so. A TN government MBBS seat costs roughly ₹1.5–2 lakh total across 5.5 years (even less for SC/ST students, at ₹75,000–1 lakh with scholarship support) — no meaningful loan needed. A private management-quota seat can run ₹38–82 lakh total. The gap is the difference between "self-funded" and "decade-plus loan commitment."',
  },
];

export const financingMedicalPage = buildLeafPage({
  slug: 'education-loans/financing-medical-education',
  title: 'Financing Medical Education: MBBS Loan Guide & EMI Reality Check | T.I.M.E. Madurai',
  description: 'What government, government-quota, and management-quota MBBS actually cost over 5.5 years, and the real EMI math on a private medical education loan.',
  canonical: '/education-loans/financing-medical-education/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Education Loans', href: '/education-loans/' }, { label: 'Financing Medical Education' }],
  eyebrow: 'education loans · medical-specific',
  heroTitle: 'Financing Medical Education',
  heroSubtitle: 'MBBS is 5.5 years, and the cost gap between government and private management-quota seats is the single largest financial decision most medical families will make.',
  stats: [ { value: '₹68K/mo', label: 'EMI on a ₹60L loan @ 11%, 15 yrs' }, { value: '₹1.5–2L', label: 'Total cost, TN govt MBBS' } ],
  toc: [
    { id: 'costs', label: 'Cost by College Type' },
    { id: 'reality', label: 'The EMI Reality Check' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Understanding the full financial picture before choosing a management-quota seat is essential — the decision affects a decade or more of your family\'s finances.',
  sections: [
    {
      id: 'costs',
      eyebrow: 'the full range',
      title: 'What MBBS costs, by college type',
      table: {
        columns: ['College / category', 'Annual fee (approx.)', 'Total cost (5.5 yrs)', 'Loan strategy'],
        rows: [
          ['Govt MBBS, TN (OC/BC)', '₹27,500/yr', '~₹1.5–2 lakh total', 'No loan needed for most; state scholarship covers most expenses'],
          ['Govt MBBS, TN (SC/ST)', '~₹13,500/yr (concession)', '~₹75,000–1 lakh total', 'Post-matric scholarship + zero tuition covers most; minimal loan if any'],
          ['Private MBBS (govt-quota seat)', '₹1.5–3 lakh/yr', '~₹8–16 lakh total', 'Education loan ₹10–20 lakh under IBA scheme'],
          ['Private MBBS (management quota)', '₹7–15 lakh/yr', '~₹38–82 lakh total', 'Large loan (₹40–80 lakh) with collateral — needs careful family planning'],
        ],
      },
    },
    {
      id: 'reality',
      eyebrow: 'do the math before you sign',
      title: 'The EMI reality check',
      callout: {
        type: 'mistake',
        label: 'Run the numbers first',
        text: 'A ₹60 lakh loan at 11% for 15 years works out to approximately ₹68,000/month EMI. A newly qualified MBBS doctor\'s income during the 1-year internship, followed by 1–2 years of NEET PG preparation, typically cannot cover this. Management-quota medical loans need very careful family-level financial planning — government MBBS or BAMS is dramatically more affordable, and worth genuinely weighing against a drop year (see our Drop Year Decision guide).',
      },
    },
  ],
  faqs,
  faqTitle: 'Financing MBBS — quick answers',
  backLink: { label: 'the Education Loans hub', href: '/education-loans/' },
  ctaHeading: 'Weighing a management-quota seat against a drop year for government?',
  ctaSub: 'A fifteen-minute conversation can save a decade of loan repayment.',
});
