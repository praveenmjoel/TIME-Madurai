import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Which certificate authority actually matters for TN counselling?',
    a: 'The Tahsildar (Revenue Department) — community certificates issued by Village Administrative Officers, Revenue Divisional Officers, or school headmasters are NOT accepted for medical or engineering counselling in Tamil Nadu. Apply for your Tahsildar certificate at least three months before counselling season; queues run long in June–July.',
  },
  {
    q: 'How many copies of each document should I actually carry?',
    a: 'Originals plus at least five self-attested photocopies of each document. Counselling centres are high-volume and fast-moving; running short on a photocopy can cost you time in a round with a strict same-day or next-day deadline.',
  },
];

export const documentsChecklistPage = buildLeafPage({
  slug: 'counselling/documents-checklist',
  title: 'Documents Checklist for JoSAA, MCC, TN Medical & TNEA | T.I.M.E. Madurai',
  description: 'Every document needed across every major counselling process, side by side — plus why Tahsildar-issued certificates specifically matter in Tamil Nadu.',
  canonical: '/counselling/documents-checklist/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'Documents Checklist' }],
  eyebrow: 'paperwork, sorted',
  heroTitle: 'Documents Checklist for Every Counselling',
  heroSubtitle: 'Missing or mismatched paperwork forfeits your round entirely, regardless of your rank. Here\'s exactly what to have ready, and where each certificate actually comes from.',
  stats: [ { value: '3 months', label: 'Lead time to apply for certificates' }, { value: '5+', label: 'Photocopies of each document to carry' } ],
  toc: [
    { id: 'checklist', label: 'The Full Checklist' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Keep every document below in originals plus at least five self-attested photocopies each, well before your first counselling round begins.',
  sections: [
    {
      id: 'checklist',
      title: 'Documents needed, by counselling',
      table: {
        columns: ['Document', 'JoSAA/IIT', 'MCC/AIQ', 'TN Medical', 'TNEA'],
        rows: [
          ['NEET / JEE admit card', 'JEE Adv admit', 'NEET admit', 'NEET admit', '—'],
          ['NEET / JEE score card', 'JEE Main + Adv rank', 'NEET score card', 'NEET score card', '—'],
          ['10th mark sheet (DOB proof)', 'Required', 'Required', 'Required', 'Required'],
          ['10+2 mark sheet &amp; pass certificate', 'Required', 'Required', 'Required', 'Required'],
          ['Transfer certificate', 'Required', 'Required', 'Required', 'Required'],
          ['Community/caste certificate (Tahsildar)', 'If applicable', 'If applicable', 'Essential', 'Essential'],
          ['Income certificate (BC/MBC, TN)', 'N/A', 'N/A', 'Required', 'Required'],
          ['Nativity/residential certificate', 'N/A', 'N/A', 'Essential (TN domicile)', 'Essential (TN domicile)'],
          ['PwD certificate (if applicable)', 'Govt hospital-issued', 'Same', 'Same', 'Same'],
          ['Passport photos (10+) &amp; Aadhaar', 'Required', 'Required', 'Required', 'Required'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'Community certificates for TN counselling MUST come from the Tahsildar. VAO-issued, RDO-issued, or school-issued certificates are rejected outright. Apply through edistrict.tn.gov.in at least three months before counselling season — June–July queues are long, and a rejected certificate at verification forfeits your entire round.',
      },
    },
  ],
  faqs,
  faqTitle: 'Documents — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Not sure which certificates your category needs?',
  ctaSub: 'A counsellor can confirm your exact document list before season starts.',
});
