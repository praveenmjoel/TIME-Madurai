import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Mining Engineering a good choice if I want a government job?',
    a: 'Yes — it\'s one of the more reliable GATE-to-PSU branches. Coal India and its subsidiaries, NMDC, and NLC India (Neyveli Lignite Corporation, headquartered in Tamil Nadu) all recruit Mining Engineers directly and via GATE, giving this small branch an unusually strong public-sector pathway.',
  },
  {
    q: 'What does day-to-day work actually look like in this field?',
    a: 'Expect fieldwork at mine sites — often in remote locations — rather than an office-based routine, at least early in your career. Roles involve mine planning, safety compliance, and production oversight. It suits students genuinely comfortable with on-site, sometimes physically demanding work environments.',
  },
];

export const miningPage = buildLeafPage({
  slug: 'engineering/branches/mining-engineering',
  title: 'Mining Engineering: Branch Guide, PSU Careers & Salary | T.I.M.E. Madurai',
  description: 'What Mining Engineering covers, the strong GATE-to-PSU pathway via Coal India and NLC, realistic salaries, and who fits this field-heavy branch.',
  canonical: '/engineering/branches/mining-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Mining Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Mining Engineering',
  heroSubtitle: 'Mine planning, extraction, and safety — a small, field-heavy branch with one of engineering\'s strongest GATE-to-PSU pathways.',
  stats: [
    { value: 'Coal India / NMDC / NLC', label: 'Primary PSU recruiters' },
    { value: '₹7–12L', label: 'PSU salary via GATE' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Mining Engineers plan and oversee the extraction of coal, minerals, and ore — field-based work anchored by some of India\'s largest public-sector employers.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Mine planning & design, rock mechanics, mine surveying, mineral processing, mine safety & ventilation'],
          ['Core subjects', 'Mine Planning, Rock Mechanics, Mine Surveying, Mineral Processing, Mine Ventilation & Safety'],
          ['Skills required', 'Comfort with fieldwork and on-site postings, safety-mindedness, physical readiness for site visits'],
          ['Career paths', 'Mine Planning Engineer, Production Engineer (mines), Mine Safety Officer, Mineral Processing Engineer'],
          ['Top recruiters', 'Coal India Limited and subsidiaries, NMDC, NLC India (Neyveli, Tamil Nadu), Vedanta, Hindustan Zinc'],
          ['Starting salary', 'PSU (GATE): ₹7–12 LPA, plus field/site allowances; Private mining companies: ₹4–7 LPA'],
          ['Personality fit', 'Genuinely comfortable with remote, site-based postings rather than a city-office career; safety-conscious and detail-oriented'],
          ['Future demand (2030)', 'Steady — India\'s domestic coal and mineral production remains a national priority, sustaining stable PSU hiring'],
          ['Higher studies', 'M.Tech in Mining Engineering (IIT-ISM Dhanbad, IIT Kharagpur), Mine Manager\'s Certificate of Competency for senior roles'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'NLC India Limited, headquartered in Neyveli (Cuddalore district), is one of India\'s largest lignite mining and power-generation PSUs — a genuine, close-to-home employer for Tamil Nadu Mining Engineering graduates, alongside the larger national Coal India network.',
      },
    },
  ],
  faqs,
  faqTitle: 'Mining Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Interested in a reliable GATE-to-PSU branch?',
  ctaSub: 'A counsellor can compare Mining against EEE and Mechanical for the PSU route.',
});
