import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Should I always choose the bank with the lowest interest rate?',
    a: 'Not automatically — speed of disbursement and branch accessibility matter too, especially around fee-payment deadlines. Indian Bank and IOB, both Chennai-headquartered, are often faster for TN students specifically because of their dense district branch networks, even when their rate isn\'t the absolute lowest on paper.',
  },
  {
    q: 'When does a private lender like Axis or HDFC Credila make sense over a PSU bank?',
    a: 'When speed matters more than rate — private lenders offer faster approval and larger amounts (₹20–75 lakh with collateral) at a higher rate (11–14%) than PSU banks. They\'re useful when a PSU bank\'s process is too slow relative to your fee-payment deadline, or when you need an amount beyond what a PSU bank will readily offer.',
  },
];

export const bankComparisonPage = buildLeafPage({
  slug: 'education-loans/bank-comparison',
  title: 'Education Loan Bank Comparison: SBI, Canara, Indian Bank & More | T.I.M.E. Madurai',
  description: 'A side-by-side comparison of major Indian banks\' education loan products — maximum amount without collateral, interest rates, and which is best for Tamil Nadu students.',
  canonical: '/education-loans/bank-comparison/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Education Loans', href: '/education-loans/' }, { label: 'Bank Comparison' }],
  eyebrow: 'education loans · where to apply',
  heroTitle: 'Education Loan Bank Comparison',
  heroSubtitle: 'Every major lender relevant to Tamil Nadu students, side by side — because the difference between banks is often about branch access and speed, not just the headline rate.',
  stats: [],
  toc: [
    { id: 'comparison', label: 'The Comparison' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Apply through the Vidya Lakshmi Portal (vidyalakshmi.co.in) so a single application reaches multiple banks — you can compare real offers rather than advertised rates.',
  sections: [
    {
      id: 'comparison',
      title: 'Major banks, side by side',
      table: {
        columns: ['Bank', 'Loan product', 'Max (no collateral)', 'Interest rate', 'Notes'],
        rows: [
          ['State Bank of India (SBI)', 'SBI Student Loan / Global Ed-Vantage', '₹7.5 lakh (India); ₹1.5 cr (abroad)', '~9.55–11.15%', 'Vidya Lakshmi Portal; 0.5% concession for girl students'],
          ['Canara Bank', 'Vidya Turant / Canara Skill Loan', '₹7.5 lakh', '~9.25–10.5%', 'Fast disbursement for Premier Institutions list'],
          ['Bank of Baroda', 'Baroda Scholar', '₹7.5 lakh (India); ₹150 lakh (abroad)', '~9.85–11.0%', 'Good for medical loans; long repayment tenure'],
          ['Indian Bank', 'IND Scholar / IND Vidya Loan', '₹7.5 lakh', '~9.5–11.0%', 'Chennai HQ; strong TN branch network — recommended for TN students'],
          ['Indian Overseas Bank (IOB)', 'IOB Vidya Jyoti', '₹7.5 lakh', '~10.0–11.5%', 'Chennai HQ; easy access across TN; study-abroad option available'],
          ['Axis Bank / HDFC Credila', 'Private education loan', '₹20–75 lakh (with collateral)', '~11–14%', 'Faster approval, higher amounts, higher rate'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Indian Bank and Indian Overseas Bank — both headquartered in Chennai — are particularly accessible for Tamil Nadu students thanks to their district-level branch networks. For IIT/NIT admissions, all major banks process loans faster since these institutes sit on the "Premier Institutions" list, with minimal collateral scrutiny for amounts under ₹7.5 lakh.',
      },
    },
  ],
  faqs,
  faqTitle: 'Bank comparison — quick answers',
  backLink: { label: 'the Education Loans hub', href: '/education-loans/' },
  ctaHeading: 'Want help comparing real offers across banks?',
  ctaSub: 'A counsellor can help you read the fine print before you sign.',
});
