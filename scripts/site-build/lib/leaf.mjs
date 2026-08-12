// Shared assembler for cluster/leaf pages (spoke content one level below a pillar hub).
// Lets each leaf page's content file be mostly structured data instead of
// hand-assembled markup, while still rendering through the same component
// vocabulary (hero/TOC/table/callout/card-grid/FAQ) as the pillar pages.
import {
  heroBanner, stickyToc, callout, dataTable, hubCardGrid,
  faqAccordion, faqSchema, articleSchema, sectionHeader, ctaBand,
} from './components.mjs';
import { breadcrumbSchema } from './partials.mjs';

// sections: [{ id, eyebrow, title, subtitle, intro, table:{columns,rows}, note,
//              callout:{type,label,text}, cards:[{title,href,blurb}], cardCols }]
function renderSections(sections) {
  return sections.map(s => {
    const header = (s.eyebrow || s.title) ? sectionHeader({ eyebrow: s.eyebrow || '', title: s.title || '', subtitle: s.subtitle }) : '';
    const intro = s.intro ? `<p class="text-navy/60 text-base leading-relaxed max-w-3xl fu">${s.intro}</p>` : '';
    const table = s.table ? dataTable(s.table.columns, s.table.rows) : '';
    const note = s.note ? `<p class="text-navy/40 text-xs mt-4">${s.note}</p>` : '';
    const call = s.callout ? callout(s.callout) : '';
    const cards = s.cards ? hubCardGrid(s.cards, s.cardCols || 3) : '';
    return `<div id="${s.id}">${header}${intro}${table}${note}${call}${cards}</div>`;
  }).join('\n');
}

/**
 * cfg: {
 *   slug, title, description, canonical, courseLabel,
 *   breadcrumb: [{label,href}], toc: [{id,label}],
 *   eyebrow, heroTitle, heroSubtitle, stats: [{value,label}],
 *   intro (optional lede paragraph before sections),
 *   sections: [...], faqs: [{q,a}],
 *   ctaHeading, ctaSub,
 *   hubSlug (for exploreHubsGrid omission; leaf pages skip that, use backLink instead)
 *   backLink: {label, href} — link back to parent hub/pillar
 * }
 */
export function buildLeafPage(cfg) {
  const body = `
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-10">
${heroBanner({ eyebrow: cfg.eyebrow, title: cfg.heroTitle, subtitle: cfg.heroSubtitle, stats: cfg.stats || [] })}
</section>

<section class="sec bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    ${stickyToc(cfg.toc)}
    <div class="lg:col-span-9 space-y-20">
      ${cfg.intro ? `<p class="text-navy/60 text-base leading-relaxed max-w-3xl fu">${cfg.intro}</p>` : ''}
      ${renderSections(cfg.sections)}
      ${cfg.faqs && cfg.faqs.length ? `<div id="faqs">${sectionHeader({ eyebrow: 'frequently asked', title: cfg.faqTitle || 'Quick answers' })}${faqAccordion(cfg.faqs)}</div>` : ''}
      ${cfg.backLink ? `<div class="fu"><a href="${cfg.backLink.href}" class="pill-label text-navy/40 hover:text-gold transition-colors inline-flex items-center gap-2">&larr; back to ${cfg.backLink.label}</a></div>` : ''}
    </div>
  </div>
</section>
${ctaBand({ heading: cfg.ctaHeading, sub: cfg.ctaSub, courseLabel: cfg.courseLabel })}
`;

  const schema = [
    articleSchema({ title: cfg.heroTitle, description: cfg.description, url: `https://timemadurai.com${cfg.canonical}` }),
    ...(cfg.faqs && cfg.faqs.length ? [faqSchema(cfg.faqs)] : []),
  ];

  return {
    slug: cfg.slug,
    title: cfg.title,
    description: cfg.description,
    canonical: cfg.canonical,
    courseLabel: cfg.courseLabel,
    breadcrumb: cfg.breadcrumb,
    schema,
    body,
  };
}
