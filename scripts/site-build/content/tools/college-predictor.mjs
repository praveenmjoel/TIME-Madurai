import { heroBanner, sectionHeader, callout, faqAccordion, faqSchema, articleSchema, ctaBand } from '../../lib/components.mjs';

const faqs = [
  {
    q: 'How accurate is this predictor?',
    a: 'It\'s a planning tool, not a guarantee — built from our published 2024-cycle cutoff data (see the Cutoffs hub for full source tables) with approximate category-rank multipliers applied. Real cutoffs shift every year based on paper difficulty and applicant numbers. Always cross-check your final choices against josaa.nic.in, mcc.nic.in, or tnmedicalselection.net before submitting a choice list.',
  },
  {
    q: 'Why do reserved-category results look different from what I expected?',
    a: 'For JEE, we apply standard approximate multipliers to General closing ranks (OBC-NCL ~2.5×, SC ~6.5×, ST ~13.5×) since category-specific data isn\'t published for every branch. For NEET, we use real category-wise closing scores where available (Tamil Nadu government colleges) and General-only data elsewhere — reserved-category NEET cutoffs run meaningfully lower than shown for AIIMS, private, and AYUSH colleges.',
  },
];

const jeeDataScript = `
const JEE_DATA = [
  {college:'IIT Bombay', branch:'CSE', rank:70},
  {college:'IIT Delhi', branch:'CSE', rank:100},
  {college:'IIT Madras', branch:'CSE', rank:130},
  {college:'IIT Kanpur', branch:'CSE', rank:200},
  {college:'IIT Kharagpur', branch:'CSE', rank:300},
  {college:'IIT Bombay', branch:'Electrical Engineering', rank:350},
  {college:'IIT Delhi', branch:'Electrical Engineering', rank:400},
  {college:'IIT Roorkee', branch:'CSE', rank:500},
  {college:'IIT Madras', branch:'Electrical Engineering (5-yr Integrated)', rank:500},
  {college:'NIT Trichy (Other State)', branch:'CSE', rank:3800},
  {college:'IIIT Hyderabad', branch:'CSE', rank:3500},
  {college:'IIT Guwahati', branch:'CSE', rank:1200},
  {college:'IIT Bombay', branch:'Mechanical Engineering', rank:1100},
  {college:'IIT Madras', branch:'Mechanical Engineering', rank:1400},
  {college:'IIT Hyderabad', branch:'CSE', rank:1500},
  {college:'IIT Delhi', branch:'Chemical Engineering', rank:1800},
  {college:'IIT BHU Varanasi', branch:'CSE', rank:2500},
  {college:'IIT Indore', branch:'CSE', rank:2800},
  {college:'IIIT Bangalore', branch:'CSE', rank:4500},
  {college:'NIT Warangal (Other State)', branch:'CSE', rank:4500},
  {college:'NIT Trichy (Home State, TN)', branch:'CSE', rank:7000},
  {college:'NIT Surathkal (Other State)', branch:'CSE', rank:5000},
  {college:'IIT Kanpur', branch:'Aerospace Engineering', rank:2200},
  {college:'IIT Kharagpur', branch:'Electronics & Electrical Comm.', rank:700},
  {college:'NIT Trichy (Other State)', branch:'ECE', rank:7000},
  {college:'IIT Roorkee', branch:'Civil Engineering', rank:4500},
  {college:'NIT Warangal (Other State)', branch:'ECE', rank:8000},
  {college:'IIIT Allahabad', branch:'IT', rank:6000},
  {college:'IIIT Delhi', branch:'CSE', rank:6500},
  {college:'NIT Calicut (Other State)', branch:'CSE', rank:5500},
  {college:'NIT Rourkela (Other State)', branch:'CSE', rank:7000},
  {college:'NIT Trichy (Home State, TN)', branch:'ECE', rank:10000},
  {college:'IIT Patna / Mandi / Jodhpur', branch:'CSE', rank:6000},
  {college:'NIT Trichy (Home State, TN)', branch:'EEE', rank:15000},
  {college:'IIIT Kancheepuram (TN, Home State)', branch:'CSE', rank:30000},
  {college:'IIIT Sri City (AP)', branch:'CSE', rank:22000},
  {college:'Newer IITs (Tirupati, Palakkad, Dharwad, Bhilai, Goa, Jammu, Dhanbad)', branch:'CSE', rank:10000},
  {college:'NIT Trichy (Home State, TN)', branch:'Chemical Engineering', rank:32000},
  {college:'NIT Trichy (Home State, TN)', branch:'Mechanical Engineering', rank:22000},
  {college:'NIT Trichy (Home State, TN)', branch:'Civil Engineering', rank:38000},
  {college:'NIT Trichy (Home State, TN)', branch:'Metallurgical & Materials Engg.', rank:55000},
];
const JEE_MULTIPLIER = { GEN: 1, EWS: 1.3, 'OBC-NCL': 2.5, SC: 6.5, ST: 13.5 };

const NEET_DATA = [
  { college: 'Madras Medical College, Chennai', OC:685, BC:668, MBC:655, SC:615 },
  { college: 'Stanley Medical College, Chennai', OC:672, BC:655, MBC:640, SC:598 },
  { college: 'Kilpauk Medical College, Chennai', OC:668, BC:650, MBC:634, SC:592 },
  { college: 'Madurai Medical College', OC:658, BC:638, MBC:622, SC:578 },
  { college: 'Thanjavur Medical College', OC:654, BC:634, MBC:618, SC:572 },
  { college: 'Coimbatore Medical College', OC:655, BC:634, MBC:618, SC:575 },
  { college: 'Tirunelveli Medical College', OC:650, BC:628, MBC:612, SC:568 },
  { college: 'PSG Government Medical College, Coimbatore', OC:642, BC:622, MBC:603, SC:560 },
  { college: 'Government Villupuram Medical College', OC:632, BC:612, MBC:592, SC:548 },
  { college: 'Kanyakumari Government Medical College', OC:626, BC:604, MBC:585, SC:540 },
  { college: 'AIIMS New Delhi (AIQ, GEN only)', OC:720, BC:720, MBC:720, SC:720 },
  { college: 'AIIMS Mangalagiri (AIQ, GEN only)', OC:635, BC:635, MBC:635, SC:635 },
  { college: 'JIPMER Puducherry (AIQ, GEN only)', OC:678, BC:678, MBC:678, SC:678 },
  { college: 'JIPMER Karaikal (AIQ, GEN only)', OC:655, BC:655, MBC:655, SC:655 },
  { college: 'Sri Ramachandra Institute, Chennai (govt quota)', OC:630, BC:630, MBC:630, SC:630 },
  { college: 'SRM Medical College, Kattankulathur (govt quota)', OC:618, BC:618, MBC:618, SC:618 },
  { college: 'Saveetha Medical College, Chennai (govt quota)', OC:615, BC:615, MBC:615, SC:615 },
  { college: 'BSMS — NIS Chennai, Siddha (AIQ, GEN only)', OC:570, BC:570, MBC:570, SC:570 },
  { college: 'BSMS — Govt Siddha Medical College Chennai (TN quota)', OC:540, BC:498, MBC:465, SC:415 },
  { college: 'BAMS — Govt Ayurveda College Chennai (TN quota)', OC:440, BC:400, MBC:370, SC:320 },
  { college: 'BHMS — Govt Homeopathy Medical College Chennai (TN quota)', OC:400, BC:362, MBC:335, SC:295 },
];

function runPredictor() {
  const exam = document.getElementById('pred-exam').value;
  const value = parseFloat(document.getElementById('pred-value').value);
  const category = document.getElementById('pred-category').value;
  const resultsEl = document.getElementById('pred-results');
  if (!value || value <= 0) { resultsEl.innerHTML = '<p class="text-navy/40 text-sm">Enter your rank or score to see matches.</p>'; return; }

  let rows = [];
  if (exam === 'jee') {
    const mult = JEE_MULTIPLIER[category] || 1;
    rows = JEE_DATA
      .map(d => ({ ...d, threshold: Math.round(d.rank * mult) }))
      .filter(d => value <= d.threshold)
      .sort((a, b) => a.threshold - b.threshold)
      .slice(0, 15);
    resultsEl.innerHTML = rows.length
      ? '<div class="data-table-wrap"><table class="data-table"><thead><tr><th>College</th><th>Branch</th><th>Approx. closing rank (your category)</th></tr></thead><tbody>' +
        rows.map(r => '<tr><td>' + r.college + '</td><td>' + r.branch + '</td><td>~' + r.threshold.toLocaleString('en-IN') + '</td></tr>').join('') +
        '</tbody></table></div>'
      : '<p class="text-navy/40 text-sm">No matches in our dataset at this rank &mdash; that does not mean no options exist, just that they are beyond what we have indexed here. Talk to a counsellor for a fuller picture.</p>';
  } else {
    rows = NEET_DATA
      .filter(d => value >= d[category])
      .sort((a, b) => b[category] - a[category])
      .slice(0, 15);
    resultsEl.innerHTML = rows.length
      ? '<div class="data-table-wrap"><table class="data-table"><thead><tr><th>College</th><th>Approx. closing score (your category)</th></tr></thead><tbody>' +
        rows.map(r => '<tr><td>' + r.college + '</td><td>~' + r[category] + '</td></tr>').join('') +
        '</tbody></table></div>'
      : '<p class="text-navy/40 text-sm">No matches in our dataset at this score &mdash; check our full Cutoffs hub for the complete picture, or talk to a counsellor.</p>';
  }
}
function togglePredictorCategory() {
  const exam = document.getElementById('pred-exam').value;
  const catSelect = document.getElementById('pred-category');
  const jeeOpts = ['GEN', 'EWS', 'OBC-NCL', 'SC', 'ST'];
  const neetOpts = ['OC', 'BC', 'MBC', 'SC'];
  const opts = exam === 'jee' ? jeeOpts : neetOpts;
  catSelect.innerHTML = opts.map(o => '<option value="' + o + '">' + o + '</option>').join('');
  document.getElementById('pred-value-label').textContent = exam === 'jee' ? 'Your JEE rank (CRL)' : 'Your NEET score (/720)';
}
document.addEventListener('DOMContentLoaded', () => {
  togglePredictorCategory();
  document.getElementById('pred-exam').addEventListener('change', togglePredictorCategory);
});
`;

