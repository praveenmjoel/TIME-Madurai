import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How many seats are available at NIT Trichy for Tamil Nadu students?', a: 'NIT Trichy has approximately 1,400 seats. 50% of seats are Home State (HS) quota for Tamil Nadu students, roughly 700 seats. Within HS quota, reservations apply (OBC-NCL 27%, SC 15%, ST 7.5%, EWS 10%, OC ~40.5%). HS quota typically closes at higher rank numbers than OS (Other State) quota — better for TN students.' },
  { q: 'What is the JoSAA counselling process in brief?', a: 'After JEE Main/Advanced results, JoSAA (Joint Seat Allocation Authority) conducts online counselling for NITs, IIITs, IITs, and GFTIs. You register, fill choices (up to 25,000 college-branch combinations), lock choices, and receive seat allotment across rounds — typically 5–6 rounds plus 2 special rounds.' },
  { q: 'Can I participate in JoSAA and TNEA simultaneously?', a: 'Yes. TNEA (Tamil Nadu Engineering Admissions) for private/government engineering colleges runs parallel to JoSAA. You can register for both. If you get a better seat in JoSAA (an NIT), you surrender the TNEA seat.' },
  { q: 'What happens if I miss the JoSAA seat acceptance deadline?', a: 'Missing the acceptance deadline means your seat is automatically cancelled and you lose the allotment for that round. You may still participate in subsequent rounds, but you start fresh. Always set multiple alarms for JoSAA deadlines — they are typically 1–3 day windows.' },
  { q: 'Can I upgrade my seat in later JoSAA rounds?', a: 'Yes. You can "float" your seat (auto-upgrade if a better choice opens) or "slide" within the same institute. Choose Float if you want to move to a better preference. Withdraw only when you have a confirmed better seat and don\'t want to continue in JoSAA.' },
  { q: 'What is the TNEA cut-off calculation method?', a: 'TNEA cut-off = (Physics + Chemistry)/2 + Maths, calculated from Class 12 marks. Maximum possible: (100+100)/2 + 100 = 200. The cut-off is NOT your NEET/JEE rank — it is based purely on Class 12 board marks.' },
  { q: 'How are TN state medical seats allocated via NEET?', a: 'Tamil Nadu Medical Counselling (TN MRB) conducts state counselling using NEET scores. 85% of government medical seats are in TN state quota; 15% go to Central AIQ. State quota has TN-specific reservation (BC 26.5%, BCM 3.5%, MBC+DNC 20%, SC 18%, SCA 3%, ST 1%).' },
];

export const faqCounsellingPage = buildLeafPage({
  slug: 'faq/counselling-and-rank',
  title: 'Counselling & Rank FAQs: JoSAA, TNEA & TN Medical | T.I.M.E. Madurai',
  description: 'Real questions about NIT Trichy seat counts, the JoSAA process, TNEA\'s cutoff formula, and TN medical counselling allocation.',
  canonical: '/faq/counselling-and-rank/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }, { label: 'Counselling & Rank FAQs' }],
  eyebrow: 'faq · counselling',
  heroTitle: 'Counselling & Rank FAQs',
  heroSubtitle: 'How seats actually get allocated — JoSAA mechanics, TNEA\'s formula, and TN medical counselling, explained through the questions families actually ask.',
  stats: [],
  toc: [ { id: 'faqs', label: 'All Questions' } ],
  sections: [],
  faqs,
  faqTitle: 'Counselling &amp; rank — every question',
  backLink: { label: 'all FAQ categories', href: '/faq/' },
  ctaHeading: 'Have a counselling question this page didn\'t answer?',
  ctaSub: 'See our full Counselling hub, or ask a counsellor directly.',
});
