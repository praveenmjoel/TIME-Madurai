import {
  heroBanner, stickyToc, kpiRow, callout, dataTable,
  hubCardGrid, faqAccordion, faqSchema, articleSchema, exploreHubsGrid,
  sectionHeader, ctaBand,
} from '../lib/components.mjs';

const TOC = [
  { id: 'landscape', label: 'The Landscape' },
  { id: 'neet', label: 'NEET UG' },
  { id: 'colleges', label: 'Where to Study' },
  { id: 'seats', label: 'Seats & Fees' },
  { id: 'score-guide', label: 'Score → College Guide' },
  { id: 'faqs', label: 'FAQs' },
];

const FAQS = [
  {
    q: 'How many times can I appear for NEET?',
    a: 'There is no restriction on attempts anymore — the Supreme Court removed the earlier cap of 3 attempts. But NEET is held only once a year (in May), unlike JEE Main\'s two sessions, so a bad exam day costs an entire year. This makes NEET preparation psychologically tougher than JEE.',
  },
  {
    q: 'Is Biology really worth 50% of the NEET score?',
    a: 'Yes — Biology (Botany + Zoology) is 360 of 720 marks. It is also the most predictable section: NEET Biology questions are drawn almost entirely from NCERT textbooks. Students who read NCERT Biology five-plus times and master every diagram routinely score 330–350/360, which alone can be enough for a government seat.',
  },
  {
    q: 'What is the difference between AIQ and TN State Quota?',
    a: '15% of every state government medical college\'s MBBS seats go into the All India Quota (AIQ), counselled centrally by MCC — open to students from any state. The remaining 85% is Tamil Nadu State Quota, counselled by TNMC&HC and reserved for TN-domicile students. Track both simultaneously; if you get seats in both, you must formally withdraw from one before joining the other.',
  },
  {
    q: 'Is a private medical college seat worth it?',
    a: 'It depends entirely on your financial plan. TN private medical colleges charge ₹12–25 lakh per year under management quota — ₹66 lakh to over ₹1.3 crore for the full course. A loan of that size can mean a monthly EMI north of ₹68,000 for 15 years. Government MBBS, by contrast, costs under ₹30,000/year in Tamil Nadu. Run the numbers before committing to a management-quota seat.',
  },
];

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'medical pathway',
  title: 'MBBS, NEET & Medical Admissions: The Complete Tamil Nadu Guide',
  subtitle: 'NEET UG is the single gateway to MBBS, BDS, and every AYUSH degree in India. Here is how the exam, the colleges, the seats, and the money actually work — for Tamil Nadu families.',
  stats: [
    { value: '24L+', label: 'NEET aspirants / yr' },
    { value: '~1.12L', label: 'MBBS seats in India' },
    { value: '73', label: 'Medical colleges in TN' },
    { value: '21:1', label: 'Applicants per seat' },
  ],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(TOC)}
    <div class="lg:col-span-9 space-y-24">

      <div id="landscape" class="fu">
        <p class="text-navy/60 text-base leading-relaxed max-w-3xl">
          Medicine is India's most aspirational — and most regulated — professional degree. Since 2020, every medical admission in the country, allopathic or AYUSH, flows through one exam: NEET UG. This page is the front door to our full Medical hub: NEET itself, where to study, what it costs, and what rank or score gets you where.
        </p>
        ${kpiRow([
          { value: '720', label: 'Total NEET marks' },
          { value: '50%', label: 'Marks from Biology alone' },
          { value: '₹27.5K/yr', label: 'TN govt MBBS tuition (OC)' },
          { value: '₹12–25L/yr', label: 'TN private MBBS (mgmt. quota)' },
        ])}
      </div>

      <div id="neet">
        ${sectionHeader({
          eyebrow: 'the single gateway',
          title: 'NEET UG, in one table',
          subtitle: 'One paper, once a year, 720 marks, and it decides MBBS, BDS, BAMS, BSMS, BHMS, BUMS, BNYS and B.VSc admissions alike.',
        })}
        ${dataTable(
          ['Parameter', 'Detail'],
          [
            ['Mode', 'Pen-and-paper (OMR) — not computer-based, unlike JEE'],
            ['Frequency', 'Once a year, in May — no second session'],
            ['Questions', '200 questions, 180 to be attempted — Physics, Chemistry, Botany, Zoology (50 each)'],
            ['Marking', '+4 correct, −1 wrong, 0 unattempted'],
            ['Minimum qualifying', '50th percentile (General), 40th (SC/ST/OBC), 45th (PwD)'],
            ['Languages', '13, including Tamil and English'],
          ]
        )}
        ${callout({
          type: 'mistake',
          label: 'Common mistake',
          text: 'Many aspirants over-invest in Physics and Chemistry and under-invest in Biology — even though Biology alone carries 360 of 720 marks and is far more predictable, since it tracks NCERT almost line-for-line. A student scoring 300 in Biology, 85 in Chemistry, and 75 in Physics totals 460 — enough for a government medical college in many states. Never neglect Biology.',
        })}
      </div>

      <div id="colleges">
        ${sectionHeader({
          eyebrow: 'where to study',
          title: 'Every medical pathway, mapped',
          subtitle: 'From AIIMS to AYUSH to allied health — each has its own dedicated guide inside this hub.',
        })}
        ${hubCardGrid([
          { title: 'MBBS Guide', href: '/medical/mbbs-guide/', blurb: 'How NEET score maps to admission, from AIIMS-level scores down to management-quota private seats.' },
          { title: 'AIIMS & JIPMER', href: '/medical/aiims-jipmer/', blurb: 'The 22-campus AIIMS network plus JIPMER Puducherry — India\'s AIIMS-Madurai is now TN\'s own campus.' },
          { title: 'Government Medical Colleges in TN', href: '/medical/government-medical-colleges-tamil-nadu/', blurb: '29+ government colleges across Tamil Nadu, from Madras Medical College to district colleges.' },
          { title: 'Private Medical Colleges in TN', href: '/medical/private-medical-colleges-tamil-nadu/', blurb: 'Sri Ramachandra, SRM, Saveetha and more — what they cost under merit vs. management quota.' },
          { title: 'AYUSH Guide', href: '/medical/ayush/', blurb: 'BAMS, BSMS (Siddha), BHMS, BUMS, BNYS — genuine career paths, not consolation choices.' },
          { title: 'Allied Health Sciences', href: '/medical/allied-health/', blurb: 'Nursing, physiotherapy, MLT, radiology, pharmacy and more — strong demand, faster entry.' },
        ])}
      </div>

      <div id="seats">
        ${sectionHeader({
          eyebrow: 'affordability',
          title: 'How the seats — and the fees — break down nationally',
        })}
        ${dataTable(
          ['Category', 'Approx. MBBS seats', 'Fee range'],
          [
            ['Central govt (AIIMS, JIPMER, ESIC)', '~2,500', '₹5,000–25,000/yr'],
            ['State govt medical colleges', '~35,000', '₹15,000–60,000/yr'],
            ['Deemed (private) medical colleges', '~26,000', '₹8–25 lakh/yr'],
            ['Private self-financing colleges', '~32,000', '₹12–30 lakh/yr'],
            ['Government-aided private colleges', '~5,000', '₹50,000–3 lakh/yr'],
          ]
        )}
        <p class="text-navy/40 text-xs mt-4">Tamil Nadu alone has ~7,250 MBBS seats across 73 colleges — roughly 2,700 government (very low fee) and 4,550 private/deemed (₹10–28 lakh/yr). See our <a href="/education-loans/" class="text-navy/60 underline">Education Loans hub</a> before committing to a management-quota seat.</p>
      </div>

      <div id="score-guide">
        ${sectionHeader({
          eyebrow: 'the question everyone asks',
          title: 'What NEET score gets you where?',
          subtitle: 'General-category, indicative only — always cross-check against mcc.nic.in and tnmedicalselection.net before finalising choices.',
        })}
        ${dataTable(
          ['NEET score', 'What you can realistically target'],
          [
            ['680–720', 'AIIMS (all campuses), JIPMER Puducherry, MAMC, Maulana Azad'],
            ['640–679', 'Top government medical colleges nationally; Madras Medical College, Stanley, Kilpauk'],
            ['600–639', 'Good government colleges via TN state quota'],
            ['550–599', 'Mid-tier TN government and government-aided colleges'],
            ['500–549', 'Lower TN govt colleges (reserved categories); some private (lower fee)'],
            ['450–499', 'Private medical colleges (₹10–25 lakh/yr range)'],
            ['400–449', 'AYUSH government seats (BAMS/BSMS/BHMS); private MBBS management quota'],
            ['Below 400', 'AYUSH government/private colleges — genuine, viable career paths'],
          ]
        )}
        ${callout({
          type: 'tip',
          label: 'Tamil Nadu tip',
          text: 'AIIMS Madurai — Tamil Nadu\'s own AIIMS campus, started in 2022 — is directly relevant for students from Madurai, Virudhunagar, Dindigul, Theni, and Ramanathapuram. Its cutoff is currently lower than AIIMS Delhi\'s while following the same national AIIMS teaching standard. Also worth knowing: NEET is conducted once a year, so build in mock-exam conditions well before May — there is no second session to fall back on.',
        })}
      </div>

      <div id="faqs">
        ${sectionHeader({ eyebrow: 'frequently asked', title: 'Medical admissions — quick answers' })}
        ${faqAccordion(FAQS)}
      </div>

      ${sectionHeader({ eyebrow: 'explore the hub', title: 'The rest of the knowledge hub' })}
      ${exploreHubsGrid('medical')}

    </div>
  </div>
</section>
${ctaBand({
  heading: 'Not sure if you should target AIQ, TN quota, or private?',
  sub: 'A counsellor can map your realistic NEET range to actual colleges in fifteen minutes.',
  courseLabel: 'NEET',
})}
`;

export const medicalPage = {
  slug: 'medical',
  title: 'MBBS & NEET Admissions Guide: Colleges, Cutoffs & Fees (2026) | T.I.M.E. Madurai',
  description: 'The complete Tamil Nadu guide to NEET UG and medical admissions — AIIMS, JIPMER, TN government and private medical colleges, AYUSH, allied health, and a NEET score-to-college mapping table.',
  canonical: '/medical/',
  courseLabel: 'NEET',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Medical' },
  ],
  schema: [
    articleSchema({
      title: 'MBBS, NEET & Medical Admissions: The Complete Tamil Nadu Guide',
      description: 'NEET UG, AIIMS/JIPMER, TN government and private medical colleges, AYUSH, allied health, and a NEET score-to-college mapping table.',
      url: 'https://timemadurai.com/medical/',
    }),
    faqSchema(FAQS),
  ],
  body,
};
