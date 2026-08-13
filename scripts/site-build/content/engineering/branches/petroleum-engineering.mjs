import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Petroleum Engineering a risky branch to choose given the shift toward renewable energy?',
    a: 'It\'s a genuine consideration — India\'s energy mix is diversifying. That said, oil and gas exploration and production remain a large, ongoing industry for the foreseeable future, and Petroleum Engineers with a solid foundation can also move into subsurface/reservoir roles relevant to carbon capture and geothermal energy, which are growing fields adjacent to the traditional core.',
  },
  {
    q: 'Where in India can I study Petroleum Engineering?',
    a: 'ISM Dhanbad (IIT-ISM Dhanbad) is India\'s most established option, alongside University of Petroleum and Energy Studies (UPES) Dehradun and a small number of other specialised institutes. Seat counts are very limited compared to mainstream branches.',
  },
];

export const petroleumPage = buildLeafPage({
  slug: 'engineering/branches/petroleum-engineering',
  title: 'Petroleum Engineering: Branch Guide, Careers & Salary | T.I.M.E. Madurai',
  description: 'What Petroleum Engineering covers, where to study it, ONGC/private-sector careers, realistic salaries, and who fits this small, specialised branch.',
  canonical: '/engineering/branches/petroleum-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Petroleum Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Petroleum Engineering',
  heroSubtitle: 'Oil and gas exploration, drilling, and production — a small, specialised branch anchored by ONGC and India\'s upstream energy sector.',
  stats: [
    { value: 'IIT-ISM Dhanbad / UPES', label: 'Main Indian institutes' },
    { value: 'ONGC / OIL / Reliance', label: 'Primary recruiters' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Petroleum Engineers work on locating, extracting, and producing oil and gas — a narrow but well-paying field anchored by a handful of large public and private energy companies.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Reservoir engineering, drilling engineering, well completion, petroleum geology, production engineering'],
          ['Core subjects', 'Reservoir Engineering, Drilling Engineering, Petroleum Geology, Well Completion & Stimulation'],
          ['Skills required', 'Strong physics/chemistry foundation, willingness to work at remote field sites (rigs, offshore platforms), risk-awareness'],
          ['Career paths', 'Reservoir Engineer, Drilling Engineer, Production Engineer, Petrophysicist, Offshore Field Engineer'],
          ['Top recruiters', 'ONGC, Oil India Limited (OIL), Reliance Industries, Cairn Oil & Gas, Schlumberger, Halliburton'],
          ['Starting salary', 'IIT-ISM/UPES: ₹8–15 LPA, often with substantial field/offshore allowances on top'],
          ['Personality fit', 'Comfortable with field postings away from home, sometimes offshore; genuine interest in geology and subsurface engineering'],
          ['Future demand (2030)', 'Stable near-term as India continues upstream exploration, though long-term growth is slower than emerging branches given the broader energy transition'],
          ['Higher studies', 'M.Tech in Petroleum Engineering (ISM Dhanbad), MS abroad (Texas, Oklahoma have strong petroleum programmes), specialisation via ONGC\'s own training institutes'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'ONGC\'s offshore operations in the Cauvery basin off the Tamil Nadu coast (near Karaikal/Nagapattinam) give Tamil Nadu-origin Petroleum Engineering graduates a genuine regional connection to the industry, alongside the larger national ONGC/OIL recruitment base.',
      },
    },
  ],
  faqs,
  faqTitle: 'Petroleum Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Weighing this specialised, field-heavy branch seriously?',
  ctaSub: 'A counsellor can help you understand the realistic day-to-day before you commit.',
});
