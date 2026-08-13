import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Biotechnology engineering or a science degree?',
    a: 'It\'s typically offered as a B.Tech (engineering) at institutes like the IITs, VIT, and SASTRA, distinct from a B.Sc. Biotechnology. The B.Tech route adds process engineering and bioinformatics rigour on top of core biology, and is generally viewed more favourably by pharma and biotech employers for production and process roles.',
  },
  {
    q: 'What\'s the realistic career path if I don\'t want a PhD?',
    a: 'Biotech B.Tech graduates without a PhD typically move into quality control/quality assurance, production, regulatory affairs, or bioinformatics roles at pharma and biotech companies — genuinely employable paths that don\'t require years of postgraduate research, though they pay less than R&D-scientist tracks.',
  },
];

export const biotechPage = buildLeafPage({
  slug: 'engineering/branches/biotechnology',
  title: 'Biotechnology Engineering: Branch Guide, Careers & Salary | T.I.M.E. Madurai',
  description: 'What Biotechnology Engineering covers, realistic career paths with and without a PhD, salaries, and who fits this branch.',
  canonical: '/engineering/branches/biotechnology/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Biotechnology' }],
  eyebrow: 'branch profile',
  heroTitle: 'Biotechnology Engineering',
  heroSubtitle: 'Where biology meets engineering — pharma manufacturing, genetic engineering, and bioprocessing, with career paths that don\'t all require a PhD.',
  stats: [
    { value: '₹4–9L', label: 'Fresher salary range (industry)' },
    { value: 'Pharma / Agri-biotech / Bioinformatics', label: 'Three main career tracks' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Biotechnology applies biological systems — cells, enzymes, genetic material — to create products and processes, spanning pharma manufacturing, agriculture, and increasingly computational biology.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Molecular biology, genetic engineering, bioprocess engineering, microbiology, bioinformatics'],
          ['Core subjects', 'Biochemistry, Molecular Biology, Bioprocess Engineering, Genetic Engineering, Immunology'],
          ['Skills required', 'Strong biology foundation alongside physics/maths, lab discipline, patience for research-style work'],
          ['Career paths', 'QC/QA Executive, Production Engineer (pharma), Bioinformatics Analyst, Regulatory Affairs, R&D Scientist (with PG)'],
          ['Top recruiters', 'Biocon, Dr. Reddy\'s, Serum Institute, Bharat Biotech, Syngene, Piramal Pharma'],
          ['Starting salary', 'Top institutes (IITs/VIT/SASTRA): ₹5–9 LPA; Average private colleges: ₹3–4.5 LPA; significantly higher with an M.Tech/MS/PhD in a specialised area'],
          ['Personality fit', 'Genuine interest in biology and lab work; comfortable with a field where higher studies meaningfully change career ceiling'],
          ['Future demand (2030)', 'Rising steadily as India expands domestic vaccine and API (active pharmaceutical ingredient) manufacturing'],
          ['Higher studies', 'M.Tech/MS in Biotechnology or Bioinformatics, MBA (Pharma Management), PhD for R&D-scientist roles'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'VIT Vellore and SASTRA Thanjavur are the strongest Tamil Nadu options for Biotechnology, both with active pharma and biotech placement pipelines. Combine either with a genuine plan for higher studies if you\'re targeting R&D roles — the undergraduate degree alone caps out lower than most other engineering branches.',
      },
    },
  ],
  faqs,
  faqTitle: 'Biotechnology — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Weighing Biotechnology against a pure Biology/NEET path?',
  ctaSub: 'A counsellor can help you compare both routes honestly.',
});
