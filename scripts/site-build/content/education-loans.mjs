import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'basics', label: 'How Loans Work' },
  { id: 'banks', label: 'Bank Comparison' },
  { id: 'subsidies', label: 'Interest Subsidies' },
  { id: 'medical', label: 'Financing MBBS' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'Do I need collateral for an education loan?',
    a: 'Not for amounts up to ₹7.5 lakh under the standard IBA Model Scheme — most major banks (SBI, Canara, Indian Bank, IOB) offer this without collateral, especially for admissions to "Premier Institutions" like IITs and NITs, which get faster, lighter-scrutiny approval. Loans above ₹7.5–10 lakh typically require collateral security.',
  },
  {
    q: 'What is a moratorium period?',
    a: 'The moratorium is course duration plus one year (or six months after you get a job, whichever comes first) — during this time you don\'t have to repay the loan. Some subsidy schemes (like ACSIS for OBC/EBC students) cover the interest during this entire moratorium period, so the loan doesn\'t grow while you\'re still studying.',
  },
  {
    q: 'Is a ₹60 lakh medical education loan realistic to repay?',
    a: 'Run the numbers before committing. A ₹60 lakh loan at 11% over 15 years works out to roughly ₹68,000/month EMI — more than most newly qualified MBBS doctors earn during their one-year internship and subsequent PG preparation. Management-quota medical loans need careful, realistic family-level financial planning, not just admission-day optimism.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'financing your degree',
  title: 'Education Loans for Engineering & Medical Students',
  subtitle: 'Loans are the most common way Indian families finance private engineering and medical seats. Here is how the standard scheme works, which banks TN students actually use, and what interest subsidies can save you.',
  stats: [
    { value: '₹7.5L', label: 'Max loan without collateral' },
    { value: '8.5–12%', label: 'Typical interest rate range' },
    { value: '15 yrs', label: 'Max repayment tenure' },
    { value: '100%', label: 'Interest waived under ACSIS (OBC/EBC)' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div id="basics" class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          The Indian Banks' Association (IBA) Model Education Loan Scheme is what most public-sector banks follow. Loans up to ₹10 lakh generally need no collateral; interest runs 8.5–12% depending on the bank and loan size; and repayment starts only after a moratorium of course-duration-plus-one-year.
        </p>
        ${dataTable(
          ['Feature', 'Standard terms'],
          [
            ['Loan without collateral', 'Up to ₹10 lakh (studies-based alone)'],
            ['Interest rate', '8.5–12% p.a., bank &amp; category dependent'],
            ['Moratorium', 'Course duration + 1 year, or 6 months post-employment'],
            ['Repayment tenure', 'Up to 15 years after moratorium'],
          ]
        )}
      </div>

      <div id="banks">
        ${sectionHeader({ eyebrow: 'where to apply', title: 'Major banks, side by side' })}
        ${dataTable(
          ['Bank', 'Max (no collateral)', 'Interest rate', 'Note'],
          [
            ['SBI', '₹7.5 lakh (India)', '~9.55–11.15%', 'Vidya Lakshmi Portal; 0.5% concession for girls'],
            ['Canara Bank', '₹7.5 lakh', '~9.25–10.5%', 'Fast disbursement for Premier Institutions'],
            ['Indian Bank', '₹7.5 lakh', '~9.5–11.0%', 'Chennai HQ; strong TN branch network'],
            ['Indian Overseas Bank', '₹7.5 lakh', '~10.0–11.5%', 'Chennai HQ; easy access across TN'],
            ['Axis / HDFC Credila', '₹20–75 lakh (with collateral)', '~11–14%', 'Faster approval, higher rate — useful when a PSU bank is slow'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'Tamil Nadu tip',
          text: 'Apply through the Vidya Lakshmi Portal (vidyalakshmi.co.in) — one application reaches multiple banks so you can compare offers. Indian Bank and Indian Overseas Bank, both Chennai-headquartered, are particularly accessible for Tamil Nadu students thanks to their district-level branch networks.',
        })}
      </div>

      <div id="subsidies">
        ${sectionHeader({ eyebrow: 'reduce the real cost', title: 'Interest subsidy schemes' })}
        ${hubCardGrid([
          { title: 'Complete Guide to Education Loans', href: '/education-loans/complete-guide/', blurb: 'The full IBA Model Scheme walkthrough — eligibility, documentation, and the application process.' },
          { title: 'Interest Subsidy Schemes', href: '/education-loans/interest-subsidy-schemes/', blurb: 'ACSIS for OBC/EBC students, Padho Pardesh, and TN state subsidy schemes explained.' },
          { title: 'Bank Comparison', href: '/education-loans/bank-comparison/', blurb: 'A deeper side-by-side of every major lender relevant to Tamil Nadu students.' },
          { title: 'Financing Medical Education', href: '/education-loans/financing-medical-education/', blurb: 'Why MBBS loans need special planning — EMI math, and when a government seat changes everything.' },
        ], 2)}
      </div>

      <div id="medical">
        ${sectionHeader({ eyebrow: 'the biggest number', title: 'Financing MBBS specifically' })}
        ${dataTable(
          ['College type', 'Total cost (5.5 yrs)', 'Loan strategy'],
          [
            ['TN govt MBBS (OC/BC)', '~₹1.5–2 lakh', 'Usually no loan needed'],
            ['TN govt MBBS (SC/ST)', '~₹75,000–1 lakh', 'Scholarship + zero tuition covers most'],
            ['Private MBBS (govt quota seat)', '~₹8–16 lakh', 'Loan of ₹10–20 lakh under IBA scheme'],
            ['Private MBBS (management quota)', '~₹38–82 lakh', 'Large loan (₹40–80 lakh) — needs collateral and careful planning'],
          ]
        )}
        ${callout({
          type: 'mistake',
          label: 'Common mistake',
          text: 'Families commit to a management-quota MBBS seat on admission day without running the EMI math. A ₹60 lakh loan at 11% over 15 years is roughly ₹68,000/month — more than most fresh MBBS graduates earn during internship. Calculate the total 5.5-year cost and realistic EMI before signing, not after.',
        })}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Education loans — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('education-loans')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Weighing a private seat against a drop year for government?',
  sub: 'A fifteen-minute conversation can save a decade of loan repayment.',
  courseLabel: 'NEET',
})}
`;

export const educationLoansPage = {
  slug: 'education-loans',
  title: 'Education Loans for Engineering & Medical Students (2026) | T.I.M.E. Madurai',
  description: 'How education loans work for JEE and NEET admissions — bank comparison, interest subsidy schemes, and a realistic guide to financing private engineering and MBBS seats.',
  canonical: '/education-loans/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Education Loans' },
  ],
  schema: [
    articleSchema({
      title: 'Education Loans for Engineering & Medical Students',
      description: 'Bank comparison, interest subsidy schemes, and financing medical education for JEE and NEET aspirants.',
      url: 'https://timemadurai.com/education-loans/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
