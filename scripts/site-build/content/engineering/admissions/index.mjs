import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How many of these exams should I actually take?',
    a: 'Most well-planned Tamil Nadu students appear in three to five: JEE Main is close to mandatory (it also feeds JEE Advanced and TNEA needs no separate exam), and BITSAT, VITEEE, and SRMJEEE cost ₹700–1,500 each — a small price for the optionality. See our Multi-Exam Strategy guidance below for a profile-based plan.',
  },
  {
    q: 'Is registering for exams I probably won\'t need a waste of money?',
    a: 'Rarely, in practice. Having a confirmed seat at a good private college in hand meaningfully reduces stress and enables clearer decision-making during JoSAA counselling — students who skip VITEEE/SRMJEEE "because I\'ll do well in JEE" often regret it if their JEE cycle doesn\'t go as planned.',
  },
];

export const admissionsIndexPage = buildLeafPage({
  slug: 'engineering/admissions',
  title: 'Engineering Entrance Exams 2026: JEE, BITSAT, VITEEE, SRMJEEE, TNEA | T.I.M.E. Madurai',
  description: 'Every engineering entrance exam relevant to Tamil Nadu students, in one place — JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE, TNEA, and COMEDK.',
  canonical: '/engineering/admissions/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions' }],
  eyebrow: 'engineering · admissions',
  heroTitle: 'Every Engineering Entrance Exam, Mapped',
  heroSubtitle: 'National, private, and state-level — getting into the right engineering college requires understanding an ecosystem of exams, not just one.',
  stats: [
    { value: '6', label: 'Exams TN students track' },
    { value: '3–5', label: 'Typically taken per student' },
    { value: '₹700–1,500', label: 'Cost per exam registration' },
  ],
  toc: [
    { id: 'landscape', label: 'The Exam Landscape' },
    { id: 'exams', label: 'Every Exam, In Depth' },
    { id: 'strategy', label: 'Multi-Exam Strategy' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'This section maps every admission pathway relevant to Tamil Nadu students: JEE Main and Advanced for IITs/NITs, BITSAT for BITS Pilani, VITEEE and SRMJEEE for VIT and SRM, and TNEA for Tamil Nadu\'s government and government-aided colleges.',
  sections: [
    {
      id: 'landscape',
      eyebrow: 'at a glance',
      title: 'What each exam unlocks',
      table: {
        columns: ['Exam', 'What it unlocks', 'Difficulty', 'When'],
        rows: [
          ['JEE Main', 'NITs, IIITs, CFTIs, base for Advanced', 'High', 'Jan + Apr sessions'],
          ['JEE Advanced', 'All 23 IITs + IISc', 'Very High', 'After JEE Main cutoff'],
          ['BITSAT', 'BITS Pilani, Goa, Hyderabad', 'High', 'May–June'],
          ['VITEEE', 'VIT Vellore, Chennai, Bhopal, AP', 'Moderate', 'April'],
          ['SRMJEEE', 'SRM Kattankulathur &amp; others', 'Moderate', 'April–May'],
          ['TNEA', 'All TN govt &amp; aided colleges', 'Merit-based (no exam)', 'Rank from Class 12 marks'],
        ],
      },
    },
    {
      id: 'exams',
      eyebrow: 'deep dives',
      title: 'Every exam, in full detail',
      cards: [
        { title: 'JEE Main', href: '/engineering/admissions/jee-main/', blurb: 'Pattern, syllabus weightage, and the score-to-college mapping table.' },
        { title: 'JEE Advanced', href: '/engineering/admissions/jee-advanced/', blurb: 'What changes vs. Main, and what rank gets which IIT.' },
        { title: 'BITSAT', href: '/engineering/admissions/bitsat/', blurb: 'Why it matters for TN students, and how it differs from JEE Main.' },
        { title: 'VITEEE', href: '/engineering/admissions/viteee/', blurb: 'The slot-booking system and how VITEEE difficulty compares.' },
        { title: 'SRMJEEE', href: '/engineering/admissions/srmjeee/', blurb: 'Campus quality differences and the JEE Main-score alternative.' },
        { title: 'TNEA', href: '/engineering/admissions/tnea/', blurb: 'No entrance test — the pure board-marks cutoff formula.' },
      ],
    },
    {
      id: 'strategy',
      eyebrow: 'spread the risk',
      title: 'Multi-exam strategy, by student profile',
      table: {
        columns: ['Profile', 'Primary', 'Secondary'],
        rows: [
          ['IIT Aspirant', 'JEE Main → JEE Advanced', 'BITSAT + register VITEEE/SRMJEEE/TNEA to keep options open'],
          ['NIT Aspirant', 'JEE Main → JoSAA', 'BITSAT (Hyderabad/Goa backup) + VITEEE/SRMJEEE + TNEA mandatory'],
          ['Board Marks Focused', 'TNEA (Class 12 performance)', 'VITEEE + SRMJEEE + attempt JEE Main Session 1 at minimum'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth the small fee',
        text: 'Register for every relevant exam before its closing date — ₹700–1,500 per exam is a small price for the optionality it provides. Don\'t skip VITEEE or SRMJEEE assuming JEE will go well; a confirmed private-college seat in hand reduces stress and improves decision-making during JoSAA.',
      },
    },
  ],
  faqs,
  faqTitle: 'Admissions strategy — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Building your own multi-exam plan?',
  ctaSub: 'A counsellor can sequence your registrations and prep calendar properly.',
});
