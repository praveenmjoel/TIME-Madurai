import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Which AIIMS is realistic for a Tamil Nadu student without a 700+ score?',
    a: 'AIIMS Mangalagiri (Andhra Pradesh) is the closest geographically to TN and closes around 635–650, more accessible than AIIMS Delhi\'s 715–720. AIIMS Madurai, once its cutoff stabilises as the campus matures, will likely be even more directly relevant.',
  },
  {
    q: 'How much lower do OBC-NCL scores run at AIIMS compared to General?',
    a: 'Roughly 30–40 marks lower — for example, AIIMS Delhi\'s OBC-NCL closing runs around 680–690 versus the General closing of 715–720. SC/ST closings run considerably lower still.',
  },
];

export const neetAiimsCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/neet-aiims-2024',
  title: 'NEET 2024 AIIMS Cutoffs: All Campuses, General Category | T.I.M.E. Madurai',
  description: 'NEET 2024 AIQ closing scores for MBBS at every AIIMS campus, General category, indicative data.',
  canonical: '/college-cutoffs/neet-aiims-2024/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'NEET AIIMS Cutoffs 2024' }],
  eyebrow: '2024 cycle · aiims',
  heroTitle: 'NEET 2024 — AIIMS Cutoffs',
  heroSubtitle: 'All AIIMS campuses are filled through MCC counselling — here\'s the approximate General category closing score at each, 2024 cycle.',
  stats: [],
  toc: [
    { id: 'cutoffs', label: 'Closing Scores by Campus' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'GEN (Open/UR) closing NEET scores, indicative for the 2024 cycle — verify current data at aiimsexams.ac.in.',
  sections: [
    {
      id: 'cutoffs',
      title: 'AIIMS closing scores by campus, 2024',
      table: {
        columns: ['AIIMS campus', 'Location', 'Approx. GEN closing score', 'Seats (MBBS)'],
        rows: [
          ['AIIMS New Delhi', 'New Delhi', '~715–720', '107'],
          ['AIIMS Rishikesh', 'Uttarakhand', '~625–650', '100'],
          ['AIIMS Bhopal', 'Madhya Pradesh', '~630–655', '100'],
          ['AIIMS Bhubaneswar', 'Odisha', '~620–645', '100'],
          ['AIIMS Jodhpur', 'Rajasthan', '~625–650', '100'],
          ['AIIMS Patna', 'Bihar', '~615–640', '100'],
          ['AIIMS Raipur', 'Chhattisgarh', '~615–640', '100'],
          ['AIIMS Nagpur', 'Maharashtra', '~620–645', '100'],
          ['AIIMS Mangalagiri', 'Andhra Pradesh', '~610–635', '100'],
          ['AIIMS Bibinagar', 'Telangana', '~610–635', '100'],
          ['AIIMS Rajkot', 'Gujarat', '~605–630', '100'],
          ['AIIMS Gorakhpur', 'Uttar Pradesh', '~610–630', '100'],
          ['AIIMS Bathinda', 'Punjab', '~600–625', '100'],
          ['AIIMS Kalyani', 'West Bengal', '~605–625', '100'],
          ['AIIMS Deoghar', 'Jharkhand', '~600–625', '100'],
          ['AIIMS Guwahati', 'Assam', '~595–620', '100'],
          ['AIIMS Madurai', 'Tamil Nadu', 'New campus — cutoff still developing', '100'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'AIIMS Madurai is TN\'s own campus, started in 2022 — being newer, its cutoff runs lower than AIIMS Delhi\'s while following the same national AIIMS teaching standard. Until it fully stabilises, AIIMS Mangalagiri (AP) is the closest well-established alternative for TN students.',
      },
    },
  ],
  faqs,
  faqTitle: 'AIIMS cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Want your NEET score benchmarked against these AIIMS campuses?',
  ctaSub: 'A counsellor can map your realistic AIQ choices.',
});
