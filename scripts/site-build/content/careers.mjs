import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'reality', label: 'The Reality Check' },
  { id: 'paths', label: 'Career Paths' },
  { id: 'salary', label: 'Salary Reality' },
  { id: 'framework', label: 'Decision Framework' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'What happens to the majority who don\'t get a top JEE/NEET seat?',
    a: 'Only around 12 lakh of ~25 lakh JEE Main applicants clear the cutoff, and only about 1 lakh of ~21 lakh NEET applicants secure a government medical seat. The large majority need — and often thrive in — alternative paths: pure sciences, allied health, design, defence, civil services, or entrepreneurship. None of these are consolation choices; each has genuine, well-paying career tracks.',
  },
  {
    q: 'Is a "default" career choice ever a good idea?',
    a: 'Rarely. A student who genuinely wants to be a physiotherapist but joins MBBS under family pressure, or a naturally creative student who reluctantly takes CSE, usually underperforms relative to their potential. Use an aptitude assessment before locking in a path — natural fit compounds over a 30-year career.',
  },
  {
    q: 'How much does location affect real income?',
    a: 'A lot, once you adjust for cost of living. ₹12 LPA in Coimbatore, Madurai, or Tiruchirappalli buys noticeably more than ₹18 LPA in Mumbai. When comparing offers, always think in cost-of-living-adjusted terms, not just the headline CTC.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'life after the exam',
  title: 'Careers After JEE & NEET: The Complete Outcomes Guide',
  subtitle: 'JEE and NEET open specific doors, but the real career landscape is much wider. This hub maps every realistic path — engineering, medical, paramedical, defence, business, and beyond — with honest salary data.',
  stats: [
    { value: '12L / 25L', label: 'JEE Main applicants who clear cutoff' },
    { value: '1L / 21L', label: 'NEET applicants who get govt MBBS' },
    { value: '₹40–80L', label: 'FAANG SDE at 5 yrs (IIT CSE)' },
    { value: '3rd', label: 'India\'s global startup ecosystem rank' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div id="reality" class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          Most students only see two outcomes when preparing for JEE or NEET: get in, or don't. In reality, engineering and medical careers themselves branch widely — and a large, genuinely rewarding universe of alternative paths exists for students who don't land their first-choice seat, or who discover a different strength along the way.
        </p>
        ${callout({
          type: 'info',
          label: 'Worth knowing',
          text: 'Engineering and medical career outlook by branch/degree already lives inside the Engineering and Medical hubs — this page focuses on everything else: paramedical, pure sciences, defence, civil services, design, business, and entrepreneurship.',
        })}
      </div>

      <div id="paths">
        ${sectionHeader({ eyebrow: 'beyond the obvious', title: 'Career tracks worth taking seriously' })}
        ${hubCardGrid([
          { title: 'Paramedical Careers', href: '/careers/paramedical-careers/', blurb: 'Nursing, physiotherapy, MLT, radiology — strong demand, faster entry, real international mobility.' },
          { title: 'Pure Science Careers', href: '/careers/pure-science-careers/', blurb: 'B.Sc./M.Sc. routes into research, actuarial science, and quant finance — undervalued but increasingly rewarding.' },
          { title: 'Defence &amp; Civil Services', href: '/careers/defence-civil-services/', blurb: 'NDA, CDS, AFCAT, and UPSC — structured entry points for science students.' },
          { title: 'Alternative Careers After 12th Science', href: '/careers/alternative-careers-after-12th-science/', blurb: 'Design, architecture, animation, and other non-engineering, non-medical paths.' },
          { title: 'Entrepreneurship &amp; Startups', href: '/careers/entrepreneurship-startups/', blurb: 'AgriTech, HealthTech, EdTech and CleanTech opportunities specific to Tamil Nadu.' },
          { title: '2025 Salary Guide', href: '/careers/salary-guide-2025/', blurb: 'Real 5-year-experience compensation across every major path, not placement-brochure numbers.' },
        ])}
      </div>

      <div id="salary">
        ${sectionHeader({ eyebrow: 'honest numbers', title: 'Salary reality check — 5 years in' })}
        ${dataTable(
          ['Path', 'Example role', 'Approx. CTC (5 yrs)'],
          [
            ['IIT CSE grad', 'Senior SDE at a top tech company', '₹40–80 LPA'],
            ['NIT ECE grad', 'VLSI Design Engineer', '₹12–25 LPA'],
            ['Govt MBBS → MD', 'Resident/Consultant, govt + private OPD', '₹18–36 LPA combined'],
            ['B.Sc. Nursing → Gulf/Middle East', 'ICU Staff Nurse', '₹15–25 LPA (tax-free equiv.)'],
            ['BTech + CA', 'CFO track, mid-cap company', '₹25–60 LPA'],
            ['IAS (after UPSC)', 'District Collector, TN cadre', '₹12–20 LPA + perks + authority'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'Tamil Nadu tip',
          text: 'Chennai (automobile, IT, aerospace), Coimbatore (precision engineering, startups), and Hosur (EV manufacturing) are TN\'s strongest industrial clusters. NIT Trichy graduates carry a near-100% placement record across core and IT sectors — proof that a strong TN institution can match metro-city outcomes without the metro cost of living.',
        })}
      </div>

      <div id="framework">
        ${sectionHeader({ eyebrow: 'choosing your path', title: 'A simple decision framework' })}
        ${dataTable(
          ['Your strength profile', 'Recommended primary path'],
          [
            ['Strong in Maths, competitive mindset', 'CSE/ECE via JEE → software, AI/ML, quant finance'],
            ['Strong in Biology, empathetic', 'MBBS (600+), BDS (550+), nursing, physiotherapy'],
            ['Creative + technical', 'B.Arch, B.Des, product/UX design'],
            ['Logical + business-minded', 'BTech + MBA via CAT, CA, actuary'],
            ['Physically fit, leadership-oriented', 'NDA, CDS, AFCAT, UPSC Civil Services'],
            ['Research-oriented, broad science aptitude', 'IISc/IISER integrated M.Sc., PhD abroad'],
          ]
        )}
        ${hubCardGrid([
          { title: 'Decision Framework', href: '/careers/decision-framework/', blurb: 'The full strength-to-path mapping, with alternative options for every profile.' },
        ], 1)}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Careers — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('careers')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Not sure which strength profile fits you?',
  sub: 'A career aptitude conversation beats months of second-guessing.',
  courseLabel: 'JEE',
})}
`;

export const careersPage = {
  slug: 'careers',
  title: 'Careers After JEE & NEET: Outcomes, Salaries & Alternatives (2026) | T.I.M.E. Madurai',
  description: 'Every realistic career path for science students — paramedical, pure sciences, defence, civil services, design, and entrepreneurship — with honest 2025 salary data and a decision framework.',
  canonical: '/careers/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Careers' },
  ],
  schema: [
    articleSchema({
      title: 'Careers After JEE & NEET: The Complete Outcomes Guide',
      description: 'Alternative and mainstream career paths for science students, with salary data and a decision framework.',
      url: 'https://timemadurai.com/careers/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
