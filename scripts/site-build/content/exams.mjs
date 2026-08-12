import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'patterns', label: 'Exam Patterns' },
  { id: 'strategy', label: 'Subject Strategy' },
  { id: 'exam-day', label: 'Exam-Day Tactics' },
  { id: 'mocks', label: 'Mock Tests' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'What\'s the "Rule of 4" for negative marking?',
    a: 'In MCQs with +4/−1 marking, you need to be right at least 1 in 4 times to break even. If you can eliminate even one wrong option, your odds improve from 25% to 33% — which statistically makes the question worth attempting. Below that confidence level, skip it.',
  },
  {
    q: 'Should I attempt all 90 questions in JEE Main?',
    a: 'No — Paper 1 has 75 questions to be attempted out of 90 available (20 MCQ + 10 numerical per subject, with only 5 numericals mandatory). Trying all 90 out of panic costs marks to negative marking on MCQs. Stick to your strongest 75 — accuracy beats coverage.',
  },
  {
    q: 'How many mock tests should I take before the real exam?',
    a: 'Weekly full-length mocks under real exam conditions (same time of day, no breaks, phone off), starting at least six months out — that\'s roughly 20–30 mocks minimum. Each one should feed an error log categorising every wrong answer as a silly mistake, a conceptual gap, or a time-pressure issue, so revision targets the actual problem.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'the exams themselves',
  title: 'JEE Main, JEE Advanced & NEET UG: The Complete Exam Guide',
  subtitle: 'Pattern, marking scheme, subject-wise strategy, exam-day tactics, and how to actually use mock test data — the mechanics that decide who converts preparation into rank.',
  stats: [
    { value: '300', label: 'JEE Main total marks' },
    { value: '720', label: 'NEET total marks' },
    { value: '75/90', label: 'JEE Main Qs to attempt' },
    { value: '1×/yr', label: 'NEET sessions (no retake)' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div id="patterns">
        ${sectionHeader({
          eyebrow: 'know the paper',
          title: 'The three exams, side by side',
        })}
        ${dataTable(
          ['Parameter', 'JEE Main', 'JEE Advanced', 'NEET UG'],
          [
            ['Mode', 'Computer-based', 'Computer-based', 'Pen &amp; paper (OMR)'],
            ['Sessions/year', '2 (Jan + Apr)', '1 (after JEE Main)', '1 (May)'],
            ['Total marks', '300', 'Varies by year, ~360', '720'],
            ['Marking (MCQ)', '+4 / −1', 'Varies (partial marking exists)', '+4 / −1'],
            ['Unlocks', 'NITs, IIITs, CFTIs', 'All 23 IITs + IISc', 'MBBS, BDS, AYUSH, B.VSc'],
          ]
        )}
        ${hubCardGrid([
          { title: 'JEE Main — Pattern &amp; Syllabus', href: '/exams/jee-main/', blurb: 'Full section-wise breakdown, high-weightage topics, and the exact marking scheme.' },
          { title: 'JEE Advanced — Pattern &amp; Syllabus', href: '/exams/jee-advanced/', blurb: 'What changes vs. Main, and the syllabus exclusions worth knowing.' },
          { title: 'NEET UG — Pattern &amp; Syllabus', href: '/exams/neet-ug/', blurb: 'Section-wise breakdown and chapter-weight analysis for Physics, Chemistry, Botany, Zoology.' },
        ])}
      </div>

      <div id="strategy">
        ${sectionHeader({ eyebrow: 'subject by subject', title: 'How to actually prepare each subject' })}
        ${dataTable(
          ['Subject', 'What decides your score'],
          [
            ['Physics', 'Concept-first — formula memorisation without understanding falls apart under JEE-style application questions'],
            ['Chemistry', 'Three different subjects in one — Physical (numerical practice), Organic (mechanisms not rote), Inorganic (NCERT, read 3×)'],
            ['Mathematics', 'JEE\'s decider subject — no shortcut, needs 150–300 practice problems per major chapter'],
            ['Biology', 'NEET\'s scoring engine — 360 of 720 marks, drawn almost entirely from NCERT text and diagrams'],
          ]
        )}
        ${hubCardGrid([
          { title: 'Physics Strategy', href: '/exams/physics-strategy/', blurb: 'Phase-by-phase timeline from Class 11 foundation to final revision.' },
          { title: 'Chemistry Strategy', href: '/exams/chemistry-strategy/', blurb: 'Different tactics for Physical, Organic, and Inorganic chapters.' },
          { title: 'Maths Strategy', href: '/exams/maths-strategy/', blurb: 'Chapter-wise priority ranking for JEE Main vs. JEE Advanced.' },
          { title: 'Biology Strategy', href: '/exams/biology-strategy/', blurb: 'The NCERT-first method that gets students to 330+/360.' },
        ])}
        ${callout({
          type: 'mistake',
          label: 'Common mistake',
          text: 'Aspirants often over-invest in Physics and Chemistry and under-invest in Biology for NEET, even though Biology alone is worth 50% of the paper and is the most learnable section — it tracks NCERT almost line-for-line. Never neglect it.',
        })}
      </div>

      <div id="exam-day">
        ${sectionHeader({ eyebrow: 'on the day', title: 'Attempt order &amp; negative-marking discipline' })}
        ${dataTable(
          ['Confidence level', 'JEE Main MCQ', 'NEET', 'JEE Advanced (multi-correct)'],
          [
            ['&gt;90% confident', 'Attempt — strong +4 gain', 'Attempt — +4 gain', 'Mark all correct options'],
            ['60–90% confident', 'Attempt (accept occasional −1)', 'Attempt — expected value positive', 'Only if ALL correct options known'],
            ['40–60% confident', 'Skip MCQ; try the numerical version', 'Skip — −1 risk not worth it', 'Skip — −2 penalty is brutal'],
            ['&lt;40% confident', 'Skip MCQ; numericals have no penalty', 'Skip', 'Skip'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'The Rule of 4',
          text: 'In +4/−1 marking, you need to be right 1 in 4 times to break even. Eliminate even one wrong option and your odds jump from 25% to 33% — statistically worth attempting. For NEET specifically: fill the OMR carefully and check every 10 questions — a misaligned bubble sheet cannot be corrected.',
        })}
      </div>

      <div id="mocks">
        ${sectionHeader({ eyebrow: 'make practice count', title: 'The mock test analysis protocol' })}
        ${dataTable(
          ['Step', 'Action', 'Frequency'],
          [
            ['Take under real conditions', 'Full-length, no breaks, phone off, same time as the actual exam', 'Weekly, from 6 months out'],
            ['Score analysis', 'Identify which chapters generated the most errors', 'Same day'],
            ['Error categorisation', 'Silly mistake / conceptual gap / time pressure / not studied', 'After every mock'],
            ['Error book update', 'Log the correct solution for every conceptual error', 'Within 24 hours'],
            ['Re-revision trigger', 'Any chapter with &gt;2 errors gets immediate re-revision', 'Before the next mock'],
          ]
        )}
        ${hubCardGrid([
          { title: 'Exam-Day Strategy', href: '/exams/exam-day-strategy/', blurb: 'The full attempt-order playbook for JEE Main and NEET.' },
          { title: 'Mock Test Analysis', href: '/exams/mock-test-analysis/', blurb: 'How to turn every mock into a targeted revision plan, not just a score.' },
        ], 2)}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Exam mechanics — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('exams')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Want a real diagnostic, not just advice?',
  sub: 'Sit a full-length TIME mock and get a chapter-wise error report.',
  courseLabel: 'JEE',
})}
`;

export const examsPage = {
  slug: 'exams',
  title: 'JEE Main, JEE Advanced & NEET Exam Guide: Pattern & Strategy (2026) | T.I.M.E. Madurai',
  description: 'Full exam-pattern breakdown for JEE Main, JEE Advanced and NEET UG, plus subject-wise preparation strategy, exam-day tactics, and how to analyse mock tests properly.',
  canonical: '/exams/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Exams' },
  ],
  schema: [
    articleSchema({
      title: 'JEE Main, JEE Advanced & NEET UG: The Complete Exam Guide',
      description: 'Exam pattern, subject-wise strategy, exam-day tactics, and mock test analysis for JEE and NEET.',
      url: 'https://timemadurai.com/exams/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
