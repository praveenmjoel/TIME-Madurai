import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How is Industrial & Production Engineering different from Mechanical Engineering?',
    a: 'Mechanical Engineering focuses on designing and building machines and systems. Industrial & Production Engineering focuses on optimising how those systems are manufactured and operated at scale — production planning, quality control, supply chain, and process efficiency — a management-adjacent layer on top of core mechanical knowledge.',
  },
  {
    q: 'Is this a good branch if I\'m interested in both engineering and management?',
    a: 'Yes — it\'s one of the more natural engineering branches to pair with an eventual MBA or operations-management career, since the coursework itself already blends technical and management thinking (production planning, quality systems, supply chain optimisation).',
  },
];

export const industrialPage = buildLeafPage({
  slug: 'engineering/branches/industrial-production-engineering',
  title: 'Industrial & Production Engineering: Branch Guide & Careers | T.I.M.E. Madurai',
  description: 'What Industrial & Production Engineering covers, career paths in manufacturing and operations, realistic salaries, and who fits this branch.',
  canonical: '/engineering/branches/industrial-production-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Industrial & Production Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Industrial & Production Engineering',
  heroSubtitle: 'The branch that optimises how factories run — production planning, quality control, and supply chain — a natural bridge into operations management.',
  stats: [
    { value: '₹4–10L', label: 'Fresher salary range' },
    { value: 'Manufacturing + supply chain', label: 'Core employer sectors' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Industrial & Production Engineers apply systems thinking to manufacturing itself — how to produce more, with fewer defects and less waste, at lower cost.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Production planning & control, quality engineering, operations research, supply chain management, ergonomics'],
          ['Core subjects', 'Production Planning & Control, Quality Engineering, Operations Research, Industrial Management, Supply Chain'],
          ['Skills required', 'Systems thinking, comfort with statistics and process optimisation, interest in management alongside engineering'],
          ['Career paths', 'Production Engineer, Quality Engineer, Supply Chain Analyst, Process Improvement Engineer, Operations Manager (with experience)'],
          ['Top recruiters', 'Tata Motors, L&T, Ashok Leyland, TVS, manufacturing arms of consumer goods companies, consulting firms'],
          ['Starting salary', 'Top institutes: ₹5–10 LPA; Average private colleges: ₹3–4.5 LPA'],
          ['Personality fit', 'Enjoys process optimisation and systems-level problem solving over deep single-machine design work'],
          ['Future demand (2030)', 'Steady, with growing relevance as Indian manufacturing scales up under production-linked-incentive schemes and needs more process/quality specialists'],
          ['Higher studies', 'M.Tech in Industrial Engineering, MBA in Operations (a particularly natural pairing for this branch), Six Sigma/Lean certifications'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu\'s automotive and auto-component manufacturing clusters around Chennai and Coimbatore give Industrial & Production Engineering graduates a strong in-state base for production and quality roles, without needing to relocate for a first job.',
      },
    },
  ],
  faqs,
  faqTitle: 'Industrial & Production Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Interested in engineering that leads toward management?',
  ctaSub: 'A counsellor can map this against a Mechanical + later-MBA path.',
});
