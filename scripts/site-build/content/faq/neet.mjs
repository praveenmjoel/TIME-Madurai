import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'How many times can I appear for NEET UG?', a: 'There is no attempt limit for NEET UG. You can appear as many times as you wish until you reach the upper age limit. As of 2024, the Supreme Court has stayed the upper age limit challenge — de facto, there is no upper age limit enforced. However, verify the current year\'s NTA notification for any changes.' },
  { q: 'Is NEET mandatory for all medical courses?', a: 'NEET UG is mandatory for MBBS, BDS, BAMS, BHMS, BUMS, B.Sc. Nursing (central institutions), and BVSc (veterinary). However, many state B.Sc. Nursing, B.P.T., B.Sc. MLT, and B.Pharm programmes do NOT require NEET — they admit on Class 12 marks. Verify the specific college requirements.' },
  { q: 'What is the NEET qualifying percentile?', a: 'For General (OC) category: 50th percentile. For OBC/SC/ST: 40th percentile. For PwD: 45th percentile. These percentiles translate to approximately 140–160 marks for general and 115–130 for reserved categories. Qualifying the cut-off does NOT guarantee a seat — it only makes you eligible for counselling.' },
  { q: 'Can I appear for NEET if I have appeared for JEE?', a: 'Yes. JEE and NEET are completely independent. Many students appear for both in the same year to keep options open. Physics is common to both, but Biology replaces Mathematics for NEET. If you are genuinely preparing for both, the workload is very high — discuss with your mentor whether this dual preparation makes sense for your profile.' },
  { q: 'What is the NEET exam centre availability in Tamil Nadu?', a: 'NEET exam centres are available in all major Tamil Nadu cities including Chennai, Madurai, Coimbatore, Tiruchirappalli, Salem, Tirunelveli, Vellore, and many district headquarters. You select preferred cities during registration; actual city allocation is by NTA based on seat availability.' },
  { q: 'Is Tamil medium available for NEET?', a: 'Yes. NEET question papers are available in Tamil. You can choose Tamil as your medium during registration. However, note that many NEET coaching materials and NCERT textbooks are in English — if you prepare in English but answer in Tamil, there may be translation challenges. NCERT is available in Tamil from ncert.nic.in.' },
  { q: 'What is the NEET cut-off for government medical colleges in Tamil Nadu?', a: 'The TN state quota NEET cut-off (2024 cycle): OC category ~540–560 marks, BC ~510–540, MBC ~490–520, SC ~430–480. These are approximate ranges — actual cut-offs vary by college and branch. AIQ (15% seats) has higher cut-offs. Always check official TN MRB counselling published cut-offs.' },
  { q: 'Is NCERT sufficient for NEET Biology?', a: 'NCERT is the primary and most important resource for NEET Biology. Approximately 80–85% of NEET Biology questions are directly from NCERT text, figures, or tables. However, reading NCERT once is not enough — you need 5–7 thorough revisions. Supplement with previous year question (PYQ) practice for the remaining 15–20%.' },
  { q: 'How should I prepare for NEET Physics?', a: 'NEET Physics has 45 questions (180 marks) and is the most challenging section for most students. Strategy: (1) focus on mechanics thoroughly (12–14 questions); (2) Electrostatics, Magnetism, and Optics are high-yield; (3) practice numerical problem solving daily; (4) the TN Physics textbook is good for basics — supplement with DC Pandey or NCERT Exemplar.' },
  { q: 'What is the role of diagrams in NEET Biology?', a: 'Diagrams are critical. NEET regularly asks questions that require interpretation of biology diagrams — mitosis stages, heart cross-section, nephron, DNA replication, photosynthesis cycle, and more. Draw and label each key diagram from memory at least 10 times during preparation. Questions can show a partially labelled diagram and ask you to identify the missing label.' },
  { q: 'How many NEET PYQs (previous year questions) should I solve?', a: 'Solve at least 15 years of NEET PYQs (2009–2024) chapter-wise for Biology. For Physics and Chemistry, 10 years is sufficient. Biology repeats 30–40% of concept-based questions paraphrased — PYQ practice directly improves score. Chapter-wise PYQ books are available from Arihant, MTG, and online platforms.' },
  { q: 'Can I qualify NEET by studying only Biology and ignoring Physics?', a: 'No. While Biology (360 marks) carries the most weight, Physics (180 marks) cannot be ignored. A student scoring 340/360 in Biology but only 80/180 in Physics totals 420 — well below most government medical college cut-offs. You need a balanced score across all 4 sections.' },
  { q: 'What score is "safe" for a government MBBS seat in Tamil Nadu?', a: 'For a comfortable government MBBS seat in Tamil Nadu (including BC/MBC quota): aim for 520–550 marks. For a top government college (Madurai, Rajaji, Stanley, Coimbatore Medical College) in the OC category: target 560+. For AIQ (15% all-India quota) seats: target 600+. For AIIMS Delhi: target 680+.' },
];

export const faqNeetPage = buildLeafPage({
  slug: 'faq/neet',
  title: 'NEET UG FAQs: Exam Basics, Cutoffs & Preparation Strategy | T.I.M.E. Madurai',
  description: '13 real questions about NEET UG — attempt limits, eligibility, Tamil medium, TN cutoffs, and how to structure Biology-first preparation.',
  canonical: '/faq/neet/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }, { label: 'NEET FAQs' }],
  eyebrow: 'faq · neet',
  heroTitle: 'NEET UG FAQs',
  heroSubtitle: 'Exam basics, eligibility, Tamil medium, cutoffs, and the preparation strategy questions every NEET family asks.',
  stats: [],
  toc: [ { id: 'faqs', label: 'All Questions' } ],
  sections: [],
  faqs,
  faqTitle: 'NEET UG — every question',
  backLink: { label: 'all FAQ categories', href: '/faq/' },
  ctaHeading: 'Have a NEET question this page didn\'t answer?',
  ctaSub: 'Ask a counsellor directly.',
});
