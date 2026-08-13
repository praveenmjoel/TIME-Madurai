import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is Environmental Engineering the same as Civil Engineering with an eco-friendly label?',
    a: 'They\'re related but distinct. Civil Engineering builds structures and infrastructure broadly; Environmental Engineering focuses specifically on water treatment, waste management, pollution control, and environmental impact — often working alongside Civil teams on infrastructure projects rather than replacing them.',
  },
  {
    q: 'What\'s the realistic job market like for this branch in India?',
    a: 'Smaller than mainstream branches, concentrated in water treatment utilities, environmental consultancies, and the environmental-compliance divisions of larger infrastructure and manufacturing companies. Government environmental agencies and pollution control boards are a meaningful additional employer, especially via state-level recruitment.',
  },
];

export const environmentalPage = buildLeafPage({
  slug: 'engineering/branches/environmental-engineering',
  title: 'Environmental Engineering: Branch Guide, Careers & Salary | T.I.M.E. Madurai',
  description: 'What Environmental Engineering covers, career paths in water treatment and pollution control, realistic salaries, and who fits this branch.',
  canonical: '/engineering/branches/environmental-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Environmental Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Environmental Engineering',
  heroSubtitle: 'Water treatment, waste management, and pollution control — a specialised, purpose-driven branch closely linked to Civil Engineering.',
  stats: [
    { value: '₹4–9L', label: 'Fresher salary range' },
    { value: 'Utilities + consultancies + govt. boards', label: 'Three main employer categories' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Environmental Engineers design the systems that treat drinking water, manage waste, and control industrial pollution — infrastructure work with a direct public-health impact.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Water & wastewater treatment, solid waste management, air pollution control, environmental impact assessment'],
          ['Core subjects', 'Water Treatment Engineering, Wastewater Engineering, Solid Waste Management, Environmental Impact Assessment'],
          ['Skills required', 'Interest in chemistry and public-health-linked infrastructure, regulatory awareness, fieldwork comfort'],
          ['Career paths', 'Environmental Engineer, Water Treatment Engineer, Environmental Compliance Officer, Sustainability Consultant'],
          ['Top recruiters', 'State water/sewerage boards, environmental consultancies, L&T (environmental division), manufacturing companies\' compliance teams'],
          ['Starting salary', 'Top institutes: ₹5–9 LPA; Average colleges: ₹3–4.5 LPA; government-board roles offer lower pay but strong stability'],
          ['Personality fit', 'Motivated by public-health and sustainability impact more than by the highest possible salary ceiling'],
          ['Future demand (2030)', 'Rising as India\'s urbanisation increases pressure on water treatment and waste management infrastructure, and as pollution-control regulation tightens'],
          ['Higher studies', 'M.Tech in Environmental Engineering (IITs/NITs), MS abroad in Environmental/Sustainability Engineering, MBA in Sustainability'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu\'s Chennai Metrowater and the state Pollution Control Board are meaningful in-state government employers for Environmental Engineering graduates, alongside private consultancies serving the state\'s industrial clusters.',
      },
    },
  ],
  faqs,
  faqTitle: 'Environmental Engineering — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Motivated by sustainability-focused engineering?',
  ctaSub: 'A counsellor can compare this against Civil Engineering\'s broader scope.',
});
