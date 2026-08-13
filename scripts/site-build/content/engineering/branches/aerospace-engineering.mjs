import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do I need to get into an IIT to have a real career in Aerospace?',
    a: 'It helps but isn\'t mandatory. ISRO and DRDO recruit through their own entrance exams (ICRB, DRDO-SET) and campus placements from a wider set of colleges, not just IITs. MIT Chennai (Anna University\'s Aeronautical programme) has a long-standing pipeline into both organisations.',
  },
  {
    q: 'Is Aerospace Engineering only about building aircraft?',
    a: 'No — the field spans aircraft, satellites, launch vehicles, drones, and defence missile systems. India\'s growing private space sector (Skyroot, Agnikul) and drone manufacturing industry have added commercial career paths alongside the traditional ISRO/DRDO/HAL government route.',
  },
];

export const aerospacePage = buildLeafPage({
  slug: 'engineering/branches/aerospace-engineering',
  title: 'Aerospace Engineering: Branch Guide, ISRO/DRDO Careers & Salary | T.I.M.E. Madurai',
  description: 'What Aerospace Engineering covers, the ISRO/DRDO/HAL career pathway, realistic salaries, and who fits this high-prestige, selective branch.',
  canonical: '/engineering/branches/aerospace-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Aerospace Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Aerospace Engineering',
  heroSubtitle: 'Aircraft, satellites, launch vehicles, and defence systems — a small-seat, high-prestige branch anchored by ISRO, DRDO, and HAL, with a growing private space sector alongside it.',
  stats: [
    { value: '₹10–20L', label: 'IIT core-sector range' },
    { value: 'ISRO / DRDO / HAL', label: 'Primary government recruiters' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Aerospace Engineering has far fewer seats than Mechanical or CSE, which keeps competition high — but it offers a uniquely direct pipeline into India\'s space and defence establishments.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Aerodynamics, propulsion, structures, flight mechanics, avionics, spacecraft design'],
          ['Core subjects', 'Aerodynamics, Aircraft Structures, Propulsion, Flight Mechanics, Avionics, Space Dynamics'],
          ['Skills required', 'Strong physics and maths, spatial reasoning, precision-mindedness, patience for a research-heavy field'],
          ['Career paths', 'Design Engineer, Structural Engineer, Propulsion Engineer, Avionics Engineer, Scientist/Engineer (ISRO/DRDO)'],
          ['Top recruiters', 'ISRO, DRDO, HAL, Boeing India, Airbus India, Skyroot Aerospace, Agnikul Cosmos, Tata Advanced Systems'],
          ['Starting salary', 'IITs (core): ₹10–20 LPA; ISRO/DRDO (Scientist/Engineer-SC): ₹8–10 LPA fixed + strong benefits; Private aerospace: ₹5–9 LPA'],
          ['Personality fit', 'Detail-oriented, comfortable with long R&D timelines, genuine interest in flight and space over a purely job-market calculation'],
          ['Future demand (2030)', 'Growing — India\'s private space sector and drone manufacturing are expanding hiring beyond the traditional government route'],
          ['Higher studies', 'M.Tech in Aerospace (IITs), MS abroad (USA/Europe strong for this field), PhD for R&D and academia'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'MIT Chennai (Anna University) runs one of India\'s oldest Aeronautical Engineering programmes and has a well-established alumni pipeline into ISRO, DRDO, and HAL — a strong in-state option for students not aiming purely at IIT-level cutoffs.',
      },
    },
  ],
  faqs,
  faqTitle: 'Aerospace Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Set on ISRO or DRDO as your career goal?',
  ctaSub: 'A counsellor can map the exact entrance-exam and college pathway that gets you there.',
});
