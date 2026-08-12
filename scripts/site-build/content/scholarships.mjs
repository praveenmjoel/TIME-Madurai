import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'central', label: 'Central Scholarships' },
  { id: 'tn-state', label: 'Tamil Nadu Scholarships' },
  { id: 'institution', label: 'Institution Fee Waivers' },
  { id: 'topics', label: 'Deep Dives' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'Do SC/ST students really pay zero tuition at IITs?',
    a: 'Yes — SC/ST students get a 100% tuition fee waiver at IITs and NITs, paying only mess and hostel charges (roughly ₹40,000–60,000/year). They\'re also eligible for the central Post-Matric Scholarship for maintenance costs, which for many students makes an IIT education effectively free.',
  },
  {
    q: 'Can I apply for more than one scholarship at the same time?',
    a: 'In most cases yes — for example, TN Muslim students can apply for both the Central Post-Matric Minority Scholarship and the Merit-cum-Means Scholarship, since they\'re different schemes with different criteria. Girls who qualify for both Pudhumai Penn and AICTE Pragati can claim both. Always check each scheme\'s rules rather than assuming they\'re mutually exclusive.',
  },
  {
    q: 'When should I apply for scholarships?',
    a: 'Scholarship season is August–November of each academic year, right after admission. NSP (National Scholarship Portal) applications often close in November, and many students miss the window entirely because they discover the scheme in January. Set a fixed reminder for October 1st every year, from first year through graduation — most scholarships need annual renewal too.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'funding your degree',
  title: 'Scholarships for JEE & NEET Students: The Complete Guide',
  subtitle: 'India has an extensive scholarship ecosystem — central, Tamil Nadu state, institution-level, and private. Most families never claim what they\'re actually eligible for, simply because they don\'t know it exists.',
  stats: [
    { value: '₹10–50K', label: 'Typical central scholarship/yr' },
    { value: '100%', label: 'IIT/NIT tuition waiver for SC/ST' },
    { value: '2/3', label: 'Fee waived for GEN/OBC under ₹5L income' },
    { value: 'Aug–Nov', label: 'Application window, every year' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          Financial burden in Indian higher education is overwhelmingly concentrated in private and management-quota seats. A government college seat, combined with the right scholarship, is often close to free — this hub maps out what's actually available.
        </p>
      </div>

      <div id="central">
        ${sectionHeader({ eyebrow: 'national schemes', title: 'Central government scholarships' })}
        ${dataTable(
          ['Scholarship', 'Who qualifies', 'Amount'],
          [
            ['Central Sector Scheme (CSSS)', '80th+ percentile in Class 12; family income ≤ ₹8 lakh', '₹10,000–20,000/yr'],
            ['Post-Matric Scholarship (SC/ST)', 'SC/ST students; income ≤ ₹2.5 lakh', 'Full tuition + maintenance allowance'],
            ['AICTE Pragati (girls)', 'Girl students in AICTE-approved colleges; income ≤ ₹8 lakh', '₹50,000/yr'],
            ['AICTE Saksham (PwD)', 'Students with disability in technical education', '₹50,000/yr'],
          ]
        )}
      </div>

      <div id="tn-state">
        ${sectionHeader({ eyebrow: 'state-specific', title: 'Tamil Nadu government scholarships' })}
        ${dataTable(
          ['Scholarship', 'Who qualifies', 'Benefit'],
          [
            ['CM\'s Merit Scholarship (Kalvi Thittam)', 'TN students, merit-based', '₹5,000–25,000'],
            ['Adi Dravidar Welfare Scholarship', 'SC/ST TN students', 'Maintenance allowance, stacks with central scholarship'],
            ['BC/MBC Welfare Scholarship', 'BC/MBC/BCM/DNC TN students', 'Annual maintenance allowance'],
            ['Pudhumai Penn Scholarship', 'Girls from TN govt schools, in college', '₹1,000/month'],
            ['Fee Concession (govt colleges)', 'All govt college students, enhanced for SC/ST/BC/MBC', 'Near-total fee waiver, automatic'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'Tamil Nadu tip',
          text: 'Pudhumai Penn (₹1,000/month) is available to every girl who studied in a TN government school and is now in college — and it stacks with AICTE Pragati if you qualify for both. Check pudhumaipennn.tn.gov.in and apply at the college stage if you missed the Class 12 window.',
        })}
      </div>

      <div id="institution">
        ${sectionHeader({ eyebrow: 'built into the fee structure', title: 'How IIT/NIT fee waivers actually work' })}
        ${dataTable(
          ['Category', 'IIT/NIT tuition status'],
          [
            ['SC / ST', '100% waiver — pay only mess &amp; hostel'],
            ['EWS', 'Full waiver (income-based)'],
            ['GEN/OBC, income &lt; ₹1 lakh/yr', 'Full waiver (Merit-cum-Means)'],
            ['GEN/OBC, income ₹1–5 lakh/yr', '2/3rd waiver'],
            ['GEN/OBC, income &gt; ₹5 lakh/yr', 'Full tuition (~₹2 lakh/yr at IITs)'],
          ]
        )}
        <p class="text-navy/40 text-xs mt-4">Only families earning above ₹5 lakh/year actually pay full IIT/NIT tuition — the effective cost for most middle-class families is far lower than private engineering colleges.</p>
      </div>

      <div id="topics">
        ${sectionHeader({ eyebrow: 'deep dives', title: 'Every scholarship track, in detail' })}
        ${hubCardGrid([
          { title: 'Central Government Scholarships', href: '/scholarships/central-government-scholarships/', blurb: 'CSSS, Post-Matric SC/ST, and AICTE schemes — eligibility and how to apply.' },
          { title: 'Tamil Nadu State Scholarships', href: '/scholarships/tamil-nadu-scholarships/', blurb: 'Kalvi Thittam, Adi Dravidar, BC/MBC welfare and Pudhumai Penn.' },
          { title: 'Institution-Level Scholarships', href: '/scholarships/institution-scholarships/', blurb: 'IIT/NIT fee-waiver slabs and VIT\'s Chancellor\'s Award &amp; merit scholarships.' },
          { title: 'Minority Community Scholarships', href: '/scholarships/minority-scholarships/', blurb: 'Pre- and post-matric minority scholarships, Merit-cum-Means, and TN Wakf Board support.' },
          { title: 'Corporate &amp; Foundation Scholarships', href: '/scholarships/corporate-scholarships/', blurb: 'Reliance Foundation, Infosys, L&amp;T and other private scholarships worth applying for.' },
          { title: 'Application Checklist', href: '/scholarships/application-checklist/', blurb: 'What to apply for, when, and with which documents — a year-by-year timeline.' },
        ])}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Scholarships — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('scholarships')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Still weighing a loan against scholarships?',
  sub: 'Our Education Loans hub covers bank comparisons and interest-subsidy schemes side by side.',
  courseLabel: 'JEE',
})}
`;

export const scholarshipsPage = {
  slug: 'scholarships',
  title: 'JEE & NEET Scholarships Guide: Central, TN State & Institution (2026) | T.I.M.E. Madurai',
  description: 'Every scholarship available to Tamil Nadu JEE and NEET students — central government schemes, TN state scholarships, IIT/NIT fee waivers, minority and corporate scholarships.',
  canonical: '/scholarships/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Scholarships' },
  ],
  schema: [
    articleSchema({
      title: 'Scholarships for JEE & NEET Students: The Complete Guide',
      description: 'Central, Tamil Nadu state, institution-level, minority and corporate scholarships for JEE and NEET students.',
      url: 'https://timemadurai.com/scholarships/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
