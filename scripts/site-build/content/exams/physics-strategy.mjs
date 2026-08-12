import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Should I buy more than one or two Physics reference books?',
    a: 'No — depth over breadth is the consistent advice here. For JEE Main/NEET, NCERT Physics 11 &amp; 12 for theory plus HC Verma or DC Pandey for numericals is enough. For JEE Advanced, add Irodov selectively and Cengage Physics — but working through two books thoroughly beats skimming five.',
  },
  {
    q: 'What\'s the single biggest mistake in Physics preparation?',
    a: 'Learning physics as a collection of formulas to memorise rather than understanding the concepts behind them. JEE and NEET both reward genuine conceptual understanding — formula-only preparation collapses on application-style and multi-concept questions.',
  },
];

export const physicsStrategyPage = buildLeafPage({
  slug: 'exams/physics-strategy',
  title: 'Physics Preparation Strategy for JEE & NEET | T.I.M.E. Madurai',
  description: 'A phase-by-phase Physics preparation timeline from Class 11 foundation to final revision, with the recommended resources for each stage.',
  canonical: '/exams/physics-strategy/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'Physics Strategy' }],
  eyebrow: 'subject strategy',
  heroTitle: 'Physics: The Concept-First Subject',
  heroSubtitle: 'Physics rewards conceptual understanding and formula derivation over rote memorisation — the biggest mistake is treating it as a list of formulas to apply.',
  stats: [],
  toc: [
    { id: 'timeline', label: 'Preparation Timeline' },
    { id: 'resources', label: 'Recommended Resources' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'The same subject serves both JEE and NEET, but the depth required differs — JEE Advanced demands derivation-level understanding, while NEET Physics is comparatively more conceptual and less numerically heavy.',
  sections: [
    {
      id: 'timeline',
      title: 'Phase-by-phase timeline',
      table: {
        columns: ['Phase', 'Timeline', 'Focus areas'],
        rows: [
          ['Foundation', 'Class 11 (Jun–Feb)', 'Mechanics deeply: Kinematics, NLM, WEP, Rotation, Oscillations, Waves, Thermodynamics — build real numerical intuition'],
          ['Building', 'Class 12 (Apr–Dec)', 'Electrostatics, Current Electricity, Magnetic Effects, EMI, Optics, Modern Physics — connect to real applications'],
          ['Integration', 'Dec–Mar (exam year)', 'Mixed-topic problems, previous year papers, time management within 3-hour blocks'],
          ['Revision', 'Mar–May', 'Formula sheets, a common-mistakes list, last 5 years\' chapter-wise PYQs'],
        ],
      },
    },
    {
      id: 'resources',
      title: 'Recommended resources',
      table: {
        columns: ['Target', 'Resources'],
        rows: [
          ['JEE Main / NEET', 'NCERT Physics 11 &amp; 12 (theory); HC Verma or DC Pandey (numericals)'],
          ['JEE Advanced', 'HC Verma Vol 1 &amp; 2 + Irodov (selected problems) + Cengage Physics series'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Depth over breadth',
        text: 'Do not buy more than 2 reference books. Working through fewer resources thoroughly — with every problem understood, not just solved — consistently outperforms skimming across five books.',
      },
    },
  ],
  faqs,
  faqTitle: 'Physics strategy — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Want a chapter-wise Physics revision plan?',
  ctaSub: 'A structured plan targets the highest-weightage chapters first.',
});
