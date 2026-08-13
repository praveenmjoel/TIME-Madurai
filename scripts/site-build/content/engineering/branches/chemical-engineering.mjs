import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Chemical Engineering just for students who want to work in oil refineries?',
    a: 'No — that\'s the most common misconception. Chemical engineers design and run processes across petrochemicals, pharmaceuticals, fertilisers, FMCG, food processing, and increasingly battery and semiconductor materials manufacturing. Refining and petrochemicals are one large employer, not the whole field.',
  },
  {
    q: 'How is Chemical Engineering different from Biotechnology?',
    a: 'Chemical Engineering focuses on large-scale industrial processes — reactors, distillation, heat and mass transfer — applicable to any chemical or process industry. Biotechnology applies biological systems (cells, enzymes, genetics) to create products, more often in pharma, agriculture, and healthcare. Some Chemical graduates do move into bioprocessing, but the core training differs.',
  },
];

export const chemicalPage = buildLeafPage({
  slug: 'engineering/branches/chemical-engineering',
  title: 'Chemical Engineering: Branch Guide, Salary & Careers | T.I.M.E. Madurai',
  description: 'What Chemical Engineering covers beyond refineries — process industries, core subjects, realistic salaries, and who fits this branch.',
  canonical: '/engineering/branches/chemical-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Chemical Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Chemical Engineering',
  heroSubtitle: 'Beyond oil refineries — the branch behind petrochemicals, pharmaceuticals, fertilisers, and food processing, wherever raw materials become products at scale.',
  stats: [
    { value: '₹10–22L', label: 'IIT core-sector range' },
    { value: '5+', label: 'Major industries hiring (petro, pharma, FMCG, fertiliser, materials)' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Chemical engineers design and scale up the processes that turn raw materials into everyday products — from petrol and fertiliser to the active ingredient in a tablet.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Chemical reaction engineering, fluid mechanics, heat & mass transfer, process design, thermodynamics'],
          ['Core subjects', 'Process Calculations, Fluid Mechanics, Heat Transfer, Mass Transfer, Chemical Reaction Engineering, Plant Design'],
          ['Skills required', 'Strong chemistry and maths foundation, systems thinking, comfort with process simulation software'],
          ['Career paths', 'Process Engineer, Plant Engineer, R&D Chemical Engineer, Production Engineer, Safety/HSE Engineer'],
          ['Top recruiters', 'Reliance, IOCL, ONGC, HPCL, Cipla, Dr. Reddy\'s, Tata Chemicals, Deepak Fertilisers'],
          ['Starting salary', 'IITs (core): ₹10–22 LPA; NITs: ₹6–12 LPA; Private (top): ₹4.5–7 LPA; PSU (GATE): ₹7–10 LPA'],
          ['Personality fit', 'Enjoys chemistry, process-level problem solving, and plant/industrial environments over pure desk work'],
          ['Future demand (2030)', 'Steady, with growth in green chemistry, battery materials, and pharma manufacturing as India expands domestic API production'],
          ['Higher studies', 'M.Tech in Process Engineering (IITs), GATE → PSU, MS abroad, PhD for R&D-track careers'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Chennai\'s Manali industrial belt (CPCL, Manali Petrochemicals) and the pharma clusters around Chennai and Puducherry give Tamil Nadu Chemical Engineering graduates strong in-state options beyond the traditional Gujarat/Maharashtra refining corridor.',
      },
    },
  ],
  faqs,
  faqTitle: 'Chemical Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Curious whether Chemical Engineering fits your interests?',
  ctaSub: 'A counsellor can walk through the process-industry career map with you.',
});
