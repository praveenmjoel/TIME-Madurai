import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Which paramedical career has the strongest international demand?',
    a: 'B.Sc. Nursing, by a clear margin — Tamil Nadu-trained nurses are especially sought after in the UK, Ireland, Germany, the Gulf, Canada, and Australia thanks to strong clinical training and English proficiency. B.P.T. (Physiotherapy) has similarly strong international pathways in the UK, Canada, and Australia.',
  },
  {
    q: 'Do these careers need NEET?',
    a: 'Mostly no. B.Sc. Nursing, B.P.T., and B.Sc. MLT can all be entered via Class 12 marks in Tamil Nadu, with NEET as an optional strengthening factor for some government seats — see our full Allied Health guide for the exact requirement per programme.',
  },
];

export const paramedicalCareersPage = buildLeafPage({
  slug: 'careers/paramedical-careers',
  title: 'Paramedical & Allied Health Careers: Outcomes & Salaries | T.I.M.E. Madurai',
  description: 'Where nursing, physiotherapy, MLT, radiology, and pharmacy degrees actually lead in Tamil Nadu and internationally — entry routes, duration, and real career outcomes.',
  canonical: '/careers/paramedical-careers/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: 'Paramedical Careers' }],
  eyebrow: 'careers · paramedical',
  heroTitle: 'Paramedical & Allied Health Careers',
  heroSubtitle: 'For every doctor, 5–10 allied health professionals work alongside them — with genuine job security and, in several fields, the best international mobility of any Indian degree.',
  stats: [],
  toc: [
    { id: 'outcomes', label: 'Career Outcomes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'For the full picture on choosing between these programmes, see our Allied Health guide — this page focuses specifically on where each path leads afterward.',
  sections: [
    {
      id: 'outcomes',
      title: 'Degree-to-career outcomes, TN focus',
      table: {
        columns: ['Degree', 'Duration', 'Top career outcomes (TN focus)'],
        rows: [
          ['B.Sc. Nursing', '4 yrs', 'Govt staff nurse (₹45,000–80,000/mo), private hospital nursing, Middle East/Canada/UK migration, ICU/OT specialist nursing'],
          ['B.P.T. (Physiotherapy)', '4.5 yrs', 'Sports physiotherapy, hospital rehab, clinic practice, geriatric care; strong international demand'],
          ['B.Sc. MLT', '3 yrs', 'Diagnostic labs (Thyrocare, SRL, Vijaya, Apollo), NABL labs, govt hospital labs — high demand post-COVID'],
          ['B.Sc. Radiology/DMRIT', '3–4 yrs', 'Hospital radiology (CT/MRI tech), nuclear medicine, DRDO/BARC technical assistant'],
          ['B.Pharm / Pharm.D', '4/6 yrs', 'Hospital pharmacy, community pharmacy, pharma industry, clinical pharmacy'],
          ['B.Sc. OT Technology', '3 yrs', 'OT technician in surgery teams — understaffed speciality, good placement'],
          ['ASLP (Audiology &amp; Speech)', '4 yrs', 'Hearing clinics, school speech programmes; AIISH alumni have global demand'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'CMC Vellore, Saveetha, SRM, and Chettinad produce thousands of nursing graduates annually, and Tamil Nadu nurses have a genuinely exceptional international placement track record — especially into the UK and Gulf.',
      },
    },
  ],
  faqs,
  faqTitle: 'Paramedical careers — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Deciding between a paramedical path and re-attempting NEET for MBBS?',
  ctaSub: 'Both can be genuinely good outcomes — a counsellor can help you weigh them honestly.',
});
