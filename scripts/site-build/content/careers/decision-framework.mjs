import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What if I don\'t clearly fit any single strength profile?',
    a: 'That\'s common, not a problem — most students have overlapping strengths. Use the framework as a starting filter to narrow from "everything" to 2–3 genuine candidates, then go deeper on each via our branch/degree-specific pages before deciding.',
  },
  {
    q: 'Why does the guide warn against "default" career choices?',
    a: 'Because they consistently underperform relative to genuine-fit choices. A student who wants to be a physiotherapist but joins MBBS under family pressure, or a naturally creative student who reluctantly takes CSE, rarely reaches their real potential — four years (or more) is a long time to spend fighting your own interests.',
  },
];

export const decisionFrameworkPage = buildLeafPage({
  slug: 'careers/decision-framework',
  title: 'Career Decision Framework: Matching Strengths to Paths | T.I.M.E. Madurai',
  description: 'A structured framework for choosing a career path based on genuine strengths and interests — not peer pressure or parental expectation.',
  canonical: '/careers/decision-framework/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: 'Decision Framework' }],
  eyebrow: 'careers · the actual decision',
  heroTitle: 'Choosing Your Career Path: A Decision Framework',
  heroSubtitle: 'No single path is universally "best." The right career aligns your natural strengths and interests with a realistic route — not the path everyone else seems to be taking.',
  stats: [],
  toc: [
    { id: 'framework', label: 'The Framework' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Use this as a starting filter — match your genuine strength profile to a primary path, then explore the alternatives before locking anything in.',
  sections: [
    {
      id: 'framework',
      title: 'Strength profile → recommended paths',
      table: {
        columns: ['Your strength profile', 'Recommended primary paths', 'Alternative paths'],
        rows: [
          ['Strong in Maths, loves problem-solving, competitive', 'CSE/ECE via JEE → IIT/NIT → Software, AI/ML, Quant Finance', 'Data Science after any degree; CA/Actuary if finance interests you'],
          ['Strong in Biology, wants to help people, empathetic', 'MBBS via NEET (600+); BDS (550+); B.Sc. Nursing; B.P.T.', 'Allied health professions; biotech research; public health (MPH)'],
          ['Creative + technical (art and science both)', 'B.Arch (NATA + JEE); B.Des (NID/UCEED); Product Design', 'Game design; animation + VFX; UX/UI design'],
          ['Maths + logical reasoning, business-minded', 'BTech + MBA (IIM via CAT); CA; CFA; Actuary', 'BBA + MBA; fintech startup; Data Analytics'],
          ['Patriotic, physically fit, leadership-oriented', 'NDA (after Class 12); CDS (after graduation); AFCAT', 'UPSC Civil Services; IPS; border management career'],
          ['Broad science aptitude, research-oriented', 'IISc/IISER integrated M.Sc.; IIT M.Sc. (via JAM)', 'PhD abroad; CSIR-UGC NET for Indian research labs'],
          ['Wants early income, practical skills focus', 'B.Sc. MLT, DMRIT, B.Pharm (3–4 yr courses)', 'Polytechnic diploma → BTech Lateral Entry'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Avoid the default choice',
        text: 'Avoid career choices made purely out of peer pressure or parental expectation. A student who genuinely wants to be a physiotherapist but joins MBBS under pressure, or a creative designer who reluctantly takes CSE, rarely reaches their real potential. Use a proper career aptitude assessment to find your natural strengths before locking in a path.',
      },
    },
  ],
  faqs,
  faqTitle: 'Decision framework — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Want a proper aptitude assessment, not just a self-check?',
  ctaSub: 'Book a session and find your genuine strength profile.',
});
