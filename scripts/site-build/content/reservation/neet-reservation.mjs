import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Does reservation work differently in AIQ vs. TN State Quota for NEET?',
    a: 'Yes — AIQ (15% of govt medical seats) applies central categories (OBC-NCL 27%, SC 15%, ST 7.5%, EWS 10%, GEN 40.5%), while TN State Quota (85%) applies TN state categories (BC 26.5%, BCM 3.5%, MBC 20%, SC 18%, SCA 3%, ST 1%, OC ~31%). Your effective benefit can differ meaningfully between the two tracks for the same category.',
  },
  {
    q: 'How much lower are BC/MBC cutoffs compared to OC at top TN medical colleges?',
    a: 'Smaller than most students assume. At Madras Medical College, BC closing is roughly 30–60 marks below OC (2024 indicative: BC ~640–660 vs. OC ~670–690), and MBC closing runs roughly 10–30 marks lower than BC. Strong NEET preparation still matters most — reservation narrows the gap, it doesn\'t eliminate the need to prepare seriously.',
  },
];

export const neetReservationPage = buildLeafPage({
  slug: 'reservation/neet-reservation',
  title: 'Reservation in NEET: AIQ vs. TN State Quota Explained | T.I.M.E. Madurai',
  description: 'How reservation applies differently in NEET\'s All India Quota vs. Tamil Nadu State Quota counselling — with real closing-score gaps by category.',
  canonical: '/reservation/neet-reservation/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'Reservation in NEET' }],
  eyebrow: 'reservation · medical',
  heroTitle: 'Reservation in NEET Admissions',
  heroSubtitle: 'NEET reservation applies differently depending on whether you\'re in the 15% All India Quota or the 85% Tamil Nadu State Quota — a distinction that catches many families off guard.',
  stats: [],
  toc: [
    { id: 'comparison', label: 'AIQ vs. State Quota' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Understanding this distinction is critical to accurately predicting which medical college is realistic for your NEET score and category.',
  sections: [
    {
      id: 'comparison',
      title: 'How reservation applies, by counselling track',
      table: {
        columns: ['Counselling', 'Reservation applied', 'Detail'],
        rows: [
          ['MCC AIQ (15% govt seats)', 'Central categories: OBC-NCL 27%, SC 15%, ST 7.5%, EWS 10%, GEN 40.5%', 'OBC-NCL cutoff for MMC Chennai AIQ ~600+; SC/ST much lower; EWS similar to GEN-OBC mid-range'],
          ['TN State Quota (85% govt seats)', 'TN state categories: BC 26.5%, BCM 3.5%, MBC 20%, SC 18%, SCA 3%, ST 1%, OC ~31%', 'All categories compete within their own pool based on NEET score'],
          ['AIIMS/JIPMER', 'Central categories + institute-specific sub-quotas', 'AIIMS Delhi GEN closing ~715+; OBC-NCL ~680+; SC ~620+; ST ~580+'],
          ['Deemed universities', 'No mandatory government reservation', 'Largely merit-based; management quota for high fees'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'At Madras Medical College, BC closing scores run roughly 30–60 marks below OC (2024 indicative: BC ~640–660 vs. OC ~670–690), and MBC closing is roughly 10–30 marks below BC. These gaps are smaller than students often assume — strong NEET preparation still matters most, regardless of category.',
      },
    },
  ],
  faqs,
  faqTitle: 'NEET reservation — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Want your category-specific NEET target mapped out?',
  ctaSub: 'A counsellor can project realistic colleges for your exact category and score range.',
});
