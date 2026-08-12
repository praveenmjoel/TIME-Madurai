import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Who runs AYUSH counselling in Tamil Nadu?',
    a: 'The Director of Indian Medicine and Homoeopathy (DIMH), Tamil Nadu — a separate state counselling process from both JoSAA/TNEA and the general medical (TNMC&HC) counselling. NEET qualification is mandatory, but the process, portal, and timeline are distinct.',
  },
  {
    q: 'Which AYUSH seats are the most competitive in TN?',
    a: 'BSMS (Siddha) state quota seats, by a wide margin — the National Institute of Siddha (NIS), Chennai is the premier institution and fills earliest. Government BSMS seats at NIS Chennai and Govt Siddha Medical College Chennai close at NEET scores of 500–560+ (OC), well above what other TN AYUSH streams require.',
  },
];

export const ayushCounsellingPage = buildLeafPage({
  slug: 'counselling/ayush-counselling',
  title: 'AYUSH Counselling in Tamil Nadu: DIMH Process Explained | T.I.M.E. Madurai',
  description: 'How BAMS, BSMS, BHMS, and BUMS state-quota counselling works in Tamil Nadu, run by DIMH — registration, certificate verification, and choice filling.',
  canonical: '/counselling/ayush-counselling/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Counselling', href: '/counselling/' }, { label: 'AYUSH Counselling' }],
  eyebrow: 'counselling · ayush',
  heroTitle: 'AYUSH Counselling in Tamil Nadu',
  heroSubtitle: 'BAMS, BSMS, BHMS, and BUMS state-quota seats are filled through a dedicated process run by the Director of Indian Medicine and Homoeopathy — separate from general medical counselling.',
  stats: [
    { value: '500–560+', label: 'NIS Chennai BSMS closing score (OC)' },
    { value: '50th %ile', label: 'Min. NEET qualifying (General)' },
  ],
  toc: [
    { id: 'process', label: 'The Process' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'NEET qualification is mandatory for AYUSH state-quota counselling, but the portal, verification process, and timeline are entirely separate from JoSAA, MCC, or TN general medical counselling.',
  sections: [
    {
      id: 'process',
      eyebrow: 'step by step',
      title: 'The AYUSH TN counselling process',
      table: {
        columns: ['Step', 'Detail'],
        rows: [
          ['1. NEET qualification', 'Min. 50th percentile (Gen); 40th (SC/ST/OBC); 45th (Gen-PwD)'],
          ['2. Registration', 'DIMH Tamil Nadu portal (health.tn.gov.in/dimh) — NEET score + community certificate'],
          ['3. Certificate verification', 'Physical verification at DIMH office, Chennai, or designated centres'],
          ['4. Choice filling', 'Select preferred BAMS/BSMS/BHMS college in priority order'],
          ['5. Allotment &amp; joining', 'Based on NEET merit + reservation; join within deadline with fee payment'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'BSMS (Siddha) state-quota seats are the most competitive in AYUSH TN counselling — the National Institute of Siddha, Chennai fills very early. Government BSMS seats at NIS Chennai and Govt Siddha Medical College Chennai close at NEET scores of 500–560+ (OC), so plan well if targeting these specifically.',
      },
    },
  ],
  faqs,
  faqTitle: 'AYUSH counselling — quick answers',
  backLink: { label: 'the Counselling hub', href: '/counselling/' },
  ctaHeading: 'Considering AYUSH as a genuine target?',
  ctaSub: 'See our AYUSH guide for the full stream-by-stream comparison.',
});
