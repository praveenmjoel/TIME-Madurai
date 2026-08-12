import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do I need NEET for allied health courses?',
    a: 'Usually no. B.Sc. Nursing, B.Pharm, B.P.T. (private colleges), B.Sc. MLT, B.Sc. OT Technology, and B.Sc. DMRIT are all typically admitted on Class 12 marks alone. NEET is required mainly for a few premier institutions — notably AIISH Mysuru for audiology/speech pathology — and can strengthen an application even where it isn\'t mandatory.',
  },
  {
    q: 'Are allied health careers a "backup" for students who miss MBBS?',
    a: 'They shouldn\'t be treated that way. These are specialised professional careers in their own right, with genuine job security, strong government pay scales (7th Pay Commission), and — in fields like nursing and physiotherapy — some of the best international migration prospects of any Indian degree. Choose one because you want it, not only because MBBS didn\'t work out.',
  },
  {
    q: 'Which allied health field has the best international prospects?',
    a: 'Nursing and physiotherapy lead by a wide margin. Tamil Nadu-trained nurses are especially sought after in the UK, Canada, Australia, and the Gulf thanks to strong clinical training and English proficiency — with realistic pathways to CAD 65,000–95,000/year in Canada or £28,000–45,000/year in the UK after licensure.',
  },
];

export const alliedHealthPage = buildLeafPage({
  slug: 'medical/allied-health',
  title: 'Allied Health Sciences Guide 2026: Nursing, Physiotherapy, MLT & More | T.I.M.E. Madurai',
  description: 'Every major allied health career explained — nursing, physiotherapy, medical lab technology, radiology, pharmacy, and more — with salaries, government pay scales, and international pathways.',
  canonical: '/medical/allied-health/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'Allied Health Sciences' }],
  eyebrow: 'medical · allied health',
  heroTitle: 'Allied Health Sciences',
  heroSubtitle: 'For every doctor, there are 5–10 allied health professionals working alongside them. These are specialised careers in their own right — not consolation prizes.',
  stats: [
    { value: '150+', label: 'Allied health colleges in TN' },
    { value: '₹35,400', label: 'TNPSC starting basic pay (most roles)' },
    { value: 'CAD 65–95K', label: 'Nursing salary in Canada, post-licensure' },
  ],
  toc: [
    { id: 'landscape', label: 'The Landscape' },
    { id: 'nursing-pt', label: 'Nursing & Physiotherapy' },
    { id: 'diagnostics', label: 'Diagnostics & Pharmacy' },
    { id: 'other', label: 'Other Allied Careers' },
    { id: 'choosing', label: 'Choosing Your Path' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'These careers offer stable government employment, genuine patient impact, and — in several fields — global mobility, often without MBBS\'s 10+ year runway.',
  sections: [
    {
      id: 'landscape',
      eyebrow: 'the ecosystem',
      title: 'How allied health admission works in Tamil Nadu',
      table: {
        columns: ['Category', 'Duration', 'Entry requirement'],
        rows: [
          ['Degree allied health (B.Sc./B.P.T.)', '3–4.5 yrs', '10+2 PCB; NEET optional'],
          ['Nursing (B.Sc. Nursing)', '4 yrs', '10+2 PCB; NEET optional'],
          ['Pharmacy (B.Pharm)', '4 yrs', '10+2 PCM or PCB'],
          ['Occupational/Physiotherapy', '4.5 yrs', '10+2 PCB'],
        ],
      },
      note: 'Tamil Nadu Dr. M.G.R. Medical University affiliates most allied health colleges in the state, with government seats often costing just ₹10,000–30,000/year.',
    },
    {
      id: 'nursing-pt',
      eyebrow: 'the two biggest fields',
      title: 'Nursing & Physiotherapy',
      table: {
        columns: ['Field', 'Duration', 'Govt starting pay', 'International pathway'],
        rows: [
          ['B.Sc. Nursing', '4 yrs', '₹35,400 basic (Level 14)', 'UK, Canada, Australia, Gulf — TN nurses especially sought after'],
          ['B.P.T. (Physiotherapy)', '4.5 yrs', '₹35,400 basic (Level 14)', 'UK, Canada, Australia, Gulf via NARIC/CPTS assessment'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'CMC Vellore, Saveetha, SRM, and Chettinad produce thousands of nursing graduates annually with an exceptional international placement record. If UK or Canada migration is the goal, IELTS preparation (target band 7.0) should ideally begin in the 3rd year of B.Sc. Nursing.',
      },
    },
    {
      id: 'diagnostics',
      eyebrow: 'the technical fields',
      title: 'Diagnostics & Pharmacy',
      table: {
        columns: ['Field', 'Duration', 'Govt starting pay', 'Notable detail'],
        rows: [
          ['B.Sc. MLT (Lab Technology)', '3 yrs', '₹30,700 basic (Level 11)', 'High demand at Apollo, Vijaya, SRL reference labs in Chennai'],
          ['B.Sc. DMRIT (Radiology)', '3 yrs', '₹35,400 basic (Level 14)', 'Requires AERB licence to operate X-ray/CT/MRI equipment'],
          ['B.Pharm / Pharm.D', '4 / 6 yrs', '₹30,700 basic (Level 11)', 'Very high PG value — M.Pharm/Pharm.D + industry role is excellent'],
        ],
      },
    },
    {
      id: 'other',
      eyebrow: 'beyond the obvious',
      title: 'Other strong allied health careers',
      table: {
        columns: ['Field', 'Work area', 'TN availability'],
        rows: [
          ['B.O.T. (Occupational Therapy)', 'Disability rehab, paediatric &amp; psychiatric OT', 'IPMR Chennai — South India\'s largest public rehab centre'],
          ['BASLP (Speech &amp; Audiology)', 'Communication &amp; hearing disorders', 'Sri Ramachandra Chennai; AIISH Mysuru (premier, NEET-based)'],
          ['B.Optom (Optometry)', 'Refraction, low-vision rehab', 'Very high demand — Aravind Eye Hospital Madurai, Sankara Nethralaya'],
          ['B.Sc. Cardiac/Respiratory Technology', 'Cath labs, ICU ventilator management', 'Apollo, Fortis, CMC Vellore, JIPMER'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'Aravind Eye Hospital, Madurai — one of the world\'s largest-volume eye care systems — trains and employs optometrists through its LAICO programme, opening doors to eye-care careers across Africa, South Asia, and internationally. It\'s a uniquely Tamil Nadu-origin global opportunity.',
      },
    },
    {
      id: 'choosing',
      eyebrow: 'matching interest to field',
      title: 'Choosing your allied health path',
      table: {
        columns: ['If you...', 'Consider'],
        rows: [
          ['Enjoy hands-on work helping people move again after injury', 'B.P.T. (Physiotherapy)'],
          ['Love precision lab work and diagnostics', 'B.Sc. MLT'],
          ['Want patient care with the strongest migration options', 'B.Sc. Nursing'],
          ['Enjoy chemistry and want industry/research options', 'B.Pharm / Pharm.D'],
          ['Are fascinated by communication, language, and hearing science', 'BASLP'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'Allied health — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Deciding between nursing, physiotherapy, or a diagnostic field?',
  ctaSub: 'A counsellor can match your interests to the right allied health path.',
});
