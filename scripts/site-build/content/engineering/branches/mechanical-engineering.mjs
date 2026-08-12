import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Mechanical Engineering still worth it with EVs disrupting automotive?',
    a: 'The traditional automotive-only view undersells it. Traditional roles are shifting, but EV design, aerospace, defence manufacturing, and renewable-energy mechanical roles are all growing strongly. The branch remains the broadest in engineering — its fundamentals apply to nearly any industry with moving parts, heat transfer, or manufactured products.',
  },
  {
    q: 'Why does college quality matter more for Mechanical than for CSE?',
    a: 'Because the salary spread is wider. Mechanical salaries at average private colleges can be very low (₹2.5–3.5 LPA), while a top NIT or IIT Mechanical seat has excellent prospects. If you\'re at a private college specifically, pairing your degree with strong GATE preparation is a genuinely important add-on, not optional polish.',
  },
];

export const mechanicalPage = buildLeafPage({
  slug: 'engineering/branches/mechanical-engineering',
  title: 'Mechanical Engineering Branch Guide: Careers, Salary & GATE Path | T.I.M.E. Madurai',
  description: 'What Mechanical Engineering involves, realistic salaries by college tier, and why this remains engineering\'s broadest and most versatile branch.',
  canonical: '/engineering/branches/mechanical-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Mechanical Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Mechanical Engineering',
  heroSubtitle: 'The oldest and broadest engineering branch — automobile design, aerospace structures, manufacturing, thermal systems, and robotics all in one degree.',
  stats: [
    { value: '₹12–30L', label: 'IIT R&amp;D/design salary range' },
    { value: '₹8–12L', label: 'PSU salary via GATE' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'A mechanical engineer\'s fundamental skills apply across almost every industry that has moving parts, heat transfer, or manufactured products — which is nearly every industry on Earth.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Engineering mechanics, thermodynamics, fluid mechanics, manufacturing, machine design, heat transfer'],
          ['Skills required', 'Physics-oriented mind, spatial/3D visualisation, hands-on workshop skills'],
          ['Career paths', 'Design Engineer, Manufacturing Engineer, Thermal Engineer, Automotive Engineer, GATE → PSU'],
          ['Top recruiters', 'Tata Motors, Mahindra, L&amp;T, Caterpillar, GE, Bosch, BHEL, HAL, ISRO, Indian Railways'],
          ['Starting salary', 'IITs: ₹12–30 LPA (R&amp;D/design); NITs: ₹6–14 LPA; PSU (GATE): ₹8–12 LPA; Private: ₹3.5–6 LPA'],
          ['Personality fit', 'Enjoys building things, automotive/aerospace interest, physics over pure coding'],
          ['Higher studies', 'M.Tech in Thermal/Manufacturing/Robotics (IITs), GATE → PSU, MS abroad, MBA in Operations'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Coimbatore (engineering goods, pumps, motors) and Chennai (Ford, Hyundai, BMW, Ashok Leyland, TVS) are two of Tamil Nadu\'s strongest manufacturing clusters. PSG Tech and GCT Coimbatore\'s Mechanical programmes have excellent industry tie-ups with both.',
      },
    },
  ],
  faqs,
  faqTitle: 'Mechanical Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Considering Mechanical but weighing the GATE path?',
  ctaSub: 'A counsellor can map out the PSU route alongside your core degree.',
});
