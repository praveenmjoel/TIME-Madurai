import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Can I hold seats in two counsellings at once?',
    a: 'Briefly, yes, but never let it become permanent — if you get a seat in both MCC (AIQ) and TN State Medical, for example, you must withdraw from one before paying fees or joining the other. Holding both without withdrawing risks both being cancelled.',
  },
  {
    q: 'What should I do if Round 1 doesn\'t give my preferred choice?',
    a: 'Use Float or Slide rather than rejecting outright — you cannot re-enter the same round once you\'ve withdrawn, and a confirmed seat you can upgrade from is safer than gambling on a future round with nothing in hand.',
  },
];

export const managingMultiplePage = buildLeafPage({
  slug: 'counselling/managing-multiple-counsellings',
  title: 'Managing Multiple Counsellings Simultaneously | T.I.M.E. Madurai',
  description: 'How to track JoSAA, MCC, TN Medical, TNEA, VITEEE, and SRMJEEE at the same time without losing a seat you\'ve already earned.',
  canonical: '/counselling/managing-multiple-counsellings/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'Managing Multiple Counsellings' }],
  eyebrow: 'the coordination problem',
  heroTitle: 'Managing Multiple Counsellings at Once',
  heroSubtitle: 'A JEE+NEET aspirant can be tracking JoSAA, MCC, TN Medical, TNEA, VITEEE, and SRMJEEE simultaneously. Here\'s how to do it without losing a seat.',
  stats: [],
  toc: [
    { id: 'situations', label: 'Situation by Situation' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Most students competing seriously for both engineering and medical seats — or multiple engineering routes — end up juggling several counselling timelines at once. Missing a 24-hour acceptance window can forfeit a seat you worked years for.',
  sections: [
    {
      id: 'situations',
      title: 'What to do, situation by situation',
      table: {
        columns: ['Situation', 'What to do'],
        rows: [
          ['JoSAA allotment comes first, TNEA still pending', 'Accept the JoSAA seat via Float and pay the acceptance fee; continue TNEA choice filling. Withdraw JoSAA only if TNEA gives a better seat.'],
          ['MCC (AIQ) and TN State Medical running simultaneously', 'Participate in both. If TN State gives a better seat, withdraw from MCC BEFORE paying the TN State seat fee — never hold both.'],
          ['Private college (VIT/SRM) seat vs. pending JoSAA', 'Hold the private seat via provisional payment while awaiting JoSAA. Withdraw the private seat if JoSAA gives your preferred outcome — most allow partial-refund cancellation.'],
          ['Round 1 allotment isn\'t your preferred choice', 'Use Float / Slide, not outright rejection — you can\'t re-enter the same round once withdrawn.'],
          ['No seat after Round 2 / Mop-Up', 'Participate in Spot Rounds / Stray Vacancy. Simultaneously apply to private colleges directly, and consider whether a drop year is right for you.'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The single best habit',
        text: 'Keep a simple spreadsheet tracking: counselling name, registration deadline, choice-filling window, allotment date, acceptance deadline, joining deadline, fee paid/pending, and current seat status. Set phone alarms for every deadline — a missed 24-hour acceptance window can forfeit years of preparation.',
      },
    },
  ],
  faqs,
  faqTitle: 'Managing multiple counsellings — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Tracking three or more counsellings this cycle?',
  ctaSub: 'A counsellor can help you build the tracking system before deadlines start hitting.',
});
