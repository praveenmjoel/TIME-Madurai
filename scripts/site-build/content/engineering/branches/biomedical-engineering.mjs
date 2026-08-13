import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Biomedical Engineering the same as becoming a doctor?',
    a: 'No — Biomedical Engineers design and build the equipment doctors use (MRI machines, prosthetics, pacemakers, diagnostic devices), rather than treating patients directly. It\'s a genuine engineering degree, not a backdoor into medicine, and doesn\'t require NEET.',
  },
  {
    q: 'How\'s the job market for Biomedical Engineering in India?',
    a: 'Narrower than mainstream branches like Mechanical or CSE — India\'s medical device manufacturing industry is smaller than its IT or core-engineering sectors. Strong opportunities exist at device makers and hospitals\' biomedical maintenance departments, but students should go in with realistic expectations and, ideally, a plan for higher studies to widen options.',
  },
];

export const biomedicalPage = buildLeafPage({
  slug: 'engineering/branches/biomedical-engineering',
  title: 'Biomedical Engineering: Branch Guide, Careers & Salary | T.I.M.E. Madurai',
  description: 'What Biomedical Engineering involves, realistic career paths in medical devices and hospital equipment, salaries, and who fits this niche branch.',
  canonical: '/engineering/branches/biomedical-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Biomedical Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Biomedical Engineering',
  heroSubtitle: 'The engineering behind MRI machines, pacemakers, prosthetics, and diagnostic devices — a narrower but genuinely distinct branch from medicine itself.',
  stats: [
    { value: '₹3.5–7L', label: 'Fresher salary range' },
    { value: 'Medical devices + hospital biomedical depts.', label: 'Two main employer categories' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Biomedical Engineers sit at the intersection of engineering and healthcare — designing, building, and maintaining the equipment hospitals and diagnostic labs depend on.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Human physiology, medical imaging, biomaterials, medical instrumentation, signal processing'],
          ['Core subjects', 'Anatomy & Physiology for Engineers, Medical Instrumentation, Biomaterials, Medical Imaging Systems'],
          ['Skills required', 'Interest in both biology and electronics/instrumentation, precision-mindedness, regulatory awareness'],
          ['Career paths', 'Biomedical Equipment Engineer, R&D Engineer (device design), Clinical Engineer, Regulatory Affairs Associate'],
          ['Top recruiters', 'GE Healthcare, Philips Healthcare, Siemens Healthineers, Trivitron Healthcare, Apollo Hospitals biomedical division'],
          ['Starting salary', 'Top institutes: ₹5–7 LPA; Average private colleges: ₹3–4.5 LPA; hospital biomedical roles often start lower but offer stability'],
          ['Personality fit', 'Genuine interest in both healthcare and hardware; comfortable in a smaller, more specialised job market than mainstream branches'],
          ['Future demand (2030)', 'Moderate growth as India\'s medical device manufacturing (PLI-scheme-backed) expands domestically'],
          ['Higher studies', 'M.Tech/MS in Biomedical Engineering, MBA in Healthcare Management, PhD for device R&D roles'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Trivitron Healthcare, one of India\'s largest medical device manufacturers, is headquartered in Chennai — giving Tamil Nadu Biomedical graduates a genuine in-state employer beyond the usual multinational device companies.',
      },
    },
  ],
  faqs,
  faqTitle: 'Biomedical Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Interested in healthcare but not the NEET route?',
  ctaSub: 'A counsellor can walk through where Biomedical Engineering realistically leads.',
});
