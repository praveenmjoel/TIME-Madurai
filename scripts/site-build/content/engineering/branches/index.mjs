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
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Many students pick a branch on peer pressure, parental advice, or the assumption that CSE is the only option worth having. This section profiles every major branch in detail so you can make an informed choice — including a structured framework for the branch-vs-college debate itself.',
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
      ],
    },
    {
      id: 'specialised',
      eyebrow: 'niche but real',
      title: 'Specialised &amp; emerging branches',
      intro: 'Electrical Engineering, Chemical, Aerospace, Biotechnology, Biomedical, Mechatronics &amp; Robotics, Data Science, Materials &amp; Metallurgical, Environmental, Industrial &amp; Production, Naval Architecture, Petroleum/Mining/Textile, and Agricultural &amp; Food Technology round out the full branch landscape — each with its own recruiter base and salary band, and each covered in the complete handbook.',
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
