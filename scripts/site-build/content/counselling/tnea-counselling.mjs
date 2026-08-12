import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How is this different from your Engineering hub\'s TNEA page?',
    a: 'That page covers eligibility and the cutoff formula. This one focuses on the counselling mechanics specifically — the reservation categories that determine your seat pool, and the round-by-round allotment process once your cutoff is published.',
  },
  {
    q: 'What does "horizontal" reservation mean for the 3% Differently Abled quota?',
    a: 'Horizontal reservation runs across every vertical category rather than being a separate pool — 3% of OC seats go to OC-DA students, 3% of BC seats to BC-DA students, and so on. DA candidates compete within their own vertical category, not against the general DA pool alone.',
  },
];

export const tneaCounsellingPage = buildLeafPage({
  slug: 'counselling/tnea-counselling',
  title: 'TNEA Counselling Process: Reservation Categories & Rounds | T.I.M.E. Madurai',
  description: 'TNEA\'s reservation category breakdown and round-by-round counselling mechanics — for TNEA eligibility and the cutoff formula, see our Engineering Admissions guide.',
  canonical: '/counselling/tnea-counselling/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'TNEA Counselling' }],
  eyebrow: 'counselling · engineering',
  heroTitle: 'TNEA Counselling Mechanics',
  heroSubtitle: 'Once your TNEA cutoff is published, reservation category and round-by-round choice filling decide your actual seat.',
  stats: [
    { value: '69%', label: 'Total TN reservation in TNEA' },
    { value: '31%', label: 'OC (open/merit) share' },
    { value: '3–4', label: 'Allotment rounds' },
  ],
  toc: [
    { id: 'categories', label: 'Reservation Categories' },
    { id: 'special', label: 'Special Category Quotas' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'TNEA has its own distinct reservation structure from central institutions — understanding your category correctly is critical to predicting which college you can realistically get.',
  sections: [
    {
      id: 'categories',
      eyebrow: 'know your pool',
      title: 'TNEA reservation categories',
      table: {
        columns: ['Category', 'Reservation %', 'Who qualifies'],
        rows: [
          ['OC (Open Competition)', '31%', 'All students — no caste restriction, merit-only'],
          ['BC (Backward Class)', '26.5%', 'BC community, per TN Government list'],
          ['MBC/DNC', '20%', 'Most Backward Class or Denotified Community, per TN Govt list'],
          ['SC', '15%', 'SC communities as notified by TN Govt'],
          ['ST', '1%', 'ST communities as notified by TN Govt'],
          ['SCA (Arunthathiyar)', '3.5%', 'Specific SC sub-category'],
        ],
      },
      note: 'Total reservation in TNEA is 69% — meaning only 31% of seats fall in the open/merit OC pool. Tamil Nadu\'s reservation exceeds the Supreme Court\'s general 50% cap due to Ninth Schedule protection.',
    },
    {
      id: 'special',
      eyebrow: 'beyond community categories',
      title: 'Special category quotas',
      table: {
        columns: ['Quota', 'Reservation', 'Notes'],
        rows: [
          ['Differently Abled (DA)', '3% horizontal', 'Runs within each vertical category, not a separate additional pool'],
          ['Ex-Servicemen', 'Horizontal', 'Specific seats within OC/BC/MBC/SC/ST categories'],
          ['Govt School Students', '7.5%', 'Studied in a TN govt/aided school from Class 1 (or joining year) through 12'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'The 7.5% Government School Quota (introduced 2020) is a major opportunity for rural and economically weaker students — private-school students don\'t qualify. This quota applies only at TNEA, not at JoSAA or MCC/NEET national counselling.',
      },
    },
  ],
  faqs,
  faqTitle: 'TNEA counselling — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Not sure which reservation category applies to you?',
  ctaSub: 'See our Reservation hub for the full TN category breakdown, or ask a counsellor directly.',
});
