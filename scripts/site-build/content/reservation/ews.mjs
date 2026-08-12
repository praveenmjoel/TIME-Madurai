import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Can an SC/ST or OBC student also claim EWS if their income is low?',
    a: 'No — EWS is exclusively for General category students (not SC/ST/OBC) with income below ₹8 lakh and specific asset limits. An SC/ST or BC student with low income uses their own category\'s reservation, which typically carries a larger share and lower cutoffs than EWS.',
  },
  {
    q: 'Does claiming EWS reduce seats available to General category students?',
    a: 'No — EWS is a separate 10% addition to total seats at most institutions, not a carve-out from the existing General quota. It sits alongside OBC, SC, and ST as its own reservation pool.',
  },
];

export const ewsPage = buildLeafPage({
  slug: 'reservation/ews',
  title: 'EWS Reservation Explained: Eligibility & Certificate | T.I.M.E. Madurai',
  description: 'How the 10% Economically Weaker Section reservation works — income and asset criteria, who actually qualifies, and how it differs from OBC-NCL.',
  canonical: '/reservation/ews/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'EWS' }],
  eyebrow: 'reservation · central',
  heroTitle: 'EWS Reservation',
  heroSubtitle: 'A 10% reservation for General-category students under specific income and asset limits — introduced in 2019, and frequently confused with OBC-NCL.',
  stats: [ { value: '10%', label: 'EWS reservation share' }, { value: '2019', label: 'Introduced via 103rd Amendment' } ],
  toc: [
    { id: 'details', label: 'Eligibility Details' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'EWS applies only to General-category students — the single most important thing to understand before claiming it.',
  sections: [
    {
      id: 'details',
      title: 'EWS eligibility, in detail',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Who qualifies', 'GEN category (not SC/ST/OBC) students with gross annual family income below ₹8 lakh, AND who don\'t own agricultural land &gt; 5 acres, a residential flat &gt; 1,000 sq ft, or a residential plot &gt; 100 sq yards in notified municipalities'],
          ['Certificate required', 'EWS certificate from Tahsildar/SDM on GOI prescribed format; valid for one year, issued in the financial year of application'],
          ['Introduced', '2019 (103rd Amendment); applies to all central institutions from 2019–20 admissions onwards'],
          ['Important distinction', 'EWS is an addition to total seats at most institutions — it does not reduce GEN, OBC, SC, or ST seat counts'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'EWS and OBC-NCL get confused constantly. If you\'re OBC (community on the Central list) with income below ₹8 lakh, you should claim OBC-NCL — not EWS. EWS is only for General-category students who are not SC/ST/OBC. Claiming the wrong category can get your application rejected or your seat cancelled at document verification.',
      },
    },
  ],
  faqs,
  faqTitle: 'EWS — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Not sure whether EWS or another category applies to you?',
  ctaSub: 'A counsellor can help confirm the right category before you apply.',
});
