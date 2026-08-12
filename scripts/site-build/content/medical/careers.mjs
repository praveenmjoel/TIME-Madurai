import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'How long does it actually take to become a specialist doctor in India?',
    a: 'MBBS is 5.5 years including internship. Most students then spend 1–2 years preparing for NEET PG, followed by 3 years of MD/MS, and a further 3 years for a DM/MCh super-speciality if they pursue one. All told, a super-specialist can be 12+ years from Class 12 to independent practice — a genuinely long runway worth planning for financially and mentally.',
  },
  {
    q: 'Is government medical service a financially reasonable path compared to private practice?',
    a: 'Yes, and often underrated. A Tamil Nadu Medical Services Corporation (TNMSC) government post pays ₹80,000–1.5 LPM once combined with NPA allowance, with far greater job security than private practice — and a TN government MBBS seat (roughly ₹30,000/year tuition) opens direct access to it after a mandatory 2-year rural service bond.',
  },
];

export const medicalCareersPage = buildLeafPage({
  slug: 'medical/careers',
  title: 'Medical Careers After MBBS & BDS: Pathways & Earning Potential | T.I.M.E. Madurai',
  description: 'What happens after MBBS and BDS — the NEET PG pathway, government vs. private practice, dental careers, and AYUSH career outlook, with realistic earning data.',
  canonical: '/medical/careers/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'Careers' }],
  eyebrow: 'medical · outcomes',
  heroTitle: 'Where a Medical Degree Actually Leads',
  heroSubtitle: 'MBBS is the start of the pathway, not the end. Here\'s the realistic route from graduation to specialist practice — and what BDS and AYUSH careers look like too.',
  stats: [
    { value: '₹15–40K/mo', label: 'Intern stipend' },
    { value: '₹50K–1L/mo', label: 'PG resident salary' },
    { value: '2 yrs', label: 'Mandatory rural bond, TN govt seats' },
  ],
  toc: [
    { id: 'mbbs-path', label: 'The MBBS Pathway' },
    { id: 'bds', label: 'BDS Careers' },
    { id: 'ayush-careers', label: 'AYUSH Careers' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Branch choice doesn\'t apply to medicine the way it does to engineering, but the pathway after your degree — MD/MS specialisation, government vs. private practice — shapes your career just as much.',
  sections: [
    {
      id: 'mbbs-path',
      eyebrow: 'after mbbs',
      title: 'The MBBS pathway, stage by stage',
      table: {
        columns: ['Stage', 'Duration', 'Earning potential'],
        rows: [
          ['MBBS', '5.5 years (incl. internship)', 'Intern stipend: ₹15,000–40,000/month'],
          ['NEET PG prep', '1–2 years', '—'],
          ['MD/MS', '3 years', 'Resident salary: ₹50,000–1,00,000/month'],
          ['DM/MCh (super-speciality)', '3 more years', '₹3–20 LPM in premium practice'],
          ['Government service (TNMSC)', 'After MBBS + state exam', '₹80,000–1.5 LPM (govt scale + NPA)'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'A Tamil Nadu government MBBS seat — especially at Madurai Medical College, Rajaji, Stanley, or Coimbatore Medical College — is highly valued: affordable at ~₹30,000/year tuition, with direct access to TN government medical service via TNMSC. A 2-year rural service bond is mandatory post-MBBS for government seats.',
      },
    },
    {
      id: 'bds',
      eyebrow: 'dentistry',
      title: 'BDS careers',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Duration', '5 years (4 + 1-year internship)'],
          ['After BDS', 'MDS (3 years) in Orthodontics, Periodontics, Endodontics, Oral Surgery'],
          ['Career options', 'Private practice, corporate dental chains, government dental service'],
          ['Earning potential', '₹40,000–1.5 LPM after MDS; own practice ₹1–5 LPM (location-dependent)'],
        ],
      },
      note: 'Reality check: the BDS market is saturated in cities but has high demand in rural areas — specialisation via MDS is strongly recommended.',
    },
    {
      id: 'ayush-careers',
      eyebrow: 'the growing alternative',
      title: 'AYUSH career snapshot',
      table: {
        columns: ['Degree', 'Focus', 'Career after graduation'],
        rows: [
          ['BAMS (Ayurveda)', 'Classical Ayurvedic medicine + modern basics', 'Private clinic, Ayurvedic pharma, wellness industry'],
          ['BHMS (Homeopathy)', 'Homeopathic medicine + modern basics', 'Private practice (strong in rural TN), teaching'],
          ['BUMS (Unani)', 'Unani medicine', 'Government dispensaries, private practice'],
        ],
      },
      note: 'See our dedicated AYUSH guide for BSMS (Siddha) — Tamil Nadu\'s own AYUSH speciality — and the full AIAPGET PG pathway.',
    },
  ],
  faqs,
  faqTitle: 'Medical careers — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Planning your path beyond the MBBS seat itself?',
  ctaSub: 'A counsellor can map the NEET PG timeline alongside your undergraduate years.',
});
