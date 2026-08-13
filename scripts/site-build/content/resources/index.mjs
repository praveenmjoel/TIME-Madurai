import { buildLeafPage } from '../../lib/leaf.mjs';

// Portal-link cards open in a new tab (unlike hubCardGrid, which is built for
// internal site links) since these all send the visitor off-site.
function portalGrid(items) {
  return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${items.map((it, i) => `<a href="${it.href}" target="_blank" rel="noopener noreferrer" class="hub-card block fu d${(i % 6) + 1}">
                <h3 class="text-navy font-semibold text-base mb-2">${it.title}</h3>
                <p class="text-navy/45 text-sm leading-relaxed mb-4">${it.blurb}</p>
                <span class="pill-label text-navy/30 inline-flex items-center gap-2">${it.domain} <span>&#8599;</span></span>
            </a>`).join('\n            ')}
        </div>`;
}

const handbookGate = `
        <div class="rounded-3xl p-8 md:p-10 fu" style="background:#0d2d6e;">
            <span class="pill-label text-gold/70">free download</span>
            <h3 class="text-white font-bold text-2xl mt-3 mb-3">The Complete JEE &amp; NEET Handbook</h3>
            <p class="text-white/50 text-sm leading-relaxed max-w-2xl mb-6">Every topic on this site — institutions, branches, admissions, counselling, reservation, scholarships, exam strategy, and careers — compiled into one reference document. Tell us where to send it and we'll share your copy directly.</p>
            <button onclick="openCounsellingForm()" class="btn-gold text-sm font-semibold px-6 py-3 rounded-full">Get My Free Copy</button>
        </div>`;

const faqs = [
  {
    q: 'Are these external portals official government sites?',
    a: 'Yes — every link on this page points to an official government, regulatory, or exam-conducting-body website (NTA, JoSAA, MCC, AICTE, state governments, etc.), not a third-party aggregator. Always double-check the URL in your browser address bar before entering any personal information, since fake look-alike sites are a real risk during admission season.',
  },
  {
    q: 'How often should I check these portals during admission season?',
    a: 'Daily, once results and counselling begin — schedules shift, choice-filling windows are short, and document-verification slots fill up fast. Bookmark the specific portals relevant to your exam (JEE: JoSAA/TNEA; NEET: MCC/TN Medical Counselling) rather than relying on word-of-mouth updates.',
  },
];

export const resourcesPage = buildLeafPage({
  slug: 'resources',
  title: 'JEE & NEET Official Resources: Exam Portals, Scholarships & Free Study Material | T.I.M.E. Madurai',
  description: 'Every official portal a JEE or NEET aspirant needs in one place — exam registration, counselling, scholarships, education loans, free study platforms, and college verification — plus the complete handbook.',
  canonical: '/resources/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Resources' }],
  eyebrow: 'the official directory',
  heroTitle: 'Official Resources & Portals',
  heroSubtitle: 'Every government exam, counselling, scholarship, and verification portal a JEE or NEET aspirant needs — in one place, so you never have to search for the "real" website during a deadline.',
  stats: [
    { value: '19', label: 'Official portals linked' },
    { value: '0', label: 'Third-party aggregators' },
  ],
  toc: [
    { id: 'exams', label: 'Exam Portals' },
    { id: 'counselling', label: 'Counselling Portals' },
    { id: 'study', label: 'Free Study Platforms' },
    { id: 'financial', label: 'Scholarships & Loans' },
    { id: 'verify', label: 'Verify a College' },
    { id: 'handbook', label: 'The Handbook' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Bookmark this page. It links directly to the official site for every exam, counselling round, scholarship scheme, and college-verification tool referenced across this knowledge hub — no aggregators, no ad-heavy third-party portals.',
  sections: [
    {
      id: 'exams',
      eyebrow: 'register & check results here',
      title: 'Official exam portals',
      custom: portalGrid([
        { title: 'JEE Main', domain: 'jeemain.nta.nic.in', href: 'https://jeemain.nta.nic.in', blurb: 'Registration, admit card, and results for JEE Main, conducted by NTA.' },
        { title: 'JEE Advanced', domain: 'jeeadv.ac.in', href: 'https://jeeadv.ac.in', blurb: 'Registration and results for JEE Advanced, run by the zonal IIT each year.' },
        { title: 'NEET UG', domain: 'neet.nta.nic.in', href: 'https://neet.nta.nic.in', blurb: 'Registration, admit card, and results for NEET UG, conducted by NTA.' },
        { title: 'AIIMS Exams', domain: 'aiimsexams.ac.in', href: 'https://aiimsexams.ac.in', blurb: 'INI-CET and other AIIMS-specific entrance exam notifications.' },
        { title: 'NTA', domain: 'nta.ac.in', href: 'https://nta.ac.in', blurb: 'The National Testing Agency\'s main site — exam calendar across JEE, NEET, CUET and more.' },
      ]),
    },
    {
      id: 'counselling',
      eyebrow: 'seat allotment happens here',
      title: 'Official counselling portals',
      custom: portalGrid([
        { title: 'JoSAA', domain: 'josaa.nic.in', href: 'https://josaa.nic.in', blurb: 'Seat allocation for every IIT, NIT, IIIT, and GFTI.' },
        { title: 'MCC', domain: 'mcc.nic.in', href: 'https://mcc.nic.in', blurb: 'NEET All India Quota (15%) counselling, run by the Medical Counselling Committee.' },
        { title: 'TNEA', domain: 'tneaonline.org', href: 'https://tneaonline.org', blurb: 'Tamil Nadu Engineering Admissions — counselling for every TN engineering college.' },
        { title: 'TN Medical Counselling', domain: 'tnmedicalselection.net', href: 'https://tnmedicalselection.net', blurb: 'The 85% TN State Quota medical counselling process (TNMC&HC).' },
      ]),
    },
    {
      id: 'study',
      eyebrow: 'no-cost preparation material',
      title: 'Free study platforms',
      custom: portalGrid([
        { title: 'NCERT', domain: 'ncert.nic.in', href: 'https://ncert.nic.in', blurb: 'Official textbooks — the actual syllabus foundation for both JEE and NEET.' },
        { title: 'DIKSHA', domain: 'diksha.gov.in', href: 'https://diksha.gov.in', blurb: 'The Government of India\'s national digital learning platform, free for all students.' },
        { title: 'SWAYAM', domain: 'swayam.gov.in', href: 'https://swayam.gov.in', blurb: 'Free government MOOC platform with courses across science, maths, and engineering fundamentals.' },
        { title: 'NPTEL', domain: 'nptel.ac.in', href: 'https://nptel.ac.in', blurb: 'IIT/IISc-taught video courses — most useful once you\'re already in an engineering programme.' },
      ]),
    },
    {
      id: 'financial',
      eyebrow: 'funding your education',
      title: 'Scholarship & education loan portals',
      custom: portalGrid([
        { title: 'National Scholarship Portal', domain: 'scholarships.gov.in', href: 'https://scholarships.gov.in', blurb: 'The single-window portal for every central government scholarship scheme.' },
        { title: 'Vidya Lakshmi', domain: 'vidyalakshmi.co.in', href: 'https://www.vidyalakshmi.co.in', blurb: 'Government of India\'s unified education loan portal — apply to multiple banks from one application.' },
        { title: 'Tamil Nadu e-Grants', domain: 'tn.gov.in', href: 'https://www.tn.gov.in', blurb: 'Gateway to Tamil Nadu\'s state scholarship schemes — search "e-Grants" for the direct portal.' },
      ]),
    },
    {
      id: 'verify',
      eyebrow: 'before you trust a college\'s claims',
      title: 'Verify a college is genuine',
      custom: portalGrid([
        { title: 'NIRF Rankings', domain: 'nirfindia.org', href: 'https://www.nirfindia.org', blurb: 'The Government of India\'s official comparative college ranking — check any college here before trusting a "top-ranked" claim.' },
        { title: 'AICTE', domain: 'aicte-india.org', href: 'https://www.aicte-india.org', blurb: 'Verify AICTE approval for any private engineering college before applying.' },
        { title: 'National Medical Commission', domain: 'nmc.org.in', href: 'https://www.nmc.org.in', blurb: 'Verify MBBS/BDS college recognition — essential before paying any private medical college fee.' },
      ]),
    },
    {
      id: 'handbook',
      eyebrow: '',
      title: '',
      custom: handbookGate,
    },
  ],
  faqs,
  faqTitle: 'Using these resources — quick answers',
  backLink: { label: 'the knowledge hub', href: '/' },
  ctaHeading: 'Overwhelmed by which portal applies to you?',
  ctaSub: 'A counsellor can point you to exactly the right one for your exam and category.',
});
