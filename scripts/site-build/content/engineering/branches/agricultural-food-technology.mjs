import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Agricultural & Food Technology the same as an Agriculture (B.Sc. Ag) degree?',
    a: 'No — this is an engineering degree (B.Tech) focused on farm machinery, food processing technology, and agricultural systems engineering, distinct from a B.Sc. Agriculture, which focuses on crop science and agronomy itself. The B.Tech route leads more directly into food processing companies and agri-equipment manufacturers.',
  },
  {
    q: 'What\'s the realistic career market for this branch in Tamil Nadu specifically?',
    a: 'Genuinely strong for the region — Tamil Nadu has a large food processing and agri-business industry, and TNAU (Tamil Nadu Agricultural University) Coimbatore is a well-regarded, TN-specific institute for this exact field, giving in-state graduates a real local industry to enter.',
  },
];

export const agriFoodPage = buildLeafPage({
  slug: 'engineering/branches/agricultural-food-technology',
  title: 'Agricultural & Food Technology Engineering: Branch Guide & Careers | T.I.M.E. Madurai',
  description: 'What Agricultural & Food Technology Engineering covers, food processing and agri-equipment careers, realistic salaries, and who fits this branch.',
  canonical: '/engineering/branches/agricultural-food-technology/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Agricultural & Food Technology' }],
  eyebrow: 'branch profile',
  heroTitle: 'Agricultural & Food Technology Engineering',
  heroSubtitle: 'Farm machinery, food processing technology, and agricultural systems — an engineering degree with genuinely strong Tamil Nadu-specific relevance.',
  stats: [
    { value: '₹3.5–7L', label: 'Fresher salary range' },
    { value: 'TNAU Coimbatore', label: 'TN\'s dedicated agri-engineering institute' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Agricultural & Food Technology Engineers design the machinery, processing systems, and technology that move food from farm to shelf — an engineering discipline distinct from agriculture science itself.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Farm machinery design, food processing technology, post-harvest engineering, food packaging, irrigation engineering'],
          ['Core subjects', 'Farm Power & Machinery, Food Process Engineering, Post-Harvest Technology, Food Packaging, Irrigation & Drainage Engineering'],
          ['Skills required', 'Interest in food systems and agricultural technology, practical/hands-on problem-solving, process-engineering mindset'],
          ['Career paths', 'Food Process Engineer, Farm Machinery Design Engineer, Quality Control Engineer (food industry), Agri-Business Technologist'],
          ['Top recruiters', 'ITC Foods, Nestlé India, Britannia, agri-equipment manufacturers, food processing PSUs and state agri-departments'],
          ['Starting salary', 'TNAU/top institutes: ₹4.5–7 LPA; Average private colleges: ₹3–4 LPA'],
          ['Personality fit', 'Genuine interest in food systems, agriculture, and rural/semi-urban industry settings over purely urban corporate roles'],
          ['Future demand (2030)', 'Growing as India\'s food processing industry expands and farm mechanisation increases, supported by government food-processing investment schemes'],
          ['Higher studies', 'M.Tech in Food Technology/Agricultural Engineering, MS abroad in Food Science, MBA in Agri-Business Management'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TNAU (Tamil Nadu Agricultural University) in Coimbatore is one of India\'s most established institutes for this exact field, with strong ties to the state\'s food processing and agri-equipment industry — a genuinely strong in-state option, not a fallback choice.',
      },
    },
  ],
  faqs,
  faqTitle: 'Agricultural & Food Technology — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Interested in food technology or agri-engineering specifically?',
  ctaSub: 'A counsellor can walk through TNAU and other in-state options with you.',
});
