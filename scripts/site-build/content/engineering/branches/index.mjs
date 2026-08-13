import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How should I actually choose a branch?',
    a: 'Each branch profile in this section follows the same structure: what you study, core subjects, required skills, career paths, top recruiters, starting salary range, personality fit, and 2030 demand outlook. Read your top 2–3 candidate branches side by side rather than picking on reputation alone — "CSE is the only option" is exactly the trap this section is built to help you avoid.',
  },
  {
    q: 'Should I pick branch over college, or college over branch?',
    a: 'It depends on how far apart the options are. At the extremes, institute quality wins — Mechanical at IIT Madras beats CSE at an unknown private college. In the middle ground (top private vs. lower NIT), branch and personal aptitude matter more. See our full decision guide for the complete framework.',
  },
];

export const branchesIndexPage = buildLeafPage({
  slug: 'engineering/branches',
  title: 'Engineering Branches Guide 2026: 19 Branches Compared | T.I.M.E. Madurai',
  description: 'Every major engineering branch profiled — what you study, career paths, starting salaries, and 2030 demand outlook — so you choose a branch on data, not peer pressure.',
  canonical: '/engineering/branches/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches' }],
  eyebrow: 'engineering · branches',
  heroTitle: 'Choosing Your Engineering Branch',
  heroSubtitle: 'Nineteen branches, each with its own profile — what you\'ll study, who hires you, and what it actually pays. Not "CSE because everyone\'s doing it."',
  stats: [
    { value: '19', label: 'Branches profiled' },
    { value: '8L+', label: 'CSE seats nationally (2024)' },
    { value: '2×', label: 'CSE seat growth since 2020' },
  ],
  toc: [
    { id: 'popular', label: 'Most In-Demand' },
    { id: 'core', label: 'Core Branches' },
    { id: 'specialised', label: 'Specialised Branches' },
    { id: 'decision', label: 'Branch vs. College' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Many students pick a branch on peer pressure, parental advice, or the assumption that CSE is the only option worth having. This section profiles every major branch in detail — what you\'ll study, who hires you, and what it actually pays — so you choose on data, not pressure.',
  sections: [
    {
      id: 'popular',
      eyebrow: 'highest demand',
      title: 'The most sought-after branches',
      cards: [
        { title: 'Computer Science Engineering', href: '/engineering/branches/computer-science-engineering/', blurb: 'Highest average salary, widest hiring base, most global opportunities.' },
        { title: 'AI &amp; Machine Learning', href: '/engineering/branches/ai-ml/', blurb: 'The fastest-growing specialisation — essentially advanced CSE.' },
        { title: 'Electronics &amp; Communication', href: '/engineering/branches/electronics-communication/', blurb: 'The hardware half of the digital economy — riding India\'s chip mission.' },
      ],
    },
    {
      id: 'core',
      eyebrow: 'the traditional backbone',
      title: 'Core engineering branches',
      cards: [
        { title: 'Mechanical Engineering', href: '/engineering/branches/mechanical-engineering/', blurb: 'The broadest branch — still the largest recruiter base in Indian manufacturing.' },
        { title: 'Civil Engineering', href: '/engineering/branches/civil-engineering/', blurb: 'Infrastructure and construction — one of the most stable government-linked paths.' },
        { title: 'Electrical &amp; Electronics Engineering', href: '/engineering/branches/electrical-engineering/', blurb: 'Power systems and one of engineering\'s widest GATE-to-PSU pathways.' },
      ],
    },
    {
      id: 'specialised',
      eyebrow: 'niche but real',
      title: 'Specialised &amp; emerging branches',
      intro: 'Each of these has its own recruiter base, salary band, and realistic career path — profiled in full rather than named in passing.',
      cards: [
        { title: 'Chemical Engineering', href: '/engineering/branches/chemical-engineering/', blurb: 'Petrochemicals, pharma, fertiliser and food processing — not just refineries.' },
        { title: 'Aerospace Engineering', href: '/engineering/branches/aerospace-engineering/', blurb: 'Small seat count, direct pipeline into ISRO, DRDO and HAL.' },
        { title: 'Biotechnology', href: '/engineering/branches/biotechnology/', blurb: 'Pharma manufacturing, genetic engineering and bioinformatics.' },
        { title: 'Biomedical Engineering', href: '/engineering/branches/biomedical-engineering/', blurb: 'The engineering behind MRI machines, pacemakers and diagnostic devices.' },
        { title: 'Mechatronics &amp; Robotics', href: '/engineering/branches/mechatronics-robotics/', blurb: 'Mechanical, electronics and control systems combined for automation.' },
        { title: 'Data Science', href: '/engineering/branches/data-science/', blurb: 'Statistics, data engineering and machine learning — heavy overlap with AI/ML.' },
        { title: 'Materials &amp; Metallurgical Engineering', href: '/engineering/branches/materials-metallurgical-engineering/', blurb: 'From steel to semiconductor and EV-battery materials.' },
        { title: 'Environmental Engineering', href: '/engineering/branches/environmental-engineering/', blurb: 'Water treatment, waste management and pollution control.' },
        { title: 'Industrial &amp; Production Engineering', href: '/engineering/branches/industrial-production-engineering/', blurb: 'Optimising how factories run — a natural bridge into operations management.' },
        { title: 'Naval Architecture &amp; Ocean Engineering', href: '/engineering/branches/naval-architecture/', blurb: 'Ship and marine-structure design for a very small number of seats nationally.' },
        { title: 'Petroleum Engineering', href: '/engineering/branches/petroleum-engineering/', blurb: 'Oil and gas exploration and production, anchored by ONGC.' },
        { title: 'Mining Engineering', href: '/engineering/branches/mining-engineering/', blurb: 'Mine planning and safety, with a strong GATE-to-PSU pathway.' },
        { title: 'Agricultural &amp; Food Technology', href: '/engineering/branches/agricultural-food-technology/', blurb: 'Farm machinery and food processing — genuinely strong in Tamil Nadu.' },
      ],
    },
    {
      id: 'decision',
      eyebrow: 'the real question',
      title: 'Branch vs. college — which matters more?',
      cards: [
        { title: 'Branch vs. College — The Decision Guide', href: '/engineering/branches/branch-vs-college-debate/', blurb: '"CSE at a Tier-3 college or Mechanical at an NIT?" — a structured way to decide, not a one-size-fits-all answer.' },
      ],
      cardCols: 1,
    },
  ],
  faqs,
  faqTitle: 'Choosing a branch — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Torn between two branches?',
  ctaSub: 'A career aptitude conversation can settle it faster than another week of research.',
});
