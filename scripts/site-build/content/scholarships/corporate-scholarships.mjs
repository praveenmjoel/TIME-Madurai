import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Are corporate scholarships harder to get than government ones?',
    a: 'Generally more competitive since seat counts are smaller, but many are genuinely worth the effort — Reliance Foundation offers up to ₹6 lakh/year for medical students, and several (Infosys, L&T) are disbursed directly through your college rather than requiring a separate national-level application process.',
  },
  {
    q: 'When should I start looking for these scholarships?',
    a: 'The same window as government schemes — August to November of each academic year. Set a fixed reminder (October 1st is a good anchor) to review scholarships.gov.in, your college notice board, and NSP announcements together each year, since many corporate scholarships are less visible than the major government ones.',
  },
];

export const corporateScholarshipsPage = buildLeafPage({
  slug: 'scholarships/corporate-scholarships',
  title: 'Corporate & Foundation Scholarships for Engineering & Medical Students | T.I.M.E. Madurai',
  description: 'Reliance Foundation, Infosys, L&T, Google, and other corporate scholarships worth applying for — eligibility, amounts, and where to apply.',
  canonical: '/scholarships/corporate-scholarships/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Scholarships', href: '/scholarships/' }, { label: 'Corporate & Foundation Scholarships' }],
  eyebrow: 'scholarships · private sector',
  heroTitle: 'Corporate & Foundation Scholarships',
  heroSubtitle: 'Beyond government schemes, several major companies and foundations fund students at top institutions directly — often underused simply because students don\'t know they exist.',
  stats: [ { value: '₹6L/yr', label: 'Reliance Foundation medical scholarship' } ],
  toc: [
    { id: 'scholarships', label: 'The Scholarships' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'These are means-tested, merit-based, or both — check each scheme\'s specific income and institution requirements before applying.',
  sections: [
    {
      id: 'scholarships',
      title: 'Major corporate & foundation scholarships',
      table: {
        columns: ['Scholarship', 'Who', 'Amount'],
        rows: [
          ['Reliance Foundation UG Scholarship', 'Top students at IITs, NITs, top medical/law/mgmt colleges; income ≤ ₹2.5 lakh', '₹4 lakh/yr (engineering); ₹6 lakh/yr (medical)'],
          ['L&amp;T Construction Student Fellowship', 'Civil/Structural engineering students at top institutions', '₹50,000–60,000/yr'],
          ['Sitaram Jindal Foundation Scholarship', 'Merit + means, multiple UG streams; income &lt; ₹3 lakh', '₹24,000–36,000/yr'],
          ['Infosys Foundation Scholarships', 'Engineering students at selected institutions; merit + need', '₹50,000/yr'],
          ['Google Generation Scholarship', 'Women in CS/IT; students with disabilities in CS/IT', '$1,000 (USD)'],
          ['HDFC Educational Crisis Scholarship', 'Students facing financial crisis mid-course; income &lt; ₹2 lakh', 'Up to ₹75,000 one-time'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Timing matters',
        text: 'Scholarship season is August–November of each academic year. Keep an eye on scholarships.gov.in, your college notice board, and NSP announcements — many students miss these simply because they didn\'t apply in time. Set a reminder for October 1st every year to review and apply for everything you\'re eligible for.',
      },
    },
  ],
  faqs,
  faqTitle: 'Corporate scholarships — quick answers',
  backLink: { label: 'the Scholarships hub', href: '/scholarships/' },
  ctaHeading: 'Want help identifying which corporate scholarships fit your college and branch?',
  ctaSub: 'A counsellor can match you to the right ones.',
});
