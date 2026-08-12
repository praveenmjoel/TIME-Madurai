import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Can I get both the Central Sector Scholarship and the Post-Matric SC/ST Scholarship?',
    a: 'No — CSSS and the Post-Matric SC/ST Scholarship serve overlapping purposes and generally aren\'t combined; SC/ST students should apply for the Post-Matric scheme specifically, since it covers full tuition plus maintenance, a stronger benefit than CSSS\'s flat annual amount.',
  },
  {
    q: 'What GPA or marks do I need to keep these scholarships renewed?',
    a: 'Most central scholarships, including CSSS, require maintaining at least 60% marks each year for renewal, along with proof of continued enrollment and a fee-paid receipt. Missing this threshold in any year typically ends the scholarship, not just pauses it.',
  },
];

export const centralScholarshipsPage = buildLeafPage({
  slug: 'scholarships/central-government-scholarships',
  title: 'Central Government Scholarships for JEE & NEET Students 2026 | T.I.M.E. Madurai',
  description: 'CSSS, Post-Matric SC/ST Scholarship, and AICTE Pragati/Saksham/Swanath explained — eligibility, amounts, and how to apply.',
  canonical: '/scholarships/central-government-scholarships/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Scholarships', href: '/scholarships/' }, { label: 'Central Government Scholarships' }],
  eyebrow: 'scholarships · central',
  heroTitle: 'Central Government Scholarships',
  heroSubtitle: 'National schemes available regardless of which state college or university you attend — the first place to check before assuming you need a loan.',
  stats: [ { value: '82,000', label: 'CSSS scholarships per year' }, { value: '₹50,000/yr', label: 'AICTE Pragati/Saksham/Swanath amount' } ],
  toc: [
    { id: 'schemes', label: 'The Schemes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'These are national schemes administered through the National Scholarship Portal (scholarships.gov.in) — apply in August–October of your admission year.',
  sections: [
    {
      id: 'schemes',
      title: 'Central scholarship schemes',
      table: {
        columns: ['Scholarship', 'Who qualifies', 'Amount'],
        rows: [
          ['Central Sector Scheme (CSSS)', '80th+ percentile in Class 12 boards; family income ≤ ₹8 lakh', '₹10,000/yr (1st yr); ₹20,000/yr (2nd–4th yr UG/PG)'],
          ['Post-Matric Scholarship (SC/ST)', 'SC/ST students; family income ≤ ₹2.5 lakh/yr', 'Full tuition + maintenance allowance (₹1,200–1,500/mo hostellers)'],
          ['AICTE Pragati (girls)', 'Girl students in AICTE-approved technical colleges; income ≤ ₹8 lakh', '₹50,000/yr — 4,000 seats/yr'],
          ['AICTE Saksham (PwD)', 'PwD students in engineering/pharmacy/architecture', '₹50,000/yr — 1,000 seats/yr'],
          ['AICTE Swanath', 'Orphans, children of armed forces martyrs', '₹50,000/yr — 2,000 seats/yr'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'An SC/ST student at an IIT gets a full tuition waiver AND qualifies for the central Post-Matric Scholarship for maintenance — combined, this makes an IIT education close to genuinely free for many families. Apply in August–September of admission year at scholarships.gov.in.',
      },
    },
  ],
  faqs,
  faqTitle: 'Central scholarships — quick answers',
  backLink: { label: 'the Scholarships hub', href: '/scholarships/' },
  ctaHeading: 'Not sure which central scheme you qualify for?',
  ctaSub: 'A counsellor can check your eligibility against every scheme at once.',
});
