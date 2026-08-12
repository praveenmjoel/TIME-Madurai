import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the single rule of thumb, if I only remember one thing?',
    a: 'Institute quality beats branch name at the extremes. A student who picks Mechanical at IIT Madras over CSE at an average private college has made the right call. A student who picks an unknown private college\'s CSE over NIT Trichy\'s Electrical or Civil branch has likely made the wrong one.',
  },
  {
    q: 'When does branch actually matter more than college?',
    a: 'In the middle ground — top private colleges (BITS, VIT, Amrita) versus lower-tier NITs — branch and personal aptitude matter more than institute prestige. A passionate coder choosing CSE at BITS Pilani over Civil at NIT Durgapur is making a reasonable, defensible choice.',
  },
];

export const branchVsCollegePage = buildLeafPage({
  slug: 'engineering/branches/branch-vs-college-debate',
  title: 'Branch vs. College: The Complete Decision Guide | T.I.M.E. Madurai',
  description: '"CSE at a Tier-3 college or Mechanical at an NIT?" — a structured, situation-by-situation framework for the most common engineering admissions dilemma.',
  canonical: '/engineering/branches/branch-vs-college-debate/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Branch vs College Debate' }],
  eyebrow: 'the decision that trips everyone up',
  heroTitle: 'Branch vs. College: A Decision Guide',
  heroSubtitle: '"Should I take a lower-ranked branch at an IIT/NIT, or a top branch at a private college?" There\'s no universal answer — but there is a structured way to think about it.',
  stats: [],
  toc: [
    { id: 'scenarios', label: 'Scenario-by-Scenario' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Parents and students debate this constantly, and the honest answer depends heavily on which two specific options are actually being compared.',
  sections: [
    {
      id: 'scenarios',
      title: 'Situation-by-situation guidance',
      table: {
        columns: ['Situation', 'Recommended choice'],
        rows: [
          ['CSE at top NIT vs. CSE at a private college', 'NIT every time — brand, placements, peer quality, and fee difference are all decisive'],
          ['Mechanical at IIT Madras vs. CSE at mid-tier private', 'IIT Madras Mechanical — the IIT brand and Dual Degree switch options compensate'],
          ['ECE at NIT Trichy vs. CSE at an average TN private college', 'NIT Trichy ECE — converts to software jobs AND VLSI/semiconductor roles'],
          ['CSE at top private (BITS/VIT/Amrita) vs. Civil/Chemical at NIT', 'Depends on genuine interest — core interest favours NIT, software career favours top-private CSE'],
          ['CSE at an unknown private college vs. ECE at NIT', 'NIT ECE — a CSE degree without strong coding skills leads to the same low-paying IT jobs ECE graduates get anyway'],
          ['Any branch at an old IIT vs. CSE at private', 'The IIT wins — the brand, research exposure, and GATE advantage are hard to replicate'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'The rule of thumb',
        text: 'Institute quality beats branch name at the extremes. In the middle ground — top private colleges versus lower-ranked NITs — branch and personal aptitude matter more than prestige. For Tamil Nadu students specifically: NIT Trichy is the clear top choice for almost any branch; after that, PSG Tech, GCT Coimbatore, and CEG Chennai are the next-best government options, with Amrita Coimbatore, SSN Chennai, and Kongu Engineering College as the strongest private alternatives.',
      },
    },
  ],
  faqs,
  faqTitle: 'Branch vs. college — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Stuck between two real offers?',
  ctaSub: 'Bring both options to a counsellor — this decision is worth fifteen minutes of outside perspective.',
});
