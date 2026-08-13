import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Where in India can I actually study Naval Architecture?',
    a: 'Seats are very limited — IIT Kharagpur and IIT Madras (via a specialised Ocean Engineering department) are the strongest options, alongside Cochin University of Science and Technology (CUSAT), which runs a dedicated Naval Architecture programme. It is one of the smallest-seat-count branches in this list.',
  },
  {
    q: 'Is this branch only relevant if I want to work in shipbuilding?',
    a: 'Shipbuilding and marine structures are the core, but the same training applies to offshore oil platforms, port infrastructure, and naval defence vessels — the Indian Navy and Cochin Shipyard both recruit Naval Architects, not just commercial shipyards.',
  },
];

export const navalArchPage = buildLeafPage({
  slug: 'engineering/branches/naval-architecture',
  title: 'Naval Architecture & Ocean Engineering: Branch Guide & Careers | T.I.M.E. Madurai',
  description: 'What Naval Architecture & Ocean Engineering covers, where to study it in India, shipbuilding and offshore careers, and who fits this rare branch.',
  canonical: '/engineering/branches/naval-architecture/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Naval Architecture & Ocean Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Naval Architecture & Ocean Engineering',
  heroSubtitle: 'Ship and marine-structure design for a very small number of seats nationally — anchored by shipbuilding, offshore platforms, and naval defence vessels.',
  stats: [
    { value: 'IIT KGP / IIT Madras / CUSAT', label: 'Main Indian institutes offering it' },
    { value: '₹8–16L', label: 'IIT-level starting range' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Naval Architects design ships, offshore platforms, and marine structures — one of engineering\'s smallest-seat-count branches, concentrated at a handful of specialised institutes.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Ship structures, hydrodynamics, marine engineering, offshore structures, ship stability & design'],
          ['Core subjects', 'Ship Structures, Hydrodynamics, Marine Design, Offshore Engineering, Ship Stability'],
          ['Skills required', 'Strong physics/maths foundation, spatial reasoning, willingness to work in a small, specialised field'],
          ['Career paths', 'Naval Architect, Marine Structural Engineer, Offshore Platform Engineer, Ship Design Engineer'],
          ['Top recruiters', 'Cochin Shipyard, Indian Navy (civilian design roles), Larsen & Toubro (shipbuilding), classification societies (DNV, ABS, IRS)'],
          ['Starting salary', 'IIT-level: ₹8–16 LPA; CUSAT/other institutes: ₹4–7 LPA'],
          ['Personality fit', 'Genuine interest in marine engineering specifically; comfortable choosing a very small field over a mainstream branch\'s wider job market'],
          ['Future demand (2030)', 'Steady, tied closely to India\'s shipbuilding and naval defence manufacturing push under domestic self-reliance initiatives'],
          ['Higher studies', 'M.Tech in Ocean/Naval Architecture (IITs), MS abroad (Netherlands, UK, Norway have strong maritime engineering programmes)'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'While Tamil Nadu itself doesn\'t host a dedicated Naval Architecture programme, Chennai Port and the Kattupalli shipyard (near Chennai) give TN-based graduates from IIT Madras or CUSAT a genuine in-region employer for their first role.',
      },
    },
  ],
  faqs,
  faqTitle: 'Naval Architecture & Ocean Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Seriously considering this rare, small-seat branch?',
  ctaSub: 'A counsellor can help you weigh it honestly against a mainstream Mechanical or Civil path.',
});
