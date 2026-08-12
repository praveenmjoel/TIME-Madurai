import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Which engineering branch has the best 2030 outlook?',
    a: 'Depends what you mean by "best." CSE remains the broadest and highest-paying, but ECE is riding India\'s ₹76,000 crore semiconductor mission (85,000+ VLSI jobs expected), and Electrical Engineering is undergoing a genuine revival thanks to the EV transition and India\'s 500 GW renewable energy target by 2030. All three have strong multi-decade demand — the right choice depends on your aptitude, not just the hype cycle.',
  },
  {
    q: 'Do core-branch (Mechanical/Civil) graduates have a real path to good salaries?',
    a: 'Yes, primarily through GATE. PSUs like NTPC, BHEL, and Power Grid recruit Mechanical, Electrical, and Civil graduates via GATE at packages equivalent to ₹8–12 LPA plus job security and benefits — often preferred over private-sector offers by core-branch graduates. GATE score matters more for core branches than for CSE.',
  },
];

export const engineeringCareersPage = buildLeafPage({
  slug: 'engineering/careers',
  title: 'Engineering Careers: Branch-Wise Outlook & Emerging Tech Roles (2026) | T.I.M.E. Madurai',
  description: 'What each engineering branch actually leads to — top employers, entry salaries at IIT/NIT level, and the highest-growth emerging tech careers through 2030.',
  canonical: '/engineering/careers/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Careers' }],
  eyebrow: 'engineering · outcomes',
  heroTitle: 'Where Each Engineering Branch Actually Leads',
  heroSubtitle: 'Branch choice shapes your career more than college prestige does, past a certain point. Here\'s the honest outlook, branch by branch — plus where the emerging-tech growth actually is.',
  stats: [
    { value: '₹12–50L', label: 'CSE entry salary at IITs' },
    { value: '85,000+', label: 'New VLSI/chip-design jobs by 2030' },
    { value: '500 GW', label: 'India\'s 2030 renewable energy target' },
  ],
  toc: [
    { id: 'core', label: 'Core Branches' },
    { id: 'emerging', label: 'Emerging Tech' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Only about half of JEE aspirants end up at an IIT or NIT, but every branch below has a genuine, well-paying career track — the outcomes differ far more by branch than most students expect going in.',
  sections: [
    {
      id: 'core',
      eyebrow: 'branch by branch',
      title: 'Core branches — employers and entry salary',
      table: {
        columns: ['Branch', 'Top employers', 'Entry salary (IIT / NIT)', '5-year growth area'],
        rows: [
          ['Computer Science', 'Google, Microsoft, Amazon, Infosys, TCS', '₹12–50L / ₹6–12L', 'AI/ML, Cloud, Cybersecurity'],
          ['Electronics &amp; Comm.', 'Qualcomm, Intel, Samsung, ISRO, DRDO', '₹8–30L / ₹5–10L', 'VLSI Design, 5G/6G, Semiconductors'],
          ['Electrical Engineering', 'L&amp;T, Siemens, ABB, Power Grid, BHEL', '₹7–20L / ₹4–8L', 'EV tech, Smart Grids, Solar/Wind'],
          ['Mechanical Engineering', 'Tata Motors, ISRO, Bosch, automotive sector', '₹5–15L / ₹3.5–7L', 'EV manufacturing, Robotics, Aerospace'],
          ['Chemical Engineering', 'Reliance, ONGC, HPCL, pharma companies', '₹6–18L / ₹4–7L', 'Green Hydrogen, Specialty Chemicals'],
          ['Civil Engineering', 'L&amp;T, DLF, NHAI, PWD, infrastructure firms', '₹4–12L / ₹3–6L', 'Smart Cities, Water Treatment'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu is India\'s #1 state for engineering employment. Chennai (automobile, IT, aerospace), Coimbatore (precision engineering, startups), and Hosur (EV manufacturing — Ola Electric, Tata EV) are the strongest clusters. NIT Trichy graduates carry a near-100% placement record across core and IT sectors.',
      },
    },
    {
      id: 'emerging',
      eyebrow: 'high growth, 2025–2030',
      title: 'Where the fastest-growing demand actually is',
      table: {
        columns: ['Career field', 'Entry path', 'Salary range (India)'],
        rows: [
          ['AI / ML Engineer', 'CSE/ECE/Maths BTech + specialisation', '₹12–80 LPA'],
          ['Data Scientist', 'Any engineering + statistics skills', '₹8–40 LPA'],
          ['Cloud Architect (AWS/Azure/GCP)', 'Any engineering + cloud certifications', '₹15–60 LPA'],
          ['VLSI Design Engineer', 'ECE + VLSI tools (Cadence, Synopsys)', '₹10–40 LPA'],
          ['EV / Battery Technology Engineer', 'EE/ME with EV specialisation', '₹8–30 LPA'],
          ['Cybersecurity Analyst', 'CSE/ECE + certifications (CEH, CISSP)', '₹8–35 LPA'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'Engineering careers — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Want a realistic read on your branch options?',
  ctaSub: 'A counsellor can map your interests to the branches that actually fit.',
});
