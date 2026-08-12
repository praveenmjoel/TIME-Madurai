import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  { q: 'What is the OBC-NCL certificate and how do I get it?', a: 'OBC-NCL (Other Backward Class — Non-Creamy Layer) is a central certificate required for reservation at central institutions (IITs, NITs, IIITs). It is issued by a Revenue Divisional Officer (RDO) or sub-collector. Key requirement: family income must be below ₹8 lakh per year from all non-agricultural sources. This certificate must be renewed yearly.' },
  { q: 'Is my TN BC certificate valid for NIT reservations?', a: 'No. TN BC (Backward Class) certificate is for TN state institutions only. For NITs and IITs (central institutions), you need the Central Government OBC-NCL certificate. Many TN BC students are not in the Central OBC list or exceed the income limit — apply separately, don\'t assume TN BC automatically gives NIT OBC reservation.' },
  { q: 'What is EWS reservation and who qualifies?', a: 'EWS (Economically Weaker Section) is a 10% horizontal reservation for OC candidates (not SC/ST/OBC) whose family income is below ₹8 lakh per year and who don\'t own significant assets (no 5+ acres agricultural land, no 1,000+ sq ft house in a notified area). The EWS certificate is issued by a sub-collector or tehsildar.' },
  { q: 'What is the 7.5% special reservation for government school students in TN?', a: 'Tamil Nadu provides 7.5% reservation in medical and engineering admissions for students who studied from Class 6 to Class 12 entirely in Tamil Nadu government schools (TN Govt/Adi Dravidar/Tribal welfare schools). This is a horizontal reservation carved from each existing category\'s seats — submit a government school study certificate from your school\'s headmaster.' },
  { q: 'Can I claim both SC reservation and the 7.5% school quota in TN?', a: 'Yes. The 7.5% government school reservation is a horizontal quota within each category. An SC student who studied in a TN government school is eligible for SC seats under the 7.5% sub-quota — this effectively improves the cutoff for government-school SC students versus private-school SC students.' },
  { q: 'How long are reservation certificates valid?', a: 'SC/ST certificates: permanent (lifetime). OBC-NCL (central): 1 year — must be current at the time of counselling. EWS: 1 year — must be current. TN government school certificate: permanent (based on academic record). Always carry original certificates to counselling — photocopies may not be accepted.' },
];

export const faqReservationPage = buildLeafPage({
  slug: 'faq/reservation',
  title: 'Reservation FAQs: OBC-NCL, EWS & TN Government School Quota | T.I.M.E. Madurai',
  description: 'Real questions about OBC-NCL certificates, EWS eligibility, Tamil Nadu\'s 7.5% government school quota, and certificate validity periods.',
  canonical: '/faq/reservation/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }, { label: 'Reservation FAQs' }],
  eyebrow: 'faq · reservation',
  heroTitle: 'Reservation FAQs',
  heroSubtitle: 'Certificates, eligibility, and the Central-vs-TN distinction that trips up more families than anything else in this system.',
  stats: [],
  toc: [ { id: 'faqs', label: 'All Questions' } ],
  sections: [],
  faqs,
  faqTitle: 'Reservation — every question',
  backLink: { label: 'all FAQ categories', href: '/faq/' },
  ctaHeading: 'Have a reservation question this page didn\'t answer?',
  ctaSub: 'See our full Reservation hub, or ask a counsellor directly.',
});
