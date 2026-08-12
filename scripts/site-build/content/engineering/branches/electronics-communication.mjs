import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is ECE a safer choice than CSE?',
    a: 'In one specific way, yes — ECE graduates have two career tracks instead of one. Core hardware/VLSI roles at semiconductor companies pay well but need strong fundamentals; software roles at IT companies are also open to ECE graduates, who get hired by Infosys, TCS, and Wipro just like CSE students. Having both options is a genuine hedge that CSE-only students don\'t have.',
  },
  {
    q: 'Why is ECE getting more attractive right now specifically?',
    a: 'India is investing ₹76,000 crore in semiconductor manufacturing under the India Semiconductor Mission, with Micron, Tata Semiconductor, and CG Power committing to Indian fabs. This is expected to create 85,000+ VLSI/chip-design jobs over the next decade, on top of steady 5G/6G rollout demand for RF engineers.',
  },
];

export const ecePage = buildLeafPage({
  slug: 'engineering/branches/electronics-communication',
  title: 'Electronics & Communication Engineering (ECE) Branch Guide | T.I.M.E. Madurai',
  description: 'What ECE involves, career paths in VLSI and telecom, real starting salaries, and why India\'s semiconductor mission makes this branch increasingly valuable.',
  canonical: '/engineering/branches/electronics-communication/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Electronics & Communication' }],
  eyebrow: 'branch profile',
  heroTitle: 'Electronics & Communication Engineering (ECE)',
  heroSubtitle: 'The bridge between hardware and software — designing the chips, sensors, and communication systems behind everything from smartphones to satellites.',
  stats: [
    { value: '₹76,000 Cr', label: 'India semiconductor mission investment' },
    { value: '85,000+', label: 'New VLSI jobs projected by 2030' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'India\'s semiconductor ambitions make ECE one of the most strategically important branches for the next decade — the discipline behind chip design, telecom infrastructure, and embedded systems.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Electronic circuits, signals &amp; systems, communication theory, microprocessors, VLSI design, embedded systems'],
          ['Skills required', 'Interest in circuits/hardware, Fourier/Laplace transforms, hands-on lab work'],
          ['Career paths', 'VLSI Design Engineer, Embedded Systems Engineer, RF Engineer, Telecom Engineer, Chip Design Engineer'],
          ['Top recruiters', 'Qualcomm, Intel, Texas Instruments, NVIDIA, Samsung, ISRO, DRDO, Airtel, Jio'],
          ['Starting salary', 'IITs: ₹15–35 LPA (VLSI can exceed ₹40L); NITs: ₹8–18 LPA; Private (top): ₹5–10 LPA'],
          ['Personality fit', 'Enjoys tinkering with electronics, Arduino/Raspberry Pi projects, physics-oriented thinking'],
          ['Higher studies', 'M.Tech in VLSI/Communication (IITs/NITs), MS in EE abroad, PhD in Electronics'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'NIT Trichy ECE has one of India\'s best placement records for VLSI and semiconductor roles — Qualcomm and Texas Instruments visit every placement season, often hiring at ₹30+ LPA. For TN students in the ECE stream, NIT Trichy ECE is arguably a stronger outcome than CSE at a mid-tier college.',
      },
    },
  ],
  faqs,
  faqTitle: 'ECE — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Curious whether ECE fits your interests?',
  ctaSub: 'Talk to a counsellor about the hardware-vs-software career split ECE offers.',
});
