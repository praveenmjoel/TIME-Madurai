import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is reservation really as significant an advantage as people assume?',
    a: 'It helps meaningfully, but it doesn\'t remove the need for serious preparation. OBC-NCL closing ranks for top IIT CSE seats still fall in the 3,000–8,000 range — genuinely competitive by any standard. Reservation shifts the effective rank needed; it doesn\'t make admission automatic.',
  },
  {
    q: 'Is it accurate to say reservation is "unfair" to General category students?',
    a: 'This is a contested political and social question, not a factual one this guide takes a position on. What is factual: the system is constitutionally mandated, and from a purely strategic standpoint, GEN students should plan around GEN closing ranks while reserved-category students should understand how their category rank maps to seats — both groups benefit from understanding the mechanics accurately rather than relying on assumptions.',
  },
];

export const misconceptionsPage = buildLeafPage({
  slug: 'reservation/common-misconceptions',
  title: 'Common Misconceptions About Reservation in JEE & NEET | T.I.M.E. Madurai',
  description: 'Six widely-held but inaccurate beliefs about reservation in JEE and NEET admissions, corrected with real data.',
  canonical: '/reservation/common-misconceptions/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'Common Misconceptions' }],
  eyebrow: 'reservation · setting the record straight',
  heroTitle: 'Common Misconceptions About Reservation',
  heroSubtitle: 'Reservation is one of the most misunderstood parts of the entire admissions system — here are the beliefs that don\'t match the actual data.',
  stats: [],
  toc: [
    { id: 'table', label: 'Misconception vs. Reality' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'This page explains how the system works in practice for accurate planning — it does not advocate for or against reservation policy.',
  sections: [
    {
      id: 'table',
      title: 'What people assume, and what\'s actually true',
      table: {
        columns: ['Misconception', 'The reality'],
        rows: [
          ['"OBC students don\'t need to study hard"', 'OBC-NCL closing ranks for top IIT CSE seats typically fall in the 3,000–8,000 range — extremely competitive. Reservation helps, but hard work and smart preparation remain essential.'],
          ['"My TN BC certificate works for IIT/NIT"', 'Not always — you need a separate Central OBC-NCL certificate for central institutions, issued on a different format than your TN BC certificate.'],
          ['"SC/ST students are admitted with very low marks"', 'The actual scores required at top colleges remain significant. SC closing for AIIMS Delhi MBBS is around 620+ NEET — this demands exceptional preparation.'],
          ['"EWS is only for poor people"', 'EWS is specifically for GEN category with family income below ₹8 lakh AND specific asset criteria. A BC/SC/ST student with ₹3 lakh income does NOT get EWS — they use their own category.'],
          ['"Creamy layer doesn\'t apply to SC/ST"', 'Correct, actually — there is NO creamy layer for SC/ST. It applies only to OBC-NCL. SC/ST students of any income level qualify.'],
        ],
      },
      callout: {
        type: 'info',
        label: 'Note',
        text: 'Reservation policies are governed by law and constitutional provisions. This page explains how the system works in practice for JEE/NEET admissions — it does not take a position for or against reservation as policy.',
      },
    },
  ],
  faqs,
  faqTitle: 'Misconceptions — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Want an accurate read on how your category affects your realistic targets?',
  ctaSub: 'A counsellor can walk through the actual numbers, not assumptions.',
});
