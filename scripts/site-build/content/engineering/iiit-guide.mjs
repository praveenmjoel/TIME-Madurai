import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is IIIT Hyderabad really comparable to an IIT?',
    a: 'For Computer Science specifically, yes — IIIT Hyderabad (autonomous) is widely regarded as having the best CS programme after the IIT top five. Its graduates place at Google, Microsoft, Apple, and Uber at packages comparable to IIT Bombay. If your JEE Main rank is 1,500–4,000 OC, IIIT Hyderabad CS is a stronger CS career bet than a non-CS branch at an NIT.',
  },
  {
    q: 'What\'s the difference between IIIT Kancheepuram and IIIT Trichy?',
    a: 'Both are Tamil Nadu-based IIITs under the IIIT Board scheme, offering Home State quota to TN students. IIIT Kancheepuram (also called IIITDM) is the more established of the two, offering CSE and ECE; IIIT Trichy is newer and still growing its placement track record. Both are worth including in JoSAA choices for TN students who want an IIIT experience close to home.',
  },
];

export const iiitGuidePage = buildLeafPage({
  slug: 'engineering/iiit-guide',
  title: 'IIIT Guide 2026: IIIT Hyderabad, Delhi, Bangalore & IIIT Kancheepuram | T.I.M.E. Madurai',
  description: 'IIITs compared — the autonomous Tier 1 institutes (Hyderabad, Delhi, Bangalore, Allahabad) and the Tamil Nadu-relevant campuses (IIIT Kancheepuram, IIIT Trichy).',
  canonical: '/engineering/iiit-guide/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'IIIT Guide' }],
  eyebrow: 'engineering · iiit guide',
  heroTitle: 'The Complete IIIT Guide',
  heroSubtitle: 'IIITs are specialised, IT-focused institutes — and the best of them, like IIIT Hyderabad, rival the IITs specifically for Computer Science.',
  stats: [
    { value: '25', label: 'Centrally-funded IIITs' },
    { value: '#1 after IIT', label: 'IIIT Hyderabad\'s CS reputation' },
    { value: '2', label: 'IIITs based in Tamil Nadu' },
  ],
  toc: [
    { id: 'tier1', label: 'Tier 1 IIITs' },
    { id: 'tn', label: 'IIITs in Tamil Nadu' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'IIITs focus exclusively on IT-related programmes — B.Tech in CS, ECE, Information Technology, and related branches. There are 25 centrally-funded IIITs under the IIIT Board, plus several more under public-private partnership.',
  sections: [
    {
      id: 'tier1',
      eyebrow: 'the autonomous four',
      title: 'Tier 1 IIITs — autonomous and highly regarded',
      table: {
        columns: ['IIIT', 'Location', 'Notable feature', 'JEE Main OC rank (CS, approx.)'],
        rows: [
          ['IIIT Hyderabad', 'Hyderabad, Telangana', 'Autonomous; IIT-equivalent brand in CS', '500–2,000'],
          ['IIIT Delhi', 'New Delhi', 'Autonomous; strong placements, NCR tech hub', '1,500–4,000'],
          ['IIIT Bangalore', 'Bengaluru, Karnataka', 'Strong IT focus, close to Bengaluru industry', '4,000–8,000'],
          ['IIIT Allahabad', 'Prayagraj, UP', 'Oldest IIIT; government tech projects', '3,000–7,000'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'IIIT Hyderabad, Delhi, and Bangalore all run their own admission processes alongside JoSAA seats — check each institute\'s specific entrance requirements as well as JEE Main eligibility.',
      },
    },
    {
      id: 'tn',
      eyebrow: 'close to home',
      title: 'IIITs relevant for Tamil Nadu students',
      table: {
        columns: ['IIIT', 'Location', 'Programmes'],
        rows: [
          ['IIIT Kancheepuram', 'Kancheepuram, TN', 'BTech CSE, ECE — IIIT Board scheme'],
          ['IIIT Trichy', 'Tiruchirappalli, TN', 'BTech CSE — newer but growing'],
          ['IIIT Sri City', 'Chittoor, AP (near TN)', 'BTech CSE, ECE, Mechanical'],
        ],
      },
      note: 'JEE Main OC closing rank for IIIT Kancheepuram CSE is roughly 20,000–30,000, considerably more accessible than the Tier 1 IIITs while still offering an IIIT-Board degree with Home State quota for TN students.',
    },
  ],
  faqs,
  faqTitle: 'IIIT admissions — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Weighing an IIIT against an NIT seat?',
  ctaSub: 'The right call depends on your branch preference — let\'s talk it through.',
});
