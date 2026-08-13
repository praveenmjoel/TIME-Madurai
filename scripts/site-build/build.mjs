import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  renderHead, renderNav, renderBreadcrumb, renderCounsellingModal,
  renderFloatingCta, renderFooter, renderScripts, renderCounsellingScript,
  breadcrumbSchema,
} from './lib/partials.mjs';
import { engineeringPage } from './content/engineering.mjs';
import { medicalPage } from './content/medical.mjs';
import { counsellingPage } from './content/counselling.mjs';
import { reservationPage } from './content/reservation.mjs';
import { scholarshipsPage } from './content/scholarships.mjs';
import { educationLoansPage } from './content/education-loans.mjs';
import { examsPage } from './content/exams.mjs';
import { careersPage } from './content/careers.mjs';
import { collegeCutoffsPage } from './content/college-cutoffs.mjs';
import { guidePage } from './content/guide.mjs';

import { iitGuidePage } from './content/engineering/iit-guide.mjs';
import { nitGuidePage } from './content/engineering/nit-guide.mjs';
import { iiitGuidePage } from './content/engineering/iiit-guide.mjs';
import { iiscIiserPage } from './content/engineering/iisc-iiser.mjs';
import { privateCollegesPage } from './content/engineering/private-engineering-colleges.mjs';
import { bestTNCollegesPage } from './content/engineering/best-engineering-colleges-tamil-nadu.mjs';
import { engineeringCareersPage } from './content/engineering/careers.mjs';
import { branchesIndexPage } from './content/engineering/branches/index.mjs';
import { csePage } from './content/engineering/branches/computer-science-engineering.mjs';
import { aiMlPage } from './content/engineering/branches/ai-ml.mjs';
import { ecePage } from './content/engineering/branches/electronics-communication.mjs';
import { mechanicalPage } from './content/engineering/branches/mechanical-engineering.mjs';
import { civilPage } from './content/engineering/branches/civil-engineering.mjs';
import { branchVsCollegePage } from './content/engineering/branches/branch-vs-college-debate.mjs';
import { eeePage } from './content/engineering/branches/electrical-engineering.mjs';
import { chemicalPage } from './content/engineering/branches/chemical-engineering.mjs';
import { aerospacePage } from './content/engineering/branches/aerospace-engineering.mjs';
import { biotechPage } from './content/engineering/branches/biotechnology.mjs';
import { biomedicalPage } from './content/engineering/branches/biomedical-engineering.mjs';
import { mechatronicsPage } from './content/engineering/branches/mechatronics-robotics.mjs';
import { dataSciencePage } from './content/engineering/branches/data-science.mjs';
import { materialsPage } from './content/engineering/branches/materials-metallurgical-engineering.mjs';
import { environmentalPage } from './content/engineering/branches/environmental-engineering.mjs';
import { industrialPage } from './content/engineering/branches/industrial-production-engineering.mjs';
import { navalArchPage } from './content/engineering/branches/naval-architecture.mjs';
import { petroleumPage } from './content/engineering/branches/petroleum-engineering.mjs';
import { miningPage } from './content/engineering/branches/mining-engineering.mjs';
import { agriFoodPage } from './content/engineering/branches/agricultural-food-technology.mjs';
import { admissionsIndexPage } from './content/engineering/admissions/index.mjs';
import { jeeMainPage } from './content/engineering/admissions/jee-main.mjs';
import { jeeAdvancedPage } from './content/engineering/admissions/jee-advanced.mjs';
import { bitsatPage } from './content/engineering/admissions/bitsat.mjs';
import { viteeePage } from './content/engineering/admissions/viteee.mjs';
import { srmjeeePage } from './content/engineering/admissions/srmjeee.mjs';
import { tneaPage } from './content/engineering/admissions/tnea.mjs';

import { mbbsGuidePage } from './content/medical/mbbs-guide.mjs';
import { aiimsJipmerPage } from './content/medical/aiims-jipmer.mjs';
import { govtCollegesTNPage } from './content/medical/government-medical-colleges-tamil-nadu.mjs';
import { privateCollegesTNPage } from './content/medical/private-medical-colleges-tamil-nadu.mjs';
import { mbbsVsBdsVsAyushPage } from './content/medical/mbbs-vs-bds-vs-ayush.mjs';
import { dropYearPage } from './content/medical/drop-year-decision.mjs';
import { medicalCareersPage } from './content/medical/careers.mjs';
import { ayushPage } from './content/medical/ayush.mjs';
import { alliedHealthPage } from './content/medical/allied-health.mjs';

