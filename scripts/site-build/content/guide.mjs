import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'landscape', label: 'The Big Picture' },
  { id: 'types', label: 'Institution Types' },
  { id: 'rankings', label: 'Rankings Explained' },
  { id: 'nep', label: 'NEP 2020' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'What\'s the actual difference between a Deemed University and a Private University?',
    a: 'A Deemed University is an existing institution elevated to university status by the Central Government (examples: BITS Pilani, Manipal, SASTRA). A Private University is created from scratch under a State Act (examples: VIT, SRM). Both are privately funded, but the recognition pathway — and often the reputation — differs a lot. Not all Deemed Universities are equal: BITS Pilani is world-class; others may not be.',
  },
  {
    q: 'Does NIRF ranking matter more than NAAC grade?',
    a: 'They measure different things. NIRF ranks institutions comparatively (Engineering, Medical, Overall, etc.) using teaching, research, graduation outcomes, and peer perception. NAAC grades overall institutional quality on an A++ to C scale, and most scholarship schemes require NAAC accreditation to even apply. Check all three before choosing a college: AICTE/NMC recognition (basic legitimacy), NAAC grade (institutional quality), and NIRF ranking (comparative standing).',
  },
  {
    q: 'Does NEP 2020 change how JEE or NEET admissions work?',
    a: 'No. NEP 2020 reshapes the undergraduate degree structure — 4-year programmes with multiple exit points, an Academic Bank of Credits, more interdisciplinary flexibility — but it does not change the JEE/NEET exam pattern, syllabus, or counselling process. IITs and NITs are implementing NEP gradually; BTech remains a 4-year degree with enhanced research components.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'before the exams',
  title: 'How Indian Higher Education Actually Works',
  subtitle: 'IIT, NIT, "Deemed University," NIRF, NAAC, AICTE — the vocabulary of Indian higher education is confusing by design. Here it is in plain language, so every other page on this site makes more sense.',
  stats: [
    { value: '1,168', label: 'Universities in India' },
    { value: '43,796', label: 'Colleges in India' },
    { value: '4.33 Cr', label: 'Total student enrolment' },
    { value: '54', label: 'Indian universities in QS World Rankings' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div id="landscape" class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          India has the third-largest higher education system in the world after China and the United States — over 1,100 universities and 43,000-plus colleges, adding roughly one new university every ten days. Understanding what category an institution falls into determines how it's funded, regulated, and how much its degree is actually worth.
        </p>
      </div>

      <div id="types">
        ${sectionHeader({ eyebrow: 'know what you\'re looking at', title: 'Institution types, decoded' })}
        ${dataTable(
          ['Type', 'Funded by', 'Typical fees (engineering)', 'Example'],
          [
            ['IITs / INIs', 'Central Govt (Parliament Act)', '₹2–2.5 lakh/yr', 'IIT Madras'],
            ['NITs / GFTIs', 'Central Govt (Parliament Act)', '₹1.5–2 lakh/yr', 'NIT Trichy'],
            ['Central Universities', 'Central Govt', '₹50K–2 lakh/yr', 'Pondicherry University'],
            ['State Universities', 'State Govt', '₹30K–1.5 lakh/yr', 'Anna University'],
            ['Deemed Universities', 'Private (UGC-notified)', '₹2–5 lakh/yr', 'BITS Pilani'],
            ['Private Universities', 'Private (State Act)', '₹1.5–5 lakh/yr', 'VIT, SRM'],
            ['Autonomous Colleges', 'Private/State + AICTE', '₹1–3 lakh/yr', 'PSG Tech, TCE Madurai'],
          ]
        )}
        ${callout({
          type: 'mistake',
          label: 'Common confusion',
          text: 'Deemed University and Private University are often used interchangeably, but the recognition pathway is different: Deemed = an existing institution elevated to university status by the Central Government. Private University = created from scratch by a State Act. Both are privately funded, but quality varies enormously within each category — always check NAAC and NIRF before assuming either label means "good."',
        })}
      </div>

      <div id="rankings">
        ${sectionHeader({ eyebrow: 'quality signals', title: 'NIRF, NAAC & NBA — what each one actually measures' })}
        ${dataTable(
          ['System', 'What it measures', 'Scale'],
          [
            ['NIRF', 'Comparative institutional ranking — teaching, research, graduation outcomes, peer perception', 'Numeric rank, by category (Engineering, Medical, Overall, etc.)'],
            ['NAAC', 'Overall institutional quality — curriculum, faculty, infrastructure, governance', 'A++ (3.51–4.00) down to D (below 1.51)'],
            ['NBA', 'Specific programme quality at department level, valid 3 years', 'Accredited / Not accredited, per programme'],
          ]
        )}
        ${hubCardGrid([
          { title: 'Higher Education in India', href: '/guide/higher-education-in-india/', blurb: 'The full institution-type breakdown, regulatory bodies, and how to verify a college is legitimate.' },
          { title: 'NIRF, NAAC & NBA Explained', href: '/guide/nirf-naac-nba-rankings-explained/', blurb: 'How to actually read these rankings before shortlisting a college.' },
          { title: 'NEP 2020 Explained', href: '/guide/nep-2020-explained/', blurb: 'What\'s actually changing in undergraduate degree structure, and what isn\'t.' },
        ])}
      </div>

      <div id="nep">
        ${sectionHeader({ eyebrow: 'the 2020 reform', title: 'NEP 2020, in three points' })}
        ${dataTable(
          ['Change', 'What it means for you'],
          [
            ['4-Year UG Programme (FYUP)', 'Multiple exit points — Certificate (Yr 1), Diploma (Yr 2), Degree (Yr 3), Honours/Research (Yr 4)'],
            ['Academic Bank of Credits (ABC)', 'Credits earned at one institution can transfer to another'],
            ['Interdisciplinary flexibility', 'Students can combine subjects across disciplines — e.g. Computer Science with Music'],
          ]
        )}
        <p class="text-navy/40 text-xs mt-4">For JEE and NEET aspirants specifically: the exam pattern, syllabus, and counselling process are unaffected by NEP — it primarily reshapes university UG structure, not IIT/NIT/AIIMS admissions.</p>
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'The system — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('guide')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Ready to go from "how it works" to "where I fit"?',
  sub: 'Talk to a counsellor about which pathway matches your goals.',
  courseLabel: 'JEE',
})}
`;

export const guidePage = {
  slug: 'guide',
  title: 'How Indian Higher Education Works: Institutions & Rankings Explained | T.I.M.E. Madurai',
  description: 'IITs, NITs, Deemed Universities, NIRF, NAAC, NBA and NEP 2020 explained in plain language — the foundational guide before diving into JEE and NEET admissions.',
  canonical: '/guide/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Guide' },
  ],
  schema: [
    articleSchema({
      title: 'How Indian Higher Education Actually Works',
      description: 'Institution types, regulatory bodies, NIRF/NAAC/NBA rankings, and NEP 2020 explained.',
      url: 'https://timemadurai.com/guide/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
