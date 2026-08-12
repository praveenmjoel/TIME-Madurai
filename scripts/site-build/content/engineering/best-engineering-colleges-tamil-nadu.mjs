import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the difference between "Government," "Govt-Aided," and "Self-Financing" colleges in TNEA?',
    a: 'Government colleges (CEG, MIT, GCT) are owned and fully funded by the Tamil Nadu government. Govt-Aided colleges (PSG, CIT, TCE, SVCE) are privately managed but substantially government-funded, which keeps fees low. Self-Financing colleges (KCT, SKCET) receive no government funding and charge higher fees, though several have strong industry connections.',
  },
  {
    q: 'Is CEG Guindy better than NIT Trichy?',
    a: 'Not for most branches, no — NIT Trichy is a Central Institute of National Importance with a bigger national brand, GATE-linked PSU access, and stronger placement ecosystem. But CEG (Anna University\'s main campus) is genuinely the best TNEA-only option, and for students who don\'t clear JEE Main comfortably, it\'s the strongest realistic target inside the Tamil Nadu state system.',
  },
  {
    q: 'Can I get NIT Trichy through TNEA?',
    a: 'No. NIT Trichy, all IITs, IIITs, and GFTIs are Central Government institutions admitted only through JoSAA using JEE Main/Advanced scores. TNEA covers only Anna University-affiliated Tamil Nadu state colleges — there is no TNEA route into any NIT.',
  },
];

export const bestTNCollegesPage = buildLeafPage({
  slug: 'engineering/best-engineering-colleges-tamil-nadu',
  title: 'Best Engineering Colleges in Tamil Nadu 2026: TNEA Guide & Cutoffs | T.I.M.E. Madurai',
  description: 'The strongest TNEA-admitted engineering colleges in Tamil Nadu — CEG Guindy, PSG Tech, TCE Madurai and more — with the TNEA cutoff formula and worked examples.',
  canonical: '/engineering/best-engineering-colleges-tamil-nadu/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Best Colleges in Tamil Nadu' }],
  eyebrow: 'engineering · tamil nadu focus',
  heroTitle: 'The Best Engineering Colleges in Tamil Nadu',
  heroSubtitle: 'No entrance exam needed — TNEA runs purely on Class 12 board marks. Here\'s the cutoff formula, and the state\'s strongest government, aided, and self-financing colleges.',
  stats: [
    { value: '200', label: 'TNEA cutoff, out of' },
    { value: '196+', label: 'CEG CSE cutoff (OC)' },
    { value: '69%', label: 'Total TN reservation in TNEA' },
  ],
  toc: [
    { id: 'formula', label: 'The Cutoff Formula' },
    { id: 'colleges', label: 'Top Colleges' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'TNEA is the centralised admissions process for every government, government-aided, and self-financing engineering college affiliated to Anna University. Unlike every other exam in this hub, TNEA has no entrance test at all — admission runs purely on your Class 12 Physics, Chemistry, and Maths marks.',
  sections: [
    {
      id: 'formula',
      eyebrow: 'pure board-marks admission',
      title: 'The TNEA cutoff formula',
      intro: '<strong>Cut-off = Maths marks + (Physics marks ÷ 2) + (Chemistry marks ÷ 2)</strong>, out of a maximum 200.',
      table: {
        columns: ['Maths', 'Physics', 'Chemistry', 'TNEA cutoff', 'Realistic target'],
        rows: [
          ['200', '200', '200', '200.0', 'CEG Guindy CSE/ECE, MIT Chennai CSE'],
          ['197', '192', '188', '197.0', 'CEG (most branches), PSG Tech (aided)'],
          ['185', '178', '170', '185.0', 'Govt colleges (Coimbatore, Salem, Trichy, Madurai)'],
          ['170', '162', '155', '170.0', 'Aided colleges — TCE Madurai, GCE Tirunelveli, Mepco'],
          ['150', '140', '135', '150.0', 'Mid-tier self-financing colleges across TN'],
        ],
      },
      note: 'NIT Trichy, IITs, IIITs, and GFTIs are NOT part of TNEA — they use JoSAA and JEE Main/Advanced scores exclusively.',
    },
    {
      id: 'colleges',
      eyebrow: 'ranked by reputation',
      title: 'Tamil Nadu\'s strongest TNEA colleges',
      table: {
        columns: ['College', 'Location', 'Type', 'Strongest branches'],
        rows: [
          ['College of Engineering, Guindy (CEG)', 'Chennai', 'Government', 'CSE, ECE, EE, Mech, Civil — highest cutoffs in TN'],
          ['Madras Institute of Technology (MIT)', 'Chennai', 'Government', 'Aeronautical, CSE, Automobile'],
          ['PSG College of Technology', 'Coimbatore', 'Govt-Aided', 'CSE, ECE, Mechanical, Mechatronics'],
          ['Coimbatore Institute of Technology (CIT)', 'Coimbatore', 'Govt-Aided', 'CSE, ECE, Mechanical, Civil'],
          ['Government College of Technology (GCT)', 'Coimbatore', 'Government', 'CSE, ECE, Mechanical, Civil'],
          ['Thiagarajar College of Engineering (TCE)', 'Madurai', 'Govt-Aided', 'CSE, ECE, Mechanical, Civil — best in Madurai region'],
          ['Sri Venkateswara College (SVCE)', 'Sriperumbudur', 'Govt-Aided', 'CSE, ECE, Mechanical, IT'],
          ['Kumaraguru College of Technology (KCT)', 'Coimbatore', 'Self-Financing', 'CSE, ECE, Mechanical, Mechatronics'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'CEG (College of Engineering, Guindy) — Anna University\'s main campus and the oldest engineering college in Asia — is the gold standard for TNEA. CSE there typically needs a cutoff above 197–198 (OC). PSG Tech Coimbatore is the top aided college and needs 195+ for CSE.',
      },
    },
  ],
  faqs,
  faqTitle: 'TNEA colleges — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Not sure if TNEA or JEE Main should be your primary focus?',
  ctaSub: 'Most TN students should pursue both — a counsellor can help you split your effort correctly.',
});
