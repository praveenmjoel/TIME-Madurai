import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'When should I actually apply for the loan — before or after admission?',
    a: 'At or immediately after admission, in June–July, once you have your admission letter and fee structure in hand. Banks need these documents to process the loan, and starting early avoids delays that could affect your fee-payment deadline.',
  },
  {
    q: 'What happens if I get a job before the moratorium period ends?',
    a: 'Repayment typically starts 6 months after you begin working, or at the end of the moratorium (course duration + 1 year), whichever comes first. So a fast job placement can actually shorten your interest-free/deferred period rather than extend it — plan your finances accordingly.',
  },
];

export const completeGuidePage = buildLeafPage({
  slug: 'education-loans/complete-guide',
  title: 'Complete Guide to Education Loans for Engineering & Medical Students | T.I.M.E. Madurai',
  description: 'How the IBA Model Education Loan Scheme actually works — loan amounts, interest rates, moratorium periods, and the full application process.',
  canonical: '/education-loans/complete-guide/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Education Loans', href: '/education-loans/' }, { label: 'Complete Guide' }],
  eyebrow: 'education loans · the basics',
  heroTitle: 'The Complete Education Loan Guide',
  heroSubtitle: 'Most Indian banks follow the same IBA Model Scheme — understanding its structure once means you can compare any bank\'s offer intelligently.',
  stats: [ { value: '₹10L', label: 'Max loan without collateral' }, { value: '15 yrs', label: 'Max repayment tenure' } ],
  toc: [
    { id: 'scheme', label: 'The IBA Model Scheme' },
    { id: 'process', label: 'The Application Process' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'The Indian Banks\' Association Model Education Loan Scheme is the template most public-sector banks follow — knowing its structure lets you evaluate any lender\'s offer against a common baseline.',
  sections: [
    {
      id: 'scheme',
      title: 'The standard scheme, feature by feature',
      table: {
        columns: ['Feature', 'Standard terms'],
        rows: [
          ['Loan without collateral', 'Up to ₹10 lakh, based on studies alone'],
          ['Loan above ₹10 lakh', 'Requires collateral security'],
          ['Interest rate', '8.5–12% p.a., depending on bank, amount, and category'],
          ['Moratorium period', 'Course duration + 1 year (or 6 months after employment, whichever is earlier) — no repayment during this time'],
          ['Repayment tenure', 'Up to 15 years after the moratorium ends'],
          ['Interest subsidy', 'Available for eligible students via central and TN state schemes — see our Interest Subsidy Schemes guide'],
        ],
      },
    },
    {
      id: 'process',
      title: 'How to actually apply',
      table: {
        columns: ['Step', 'Detail'],
        rows: [
          ['1. Gather documents', 'Admission letter, fee structure, co-borrower income proof, academic records'],
          ['2. Apply via Vidya Lakshmi Portal', 'One application reaches multiple banks — compare offers before committing to one'],
          ['3. Collateral (if &gt; ₹10 lakh)', 'Property or fixed deposit as security — bank will specify acceptable collateral types'],
          ['4. Disbursement', 'Typically direct to the institution per semester/year, not as a lump sum to the family'],
          ['5. Moratorium', 'No repayment during course + 1 year — interest may still accrue unless subsidised'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'For IIT/NIT admissions specifically, banks process loans faster since these are on the "Premier Institutions" list — minimal collateral scrutiny for amounts under ₹7.5 lakh. Apply via vidyalakshmi.co.in so you can compare multiple bank offers from a single application.',
      },
    },
  ],
  faqs,
  faqTitle: 'Education loans — quick answers',
  backLink: { label: 'the Education Loans hub', href: '/education-loans/' },
  ctaHeading: 'Ready to start your loan application?',
  ctaSub: 'A counsellor can help you sequence it alongside your admission timeline.',
});
