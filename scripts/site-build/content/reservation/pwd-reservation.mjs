import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What does "horizontal" reservation mean for PwD candidates?',
    a: 'It means PwD reservation runs across every category rather than being one separate pool — 5% of General seats go to GEN-PwD students, 5% of OBC seats to OBC-PwD students, and so on. PwD candidates compete within their own vertical category (GEN, OBC, SC, ST), using their category-adjusted rank.',
  },
  {
    q: 'Who can issue a valid PwD certificate?',
    a: 'Only a Government Medical Board — specifically a District Medical Board or a Medical Board at a Government Teaching Hospital. Certificates from private doctors are not accepted for reservation purposes, regardless of how detailed they are.',
  },
];

export const pwdReservationPage = buildLeafPage({
  slug: 'reservation/pwd-reservation',
  title: 'PwD Reservation for JEE & NEET: Eligibility & Process | T.I.M.E. Madurai',
  description: 'How the 5% horizontal PwD reservation works across every category, disability certification requirements, and exam accommodations for JEE and NEET.',
  canonical: '/reservation/pwd-reservation/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'PwD Reservation' }],
  eyebrow: 'reservation · horizontal',
  heroTitle: 'PwD Reservation',
  heroSubtitle: 'A 5% horizontal reservation that runs across every category — General, OBC, SC, and ST alike, not a separate standalone pool.',
  stats: [ { value: '5%', label: 'Horizontal reservation, central institutions' }, { value: '≥40%', label: 'Certified disability threshold' } ],
  toc: [
    { id: 'categories', label: 'Disability Categories' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'PwD (Divyangjan) reservation applies on top of your existing vertical category — understanding both together is key to predicting your realistic seat.',
  sections: [
    {
      id: 'categories',
      title: 'PwD disability categories',
      table: {
        columns: ['Sub-category', 'Disability type', 'Benchmark disability'],
        rows: [
          ['LD (Locomotor Disability)', 'Bone/joint deformity, cerebral palsy, leprosy cured', '≥40% certified by Govt medical board'],
          ['VI (Visual Impairment)', 'Blindness, low vision', '≥40% certified; JEE/NEET paper modifications available'],
          ['HH (Hearing Impairment)', 'Deafness, hard of hearing', '≥40% certified; sign language interpreter for NEET'],
          ['Others', 'Autism, intellectual disability, specific learning disability, mental illness', '≥40% certified under RPWD Act, 2016'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'PwD certificates must come from a Government Medical Board (District Medical Board or a Government Teaching Hospital board) — self-acquired certificates from private doctors are not accepted. For NEET, if a scribe is needed, apply through NTA before the exam with your disability certificate. Check josaa.nic.in for current JEE PwD criteria, as courts have occasionally revised the disability percentage threshold.',
      },
    },
  ],
  faqs,
  faqTitle: 'PwD reservation — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Need help arranging exam accommodations or certification?',
  ctaSub: 'A counsellor can walk through the process and timelines.',
});
