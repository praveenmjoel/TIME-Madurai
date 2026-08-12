import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why is certificate verification the step families worry about most?',
    a: 'Because any mismatch or missing document at the verification centre forfeits your round entirely. Essential documents include 10th and 12th mark sheets, a Tahsildar-issued Nativity/Community Certificate (not from a Village Administrative Officer), your NEET score card, and a Transfer Certificate — carry multiple self-attested photocopies plus originals.',
  },
  {
    q: 'What\'s the difference between government quota and management quota at private colleges?',
    a: 'Government quota at private colleges (65% of their seats) is filled through this same TN state counselling at regulated, much lower fees. Management quota (35%) is filled directly by the college at its own — significantly higher — fee, with minimum NEET qualification the only common requirement.',
  },
];

export const tnMedicalCounsellingPage = buildLeafPage({
  slug: 'counselling/tn-medical-counselling',
  title: 'Tamil Nadu Medical Counselling (TNMC&HC): Complete Process Guide | T.I.M.E. Madurai',
  description: 'The 85% TN State Quota medical counselling process explained step by step — seat types, certificate verification, and the round-by-round timeline.',
  canonical: '/counselling/tn-medical-counselling/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'TN Medical Counselling' }],
  eyebrow: 'counselling · medical',
  heroTitle: 'Tamil Nadu Medical Counselling',
  heroSubtitle: 'The most important counselling process for Tamil Nadu medical aspirants — 85% of every government college\'s MBBS/BDS seats, plus every private college seat, in one process.',
  stats: [
    { value: '85%', label: 'Share of govt seats, TN state quota' },
    { value: '9', label: 'Documented process steps' },
    { value: '3+1', label: 'Rounds incl. mop-up' },
  ],
  toc: [
    { id: 'seat-types', label: 'Seat Types' },
    { id: 'process', label: 'Step by Step' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Run by the Tamil Nadu Medical Counselling and Health Committee (formerly Selection Committee), this is the process that decides the large majority of medical seats for TN-domicile students.',
  sections: [
    {
      id: 'seat-types',
      eyebrow: 'know your quota',
      title: 'TN State Counselling seat types',
      table: {
        columns: ['Seat type', 'Who gets it', 'Fee structure'],
        rows: [
          ['Government quota — govt colleges', 'TN domicile, rank-based, reservation applies', '₹13,500/yr (SC/ST); ₹27,500/yr (OC/BC/MBC)'],
          ['Government quota — private colleges', 'TN domicile, 65% of private seats', '₹1.5–5 lakh/yr'],
          ['Management quota — private colleges', 'College fills 35% directly; min. NEET qualifying', '₹7–15 lakh/yr'],
          ['NRI quota — private colleges', '15% of management quota, for NRI/foreign nationals', 'USD-linked, highest tier'],
        ],
      },
    },
    {
      id: 'process',
      eyebrow: 'the full sequence',
      title: 'Step-by-step process',
      table: {
        columns: ['Step', 'Detail'],
        rows: [
          ['1. Register', 'tnmedicalselection.net — NEET hall ticket, application number, DOB, photo, signature'],
          ['2. Certificate verification', 'Submit originals at designated govt college / zonal centre — essential, no participation without it'],
          ['3. Choice filling', 'Enter college–course combinations in preference order — several hundred choices possible'],
          ['4. Round 1 allotment', 'Highest preference seat your state rank qualifies for, per category'],
          ['5. Accept / join / wait', 'Pay provisional acceptance fee online; physically join within the deadline'],
          ['6. Round 2', 'Vacated seats + upgrades — R1 joiners can opt to upgrade or retain'],
          ['7. Mop-Up round', 'Remaining seats, usually less-preferred colleges or private seats'],
          ['8. Spot round', 'Any remaining seats, physically allotted at the counselling venue'],
          ['9. Final reporting', 'Report to allotted college with all original documents'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Certificate verification is the single most critical step — essential documents are your 10th mark sheet, 10+2 mark sheet, Nativity/Community Certificate (Tahsildar-issued, NOT from a Village Administrative Officer), NEET score card, and Transfer Certificate. Any mismatch forfeits your round. Carry multiple self-attested photocopies alongside originals.',
      },
    },
  ],
  faqs,
  faqTitle: 'TN Medical Counselling — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Preparing your certificate verification documents?',
  ctaSub: 'See our full Documents Checklist, or talk to a counsellor about your specific category.',
});
