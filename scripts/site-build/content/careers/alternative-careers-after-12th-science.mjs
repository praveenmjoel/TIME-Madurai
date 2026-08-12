import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do I need to have decided on design or law right after Class 12?',
    a: 'For B.Arch and B.A. LLB (5-year integrated), largely yes — both are entered directly after Class 12 via NATA/JEE Paper 2B or CLAT/LSAT respectively. But a 3-year LLB after any graduate degree lets you pursue law later, including alongside a BTech or MBBS — a genuinely strong combination for patent law and IP work.',
  },
  {
    q: 'Why does a science background help with Chartered Accountancy?',
    a: 'The maths foundation from Class 11–12 science genuinely helps in CA Foundation and IPCC, where quantitative aptitude and structured problem-solving matter. It\'s a common and successful pivot for science students who discover an interest in finance rather than engineering or medicine.',
  },
];

export const alternativeCareersPage = buildLeafPage({
  slug: 'careers/alternative-careers-after-12th-science',
  title: 'Alternative Careers After 12th Science: Design, Business & Law | T.I.M.E. Madurai',
  description: 'Structured non-engineering, non-medical paths for science students — design and architecture, business and finance, and law — with entry routes and why science students often excel.',
  canonical: '/careers/alternative-careers-after-12th-science/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: 'Alternative Careers' }],
  eyebrow: 'careers · beyond the obvious',
  heroTitle: 'Alternative Careers After 12th Science',
  heroSubtitle: 'Not every strong student should default to a 4-year engineering or medical degree. These structured paths offer genuinely strong careers with faster entry into the workforce.',
  stats: [],
  toc: [
    { id: 'design', label: 'Design & Creative Tech' },
    { id: 'business', label: 'Business & Finance' },
    { id: 'law', label: 'Law' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Each of these tracks has its own entrance process and timeline — worth deciding on early since several need direct-from-Class-12 entry.',
  sections: [
    {
      id: 'design',
      eyebrow: 'creative + technical',
      title: 'Design & creative technology',
      table: {
        columns: ['Programme', 'Entry', 'Duration', 'Careers'],
        rows: [
          ['B.Des (Industrial/Product Design)', 'NID DAT, UCEED (IITs), NIFT entrance', '4 yrs', 'Product design, UX/UI, automobile design — starting ₹6–15 LPA'],
          ['B.Arch', 'NATA + JEE Paper 2B', '5 yrs', 'Architect, urban planner, interior designer'],
          ['Animation &amp; VFX', 'MAAC/Arena/NID/Symbiosis', '3–4 yrs', 'Film VFX, game design, AR/VR — ₹4–20 LPA'],
        ],
      },
    },
    {
      id: 'business',
      eyebrow: 'quantitative aptitude, applied',
      title: 'Business & finance',
      table: {
        columns: ['Programme', 'Detail', 'Why science students succeed'],
        rows: [
          ['BBA + MBA (IIMs)', 'IIM entry via CAT after any graduate degree', 'Science students consistently outperform arts graduates in CAT Quant'],
          ['Chartered Accountancy (CA)', 'Foundation → Intermediate → Final; 4–5 yrs', 'Maths background helps enormously in Foundation and IPCC'],
          ['Actuary (IAI)', 'Series of exams after graduation in Maths/Stats/Economics', 'India has only ~500 qualified actuaries — demand far exceeds supply'],
          ['CFA', '3 levels, alongside any degree', 'Investment banking, portfolio management — ₹15–50+ LPA at senior levels'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'IIM Tiruchirappalli accepts BTech and MBBS graduates for its MBA via CAT — located in Tamil Nadu, accessible and affordable compared to IIM A/B/C. PSG Institute of Management (Coimbatore), SSN School of Management (Chennai), and Loyola Institute of Business Administration (Chennai) are strong regional options too.',
      },
    },
    {
      id: 'law',
      eyebrow: 'a growing science + law combination',
      title: 'Law for science graduates',
      table: {
        columns: ['Programme', 'Detail', 'Science + law advantage'],
        rows: [
          ['B.A. LLB (5-yr integrated)', 'After Class 12, via CLAT/LSAT', 'Mainly for students who decide on law right after 12th'],
          ['LLB (3-yr)', 'After any graduate degree — can pair with BTech/MBBS', 'Patent law and IPR — massive demand for science + law combination'],
          ['Patent Attorney/Agent', 'BTech + LLB + patent agent exam', 'India\'s IPR ecosystem is growing fast; pharma/IT/biotech pay a premium'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'Alternative careers — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Exploring a path beyond engineering or medicine?',
  ctaSub: 'A career aptitude conversation can clarify this faster than months of research.',
});
