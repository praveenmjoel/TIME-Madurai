import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Are all 19 AIIMS campuses the same quality?',
    a: 'No, but the gap matters less than the cutoff gap suggests. AIIMS New Delhi is the most competitive by far (~715–720 closing score), but newer campuses like AIIMS Bhopal, Bhubaneswar, and Rishikesh follow the same national AIIMS teaching standard while closing at meaningfully lower scores — a genuine opportunity for students who don\'t hit Delhi-level numbers.',
  },
  {
    q: 'Is JIPMER Karaikal a real alternative to JIPMER Puducherry?',
    a: 'Yes — JIPMER Karaikal is a newer TN-based JIPMER campus with the same JIPMER degree and training quality, closing at scores roughly 20–25 marks lower than the Puducherry campus. For Tamil Nadu students in the 640–655 range specifically, it\'s a smart target.',
  },
];

export const aiimsJipmerPage = buildLeafPage({
  slug: 'medical/aiims-jipmer',
  title: 'AIIMS & JIPMER Guide 2026: Campuses, Seats & Cutoffs | T.I.M.E. Madurai',
  description: 'The full AIIMS network and JIPMER Puducherry/Karaikal explained — seats, indicative 2024 NEET cutoffs, and why AIIMS Madurai matters for Tamil Nadu students.',
  canonical: '/medical/aiims-jipmer/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'AIIMS & JIPMER' }],
  eyebrow: 'medical · premier institutions',
  heroTitle: 'AIIMS & JIPMER',
  heroSubtitle: 'India\'s medical equivalent of the IITs — autonomous central institutions, admission through NEET UG alone, no separate exam.',
  stats: [
    { value: '19', label: 'AIIMS campuses' },
    { value: '100', label: 'Typical MBBS seats per AIIMS' },
    { value: '150', label: 'JIPMER Puducherry seats' },
  ],
  toc: [
    { id: 'aiims', label: 'The AIIMS Network' },
    { id: 'jipmer', label: 'JIPMER' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Both are Institutes of National Importance, admitting purely on NEET UG score — no separate entrance test since 2020.',
  sections: [
    {
      id: 'aiims',
      eyebrow: '19 campuses, one brand',
      title: 'The AIIMS network',
      table: {
        columns: ['AIIMS campus', 'Location', 'Approx. GEN closing score (2024)'],
        rows: [
          ['AIIMS New Delhi', 'New Delhi', '~715–720'],
          ['AIIMS Bhopal', 'Madhya Pradesh', '~660–675'],
          ['AIIMS Rishikesh', 'Uttarakhand', '~658–673'],
          ['AIIMS Bhubaneswar', 'Odisha', '~655–670'],
          ['AIIMS Mangalagiri', 'Andhra Pradesh', '~635–650'],
          ['AIIMS Bibinagar', 'Telangana', '~625–640'],
          ['AIIMS Madurai', 'Tamil Nadu', 'New campus — cutoff still developing'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'AIIMS Madurai, operational since 2022, is Tamil Nadu\'s own AIIMS campus — directly relevant for students from Madurai, Virudhunagar, Dindigul, Theni, and Ramanathapuram. As a newer campus its cutoff runs lower than AIIMS Delhi\'s while following the same national AIIMS teaching standard.',
      },
    },
    {
      id: 'jipmer',
      eyebrow: 'south india\'s finest',
      title: 'JIPMER Puducherry & Karaikal',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Puducherry seats', '150 (50 All India + 50 Puducherry domicile + 50 other/NRI)'],
          ['Fee', 'Very low — ~₹5,000–10,000/year, central govt institution'],
          ['Karaikal campus', 'Newer TN-based campus, ~100 seats, cutoff ~20–25 marks lower than Puducherry'],
          ['Distance from Madurai', '~160 km — among the closest premier institutes to South TN'],
        ],
      },
      note: 'GEN closing NEET score (2024, approx.): JIPMER Puducherry ~665–678; JIPMER Karaikal ~640–655.',
    },
  ],
  faqs,
  faqTitle: 'AIIMS & JIPMER — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Targeting AIIMS or JIPMER specifically?',
  ctaSub: 'A counsellor can help you fill MCC choices across every viable campus.',
});
