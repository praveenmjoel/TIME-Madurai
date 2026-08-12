import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is AI/ML just CSE with a different name?',
    a: 'Fundamentally, yes — AI/ML is essentially advanced CSE with a heavier maths and statistics load. If your rank allows CSE but not AI/ML at the same college (AI/ML sometimes has slightly lower cutoffs since it\'s newer), choosing CSE and specialising in ML through electives, projects, and competitions is often the smarter path — the core fundamentals are identical.',
  },
  {
    q: 'Should I trust a college that offers "B.Tech in AI" as a named branch?',
    a: 'Verify before you commit. Many colleges label branches "AI" or "Data Science" specifically to attract students, but the actual curriculum and faculty may not differ much from standard CSE. Ask for the real syllabus and placement data of that specific programme before choosing it at a lesser-known college.',
  },
];

export const aiMlPage = buildLeafPage({
  slug: 'engineering/branches/ai-ml',
  title: 'AI & Machine Learning (AI/ML) Branch Guide: Careers & Salary | T.I.M.E. Madurai',
  description: 'What an AI/ML branch actually involves, realistic starting salaries, and whether it\'s worth choosing over standard Computer Science.',
  canonical: '/engineering/branches/ai-ml/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'AI & Machine Learning' }],
  eyebrow: 'branch profile',
  heroTitle: 'Artificial Intelligence & Machine Learning',
  heroSubtitle: 'The newest, fastest-growing engineering specialisation — Computer Science combined with advanced mathematics and statistics.',
  stats: [
    { value: '9.7 Cr', label: 'New AI jobs projected globally' },
    { value: '₹30–70L', label: 'IIT starting salary range' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Several IITs, NITs, and top private colleges now offer dedicated B.Tech programmes in AI, ML, Data Science, or combinations thereof. At its core, this branch combines Computer Science with heavier Mathematics and Statistics.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'ML algorithms, deep learning, neural networks, NLP, computer vision, statistics, linear algebra'],
          ['Skills required', 'Strong maths (calculus, linear algebra, statistics), Python, analytical thinking, research mindset'],
          ['Career paths', 'ML Engineer, AI Research Scientist, Data Scientist, NLP Engineer, Computer Vision Engineer'],
          ['Top recruiters', 'Google DeepMind, Microsoft AI, Meta AI, Amazon AI, NVIDIA, Qualcomm, startups'],
          ['Starting salary', 'IITs: ₹30–70 LPA; NITs: ₹12–25 LPA; Private (top): ₹8–15 LPA'],
          ['Personality fit', 'Excited by AI developments, enjoys maths and data patterns, curious and research-driven'],
          ['Higher studies', 'M.Tech in AI/ML (IITs), MS abroad (CMU, Stanford, MIT), PhD in AI'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'AI/ML — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Weighing AI/ML against plain CSE?',
  ctaSub: 'Let\'s talk through which one actually fits your target colleges and rank.',
});
