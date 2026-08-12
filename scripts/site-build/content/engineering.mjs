import {
  heroBanner, tocProgressBar, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'institutions', label: 'Where to Study' },
  { id: 'branches', label: 'Choosing a Branch' },
  { id: 'admissions', label: 'Entrance Exams' },
  { id: 'fees', label: 'Fees & Affordability' },
  { id: 'rank-guide', label: 'Rank → College Guide' },
  { id: 'careers', label: 'Careers & Outcomes' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'How many times can I appear for JEE Main?',
    a: 'There is no lifetime attempt limit — you can appear in consecutive years as long as you have passed or are appearing in Class 12. Each year has two sessions (January and April); most students appear in Class 12 and, if needed, once more the following year. Your best NTA score across both sessions is used for ranking.',
  },
  {
    q: 'What is the minimum Class 12 percentage needed for JEE Main?',
    a: 'There is no minimum percentage to appear for JEE Main. But to be eligible for NITs, IIITs, and GFTIs through JoSAA, you need at least 75% aggregate in Class 12 (65% for SC/ST/PwD candidates). This applies equally to Tamil Nadu State Board and CBSE students.',
  },
  {
    q: 'Is a new IIT better than a top NIT?',
    a: "For most students, a new IIT's Computer Science or Electrical Engineering branch is still the stronger choice over a non-CS branch at an old IIT — CS opens more doors regardless of which IIT it's from. But for core branches, NIT Trichy's placement ecosystem is often just as strong as a newer IIT's, especially for Tamil Nadu students who get home-state quota advantages there.",
  },
  {
    q: 'Should I choose Computer Science just because it pays the most?',
    a: 'Not automatically. CSE seats have tripled nationally since 2020 — over 8 lakh CSE seats now exist — so quality varies enormously by college. A CSE degree from a Tier-3 college does not guarantee a software job without strong problem-solving and coding practice on top of the coursework. Choose CSE because you enjoy the work, not only because of the starting salary.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'engineering pathway',
  title: 'Engineering After 12th: The Complete Tamil Nadu Guide',
  subtitle: "IITs, NITs, IIITs and private colleges. Twenty branches to choose from. Half a dozen entrance exams. This guide maps the entire engineering landscape for Tamil Nadu students — grounded in real 2024 data, not guesswork.",
  stats: [
    { value: '23', label: 'IITs' },
    { value: '31', label: 'NITs' },
    { value: '12L+', label: 'JEE Main aspirants / yr' },
    { value: '19', label: 'Major branches' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          India's engineering education ecosystem is one of the most diverse in the world. At the top sit the IITs — institutions whose alumni have founded over 2,000 companies and whose research output is cited globally. Below them, the NITs and IIITs offer excellent, affordable education with strong placement records. Across the private sector, institutions like BITS Pilani, VIT, and SRM give students quality alternatives when government-college ranks fall short. This page is the front door to our full Engineering hub — use the jump links on the left to go straight to what matters for you right now.
        </p>
      </div>

      ${kpiRow([
        { value: '₹22 LPA', label: 'Avg. IIT Madras package' },
        { value: '<1%', label: 'JEE Advanced acceptance rate' },
        { value: '75%', label: 'Min. Class 12 marks for NITs' },
        { value: '15%', label: 'TN home-state NIT Trichy quota' },
      ])}

      <div id="institutions">
        ${sectionHeader({
          eyebrow: 'where to study',
          title: 'Government & private institutions, mapped',
          subtitle: 'Every serious engineering pathway in India falls into one of six buckets. Each has its own dedicated guide inside this hub.',
        })}
        ${hubCardGrid([
          { title: 'IIT Guide', href: '/engineering/iit-guide/', blurb: 'All 23 IITs at a glance, plus deep profiles of the original seven — fees, placements, and what makes each one distinct.' },
          { title: 'NIT Guide', href: '/engineering/nit-guide/', blurb: '31 NITs, tier by tier. Why NIT Trichy’s home-state quota is uniquely valuable for Tamil Nadu students.' },
          { title: 'IIIT Guide', href: '/engineering/iiit-guide/', blurb: 'Tier-1 autonomous IIITs and the ones most relevant to TN applicants, including IIIT Kancheepuram.' },
          { title: 'IISc & IISERs', href: '/engineering/iisc-iiser/', blurb: 'Research-first alternatives to the standard B.Tech track, for students drawn to science over industry.' },
          { title: 'Private Engineering Colleges', href: '/engineering/private-engineering-colleges/', blurb: 'BITS Pilani, VIT, SRM, Amrita and more — where they fit when government-college ranks fall short.' },
          { title: 'Best Engineering Colleges in Tamil Nadu', href: '/engineering/best-engineering-colleges-tamil-nadu/', blurb: 'Anna University affiliates, TNEA cut-offs, and the strongest in-state options beyond the IIT/NIT system.' },
        ])}
      </div>

      <div id="branches">
        ${sectionHeader({
          eyebrow: 'choosing a branch',
          title: 'Nineteen branches — and how to actually choose one',
          subtitle: 'Many students pick a branch on peer pressure or the belief that "CSE is the only option." Each branch below has its own full profile — what you study, who hires you, and realistic starting salaries.',
        })}
        ${callout({
          type: 'mistake',
          label: 'Common mistake',
          text: 'Many students choose Computer Science because "everyone is doing it," without checking whether they actually enjoy coding. CSE seats have tripled since 2020 — over 8 lakh now exist nationally — so a degree alone guarantees nothing without genuine problem-solving practice on top of it. If you dislike debugging, four years of CSE can be a genuinely hard road.',
        })}
        ${hubCardGrid([
          { title: 'Computer Science Engineering', href: '/engineering/branches/computer-science-engineering/', blurb: 'The most sought-after branch — highest average salary, widest hiring base, most global opportunities.' },
          { title: 'AI & Machine Learning', href: '/engineering/branches/ai-ml/', blurb: 'The fastest-growing specialisation, closely tied to core CS fundamentals.' },
          { title: 'Electronics & Communication', href: '/engineering/branches/electronics-communication/', blurb: 'Chips, signals, and telecom — the hardware half of the digital economy.' },
          { title: 'Mechanical Engineering', href: '/engineering/branches/mechanical-engineering/', blurb: 'The broadest core branch, still the largest recruiter base in Indian manufacturing.' },
          { title: 'Civil Engineering', href: '/engineering/branches/civil-engineering/', blurb: 'Infrastructure, construction, and one of the most stable government-linked career paths.' },
          { title: 'Branch vs College — The Decision Guide', href: '/engineering/branches/branch-vs-college-debate/', blurb: '"CSE at a Tier-3 college or Mechanical at an NIT?" — the data-driven way to decide, not a one-size-fits-all answer.' },
        ])}
      </div>

      <div id="admissions">
        ${sectionHeader({
          eyebrow: 'entrance exams',
          title: 'Six exams, one landscape',
          subtitle: 'Tamil Nadu aspirants typically apply through three to five of the following routes at once.',
        })}
        ${dataTable(
          ['Exam', 'What it unlocks', 'Difficulty', 'When to take it'],
          [
            ['JEE Main', 'NITs, IIITs, CFTIs; qualifier for Advanced', '<span class="badge badge-gold">High</span>', 'Jan + Apr sessions'],
            ['JEE Advanced', 'All 23 IITs + IISc', '<span class="badge badge-gold">Very High</span>', 'After clearing JEE Main cutoff'],
            ['BITSAT', 'BITS Pilani, Goa, Hyderabad', '<span class="badge badge-gold">High</span>', 'May–June, after Boards'],
            ['VITEEE', 'VIT Vellore, Chennai, Bhopal, AP', '<span class="badge badge-navy">Moderate</span>', 'April'],
            ['SRMJEEE', 'SRM Kattankulathur, Chennai & others', '<span class="badge badge-navy">Moderate</span>', 'April–May'],
            ['TNEA', 'All TN government & aided colleges', '<span class="badge badge-navy">Merit-based</span>', 'Rank from Class 12 boards'],
          ]
        )}
        ${hubCardGrid([
          { title: 'JEE Main', href: '/engineering/admissions/jee-main/', blurb: 'Pattern, syllabus weightage, and the score-to-college mapping table.' },
          { title: 'JEE Advanced', href: '/engineering/admissions/jee-advanced/', blurb: 'What changes vs. JEE Main, and what rank gets which IIT.' },
          { title: 'BITSAT', href: '/engineering/admissions/bitsat/', blurb: 'Why it matters for TN students even after a strong JEE attempt.' },
          { title: 'VITEEE', href: '/engineering/admissions/viteee/', blurb: 'Understanding the slot system and preparation notes.' },
          { title: 'SRMJEEE', href: '/engineering/admissions/srmjeee/', blurb: 'Campus quality differences across SRM’s locations.' },
          { title: 'TNEA', href: '/engineering/admissions/tnea/', blurb: 'The cut-off formula, worked examples, and top TN colleges by rank.' },
        ], 3)}
      </div>

      <div id="fees">
        ${sectionHeader({
          eyebrow: 'affordability',
          title: 'What engineering actually costs',
          subtitle: 'Government institutions are dramatically cheaper than most private options — and SC/ST/PwD students pay no tuition at IITs at all.',
        })}
        ${dataTable(
          ['Institution type', 'Tuition / year', 'Hostel + mess / year', 'Total (4 years)'],
          [
            ['IITs (Gen/OBC)', '₹2,00,000', '₹1,20,000–1,50,000', '₹12.8–14 lakh'],
            ['IITs (SC/ST/PwD)', 'NIL', '₹1,20,000–1,50,000', '₹4.8–6 lakh'],
            ['NITs — home state', '₹1,40,000', '₹90,000–1,10,000', '₹9.2–10 lakh'],
            ['NITs — other state', '₹2,50,000', '₹90,000–1,10,000', '₹13.6–14.4 lakh'],
            ['IIITs (central-funded)', '₹1,50,000', '₹90,000–1,00,000', '₹9.6–10 lakh'],
            ['BITS Pilani', '₹5,50,000', '₹1,60,000', '₹28.4 lakh'],
            ['VIT Vellore', '₹2,00,000', '₹1,10,000', '₹12.4 lakh'],
            ['Anna Univ. affiliates (TN)', '₹50,000–1,50,000', '₹40,000–80,000', '₹3.6–9.2 lakh'],
          ]
        )}
        <p class="text-navy/40 text-xs mt-4">Figures are approximate for 2024–25 and rise 5–10% annually. See our <a href="/scholarships/" class="text-navy/60 underline">Scholarships &amp; Loans hub</a> for how to fund the gap.</p>
      </div>

      <div id="rank-guide">
        ${sectionHeader({
          eyebrow: 'the question everyone asks',
          title: 'What rank gets you where?',
          subtitle: 'A simplified, Tamil-Nadu-specific view of JEE Advanced rank vs. realistic outcomes. Always cross-check against JoSAA’s official opening/closing ranks before finalising choices.',
        })}
        ${dataTable(
          ['JEE Advanced rank', 'Realistic options'],
          [
            ['Top 100', 'IIT Madras / Bombay / Delhi — Computer Science'],
            ['100–500', 'Old IIT top branches (EE, Mech, CS at lower-ranked old IITs)'],
            ['500–1,500', 'Old IIT — all branches; IIT Hyderabad CS; IIIT Hyderabad CS'],
            ['1,500–4,000', 'New IIT CS/EE; NIT Trichy CS (Other-State quota); BITS Hyderabad CS'],
            ['4,000–8,000', 'NIT Trichy ECE/EE (Home-State); NIT Warangal; top-tier VIT CS'],
            ['8,000–15,000', 'NIT Trichy Mechanical (Home-State); Tier-2 NIT CS; Amrita Coimbatore CS'],
            ['15,000–30,000', 'Tier-2 NIT ECE/EE; NIT Trichy Civil; VIT/SRM CS'],
            ['30,000+', 'Anna University-affiliated colleges via TNEA; strong private TN colleges'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'Tamil Nadu tip',
          text: 'NIT Trichy home-state quota is one of the biggest hidden advantages TN students have. In the 2024 cycle, CSE at NIT Trichy closed around AIR 3,200 for the general all-India quota — but around AIR 7,500 for Tamil Nadu’s home-state quota. Always check both quotas during JoSAA choice-filling; don’t assume the all-India number is the only one that matters.',
        })}
      </div>

      <div id="careers">
        ${sectionHeader({
          eyebrow: 'careers & outcomes',
          title: 'Where an engineering degree actually leads',
          subtitle: 'Branch choice shapes career options more than college prestige does, past a certain point. Explore outcomes by branch, or see the full salary picture.',
        })}
        ${hubCardGrid([
          { title: 'Engineering Careers', href: '/engineering/careers/', blurb: 'Core branches vs. emerging tech roles — what 2025–2030 demand actually looks like.' },
          { title: '2025 Salary Guide', href: '/careers/salary-guide-2025/', blurb: 'Real starting-salary ranges by branch and institution tier, not inflated placement-brochure numbers.' },
        ], 2)}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Engineering admissions — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('engineering')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Not sure which path fits you?',
  sub: 'Fifteen minutes with a counsellor beats hours of forum-scrolling. No pressure, no pitch — just clarity on your options.',
  courseLabel: 'JEE',
})}
`;

export const engineeringPage = {
  slug: 'engineering',
  title: 'Engineering After 12th: IITs, NITs, Branches & JEE Guide (2026) | T.I.M.E. Madurai',
  description: 'The complete Tamil Nadu guide to engineering admissions — IITs, NITs, IIITs, 19 branches, JEE Main/Advanced, fees, and a rank-to-college mapping table, backed by 2024 data.',
  canonical: '/engineering/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Engineering' },
  ],
  schema: [
    articleSchema({
      title: 'Engineering After 12th: The Complete Tamil Nadu Guide',
      description: 'IITs, NITs, IIITs, private colleges, 19 branches, entrance exams and a rank-to-college mapping table for Tamil Nadu JEE aspirants.',
      url: 'https://timemadurai.com/engineering/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
