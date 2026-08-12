import { heroBanner, sectionHeader, ctaBand, articleSchema } from '../../lib/components.mjs';

const dataScript = `
const BRANCHES = {
  'CSE': { name: 'Computer Science Engineering', salary: 'IITs: ₹25–50L · NITs: ₹10–20L · Private: ₹3.5–12L', recruiters: 'Google, Microsoft, Amazon, Zoho, TCS', fit: 'Enjoys coding, logic puzzles, sitting at a computer for long hours', demand: 'Very high — India targets 1 crore tech jobs by 2030', link: '/engineering/branches/computer-science-engineering/' },
  'AI/ML': { name: 'AI &amp; Machine Learning', salary: 'IITs: ₹30–70L · NITs: ₹12–25L · Private: ₹8–15L', recruiters: 'Google DeepMind, Microsoft AI, Meta AI, NVIDIA', fit: 'Excited by AI, strong in maths/stats, research-driven', demand: 'Exceptional — 9.7 crore new AI jobs projected globally', link: '/engineering/branches/ai-ml/' },
  'ECE': { name: 'Electronics &amp; Communication', salary: 'IITs: ₹15–35L (VLSI can exceed ₹40L) · NITs: ₹8–18L', recruiters: 'Qualcomm, Intel, Texas Instruments, ISRO, DRDO', fit: 'Enjoys circuits/hardware, physics-oriented, hands-on lab work', demand: 'Very high — India\\'s ₹76,000 Cr semiconductor mission', link: '/engineering/branches/electronics-communication/' },
  'Mechanical': { name: 'Mechanical Engineering', salary: 'IITs: ₹12–30L · NITs: ₹6–14L · PSU (GATE): ₹8–12L', recruiters: 'Tata Motors, L&amp;T, Bosch, BHEL, ISRO, Railways', fit: 'Enjoys building things, physics over coding, workshop/CAD work', demand: 'Stable with EV boost — traditional auto declining, EV/aerospace growing', link: '/engineering/branches/mechanical-engineering/' },
  'Civil': { name: 'Civil Engineering', salary: 'IITs: ₹10–22L · NITs: ₹5–12L · Government (IES/SSC): ₹8–15L', recruiters: 'L&amp;T, Tata Projects, NHAI, Railways, PWD', fit: 'Interested in infrastructure, city planning, comfortable with fieldwork', demand: 'High — PM GatiShakti\\'s ₹100 lakh crore infrastructure push', link: '/engineering/branches/civil-engineering/' },
};
function renderBranch(id, key) {
  const b = BRANCHES[key];
  document.getElementById(id).innerHTML = '<h3 class="text-navy font-semibold text-lg mb-4">' + b.name + '</h3>' +
    '<div class="space-y-4 text-sm">' +
    '<div><div class="pill-label text-navy/30 mb-1">Starting salary</div><div class="text-navy/70">' + b.salary + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Top recruiters</div><div class="text-navy/70">' + b.recruiters + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Personality fit</div><div class="text-navy/70">' + b.fit + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">2030 demand outlook</div><div class="text-navy/70">' + b.demand + '</div></div>' +
    '<a href="' + b.link + '" class="pill-label text-navy/40 hover:text-gold inline-flex items-center gap-2 mt-2">full branch profile &rarr;</a>' +
    '</div>';
}
function updateComparison() {
  renderBranch('branch-a-out', document.getElementById('branch-a').value);
  renderBranch('branch-b-out', document.getElementById('branch-b').value);
}
document.addEventListener('DOMContentLoaded', () => {
  const opts = Object.keys(BRANCHES).map(k => '<option value="' + k + '">' + BRANCHES[k].name + '</option>').join('');
  document.getElementById('branch-a').innerHTML = opts;
  document.getElementById('branch-b').innerHTML = opts;
  document.getElementById('branch-b').value = 'ECE';
  updateComparison();
});
`;

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'tools · branch comparison',
  title: 'Engineering Branch Comparison',
  subtitle: 'Pick any two branches and see salary, recruiters, personality fit, and demand outlook side by side.',
  stats: [],
})}
</section>
<section class="sec bg-white">
  <div class="max-w-5xl mx-auto px-6 md:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      <select id="branch-a" onchange="updateComparison()" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
      <select id="branch-b" onchange="updateComparison()" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div id="branch-a-out" class="hub-card"></div>
      <div id="branch-b-out" class="hub-card"></div>
    </div>
    <div class="mt-16">
      ${sectionHeader({ eyebrow: 'go deeper', title: 'Explore every branch' })}
      <p class="text-navy/50 text-sm leading-relaxed">This tool covers five commonly-compared branches. See our full <a href="/engineering/branches/" class="text-navy/70 underline">Engineering Branches hub</a> for the complete profile of every major branch and the branch-vs-college decision framework.</p>
    </div>
  </div>
</section>
${ctaBand({ heading: 'Still torn between two branches?', sub: 'A career aptitude conversation can settle it faster than more research.', courseLabel: 'JEE' })}
<script>${dataScript}</script>
`;

export const branchComparisonPage = {
  slug: 'tools/branch-comparison',
  title: 'Engineering Branch Comparison Tool | T.I.M.E. Madurai',
  description: 'Compare any two engineering branches side by side — salary, recruiters, personality fit, and 2030 demand outlook.',
  canonical: '/tools/branch-comparison/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'Branch Comparison' }],
  schema: [articleSchema({ title: 'Engineering Branch Comparison Tool', description: 'Side-by-side engineering branch comparison.', url: 'https://timemadurai.com/tools/branch-comparison/' })],
  body,
};
