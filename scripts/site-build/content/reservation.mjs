import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand, percentageBarSvg,
} from '../lib/components.mjs';

const TOC = [
  { id: 'central', label: 'Central Reservation' },
  { id: 'tn-state', label: 'Tamil Nadu Reservation' },
  { id: 'topics', label: 'Deep Dives' },
  { id: 'misconceptions', label: 'Misconceptions' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'Does my Tamil Nadu BC certificate work for IIT/NIT admission?',
    a: 'Not automatically. Central institutions (IITs, NITs, AIIMS) go by the Central OBC list, which is separate from Tamil Nadu\'s state BC list. Many TN BC/MBC communities are on the Central list too, but you need a separate Central OBC-NCL certificate — not just your TN BC certificate — to claim the benefit at JoSAA or MCC.',
  },
  {
    q: 'What is "creamy layer" and who does it apply to?',
    a: 'Creamy layer excludes OBC-NCL candidates whose family income exceeds ₹8 lakh/year — above that threshold, they compete as General category for central institutions. Critically, creamy layer does NOT apply to SC/ST — students in those categories qualify for reservation regardless of family income.',
  },
  {
    q: 'Is EWS the same as being poor?',
    a: 'No. EWS is specifically for General-category students (not SC/ST/OBC) with family income under ₹8 lakh/year and specific asset limits. A BC, MBC, SC, or ST student with a low income does not claim EWS — they use their own category, which usually carries a larger reservation share and lower cutoffs.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'category & quota',
  title: 'Reservation in JEE & NEET: Central and Tamil Nadu, Explained',
  subtitle: 'IITs and NITs follow one reservation system. Tamil Nadu government colleges follow a different, more detailed one. Getting this right changes which rank or score actually gets you a seat.',
  stats: [
    { value: '59.5%', label: 'Total central reservation' },
    { value: '~69%', label: 'Total TN state reservation' },
    { value: '27%', label: 'OBC-NCL share (central)' },
    { value: '26.5%', label: 'BC share (TN state)' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          This hub explains how the system works in practice for JEE and NEET admissions — factually, so you can plan accurately. It does not take a position for or against reservation policy.
        </p>
      </div>

      <div id="central">
        ${sectionHeader({
          eyebrow: 'iits, nits, aiims',
          title: 'Central government reservation',
          subtitle: 'Governed by the Central Educational Institutions (Reservation in Admission) Act, 2006, and the 2019 EWS amendment.',
        })}
        ${dataTable(
          ['Category', 'Reservation %', 'Basis'],
          [
            ['OBC-NCL', '27%', 'Article 15(4) + CEI Act 2006 — Non-Creamy Layer only'],
            ['SC', '15%', 'Article 15(4) + Article 46'],
            ['ST', '7.5%', 'Article 15(4) + Article 46'],
            ['EWS', '10%', '103rd Constitutional Amendment (2019)'],
            ['General (unreserved)', '40.5%', 'Merit-based, open to all'],
          ]
        )}
        ${percentageBarSvg([
          { label: 'OBC-NCL', value: 27, color: '#0d2d6e', textColor: '#ffffff' },
          { label: 'SC', value: 15, color: '#1a3d8f', textColor: '#ffffff' },
          { label: 'ST', value: 7.5, color: '#4a8cd9', textColor: '#ffffff' },
          { label: 'EWS', value: 10, color: '#f9c74f' },
          { label: 'General', value: 40.5, color: 'rgba(13,45,110,.12)' },
        ])}
        ${callout({
          type: 'mistake',
          label: 'Common mistake',
          text: 'EWS and OBC-NCL get confused constantly. If you\'re OBC (on the Central list) with income under ₹8 lakh, claim OBC-NCL — not EWS. EWS is only for General-category students who are not SC/ST/OBC. Claiming the wrong category can get your application rejected or your seat cancelled at document verification.',
        })}
      </div>

      <div id="tn-state">
        ${sectionHeader({
          eyebrow: 'tnea, tn medical',
          title: 'Tamil Nadu state reservation',
          subtitle: 'One of India\'s most detailed state systems — and higher overall reservation than the central norm.',
        })}
        ${dataTable(
          ['TN category', 'Reservation %', 'Notes'],
          [
            ['BC', '26.5%', 'Largest single reservation block in TN'],
            ['BCM', '3.5%', 'Backward Classes (Muslim)'],
            ['MBC + DNC', '20%', 'More disadvantaged than BC; includes Vanniyar, Nadar (non-Christian) and others'],
            ['SC', '18%', 'Higher than the central 15%'],
            ['SCA', '3%', 'Sub-quota within SC, for Arunthathiyar community only'],
            ['ST', '1%', 'Lower TN tribal population than other states'],
            ['OC (Open Competition)', '~31%', 'Merit-based, all communities compete'],
          ]
        )}
        ${percentageBarSvg([
          { label: 'BC', value: 26.5, color: '#0d2d6e', textColor: '#ffffff' },
          { label: 'BCM', value: 3.5, color: '#1a3d8f', textColor: '#ffffff' },
          { label: 'MBC+DNC', value: 20, color: '#4a8cd9', textColor: '#ffffff' },
          { label: 'SC', value: 18, color: '#6ea8e8', textColor: '#ffffff' },
          { label: 'SCA', value: 3, color: '#8ec1f2' },
          { label: 'ST', value: 1, color: '#f9c74f' },
          { label: 'OC', value: 31, color: 'rgba(13,45,110,.12)' },
        ])}
        <p class="text-navy/40 text-xs mt-4">Reservation percentages are subject to ongoing litigation and court orders — always verify the current operative figures at tneaonline.org or tnmedicalselection.net at counselling time.</p>
      </div>

      <div id="topics">
        ${sectionHeader({ eyebrow: 'deep dives', title: 'Category-by-category detail' })}
        ${hubCardGrid([
          { title: 'OBC-NCL', href: '/reservation/obc-ncl/', blurb: 'What "Non-Creamy Layer" means, the ₹8 lakh threshold, and Central vs. TN OBC lists.' },
          { title: 'SC / ST Reservation', href: '/reservation/sc-st-reservation/', blurb: 'No creamy layer, no income criterion — certificate requirements and central + TN benefits.' },
          { title: 'EWS', href: '/reservation/ews/', blurb: 'The 10% category for General-category students under the income and asset thresholds.' },
          { title: 'PwD Reservation', href: '/reservation/pwd-reservation/', blurb: 'The 5% horizontal reservation that runs across every vertical category.' },
          { title: 'Tamil Nadu Reservation', href: '/reservation/tamil-nadu-reservation/', blurb: 'BC, MBC, DNC, SC, SCA — how each TN-specific category actually works.' },
          { title: 'Category Rank vs CRL Rank', href: '/reservation/category-vs-crl-rank/', blurb: 'Why your category rank — not your overall CRL — is what JoSAA actually uses to fill reserved seats.' },
        ])}
      </div>

      <div id="misconceptions">
        ${sectionHeader({ eyebrow: 'set the record straight', title: 'Common misconceptions' })}
        ${dataTable(
          ['Misconception', 'The reality'],
          [
            ['"OBC students don\'t need to study hard"', 'OBC-NCL closing ranks for top IIT CSE seats typically fall in the 3,000–8,000 range — still extremely competitive.'],
            ['"My TN BC certificate works for IIT/NIT"', 'Not always — you need a separate Central OBC-NCL certificate for central institutions.'],
            ['"Creamy layer applies to SC/ST too"', 'No — there is no creamy layer for SC/ST. It applies only to OBC-NCL.'],
          ]
        )}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Reservation — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('reservation')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Not sure which certificates you need?',
  sub: 'A counsellor can map your category to exactly what to apply for, and when.',
  courseLabel: 'JEE',
})}
`;

export const reservationPage = {
  slug: 'reservation',
  title: 'JEE & NEET Reservation Explained: Central + Tamil Nadu Categories (2026) | T.I.M.E. Madurai',
  description: 'OBC-NCL, SC, ST, EWS, PwD, and Tamil Nadu\'s BC/MBC/SCA system explained for JEE and NEET admissions — reservation percentages, certificates, and common misconceptions.',
  canonical: '/reservation/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Reservation' },
  ],
  schema: [
    articleSchema({
      title: 'Reservation in JEE & NEET: Central and Tamil Nadu, Explained',
      description: 'Central (OBC-NCL/SC/ST/EWS/PwD) and Tamil Nadu (BC/MBC/DNC/SC/SCA) reservation systems for JEE and NEET admissions.',
      url: 'https://timemadurai.com/reservation/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
