import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Does choice-filling strategy differ much between JoSAA and TN Medical Counselling?',
    a: 'The mechanics differ (JoSAA offers Freeze/Float/Slide; TN Medical is closer to accept-and-report), but the core principles are identical: fill every genuinely acceptable option, order by true preference, and include enough safe choices at the bottom to guarantee you don\'t walk away with nothing.',
  },
  {
    q: 'What\'s the single biggest choice-filling mistake?',
    a: 'Filling too few choices — 5–10 instead of 50+. With tens of thousands of competing students, a rank that looks "safe" for one seat can miss if that year\'s cutoffs shift even slightly upward. There\'s no downside to filling more choices you\'d genuinely accept.',
  },
];

export const choiceFillingPage = buildLeafPage({
  slug: 'counselling/choice-filling-strategy',
  title: 'Choice-Filling Strategy for JoSAA, MCC & TNEA | T.I.M.E. Madurai',
  description: 'The principles behind effective choice filling across every counselling process — order by true preference, include safe options, and avoid the single most common mistake.',
  canonical: '/counselling/choice-filling-strategy/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'Choice-Filling Strategy' }],
  eyebrow: 'the step that decides everything',
  heroTitle: 'Choice-Filling Strategy',
  heroSubtitle: 'Across JoSAA, MCC, and TNEA, this single step determines more outcomes than the exam itself. Get it wrong and a strong rank still ends in a disappointing seat.',
  stats: [],
  toc: [
    { id: 'principles', label: 'The Core Principles' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Choice filling is where students most often lose seats they had genuinely earned — not because their rank wasn\'t good enough, but because their choice list was too short or ordered incorrectly.',
  sections: [
    {
      id: 'principles',
      title: 'Principles that apply across every counselling',
      table: {
        columns: ['Principle', 'Why it matters'],
        rows: [
          ['Fill every combination you\'d genuinely accept', 'Don\'t leave desirable options out — the algorithm can only allot from what you\'ve entered'],
          ['Order by true preference, not predicted allotment', 'The system gives you the best option your rank qualifies for, in the order you rank it'],
          ['Include both quota types where relevant', 'e.g., NIT Home State AND Other State — one may be more accessible than expected'],
          ['Add safe choices at the bottom', 'Lower-ranked colleges or less-popular branches, so you don\'t end up with nothing'],
          ['Fill your category rank carefully', 'Reserved-category students must fill category-specific choices, not just General'],
          ['Aim for 50+ genuine choices', 'A rank that looks "safe" can miss if cutoffs shift even slightly'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'The most common mistake',
        text: 'Filling only 5–10 choices. With thousands to millions of competing students depending on the exam, cutoffs move year to year — a choice list that\'s too short is the single most avoidable way to end up with a worse seat than your rank deserved.',
      },
    },
  ],
  faqs,
  faqTitle: 'Choice filling — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Building your own choice list?',
  ctaSub: 'A counsellor can review your list before you submit it — not after.',
});
