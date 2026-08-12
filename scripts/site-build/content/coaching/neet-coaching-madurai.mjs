import { buildLeafPage } from '../../lib/leaf.mjs';
import { courseSchema } from '../../lib/components.mjs';

const faqs = [
  {
    q: 'Why does NEET preparation specifically benefit from a structured, local programme?',
    a: 'NEET is held only once a year — unlike JEE Main\'s two sessions — so there\'s no second chance within the same year to recover from a bad exam day. That single-shot pressure makes structured mock-test discipline and steady mentoring genuinely valuable, and doing it locally means that support doesn\'t require uprooting a student from home during an already high-pressure year.',
  },
  {
    q: 'AIIMS Madurai is nearby — does that change anything for local NEET aspirants?',
    a: 'It\'s a genuine opportunity specific to this region. AIIMS Madurai, operational since 2022, gives Tamil Nadu students — especially from Madurai, Virudhunagar, Dindigul, Theni, and Ramanathapuram — a premier institute option without the distance of AIIMS Delhi or the older AIIMS campuses.',
  },
  {
    q: 'Do you help with both AIQ (MCC) and TN state medical counselling?',
    a: 'Yes — our Medical and Counselling hubs cover both tracks in detail, since NEET aspirants need to track MCC and TN state counselling simultaneously, and the process (and the certificates required) differs between the two.',
  },
];

export const neetCoachingMaduraiPage = buildLeafPage({
  slug: 'coaching/neet-coaching-madurai',
  title: 'NEET Coaching in Madurai: NEET UG Preparation | T.I.M.E. Madurai',
  description: 'Structured NEET UG coaching in Madurai — Biology-first preparation strategy, All-India Test Series mocks, and full MCC/TN medical counselling guidance.',
  canonical: '/coaching/neet-coaching-madurai/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'NEET Coaching in Madurai' }],
  eyebrow: 'neet coaching · madurai',
  heroTitle: 'NEET Coaching in Madurai',
  heroSubtitle: 'T.I.M.E. Madurai (Knowledge Hive Learning Services) runs structured NEET UG preparation for students across Madurai and the surrounding South Tamil Nadu districts — with AIIMS Madurai now a genuine local target.',
  stats: [ { value: '1×/yr', label: 'NEET sessions — no retake' }, { value: 'AITS', label: 'All-India Test Series' } ],
  toc: [
    { id: 'why-here', label: 'Why Prepare in Madurai' },
    { id: 'programme', label: 'What the Programme Covers' },
    { id: 'nearby', label: 'Serving South Tamil Nadu' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'NEET\'s single annual attempt makes structured, steady preparation more important than for almost any other exam in this hub — and it doesn\'t require leaving home to get it.',
  sections: [
    {
      id: 'why-here',
      eyebrow: 'the local advantage',
      title: 'Why prepare for NEET in Madurai',
      table: {
        columns: ['Consideration', 'What a local centre offers'],
        rows: [
          ['AIIMS Madurai proximity', 'A genuine premier-institute target physically close to home, unlike AIIMS Delhi or older campuses'],
          ['Single-shot pressure management', 'Structured mock discipline under real exam-day conditions, since NEET offers no second session'],
          ['Biology-first coaching', 'Dedicated focus on NCERT mastery — the single highest-leverage NEET preparation habit'],
          ['Counselling continuity', 'Guidance through both MCC (AIQ) and TN state medical counselling after results'],
        ],
      },
    },
    {
      id: 'programme',
      eyebrow: 'what to expect',
      title: 'What the programme covers',
      cards: [
        { title: 'NEET UG Exam Guide', href: '/exams/neet-ug/', blurb: 'Full pattern, marking scheme, and chapter-wise syllabus weightage.' },
        { title: 'Biology Strategy', href: '/exams/biology-strategy/', blurb: 'The NCERT-first method that gets students to 330+ out of 360.' },
        { title: 'Medical Hub', href: '/medical/', blurb: 'NEET score-to-college mapping, AIIMS &amp; JIPMER, and every medical pathway.' },
        { title: 'MCC & TN Medical Counselling', href: '/counselling/mcc-neet/', blurb: 'What happens after results — both counselling tracks explained.' },
      ],
    },
    {
      id: 'nearby',
      eyebrow: 'beyond madurai city',
      title: 'Serving students across South Tamil Nadu',
      cards: [
        { title: 'JEE &amp; NEET Coaching for Theni Students', href: '/coaching/theni/', blurb: 'Approx. 75 km from Madurai.' },
        { title: 'JEE &amp; NEET Coaching for Ramanathapuram Students', href: '/coaching/ramanathapuram/', blurb: 'Approx. 110 km from Madurai.' },
        { title: 'JEE &amp; NEET Coaching for Sivakasi Students', href: '/coaching/sivakasi/', blurb: 'Approx. 75 km from Madurai.' },
        { title: 'JEE &amp; NEET Coaching for Karaikudi Students', href: '/coaching/karaikudi/', blurb: 'Approx. 90 km from Madurai.' },
      ],
      cardCols: 2,
    },
  ],
  faqs,
  faqTitle: 'NEET coaching in Madurai — quick answers',
  extraSchema: [courseSchema({
    name: 'NEET UG Coaching',
    description: 'Structured NEET UG preparation with Biology-first strategy, All-India Test Series mocks, and MCC/TN medical counselling guidance.',
    url: 'https://timemadurai.com/coaching/neet-coaching-madurai/',
    courseCode: 'NEET',
  })],
  ctaHeading: 'Ready to talk through a preparation plan?',
  ctaSub: 'No pressure, no pitch — just a conversation about where you want to go.',
});
