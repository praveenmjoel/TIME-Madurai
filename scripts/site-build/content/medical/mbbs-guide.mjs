import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Does the undergraduate college matter as much in medicine as in engineering?',
    a: 'No — far less. A government MBBS seat at any government medical college in Tamil Nadu gives access to the same NEET PG exam, the same MD/MS pathways, and the same Tamil Nadu Medical Council registration. What matters most is your NEET PG score for specialisation later, not which government college your MBBS came from.',
  },
  {
    q: 'What\'s the real difference between AIQ and TN State Quota admission?',
    a: '15% of every government medical college\'s seats sit in the All India Quota (AIQ), counselled by MCC against students from every state. The remaining 85% is Tamil Nadu State Quota, counselled by the TN Selection Committee for TN-domicile students only. AIQ cutoffs at TN colleges run higher than state-quota cutoffs, since you\'re competing nationally rather than within the state.',
  },
];

export const mbbsGuidePage = buildLeafPage({
  slug: 'medical/mbbs-guide',
  title: 'MBBS Admission Guide 2026: NEET Score to College Mapping | T.I.M.E. Madurai',
  description: 'How NEET UG score translates into a real MBBS seat — from AIIMS-level scores down to management-quota private colleges, with the AIQ vs. TN State Quota distinction explained.',
  canonical: '/medical/mbbs-guide/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'MBBS Guide' }],
  eyebrow: 'medical · mbbs',
  heroTitle: 'The MBBS Admission Guide',
  heroSubtitle: 'MBBS is 5.5 years — 4.5 academic plus a compulsory one-year internship. Here\'s exactly how your NEET score translates into a seat.',
  stats: [
    { value: '5.5 yrs', label: 'MBBS duration' },
    { value: '~1.12L', label: 'MBBS seats in India' },
    { value: '15% / 85%', label: 'AIQ / State Quota split' },
  ],
  toc: [
    { id: 'degree', label: 'The Degree' },
    { id: 'mapping', label: 'Score → College Mapping' },
    { id: 'quotas', label: 'AIQ vs. State Quota' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'MBBS (Bachelor of Medicine & Bachelor of Surgery) is the primary medical degree in India, and since 2020, NEET UG is its sole entry gateway — no exceptions, no separate state-level medical exams.',
  sections: [
    {
      id: 'degree',
      eyebrow: 'the basics',
      title: 'MBBS, at a glance',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Duration', '5.5 years (4.5 academic + 1-year internship)'],
          ['Regulator', 'National Medical Commission (NMC)'],
          ['Admission', 'NEET UG score, via MCC (AIQ) or state counselling'],
          ['After MBBS', 'NEET PG for MD/MS specialisation, or govt/private practice directly'],
        ],
      },
    },
    {
      id: 'mapping',
      eyebrow: 'the question everyone asks',
      title: 'What NEET score gets you where?',
      table: {
        columns: ['NEET score', 'Approx. AIR (General)', 'What you can target'],
        rows: [
          ['680–720', 'Top ~500', 'AIIMS (all campuses), JIPMER, MAMC, Maulana Azad'],
          ['640–679', '~500–2,000', 'Top govt colleges nationally; MMC, Stanley, Kilpauk'],
          ['600–639', '~2,000–8,000', 'Good govt colleges via TN state quota'],
          ['550–599', '~8,000–30,000', 'Mid-tier TN govt and govt-aided colleges'],
          ['500–549', '~30,000–80,000', 'Lower TN govt (reserved categories); some private (lower fee)'],
          ['450–499', '~80,000–1.5L', 'Private medical colleges (₹10–25 lakh/yr)'],
        ],
      },
      note: 'Minimum qualifying: 50th percentile (General), 40th (SC/ST/OBC), 45th (PwD). Figures are 2024-cycle indicative — verify at mcc.nic.in and tnmedicalselection.net.',
    },
    {
      id: 'quotas',
      eyebrow: 'two parallel tracks',
      title: 'AIQ vs. Tamil Nadu State Quota',
      table: {
        columns: ['Track', 'Share of seats', 'Competes against', 'Counselling body'],
        rows: [
          ['All India Quota (AIQ)', '15% of every govt college', 'Students from every state', 'MCC (mcc.nic.in)'],
          ['TN State Quota', '85% of TN govt college seats', 'TN-domicile students only', 'TN Selection Committee (health.tn.gov.in)'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'AIQ and TN State counselling run simultaneously — track both. If you\'re allotted seats in both, you must formally withdraw from one before joining the other; holding both risks both being cancelled.',
      },
    },
  ],
  faqs,
  faqTitle: 'MBBS admission — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Want your realistic MBBS options mapped from a mock NEET score?',
  ctaSub: 'A counsellor can project your range well before results.',
});
