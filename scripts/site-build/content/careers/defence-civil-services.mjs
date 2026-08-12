import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the earliest entry point into the defence services after Class 12?',
    a: 'NDA (National Defence Academy) — the UPSC-conducted NDA exam is open right after Class 12 (or while appearing), with an age window of 16.5–19.5 years. It leads to 3 years at NDA plus 1 year at IMA/INA/AFA, commissioning you as an officer in the Army, Navy, or Air Force.',
  },
  {
    q: 'Do engineers have a dedicated defence entry route?',
    a: 'Yes — the Technical Graduate Course (TGC) for the Army takes BTech engineers directly via interview into the Engineer Corps, EME, or Signals on a 14-year Short Service Commission with potential for permanent commission. ISRO and DRDO also recruit via GATE + interview for Scientist/Engineer roles.',
  },
];

export const defenceCivilServicesPage = buildLeafPage({
  slug: 'careers/defence-civil-services',
  title: 'Defence & Civil Services Careers for Science Students | T.I.M.E. Madurai',
  description: 'NDA, CDS, AFCAT, and UPSC Civil Services explained for science students — entry routes, eligibility, and how an engineering or medical background helps.',
  canonical: '/careers/defence-civil-services/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: 'Defence & Civil Services' }],
  eyebrow: 'careers · public service',
  heroTitle: 'Defence & Civil Services Careers',
  heroSubtitle: 'Structured, respected entry points for science students — from NDA straight after Class 12 to UPSC Civil Services after graduation.',
  stats: [ { value: '16.5–19.5', label: 'NDA eligible age range' }, { value: '3–6 yrs', label: 'Typical UPSC prep timeline' } ],
  toc: [
    { id: 'defence', label: 'Defence Services' },
    { id: 'civil', label: 'Civil Services' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'These paths suit students with a genuine pull toward public service, leadership, and structure — not a fallback if engineering or medicine doesn\'t work out.',
  sections: [
    {
      id: 'defence',
      eyebrow: 'entry routes',
      title: 'Defence services for science students',
      table: {
        columns: ['Entry route', 'Exam/process', 'Eligibility', 'Leads to'],
        rows: [
          ['NDA', 'NDA Exam (UPSC), twice/yr', 'Class 12 pass/appearing; age 16.5–19.5', 'Army, Navy, Air Force officer after 3-yr NDA + 1-yr IMA/INA/AFA'],
          ['CDS', 'CDS Exam (UPSC)', 'Graduate; age 19–25', 'IMA, INA, AFA, OTA (Short Service)'],
          ['AFCAT', 'AFCAT Exam', 'Any graduate; age 20–26', 'Technical, Flying, Ground Duty branches of IAF'],
          ['TGC (Army)', 'Interview after BTech', 'BTech engineers; age 20–27', 'Engineer Corps, EME, Signals — 14-yr Short Service Commission'],
          ['ISRO/DRDO Scientist', 'GATE + interview', 'BE/BTech/MSc; GATE mandatory for most', 'Scientist/Engineer-SC — research and development roles'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Madurai, Tirunelveli, and Salem districts consistently produce NDA and CDS officers. The Sainik School at Amaravathinagar (Udumalpet) is one of India\'s top NDA feeder schools — alumni have risen to Chief of Army Staff. NCC certification gives a 5–10% advantage in defence recruitment.',
      },
    },
    {
      id: 'civil',
      eyebrow: 'the administrative track',
      title: 'Civil services for science graduates',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Exam', 'UPSC Civil Services (Prelims + Mains + Interview)'],
          ['Science optionals', 'Physics, Chemistry, Mathematics, Zoology, Botany, Geography, Medical Science (for MBBS holders)'],
          ['Indian Engineering Services (IES)', 'Separate UPSC exam for BTech holders in Civil/Mech/ECE/EE — joins CPWD, Railways at central level'],
          ['TNPSC Group I', 'State-level IAS equivalent — TN has seen many engineers and doctors succeed here'],
          ['Timeline reality', '3–6 years of focused preparation, typically starting in final year of BTech/MBBS or right after'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'Defence & civil services — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Considering NDA straight after Class 12?',
  ctaSub: 'A counsellor can walk through the eligibility and preparation timeline.',
});
