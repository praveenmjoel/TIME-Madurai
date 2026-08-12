import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Why is BSMS (Siddha) specifically recommended over BUMS for Tamil Nadu students?',
    a: 'Infrastructure and language both favour Siddha in Tamil Nadu. Classical Siddha texts are in Tamil, giving Tamil-speaking students a genuine academic advantage, and with only ~1,200–1,500 BSMS seats nationally (versus ~52,000 for BAMS), government seats are achievable at lower NEET scores. BUMS, by contrast, has very limited infrastructure and government posts in TN — pursuing it usually means relocating to UP, Bihar, or Delhi for both study and career.',
  },
  {
    q: 'What is AIAPGET and why does it matter?',
    a: 'AIAPGET (All India AYUSH PG Entrance Test) is the NEET PG equivalent for AYUSH streams — the gateway to MD/MS specialisation in Ayurveda, Siddha, Unani, and Homeopathy. With roughly 7,500 PG seats against every AYUSH graduate nationally, competition is real, and specialisation dramatically increases clinical scope, salary, and academic career options.',
  },
  {
    q: 'What does a government Siddha Medical Officer actually earn?',
    a: 'Around ₹56,000–65,000/month basic pay under the current TN government scale, rising to ₹70,000–80,000/month with allowances (HRA, DA, TA) — comparable to a starting government MBBS doctor\'s salary, but with meaningfully less competition to secure the seat.',
  },
];

