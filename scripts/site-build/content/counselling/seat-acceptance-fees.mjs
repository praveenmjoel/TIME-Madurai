import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is the seat acceptance fee refundable if I withdraw later?',
    a: 'Partially, and only if you withdraw before the deadline for that round. JoSAA and MCC both deduct a processing charge from the refund, and the deductible amount increases the later you withdraw — withdrawing after document reporting typically forfeits most or all of the fee. Always check the exact refund schedule published for that year\'s counselling before assuming any amount is fully refundable.',
  },
  {
    q: 'Do I pay the seat acceptance fee again in every round if I get upgraded?',
    a: 'No — the seat acceptance fee is paid once, when you first accept a seat. If you\'re later upgraded through Float in a subsequent round, you don\'t pay it again; the amount already paid carries forward and is adjusted against your final admission fee at the institute.',
  },
  {
    q: 'What happens if I don\'t pay the seat acceptance fee in time?',
    a: 'Your allotted seat is cancelled and released back into the pool for the next round — you lose that specific seat entirely, regardless of your rank. There is no grace period; every counselling process treats the payment deadline as absolute.',
  },
];

export const seatAcceptanceFeesPage = buildLeafPage({
  slug: 'counselling/seat-acceptance-fees',
  title: 'Seat Acceptance Fees 2026: JoSAA, MCC, TNEA & TN Medical Compared | T.I.M.E. Madurai',
  description: 'How much you actually pay to accept a seat in JoSAA, MCC, TNEA, and TN Medical counselling, when it\'s due, and what happens to it if you\'re later upgraded or withdraw.',
  canonical: '/counselling/seat-acceptance-fees/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'Seat Acceptance Fees' }],
  eyebrow: 'the payment that locks your seat',
  heroTitle: 'Seat Acceptance Fees, Explained',
  heroSubtitle: 'Every counselling process asks for a payment the moment you accept an allotted seat — miss the deadline and the seat is gone, regardless of your rank. Here\'s exactly how much, and when.',
  stats: [
    { value: '₹35,000', label: 'Highest single fee (IITs via JoSAA)' },
    { value: '24–48h', label: 'Typical payment window' },
    { value: '1×', label: 'Paid once, carries forward through upgrades' },
  ],
  toc: [
    { id: 'amounts', label: 'Fee Amounts' },
    { id: 'refunds', label: 'Refunds & Withdrawal' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'The seat acceptance fee is separate from your actual admission/tuition fee — it\'s a smaller, time-critical payment that confirms you\'re taking the allotted seat and holds it while you complete document verification and reporting.',
  sections: [
    {
      id: 'amounts',
      eyebrow: 'what each process charges',
      title: 'Seat acceptance fee, by counselling',
      table: {
        columns: ['Counselling', 'Fee amount', 'When it\'s due', 'Counts toward'],
        rows: [
          ['JoSAA — IITs', '₹35,000 (₹17,500 for SC/ST/PwD)', 'Within the response window of your first accepted round, typically 24–36 hours', 'Adjusted against first-semester fees at the institute'],
          ['JoSAA — NITs/IIITs/GFTIs', '₹15,000 (₹7,500 for SC/ST/PwD)', 'Same window as above', 'Adjusted against first-semester fees'],
          ['MCC — NEET AIQ (govt. colleges)', '₹5,000–₹10,000 depending on the year\'s notification', 'Within the round\'s acceptance window, typically 2–3 days', 'Adjusted against tuition once you report'],
          ['TNEA', '₹1,000–₹3,000 (varies by category and round)', 'At the time of provisional seat confirmation online', 'Adjusted against college fees on reporting'],
          ['TN Medical Counselling (state quota)', '₹5,000 approx., higher for management/NRI seats', 'At provisional acceptance, before physical reporting', 'Adjusted against tuition once you report'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Keep a payment method ready before results are even announced — net banking or a UPI app with sufficient limit, not a card that might get declined. Counselling response windows are short enough that a failed payment attempt can genuinely cost you the seat, especially in JoSAA\'s 24–36 hour windows.',
      },
    },
    {
      id: 'refunds',
      eyebrow: 'if your plans change',
      title: 'Refunds, withdrawal, and upgrades',
      table: {
        columns: ['Scenario', 'What happens to the fee'],
        rows: [
          ['You get upgraded via Float in a later round', 'No new payment — the original fee carries forward and adjusts against your final institute fees'],
          ['You withdraw before document reporting', 'Partial refund, minus a processing deduction — the exact percentage is published each year in the counselling brochure'],
          ['You withdraw after reporting to the institute', 'Minimal or no refund — most processes treat post-reporting withdrawal as a confirmed admission'],
          ['You fail to pay within the deadline', 'Seat is cancelled outright; the question of refund doesn\'t arise since no payment was made'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'Don\'t confuse the seat acceptance fee with your actual admission fee. Paying the acceptance fee only locks your seat provisionally — you still need to complete document verification and physical/online reporting by the institute\'s deadline, or the seat can still be forfeited even after payment.',
      },
    },
  ],
  faqs,
  faqTitle: 'Seat acceptance fees — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Want a clear payment timeline before results day?',
  ctaSub: 'A counsellor can walk you through exactly what\'s due, and when, for your specific exam.',
});
