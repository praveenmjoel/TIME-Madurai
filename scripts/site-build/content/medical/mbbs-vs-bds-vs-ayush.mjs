import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'I scored 450 in NEET — should I drop a year for government MBBS, or take BDS/AYUSH now?',
    a: 'Data shows students who drop with structured, focused preparation gain an average of 60–100 marks. If government MBBS is genuinely your target and your current score is 400–500, a well-prepared drop year often delivers it. But if you\'d be genuinely content with BDS or government BAMS/BSMS, don\'t drop — these are good careers in their own right, and the decision should match your actual career intention, not just chase the "best" degree on paper.',
  },
  {
    q: 'Is AYUSH a real medical career or a fallback?',
    a: 'A real, licensed medical career — AYUSH degrees are regulated by the National Commission for Indian System of Medicine and the National Commission for Homoeopathy, and graduates are licensed professionals. They\'re not the same scope of practice as MBBS (no surgery, not all allopathic drugs), but BSMS (Siddha) in particular has a strong, respected career ecosystem specifically in Tamil Nadu.',
  },
];

export const mbbsVsBdsVsAyushPage = buildLeafPage({
  slug: 'medical/mbbs-vs-bds-vs-ayush',
  title: 'MBBS vs BDS vs AYUSH: Making the Right Choice | T.I.M.E. Madurai',
  description: 'A structured comparison for NEET aspirants scoring below government MBBS range — MBBS, BDS, and AYUSH degrees compared on fees, career ceiling, and long-term outlook.',
  canonical: '/medical/mbbs-vs-bds-vs-ayush/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'MBBS vs BDS vs AYUSH' }],
  eyebrow: 'the decision that trips everyone up',
  heroTitle: 'MBBS vs. BDS vs. AYUSH: Making the Right Choice',
  heroSubtitle: 'Many NEET aspirants score well enough for BDS or AYUSH but not government MBBS. Whether to wait a year for a better score is one of the most consequential family decisions in the entire process.',
  stats: [],
  toc: [
    { id: 'comparison', label: 'Side-by-Side Comparison' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'This isn\'t a question with one right answer — it depends on the score, the family\'s financial position, and what the student genuinely wants from a medical career.',
  sections: [
    {
      id: 'comparison',
      title: 'MBBS vs. BDS vs. AYUSH, side by side',
      table: {
        columns: ['Degree', 'Duration', 'Govt fee (TN)', 'Career ceiling'],
        rows: [
          ['MBBS (Govt)', '5.5 yrs', '₹1–3 lakh total', 'MD/MS → Specialist; full clinical scope'],
          ['MBBS (Private)', '5.5 yrs', '₹60–140 lakh total', 'Same clinical scope; heavy debt burden'],
          ['BDS (Govt)', '5 yrs', '₹1–2 lakh total', 'MDS → Dental Specialist; own practice viable'],
          ['BAMS (Govt)', '5.5 yrs', '₹50,000–1.5 lakh', 'MD Ayurveda → specialist; growing wellness sector'],
          ['BSMS (Govt)', '5.5 yrs', '₹50,000–1.5 lakh', 'MD Siddha → specialist; strong in Tamil Nadu specifically'],
          ['BHMS (Govt)', '5.5 yrs', '₹50,000–1.5 lakh', 'MD Homeopathy → specialist; growing private practice'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The drop-year question',
        text: 'Students who drop a year with structured, focused preparation gain an average of 60–100 marks in NEET. If your target is genuinely government MBBS and your current score is 400–500, a well-prepared drop year often gets there. But if you\'d be content with BDS or government AYUSH, don\'t drop — match the decision to your actual career intention, not the theoretical "best" option.',
      },
    },
  ],
  faqs,
  faqTitle: 'MBBS vs. BDS vs. AYUSH — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Weighing a drop year against a confirmed BDS/AYUSH seat?',
  ctaSub: 'See our full Drop Year Decision guide, or talk to a counsellor directly.',
});
