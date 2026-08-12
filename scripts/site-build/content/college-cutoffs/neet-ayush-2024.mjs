import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why does NIS Chennai\'s BSMS cutoff run so much higher than government BAMS?',
    a: 'Because it\'s the single most prestigious Siddha institution in India — the only National Institute of Siddha, under the Ministry of AYUSH — so demand and closing scores concentrate there specifically. Its ~520–570 (AIQ, GEN) range is comparable to a second-tier government MBBS seat, reflecting genuine demand for quality Siddha education rather than a "fallback" mentality.',
  },
  {
    q: 'Are these AYUSH cutoffs comparable across all TN colleges, or just the ones listed?',
    a: 'These are indicative figures for the flagship government colleges specifically — Govt Ayurveda College Chennai, Govt Siddha Medical College Chennai, and NIS Chennai. District-level and private AYUSH colleges typically close at meaningfully lower scores, making AYUSH accessible across a wide NEET score range.',
  },
];

export const neetAyushCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/neet-ayush-2024',
  title: 'NEET 2024 AYUSH Cutoffs: BAMS, BSMS & BHMS in Tamil Nadu | T.I.M.E. Madurai',
  description: 'NEET 2024 TN state quota closing scores for BAMS, BSMS (Siddha), and BHMS at government and private AYUSH colleges, by category.',
  canonical: '/college-cutoffs/neet-ayush-2024/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'NEET AYUSH Cutoffs 2024' }],
  eyebrow: '2024 cycle · ayush',
  heroTitle: 'NEET 2024 — AYUSH Cutoffs in Tamil Nadu',
  heroSubtitle: 'BAMS, BSMS (Siddha), and BHMS closing scores at Tamil Nadu\'s flagship government AYUSH institutions.',
  stats: [],
  toc: [
    { id: 'cutoffs', label: 'Closing Scores by Programme' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'TN State Quota, 2024 cycle, indicative. OC/GEN and category-wise closing NEET scores.',
  sections: [
    {
      id: 'cutoffs',
      title: 'AYUSH closing scores, 2024',
      table: {
        columns: ['Programme / college type', 'OC/GEN closing', 'BC closing', 'MBC closing', 'SC closing'],
        rows: [
          ['BAMS — Govt Ayurveda College Chennai (TN quota)', '~400–440', '~360–400', '~330–370', '~280–320'],
          ['BSMS — Govt Siddha Medical College Chennai (TN quota)', '~490–540', '~450–498', '~420–465', '~370–415'],
          ['BSMS — National Institute of Siddha, Chennai (AIQ)', '~520–570 (AIQ, GEN)', '~480–525', '~455–495', '~400–445'],
          ['BHMS — Govt Homeopathy Medical College Chennai (TN quota)', '~360–400', '~320–362', '~295–335', '~255–295'],
          ['BAMS — good private colleges (TN, management quota)', '~200–350 (lower threshold)', '—', '—', 'Fees: ₹2–5 lakh/yr'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'BSMS (Siddha) at NIS Chennai under AIQ is the most competitive AYUSH seat in TN — its OC closing of 520–570 is comparable to a second-tier government MBBS seat, reflecting genuine demand for quality Siddha education. TN government BAMS seats close at 400–440 OC, accessible to students who cleared NEET but missed government MBBS — these are real career-building opportunities, not consolation choices.',
      },
    },
  ],
  faqs,
  faqTitle: 'AYUSH cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Considering AYUSH as a genuine first-choice career?',
  ctaSub: 'See our full AYUSH guide, or talk to a counsellor about your NEET range.',
});