import { josaaPage } from './content/counselling/josaa.mjs';
import { mccNeetPage } from './content/counselling/mcc-neet.mjs';
import { tnMedicalCounsellingPage } from './content/counselling/tn-medical-counselling.mjs';
import { tneaCounsellingPage } from './content/counselling/tnea-counselling.mjs';
import { ayushCounsellingPage } from './content/counselling/ayush-counselling.mjs';
import { choiceFillingPage } from './content/counselling/choice-filling-strategy.mjs';
import { documentsChecklistPage } from './content/counselling/documents-checklist.mjs';
import { managingMultiplePage } from './content/counselling/managing-multiple-counsellings.mjs';
import { calendarPage } from './content/counselling/calendar.mjs';
import { seatAcceptanceFeesPage } from './content/counselling/seat-acceptance-fees.mjs';

import { jeeMainExamPage } from './content/exams/jee-main.mjs';
import { jeeAdvancedExamPage } from './content/exams/jee-advanced.mjs';
import { neetUgExamPage } from './content/exams/neet-ug.mjs';
import { physicsStrategyPage } from './content/exams/physics-strategy.mjs';
import { chemistryStrategyPage } from './content/exams/chemistry-strategy.mjs';
import { mathsStrategyPage } from './content/exams/maths-strategy.mjs';
import { biologyStrategyPage } from './content/exams/biology-strategy.mjs';
import { examDayStrategyPage } from './content/exams/exam-day-strategy.mjs';
import { mockTestAnalysisPage } from './content/exams/mock-test-analysis.mjs';

import { paramedicalCareersPage } from './content/careers/paramedical-careers.mjs';
import { pureScienceCareersPage } from './content/careers/pure-science-careers.mjs';
import { defenceCivilServicesPage } from './content/careers/defence-civil-services.mjs';
import { alternativeCareersPage } from './content/careers/alternative-careers-after-12th-science.mjs';
import { entrepreneurshipPage } from './content/careers/entrepreneurship-startups.mjs';
import { salaryGuidePage } from './content/careers/salary-guide-2025.mjs';
import { decisionFrameworkPage } from './content/careers/decision-framework.mjs';

import { obcNclPage } from './content/reservation/obc-ncl.mjs';
import { scStReservationPage } from './content/reservation/sc-st-reservation.mjs';
import { ewsPage } from './content/reservation/ews.mjs';
import { pwdReservationPage } from './content/reservation/pwd-reservation.mjs';
import { tnReservationPage } from './content/reservation/tamil-nadu-reservation.mjs';
import { neetReservationPage } from './content/reservation/neet-reservation.mjs';
import { categoryVsCrlPage } from './content/reservation/category-vs-crl-rank.mjs';
import { certificatesGuidePage } from './content/reservation/certificates-guide.mjs';
import { misconceptionsPage } from './content/reservation/common-misconceptions.mjs';

import { centralScholarshipsPage } from './content/scholarships/central-government-scholarships.mjs';
import { tnScholarshipsPage } from './content/scholarships/tamil-nadu-scholarships.mjs';
import { institutionScholarshipsPage } from './content/scholarships/institution-scholarships.mjs';
import { minorityScholarshipsPage } from './content/scholarships/minority-scholarships.mjs';
import { corporateScholarshipsPage } from './content/scholarships/corporate-scholarships.mjs';
import { applicationChecklistPage } from './content/scholarships/application-checklist.mjs';

import { completeGuidePage } from './content/education-loans/complete-guide.mjs';
import { interestSubsidyPage } from './content/education-loans/interest-subsidy-schemes.mjs';
import { bankComparisonPage } from './content/education-loans/bank-comparison.mjs';
import { financingMedicalPage } from './content/education-loans/financing-medical-education.mjs';

