import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why does Madras Medical College close so much higher than other TN government colleges?',
    a: 'Reputation and legacy — MMC is the oldest medical college in Asia (est. 1835) and carries the strongest brand and alumni network in Tamil Nadu, which sustains demand even though every TN government MBBS seat leads to the same NEET PG eligibility and Medical Council registration.',
  },
  {
    q: 'How much lower do SC closing scores run compared to OC at these colleges?',
    a: 'Substantially — roughly 60–90 marks lower at most colleges in this table. For example, at MMC, OC closes around 675–685 while SC closes around 595–615. This gap reflects the SC reservation share (18% in TN) and the separate rank pool SC candidates compete within.',
  },
];

export const neetTnGovtCutoffsPage = buildLeafPage({
  slug: 'college-cutoffs/neet-tn-government-2024',
  title: 'NEET 2024 TN Government Medical College Cutoffs by Category | T.I.M.E. Madurai',
  description: 'NEET 2024 TN State Quota closing scores at Madras Medical College, Stanley, Coimbatore, Madurai and more, by category.',
  canonical: '/college-cutoffs/neet-tn-government-2024/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Cutoffs', href: '/college-cutoffs/' }, { label: 'NEET TN Government Cutoffs 2024' }],
  eyebrow: '2024 cycle · tn state quota',
  heroTitle: 'NEET 2024 — TN Government Medical Colleges',
  heroSubtitle: '85% TN State Quota closing scores across Tamil Nadu\'s top government medical colleges, by category.',
  stats: [],
  toc: [
    { id: 'cutoffs', label: 'Closing Scores by College & Category' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'OC = Open Competition (General); BC = Backward Classes; MBC = Most Backward Classes; SC = Scheduled Caste. 2024 cycle, indicative.',
  sections: [
    {
      id: 'cutoffs',
      title: 'NEET 2024 TN state quota closing scores',
      table: {
        columns: ['Medical college', 'OC closing', 'BC closing', 'MBC closing', 'SC closing'],
        rows: [
          ['Madras Medical College (MMC), Chennai', '~675–685', '~655–668', '~640–655', '~595–615'],
          ['Stanley Medical College, Chennai', '~660–672', '~640–655', '~625–640', '~578–598'],
          ['Kilpauk Medical College, Chennai', '~655–668', '~635–650', '~618–634', '~572–592'],
          ['Coimbatore Medical College (CMCH)', '~640–655', '~618–634', '~600–618', '~555–575'],
          ['Madras Medical College / Madurai Medical College', '~645–658', '~622–638', '~605–622', '~558–578'],
          ['Tirunelveli Medical College (TNMC)', '~635–650', '~612–628', '~595–612', '~548–568'],
          ['PSG Government Medical College, Coimbatore', '~628–642', '~605–622', '~586–603', '~540–560'],
          ['Government Villupuram Medical College', '~618–632', '~595–612', '~575–592', '~528–548'],
          ['Thanjavur Medical College (TMCH)', '~640–654', '~618–634', '~600–618', '~552–572'],
          ['Kanyakumari Government Medical College', '~612–626', '~588–604', '~568–585', '~520–540'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Madras Medical College (MMC) is the most prestigious government medical college in Tamil Nadu — its OC closing of ~675–685 reflects intense competition. BC students typically need 655+, MBC students around 640+, and SC students from TN have historically secured seats at top colleges like MMC or Stanley with scores around 600–610.',
      },
    },
  ],
  faqs,
  faqTitle: 'TN government medical cutoffs — quick answers',
  backLink: { label: 'the Cutoffs hub', href: '/college-cutoffs/' },
  ctaHeading: 'Want your category-adjusted NEET target mapped to a real college?',
  ctaSub: 'A counsellor can project your realistic TN state quota range.',
});
