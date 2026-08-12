import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How is NEET\'s Section B different from JEE Main\'s numerical questions?',
    a: 'Critically, NEET Section B questions ARE MCQs with negative marking — unlike JEE Main\'s NVQs, which have zero penalty for wrong answers. You get 15 questions per subject in Section B and attempt any 10; choose your most confident ones and skip the rest entirely, since a wrong guess here does cost you a mark.',
  },
  {
    q: 'Why did 2024 NEET cutoffs run unusually high?',
    a: 'The 2024 cycle saw unusually high scores due to a paper-leak controversy and subsequent re-tests, which shifted the competitive distribution. Cutoffs fluctuate meaningfully year to year based on paper difficulty — plan for a score 20–30 marks above the "safe" cutoff to build in a comfortable margin.',
  },
];

export const neetUgExamPage = buildLeafPage({
  slug: 'exams/neet-ug',
  title: 'NEET UG Exam Pattern & Syllabus Weightage 2026 | T.I.M.E. Madurai',
  description: 'The complete NEET UG pattern, marking scheme, and chapter-by-chapter syllabus weightage for Biology, Physics, and Chemistry — plus qualifying percentiles by category.',
  canonical: '/exams/neet-ug/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Exams', href: '/exams/' }, { label: 'NEET UG' }],
  eyebrow: 'exam deep-dive',
  heroTitle: 'NEET UG: Pattern & Syllabus Weightage',
  heroSubtitle: 'One paper, once a year, 720 marks, pen-and-paper OMR — and Biology alone is worth as much as Physics and Chemistry combined.',
  stats: [ { value: '720', label: 'Total marks' }, { value: '180', label: 'Questions attempted' }, { value: '1×/yr', label: 'Sessions — no retake' } ],
  toc: [
    { id: 'pattern', label: 'Pattern & Marking' },
    { id: 'weightage', label: 'Chapter Weightage' },
    { id: 'cutoffs', label: 'Qualifying Percentiles' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'For NEET score-to-college mapping, see our Medical hub. This page covers exam mechanics — pattern, marking, and exactly where the marks come from chapter by chapter.',
  sections: [
    {
      id: 'pattern',
      eyebrow: 'the mechanics',
      title: 'Section-wise pattern',
      table: {
        columns: ['Subject', 'Section A', 'Section B', 'Total attempted', 'Marks'],
        rows: [
          ['Physics', '35 Qs (compulsory)', '15 Qs (attempt any 10)', '45', '180'],
          ['Chemistry', '35 Qs (compulsory)', '15 Qs (attempt any 10)', '45', '180'],
          ['Botany', '35 Qs (compulsory)', '15 Qs (attempt any 10)', '45', '180'],
          ['Zoology', '35 Qs (compulsory)', '15 Qs (attempt any 10)', '45', '180'],
        ],
      },
      note: 'Duration: 3h20m. Marking: +4 correct, −1 wrong, 0 unattempted — this negative marking applies in BOTH Section A and Section B, unlike JEE Main\'s no-penalty numerical section.',
    },
    {
      id: 'weightage',
      eyebrow: '2019–2024 question analysis',
      title: 'Where the marks actually come from',
      table: {
        columns: ['Subject', 'Highest-weight areas', 'Approx. questions (of 45)'],
        rows: [
          ['Biology', 'Human Physiology (complete)', '10–12'],
          ['Biology', 'Genetics + Evolution', '10–12'],
          ['Biology', 'Reproduction (Plant + Human)', '8–10'],
          ['Physics', 'Mechanics (1D/2D motion, NLM, Work-Energy, Rotation)', '12–14'],
          ['Chemistry', 'Organic Chemistry (mechanisms, named reactions, polymers)', '12–15'],
          ['Chemistry', 'Inorganic (periodic table, bonding, s/p/d/f-block)', '12–15'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'NEET Physics aligns reasonably well with the TN Physics textbook, but NEET Biology needs pure NCERT — the TN textbook has real gaps in Genetics (Mendelian ratios, linkage, chromosomal disorders), Biotechnology (PCR, gel electrophoresis), and Ecology (biogeochemical cycles). Buy NCERT Biology 11 &amp; 12 from day one and treat them as your primary Biology text.',
      },
    },
    {
      id: 'cutoffs',
      eyebrow: 'qualifying vs. competitive',
      title: 'Qualifying percentiles by category',
      table: {
        columns: ['Category', 'Qualifying percentile', 'Approx. qualifying score (720)', '2024 AIQ cutoff (Govt MBBS)'],
        rows: [
          ['General (OC)', '50th percentile', '~140–160+', '~600+ (AIIMS level: 680+)'],
          ['OBC/SC/ST', '40th percentile', '~115–130+', '~540–580 (state quota varies)'],
          ['PwD', '45th percentile', '~130–145+', 'Horizontal reservation, same pool'],
          ['TN Govt MBBS — OC (state quota)', '—', '—', '~540–560'],
          ['TN Govt MBBS — BC/MBC (state quota)', '—', '—', '~500–540'],
          ['TN Govt MBBS — SC (state quota)', '—', '—', '~430–480'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'Don\'t aim for the exact "safe" cutoff — NEET cutoffs fluctuate significantly year to year based on paper difficulty (2024 saw unusually high scores after a paper-leak controversy and re-tests). Plan for a score 20–30 marks above the safe cutoff for a genuine margin.',
      },
    },
  ],
  faqs,
  faqTitle: 'NEET UG pattern — quick answers',
  backLink: { label: 'the Exams hub', href: '/exams/' },
  ctaHeading: 'Want a Biology-first study plan built around this weightage?',
  ctaSub: 'A structured plan protects your highest-value section first.',
});
