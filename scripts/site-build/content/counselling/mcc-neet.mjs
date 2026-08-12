import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What exactly counts as an "AIQ" seat?',
    a: '15% of every state government medical college\'s MBBS/BDS seats (except J&K, which opted out), plus 100% of seats at AIIMS, JIPMER, PGIMER, and all deemed universities. MCC also handles AYUSH AIQ seats. Any NEET UG qualifier from any state can compete for these — a TN student\'s AIQ competitors are from every state in the country.',
  },
  {
    q: 'Should I include smaller AIIMS campuses in my choices?',
    a: 'Yes, strongly — fill every AIIMS campus you\'d genuinely attend, even smaller ones like Patna, Gorakhpur, or Rae Bareli. Their closing ranks run considerably lower than AIIMS Delhi\'s, and they follow the same national AIIMS teaching standard.',
  },
];

export const mccNeetPage = buildLeafPage({
  slug: 'counselling/mcc-neet',
  title: 'MCC Counselling Guide: NEET All India Quota Process | T.I.M.E. Madurai',
  description: 'How MCC counselling for the 15% NEET All India Quota actually works — seat categories, round-by-round process, and choice-filling tips for AIIMS, JIPMER, and deemed universities.',
  canonical: '/counselling/mcc-neet/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'MCC — NEET AIQ' }],
  eyebrow: 'counselling · medical',
  heroTitle: 'MCC — NEET All India Quota Counselling',
  heroSubtitle: 'The Medical Counselling Committee runs the 15% All India Quota seats in every government medical college, plus 100% of AIIMS, JIPMER, and deemed university seats.',
  stats: [
    { value: '15%', label: 'AIQ share of govt college seats' },
    { value: '100%', label: 'AIIMS/JIPMER seats via MCC' },
    { value: '4', label: 'MCC counselling rounds' },
  ],
  toc: [
    { id: 'categories', label: 'Seat Categories' },
    { id: 'rounds', label: 'Counselling Rounds' },
    { id: 'tips', label: 'Choice-Filling Tips' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'MCC counsels students purely on NEET AIR against a national pool — meaning a TN student\'s competitors here are from every state, unlike TN State Quota counselling.',
  sections: [
    {
      id: 'categories',
      eyebrow: 'what mcc covers',
      title: 'MCC seat categories',
      table: {
        columns: ['Quota / category', 'What it covers'],
        rows: [
          ['15% AIQ (govt medical)', '15% of MBBS/BDS seats in every state govt medical college'],
          ['Central universities', 'All AIIMS campuses, JIPMER Puducherry &amp; Karaikal, PGIMER Chandigarh — 100% seats'],
          ['Deemed universities', 'All seats in every deemed medical university (Manipal, Amrita, SRM, Saveetha, etc.)'],
          ['ESI &amp; AFMC', 'ESI Medical Colleges (for insured workers\' children); Armed Forces Medical College Pune'],
        ],
      },
    },
    {
      id: 'rounds',
      eyebrow: 'the process',
      title: 'MCC counselling rounds',
      table: {
        columns: ['Round', 'What happens'],
        rows: [
          ['Round 1', 'AIIMS/JIPMER/Central Univ seats fill first, then AIQ govt seats; pay seat acceptance fee (₹10,000 Gen / ₹5,000 SC/ST)'],
          ['Round 2', 'Vacated + fresh seats allotted; those unhappy with R1 can float for a better choice'],
          ['Mop-Up Round', 'Last chance — only candidates NOT currently holding an AIQ seat can participate'],
          ['Stray Vacancy Round', 'Very rare — any seat still remaining after Mop-Up'],
        ],
      },
    },
    {
      id: 'tips',
      eyebrow: 'don\'t leave seats on the table',
      title: 'Choice-filling tips',
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'JIPMER Karaikal has a lower closing rank than JIPMER Puducherry — include it. For AIQ seats at TN government colleges, Madras Medical College and Kilpauk fill at very competitive (low-number) ranks; Tier 2 TN colleges fill later in the process. Include deemed universities as "safe" fallback options — fees are high but a seat is guaranteed if your rank qualifies.',
      },
      note: 'If you\'re allotted a seat in MCC and a better one in TN State counselling, you must formally withdraw from MCC before joining TN State — failing to do so can cancel both seats.',
    },
  ],
  faqs,
  faqTitle: 'MCC counselling — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Tracking MCC alongside TN State counselling?',
  ctaSub: 'A counsellor can help you sequence both without losing a seat.',
});
