import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How does the VITEEE slot-booking system actually work?',
    a: 'After results, students are called for slot booking in rank order — the higher your rank, the earlier you book, and earlier bookers get first pick of campus and branch. Rank 1–1,000 can get CSE at Vellore; by rank 15,001–30,000, popular combinations are gone but ECE, Mechanical, and Civil at Vellore are typically still available.',
  },
  {
    q: 'Is VITEEE harder than JEE Main?',
    a: 'No — VITEEE difficulty is lower, closer to NCERT-level than JEE Main\'s advanced problem-solving. There\'s also no negative marking, which makes it a high-attempt exam where students should try all 125 questions. Students who\'ve prepared seriously for JEE Main typically find VITEEE comfortable.',
  },
];

export const viteeePage = buildLeafPage({
  slug: 'engineering/admissions/viteee',
  title: 'VITEEE 2026: Pattern, Slot System & Preparation Notes | T.I.M.E. Madurai',
  description: 'VITEEE exam pattern, the rank-based slot-booking system that determines your campus and branch, and how VITEEE difficulty compares to JEE Main.',
  canonical: '/engineering/admissions/viteee/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Admissions', href: '/engineering/admissions/' }, { label: 'VITEEE' }],
  eyebrow: 'entrance exam',
  heroTitle: 'VITEEE',
  heroSubtitle: 'The entrance exam for VIT\'s campuses at Vellore, Chennai, Bhopal, and Amaravati — no negative marking, and a unique rank-based slot system.',
  stats: [
    { value: '125', label: 'Questions in 2.5 hours' },
    { value: '0', label: 'Negative marking' },
    { value: '4', label: 'VIT campuses' },
  ],
  toc: [
    { id: 'pattern', label: 'Pattern & Marking' },
    { id: 'slots', label: 'The Slot System' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'VIT Vellore is one of India\'s most popular private engineering colleges, and VITEEE is the exam that decides which campus and branch combination you get.',
  sections: [
    {
      id: 'pattern',
      eyebrow: 'the mechanics',
      title: 'Pattern & marking',
      table: {
        columns: ['Parameter', 'Detail'],
        rows: [
          ['Eligibility', 'Min. 60% in PCM/PCB in Class 12 (50% for SC/ST)'],
          ['Mode', 'Online CBT — at VIT campuses and authorised centres, usually in April'],
          ['Questions (PCM)', '125 in 2.5 hours — Physics (35), Chemistry (35), Maths (40), English (5), Aptitude (10)'],
          ['Marking', '+1 correct, 0 wrong — no negative marking'],
          ['Total marks', '125'],
        ],
      },
    },
    {
      id: 'slots',
      eyebrow: 'rank determines everything',
      title: 'How the slot-booking system works',
      table: {
        columns: ['Rank range', 'What\'s typically available'],
        rows: [
          ['1–1,000', 'All campuses and branches, including CSE at Vellore'],
          ['1,001–5,000', 'CSE Vellore mostly taken; CSE Chennai available'],
          ['5,001–15,000', 'AI, ECE, Data Science available at major campuses'],
          ['15,001–30,000', 'ECE, Mechanical, Civil at Vellore still available'],
          ['30,001+', 'Remaining seats across all branches and campuses'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'VIT Vellore is the original, more prestigious campus with the stronger placement record — choose it over VIT Chennai if your family can manage the ~₹2.3–2.8 lakh/year fee. VIT Chennai is slightly more affordable and well-connected to the TN industry ecosystem.',
      },
    },
  ],
  faqs,
  faqTitle: 'VITEEE — quick answers',
  backLink: { label: 'all entrance exams', href: '/engineering/admissions/' },
  ctaHeading: 'Want a realistic VITEEE rank target?',
  ctaSub: 'A counsellor can map your mock scores to a likely slot-booking outcome.',
});
