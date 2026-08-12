import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What does "Non-Creamy Layer" actually mean?',
    a: 'It means your family\'s gross annual income is below the current threshold (₹8 lakh — verify the exact figure annually, as it\'s revised periodically). Above that threshold, OBC candidates are treated as General category for central institution admissions. Your OBC-NCL certificate must explicitly state "Non-Creamy Layer" to be valid.',
  },
  {
    q: 'Does my Tamil Nadu BC certificate automatically work for JoSAA or MCC?',
    a: 'Not automatically. Central institutions go by the Central OBC list, which is separate from Tamil Nadu\'s state BC list — many TN communities appear on both, but not all. Check the Ministry of Social Justice OBC list (ncbc.nic.in) for your specific community, and if listed, obtain a separate Central OBC-NCL certificate specifically for JEE/NEET central-seat benefits.',
  },
];

export const obcNclPage = buildLeafPage({
  slug: 'reservation/obc-ncl',
  title: 'OBC-NCL Reservation Explained: Eligibility & Certificate Guide | T.I.M.E. Madurai',
  description: 'How OBC-NCL reservation works for JEE and NEET at central institutions — the ₹8 lakh creamy-layer threshold, Central vs. TN OBC lists, and certificate requirements.',
  canonical: '/reservation/obc-ncl/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'OBC-NCL' }],
  eyebrow: 'reservation · central',
  heroTitle: 'OBC-NCL Reservation',
  heroSubtitle: '27% of every central institution\'s seats — but only for Other Backward Classes candidates outside the "creamy layer."',
  stats: [ { value: '27%', label: 'Central reservation share' }, { value: '₹8L', label: 'Creamy-layer income threshold' } ],
  toc: [
    { id: 'details', label: 'The Details' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'OBC-NCL is one of the most common categories claimed at JoSAA and MCC — and also one of the most frequently misunderstood, especially the distinction between Central and state OBC lists.',
  sections: [
    {
      id: 'details',
      title: 'What you need to know',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Who qualifies', 'Students whose community is on the Central OBC list — NOT necessarily the same as state OBC lists'],
          ['Creamy layer exclusion', 'Family gross annual income &gt; ₹8 lakh → treated as General for central institutions; verify current threshold at ncbc.nic.in'],
          ['Certificate required', 'OBC-NCL certificate from Tahsildar/SDM, explicitly stating "Non-Creamy Layer"; typically valid 1 year from issue'],
          ['Central vs. state list', 'A community on the TN state OBC list may NOT be on the Central list, and vice versa — verify separately'],
          ['Rank calculation', 'OBC-NCL rank is calculated separately and determines allotment in OBC-NCL seats at IITs/NITs/AIIMS'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Many Tamil Nadu BC/MBC communities ARE on the Central OBC list — common examples include Mudaliar, Pillai, Vellalar, Nadar, Yadava, and Vanniyar, though not every TN-BC community appears. Verify your specific community and sub-community at secc.gov.in or ncbc.nic.in, and if listed, get a separate Central OBC-NCL certificate — your TN state BC certificate alone won\'t unlock central-seat benefits.',
      },
    },
  ],
  faqs,
  faqTitle: 'OBC-NCL — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Not sure if your community is on the Central OBC list?',
  ctaSub: 'A counsellor can help you verify before counselling season starts.',
});
