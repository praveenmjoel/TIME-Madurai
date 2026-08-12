import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the difference between "government quota" and "management quota" seats at private colleges?',
    a: 'Roughly 65% of private-college seats in Tamil Nadu are filled under government-quota counselling at regulated, much lower fees (₹1.5–3 lakh/year); the remaining seats are management quota, filled directly by the college at its own — much higher — fee (₹7–15 lakh/year), with a further NRI-quota slice at even higher, dollar-linked fees.',
  },
  {
    q: 'Is a ₹60–80 lakh MBBS loan realistic to repay?',
    a: 'Run the numbers before committing. A ₹60 lakh loan at 11% over 15 years works out to roughly ₹68,000/month EMI — more than most newly qualified doctors earn during their internship and subsequent PG-preparation years. Private MBBS via management quota needs careful family-level financial planning, not admission-day optimism.',
  },
];

export const privateCollegesTNPage = buildLeafPage({
  slug: 'medical/private-medical-colleges-tamil-nadu',
  title: 'Private Medical Colleges in Tamil Nadu: Fees & Cutoffs 2024 | T.I.M.E. Madurai',
  description: 'Every major private medical college in Tamil Nadu — Sri Ramachandra, SRM, Saveetha, Chettinad and more — with government-quota vs. management-quota fees and cutoffs.',
  canonical: '/medical/private-medical-colleges-tamil-nadu/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'Private Colleges in TN' }],
  eyebrow: 'medical · tamil nadu',
  heroTitle: 'Private Medical Colleges in Tamil Nadu',
  heroSubtitle: 'Roughly 46 private and deemed medical colleges in Tamil Nadu — here\'s what they actually cost under each quota.',
  stats: [
    { value: '~46', label: 'Private medical colleges in TN' },
    { value: '~4,550', label: 'Private/deemed MBBS seats' },
    { value: '₹12–25L/yr', label: 'Management quota fee range' },
  ],
  toc: [
    { id: 'colleges', label: 'Top Colleges' },
    { id: 'financing', label: 'The Financial Reality' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Private medical colleges admit through TN state counselling for merit/government-quota seats and directly through management/NRI quota, where fees rise sharply.',
  sections: [
    {
      id: 'colleges',
      eyebrow: 'the landscape',
      title: 'Tamil Nadu\'s major private medical colleges',
      table: {
        columns: ['College', 'Location', 'Approx. govt-quota closing NEET', 'Management quota fee'],
        rows: [
          ['Sri Ramachandra Institute (SRIHER)', 'Chennai', '~610–630', '₹15–20 lakh/yr'],
          ['SRM Medical College', 'Kattankulathur', '~595–618', '₹15–20 lakh/yr'],
          ['Chettinad Health City', 'Kelambakkam', '~600–622', '₹12–16 lakh/yr'],
          ['Saveetha Medical College', 'Chennai', '~590–615', '₹15–18 lakh/yr'],
          ['Vinayaka Mission Medical College', 'Salem', '~570–595', '₹8–12 lakh/yr'],
          ['ACS Medical College', 'Chennai', '~565–588', '₹8–12 lakh/yr'],
          ['Meenakshi Medical College', 'Kancheepuram', '~558–582', '₹8–11 lakh/yr'],
        ],
      },
      note: 'Figures are 2024-cycle approximate. Verify current fees directly with each college — NMC regulates fee slabs but management-quota fees can vary meaningfully by cycle.',
    },
    {
      id: 'financing',
      eyebrow: 'the number that matters most',
      title: 'What a private seat actually costs over 5.5 years',
      table: {
        columns: ['Quota type', 'Annual fee', 'Total cost (5.5 yrs)'],
        rows: [
          ['Government quota (private college)', '₹1.5–3 lakh', '~₹8–16 lakh'],
          ['Management quota', '₹7–15 lakh', '~₹38–82 lakh'],
          ['NRI quota', 'USD-linked, highest tier', 'Highest — verify per college'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common mistake',
        text: 'Families commit to a management-quota seat on admission day without running the EMI math. A ₹60–80 lakh loan can mean a monthly EMI well above what a newly qualified MBBS graduate earns during internship — see our Education Loans hub for the full financing breakdown before signing anything.',
      },
    },
  ],
  faqs,
  faqTitle: 'Private medical colleges — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Weighing a private seat against a drop year for government?',
  ctaSub: 'A fifteen-minute conversation can save a decade of loan repayment.',
});
