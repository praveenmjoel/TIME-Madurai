import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why is NIT Trichy uniquely accessible for Tamil Nadu students?',
    a: 'Every NIT reserves 50% of seats for Home State students, and NIT Trichy\'s home state is Tamil Nadu. That means TN students compete for CSE at a JEE Main rank of roughly 2,500–4,000 under Home State quota — versus 1,200–2,500 for Other State students, who compete nationally. This home-state advantage is one of the biggest structural benefits TN students have in the entire admissions system.',
  },
  {
    q: 'Is a Tier 2 NIT better than a top private college?',
    a: 'Usually yes for core branches, and it depends for CSE. NITs are Institutes of National Importance with GATE-recognised degrees, PSU recruitment eligibility, and generally lower fees than BITS/VIT/SRM. A Tier 2 NIT\'s ECE or Mechanical typically outperforms an unknown private college\'s CSE in long-run career terms — see our Branch vs. College debate guide for the full framework.',
  },
  {
    q: 'What\'s the actual fee difference between NIT Home State and Other State?',
    a: 'At NIT Trichy specifically, Home State (Tamil Nadu) tuition is about ₹70,000/semester (₹1.4 lakh/year), while Other State tuition runs about ₹1,25,000/semester (₹2.5 lakh/year) — nearly double. This is on top of the rank advantage, making TN residency a genuine financial and admissions edge at NITT.',
  },
];

export const nitGuidePage = buildLeafPage({
  slug: 'engineering/nit-guide',
  title: 'NIT Guide 2026: All 31 NITs, Tiers & NIT Trichy Branch Cutoffs | T.I.M.E. Madurai',
  description: 'Every NIT tier-ranked, NIT Trichy\'s branch-wise closing ranks for Tamil Nadu home-state quota, and why NITT is the single best-value option for TN engineering aspirants.',
  canonical: '/engineering/nit-guide/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'NIT Guide' }],
  eyebrow: 'engineering · nit guide',
  heroTitle: 'The Complete NIT Guide',
  heroSubtitle: '31 National Institutes of Technology, one in almost every state — and NIT Trichy, right here in Tamil Nadu, is the single highest-value seat most TN students can realistically target.',
  stats: [
    { value: '31', label: 'NITs across India' },
    { value: '#1', label: 'NIT Trichy\'s rank among NITs' },
    { value: '50%', label: 'Seats reserved for home state' },
    { value: '₹1.4L/yr', label: 'NITT tuition, TN home-state' },
  ],
  toc: [
    { id: 'tiers', label: 'NIT Tiers' },
    { id: 'nitt', label: 'NIT Trichy' },
    { id: 'other-top', label: 'Other Top NITs' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'NITs are the second tier of India\'s central government engineering institutes — but a good NIT (especially the top five to eight) offers excellent education, strong placements, and national-level peer exposure, often at lower fees than the IITs.',
  sections: [
    {
      id: 'tiers',
      eyebrow: 'informal classification',
      title: 'The three NIT tiers',
      table: {
        columns: ['Tier', 'NITs included', 'JEE Main rank range (OC, approx.)'],
        rows: [
          ['Tier 1 (Top)', 'Trichy, Warangal, Surathkal, Calicut, Rourkela', '2,000–15,000'],
          ['Tier 2 (Good)', 'MNIT Jaipur, Bhopal, Kurukshetra, Durgapur, Nagpur, Jalandhar', '10,000–40,000'],
          ['Tier 3 (Newer/Smaller)', 'Puducherry, Manipur, Meghalaya, Mizoram, Sikkim and others', '30,000–80,000'],
        ],
      },
    },
    {
      id: 'nitt',
      eyebrow: 'the tn nit',
      title: 'NIT Trichy — the top choice for TN students',
      table: {
        columns: ['Branch', 'Home State closing rank (OC)', 'Other State closing rank (OC)'],
        rows: [
          ['Computer Science Engineering', '2,500–4,000', '1,200–2,500'],
          ['Electronics &amp; Communication', '4,000–8,000', '2,000–5,000'],
          ['Electrical Engineering', '8,000–13,000', '4,000–8,000'],
          ['Mechanical Engineering', '10,000–16,000', '5,000–10,000'],
          ['Civil Engineering', '18,000–28,000', '10,000–18,000'],
        ],
      },
      note: 'Average package (2023–24): ~₹8–10 LPA, with a high of ~₹65 LPA. Top recruiters include Zoho, Qualcomm, Texas Instruments, Samsung, and Amazon.',
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'A JEE Main rank of 3,000–8,000 gets NIT Trichy CS or ECE for TN students — an outcome that beats most old-IIT non-CS branches in pure placement terms. This is the single most valuable rank band for Tamil Nadu JEE aspirants to aim for.',
      },
    },
    {
      id: 'other-top',
      eyebrow: 'beyond trichy',
      title: 'Other Tier 1 NITs worth knowing',
      table: {
        columns: ['NIT', 'NIRF Engg. (2024)', 'Avg. package', 'CS closing rank (OC, OS)'],
        rows: [
          ['NIT Warangal', '#11', '~₹9–11 LPA', '~1,500–3,500'],
          ['NIT Surathkal', '#16', '~₹9 LPA', '~2,000–4,500'],
        ],
      },
      note: 'For TN students who miss NIT Trichy CSE, NIT Warangal or Surathkal CSE under Other-State quota is often a stronger bet than a Tier 2 NIT\'s home-adjacent branch.',
    },
  ],
  faqs,
  faqTitle: 'NIT admissions — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Targeting NIT Trichy?',
  ctaSub: 'Home-state quota rewards a well-planned JEE Main attempt — let\'s map your target rank.',
});
