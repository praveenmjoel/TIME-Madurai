import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What does "full interest subsidy during moratorium" actually save me?',
    a: 'It means interest doesn\'t accrue on your loan while you\'re still studying — without the subsidy, that interest compounds and adds meaningfully to what you owe when repayment finally starts. For a large loan over a 5-year course, this can mean tens of thousands of rupees saved.',
  },
  {
    q: 'Should TN BC/MBC students go to a commercial bank first, or a state welfare office?',
    a: 'Approach the District Backward Classes and Most Backward Classes Welfare Office first. These state loan schemes have lower interest rates, less collateral requirement, and sometimes partial grant components — combine them with central interest subsidy schemes to minimise your actual out-of-pocket interest cost.',
  },
];

export const interestSubsidyPage = buildLeafPage({
  slug: 'education-loans/interest-subsidy-schemes',
  title: 'Interest Subsidy Schemes for Education Loans | T.I.M.E. Madurai',
  description: 'ACSIS for OBC/EBC students, Padho Pardesh for overseas study, and Tamil Nadu state interest-subsidy and low-interest loan schemes explained.',
  canonical: '/education-loans/interest-subsidy-schemes/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Education Loans', href: '/education-loans/' }, { label: 'Interest Subsidy Schemes' }],
  eyebrow: 'education loans · reduce the real cost',
  heroTitle: 'Interest Subsidy Schemes',
  heroSubtitle: 'Several government schemes cover your loan\'s interest during the study period — reducing what you actually owe when repayment finally begins.',
  stats: [ { value: '₹4.5L', label: 'ACSIS income cap (OBC/EBC)' } ],
  toc: [
    { id: 'central', label: 'Central Schemes' },
    { id: 'tn', label: 'Tamil Nadu Schemes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Combining a central and a state-level scheme, where eligible, can substantially reduce the effective interest cost of a large education loan.',
  sections: [
    {
      id: 'central',
      eyebrow: 'national schemes',
      title: 'Central interest subsidy schemes',
      table: {
        columns: ['Scheme', 'Who qualifies', 'Benefit'],
        rows: [
          ['Dr. Ambedkar Central Sector Scheme (ACSIS)', 'OBC/EBC students; family income ≤ ₹4.5 lakh/yr', 'Full interest subsidy during moratorium (course + 1 year) on IBA Model Scheme loans'],
          ['Padho Pardesh', 'SC/ST/OBC/Minority students studying abroad; income ≤ ₹6 lakh/yr', 'Interest subsidy during moratorium — check current status, as the scheme is paused/restarted periodically'],
          ['SC/ST Interest Subsidy (state channelising agencies)', 'SC/ST students', 'Full interest waiver during study period + moratorium, often via state SC/ST welfare departments'],
        ],
      },
    },
    {
      id: 'tn',
      eyebrow: 'state-level support',
      title: 'Tamil Nadu government schemes',
      table: {
        columns: ['Scheme', 'Eligibility', 'Benefit'],
        rows: [
          ['TN Kalvi Thittam Education Loan', 'BC/MBC/BCM/DNC TN students, income criteria apply', 'Concessional soft loan, no collateral up to ₹5 lakh — apply at district BC/MBC office'],
          ['Adi Dravidar &amp; Tribal Welfare Dept Loan', 'SC/ST TN students, professional courses', 'Low-interest loan, often combined with a scholarship'],
          ['TAHDCO', 'SC/ST TN students, professional/vocational courses', 'Education loan up to ₹4 lakh at low interest — apply at TAHDCO district office'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TN BC/MBC students should approach their District Backward Classes and Most Backward Classes Welfare Office before commercial banks — these state schemes carry lower interest, less collateral requirement, and sometimes a partial grant component. Combine with central interest subsidy schemes to minimise total interest cost.',
      },
    },
  ],
  faqs,
  faqTitle: 'Interest subsidy — quick answers',
  backLink: { label: 'the Education Loans hub', href: '/education-loans/' },
  ctaHeading: 'Not sure which subsidy schemes apply to you?',
  ctaSub: 'A counsellor can check your category and course against every scheme.',
});
