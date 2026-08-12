import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why does the guide emphasise "cost-of-living-adjusted" income?',
    a: 'Because headline CTC alone is misleading across cities. ₹12 LPA in Coimbatore, Madurai, or Tiruchirappalli buys noticeably more than ₹18 LPA in Mumbai once housing and living costs are factored in — always compare offers on a real, adjusted basis, not just the number on the offer letter.',
  },
  {
    q: 'Which path has the highest job security on this list?',
    a: 'Government MBBS → MD Medicine and ISRO Scientist roles both carry "Very High" job security in addition to strong pay — a useful reminder that the highest-paying path (FAANG software roles) isn\'t always the most secure one, and vice versa.',
  },
];

export const salaryGuidePage = buildLeafPage({
  slug: 'careers/salary-guide-2025',
  title: '2025 Salary Guide: Real Career Earnings by Path | T.I.M.E. Madurai',
  description: 'Honest 5-year-experience compensation data across engineering, medical, finance, defence, and government careers — not inflated placement-brochure numbers.',
  canonical: '/careers/salary-guide-2025/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: '2025 Salary Guide' }],
  eyebrow: 'careers · the honest numbers',
  heroTitle: 'The 2025 Salary Reality Check',
  heroSubtitle: 'What different career paths actually pay at 5 years of experience — grounded in 2025 market data, not optimistic placement-brochure figures.',
  stats: [],
  toc: [
    { id: 'table', label: 'Salary by Path' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Always read these figures alongside cost of living — a lower headline number in a Tier-2 Tamil Nadu city can represent more real purchasing power than a higher one in Mumbai or Delhi.',
  sections: [
    {
      id: 'table',
      title: 'Career at 5 years experience',
      table: {
        columns: ['Path', 'Role example', 'Approx. CTC (India)', 'Job security'],
        rows: [
          ['IIT CSE grad', 'Senior SDE at a top tech company', '₹40–80 LPA', 'High'],
          ['NIT ECE grad', 'VLSI Design Engineer', '₹12–25 LPA', 'High'],
          ['Govt MBBS → MD Medicine', 'Resident/Consultant, govt + private OPD', '₹18–36 LPA combined', 'Very High'],
          ['BDS → MDS Orthodontics', 'Own clinic, 50–70 patients/month', '₹20–60 LPA', 'High'],
          ['B.Sc. Nursing → ICU Nurse (Gulf)', 'Staff Nurse, UAE/Saudi hospital', '₹15–25 LPA (tax-free equiv.)', 'High'],
          ['BTech + CA', 'CFO track, mid-cap company', '₹25–60 LPA', 'High'],
          ['B.P.T. → M.Sc. (PT) → Canada PR', 'Registered Physiotherapist, Canada', 'CAD 70,000–95,000 (₹45–60 LPA equiv.)', 'Very High'],
          ['IIT Maths + IIM → Consulting', 'Management Consultant', '₹30–60 LPA (Year 1)', 'High'],
          ['IAS (after UPSC)', 'District Collector, TN cadre', '₹12–20 LPA + perks + authority', 'Very High'],
          ['ISRO Scientist (after GATE)', 'Scientist/Engineer-SC → SD at 5 yrs', '₹9–14 LPA + housing + research environment', 'Very High'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu\'s cost of living is significantly lower than Mumbai or Delhi. A ₹12 LPA salary in Coimbatore, Madurai, or Tiruchirappalli has far higher purchasing power than ₹18 LPA in Mumbai. When comparing offers, always think in cost-of-living-adjusted real income, not the headline CTC.',
      },
    },
  ],
  faqs,
  faqTitle: 'Salary guide — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Want to see how your target path compares over a full decade?',
  ctaSub: 'A counsellor can walk through longer-term trajectories, not just entry pay.',
});
