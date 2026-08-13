import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the real difference between Electrical (EEE) and Electronics & Communication (ECE)?',
    a: 'EEE deals with power — generation, transmission, motors, drives, and the grid itself. ECE deals with signals — communication systems, embedded devices, and semiconductors. Both share a first-year foundation, but EEE graduates lean toward power utilities, renewable energy, and heavy industry, while ECE leans toward telecom, chip design, and consumer electronics.',
  },
  {
    q: 'Is EEE a good branch if I want a PSU job through GATE?',
    a: 'Yes — EEE has one of the widest PSU footprints of any branch. NTPC, PowerGrid, BHEL, and every state electricity board recruit EEE graduates through GATE, and Tamil Nadu\'s own TANGEDCO regularly hires EEE engineers directly and via TNPSC exams, giving EEE graduates a genuine government-job pathway alongside the private-sector track.',
  },
];

export const eeePage = buildLeafPage({
  slug: 'engineering/branches/electrical-engineering',
  title: 'Electrical & Electronics Engineering (EEE): Branch Guide, Salary & Careers | T.I.M.E. Madurai',
  description: 'What EEE actually involves — power systems vs. electronics, core subjects, PSU/GATE pathway, realistic salaries, and who fits this branch.',
  canonical: '/engineering/branches/electrical-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Electrical & Electronics Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Electrical & Electronics Engineering (EEE)',
  heroSubtitle: 'The branch behind every power plant, motor, and grid — one of engineering\'s widest routes into both core-sector jobs and government PSUs via GATE.',
  stats: [
    { value: '₹8–18L', label: 'IIT/NIT core-sector range' },
    { value: '₹8–12L', label: 'PSU salary via GATE' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'EEE covers everything from power generation and transmission to motors, drives, and control systems — the physical infrastructure that keeps electricity moving, plus the electronics that manage it.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Power systems, electrical machines, control systems, power electronics, electromagnetic theory, circuit theory'],
          ['Core subjects', 'Electrical Machines, Power Systems, Control Systems, Power Electronics, Signals & Systems'],
          ['Skills required', 'Strong physics/maths foundation, comfort with circuit analysis, patience for lab-heavy coursework'],
          ['Career paths', 'Power Systems Engineer, Electrical Design Engineer, Control Systems Engineer, PSU Engineer (via GATE), Renewable Energy Engineer'],
          ['Top recruiters', 'NTPC, PowerGrid, BHEL, Siemens, ABB, Schneider Electric, TANGEDCO, Larsen & Toubro'],
          ['Starting salary', 'IITs/NITs (core): ₹8–18 LPA; PSU (GATE): ₹8–12 LPA; Private (top): ₹5–9 LPA; Private (average): ₹3–4.5 LPA'],
          ['Personality fit', 'Enjoys physics and circuits over pure software; comfortable with lab work and hands-on testing'],
          ['Future demand (2030)', 'Strong — India\'s renewable energy push and grid modernisation both need EEE graduates at scale'],
          ['Higher studies', 'M.Tech in Power Systems/Control (IITs), GATE → PSU, MS abroad in Power Electronics, MBA in Energy Management'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TANGEDCO (Tamil Nadu Generation and Distribution Corporation) recruits EEE graduates both directly and through TNPSC exams — a genuine, TN-specific government pathway that most other branches don\'t have. It runs parallel to, not instead of, the GATE-to-central-PSU route.',
      },
    },
  ],
  faqs,
  faqTitle: 'EEE — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Weighing EEE against ECE or Mechanical?',
  ctaSub: 'A counsellor can map the GATE/PSU route alongside private-sector options.',
});
