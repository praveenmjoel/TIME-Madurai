import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the practical difference between an INI and an Institute of Eminence?',
    a: 'An INI (Institute of National Importance — IITs, NITs, AIIMS, IIMs, and others) is a legal designation created by a Parliamentary Act, carrying full central funding and top prestige by default. Institute of Eminence (IoE) is a separate 2018 scheme granting regulatory flexibility and extra funding to 20 already-strong institutions (10 public, 10 private) — many INIs are also IoEs, but the two labels aren\'t the same thing.',
  },
  {
    q: 'Can I switch from a 3-year diploma into a BTech programme partway through?',
    a: 'Yes — this is called Lateral Entry, a recognised and popular pathway in Tamil Nadu specifically. Students who complete a 3-year Polytechnic Diploma in Engineering can join a BTech programme directly in the 2nd year, through separate lateral-entry counselling.',
  },
];

export const higherEducationPage = buildLeafPage({
  slug: 'guide/higher-education-in-india',
  title: 'Higher Education in India Explained: Institution Types & Regulators | T.I.M.E. Madurai',
  description: 'Central vs. State vs. Deemed vs. Private universities, Institutes of National Importance, the regulatory bodies behind each, and how Indian degree structures actually work.',
  canonical: '/guide/higher-education-in-india/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Guide', href: '/guide/' }, { label: 'Higher Education in India' }],
  eyebrow: 'guide · the landscape',
  heroTitle: 'How Higher Education in India Is Structured',
  heroSubtitle: 'India adds roughly one new university every 10 days. Knowing which category an institution falls into tells you how it\'s funded, regulated, and how much its degree is actually worth.',
  stats: [ { value: '1,168', label: 'Universities in India' }, { value: '43,796', label: 'Colleges in India' }, { value: '4.33 Cr', label: 'Total student enrolment' } ],
  toc: [
    { id: 'types', label: 'Institution Types' },
    { id: 'regulators', label: 'Regulatory Bodies' },
    { id: 'degrees', label: 'Degree Structures' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Between 2001 and 2022, India\'s university count grew from 256 to over 1,100 — a four-fold increase in two decades. Not every institution in that count is equal, and the category it falls into matters.',
  sections: [
    {
      id: 'types',
      eyebrow: 'know what you\'re looking at',
      title: 'Institution types, at a glance',
      table: {
        columns: ['Type', 'Funded by', 'Set up by', 'Typical fees (engg.)'],
        rows: [
          ['IITs / INIs', 'Central Govt', 'Parliament Act', '₹2–2.5 lakh/yr'],
          ['NITs / GFTIs', 'Central Govt', 'Parliament Act', '₹1.5–2 lakh/yr'],
          ['Central Universities', 'Central Govt', 'Parliament Act', '₹50K–2 lakh/yr'],
          ['State Universities', 'State Govt', 'State Act', '₹30K–1.5 lakh/yr'],
          ['Deemed Universities', 'Private', 'UGC Notified', '₹2–5 lakh/yr'],
          ['Private Universities', 'Private', 'State Act', '₹1.5–5 lakh/yr'],
          ['Autonomous Colleges', 'Private/State', 'Parent Univ + AICTE', '₹1–3 lakh/yr'],
        ],
      },
      callout: {
        type: 'mistake',
        label: 'Common confusion',
        text: 'Deemed University and Private University are often used interchangeably, but the pathway differs: Deemed = an existing high-quality institution elevated to university status by the Central Government (e.g. BITS Pilani, SASTRA). Private University = created from scratch under a State Act (e.g. VIT, SRM). Both are privately funded, but not all Deemed Universities are equal — verify NAAC and NIRF before assuming either label means "good."',
      },
    },
    {
      id: 'regulators',
      eyebrow: 'who oversees what',
      title: 'The regulatory framework',
      table: {
        columns: ['Regulator', 'Full name', 'Regulates'],
        rows: [
          ['UGC', 'University Grants Commission', 'Universities — degrees, standards, funding'],
          ['AICTE', 'All India Council for Technical Education', 'Engineering, Pharmacy, Architecture, MBA'],
          ['NMC', 'National Medical Commission', 'MBBS and postgraduate medical education'],
          ['NDA', 'National Dental Commission', 'BDS education'],
          ['BCI', 'Bar Council of India', 'Law (LLB) education'],
          ['PCI', 'Pharmacy Council of India', 'B.Pharm and Pharm.D programmes'],
          ['CCIM', 'Central Council of Indian Medicine', 'Ayurveda (BAMS), Siddha (BSMS), Unani'],
          ['CCH', 'Central Council of Homoeopathy', 'BHMS education'],
        ],
      },
      note: 'Before seeking admission anywhere, verify AICTE approval (engineering) or NMC recognition (medicine) — an unrecognised degree won\'t count for government jobs, higher studies, or professional practice.',
    },
    {
      id: 'degrees',
      eyebrow: 'what the timelines mean',
      title: 'Degree structures &amp; special pathways',
      table: {
        columns: ['Degree level', 'Duration', 'Common programmes'],
        rows: [
          ['Bachelor\'s (Professional)', '4 years', 'BTech, BE, BArch, BPT, B.Sc Nursing'],
          ['Bachelor\'s (Medical)', '5.5 years', 'MBBS (4.5 yr + 1 yr internship)'],
          ['Integrated (UG+PG)', '5 years', 'Integrated MSc, BTech+MTech, BA LLB'],
          ['Integrated Master\'s', '5 years', 'MSc (IISERs, IISc), BS-MS (IISERs)'],
        ],
      },
      note: 'Lateral Entry lets 3-year Polytechnic Diploma graduates join BTech directly in Year 2 — a popular, recognised Tamil Nadu pathway. Several IITs/NITs also offer 5-year Dual Degree programmes (BTech + MTech in the same branch), which IIT Madras offers more of than any other IIT.',
    },
  ],
  faqs,
  faqTitle: 'Higher education structure — quick answers',
  backLink: { label: 'the Guide hub', href: '/guide/' },
  ctaHeading: 'Confused about a specific college\'s classification?',
  ctaSub: 'A counsellor can help you verify legitimacy and quality before you apply.',
});
