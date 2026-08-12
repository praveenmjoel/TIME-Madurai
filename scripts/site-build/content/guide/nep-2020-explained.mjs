import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Does NEP 2020 change the JEE or NEET exam pattern?',
    a: 'No. NEP 2020 primarily reshapes undergraduate degree structure at universities — it does not affect the JEE/NEET exam pattern, syllabus, or counselling process. IITs and NITs are implementing NEP gradually, but BTech remains a 4-year degree with enhanced research components, not a fundamentally different structure.',
  },
  {
    q: 'If I exit after Year 1 or 2 under the new 4-year structure, is that degree actually useful?',
    a: 'It\'s designed to be a genuine, usable credential — Year 1 exit gives a Certificate, Year 2 gives a Diploma, Year 3 gives a Degree, and Year 4 gives an Honours/Research degree. Each exit point is meant to represent real, employable competency, not just a partial/incomplete record. That said, implementation speed and how employers actually treat these credentials still varies by university and is genuinely still maturing nationally.',
  },
];

export const nep2020Page = buildLeafPage({
  slug: 'guide/nep-2020-explained',
  title: 'NEP 2020 Explained: What Changes for Engineering & Medical Students | T.I.M.E. Madurai',
  description: 'The National Education Policy 2020\'s key changes — 4-year degrees with multiple exit points, Academic Bank of Credits, and what it does and doesn\'t affect for JEE/NEET students.',
  canonical: '/guide/nep-2020-explained/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Guide', href: '/guide/' }, { label: 'NEP 2020 Explained' }],
  eyebrow: 'guide · the 2020 reform',
  heroTitle: 'NEP 2020, Explained',
  heroSubtitle: 'The most significant reform in Indian higher education in 34 years — here\'s what actually changes for students, and what stays exactly the same.',
  stats: [ { value: '34 yrs', label: 'Since the last major reform' } ],
  toc: [
    { id: 'changes', label: 'What Changes' },
    { id: 'unaffected', label: 'What Doesn\'t Change' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Full implementation is still underway across universities, but students entering college now should understand the core structural shifts.',
  sections: [
    {
      id: 'changes',
      eyebrow: 'the structural reform',
      title: 'What NEP 2020 actually changes',
      table: {
        columns: ['Change', 'What it means'],
        rows: [
          ['4-Year UG Programme (FYUP)', 'Most universities shifting from 3-year to 4-year UG degrees'],
          ['Multiple Entry &amp; Exit', 'Exit after Year 1 (Certificate), Year 2 (Diploma), Year 3 (Degree), or Year 4 (Honours/Research)'],
          ['Academic Bank of Credits (ABC)', 'Credits earned at one institution can transfer to another'],
          ['Interdisciplinary focus', 'Students can combine subjects across disciplines — e.g. Computer Science with Music'],
          ['IITs and NITs', 'Implementing NEP gradually; BTech remains 4 years with enhanced research components'],
        ],
      },
    },
    {
      id: 'unaffected',
      eyebrow: 'the reassurance',
      title: 'What stays exactly the same',
      callout: {
        type: 'info',
        label: 'For JEE and NEET aspirants specifically',
        text: 'NEP 2020 is being implemented at different speeds by different universities. For JEE and NEET aspirants, the exam pattern, syllabus, and counselling process remain unchanged. NEP primarily affects UG structure at universities — not the IIT/NIT/AIIMS admission process itself.',
      },
    },
  ],
  faqs,
  faqTitle: 'NEP 2020 — quick answers',
  backLink: { label: 'the Guide hub', href: '/guide/' },
  ctaHeading: 'Want to understand how NEP affects your specific target university?',
  ctaSub: 'A counsellor can check that institution\'s current implementation status.',
});
