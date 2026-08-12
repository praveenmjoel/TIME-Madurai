import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Are these dates fixed every year?',
    a: 'No — treat this as a planning reference based on the 2024 cycle, not a fixed schedule. Exact dates shift by a few weeks year to year depending on when JEE Advanced and NEET results are declared. Always confirm current dates on josaa.nic.in, mcc.nic.in, tnmedicalselection.net, and tneaonline.org.',
  },
  {
    q: 'Is a seat acceptance fee refundable if I withdraw?',
    a: 'Usually partially, if you withdraw before physically reporting to the institute — but policies vary by counselling body and round. Screenshot every payment confirmation and read the specific refund policy on the relevant portal before paying, since fee structures change every cycle.',
  },
];

export const calendarPage = buildLeafPage({
  slug: 'counselling/calendar',
  title: 'Counselling Calendar 2025–26: JoSAA, MCC, TNEA & TN Medical Dates | T.I.M.E. Madurai',
  description: 'The full month-by-month counselling timeline across every major process — plus seat acceptance fees and refund policies for each.',
  canonical: '/counselling/calendar/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'Calendar' }],
  eyebrow: 'plan around this',
  heroTitle: 'The Counselling Calendar',
  heroSubtitle: 'JoSAA, MCC, TN Medical, and TNEA all run through the same tight May–September window — often in parallel. Here\'s the typical sequence.',
  stats: [ { value: 'May–Sept', label: 'The core counselling window' } ],
  toc: [
    { id: 'timeline', label: 'Month-by-Month' },
    { id: 'fees', label: 'Seat Acceptance Fees' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Based on 2024 cycle patterns — always verify exact 2025–26 dates on the official portals before making plans around them.',
  sections: [
    {
      id: 'timeline',
      eyebrow: 'approximate, 2025–26 cycle',
      title: 'The counselling year, month by month',
      table: {
        columns: ['Month', 'What\'s happening'],
        rows: [
          ['May (last week)', 'JEE Advanced conducted'],
          ['June', 'JEE Advanced result; TNEA registration opens; JoSAA registration + Round 1; NEET UG result'],
          ['July (1st–2nd week)', 'JoSAA Rounds 2–5; MCC Round 1; TN Medical certificate verification; TNEA choice filling'],
          ['July (3rd–4th week)', 'JoSAA Round 6 (final regular); MCC Round 2; TN Medical Round 1; TNEA Round 1'],
          ['Late July', 'JoSAA Spot Rounds; MCC Mop-Up; TN Medical Round 2; TNEA Round 2'],
          ['August (1st week)', 'Most counsellings conclude; final reporting; semester begins at many institutions'],
          ['August–September', 'AYUSH TN counselling; stray vacancy rounds; late private-college admissions'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TNEA runs parallel to the JoSAA/national counselling timeline — a student tracking both an NIT seat via JoSAA and a government engineering college via TNEA must act fast in both systems at once. Always check official portals directly; don\'t rely on coaching WhatsApp groups for deadline information.',
      },
    },
    {
      id: 'fees',
      eyebrow: 'know the numbers',
      title: 'Seat acceptance fees &amp; refund policies',
      table: {
        columns: ['Counselling', 'Seat acceptance fee', 'Refund on withdrawal'],
        rows: [
          ['JoSAA (IITs)', '₹35,000 (Gen/OBC); ₹15,000 (SC/ST/PwD)', 'Partial, if withdrawn before physical reporting'],
          ['JoSAA (NITs/IIITs/GFTIs)', '₹15,000 (Gen/OBC); ₹5,000 (SC/ST/PwD)', 'Partial, if withdrawn before physical reporting'],
          ['MCC AIQ (MBBS/BDS)', '₹10,000 (Gen/OBC); ₹5,000 (SC/ST/PwD)', 'Fully refundable up to Mop-Up; forfeit after joining'],
          ['TN Medical State Quota', '₹10,000–25,000 (varies by round/category)', 'Partial before joining; full forfeit after'],
          ['TNEA', '₹5,000–15,000 (tuition deposit)', 'Partial, per government norms'],
          ['VIT (VITEEE)', '₹25,000', 'Partial, if withdrawn before academic registration'],
          ['SRM (SRMJEEE)', '₹25,000–50,000', 'Partial, per SRM policy'],
        ],
      },
      note: 'Fee structures change every cycle — verify exact amounts and refund policies on the official portal before paying, and screenshot every confirmation page.',
    },
  ],
  faqs,
  faqTitle: 'Counselling calendar — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Want a personal deadline tracker for your counsellings?',
  ctaSub: 'A counsellor can help you build one before the window opens.',
});
