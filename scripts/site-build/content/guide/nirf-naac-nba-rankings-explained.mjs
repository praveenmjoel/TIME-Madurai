import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'If a college has a low NAAC grade but a good NIRF rank, which matters more?',
    a: 'Check both together rather than picking one. NIRF measures comparative standing within a category (Engineering, Medical, etc.), while NAAC measures overall institutional quality — curriculum, faculty, infrastructure, governance. A strong NIRF rank with a weak NAAC grade can signal a college that\'s competitive on outcomes but has institutional gaps worth investigating further.',
  },
  {
    q: 'Does NBA accreditation matter if the college already has a good NIRF rank?',
    a: 'Yes, separately — NBA accredits specific programmes at department level, not the whole institution. An NBA-accredited BTech CSE programme at a college means that specific programme meets standards, even if the college\'s overall NIRF/NAAC standing is more mixed. Check NBA status for your specific intended programme, not just the institution overall.',
  },
];

export const rankingsExplainedPage = buildLeafPage({
  slug: 'guide/nirf-naac-nba-rankings-explained',
  title: 'NIRF, NAAC & NBA Rankings Explained | T.I.M.E. Madurai',
  description: 'How to actually read India\'s three main college quality signals — NIRF\'s comparative ranking, NAAC\'s institutional grade, and NBA\'s programme-level accreditation.',
  canonical: '/guide/nirf-naac-nba-rankings-explained/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Guide', href: '/guide/' }, { label: 'NIRF, NAAC & NBA Explained' }],
  eyebrow: 'guide · quality signals',
  heroTitle: 'NIRF, NAAC & NBA — What Each One Actually Measures',
  heroSubtitle: 'Three different systems, three different questions answered. Understanding what each one actually tells you turns a confusing set of acronyms into a real shortlisting tool.',
  stats: [],
  toc: [
    { id: 'nirf', label: 'NIRF' },
    { id: 'naac', label: 'NAAC' },
    { id: 'nba', label: 'NBA' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Use all three together when researching a college — each answers a different question, and no single one gives the full picture alone.',
  sections: [
    {
      id: 'nirf',
      eyebrow: 'comparative ranking',
      title: 'NIRF — National Institutional Ranking Framework',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Introduced', '2016, by the Ministry of Education'],
          ['Released', 'Annually, typically in June'],
          ['Evaluates on', 'Teaching/Learning/Resources, Research, Graduation Outcomes, Outreach/Inclusivity, Peer Perception'],
          ['Categories', 'Overall, Engineering, Medical, Management, University, Law, Architecture, Pharmacy, and more'],
        ],
      },
      note: 'NIRF answers: "How does this institution compare to others in its category?" — a relative, not absolute, measure.',
    },
    {
      id: 'naac',
      eyebrow: 'institutional quality grade',
      title: 'NAAC — National Assessment and Accreditation Council',
      table: {
        columns: ['NAAC grade', 'CGPA range', 'Meaning'],
        rows: [
          ['A++', '3.51–4.00', 'Outstanding — world-class institution'],
          ['A+', '3.26–3.50', 'Excellent — among the best in India'],
          ['A', '3.01–3.25', 'Very Good — strong institution'],
          ['B++', '2.76–3.00', 'Good — above average'],
          ['B+', '2.51–2.75', 'Above Average'],
          ['B', '2.01–2.50', 'Average'],
          ['C', '1.51–2.00', 'Below Average — proceed with caution'],
          ['D', 'Below 1.51', 'Unsatisfactory — not recommended'],
        ],
      },
      note: 'Most government scholarship schemes require NAAC accreditation to even apply — check this before assuming a scholarship applies to your college.',
    },
    {
      id: 'nba',
      eyebrow: 'programme-level, not institution-wide',
      title: 'NBA — National Board of Accreditation',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What it accredits', 'Specific programmes/departments — not the whole institution'],
          ['Validity', '3 years'],
          ['Why it matters', 'Required for some government job applications and international recognition'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'How to use all three together',
        text: 'When researching a college, check three things: (1) AICTE/NMC recognition — basic legitimacy, (2) NAAC grade — overall institutional quality, (3) NIRF ranking — comparative standing in your category. A college with NAAC A+ and a top-100 NIRF rank is a genuinely strong choice.',
      },
    },
  ],
  faqs,
  faqTitle: 'Rankings — quick answers',
  backLink: { label: 'the Guide hub', href: '/guide/' },
  ctaHeading: 'Researching a specific college\'s standing?',
  ctaSub: 'A counsellor can help you interpret its NIRF/NAAC/NBA profile together.',
});
