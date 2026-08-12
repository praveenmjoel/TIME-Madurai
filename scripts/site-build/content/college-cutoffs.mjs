import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'engineering', label: 'Engineering Cutoffs' },
  { id: 'medical', label: 'Medical Cutoffs' },
  { id: 'strategy', label: 'Using This Data' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'How much do cutoffs shift from year to year?',
    a: 'Enough to matter. A closing rank of ~5,500 for NIT Trichy CSE (TN home-state quota) one year can move by a thousand or more the next, depending on paper difficulty and how many students apply. Treat every figure on this page as a planning benchmark, not a guarantee — always cross-check the current year\'s official opening/closing ranks before finalising choices.',
  },
  {
    q: 'Why do OBC-NCL, SC, and ST cutoffs look so different from General?',
    a: 'Reserved categories compete within their own rank pool, which is smaller, so the same seat closes at a much higher (numerically worse) rank. As a rough multiplier: OBC-NCL closing ranks run roughly 2–3× the General rank, SC roughly 5–8×, and ST roughly 12–15×. This means a rank that looks "out of reach" for General can be well within range for a reserved category.',
  },
  {
    q: 'Should I build my college list around only my dream colleges?',
    a: 'No — build three tiers: dream colleges (10–15% realistic chance), target colleges (50–60% chance), and safe colleges (90%+ chance). Never fill a list of only dream colleges, and never drop them either — a gap between your current mock rank and your final exam rank can close with 3–6 months of focused work.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: '2024 admission cycle',
  title: 'JEE & NEET Cutoffs: IIT, NIT, TNEA & Medical College Closing Ranks',
  subtitle: 'Real closing ranks and scores from the 2024 cycle, compiled as planning benchmarks — not guarantees. Cutoffs shift every year with paper difficulty, applicant volume, and seat availability.',
  stats: [
    { value: '~70', label: 'IIT Bombay CSE closing rank (GEN)' },
    { value: '~5,500', label: 'NIT Trichy CSE closing (TN home-state)' },
    { value: '196+', label: 'TNEA CEG CSE cutoff (out of 200)' },
    { value: '675+', label: 'Madras Medical College OC closing score' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div class="fu">
        ${callout({
          type: 'info',
          label: 'Before you use this data',
          text: 'All figures below are from the 2024 admissions cycle (JEE/NEET 2024) and are indicative only. Always verify the latest data at josaa.nic.in (IITs/NITs), mcc.nic.in (AIIMS/NEET AIQ), and tnmedicalselection.net (TN medical) before making decisions.',
        })}
      </div>

      <div id="engineering">
        ${sectionHeader({ eyebrow: 'jee advanced &amp; main', title: 'Engineering closing ranks, 2024' })}
        ${dataTable(
          ['Institute', 'Programme', 'Approx. GEN closing rank (CRL)'],
          [
            ['IIT Bombay', 'CSE', '~70'],
            ['IIT Delhi', 'CSE', '~100'],
            ['IIT Madras', 'CSE', '~130'],
            ['IIT Kanpur', 'CSE', '~200'],
            ['IIT Roorkee', 'CSE', '~500'],
            ['NIT Trichy (TN Home State)', 'CSE', '~5,500–7,000'],
            ['NIT Warangal (OS)', 'CSE', '~3,000–4,500'],
            ['IIIT Kancheepuram (TN)', 'CSE', '~20,000–30,000'],
            ['BITS Pilani', 'CSE (BITSAT ~395–410)', 'Score-based, not rank'],
          ]
        )}
        ${hubCardGrid([
          { title: 'IIT Cutoffs (JEE Advanced 2024)', href: '/college-cutoffs/iit-jee-advanced-2024/', blurb: 'Every major IIT-branch combination, GEN closing rank.' },
          { title: 'NIT Cutoffs (JEE Main 2024)', href: '/college-cutoffs/nit-jee-main-2024/', blurb: 'NIT Trichy home-state vs. other-state, plus the next tier of NITs.' },
          { title: 'IIIT Cutoffs (JEE Main 2024)', href: '/college-cutoffs/iiit-jee-main-2024/', blurb: 'IIIT Hyderabad, Bangalore, Delhi, and IIIT Kancheepuram (TN).' },
          { title: 'BITSAT 2024 Cutoffs', href: '/college-cutoffs/bitsat-2024/', blurb: 'Score cutoffs across BITS Pilani, Goa, and Hyderabad campuses.' },
          { title: 'VITEEE &amp; SRMJEEE 2024', href: '/college-cutoffs/viteee-srmjeee-2024/', blurb: 'Rank bands across VIT and SRM campuses and specialisation tracks.' },
          { title: 'TNEA 2024 Cutoffs', href: '/college-cutoffs/tnea-2024/', blurb: 'CEG, PSG, CIT, TCE and more — TNEA cutoff marks by branch.' },
        ])}
      </div>

      <div id="medical">
        ${sectionHeader({ eyebrow: 'neet', title: 'Medical closing scores, 2024' })}
        ${dataTable(
          ['College / campus', 'Approx. GEN closing NEET score'],
          [
            ['AIIMS New Delhi', '~715–720'],
            ['AIIMS Mangalagiri (nearest to TN)', '~635–650'],
            ['JIPMER Puducherry', '~665–678'],
            ['JIPMER Karaikal', '~640–655'],
            ['Madras Medical College (TN quota, OC)', '~675–685'],
            ['Coimbatore Medical College (TN quota, OC)', '~640–655'],
            ['NIS Chennai — BSMS (Siddha, AIQ)', '~520–570'],
          ]
        )}
        ${hubCardGrid([
          { title: 'NEET — AIIMS Cutoffs 2024', href: '/college-cutoffs/neet-aiims-2024/', blurb: 'All 19 AIIMS campuses, GEN closing score.' },
          { title: 'NEET — TN Government Colleges 2024', href: '/college-cutoffs/neet-tn-government-2024/', blurb: 'OC/BC/MBC/SC closing scores at every major TN govt medical college.' },
          { title: 'NEET — TN Private Colleges 2024', href: '/college-cutoffs/neet-tn-private-2024/', blurb: 'Govt-quota vs. management-quota closing scores and fees.' },
          { title: 'NEET — AYUSH Cutoffs 2024', href: '/college-cutoffs/neet-ayush-2024/', blurb: 'BAMS, BSMS, BHMS cutoffs at TN government AYUSH colleges.' },
        ])}
      </div>

      <div id="strategy">
        ${sectionHeader({ eyebrow: 'how to actually use this', title: 'Build a three-tier college list' })}
        ${dataTable(
          ['Your score/rank', 'Realistic target'],
          [
            ['JEE Advanced CRL &lt; 500', 'IIT Bombay/Delhi/Madras CSE'],
            ['JEE Advanced CRL 2,000–5,000', 'Newer IITs CSE, IIT BHU/Indore CSE'],
            ['JEE Main CRL 3,000–8,000', 'NIT Trichy CSE (TN home-state)'],
            ['TNEA cutoff 195+', 'CEG Anna University CSE'],
            ['NEET 650+', 'Top TN govt MBBS, JIPMER, some AIIMS'],
            ['NEET 500–600', 'Lower TN govt MBBS, TN private govt-quota, good BSMS'],
          ]
        )}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Cutoffs — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('college-cutoffs')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Want your mock rank benchmarked against real cutoffs?',
  sub: 'A counsellor can turn this data into your actual college shortlist.',
  courseLabel: 'JEE',
})}
`;

export const collegeCutoffsPage = {
  slug: 'college-cutoffs',
  title: 'JEE & NEET Cutoffs 2024: IIT, NIT, TNEA & Medical Closing Ranks | T.I.M.E. Madurai',
  description: '2024 cycle closing ranks and scores for IITs, NITs, IIITs, BITS, VIT, SRM, TNEA, AIIMS, and Tamil Nadu government and private medical colleges — with a strategy for using the data.',
  canonical: '/college-cutoffs/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Cutoffs' },
  ],
  schema: [
    articleSchema({
      title: 'JEE & NEET Cutoffs: IIT, NIT, TNEA & Medical College Closing Ranks',
      description: '2024 cycle cutoff data across engineering and medical admissions, with a strategy for building a college list.',
      url: 'https://timemadurai.com/college-cutoffs/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
