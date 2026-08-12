import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do IITs and NITs have the same fee-waiver structure?',
    a: 'Nearly identical in principle — both offer full waivers for SC/ST, EWS, and PwD students, plus a sliding Merit-cum-Means scale for GEN/OBC students based on family income (full waiver under ₹1 lakh, two-thirds waiver for ₹1–5 lakh). The exact rupee figures differ slightly since NIT tuition is somewhat lower than IIT tuition to begin with.',
  },
  {
    q: 'Is the VIT Chancellor\'s Award only for the very top VITEEE ranks?',
    a: 'Yes — it\'s reserved for VITEEE ranks 1–50 specifically, offering a full 100% tuition waiver. Ranks 51–1,000 qualify for the VIT Merit Scholarship instead, a partial 25–50% waiver — still meaningful, but a different tier.',
  },
];

export const institutionScholarshipsPage = buildLeafPage({
  slug: 'scholarships/institution-scholarships',
  title: 'Institution-Level Scholarships: IIT, NIT & VIT Fee Waivers | T.I.M.E. Madurai',
  description: 'How fee waivers actually work at IITs and NITs by income slab, plus VIT\'s Chancellor\'s Award and Merit Scholarship tiers.',
  canonical: '/scholarships/institution-scholarships/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Scholarships', href: '/scholarships/' }, { label: 'Institution-Level Scholarships' }],
  eyebrow: 'scholarships · built into the fee structure',
  heroTitle: 'Institution-Level Scholarships',
  heroSubtitle: 'Fee waivers that are built directly into the admission itself — no separate application needed at IITs and NITs, and merit-based at VIT.',
  stats: [ { value: '100%', label: 'IIT/NIT tuition waiver, SC/ST' }, { value: '100%', label: 'VIT waiver, VITEEE rank 1–50' } ],
  toc: [
    { id: 'iit-nit', label: 'IITs & NITs' },
    { id: 'vit', label: 'VIT Vellore' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'These aren\'t separate scholarships you apply for — they\'re fee-waiver slabs automatically applied based on your category and, at VIT, your entrance rank.',
  sections: [
    {
      id: 'iit-nit',
      eyebrow: 'income-based sliding scale',
      title: 'IIT & NIT fee waivers',
      table: {
        columns: ['Category', 'IIT tuition status', 'NIT tuition status'],
        rows: [
          ['SC/ST', '100% waiver — mess/hostel only', '100% waiver — mess/hostel only'],
          ['EWS', 'Full waiver', 'Full waiver (verify with specific NIT)'],
          ['PwD', 'Full waiver, all categories', 'Full waiver'],
          ['GEN/OBC, income &lt; ₹1 lakh/yr', 'Full waiver (Merit-cum-Means)', 'Full waiver (Merit-cum-Means)'],
          ['GEN/OBC, income ₹1–5 lakh/yr', '2/3rd waiver', '2/3rd waiver'],
          ['GEN/OBC, income &gt; ₹5 lakh/yr', 'Full tuition (~₹2 lakh/yr)', 'Full tuition (~₹1.5–2 lakh/yr)'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'Even a GEN student with family income between ₹1–5 lakh gets two-thirds of tuition waived (roughly ₹1.33 lakh/year saved at an IIT). Only families earning above ₹5 lakh/year pay full tuition — the net cost of an IIT/NIT education for most middle-class families is far lower than headline fee figures suggest.',
      },
    },
    {
      id: 'vit',
      eyebrow: 'rank-based, at admission',
      title: 'VIT Vellore scholarships',
      table: {
        columns: ['Scholarship', 'Criteria', 'Amount'],
        rows: [
          ['VIT Chancellor\'s Award', 'VITEEE Rank 1–50', '100% tuition waiver'],
          ['VIT Merit Scholarship', 'VITEEE Rank 51–1,000', '25–50% tuition waiver'],
          ['JEE Main Merit Scholarship', 'JEE Main ≥ 99 percentile', '30% tuition waiver (apply separately)'],
          ['Sports Scholarship', 'National/State-level sports achievers', '25–50% waiver, applied at admission'],
        ],
      },
      note: 'Always request the scholarship confirmation letter before paying any admission fees at a private institution.',
    },
  ],
  faqs,
  faqTitle: 'Institution scholarships — quick answers',
  backLink: { label: 'the Scholarships hub', href: '/scholarships/' },
  ctaHeading: 'Want your effective net fee calculated for a specific college?',
  ctaSub: 'A counsellor can run the numbers against your income slab and category.',
});
