import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why is Maths described as JEE\'s "decider" subject?',
    a: 'Because unlike Physics and Chemistry, Maths has no real shortcut — it requires extensive problem-solving practice, and the gap between students who\'ve done 200–300 problems per major chapter and those who haven\'t shows up directly in rank. It\'s often the subject where close JEE ranks are actually decided.',
  },
  {
    q: 'Are the same chapters equally important for JEE Main and JEE Advanced?',
    a: 'Mostly, but not entirely. Calculus is top priority (★★★★★) for both. Algebra (Complex Numbers, P&C, Probability, Matrices) is slightly more Advanced-weighted, while Coordinate Geometry is slightly more Main-weighted. Trigonometry and Sequences/Series carry moderate priority in both.',
  },
];

export const mathsStrategyPage = buildLeafPage({
  slug: 'exams/maths-strategy',
  title: 'Mathematics Preparation Strategy for JEE | T.I.M.E. Madurai',
  description: 'Chapter-wise priority ranking for JEE Main vs. JEE Advanced Mathematics, with the practice volume and resources each topic actually needs.',
  canonical: '/exams/maths-strategy/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'Maths Strategy' }],
  eyebrow: 'subject strategy',
  heroTitle: 'Mathematics: JEE\'s Decider Subject',
  heroSubtitle: 'No shortcut exists here — Maths rewards extensive problem-solving practice more than any other JEE subject, and it\'s often where close ranks are actually decided.',
  stats: [],
  toc: [
    { id: 'priority', label: 'Chapter Priority' },
    { id: 'resources', label: 'Recommended Resources' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Every topic below needs real problem-solving volume — reading solved examples is not the same as building your own speed and pattern recognition.',
  sections: [
    {
      id: 'priority',
      title: 'Chapter priority, JEE Main vs. Advanced',
      table: {
        columns: ['Topic', 'Priority (Main)', 'Priority (Advanced)', 'Practice needed'],
        rows: [
          ['Calculus (limits, derivatives, integration)', '★★★★★', '★★★★★', '200–300 problems/chapter'],
          ['Coordinate Geometry', '★★★★★', '★★★★', '150–200 problems/chapter'],
          ['Algebra (complex numbers, P&amp;C, probability, matrices)', '★★★★', '★★★★★', '150–250 problems/chapter'],
          ['Vectors + 3D Geometry', '★★★★', '★★★★', '100–150 problems'],
          ['Trigonometry + Inverse Trig', '★★★', '★★★', '80–120 problems'],
          ['Sequence &amp; Series + Binomial Theorem', '★★★', '★★★', '80–100 problems'],
        ],
      },
    },
    {
      id: 'resources',
      title: 'Recommended resources',
      table: {
        columns: ['Target', 'Resources'],
        rows: [
          ['JEE Main', 'RD Sharma (theory + basics) → Arihant 41 Years PYQs'],
          ['JEE Advanced', 'SL Loney (Trig, Coordinate Geometry) + Hall &amp; Knight (Algebra) + TMH Complete Mathematics'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'For both levels, structured study material (like what your TIME UG centre provides) covers the JEE/NEET syllabus systematically — pairing it with dedicated PYQ practice is the combination that actually moves rank.',
      },
    },
  ],
  faqs,
  faqTitle: 'Maths strategy — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Behind on problem-solving volume in a specific chapter?',
  ctaSub: 'A counsellor can help you prioritise the highest-yield topics first.',
});
