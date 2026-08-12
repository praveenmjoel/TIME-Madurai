import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is a B.Sc. a weaker choice than engineering or medicine?',
    a: 'Not inherently — it\'s a different, research-oriented track that\'s genuinely undervalued in India relative to its actual prospects. Followed by an M.Sc. and often a PhD, it opens research, academia, and increasingly well-paid specialised industry roles, particularly through entrance routes like IIT JAM.',
  },
  {
    q: 'What is IIT JAM and why does it matter for B.Sc. students?',
    a: 'IIT JAM (Joint Admission Test for M.Sc.) is the entrance exam for M.Sc. programmes at IITs, giving B.Sc. graduates in Physics, Chemistry, Mathematics, and Biotechnology a route into IIT-level postgraduate education and research — a significant credential upgrade for students who didn\'t pursue engineering directly.',
  },
];

export const pureScienceCareersPage = buildLeafPage({
  slug: 'careers/pure-science-careers',
  title: 'Pure Science Careers: Physics, Chemistry, Maths & Biotech | T.I.M.E. Madurai',
  description: 'Where B.Sc. + M.Sc. degrees in Physics, Chemistry, Mathematics, and Biotechnology actually lead — research, actuarial science, quant finance, and Tamil Nadu-specific opportunities.',
  canonical: '/careers/pure-science-careers/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: 'Pure Science Careers' }],
  eyebrow: 'careers · pure science',
  heroTitle: 'Pure Science Careers',
  heroSubtitle: 'B.Sc. followed by postgraduate study opens research, academia, and specialised industry roles — a genuinely undervalued path as India\'s research ecosystem grows.',
  stats: [ { value: '₹50L+', label: 'Top actuary earnings (severe supply shortage)' }, { value: '~500', label: 'Qualified actuaries in all of India' } ],
  toc: [
    { id: 'paths', label: 'Path by Path' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'This path suits students genuinely curious about the sciences themselves — mathematics, chemistry, physics, or biology — more than those chasing a specific industry job title.',
  sections: [
    {
      id: 'paths',
      title: 'B.Sc. + M.Sc. career paths',
      table: {
        columns: ['Path', 'Entry', 'Key careers', 'TN opportunities'],
        rows: [
          ['Physics', 'Class 12 marks; IIT JAM for IIT M.Sc.', 'Research scientist (ISRO, BARC), Data Scientist, Quant Analyst, teaching', 'IIT Madras, Anna University, CSIR-SERC Chennai'],
          ['Chemistry', 'Class 12 marks; IIT JAM', 'Pharma R&amp;D, specialty chemicals, material science, food technology', 'CSIR-CLRI Chennai, Hosur/Chennai pharma corridor'],
          ['Mathematics', 'Class 12 marks; IIT JAM', 'Actuarial science, Data Science, quant finance, operations research', 'Actuary exam — India has a severe shortage; top earners exceed ₹50 LPA'],
          ['Biotechnology', 'Class 12 marks; JNU/Hyderabad/CUTN entrance', 'Biopharma R&amp;D, agricultural biotech, medical diagnostics', 'Biocon, Serum Institute affiliates; CUTN, Thiruvarur'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'IISERs (7 campuses, including IISER Tirupati — closest to TN) are for students passionate about pure science research specifically. Entry via KVPY, JEE Main, or the IISER aptitude test. The BS-MS degree here is equivalent to IIT in research pedigree and leads to world-class PhD programmes.',
      },
    },
  ],
  faqs,
  faqTitle: 'Pure science careers — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Curious whether a research-first path fits you?',
  ctaSub: 'A counsellor can walk through IIT JAM and IISER options in detail.',
});
