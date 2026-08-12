import { heroBanner, sectionHeader, ctaBand, articleSchema } from '../../lib/components.mjs';

const dataScript = `
const CAREERS = {
  'Software Engineer (IIT CSE)': { salary5yr: '₹40–80 LPA', timeline: '4 yrs BTech, job-ready immediately', security: 'High', note: 'Highest ceiling of any path here, but requires genuine coding aptitude', link: '/careers/salary-guide-2025/' },
  'Govt MBBS → MD Medicine': { salary5yr: '₹18–36 LPA combined', timeline: '5.5 yrs MBBS + 1–2 yrs NEET PG prep + 3 yrs MD', security: 'Very High', note: 'Longest runway to full earning potential, but highest job security', link: '/careers/salary-guide-2025/' },
  'BTech + CA': { salary5yr: '₹25–60 LPA (CFO track)', timeline: '4 yrs BTech + 4–5 yrs CA (can overlap)', security: 'High', note: 'Strong for students with quantitative aptitude who prefer business over pure engineering', link: '/careers/alternative-careers-after-12th-science/' },
  'ISRO Scientist (via GATE)': { salary5yr: '₹9–14 LPA + housing + research env.', timeline: '4 yrs BTech + GATE + interview', security: 'Very High', note: 'Lower headline salary, but exceptional job security and national research prestige', link: '/careers/salary-guide-2025/' },
  'IAS (after UPSC)': { salary5yr: '₹12–20 LPA + perks + authority', timeline: '3 yrs graduate + 3–6 yrs UPSC prep', security: 'Very High', note: 'Longest and most uncertain preparation runway of any path here', link: '/careers/defence-civil-services/' },
  'B.P.T. → Canada PR': { salary5yr: 'CAD 70,000–95,000 (~₹45–60 LPA equiv.)', timeline: '4.5 yrs B.P.T. + 2–3 yr Canada licensure pathway', security: 'Very High', note: 'Strong international mobility without an MBBS-length commitment', link: '/careers/paramedical-careers/' },
];
function renderCareer(id, key) {
  const c = CAREERS[key];
  document.getElementById(id).innerHTML = '<h3 class="text-navy font-semibold text-lg mb-4">' + key + '</h3>' +
    '<div class="space-y-4 text-sm">' +
    '<div><div class="pill-label text-navy/30 mb-1">CTC at 5 years</div><div class="text-navy/70">' + c.salary5yr + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Timeline to get there</div><div class="text-navy/70">' + c.timeline + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Job security</div><div class="text-navy/70">' + c.security + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Worth knowing</div><div class="text-navy/70">' + c.note + '</div></div>' +
    '<a href="' + c.link + '" class="pill-label text-navy/40 hover:text-gold inline-flex items-center gap-2 mt-2">full details &rarr;</a>' +
    '</div>';
}
function updateComparison() {
  renderCareer('career-a-out', document.getElementById('career-a').value);
  renderCareer('career-b-out', document.getElementById('career-b').value);
}
document.addEventListener('DOMContentLoaded', () => {
  const opts = Object.keys(CAREERS).map(k => '<option value="' + k + '">' + k + '</option>').join('');
  document.getElementById('career-a').innerHTML = opts;
  document.getElementById('career-b').innerHTML = opts;
  document.getElementById('career-b').value = 'Govt MBBS → MD Medicine';
  updateComparison();
});
`;

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'tools · career comparison',
  title: 'Career Path Comparison',
  subtitle: 'Pick any two career paths and compare real 5-year earning potential, timeline, and job security side by side.',
  stats: [],
})}
</section>
<section class="sec bg-white">
  <div class="max-w-5xl mx-auto px-6 md:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      <select id="career-a" onchange="updateComparison()" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
      <select id="career-b" onchange="updateComparison()" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div id="career-a-out" class="hub-card"></div>
      <div id="career-b-out" class="hub-card"></div>
    </div>
    <div class="mt-16">
      ${sectionHeader({ eyebrow: 'go deeper', title: 'Explore every career path' })}
      <p class="text-navy/50 text-sm leading-relaxed">This tool covers six commonly-compared paths. See our full <a href="/careers/" class="text-navy/70 underline">Careers hub</a> and <a href="/careers/salary-guide-2025/" class="text-navy/70 underline">2025 Salary Guide</a> for the complete picture.</p>
    </div>
  </div>
</section>
${ctaBand({ heading: 'Weighing two genuinely different career paths?', sub: 'A counsellor can help you think through timeline and risk, not just salary.', courseLabel: 'JEE' })}
<script>${dataScript}</script>
`;

export const careerComparisonPage = {
  slug: 'tools/career-comparison',
  title: 'Career Path Comparison Tool: Salary, Timeline & Security | T.I.M.E. Madurai',
  description: 'Compare engineering, medical, government, and international career paths side by side — real 5-year salary, timeline, and job security data.',
  canonical: '/tools/career-comparison/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'Career Comparison' }],
  schema: [articleSchema({ title: 'Career Path Comparison Tool', description: 'Side-by-side career path comparison.', url: 'https://timemadurai.com/tools/career-comparison/' })],
  body,
};
