import { buildLeafPage } from '../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Does income affect SC/ST reservation eligibility?',
    a: 'No — this is a key distinction from OBC-NCL. There is no creamy layer criterion for SC/ST at all; students of any family income level qualify for SC/ST reservation as long as their caste/tribe is listed in the relevant Constitutional Schedule.',
  },
  {
    q: 'Do most Tamil Nadu students qualify for ST reservation?',
    a: 'Rarely, in urban areas specifically. Tamil Nadu\'s notified Scheduled Tribes are primarily Hill Tribes (Irula, Toda, Kota, Kurumba, Paniyan, Malayali, and others) — verify carefully whether your specific community is listed before assuming ST eligibility.',
  },
];

export const scStReservationPage = buildLeafPage({
  slug: 'reservation/sc-st-reservation',
  title: 'SC & ST Reservation Explained: Eligibility & Benefits | T.I.M.E. Madurai',
  description: 'How SC (15%) and ST (7.5%) reservation works at central institutions — no creamy layer, certificate requirements, and the benefits that come with each category.',
  canonical: '/reservation/sc-st-reservation/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Reservation', href: '/reservation/' }, { label: 'SC / ST Reservation' }],
  eyebrow: 'reservation · central',
  heroTitle: 'SC & ST Reservation',
  heroSubtitle: '15% and 7.5% of every central institution\'s seats respectively — with no creamy-layer income cap, unlike OBC-NCL.',
  stats: [ { value: '15%', label: 'SC central reservation' }, { value: '7.5%', label: 'ST central reservation' } ],
  toc: [
    { id: 'sc', label: 'SC Reservation' },
    { id: 'st', label: 'ST Reservation' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Both categories share one crucial feature: reservation applies regardless of family income, since there is no creamy layer concept for SC/ST anywhere in the system.',
  sections: [
    {
      id: 'sc',
      eyebrow: 'scheduled caste',
      title: 'SC reservation, in detail',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Who qualifies', 'Caste listed in the SC list of the relevant state (Constitution — Scheduled Castes Order, 1950 + amendments); must be Hindu, Sikh, or Buddhist by religion'],
          ['Certificate required', 'SC certificate from Tahsildar — no income criterion'],
          ['Benefit', '15% of central institution seats; lower cutoff marks; NEET qualifying at 40th percentile vs. 50th for General'],
          ['PwD sub-quota', 'SC-PwD — horizontal reservation within SC seats for physically disabled SC students'],
        ],
      },
    },
    {
      id: 'st',
      eyebrow: 'scheduled tribe',
      title: 'ST reservation, in detail',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Who qualifies', 'Tribe listed in the ST list of the relevant state — primarily tribal communities'],
          ['Certificate required', 'ST certificate from Tahsildar — no income criterion'],
          ['Benefit', '7.5% of central seats; lower cutoffs; NEET qualifying at 40th percentile'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'TN\'s notified STs are the Hill Tribes — Irula, Toda, Kota, Kurumba, Paniyan, Malayali, and others. Urban TN students rarely claim ST status; verify carefully whether your specific community appears on the notified list before relying on it.',
      },
    },
  ],
  faqs,
  faqTitle: 'SC/ST reservation — quick answers',
  backLink: { label: 'the Reservation hub', href: '/reservation/' },
  ctaHeading: 'Need help understanding your category\'s benefits at a specific college?',
  ctaSub: 'A counsellor can map your category rank to realistic outcomes.',
});
