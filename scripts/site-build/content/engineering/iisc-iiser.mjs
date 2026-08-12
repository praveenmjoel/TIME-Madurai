import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is IISc Bangalore an engineering college?',
    a: 'Not primarily. IISc is India\'s premier research institute — mostly postgraduate — but it runs a 4-year BS (Research) programme in Physics, Chemistry, Materials, Mathematics and interdisciplinary areas. It suits students headed toward research and a PhD, not students wanting immediate industry placement after a bachelor\'s.',
  },
  {
    q: 'How is an IISER different from an engineering degree?',
    a: 'IISERs award a BS-MS dual degree (5 years) focused on pure science research — Physics, Chemistry, Biology, Mathematics — rather than an engineering curriculum. Most graduates pursue a PhD in India or abroad. IISER Tirupati is the closest campus to Tamil Nadu.',
  },
  {
    q: 'How do I get into IISc or an IISER?',
    a: 'Primarily through KVPY (Kishore Vaigyanik Protsahan Yojana) scores, JEE Advanced scores, or each institute\'s own aptitude test (the IISER Aptitude Test). Requirements vary slightly by campus — check the specific institute\'s admission page for the current year\'s process.',
  },
];

export const iiscIiserPage = buildLeafPage({
  slug: 'engineering/iisc-iiser',
  title: 'IISc & IISERs Guide: Research-First Alternatives to Engineering | T.I.M.E. Madurai',
  description: 'IISc Bangalore and the seven IISERs explained — for students drawn to pure science research over industry, with entry routes and what the degrees actually lead to.',
  canonical: '/engineering/iisc-iiser/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'IISc & IISERs' }],
  eyebrow: 'engineering · research track',
  heroTitle: 'IISc & IISERs: The Research-First Path',
  heroSubtitle: 'Not every strong JEE Advanced score should go toward a B.Tech. IISc and the seven IISERs are for students who want research and a PhD, not immediate industry placement.',
  stats: [
    { value: '#2', label: 'IISc\'s NIRF overall rank (2024)' },
    { value: '7', label: 'IISERs across India' },
    { value: '5 yrs', label: 'BS-MS dual degree length' },
  ],
  toc: [
    { id: 'iisc', label: 'IISc Bangalore' },
    { id: 'isers', label: 'The Seven IISERs' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'IISc and the IISERs are for a specific kind of student — one whose real interest is science itself, not its industrial application. Both consistently produce PhD candidates for MIT, Stanford, and India\'s own top research labs.',
  sections: [
    {
      id: 'iisc',
      eyebrow: 'india\'s premier research institute',
      title: 'Indian Institute of Science, Bangalore',
      table: {
        columns: ['Fact', 'Detail'],
        rows: [
          ['NIRF ranking', '#2 Overall, #1 Research (2024)'],
          ['Admission for UG', 'BS (Research) via KVPY or JEE Advanced scores'],
          ['Programmes', 'Physics, Chemistry, Materials, Mathematics, EE (interdisciplinary)'],
          ['UG intake', '~160 students/year'],
          ['Fee', '~₹30,000/semester (subsidised)'],
          ['Typical path after', 'PhD at IISc, IIT, MIT, or Stanford'],
        ],
      },
      note: 'Not suitable for students wanting immediate industry placement straight out of the bachelor\'s degree — the programme is built around research pathways.',
    },
    {
      id: 'isers',
      eyebrow: 'seven campuses, one model',
      title: 'The IISERs, side by side',
      table: {
        columns: ['IISER', 'Location', 'Admission', 'Key strength'],
        rows: [
          ['IISER Pune', 'Pune, Maharashtra', 'Aptitude Test / JEE Advanced / KVPY', 'Biology, Chemistry'],
          ['IISER Kolkata', 'Kolkata, WB', 'Aptitude Test / JEE Advanced / KVPY', 'Physics, Maths'],
          ['IISER Mohali', 'Mohali, Punjab', 'Aptitude Test / JEE Advanced / KVPY', 'Physics, Chemical Sciences'],
          ['IISER Bhopal', 'Bhopal, MP', 'Aptitude Test / JEE Advanced / KVPY', 'Data Science, Physics'],
          ['IISER Thiruvananthapuram', 'Kerala', 'Aptitude Test', 'Biology, Earth Sciences'],
          ['IISER Tirupati', 'Andhra Pradesh', 'Aptitude Test', 'Sciences — nearest campus to TN'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'IISER Tirupati is the geographically closest IISER for Tamil Nadu students. All IISERs award the BS-MS dual degree — most graduates go on to a PhD in India or abroad, so this path suits science-passionate students specifically, not those chasing an immediate industry career.',
      },
    },
  ],
  faqs,
  faqTitle: 'IISc & IISER admissions — quick answers',
  backLink: { label: 'the Engineering hub', href: '/engineering/' },
  ctaHeading: 'Considering research over industry?',
  ctaSub: 'Let\'s talk through whether IISc/IISER genuinely fits your goals.',
});
