import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why is the drop-year decision more significant for NEET than for JEE?',
    a: 'Because the funnel is narrower. Engineering has multiple exams (JEE, BITSAT, VITEEE, TNEA) and many genuinely good private colleges as backups. Medical admission is essentially binary: government MBBS (very competitive, limited seats) or private MBBS (very expensive) — which raises the stakes of the drop-year call considerably.',
  },
  {
    q: 'If I got a TN government MBBS seat but not my preferred college, should I drop?',
    a: 'No — do not drop. A government MBBS seat anywhere in Tamil Nadu gives access to the same NEET PG exam, the same MD/MS pathways, and the same Medical Council registration. Campus preference matters far less in medicine than in engineering; what matters is your NEET PG performance later.',
  },
];

export const dropYearPage = buildLeafPage({
  slug: 'medical/drop-year-decision',
  title: 'The NEET Drop Year Decision: A Structured Framework | T.I.M.E. Madurai',
  description: 'Should you drop a year to retake NEET for a better score? A score-by-score, situation-by-situation framework for the decision that shapes a medical career.',
  canonical: '/medical/drop-year-decision/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'The Drop Year Decision' }],
  eyebrow: 'the highest-stakes call',
  heroTitle: 'The NEET Drop Year Decision',
  heroSubtitle: 'Medical admission is a narrower funnel than engineering — government MBBS or expensive private MBBS, with little in between. Here\'s a structured way to decide.',
  stats: [
    { value: '60–100', label: 'Avg. mark gain with a focused drop year' },
    { value: '1×/yr', label: 'NEET frequency — no second session' },
  ],
  toc: [
    { id: 'framework', label: 'Situation-by-Situation' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Unlike JEE, where BITSAT, VITEEE, SRMJEEE, and TNEA all provide genuine backup routes, NEET funnels almost everyone toward one binary choice. That makes this decision worth thinking through carefully rather than reactively.',
  sections: [
    {
      id: 'framework',
      title: 'What to do, by situation',
      table: {
        columns: ['Situation', 'Recommendation'],
        rows: [
          ['Score 550+, missed govt MBBS in TN by ~20 marks', 'Consider dropping — likely to get govt MBBS with focused 1-year prep'],
          ['Score 480–549, targeting govt MBBS', 'Drop likely beneficial — 60–100 mark improvement is realistically achievable'],
          ['Score 400–479, BDS govt available', 'Evaluate carefully — government BDS is a genuinely good career; weigh the uncertainty against a confirmed seat'],
          ['Score 400–479, only private MBBS at ₹80L+ available', 'Do not take private MBBS — the financial burden is unsustainable on most starting doctor salaries; drop, or take BDS/BAMS instead'],
          ['Consistent underperformer, 3rd attempt', 'Realistic review — consider government BAMS/BSMS, BDS, or a pivot to allied health/pharmacy'],
          ['Score 600+, got a TN govt seat but not preferred college', 'Do not drop — any TN government MBBS seat is excellent; campus preference matters little'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The one thing to remember',
        text: 'A government MBBS seat at ANY government medical college in Tamil Nadu gives access to the same MD/MS pathways and the same Tamil Nadu Medical Council registration. What matters for a medical career is your NEET PG score later — not the prestige of your undergraduate college. Get the government seat wherever it is, and focus on NEET PG from there.',
      },
    },
  ],
  faqs,
  faqTitle: 'The drop-year decision — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Facing this decision right now?',
  ctaSub: 'A structured, honest conversation beats a rushed choice on results day.',
});
