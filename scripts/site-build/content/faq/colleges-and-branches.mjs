import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'Which is better — NIT Trichy CSE or PSG Tech CSE?', a: 'NIT Trichy CSE is significantly more prestigious for national hiring (FAANG, top product companies), research, and higher studies (MS/PhD abroad). PSG Tech (Coimbatore) is an excellent private institution with strong regional industry connections but doesn\'t match NIT Trichy at the national top-recruiter level. If you have an NIT Trichy seat in any branch, it\'s typically preferred over most private-college CSE seats.' },
  { q: 'Is it worth joining NIT Trichy in a non-CSE branch like Civil or Metallurgy?', a: 'Yes, for most students. The NIT Trichy network, alumni, and placement cell open opportunities that transcend branch. Many Civil/Metallurgy graduates shift to software roles (especially Data Analytics) or pursue higher studies (MTech/MBA) that reset their career trajectory — the NIT Trichy brand itself is valuable.' },
  { q: 'What is IIIT Kancheepuram? Is it a good option?', a: 'IIIT Kancheepuram (IIIT Design and Manufacturing) is a central government IIIT in Tamil Nadu, offering B.Tech in Computer Engineering, Smart Manufacturing, and ECE. It\'s newer — not yet at IIIT Hyderabad\'s level — but is a central institution with an NIT-equivalent fee structure and growing placements. A good option for TN students who narrowly miss NIT Trichy.' },
  { q: 'Should I prefer VIT Vellore or NIT Trichy for CSE?', a: 'NIT Trichy CSE is preferred for brand, government-sector access, research, and GATE/higher studies. VIT CSE has strong campus placements (especially mid-tier IT firms) and a very large intake allowing flexibility in specialisation tracks. If your rank gets you NIT Trichy CSE, take it. If it only gets you a non-core NIT Trichy branch but qualifies you for VIT CSE, that\'s a closer call worth discussing based on your career goals.' },
  { q: 'What NEET score gives me MBBS at Madurai Medical College?', a: 'Madurai Medical College (Government) is one of TN\'s top government medical colleges. 2024 TN state quota cutoffs (indicative): OC ~555–565, BC ~535–545, MBC ~510–525, SC ~450–465. AIQ seats (15%) close at higher scores — always verify from official TN MRB published cutoffs.' },
  { q: 'Is AIIMS better than a government medical college in TN for MBBS?', a: 'Yes, generally. AIIMS is the premier medical institution in India — AIIMS Delhi requires 680–700+ NEET score. Any AIIMS campus (AIIMS Madurai being most relevant for TN students) is preferred over state government medical colleges for research, postgraduate opportunities, and career trajectory. That said, a TN government medical college plus TN government service is also a stable, respected career.' },
  { q: 'What is the difference between government quota and management quota seats?', a: 'Government quota seats are filled through official counselling (JoSAA/TNEA/TN MRB) based on rank/score, with regulated, relatively low fees. Management quota seats are filled by the college directly without rank, at significantly higher fees — often ₹15–30 lakh/year for private medical, ₹5–15 lakh/year for private engineering. NRI quota is similar to management quota but for NRI students.' },
];

export const faqCollegesPage = buildLeafPage({
  slug: 'faq/colleges-and-branches',
  title: 'College & Branch FAQs: NIT vs. PSG, VIT vs. NIT, AIIMS & More | T.I.M.E. Madurai',
  description: 'Real head-to-head college and branch comparisons students ask about — NIT Trichy vs. PSG Tech, VIT vs. NIT, AIIMS vs. TN government medical colleges.',
  canonical: '/faq/colleges-and-branches/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }, { label: 'Colleges & Branches FAQs' }],
  eyebrow: 'faq · colleges & branches',
  heroTitle: 'College & Branch FAQs',
  heroSubtitle: 'The head-to-head comparisons every family agonises over — answered directly, not with "it depends" alone.',
  stats: [],
  toc: [ { id: 'faqs', label: 'All Questions' } ],
  sections: [],
  faqs,
  faqTitle: 'Colleges &amp; branches — every question',
  backLink: { label: 'all FAQ categories', href: '/faq/' },
  ctaHeading: 'Weighing two specific offers against each other?',
  ctaSub: 'A counsellor can give you a direct read, not a hedge.',
});