import { iitCutoffsPage } from './content/college-cutoffs/iit-jee-advanced-2024.mjs';
import { nitCutoffsPage } from './content/college-cutoffs/nit-jee-main-2024.mjs';
import { iiitCutoffsPage } from './content/college-cutoffs/iiit-jee-main-2024.mjs';
import { bitsatCutoffsPage } from './content/college-cutoffs/bitsat-2024.mjs';
import { viteeeSrmjeeeCutoffsPage } from './content/college-cutoffs/viteee-srmjeee-2024.mjs';
import { tneaCutoffsPage } from './content/college-cutoffs/tnea-2024.mjs';
import { neetAiimsCutoffsPage } from './content/college-cutoffs/neet-aiims-2024.mjs';
import { neetTnGovtCutoffsPage } from './content/college-cutoffs/neet-tn-government-2024.mjs';
import { neetTnPrivateCutoffsPage } from './content/college-cutoffs/neet-tn-private-2024.mjs';
import { neetAyushCutoffsPage } from './content/college-cutoffs/neet-ayush-2024.mjs';

import { higherEducationPage } from './content/guide/higher-education-in-india.mjs';
import { rankingsExplainedPage } from './content/guide/nirf-naac-nba-rankings-explained.mjs';
import { nep2020Page } from './content/guide/nep-2020-explained.mjs';

import { faqIndexPage } from './content/faq/index.mjs';
import { faqJeePage } from './content/faq/jee.mjs';
import { faqNeetPage } from './content/faq/neet.mjs';
import { faqCounsellingPage } from './content/faq/counselling-and-rank.mjs';
import { faqReservationPage } from './content/faq/reservation.mjs';
import { faqCollegesPage } from './content/faq/colleges-and-branches.mjs';
import { faqDroppersPage } from './content/faq/droppers.mjs';
import { faqScholarshipsMentalHealthPage } from './content/faq/scholarships-and-mental-health.mjs';

import { jeeCoachingMaduraiPage } from './content/coaching/jee-coaching-madurai.mjs';
import { neetCoachingMaduraiPage } from './content/coaching/neet-coaching-madurai.mjs';
import { dindigulPage } from './content/coaching/dindigul.mjs';
import { theniPage } from './content/coaching/theni.mjs';
import { virudhunagarPage } from './content/coaching/virudhunagar.mjs';
import { sivagangaPage } from './content/coaching/sivaganga.mjs';
import { karaikudiPage } from './content/coaching/karaikudi.mjs';
import { sivakasiPage } from './content/coaching/sivakasi.mjs';
import { ramanathapuramPage } from './content/coaching/ramanathapuram.mjs';

import { toolsIndexPage } from './content/tools/index.mjs';
import { collegePredictorPage } from './content/tools/college-predictor.mjs';
import { branchComparisonPage } from './content/tools/branch-comparison.mjs';
import { collegeComparisonPage } from './content/tools/college-comparison.mjs';
import { careerComparisonPage } from './content/tools/career-comparison.mjs';

import { resourcesPage } from './content/resources/index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');

