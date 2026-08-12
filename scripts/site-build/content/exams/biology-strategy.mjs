import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How many times should I actually revise NCERT Biology?',
    a: 'At least five to seven full revisions before the exam, with a monthly full-syllabus revision cycle starting from January of your exam year. This isn\'t excessive — Biology is 360 of 720 NEET marks, and repeated revision is what converts recognition into instant recall under exam pressure.',
  },
  {
    q: 'Is it worth doing previous year Biology questions specifically?',
    a: 'Very much so — NEET Biology repeats or closely paraphrases roughly 30–40% of questions from previous years. Working through the last 10 years\' papers chapter-wise is one of the highest-return activities available in NEET preparation.',
  },
];

export const biologyStrategyPage = buildLeafPage({
  slug: 'exams/biology-strategy',
  title: 'Biology Preparation Strategy for NEET | T.I.M.E. Madurai',
  description: 'The NCERT-first method for NEET Biology — diagrams, tables, and a revision schedule that gets students to 330+ out of 360.',
  canonical: '/exams/biology-strategy/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'Biology Strategy' }],
  eyebrow: 'subject strategy',
  heroTitle: 'Biology: NEET\'s Scoring Engine',
  heroSubtitle: 'Botany and Zoology together carry 360 of 720 marks — half the entire paper — and it\'s the most learnable half, since it tracks NCERT almost line for line.',
  stats: [ { value: '360/720', label: 'Marks from Biology alone' }, { value: '30–40%', label: 'Questions that repeat/paraphrase PYQs' } ],
  toc: [
    { id: 'method', label: 'The NCERT-First Method' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'A student who masters Biology and scores 330–350 can qualify for government MBBS even with a moderate Physics/Chemistry performance — that\'s how much this single subject carries.',
  sections: [
    {
      id: 'method',
      title: 'What actually moves the Biology score',
      table: {
        columns: ['Strategy', 'What to do'],
        rows: [
          ['NCERT is everything', 'Read each line — NEET directly quotes NCERT sentences as correct/incorrect options'],
          ['Diagrams are marks', 'Draw and label mitosis, meiosis, heart cross-section, nephron, neuron, reproductive organs, DNA replication, photosynthesis pathway'],
          ['Tables and facts', 'Build your own tables: plant hormones + effects, RNA types, genetic code exceptions, immunoglobulin types'],
          ['Previous year questions', 'NEET Biology repeats or paraphrases ~30–40% of questions — do the last 10 years chapter-wise'],
          ['Revision schedule', 'Plan monthly full-syllabus revision from January of exam year — 5–7 total revisions before NEET'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The core method',
        text: 'Read each NCERT chapter at least five times. Create one-page summary notes per chapter. Solve every NCERT exercise and in-text question, then move to MCQs from the last 10 years of NEET papers. Students who do this consistently score 150–160 in Botany and 150–160 in Zoology — a 300+ Biology score is the foundation of NEET success.',
      },
    },
  ],
  faqs,
  faqTitle: 'Biology strategy — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Want a chapter-wise NCERT revision tracker?',
  ctaSub: 'A structured revision cycle beats re-reading randomly.',
});
