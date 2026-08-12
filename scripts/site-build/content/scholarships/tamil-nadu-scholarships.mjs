import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Can I stack Pudhumai Penn with a central scholarship?',
    a: 'Yes — students who qualify for both Pudhumai Penn (₹1,000/month, for girls from TN government schools) and a central scheme like AICTE Pragati can claim both, since they\'re separate schemes with different eligibility criteria and funding sources.',
  },
  {
    q: 'Do I need to apply separately for the government college fee concession?',
    a: 'No — fee concession at government engineering colleges for SC/ST/BC/MBC students is applied automatically at admission, based on your category certificate verification at the college. There\'s no separate application process for this specific benefit.',
  },
];

export const tnScholarshipsPage = buildLeafPage({
  slug: 'scholarships/tamil-nadu-scholarships',
  title: 'Tamil Nadu State Scholarships for Students 2026 | T.I.M.E. Madurai',
  description: 'Every major Tamil Nadu state scholarship — Chief Minister\'s Merit Scholarship, Adi Dravidar Welfare, BC/MBC Welfare, Pudhumai Penn, and government college fee concessions.',
  canonical: '/scholarships/tamil-nadu-scholarships/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Scholarships', href: '/scholarships/' }, { label: 'Tamil Nadu Scholarships' }],
  eyebrow: 'scholarships · tamil nadu',
  heroTitle: 'Tamil Nadu State Scholarships',
  heroSubtitle: 'State-level schemes that stack on top of central scholarships — several TN students qualify for more than one at once.',
  stats: [ { value: '₹1,000/mo', label: 'Pudhumai Penn stipend' }, { value: '2023', label: 'Pudhumai Penn launch year' } ],
  toc: [
    { id: 'schemes', label: 'The Schemes' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'These schemes are administered by TN state departments and are worth checking alongside — not instead of — the central schemes covered on our Central Government Scholarships page.',
  sections: [
    {
      id: 'schemes',
      title: 'Tamil Nadu scholarship schemes',
      table: {
        columns: ['Scholarship', 'Eligibility', 'Amount/benefit'],
        rows: [
          ['CM\'s Merit Scholarship (Kalvi Thittam)', 'TN students, merit-based, various income slabs', '₹5,000–25,000 one-time or annual'],
          ['Adi Dravidar Welfare Scholarship', 'SC/ST TN students, any UG programme', 'Maintenance allowance ₹1,000–3,000/mo for hostellers, stacks with central scholarship'],
          ['BC/MBC Welfare Scholarship', 'BC, MBC, BCM, DNC TN students; income criteria apply', 'Annual maintenance allowance, higher for professional courses'],
          ['Fee Concession — Govt Colleges', 'All govt college students, enhanced for SC/ST/BC/MBC', 'Near-total waiver for SC/ST; 50–75% for BC/MBC at aided colleges — automatic, no separate application'],
          ['Pudhumai Penn Scholarship', 'TN girls from govt schools, in college', '₹1,000/month stipend'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Pudhumai Penn — launched in 2023 — is available to every girl who studied in a TN government school and is now pursuing any UG degree. It can be claimed alongside AICTE Pragati if you qualify for both. Check pudhumaipennn.tn.gov.in and apply through your school at Class 12, or through your college if you missed that window.',
      },
    },
  ],
  faqs,
  faqTitle: 'Tamil Nadu scholarships — quick answers',
  backLink: { label: 'the Scholarships hub', href: '/scholarships/' },
  ctaHeading: 'Want a full list of what you personally qualify for?',
  ctaSub: 'A counsellor can cross-check your category against every TN and central scheme.',
});