export const ayushPage = buildLeafPage({
  slug: 'medical/ayush',
  title: 'AYUSH Guide 2026: BAMS, BSMS, BHMS, BUMS & BNYS Compared | T.I.M.E. Madurai',
  description: 'Every AYUSH stream explained — Ayurveda, Siddha, Homeopathy, Unani, and Naturopathy — with colleges, NEET cutoffs, and why BSMS is uniquely valuable for Tamil Nadu students.',
  canonical: '/medical/ayush/',
  courseLabel: 'NEET',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Medical', href: '/medical/' }, { label: 'AYUSH Guide' }],
  eyebrow: 'medical · ayush',
  heroTitle: 'AYUSH: India\'s Traditional Medicine, Explained',
  heroSubtitle: 'Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy — licensed medical degrees regulated by the Government of India, not fringe alternatives.',
  stats: [
    { value: '₹1.5L Cr', label: 'Projected AYUSH market by 2030' },
    { value: '52,000', label: 'BAMS seats nationally' },
    { value: '~1,200–1,500', label: 'BSMS seats nationally' },
  ],
  toc: [
    { id: 'overview', label: 'The Five Streams' },
    { id: 'bams', label: 'BAMS — Ayurveda' },
    { id: 'bsms', label: 'BSMS — Siddha' },
    { id: 'bhms-others', label: 'BHMS, BUMS & BNYS' },
    { id: 'pg', label: 'AIAPGET — the PG Gateway' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'AYUSH practitioners are licensed medical professionals regulated by the National Commission for Indian System of Medicine and the National Commission for Homoeopathy. They are not the same scope of practice as MBBS doctors — no surgery, not all allopathic drugs — but each stream has a genuine, structured career ecosystem.',
  sections: [
    {
      id: 'overview',
      eyebrow: 'know your options',
      title: 'The five AYUSH streams',
      table: {
        columns: ['Stream', 'Degree', 'Duration', 'Regulator'],
        rows: [
          ['Ayurveda', 'BAMS', '5.5 yrs', 'NCISM'],
          ['Siddha', 'BSMS', '5.5 yrs', 'NCISM — TN has primary expertise'],
          ['Homeopathy', 'BHMS', '5.5 yrs', 'National Commission for Homoeopathy'],
          ['Unani', 'BUMS', '5.5 yrs', 'NCISM'],
          ['Naturopathy &amp; Yoga', 'BNYS', '5.5 yrs', 'NCISM'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Tamil Nadu has one of India\'s largest concentrations of AYUSH institutions, especially for Siddha. The National Institute of Siddha (NIS) in Chennai — the only NIS in India — is the premier Siddha research and education institution under the Ministry of AYUSH.',
      },
    },
    {
      id: 'bams',
      eyebrow: 'the oldest system',
      title: 'BAMS — Bachelor of Ayurvedic Medicine & Surgery',
      table: {
        columns: ['Institution type', 'General NEET score (indicative)', 'SC/ST score'],
        rows: [
          ['AIIA New Delhi (AIQ)', '480–530', '380–430'],
          ['TN govt BAMS colleges (TN quota)', '380–440', '290–340'],
          ['Good private BAMS colleges', '300–400', '240–320'],
        ],
      },
      note: 'Career paths: private Ayurveda/Panchakarma practice, government AMO posts, wellness-resort employment (especially in Kerala-model resorts), pharma industry roles (Himalaya, Dabur, Patanjali), and CCRAS research.',
    },
    {
      id: 'bsms',
      eyebrow: 'tamil nadu\'s own system',
      title: 'BSMS — Siddha, uniquely rooted in Tamil Nadu',
      intro: 'Siddha is one of the world\'s oldest medical systems, originating in Tamil Nadu and based on the teachings of the 18 Siddhars. Classical texts are in Tamil — a genuine academic advantage for Tamil-speaking students that no other medical system offers.',
      table: {
        columns: ['Government Siddha college', 'Location', 'Approx. BSMS seats'],
        rows: [
          ['National Institute of Siddha (NIS)', 'Tambaram, Chennai', '60 (AIQ — most competitive)'],
          ['Govt Siddha Medical College', 'Chennai (Arumbakkam)', '100'],
          ['Govt Siddha Medical College', 'Palayamkottai, Tirunelveli', '100'],
          ['Govt Siddha Medical College', 'Natham, Dindigul', '100'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Worth knowing',
        text: 'An NIS BSMS seat is achievable at NEET scores around 380–440 (General) — equivalent to getting into a premier government institution, but at scores far below what government MBBS demands. Starting salary for a TN Government Siddha Medical Officer runs ₹56,000–80,000/month with allowances.',
      },
    },
    {
      id: 'bhms-others',
      eyebrow: 'the rest of the landscape',
      title: 'BHMS, BUMS & BNYS',
      table: {
        columns: ['Degree', 'TN relevance', 'Notable detail'],
        rows: [
          ['BHMS (Homeopathy)', 'Solid — Govt Homoeopathic Medical College, Chennai', '~13,500 seats nationally; deeply trusted patient base, especially in smaller TN towns'],
          ['BUMS (Unani)', 'Low — very few TN colleges', 'Concentrated in UP, Bihar, Delhi, Karnataka; TN students should prefer BSMS or BAMS'],
          ['BNYS (Naturopathy &amp; Yoga)', 'Solid — Govt Yoga &amp; Naturopathy Medical College, Chennai', 'Strong fit with TN\'s wellness-tourism industry; global demand for RYT-certified graduates'],
        ],
      },
    },
    {
      id: 'pg',
      eyebrow: 'specialising further',
      title: 'AIAPGET — the PG gateway for AYUSH',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What it is', 'National entrance test for MD/MS in Ayurveda, Unani, Siddha, and Homeopathy'],
          ['Eligibility', 'Completed BAMS/BUMS/BSMS/BHMS + 1-year internship'],
          ['PG seats', '~7,500 nationally — competition is real'],
          ['When to start prepping', 'From the 4th year of UG, not after internship'],
        ],
      },
    },
  ],
  faqs,
  faqTitle: 'AYUSH — quick answers',
  backLink: { label: 'the Medical hub', href: '/medical/' },
  ctaHeading: 'Considering AYUSH as a genuine first choice, not a fallback?',
  ctaSub: 'A counsellor can walk through which stream fits your NEET range and interests.',
});
