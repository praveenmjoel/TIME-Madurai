import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Civil Engineering a good branch to choose today?',
    a: 'Demand is genuinely strong — PM GatiShakti\'s ₹100 lakh crore infrastructure investment, the Smart Cities Mission, PMAY housing, and metro expansion across India all guarantee sustained hiring. It suits students who like infrastructure, outdoor site work, and project management, more than pure lab-based research.',
  },
  {
    q: 'What\'s the government-job path for Civil Engineering graduates?',
    a: 'GATE-qualified civil engineers can join Central PSUs like IRCON (Railways construction) and NHIDCL, or pursue UPSC\'s Indian Engineering Services (IES). In Tamil Nadu specifically, TN PWD, TWAD (water supply), TNHB (housing board), and Chennai Metro Rail all recruit civil engineers regularly.',
  },
];

export const civilPage = buildLeafPage({
  slug: 'engineering/branches/civil-engineering',
  title: 'Civil Engineering Branch Guide: Careers, Salary & Government Path | T.I.M.E. Madurai',
  description: 'What Civil Engineering involves, realistic salaries, the GATE-to-PSU career path, and Tamil Nadu-specific government recruiters.',
  canonical: '/engineering/branches/civil-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Civil Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Civil Engineering',
  heroSubtitle: 'One of the oldest professions in human history — every road, bridge, dam, and metro system is designed and built by civil engineers.',
  stats: [
    { value: '₹100L Cr', label: 'PM GatiShakti infrastructure investment' },
    { value: '₹10–22L', label: 'IIT starting salary range' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'India\'s massive infrastructure push — national highways, smart cities, metro networks, housing for all — is creating unprecedented demand for civil engineers.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Structural analysis, geotechnical engineering, transportation, water resources, environmental engineering, surveying'],
          ['Skills required', 'Spatial/3D thinking, patience for fieldwork, project management mindset'],
          ['Career paths', 'Structural Engineer, Site Engineer, Geotechnical Consultant, Urban Planner, Govt/PWD Engineer'],
          ['Top recruiters', 'L&amp;T, Tata Projects, Shapoorji Pallonji, NHAI, Railways, PWD, Municipal Corporations'],
          ['Starting salary', 'IITs: ₹10–22 LPA; NITs: ₹5–12 LPA; Government (IES/SSC): ₹8–15 LPA; Private: ₹3–5 LPA'],
          ['Personality fit', 'Interested in infrastructure and city planning, comfortable with site visits'],
          ['Higher studies', 'M.Tech in Structural/Geotechnical Engg (IITs), GATE → PSU/Government, UPSC (IES/IAS)'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu PWD, TWAD, TNHB, and Chennai Metro Rail recruit civil engineers regularly, and the Chennai infrastructure boom (Metro Phase 2, elevated corridors) is generating strong local demand right now.',
      },
    },
  ],
  faqs,
  faqTitle: 'Civil Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Weighing Civil against a GATE-focused core branch?',
  ctaSub: 'A counsellor can help you plan the degree-plus-GATE combination properly.',
});
