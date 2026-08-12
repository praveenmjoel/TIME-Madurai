import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do all SRM campuses admit through the same process?',
    a: 'The exam is shared, but quality is not. SRM Kattankulathur (the flagship, near Chennai) is genuinely Tier 1 private with the best faculty and placements; Ramapuram and Vadapalani are meaningfully lower-tier despite sharing the SRM name. Always confirm which specific campus your offer is for.',
  },
  {
    q: 'Can I get into SRM using my JEE Main score instead of SRMJEEE?',
    a: 'Yes — SRM accepts JEE Main scores for direct admission to some seats (management and NRI quota excluded). This gives students who\'ve already prepared for JEE Main a second route into SRM without a separate exam.',
  },
];

export const srmjeeePage = buildLeafPage({
  slug: 'engineering/admissions/srmjeee',
  title: 'SRMJEEE 2026: Pattern, Campus Comparison & Preparation | T.I.M.E. Madurai',
  description: 'SRMJEEE exam pattern and marking scheme, plus an honest comparison of SRM\'s Kattankulathur, Ramapuram, and Vadapalani campuses.',
  canonical: '/engineering/admissions/srmjeee/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions', href: '/engineering/admissions/' }, { label: 'SRMJEEE' }],
  eyebrow: 'entrance exam',
  heroTitle: 'SRMJEEE',
  heroSubtitle: 'The entrance exam for SRM Institute of Science and Technology — one of Tamil Nadu\'s largest private universities, with sharply different quality across campuses.',
  stats: [
    { value: '125', label: 'Questions in 2.5 hours' },
    { value: '315', label: 'Total marks' },
    { value: '5', label: 'Main SRM campuses' },
  ],
  toc: [
    { id: 'pattern', label: 'Pattern & Marking' },
    { id: 'campuses', label: 'Campus Comparison' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'SRM Kattankulathur, near Chennai, is the flagship campus with the strongest placement record among SRM\'s multiple locations across India.',
  sections: [
    {
      id: 'pattern',
      eyebrow: 'the mechanics',
      title: 'Pattern & marking',
      table: {
        columns: ['Parameter', 'Detail'],
        rows: [
          ['Eligibility', 'Min. 50% in each of PCM in Class 12; English as one subject'],
          ['Mode', 'Online CBT — usually April–May, Phase 1 and Phase 2 available'],
          ['Questions', '125 in 2.5 hours — Physics (35), Chemistry (35), Maths (40), English (5), Aptitude (10)'],
          ['Marking', '+3 correct, −1 wrong'],
          ['Total marks', '315'],
        ],
      },
    },
    {
      id: 'campuses',
      eyebrow: 'not all equal',
      title: 'SRM campus quality, compared',
      table: {
        columns: ['Campus', 'Location', 'Placement quality'],
        rows: [
          ['SRM Kattankulathur', 'Chengalpet, TN', 'Excellent (Tier 1 private) — flagship'],
          ['SRM Ramapuram', 'Chennai, TN', 'Good — urban campus, smaller than flagship'],
          ['SRM Vadapalani', 'Chennai, TN', 'Moderate — engineering + management focus'],
          ['SRM Trichy', 'Trichy, TN', 'Growing — newer, verify placement data'],
          ['SRM AP', 'Amaravati, AP', 'Good — new campus, data science focus'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'SRM Kattankulathur CSE/ECE/AI is a strong private option for TN students if NIT/BITS ranks aren\'t achieved. TCS, Wipro, Infosys, Capgemini, and several product companies recruit from Kattankulathur specifically — always verify the branch\'s actual placement data before finalising.',
      },
    },
  ],
  faqs,
  faqTitle: 'SRMJEEE — quick answers',
  backLink: { label: 'all entrance exams', href: '/engineering/admissions/' },
  ctaHeading: 'Not sure which SRM campus your offer is for?',
  ctaSub: 'Verify placement data with a counsellor before you accept.',
});
