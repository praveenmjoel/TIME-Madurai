import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'overview', label: 'Who Handles What' },
  { id: 'processes', label: 'The Six Processes' },
  { id: 'terms', label: 'Key Terms' },
  { id: 'documents', label: 'Documents' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'What is the difference between "Float", "Freeze", and "Slide" in JoSAA?',
    a: 'Freeze accepts your allotted seat permanently — no further upgrades. Float keeps your current seat while allowing JoSAA to upgrade you in later rounds if a better one comes up. Slide keeps your institute but lets you switch to a different programme you prefer more within the same institute. Choosing the wrong response can cost you a better seat or forfeit the one you have — always match your response to what you actually want.',
  },
  {
    q: 'I got seats in both MCC and TN State Medical counselling — what do I do?',
    a: 'You must formally withdraw from one before joining the other. Holding both simultaneously risks both being cancelled. MCC and TN State run on different portals with different timelines, so track both carefully and act the moment you have a seat you actually want.',
  },
  {
    q: 'What documents get rejected most often at TN counselling verification?',
    a: 'Community certificates issued by a Village Administrative Officer (VAO) instead of the Tahsildar — these are not accepted for TN medical or engineering counselling. Apply for your Tahsildar-issued certificate at least three months before counselling season, since Revenue Department queues get very long in June–July.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'after the exam',
  title: 'JEE & NEET Counselling: The Complete Process Guide',
  subtitle: 'Scoring well is only half the journey. Converting a rank into an actual seat — through JoSAA, MCC, TN state counselling, or TNEA — has its own deadlines, rules, and pitfalls that cost students real seats every year.',
  stats: [
    { value: '6', label: 'Counselling bodies to track' },
    { value: '25,000', label: 'Max JoSAA choices allowed' },
    { value: '24–36h', label: 'Typical response window per round' },
    { value: '3+', label: 'Months lead time for certificates' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div id="overview" class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          Many students lose excellent seats simply because they didn't understand how counselling works — not because their rank wasn't good enough. Six separate bodies run parallel processes for engineering and medical seats, often on overlapping timelines. This hub walks through each one.
        </p>
        ${dataTable(
          ['Counselling body', 'Covers', 'Who participates'],
          [
            ['JoSAA', 'IITs, NITs, IIITs, GFTIs', 'JEE Advanced + JEE Main qualifiers'],
            ['MCC', '15% AIQ govt medical seats + all central/deemed medical universities', 'All NEET UG qualifiers'],
            ['TN Medical Counselling (TNMC&HC)', '85% TN state quota + all private MBBS/BDS', 'TN-domicile NEET qualifiers'],
            ['TNEA', 'All TN govt + private engineering (except SRM/VIT/Saveetha)', '10+2 PCM students in TN — no entrance exam needed'],
            ['Private deemed counselling', 'VIT, SRM, Saveetha', 'Their own rank holders (VITEEE/SRMJEEE/SAEEE)'],
            ['AYUSH TN counselling', 'BAMS/BSMS/BHMS/BUMS state quota', 'TN NEET qualifiers'],
          ]
        )}
      </div>

      <div id="processes">
        ${sectionHeader({
          eyebrow: 'the six processes',
          title: 'Each counselling, explained in depth',
        })}
        ${hubCardGrid([
          { title: 'JoSAA', href: '/counselling/josaa/', blurb: 'Round-by-round process for IIT/NIT/IIIT seat allocation, plus how home-state quota works at NIT Trichy.' },
          { title: 'TNEA Counselling', href: '/counselling/tnea-counselling/', blurb: 'No entrance exam — purely Class 12 marks. The cut-off formula and round-by-round process.' },
          { title: 'MCC — NEET AIQ', href: '/counselling/mcc-neet/', blurb: 'The 15% All India Quota process for government medical seats, AIIMS, and JIPMER.' },
          { title: 'TN Medical Counselling', href: '/counselling/tn-medical-counselling/', blurb: 'The 85% TN state quota process — the most important counselling for TN medical aspirants.' },
          { title: 'AYUSH Counselling', href: '/counselling/ayush-counselling/', blurb: 'BAMS/BSMS/BHMS/BUMS state quota seats, run by DIMH Tamil Nadu.' },
          { title: 'Choice-Filling Strategy', href: '/counselling/choice-filling-strategy/', blurb: 'The single most consequential step in any counselling — how to order 50+ genuine choices correctly.' },
        ])}
      </div>

      <div id="terms">
        ${sectionHeader({ eyebrow: 'jargon, decoded', title: 'Key terms you\'ll actually need' })}
        ${dataTable(
          ['Term', 'What it means'],
          [
            ['CRL', 'Common Rank List — your overall JEE Main/Advanced rank across all categories'],
            ['Home State Quota', 'NITs reserve 50% of seats for students from the NIT\'s own state — the rest is Other-State quota'],
            ['Freeze / Float / Slide', 'Accept permanently / keep upgrading / switch programme within the same institute'],
            ['Opening / Closing Rank', 'The best and worst rank that got a seat in a given programme last year — a planning benchmark, not a guarantee'],
          ]
        )}
        ${callout({
          type: 'mistake',
          label: 'Common mistake',
          text: 'The most common JoSAA mistake: filling only 5–10 choices. With 25,000 choices allowed and millions of competing students, a rank that looks "safe" for one seat can miss if cutoffs shift. Fill 50+ choices you genuinely accept, spanning multiple institutes and programmes — and put your true preference order first, not your predicted allotment.',
        })}
      </div>

      <div id="documents">
        ${sectionHeader({ eyebrow: 'paperwork', title: 'What every counselling asks for' })}
        ${dataTable(
          ['Document', 'JoSAA / IIT', 'MCC / AIQ', 'TN Medical', 'TNEA'],
          [
            ['10th &amp; 12th mark sheets', 'Required', 'Required', 'Required', 'Required'],
            ['Transfer certificate', 'Required', 'Required', 'Required', 'Required'],
            ['Community certificate (Tahsildar-issued)', 'If applicable', 'If applicable', 'Essential', 'Essential'],
            ['Income certificate (BC/MBC)', 'N/A', 'N/A', 'Required', 'Required'],
            ['Nativity / residential certificate', 'N/A', 'N/A', 'Required', 'Required'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'Tamil Nadu tip',
          text: 'Community certificates for TN counselling must be issued by the Tahsildar (Revenue Department) — certificates from Village Administrative Officers or school headmasters are not accepted. Apply through edistrict.tn.gov.in at least three months before counselling season; June–July queues are long.',
        })}
      </div>

      <div id="calendar">
        ${sectionHeader({ eyebrow: 'timing', title: 'The counselling calendar (approximate, 2025–26 cycle)' })}
        ${dataTable(
          ['Month', 'What\'s happening'],
          [
            ['May (last week)', 'JEE Advanced conducted'],
            ['June', 'JEE Advanced result, TNEA registration, JoSAA registration &amp; Round 1, NEET result'],
            ['July', 'JoSAA Rounds 2–6, MCC Rounds 1–2, TN Medical verification &amp; Round 1, TNEA Rounds'],
            ['Late July – Aug', 'Spot rounds, mop-up rounds, final reporting to colleges'],
            ['Aug – Sept', 'AYUSH TN counselling, stray vacancy rounds'],
          ]
        )}
        <p class="text-navy/40 text-xs mt-4">Always verify exact dates on official portals — josaa.nic.in, mcc.nic.in, tnmedicalselection.net, tneaonline.org — never rely on coaching WhatsApp groups for deadlines.</p>
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Counselling — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('counselling')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Counselling season is unforgiving of missed deadlines.',
  sub: 'Get a counsellor to help you build your choice list before the window opens.',
  courseLabel: 'JEE',
})}
`;

export const counsellingPage = {
  slug: 'counselling',
  title: 'JEE & NEET Counselling Guide: JoSAA, MCC, TNEA & TN Medical (2026) | T.I.M.E. Madurai',
  description: 'How JoSAA, MCC, TN Medical Counselling, TNEA and AYUSH counselling actually work — key terms, documents checklist, and the full 2026 counselling calendar for Tamil Nadu students.',
  canonical: '/counselling/',
  courseLabel: 'JEE',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Counselling' },
  ],
  schema: [
    articleSchema({
      title: 'JEE & NEET Counselling: The Complete Process Guide',
      description: 'JoSAA, MCC, TN Medical Counselling, TNEA and AYUSH counselling explained, with documents checklist and calendar.',
      url: 'https://timemadurai.com/counselling/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
