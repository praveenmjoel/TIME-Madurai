import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do SC/ST certificates need to be renewed every year?',
    a: 'No — SC/ST community certificates are lifelong once issued, since they\'re based on birth community, not income. Only income-linked certificates (OBC-NCL, EWS) need annual renewal, because the income component expires each financial year.',
  },
  {
    q: 'When should I apply for these certificates?',
    a: 'At least three months before counselling season — ideally by March or April of your Class 12 year (or drop year). Revenue offices get extremely crowded during the June–July counselling rush, and a certificate that\'s expired or still pending at verification can forfeit your round.',
  },
];

export const certificatesGuidePage = buildLeafPage({
  slug: 'reservation/certificates-guide',
  title: 'Reservation Certificates Guide: Validity & Where to Get Them | T.I.M.E. Madurai',
  description: 'Every reservation certificate explained — validity period, issuing authority, and practical tips for SC/ST, OBC-NCL, EWS, PwD, and TN category certificates.',
  canonical: '/reservation/certificates-guide/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'Certificates Guide' }],
  eyebrow: 'reservation · paperwork',
  heroTitle: 'Reservation Certificates Guide',
  heroSubtitle: 'Different certificates have very different validity periods — some are lifelong, others expire every financial year. Getting this wrong at counselling season costs real time.',
  stats: [ { value: '3 months', label: 'Recommended lead time to apply' } ],
  toc: [
    { id: 'table', label: 'Validity by Certificate Type' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Apply for every certificate you\'ll need well before counselling season — Revenue offices get extremely crowded during the June–July rush.',
  sections: [
    {
      id: 'table',
      title: 'Certificate validity &amp; issuing authority',
      table: {
        columns: ['Certificate type', 'Validity', 'Where to get it', 'Key tip'],
        rows: [
          ['SC/ST Community Certificate', 'Lifelong (community-based)', 'Tahsildar, Revenue Department', 'Name the specific caste as listed in the Constitutional Schedule; apply for reissue if lost'],
          ['TN BC/MBC/BCM Certificate', 'Lifelong (community-based)', 'Tahsildar', 'Not the same as Central OBC certificate — get a separate one if applicable'],
          ['Central OBC-NCL Certificate', '1 year from issue (income component expires)', 'Tahsildar/SDM — GOI format', 'Apply March–April; ensure it\'s still valid when June–July counselling starts'],
          ['EWS Certificate', '1 year (income component)', 'Tahsildar/SDM — GOI EWS format', 'Must be in the student\'s own name, issued for the current financial year'],
          ['PwD Disability Certificate', 'Permanent (for stable conditions)', 'Government Medical Board (District HQ hospital)', 'NTA-accepted format for JEE PwD benefit; criteria evolve under RPWD 2016'],
          ['Government School Certificate (TNEA)', 'Issued at completion of schooling', 'School leaving + Transfer certificates', 'Must show govt/aided school from Class 1 through 12; keep all yearly TC copies'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'The one habit that saves the most time',
        text: 'Apply for every certificate — community, OBC-NCL, EWS, PwD — at least 3 months before counselling season, ideally by March or April of Class 12 year. Use Tamil Nadu\'s e-District portal (edistrict.tn.gov.in) for online application, though physical verification follow-up is usually still required. Carry 10 photocopies of each certificate to every counselling round.',
      },
    },
  ],
  faqs,
  faqTitle: 'Certificates — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Building your certificate application timeline?',
  ctaSub: 'A counsellor can help you map exactly what to apply for and when.',
});
