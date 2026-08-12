import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the difference between "Float" and "Slide" in JoSAA?',
    a: 'Float keeps your allotted seat while allowing JoSAA to upgrade you to a better one in later rounds — you keep your current seat if no upgrade comes. Slide keeps your institute but lets you switch to a different programme you prefer more within that same institute (e.g., ECE → CSE within NIT Trichy). Choosing the wrong one can cost you a seat you actually wanted.',
  },
  {
    q: 'How many choices should I actually fill?',
    a: 'Far more than most students think — 50+ genuine choices spanning multiple institutes and programmes, not 5–10. With 25,000 choices allowed and millions of competing students, a rank that looks "safe" for one seat can miss if cutoffs shift upward even slightly.',
  },
];

export const josaaPage = buildLeafPage({
  slug: 'counselling/josaa',
  title: 'JoSAA Counselling 2026: Process, Terms & Choice-Filling Guide | T.I.M.E. Madurai',
  description: 'How JoSAA seat allocation actually works — key terms (CRL, home state quota, freeze/float/slide), the round-by-round process, and choice-filling strategy for IIT/NIT/IIIT seats.',
  canonical: '/counselling/josaa/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'JoSAA' }],
  eyebrow: 'counselling · engineering',
  heroTitle: 'JoSAA — IIT, NIT & IIIT Counselling',
  heroSubtitle: 'The single platform through which every seat at every IIT, NIT, IIIT, and GFTI is allocated. Multiple rounds, a short response window each time, and rules that punish hesitation.',
  stats: [
    { value: '25,000', label: 'Max choices allowed' },
    { value: '6', label: 'Regular allotment rounds' },
    { value: '24–36h', label: 'Typical response window' },
  ],
  toc: [
    { id: 'terms', label: 'Key Terms' },
    { id: 'process', label: 'Round-by-Round Process' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'JoSAA runs multiple rounds of seat allotment, and each round gives you the chance to accept, freeze, float, or slide your seat — understanding these terms precisely is the difference between a great outcome and a needlessly wasted one.',
  sections: [
    {
      id: 'terms',
      eyebrow: 'the vocabulary',
      title: 'Key JoSAA terms',
      table: {
        columns: ['Term', 'What it means'],
        rows: [
          ['CRL (Common Rank List)', 'Your overall JEE Main or Advanced rank across all categories'],
          ['Category Rank', 'Your rank within your own reservation category'],
          ['Home State Quota', 'NITs reserve 50% of seats for students from the NIT\'s own state'],
          ['Opening / Closing Rank', 'The best and worst rank allotted a seat in that programme last year — a benchmark, not a guarantee'],
          ['Freeze', 'Accept the seat permanently — no further upgrades'],
          ['Float', 'Keep your seat while JoSAA tries to upgrade you in later rounds'],
          ['Slide', 'Keep your institute but switch to a preferred programme within it'],
          ['Withdrawal', 'Exit JoSAA entirely — partial refund if done before reporting'],
        ],
      },
    },
    {
      id: 'process',
      eyebrow: 'step by step',
      title: 'The JoSAA process, round by round',
      table: {
        columns: ['Step', 'Action', 'Timing'],
        rows: [
          ['Registration', 'Register on josaa.nic.in with JEE roll number', '~2 days after JEE Advanced result'],
          ['Choice filling', 'Enter preferred institute+programme+category combinations in order', '5–7 days, editable until deadline'],
          ['Round 1 allotment', 'Highest preference seat for which your rank is eligible', 'Published online'],
          ['Accept / Float / Slide / Withdraw', 'Choose your response for the allotted seat', 'Very short — 24–36 hours'],
          ['Seat acceptance fee', '₹35,000 (IITs) / ₹15,000 (NITs) — part of overall fees', 'Immediate after accepting'],
          ['Rounds 2–6', 'Repeat allotment-response-fee cycle; Float/Slide may upgrade you', 'One round per 2–3 days'],
          ['Spot rounds', 'Remaining vacant seats offered after Round 6', 'After regular rounds end'],
          ['Document verification', 'Physical reporting to allotted institute with originals', 'Per institute schedule'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'For TN students at NIT Trichy: fill both Home State and Other State quota choices for the same programme — sometimes Other State quota at a top NIT is easier to get than Home State quota at a lower one. Always fill your true preference order, not your predicted allotment; the algorithm gives you the best option your rank qualifies for.',
      },
    },
  ],
  faqs,
  faqTitle: 'JoSAA — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Building your JoSAA choice list?',
  ctaSub: 'A counsellor can help you sequence 50+ genuine choices correctly.',
});
