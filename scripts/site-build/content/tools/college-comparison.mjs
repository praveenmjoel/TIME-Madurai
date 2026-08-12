import { heroBanner, sectionHeader, ctaBand, articleSchema } from '../../lib/components.mjs';

const dataScript = `
const COLLEGES = {
  'IIT Madras': { fee: '₹2 lakh/yr (Gen); nil for SC/ST', avgPkg: '~₹22 LPA', nirf: '#1 Overall (2024)', note: 'India\\'s top-ranked institution; largest TN alumni base of any IIT', link: '/engineering/iit-guide/' },
  'IIT Bombay': { fee: '₹2 lakh/yr (Gen); nil for SC/ST', avgPkg: '~₹25 LPA', nirf: '#3 Overall (2024)', note: 'Strongest in finance, start-ups, quant trading', link: '/engineering/iit-guide/' },
  'NIT Trichy': { fee: '₹1.4 lakh/yr (TN home-state)', avgPkg: '~₹8–10 LPA', nirf: '#9 Engineering (2024)', note: 'Top choice for TN students — 50% seats reserved for home state', link: '/engineering/nit-guide/' },
  'BITS Pilani': { fee: '₹5.5–6 lakh/yr', avgPkg: '~₹12–16 LPA', nirf: '~#25–30 Engineering (2024)', note: 'India\\'s top private option; unique Practice School internship system', link: '/engineering/private-engineering-colleges/' },
  'VIT Vellore': { fee: '₹1.98–2.95 lakh/yr', avgPkg: '~₹5–7 LPA', nirf: '#11 Engineering (2024)', note: 'Largest private intake in India; top 20% of CS students place far above average', link: '/engineering/private-engineering-colleges/' },
  'IIIT Kancheepuram': { fee: '~₹1.5 lakh/yr (central-funded)', avgPkg: 'Data not published', nirf: 'Not yet ranked separately', note: 'TN\\'s own IIIT — Home State quota available, still developing infrastructure', link: '/engineering/iiit-guide/' },
};
function renderCollege(id, key) {
  const c = COLLEGES[key];
  document.getElementById(id).innerHTML = '<h3 class="text-navy font-semibold text-lg mb-4">' + key + '</h3>' +
    '<div class="space-y-4 text-sm">' +
    '<div><div class="pill-label text-navy/30 mb-1">Annual fee</div><div class="text-navy/70">' + c.fee + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Average package</div><div class="text-navy/70">' + c.avgPkg + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">NIRF ranking</div><div class="text-navy/70">' + c.nirf + '</div></div>' +
    '<div><div class="pill-label text-navy/30 mb-1">Worth knowing</div><div class="text-navy/70">' + c.note + '</div></div>' +
    '<a href="' + c.link + '" class="pill-label text-navy/40 hover:text-gold inline-flex items-center gap-2 mt-2">full guide &rarr;</a>' +
    '</div>';
}
function updateComparison() {
  renderCollege('college-a-out', document.getElementById('college-a').value);
  renderCollege('college-b-out', document.getElementById('college-b').value);
}
document.addEventListener('DOMContentLoaded', () => {
  const opts = Object.keys(COLLEGES).map(k => '<option value="' + k + '">' + k + '</option>').join('');
  document.getElementById('college-a').innerHTML = opts;
  document.getElementById('college-b').innerHTML = opts;
  document.getElementById('college-b').value = 'NIT Trichy';
  updateComparison();
});
`;

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'tools · college comparison',
  title: 'Engineering College Comparison',
  subtitle: 'Pick any two institutions and compare fees, placements, and NIRF ranking side by side.',
  stats: [],
})}
</section>
<section class="sec bg-white">
  <div class="max-w-5xl mx-auto px-6 md:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      <select id="college-a" onchange="updateComparison()" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
      <select id="college-b" onchange="updateComparison()" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div id="college-a-out" class="hub-card"></div>
      <div id="college-b-out" class="hub-card"></div>
    </div>
    <div class="mt-16">
      ${sectionHeader({ eyebrow: 'go deeper', title: 'Explore every institution type' })}
      <p class="text-navy/50 text-sm leading-relaxed">This tool covers six commonly-compared institutions. See our full <a href="/engineering/" class="text-navy/70 underline">Engineering hub</a> for IIT, NIT, IIIT, and private college guides in complete detail.</p>
    </div>
  </div>
</section>
${ctaBand({ heading: 'Weighing a private seat against a government one?', sub: 'A counsellor can run the real numbers with you.', courseLabel: 'JEE' })}
<script>${dataScript}</script>
`;

export const collegeComparisonPage = {
  slug: 'tools/college-comparison',
  title: 'Engineering College Comparison Tool: IIT, NIT, BITS & VIT | T.I.M.E. Madurai',
  description: 'Compare IITs, NITs, BITS Pilani, VIT and other engineering colleges side by side — fees, placements, and NIRF ranking.',
  canonical: '/tools/college-comparison/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'College Comparison' }],
  schema: [articleSchema({ title: 'Engineering College Comparison Tool', description: 'Side-by-side engineering college comparison.', url: 'https://timemadurai.com/tools/college-comparison/' })],
  body,
};
