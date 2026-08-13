import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Materials & Metallurgical Engineering just for the steel industry?',
    a: 'Steel and core metals are one part of it, but the field now extends into semiconductor materials, battery materials for EVs, aerospace-grade alloys, and advanced ceramics — areas seeing real investment as India builds out chip and battery manufacturing.',
  },
  {
    q: 'Is this branch a safe choice for PSU jobs via GATE?',
    a: 'Yes — SAIL, Tata Steel, NALCO, and other metals PSUs recruit Metallurgical Engineers directly and through GATE, making it one of the more reliable GATE-to-PSU branches, alongside Mechanical and EEE.',
  },
];

export const materialsPage = buildLeafPage({
  slug: 'engineering/branches/materials-metallurgical-engineering',
  title: 'Materials & Metallurgical Engineering: Branch Guide & Careers | T.I.M.E. Madurai',
  description: 'What Materials & Metallurgical Engineering covers — from steel to semiconductor and battery materials — salaries, PSU pathway, and who fits this branch.',
  canonical: '/engineering/branches/materials-metallurgical-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Materials & Metallurgical Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Materials & Metallurgical Engineering',
  heroSubtitle: 'From steel and alloys to semiconductor and EV-battery materials — a small but PSU-friendly branch with growing relevance as India builds domestic chip and battery manufacturing.',
  stats: [
    { value: '₹8–16L', label: 'IIT core-sector range' },
    { value: 'SAIL / Tata Steel / NALCO', label: 'Major PSU recruiters' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Materials & Metallurgical Engineers study how materials behave and how to design new ones — from traditional steel-making to the advanced alloys and semiconductor materials modern manufacturing depends on.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Physical metallurgy, extractive metallurgy, materials characterisation, ceramics & composites, corrosion engineering'],
          ['Core subjects', 'Physical Metallurgy, Extractive Metallurgy, Materials Science, Phase Transformations, Corrosion Engineering'],
          ['Skills required', 'Strong chemistry/physics foundation, lab discipline, interest in materials behaviour at a microscopic level'],
          ['Career paths', 'Metallurgical Engineer, Quality Engineer (steel/metals), Materials Scientist, R&D Engineer (new materials)'],
          ['Top recruiters', 'SAIL, Tata Steel, NALCO, Hindalco, JSW Steel, semiconductor and battery materials startups'],
          ['Starting salary', 'IITs (core): ₹8–16 LPA; PSU (GATE): ₹7–10 LPA; Private (average): ₹3.5–5 LPA'],
          ['Personality fit', 'Enjoys chemistry and physics at a materials level; comfortable in plant/lab environments rather than pure desk roles'],
          ['Future demand (2030)', 'Growing steadily as India invests in semiconductor fabs and EV battery-materials manufacturing, alongside steady demand from the traditional metals sector'],
          ['Higher studies', 'M.Tech in Materials Engineering (IITs), GATE → PSU, MS abroad, PhD for materials R&D roles'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'While Tamil Nadu doesn\'t have a major steel PSU in-state, its growing electronics and EV manufacturing investments (including battery and semiconductor assembly projects) are creating a newer, TN-based demand for materials engineers alongside the traditional national PSU route.',
      },
    },
  ],
  faqs,
  faqTitle: 'Materials & Metallurgical Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Considering Materials Engineering for the GATE/PSU route?',
  ctaSub: 'A counsellor can map this alongside Mechanical and EEE as PSU-friendly options.',
});
