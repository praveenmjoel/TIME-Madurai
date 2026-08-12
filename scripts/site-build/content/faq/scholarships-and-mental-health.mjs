import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'What is the fee at NIT Trichy and how can I afford it?', a: 'NIT Trichy B.Tech fee (2024 cycle): ~₹1.47 lakh per semester for OC students; ~₹20,000/semester for SC/ST students (fee waiver). Total 4-year cost: OC ~₹12 lakh; SC/ST ~₹1.6 lakh. Education loans from all major banks (SBI, Canara, Indian Bank) cover full tuition plus hostel, and interest subsidy schemes apply under ACSIS for families below ₹4.5 lakh income.' },
  { q: 'Is there a scholarship for JEE/NEET qualifiers from Tamil Nadu?', a: 'Yes. Key TN scholarships: (1) CM Merit Scholarship for TN HSC toppers; (2) BC/MBC department scholarships with maintenance allowance; (3) Pudhumai Penn — ₹1,000/month for girls who studied in government schools; (4) Post-Matric scholarships for SC/ST students covering full tuition. The central CSSS scholarship (₹10,000–20,000/year) is also available for students above the 80th percentile in Class 12.' },
  { q: 'Can I get an education loan without collateral for MBBS?', a: 'Yes — under the IBA (Indian Banks\' Association) model, education loans up to ₹7.5 lakh require no collateral (a third-party guarantee may be needed). For amounts above ₹7.5 lakh — required for private MBBS — tangible collateral (property, insurance, FD) is typically required. Private MBBS management seats costing ₹30–80 lakh are a genuine challenge for families without property assets.' },
  { q: 'What is the Vidyalakshmi portal?', a: 'Vidyalakshmi (vidyalakshmi.co.in) is a government portal aggregating education loan offers from multiple banks. You can apply to multiple banks simultaneously with a single application, comparing interest rates, collateral requirements, and repayment terms before deciding.' },
  { q: 'Does getting a scholarship affect my education loan eligibility?', a: 'No. Scholarship income is separate from education loan eligibility — you can receive both simultaneously. The bank loan covers the fee component; the scholarship covers living expenses or reduces the loan outstanding. Always apply for both — there\'s no penalty for receiving both.' },
  { q: 'How do I manage exam pressure during JEE/NEET preparation?', a: 'Effective pressure management: (1) set process goals (hours studied, topics covered) not just outcome goals (rank/score); (2) maintain one physical activity per day — even a 20-minute walk reduces cortisol; (3) sleep 7–8 hours, since sleep consolidates memory and is non-negotiable for learning; (4) talk openly with parents about pressure; (5) speak with a counsellor if anxiety becomes chronic.' },
  { q: 'My parents want me to do engineering but I want to do medicine. What should I do?', a: 'This affects thousands of students. Talk to your parents with specific career data — show them salary trajectories for both paths. If NEET is your genuine calling, commit to it with a concrete plan, and involve a neutral mentor (centre counsellor, school teacher) in the conversation. Career success correlates most strongly with genuine interest — half-hearted engineering preparation typically leads to worse outcomes than passionate NEET preparation.' },
  { q: 'I failed NEET this year. What are my options?', a: 'Several paths forward: (1) a one-year drop with structured coaching — most serious droppers improve 40–80 marks; (2) apply for B.Sc. Nursing, B.P.T., or B.Sc. MLT using Class 12 marks — genuine healthcare careers with strong job markets; (3) apply for B.Sc. Biology and prepare for NEET simultaneously; (4) consider AYUSH (BAMS/BHMS) if your score qualifies; (5) speak with a career counsellor before deciding — don\'t make the decision alone under pressure.' },
];

export const faqScholarshipsMentalHealthPage = buildLeafPage({
  slug: 'faq/scholarships-and-mental-health',
  title: 'Scholarship, Loan & Exam Pressure FAQs | T.I.M.E. Madurai',
  description: 'Real questions about NIT Trichy fees, education loans without collateral, and managing exam pressure and family expectations during JEE/NEET preparation.',
  canonical: '/faq/scholarships-and-mental-health/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }, { label: 'Scholarships & Mental Health FAQs' }],
  eyebrow: 'faq · money & pressure',
  heroTitle: 'Scholarships, Loans & Exam Pressure FAQs',
  heroSubtitle: 'The financial and emotional questions that rarely get asked out loud — fees, loans, family conflict, and what to do after a setback.',
  stats: [],
  toc: [ { id: 'faqs', label: 'All Questions' } ],
  sections: [],
  faqs,
  faqTitle: 'Money &amp; pressure — every question',
  backLink: { label: 'all FAQ categories', href: '/faq/' },
  ctaHeading: 'Carrying a financial or family pressure question right now?',
  ctaSub: 'Talk to a counsellor — these conversations are exactly what we\'re here for.',
});
