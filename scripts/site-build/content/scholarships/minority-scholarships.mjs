import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Can I apply for more than one minority scholarship at once?',
    a: 'Yes — the Post-Matric Scholarship and the Merit-cum-Means Scholarship for Minorities are different schemes with different income limits and benefits, and TN Muslim students pursuing professional courses should apply for both, plus the TN Wakf Board\'s supplementary scholarship where applicable.',
  },
  {
    q: 'Does the Merit-cum-Means Scholarship cover MBBS and engineering fees fully?',
    a: 'It provides ₹20,000/year toward course fees plus ₹10,000/year maintenance — meaningful, but generally a partial contribution rather than a full-fee cover, especially at private medical or engineering colleges. It\'s specifically designed for professional courses (MBBS, BE/BTech, BDS, B.Pharm) and admits roughly 30,000 students per year nationally.',
  },
];

export const minorityScholarshipsPage = buildLeafPage({
  slug: 'scholarships/minority-scholarships',
  title: 'Minority Community Scholarships for JEE & NEET Students | T.I.M.E. Madurai',
  description: 'Pre-Matric, Post-Matric, and Merit-cum-Means scholarships for Muslim, Christian, Sikh, Buddhist, Jain, and Parsi students, plus the TN Wakf Board scheme.',
  canonical: '/scholarships/minority-scholarships/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Scholarships', href: '/scholarships/' }, { label: 'Minority Community Scholarships' }],
  eyebrow: 'scholarships · minority communities',
  heroTitle: 'Minority Community Scholarships',
  heroSubtitle: 'National schemes for Muslim, Christian, Sikh, Buddhist, Jain, and Parsi students — several can be combined for meaningfully larger total support.',
  stats: [ { value: '30,000', label: 'Merit-cum-Means seats/yr, nationally' } ],
  toc: [
    { id: 'schemes', label: 'The Schemes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Administered through the Ministry of Minority Affairs via the National Scholarship Portal, with an additional TN-specific scheme for Muslim students.',
  sections: [
    {
      id: 'schemes',
      title: 'Minority scholarship schemes',
      table: {
        columns: ['Scholarship', 'Who', 'Amount'],
        rows: [
          ['Pre-Matric Scholarship', 'Minority students, Class 1–10; income ≤ ₹1 lakh/yr', '₹1,000–10,000/yr depending on class level'],
          ['Post-Matric Scholarship', 'Same communities, Class 11 through PG; income ≤ ₹2 lakh/yr', 'Course fee + maintenance; professional courses get full fee reimbursement up to cap'],
          ['Merit-cum-Means Scholarship', 'Professional courses (MBBS, BE/BTech, BDS, B.Pharm); income ≤ ₹2.5 lakh/yr', '₹20,000/yr course fee + ₹10,000/yr maintenance — 30,000 seats/yr'],
          ['TN Wakf Board Scholarship', 'Muslim students in TN, various educational levels', 'Additional state-level scholarship, check eligibility with TN Wakf Board'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TN Muslim students pursuing MBBS, engineering, or other professional courses should apply for both the Central Post-Matric Scholarship AND the Merit-cum-Means Scholarship — they\'re different schemes and can be combined. Add the TN Wakf Board scholarship as supplementary support. Apply through scholarships.gov.in in September–October of the first academic year.',
      },
    },
  ],
  faqs,
  faqTitle: 'Minority scholarships — quick answers',
  backLink: { label: 'the Scholarships hub', href: '/scholarships/' },
  ctaHeading: 'Want help combining multiple minority scholarship schemes?',
  ctaSub: 'A counsellor can check which schemes stack for your specific situation.',
});