const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({
  eyebrow: 'tools · college predictor',
  title: 'JEE & NEET College Predictor',
  subtitle: 'Enter your rank or score and category to see realistic college matches, built from our published 2024-cycle cutoff data — not a black-box guess.',
  stats: [],
})}
</section>

<section class="sec bg-white">
  <div class="max-w-4xl mx-auto px-6 md:px-12">
    ${callout({ type: 'info', label: 'Before you start', text: 'This is a planning tool using approximate, indicative 2024-cycle data — always verify your final choices against josaa.nic.in, mcc.nic.in, or tnmedicalselection.net.' })}

    <div class="mt-10 p-8 rounded-2xl border border-navy/10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div>
          <label class="block text-navy/50 text-xs uppercase tracking-widest mb-2">Exam</label>
          <select id="pred-exam" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15">
            <option value="jee">JEE (Main / Advanced)</option>
            <option value="neet">NEET UG</option>
          </select>
        </div>
        <div>
          <label id="pred-value-label" class="block text-navy/50 text-xs uppercase tracking-widest mb-2">Your JEE rank (CRL)</label>
          <input id="pred-value" type="number" min="1" placeholder="e.g. 5000" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15">
        </div>
        <div>
          <label class="block text-navy/50 text-xs uppercase tracking-widest mb-2">Category</label>
          <select id="pred-category" class="w-full text-navy text-sm outline-none rounded-xl px-4 py-3 border border-navy/15"></select>
        </div>
      </div>
      <button onclick="runPredictor()" class="btn-gold font-medium px-8 py-3 rounded-full text-sm tracking-wide">See my matches</button>
      <div id="pred-results" class="mt-8">
        <p class="text-navy/40 text-sm">Enter your rank or score to see matches.</p>
      </div>
    </div>

    <div class="mt-16">
      ${sectionHeader({ eyebrow: 'go deeper', title: 'Full cutoff reference tables' })}
      <p class="text-navy/50 text-sm leading-relaxed">This predictor draws from a subset of our full <a href="/college-cutoffs/" class="text-navy/70 underline">College Cutoffs hub</a>, which has the complete branch-by-branch and category-by-category tables for IITs, NITs, IIITs, BITSAT, VITEEE/SRMJEEE, TNEA, and NEET colleges.</p>
    </div>

    <div class="mt-16">
      ${sectionHeader({ eyebrow: 'frequently asked', title: 'About this tool' })}
      ${faqAccordion(faqs)}
    </div>
  </div>
</section>
${ctaBand({
  heading: 'Want a human to sanity-check your results?',
  sub: 'A counsellor can turn this shortlist into an actual choice-filling strategy.',
  courseLabel: 'JEE',
})}
<script>${jeeDataScript}</script>
`;

export const collegePredictorPage = {
  slug: 'tools/college-predictor',
  title: 'JEE & NEET College Predictor 2026: Rank & Score to College | T.I.M.E. Madurai',
  description: 'Enter your JEE rank or NEET score and category to see realistic, data-backed college matches from our 2024-cycle cutoff database.',
  canonical: '/tools/college-predictor/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools/' }, { label: 'College Predictor' }],
  schema: [
    articleSchema({ title: 'JEE & NEET College Predictor', description: 'Rank/score-to-college matching tool built from 2024-cycle cutoff data.', url: 'https://timemadurai.com/tools/college-predictor/' }),
    faqSchema(faqs),
  ],
  body,
};
