import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is JEE coaching actually necessary, or can I self-study?',
    a: 'Many students do crack JEE Main through disciplined self-study — coaching isn\'t a strict requirement. What structured coaching adds is chapter-wise pacing, All-India-benchmarked mock tests, and doubt-clearing that\'s genuinely hard to replicate alone, especially for JEE Advanced\'s deeper, multi-concept questions. The differentiator either way is consistent daily practice.',
  },
  {
    q: 'Why choose a Madurai-based centre over online coaching or a Chennai/Kota programme?',
    a: 'It comes down to what suits the student. A local centre offers in-person doubt-clearing, a peer environment of serious aspirants, and direct family involvement in the preparation journey — without the cost and disruption of relocating. For families in and around Madurai, it\'s a genuine alternative to sending a teenager away from home for two years.',
  },
  {
    q: 'Do you help with JoSAA and TNEA counselling after the exam, not just exam prep?',
    a: 'Yes — our Counselling hub and admissions guidance cover the full JoSAA, TNEA, and multi-exam strategy process students need after JEE Main and Advanced results, not just the exam itself.',
  },
];

export const jeeCoachingMaduraiPage = buildLeafPage({
  slug: 'coaching/jee-coaching-madurai',
  title: 'JEE Coaching in Madurai: JEE Main & Advanced Preparation | T.I.M.E. Madurai',
  description: 'Structured JEE Main and JEE Advanced coaching in Madurai — All-India Test Series, faculty-led doubt clearing, and full JoSAA/TNEA counselling guidance.',
  canonical: '/coaching/jee-coaching-madurai/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'JEE Coaching in Madurai' }],
  eyebrow: 'jee coaching · madurai',
  heroTitle: 'JEE Coaching in Madurai',
  heroSubtitle: 'T.I.M.E. Madurai (Knowledge Hive Learning Services) runs structured JEE Main and JEE Advanced preparation for students across Madurai and the surrounding South Tamil Nadu districts.',
  stats: [ { value: '30+ yrs', label: 'T.I.M.E. national legacy' }, { value: 'AITS', label: 'All-India Test Series' } ],
  toc: [
    { id: 'why-here', label: 'Why Prepare in Madurai' },
    { id: 'programme', label: 'What the Programme Covers' },
    { id: 'nearby', label: 'Serving South Tamil Nadu' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'JEE preparation doesn\'t require relocating to Chennai or Kota — a structured programme, a serious peer group, and genuine mock-test discipline can be built locally, closer to home.',
  sections: [
    {
      id: 'why-here',
      eyebrow: 'the local advantage',
      title: 'Why prepare for JEE in Madurai',
      table: {
        columns: ['Consideration', 'What a local centre offers'],
        rows: [
          ['Peer environment', 'A serious cohort of JEE aspirants from Madurai and neighbouring districts, without relocating away from family'],
          ['Faculty access', 'In-person doubt-clearing rather than asynchronous online support'],
          ['Mock test discipline', 'All-India Test Series (AITS) mocks that simulate real JEE Main and Advanced conditions with national ranking'],
          ['Counselling continuity', 'The same centre guides students through JoSAA and TNEA counselling after results, not just exam prep'],
        ],
      },
    },
    {
      id: 'programme',
      eyebrow: 'what to expect',
      title: 'What the programme covers',
      cards: [
        { title: 'JEE Main Exam Guide', href: '/exams/jee-main/', blurb: 'Full pattern, marking scheme, and chapter-wise syllabus weightage.' },
        { title: 'JEE Advanced Exam Guide', href: '/exams/jee-advanced/', blurb: 'Question types, the MCMQ trap, and what changes from Main-level prep.' },
        { title: 'Engineering Admissions Hub', href: '/engineering/admissions/', blurb: 'Every entrance exam TN students should be tracking alongside JEE.' },
        { title: 'JoSAA Counselling Guide', href: '/counselling/josaa/', blurb: 'What happens after results — rounds, terms, and choice-filling strategy.' },
      ],
    },
    {
      id: 'nearby',
      eyebrow: 'beyond madurai city',
      title: 'Serving students across South Tamil Nadu',
      cards: [
        { title: 'JEE &amp; NEET Coaching for Dindigul Students', href: '/coaching/dindigul/', blurb: 'Approx. 65 km from Madurai.' },
        { title: 'JEE &amp; NEET Coaching for Theni Students', href: '/coaching/theni/', blurb: 'Approx. 75 km from Madurai.' },
        { title: 'JEE &amp; NEET Coaching for Virudhunagar Students', href: '/coaching/virudhunagar/', blurb: 'Approx. 45 km from Madurai.' },
        { title: 'JEE &amp; NEET Coaching for Sivaganga Students', href: '/coaching/sivaganga/', blurb: 'Approx. 50 km from Madurai.' },
      ],
      cardCols: 2,
    },
  ],
  faqs,
  faqTitle: 'JEE coaching in Madurai — quick answers',
  ctaHeading: 'Ready to talk through a preparation plan?',
  ctaSub: 'No pressure, no pitch — just a conversation about where you want to go.',
});
