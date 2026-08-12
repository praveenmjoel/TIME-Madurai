import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Which JEE Main session should I prioritise — January or April?',
    a: 'Neither is universally better, and you should appear in both. January typically has a slightly less-prepared candidate pool, so percentiles can run higher for the same raw score; April gives more preparation time. Your best NTA score across both sessions is used for ranking, so there\'s no downside to attempting both.',
  },
  {
    q: 'What Class 12 percentage do I need for JEE Main eligibility?',
    a: 'There\'s no minimum percentage to appear for JEE Main itself. But to be eligible for NITs, IIITs, and GFTIs through JoSAA, you need at least 75% aggregate in Class 12 (65% for SC/ST/PwD). This applies equally to Tamil Nadu State Board and CBSE students — a strong JEE rank with 74% boards still cannot get an NIT seat.',
  },
];

export const jeeMainPage = buildLeafPage({
  slug: 'engineering/admissions/jee-main',
  title: 'JEE Main 2026: Pattern, Syllabus & Score-to-College Mapping | T.I.M.E. Madurai',
  description: 'Full JEE Main exam pattern, marking scheme, high-weightage syllabus topics, and a percentile-to-college mapping table for Tamil Nadu aspirants.',
  canonical: '/engineering/admissions/jee-main/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions', href: '/engineering/admissions/' }, { label: 'JEE Main' }],
  eyebrow: 'entrance exam',
  heroTitle: 'JEE Main',
  heroSubtitle: 'India\'s largest engineering entrance exam — the gateway to NITs, IIITs, and CFTIs, and the qualifier for JEE Advanced.',
  stats: [
    { value: '12L+', label: 'Students appear annually' },
    { value: '300', label: 'Total marks' },
    { value: '2', label: 'Sessions per year' },
  ],
  toc: [
    { id: 'pattern', label: 'Pattern & Marking' },
    { id: 'mapping', label: 'Score → College Mapping' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Conducted by the National Testing Agency, JEE Main is the gateway to 31 NITs, 25 IIITs, 29 CFTIs, and also serves as the qualifying exam for JEE Advanced.',
  sections: [
    {
      id: 'pattern',
      eyebrow: 'the mechanics',
      title: 'Pattern, syllabus & marking',
      table: {
        columns: ['Parameter', 'Detail'],
        rows: [
          ['Paper 1 (B.E./B.Tech)', 'Physics, Chemistry, Mathematics — 75 of 90 questions attempted'],
          ['Section split', '20 MCQ + 10 numerical per subject (5 numerical mandatory)'],
          ['Marking', 'MCQ: +4 correct, −1 wrong; Numerical: +4 correct, 0 wrong (no negative)'],
          ['Duration', '3 hours (3h20m for PwD candidates)'],
          ['Attempts', '3 consecutive years × 2 sessions = 6 total attempts'],
          ['High-weightage Maths', 'Calculus, Coordinate Geometry, Matrices, Probability, Complex Numbers'],
          ['High-weightage Physics', 'Mechanics, Electrostatics &amp; Magnetism, Modern Physics, Optics'],
          ['High-weightage Chemistry', 'Organic (reactions, named reactions), Physical (mole concept, equilibrium)'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'Paper 1 has 75 questions to be attempted out of 90 available. Many students try all 90 out of panic and lose marks to negative marking on MCQs. Stick to your strongest 75 — accuracy beats coverage.',
      },
    },
    {
      id: 'mapping',
      eyebrow: 'the question everyone asks',
      title: 'What percentile gets you where?',
      table: {
        columns: ['Percentile', 'Approx. AIR', 'General category options'],
        rows: [
          ['99.5+', 'Top ~600', 'Old IITs (via JEE Advanced)'],
          ['99–99.5', '~600–6,000', 'NIT Trichy top branches, JEE Advanced'],
          ['98–99', '~6,000–12,000', 'NIT Trichy mid branches, top NITs'],
          ['97–98', '~12,000–20,000', 'NIT Surathkal/Warangal branches'],
          ['95–97', '~20,000–40,000', 'Lower NITs, IIITs, CFTIs'],
          ['90–95', '~40,000–90,000', 'Lower NITs, IIITs'],
          ['85–90', '~90,000–1.5L', 'IIITs, some CFTIs'],
        ],
      },
      note: 'All figures are indicative — verify current-year opening/closing ranks at josaa.nic.in before finalising choices.',
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'NIT Trichy home-state quota (15% of seats reserved for TN students) closes at significantly lower ranks than the all-India quota. In the 2024 cycle, CSE at NIT Trichy closed around AIR 3,200 under general all-India quota but around AIR 7,500 for TN home-state quota — always check both during JoSAA.',
      },
    },
  ],
  faqs,
  faqTitle: 'JEE Main — quick answers',
  backLink: { label: 'all entrance exams', href: '/engineering/admissions/' },
  ctaHeading: 'Building your JEE Main preparation timeline?',
  ctaSub: 'A structured mock-test schedule beats last-minute cramming, every cycle.',
});
