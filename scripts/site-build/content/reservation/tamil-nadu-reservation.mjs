import { buildLeafPage } from '../../lib/leaf.mjs';
import { percentageBarSvg } from '../../lib/components.mjs';

const tnBreakdownChart = percentageBarSvg([
  { label: 'BC', value: 26.5, color: '#0d2d6e', textColor: '#ffffff' },
  { label: 'BCM', value: 3.5, color: '#1a3d8f', textColor: '#ffffff' },
  { label: 'MBC+DNC', value: 20, color: '#4a8cd9', textColor: '#ffffff' },
  { label: 'SC', value: 18, color: '#6ea8e8', textColor: '#ffffff' },
  { label: 'SCA', value: 3, color: '#8ec1f2' },
  { label: 'ST', value: 1, color: '#f9c74f' },
  { label: 'OC', value: 31, color: 'rgba(13,45,110,.12)' },
]);

const faqs = [
  {
    q: 'Why does Tamil Nadu have higher total reservation than the central 59.5%?',
    a: 'Tamil Nadu\'s roughly 69% total state reservation exceeds the Supreme Court\'s general 50% cap due to the state\'s Ninth Schedule constitutional protection. This is subject to ongoing litigation, so always verify the current operative percentages at tneaonline.org or tnmedicalselection.net at counselling time.',
  },
  {
    q: 'What\'s the difference between SC and SCA in Tamil Nadu specifically?',
    a: 'SCA (Arunthathiyar) is a 3% sub-quota carved out of the broader 18% SC reservation, specifically for the Arunthathiyar community. Non-Arunthathiyar SC students compete for the remaining 15% (with possible spillover from SCA), while Arunthathiyar SC students can access both the 3% SCA quota and the general 15% SC pool. This distinction matters only for TN state counselling, not for JoSAA or MCC.',
  },
];

export const tnReservationPage = buildLeafPage({
  slug: 'reservation/tamil-nadu-reservation',
  title: 'Tamil Nadu Reservation System Explained: BC, MBC, SC & SCA | T.I.M.E. Madurai',
  description: 'Tamil Nadu\'s detailed state reservation system for TNEA and TN medical counselling — BC, BCM, MBC/DNC, SC, SCA, and ST percentages explained.',
  canonical: '/reservation/tamil-nadu-reservation/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'Tamil Nadu Reservation' }],
  eyebrow: 'reservation · tamil nadu',
  heroTitle: 'Tamil Nadu\'s Reservation System',
  heroSubtitle: 'One of India\'s most detailed state reservation systems — higher overall reservation than the central norm, with categories unique to Tamil Nadu.',
  stats: [ { value: '~69%', label: 'Total TN state reservation' }, { value: '31%', label: 'OC (open competition) share' } ],
  toc: [
    { id: 'overview', label: 'The Full Breakdown' },
    { id: 'bc', label: 'BC — Backward Classes' },
    { id: 'mbc', label: 'MBC & DNC' },
    { id: 'sc-sca', label: 'SC & SCA' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'This applies to TNEA, TN Medical State Quota, AYUSH TN counselling, and TN state government jobs — understanding it correctly is essential for accurate rank predictions.',
  sections: [
    {
      id: 'overview',
      title: 'Tamil Nadu\'s reservation categories',
      table: {
        columns: ['Category', 'Reservation %', 'Notes'],
        rows: [
          ['BC', '26.5%', 'Largest single reservation block in TN'],
          ['BCM', '3.5%', 'Backward Classes (Muslim), carved out of BC'],
          ['MBC + DNC', '20%', 'More disadvantaged than BC — includes Vanniyar, Nadar (non-Christian), and others'],
          ['SC', '18%', 'Higher than the central 15%'],
          ['SCA', '3%', 'Sub-quota within SC, for Arunthathiyar community only'],
          ['ST', '1%', 'Lower TN tribal population than other states'],
          ['OC (Open Competition)', '~31%', 'Merit-based, all communities compete'],
        ],
      },
      custom: tnBreakdownChart,
    },
    {
      id: 'bc',
      eyebrow: 'the largest block',
      title: 'BC (Backward Classes)',
      intro: 'BC certificates are issued by the Tahsildar of your taluk. In TNEA, BC students compete within the 26.5% BC pool. For central institutions, your TN BC category may correspond to Central OBC — but this requires a separate Central OBC-NCL certificate; some TN BC communities aren\'t on the Central list at all and compete as GEN in JoSAA/MCC.',
    },
    {
      id: 'mbc',
      eyebrow: 'unique to a few states',
      title: 'MBC (Most Backward Classes) & DNC',
      intro: 'MBC is unique to Tamil Nadu and a handful of other states, recognising communities within BC that are more disadvantaged. The Vanniyar community has a separate internal quota within MBC (10.5% of the MBC 20%), subject to ongoing court scrutiny. DNC (Denotified Communities) are tribes formerly listed as criminal tribes under British law — Koracha, Kuravar, Narikurava, and others.',
    },
    {
      id: 'sc-sca',
      eyebrow: 'a critical distinction',
      title: 'SC & SCA',
      table: {
        columns: ['Category', 'TN state quota', 'Central institutions'],
        rows: [
          ['SC (non-Arunthathiyar)', '15% (possible SCA spillover)', '15% SC pool'],
          ['SC (Arunthathiyar/SCA)', '3% SCA + 15% SC pool (can spill over)', '15% SC pool'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'If you\'re SC, your community certificate should specify whether you\'re Arunthathiyar or not — this distinction matters only for TN state counselling, not for JoSAA or MCC, where all SC candidates compete together.',
      },
    },
  ],
  faqs,
  faqTitle: 'Tamil Nadu reservation — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Need help identifying your exact TN reservation category?',
  ctaSub: 'A counsellor can help you confirm before certificate applications begin.',
});
