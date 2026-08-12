import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Do I need to be an IIT alumnus to use IIT Madras Research Park?',
    a: 'No — the IITM Incubation Cell at IIT Madras Research Park (Asia\'s largest university research park) is open to non-IIT founders with strong technology ideas, offering seed funding, mentorship, and co-working space alongside its 300+ incubated startups.',
  },
  {
    q: 'Which sectors are most underserved by technology in Tamil Nadu specifically?',
    a: 'AgriTech stands out — precision farming, drip irrigation technology, and drone crop monitoring remain underserved despite TN\'s major agricultural economy (Cauvery delta, banana belts). HealthTech for Tier 2/3 towns and Tamil-language EdTech are similarly underserved relative to demand.',
  },
];

export const entrepreneurshipPage = buildLeafPage({
  slug: 'careers/entrepreneurship-startups',
  title: 'Entrepreneurship & Startups for Science Graduates in Tamil Nadu | T.I.M.E. Madurai',
  description: 'Where Tamil Nadu\'s startup opportunities actually are — AgriTech, HealthTech, EdTech, CleanTech, and DeepTech manufacturing — with the support ecosystem behind each.',
  canonical: '/careers/entrepreneurship-startups/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers/' }, { label: 'Entrepreneurship & Startups' }],
  eyebrow: 'careers · building your own path',
  heroTitle: 'Entrepreneurship & Startups',
  heroSubtitle: 'India\'s startup ecosystem is the world\'s third-largest, and Chennai ranks among India\'s top five startup cities. Engineering and science education gives you the technical foundation deep-tech ventures need.',
  stats: [ { value: '3rd', label: 'India\'s global startup ecosystem rank' }, { value: 'Top 5', label: 'Chennai\'s national startup-city rank' } ],
  toc: [
    { id: 'sectors', label: 'Sectors & Opportunities' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Science and engineering graduates have a real edge in deep-tech ventures — the technical grounding to build, not just imagine, a product.',
  sections: [
    {
      id: 'sectors',
      title: 'Sector opportunities for TN science graduates',
      table: {
        columns: ['Sector', 'Opportunity in Tamil Nadu', 'Support ecosystem'],
        rows: [
          ['AgriTech', 'Precision farming, drip irrigation, drone crop monitoring — Cauvery delta and banana belts are underserved', 'ICAR-IARI, NABARD funding, TNAU incubation'],
          ['HealthTech/MedTech', 'Affordable diagnostics for Tier 2/3 TN, telemedicine, Tamil-language health apps', 'StartupTN, iStart at IIT Madras, TN MedTech Zone (SIPCOT)'],
          ['EdTech', 'Tamil-medium learning, JEE/NEET prep in regional language, professional upskilling', 'IITM Pravartak, StartupTN seed grants up to ₹10 lakh'],
          ['CleanTech/Renewable Energy', 'Solar installation (TN has India\'s highest solar capacity), EV charging networks', 'Tamil Nadu Energy Development Agency (TEDA), MSME grants'],
          ['Manufacturing (DeepTech)', 'Semiconductor components, EV battery packs, drone hardware', 'TIDCO, Hosur and Sriperumbudur industrial corridors'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'IIT Madras Research Park in Chennai is Asia\'s largest university research park, incubating 300+ startups. Its Incubation Cell offers seed funding, mentorship, and co-working space — and you do NOT need to be an IIT alumnus to apply, only a strong technology idea.',
      },
    },
  ],
  faqs,
  faqTitle: 'Entrepreneurship — quick answers',
  backLink: { label: 'the Careers hub', href: '/careers/' },
  ctaHeading: 'Have a product idea but unsure how to start?',
  ctaSub: 'A counsellor can point you to the right TN incubator for your sector.',
});
