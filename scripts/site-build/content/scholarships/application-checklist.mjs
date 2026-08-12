import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the single biggest reason students miss scholarships they qualify for?',
    a: 'Missing the application deadline — NSP scholarships often close in November, and many students discover them only in January, losing an entire year\'s benefit. This is almost always avoidable with a fixed annual reminder.',
  },
  {
    q: 'Do scholarships renew automatically each year?',
    a: 'No — nearly every scholarship needs annual renewal with updated documents: a marks certificate showing at least 60%, a fee-paid receipt, and proof of continued enrollment. Treat renewal as a yearly task from Year 1 through graduation, not a one-time application.',
  },
];

export const applicationChecklistPage = buildLeafPage({
  slug: 'scholarships/application-checklist',
  title: 'Scholarship Application Checklist & Timeline | T.I.M.E. Madurai',
  description: 'What to apply for, when, and with which documents — a year-by-year scholarship and loan application timeline for engineering and medical students.',
  canonical: '/scholarships/application-checklist/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Scholarships', href: '/scholarships/' }, { label: 'Application Checklist' }],
  eyebrow: 'scholarships · the calendar',
  heroTitle: 'Scholarship & Loan Application Checklist',
  heroSubtitle: 'Every deadline in one place — because the single biggest scholarship mistake isn\'t ineligibility, it\'s missing the window.',
  stats: [ { value: 'Aug–Nov', label: 'Core application window' }, { value: '60%', label: 'Min. marks for most renewals' } ],
  toc: [
    { id: 'checklist', label: 'The Full Checklist' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Treat this as a family calendar item, not a one-time task — most scholarships need annual renewal from Year 1 through graduation.',
  sections: [
    {
      id: 'checklist',
      title: 'What to apply for, and when',
      table: {
        columns: ['Action', 'When', 'Documents needed'],
        rows: [
          ['Apply for CSSS', 'August–October, Year 1', '12th marksheet, income certificate, bank account (student name), Aadhaar, admission proof'],
          ['Apply for Post-Matric SC/ST Scholarship', 'August–November, Year 1', 'SC/ST certificate, income certificate, admission letter, fee receipt, bank details'],
          ['Apply for BC/MBC State Scholarship (TN)', 'September–November, Year 1', 'BC/MBC certificate, income cert, TN nativity, bank details, fee-paid receipt'],
          ['Apply for AICTE Pragati/Saksham', 'October–November, Year 1 (Girls/PwD)', 'Admission proof, AICTE-recognised college proof, Aadhaar, bank details'],
          ['Apply for Minority Post-Matric Scholarship', 'August–November, Year 1', 'Minority community certificate, income cert, admission proof'],
          ['Open a bank education loan', 'Before/at admission — June–July', 'Admission letter, fee structure, co-borrower income proof, collateral if &gt; ₹7.5 lakh'],
          ['Renew all scholarships annually', 'August–October, every year', 'Updated marks certificate (min. 60%), fee-paid receipt, continued enrollment proof'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'The single biggest mistake',
        text: 'Missing the application deadline. NSP scholarships often close in November — many students discover them only in January and lose an entire year\'s benefit. Add "scholarship applications" to the family calendar as a fixed October task, every year from Year 1 to Year 4 of the course.',
      },
    },
  ],
  faqs,
  faqTitle: 'Application checklist — quick answers',
  backLink: { label: 'the Scholarships hub', href: '/scholarships/' },
  ctaHeading: 'Want a personalised scholarship deadline tracker?',
  ctaSub: 'A counsellor can build one around your specific category and college.',
});
