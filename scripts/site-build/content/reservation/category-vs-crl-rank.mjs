import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Which rank does JoSAA actually use to fill reserved seats?',
    a: 'Your category rank, not your CRL. If you\'re SC with a CRL of 30,000 but an SC category rank of 2,500, the allotment algorithm uses that SC rank of 2,500 to fill SC seats. Your CRL only matters if you\'re also competing for General/open seats.',
  },
  {
    q: 'Can I compete for General seats if I\'m in a reserved category?',
    a: 'Yes — if your CRL rank is good enough for General seats, you can compete for GEN open seats too, and JoSAA gives you whichever choice ranks higher in your preference list among what you qualify for. Reserved-category students aren\'t restricted to only their category\'s seats.',
  },
];

export const categoryVsCrlPage = buildLeafPage({
  slug: 'reservation/category-vs-crl-rank',
  title: 'Category Rank vs. CRL Rank: How JoSAA Actually Allots Seats | T.I.M.E. Madurai',
  description: 'The difference between your Common Rank List (CRL) and your category rank, with a real NIT Trichy CSE example showing how reservation changes the effective rank needed.',
  canonical: '/reservation/category-vs-crl-rank/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'Category Rank vs CRL Rank' }],
  eyebrow: 'reservation · the confusing bit',
  heroTitle: 'Category Rank vs. CRL Rank',
  heroSubtitle: 'The single most misunderstood part of how reservation actually works in JEE counselling — and it changes everything about how you should read cutoff tables.',
  stats: [],
  toc: [
    { id: 'example', label: 'A Worked Example' },
    { id: 'explainer', label: 'CRL vs. Category Rank' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'JEE Main and JEE Advanced both publish two rank lists: the Common Rank List (CRL — overall merit) and your Category Rank (your rank among all students in your specific category).',
  sections: [
    {
      id: 'example',
      eyebrow: 'illustrative, 2024 cycle',
      title: 'B.Tech CSE at NIT Trichy — Home State (TN) quota',
      table: {
        columns: ['Category', 'Approx. closing rank (CRL)', 'What this means'],
        rows: [
          ['GEN (Home State)', '~4,500–6,000 CRL', 'General merit rank needed for CSE at NITT HS quota'],
          ['OBC-NCL (Home State)', '~8,000–12,000 CRL', 'OBC-NCL students up to ~12,000 CRL can get this seat'],
          ['SC (Home State)', '~25,000–40,000 CRL', 'SC students up to ~40,000 CRL still qualify'],
          ['ST (Home State)', '~60,000–1,00,000 CRL', 'Significantly higher ranks still qualify'],
          ['EWS (Home State)', '~6,500–9,000 CRL', 'A separate 10% pool'],
        ],
      },
      note: 'Figures are illustrative, based on 2024 cycle patterns — always check josaa.nic.in\'s official opening/closing rank data for the exact current year.',
      callout: {
        type: 'tip',
        label: 'The key takeaway',
        text: 'Reserved-category students can get the same prestigious seat (e.g., CSE at NIT Trichy) at a significantly higher — numerically worse — CRL than General category students. A student with a CRL of 30,000 who is SC can still get admission to top NITs in good branches, because JoSAA fills reserved seats using category rank, not CRL.',
      },
    },
    {
      id: 'explainer',
      eyebrow: 'the mechanics',
      title: 'How the two ranks work together',
      table: {
        columns: ['Scenario', 'What happens'],
        rows: [
          ['CRL 30,000, SC Category Rank 2,500', 'You compete in SC seats using your SC rank of 2,500'],
          ['CRL 18,000, OBC-NCL Rank 5,000', 'You compete in OBC seats using your OBC rank of 5,000'],
          ['CRL good enough for GEN seats too', 'You can also compete for GEN open seats — JoSAA gives you the best option you qualify for'],
        ],
      },
      note: 'JoSAA\'s allotment algorithm uses your CATEGORY rank to fill category-specific seats — your CRL matters only for GEN/open seats.',
    },
  ],
  faqs,
  faqTitle: 'Category rank vs. CRL — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Confused about which rank applies to your target seat?',
  ctaSub: 'A counsellor can walk through your specific category rank and realistic options.',
});
