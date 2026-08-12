import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is VIT\'s "average package" figure misleading?',
    a: 'It can be, at VIT\'s scale. VIT Vellore places 12,000+ students annually — the largest private campus drive in India — but that average blends everything. The top 20% of VIT Vellore CS students land ₹8–20 LPA packages, while the rest often get ₹3–5 LPA at mass-hiring IT companies. Success there depends heavily on your own projects and internship record, more than at a smaller, more selective college.',
  },
  {
    q: 'Are all SRM campuses the same quality?',
    a: 'No — this is a common misconception. SRM Kattankulathur (the flagship, near Chennai) is genuinely Tier 1 private with excellent placements. SRM Ramapuram and Vadapalani are meaningfully lower in both quality and outcomes. Always confirm which specific campus an offer is for before accepting.',
  },
  {
    q: 'Is BITS Pilani worth the much higher fee compared to an NIT?',
    a: 'It\'s a genuinely close call, not an easy yes. BITS Pilani\'s total 4-year cost (~₹28 lakh) is roughly double NIT Trichy\'s. In return you get BITS\'s unique Practice School internship system and placements that rival NIT Trichy CSE. If your BITSAT score is 370+, it\'s worth weighing seriously against your NIT options — but it depends on family finances as much as prestige.',
  },
];

export const privateCollegesPage = buildLeafPage({
  slug: 'engineering/private-engineering-colleges',
  title: 'Private Engineering Colleges Guide: BITS, VIT, SRM & Amrita | T.I.M.E. Madurai',
  description: 'An honest comparison of India\'s top private engineering institutions — BITS Pilani, VIT Vellore, SRM, and Amrita Coimbatore — fees, placements, and where they fit when government-college ranks fall short.',
  canonical: '/engineering/private-engineering-colleges/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Private Engineering Colleges' }],
  eyebrow: 'engineering · private options',
  heroTitle: 'Private Engineering Colleges, Assessed Honestly',
  heroSubtitle: 'BITS Pilani, VIT, SRM, and Amrita — what they actually cost, what they actually deliver, and when they genuinely beat a government-college seat.',
  stats: [
    { value: '₹5.5–6L/yr', label: 'BITS Pilani tuition' },
    { value: '12,000+', label: 'Students VIT Vellore places annually' },
    { value: '~20,000', label: 'VIT\'s total annual UG intake' },
  ],
  toc: [
    { id: 'bits', label: 'BITS Pilani' },
    { id: 'vit', label: 'VIT Vellore' },
    { id: 'srm', label: 'SRM' },
    { id: 'amrita-others', label: 'Amrita & Others' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'For students who narrowly miss government-college cutoffs, or who want a specific campus or programme, several private institutions offer genuinely strong education. Here\'s an honest assessment of the ones most relevant to Tamil Nadu students.',
  sections: [
    {
      id: 'bits',
      eyebrow: 'the private gold standard',
      title: 'BITS Pilani',
      table: {
        columns: ['Campus', 'Approx. BITSAT score for CS (2024)', 'Perception'],
        rows: [
          ['BITS Pilani (main)', '380+ / 390', 'Best; iconic campus; old alumni network'],
          ['BITS Hyderabad', '365–380', 'Fast-growing; closest to TN'],
          ['BITS Goa', '350–370', 'Small, scenic, competitive intake'],
        ],
      },
      note: 'Annual cost is roughly ₹7–8 lakh — one of the most expensive government-recognised private options. Average package ~₹12–16 LPA, high of ~₹1.5 crore.',
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'BITS Hyderabad is the most popular BITS campus among TN students due to proximity. If you score 370+ in BITSAT, it\'s a strong option even over a new IIT\'s non-CS branch.',
      },
    },
    {
      id: 'vit',
      eyebrow: 'largest private intake in india',
      title: 'VIT University',
      table: {
        columns: ['Fact', 'Detail'],
        rows: [
          ['Campuses', 'Vellore (main, TN), Chennai, Bhopal, Amaravati'],
          ['Annual tuition', '₹1,98,000–2,95,000 (Vellore, varies by programme)'],
          ['Average package', '~₹5–7 LPA (Vellore)'],
          ['NIRF Engineering', '#11 (2024)'],
        ],
      },
      note: 'Choose VIT Vellore over VIT Chennai where possible — it\'s the original, more prestigious campus with the stronger placement record.',
    },
    {
      id: 'srm',
      eyebrow: 'campus quality varies a lot',
      title: 'SRM Institute of Science & Technology',
      table: {
        columns: ['Campus', 'Placement quality', 'Notes'],
        rows: [
          ['SRM Kattankulathur', 'Excellent (Tier 1 private)', 'Flagship campus; best faculty &amp; infrastructure'],
          ['SRM Ramapuram', 'Good', 'Urban Chennai campus; smaller than flagship'],
          ['SRM Vadapalani', 'Moderate', 'Engineering + management focus'],
        ],
      },
    },
    {
      id: 'amrita-others',
      eyebrow: 'the next tier',
      title: 'Amrita and other strong options',
      table: {
        columns: ['Institution', 'Location', 'NIRF Engg.', 'Avg. package'],
        rows: [
          ['Amrita Vishwa Vidyapeetham', 'Coimbatore (main)', '~20–30', '~₹5–7 LPA'],
          ['Manipal Institute of Technology', 'Manipal, Karnataka', '~35–45', '~₹6–8 LPA'],
          ['PSG College of Technology', 'Coimbatore, TN', '~80+', '~₹5–7 LPA'],
          ['Thiagarajar College of Engineering (TCE)', 'Madurai, TN', '~100+', '~₹4–6 LPA'],
        ],
      },
      note: 'Amrita Coimbatore is often the top choice for TN students who narrowly miss NIT Trichy — its research focus and placement record are notably stronger than SRM or VIT average.',
    },
  ],
  faqs,
  faqTitle: 'Private colleges — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Weighing a private seat against a repeat JEE attempt?',
  ctaSub: 'A counsellor can run the real numbers with you before you decide.',
});
