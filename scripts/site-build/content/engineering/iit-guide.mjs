import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Are the newer IITs (2008 onwards) worth attending?',
    a: 'Yes, with a caveat — placements and infrastructure are still maturing at the 16 IITs founded since 2008 compared to the original seven. But the rule of thumb holds: a new IIT\'s CSE or EE branch is still a stronger practical choice than a non-CS branch at an old IIT. A JEE Advanced rank of 8,000–15,000 typically falls in the new-IIT zone for non-CS branches.',
  },
  {
    q: 'Why is IIT Madras the top choice for Tamil Nadu students specifically?',
    a: 'Beyond being India\'s #1 ranked institution (NIRF 2024), IIT Madras is physically in Chennai — meaning TN students can visit family easily, tap into the strongest regional alumni network of any IIT, and sit next to India\'s largest university tech park (IITM Research Park). It also has the largest number of TN students among all IITs.',
  },
  {
    q: 'Do SC/ST students really pay zero IIT tuition?',
    a: 'Yes — 100% tuition fee waiver at every IIT for SC/ST students, who pay only mess and hostel charges (roughly ₹1.2–1.5 lakh/year). Combined with the central Post-Matric Scholarship for maintenance, this makes an IIT education close to free for many families. See our Scholarships hub for the full breakdown.',
  },
];

export const iitGuidePage = buildLeafPage({
  slug: 'engineering/iit-guide',
  title: 'IIT Guide 2026: All 23 IITs, Fees, Placements & Branch Cutoffs | T.I.M.E. Madurai',
  description: 'Every IIT compared — the original seven vs. the sixteen newer campuses, fee structure, average placements, and which branches to target at each, with a Tamil Nadu lens.',
  canonical: '/engineering/iit-guide/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'IIT Guide' }],
  eyebrow: 'engineering · iit guide',
  heroTitle: 'The Complete IIT Guide',
  heroSubtitle: '23 institutes, one brand, wildly different realities. Here\'s what actually separates them — fees, placements, and which branch to target where.',
  stats: [
    { value: '23', label: 'Total IITs' },
    { value: '<1%', label: 'JEE Advanced acceptance rate' },
    { value: '₹2L/yr', label: 'Standard tuition (Gen/OBC)' },
    { value: '0', label: 'Tuition for SC/ST/PwD' },
  ],
  toc: [
    { id: 'old-vs-new', label: 'Old vs. New IITs' },
    { id: 'flagship', label: 'IIT Madras Deep-Dive' },
    { id: 'other-old', label: 'The Other Old IITs' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'IITs are Institutes of National Importance, funded entirely by the Central Government and created as India\'s answer to MIT and Caltech. What sets them apart isn\'t just teaching quality — it\'s the calibre of the peer group, the research culture, and a global alumni network that has founded over 2,000 companies, including Flipkart and Sun Pharma.',
  sections: [
    {
      id: 'old-vs-new',
      eyebrow: 'seven vs. sixteen',
      title: 'The "old IITs" vs. the rest',
      subtitle: 'Kharagpur, Bombay, Madras, Kanpur, Delhi, Roorkee, and Guwahati carry the deepest brand recognition and highest cutoffs. Sixteen more were founded from 2008 onwards.',
      table: {
        columns: ['IIT', 'State', 'Established', 'NIRF 2024', 'Key Strength'],
        rows: [
          ['IIT Madras', 'Tamil Nadu', '1959', '1st (Overall)', 'Engineering Design, CS, Ocean Engg.'],
          ['IIT Delhi', 'Delhi', '1961', '2nd (Overall)', 'CS, EE, Chemical'],
          ['IIT Bombay', 'Maharashtra', '1958', '3rd (Overall)', 'CS, EE, Mech, Finance'],
          ['IIT Kanpur', 'Uttar Pradesh', '1959', '4th (Overall)', 'Aerospace, CS, Physics'],
          ['IIT Kharagpur', 'West Bengal', '1951', '5th (Overall)', 'Law, Management, Mining, Civil'],
          ['IIT Roorkee', 'Uttarakhand', '1847', '6th (Overall)', 'Civil, EE, Architecture'],
          ['IIT Guwahati', 'Assam', '1994', '7th (Overall)', 'CS, Design, Biotech'],
          ['IIT Hyderabad', 'Telangana', '2008', '~10–15', 'AI/ML, CS, Materials'],
          ['IIT (BHU) Varanasi', 'Uttar Pradesh', '1919/2012', '~15–20', 'Mining, Metallurgy, CS'],
          ['16 more (2008–2016)', 'Across India', '2008–2016', '25–60+', 'CS/EE strongest across all newer campuses'],
        ],
      },
      note: 'SC/ST/PwD students pay zero tuition at every IIT — full waiver. Hostel + mess adds ₹80,000–1,50,000/year.',
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'IIT Madras is India\'s #1 ranked institution and sits right in Tamil Nadu — the top choice for most TN students at JEE Advanced. IIT Palakkad (Kerala) and IIT Tirupati (Andhra Pradesh) are also geographically close and worth considering.',
      },
    },
    {
      id: 'flagship',
      eyebrow: 'the tamil nadu iit',
      title: 'IIT Madras, in detail',
      table: {
        columns: ['Fact', 'Detail'],
        rows: [
          ['Campus', '617 acres — inside a forest, deer and peacocks on campus'],
          ['NIRF ranking', '#1 Overall, #1 Engineering (2024)'],
          ['Annual UG intake', '~1,100 BTech students'],
          ['Average domestic package (2023–24)', '~₹22 LPA'],
          ['Top recruiters', 'Google, Microsoft, Qualcomm, NVIDIA, Goldman Sachs, McKinsey'],
        ],
      },
      note: '~72% of BTech students place directly; many others pursue higher studies or start-ups. IIT Madras also offers the largest number of Dual Degree (BTech+MTech) programmes of any IIT.',
    },
    {
      id: 'other-old',
      eyebrow: 'beyond madras',
      title: 'The other six original IITs',
      table: {
        columns: ['IIT', 'Notable strength', 'Avg. package (2023–24)'],
        rows: [
          ['IIT Bombay', 'Finance, start-ups (E-Cell), quant trading', '~₹25 LPA domestic'],
          ['IIT Delhi', 'Best placement average; proximity to govt &amp; IIMs', '~₹26 LPA domestic'],
          ['IIT Kanpur', 'First to introduce CS education in India (1971)', '~₹22 LPA domestic'],
          ['IIT Kharagpur', 'Broadest programme mix — Law, MBA, Mining', '~₹18 LPA domestic'],
          ['IIT Roorkee', 'Civil, Water Resources, Architecture (BArch)', '~₹18 LPA domestic'],
          ['IIT Guwahati', 'Most affordable metro-access IIT outside South India', '~₹15 LPA domestic'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'IIT admissions — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Aiming for an IIT seat?',
  ctaSub: 'A structured JEE Advanced strategy beats last-minute cramming, every cycle.',
});
