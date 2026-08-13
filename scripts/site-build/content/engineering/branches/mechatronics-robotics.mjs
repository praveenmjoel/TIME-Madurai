import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Mechatronics just Mechanical Engineering with extra electronics?',
    a: 'That\'s a fair first approximation, but Mechatronics is a genuinely integrated discipline — combining mechanical design, electronics, control systems, and programming into a single skill set specifically aimed at automation and robotics, rather than treating them as separate subjects bolted together.',
  },
  {
    q: 'Does a Mechatronics degree limit me to robotics jobs specifically?',
    a: 'No — the same skill set is directly relevant to industrial automation, manufacturing (Industry 4.0), and increasingly EV powertrain and battery-management-system roles, since all of these need engineers comfortable working across mechanical, electrical, and software layers at once.',
  },
];

export const mechatronicsPage = buildLeafPage({
  slug: 'engineering/branches/mechatronics-robotics',
  title: 'Mechatronics & Robotics Engineering: Branch Guide & Careers | T.I.M.E. Madurai',
  description: 'What Mechatronics & Robotics Engineering involves, industrial automation career paths, realistic salaries, and who fits this interdisciplinary branch.',
  canonical: '/engineering/branches/mechatronics-robotics/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Mechatronics & Robotics' }],
  eyebrow: 'branch profile',
  heroTitle: 'Mechatronics & Robotics Engineering',
  heroSubtitle: 'Mechanical design, electronics, and control systems combined into one discipline — built for automation, robotics, and Industry 4.0 manufacturing.',
  stats: [
    { value: '₹4–9L', label: 'Fresher salary range' },
    { value: 'Automation-heavy', label: 'Growing manufacturing demand' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Mechatronics trains engineers to work across mechanical, electrical, and software layers at once — exactly the combination that automated factories and robotic systems need.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Robotics, control systems, sensors & actuators, PLC programming, mechanical design, embedded systems'],
          ['Core subjects', 'Control Systems, Robotics, Industrial Automation, Sensors & Actuators, Microcontrollers'],
          ['Skills required', 'Comfort working across mechanical, electrical, and programming domains simultaneously; systems thinking'],
          ['Career paths', 'Automation Engineer, Robotics Engineer, Controls Engineer, Industry 4.0/Smart Manufacturing Engineer'],
          ['Top recruiters', 'Bosch, Siemens, ABB, L&T, Tata Motors (EV division), automation system integrators'],
          ['Starting salary', 'Top institutes: ₹6–9 LPA; Average private colleges: ₹3.5–5 LPA'],
          ['Personality fit', 'Enjoys hands-on building and programming equally; drawn to robotics and automation specifically, not just mechanical design'],
          ['Future demand (2030)', 'Strong — India\'s manufacturing automation push and EV transition both need mechatronics-trained engineers'],
          ['Higher studies', 'M.Tech in Robotics/Mechatronics (IITs), MS abroad (strong programmes in Germany, USA), specialised certifications in PLC/SCADA'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu\'s automotive manufacturing belt around Chennai (Ford, Hyundai, Renault-Nissan, BMW) and Coimbatore\'s industrial automation ecosystem give Mechatronics graduates a strong in-state placement base, particularly for automation and robotics roles on factory floors.',
      },
    },
  ],
  faqs,
  faqTitle: 'Mechatronics & Robotics — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Torn between Mechanical, ECE, and Mechatronics?',
  ctaSub: 'A counsellor can help you see how the three actually differ in practice.',
});