const PAGES = [
  engineeringPage, medicalPage, counsellingPage, reservationPage,
  scholarshipsPage, educationLoansPage, examsPage, careersPage,
  collegeCutoffsPage, guidePage,
  iitGuidePage, nitGuidePage, iiitGuidePage, iiscIiserPage,
  privateCollegesPage, bestTNCollegesPage, engineeringCareersPage,
  branchesIndexPage, csePage, aiMlPage, ecePage, mechanicalPage, civilPage, branchVsCollegePage,
  eeePage, chemicalPage, aerospacePage, biotechPage, biomedicalPage, mechatronicsPage, dataSciencePage,
  materialsPage, environmentalPage, industrialPage, navalArchPage, petroleumPage, miningPage, agriFoodPage,
  admissionsIndexPage, jeeMainPage, jeeAdvancedPage, bitsatPage, viteeePage, srmjeeePage, tneaPage,
  mbbsGuidePage, aiimsJipmerPage, govtCollegesTNPage, privateCollegesTNPage,
  mbbsVsBdsVsAyushPage, dropYearPage, medicalCareersPage, ayushPage, alliedHealthPage,
  josaaPage, mccNeetPage, tnMedicalCounsellingPage, tneaCounsellingPage, ayushCounsellingPage,
  choiceFillingPage, documentsChecklistPage, managingMultiplePage, calendarPage, seatAcceptanceFeesPage,
  jeeMainExamPage, jeeAdvancedExamPage, neetUgExamPage, physicsStrategyPage,
  chemistryStrategyPage, mathsStrategyPage, biologyStrategyPage, examDayStrategyPage, mockTestAnalysisPage,
  paramedicalCareersPage, pureScienceCareersPage, defenceCivilServicesPage, alternativeCareersPage,
  entrepreneurshipPage, salaryGuidePage, decisionFrameworkPage,
  obcNclPage, scStReservationPage, ewsPage, pwdReservationPage, tnReservationPage,
  neetReservationPage, categoryVsCrlPage, certificatesGuidePage, misconceptionsPage,
  centralScholarshipsPage, tnScholarshipsPage, institutionScholarshipsPage,
  minorityScholarshipsPage, corporateScholarshipsPage, applicationChecklistPage,
  completeGuidePage, interestSubsidyPage, bankComparisonPage, financingMedicalPage,
  iitCutoffsPage, nitCutoffsPage, iiitCutoffsPage, bitsatCutoffsPage, viteeeSrmjeeeCutoffsPage,
  tneaCutoffsPage, neetAiimsCutoffsPage, neetTnGovtCutoffsPage, neetTnPrivateCutoffsPage, neetAyushCutoffsPage,
  higherEducationPage, rankingsExplainedPage, nep2020Page,
  faqIndexPage, faqJeePage, faqNeetPage, faqCounsellingPage, faqReservationPage,
  faqCollegesPage, faqDroppersPage, faqScholarshipsMentalHealthPage,
  jeeCoachingMaduraiPage, neetCoachingMaduraiPage, dindigulPage, theniPage,
  virudhunagarPage, sivagangaPage, karaikudiPage, sivakasiPage, ramanathapuramPage,
  toolsIndexPage, collegePredictorPage, branchComparisonPage, collegeComparisonPage, careerComparisonPage,
  resourcesPage,
];

for (const page of PAGES) {
  const schema = [
    ...(page.schema || []),
    breadcrumbSchema(page.breadcrumb),
  ];

  const html = `${renderHead({
    title: page.title,
    description: page.description,
    canonical: page.canonical,
    schema,
  })}
<body class="bg-white font-sans antialiased text-navy">
${renderNav()}
${renderBreadcrumb(page.breadcrumb)}
${page.body}
${renderCounsellingModal()}
${renderFloatingCta({ courseLabel: page.courseLabel })}
${renderFooter()}
${renderScripts()}
${renderCounsellingScript()}
</body>
</html>`;

  const outDir = join(REPO_ROOT, page.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  console.log(`Built /${page.slug}/index.html (${(html.length / 1024).toFixed(1)} KB)`);
}

// ── sitemap.xml + robots.txt ─────────────────────────────────────────────
// Generated from the same PAGES array that drives the build, so it can
// never drift out of sync with what's actually published. Static
// pre-existing pages (homepage, TCE, Achiever League) are listed too.
const SITE_URL = 'https://timemadurai.com';
const today = new Date().toISOString().slice(0, 10);

const STATIC_URLS = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/tce-cat-advantage.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/achiever-league.html', priority: '0.3', changefreq: 'monthly' },
];

function priorityFor(canonical) {
  const depth = canonical.split('/').filter(Boolean).length;
  if (depth <= 1) return '0.9'; // pillar hub
  return '0.7'; // cluster/leaf page
}

const urlEntries = [
  ...STATIC_URLS.map(u => ({ loc: u.loc, priority: u.priority, changefreq: u.changefreq })),
  ...PAGES.map(p => ({ loc: p.canonical, priority: priorityFor(p.canonical), changefreq: 'monthly' })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.map(u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(REPO_ROOT, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Built /sitemap.xml (${urlEntries.length} URLs)`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
writeFileSync(join(REPO_ROOT, 'robots.txt'), robotsTxt, 'utf8');
console.log('Built /robots.txt');
