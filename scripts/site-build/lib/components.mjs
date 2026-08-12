import { HUBS } from './hubs.mjs';

export function heroBanner({ eyebrow, title, subtitle, stats = [] }) {
  const statRow = stats.length ? `
        <div class="fu d2 flex flex-wrap items-center justify-center gap-8 mt-12">
            ${stats.map((s, i) => `${i > 0 ? '<div class="w-px h-8 bg-white/10 hidden md:block"></div>' : ''}
            <div class="text-center">
                <div class="text-white font-bold text-2xl">${s.value}</div>
                <div class="text-white/30 text-xs mt-1 uppercase tracking-wider">${s.label}</div>
            </div>`).join('')}
        </div>` : '';

  return `
<section class="bg-navy relative overflow-hidden" style="padding-top:70px;">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="dot-bg absolute inset-0"></div>
        <div class="absolute top-1/4 left-1/3 w-96 h-96 rounded-full" style="background:radial-gradient(circle,rgba(249,199,79,.12),transparent);filter:blur(90px);"></div>
    </div>
    <div class="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center" style="padding-top:36px;padding-bottom:72px;">
        <span class="fu pill-label text-gold/70">${eyebrow}</span>
        <h1 class="fu d1 font-sans font-bold text-white mt-4" style="font-size:clamp(32px,6vw,58px);line-height:1.15;">${title}</h1>
        <p class="fu d2 text-white/50 mt-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">${subtitle}</p>
        ${statRow}
    </div>
</section>`;
}

export function tocProgressBar() {
  return `<div id="toc-progress"></div>`;
}

// items: [{id, label}]
export function stickyToc(items) {
  const links = items.map(it => `<a href="#${it.id}" class="toc-link">${it.label}</a>`).join('\n            ');
  return `
        <aside class="hidden lg:block lg:col-span-3">
            <div class="sticky" style="top:110px;">
                <div class="pill-label text-navy/30 mb-4">On this page</div>
                ${links}
            </div>
        </aside>`;
}

export function kpiRow(items) {
  return `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 fu">
            ${items.map(it => `<div class="kpi-card"><div class="kpi-num">${it.value}</div><div class="kpi-label">${it.label}</div></div>`).join('\n            ')}
        </div>`;
}

export function callout({ type = 'info', label, text }) {
  return `
        <div class="callout callout-${type} fu">
            <span class="callout-label">${label}</span>
            <div class="text-navy/70">${text}</div>
        </div>`;
}

// columns: [string], rows: [[cell,...]]
export function dataTable(columns, rows) {
  const thead = columns.map(c => `<th>${c}</th>`).join('');
  const tbody = rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('\n                ');
  return `
        <div class="data-table-wrap fu">
            <table class="data-table">
                <thead><tr>${thead}</tr></thead>
                <tbody>
                ${tbody}
                </tbody>
            </table>
        </div>`;
}

// cards: [{title, blurb, href}]
export function hubCardGrid(cards, cols = 3) {
  return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-5">
            ${cards.map((c, i) => `<a href="${c.href}" class="hub-card block fu d${(i % 6) + 1}">
                <h3 class="text-navy font-semibold text-base mb-2">${c.title}</h3>
                <p class="text-navy/45 text-sm leading-relaxed mb-4">${c.blurb}</p>
                <span class="pill-label text-navy/30 inline-flex items-center gap-2">explore <span>&rarr;</span></span>
            </a>`).join('\n            ')}
        </div>`;
}

// faqs: [{q, a}]
export function faqAccordion(faqs) {
  return `
        <div class="fu">
            ${faqs.map(f => `<details class="faq-item">
                <summary>${f.q} <span class="chev">+</span></summary>
                <p>${f.a}</p>
            </details>`).join('\n            ')}
        </div>`;
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function articleSchema({ title, description, url, datePublished = '2026-08-08' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    publisher: { '@type': 'Organization', name: 'T.I.M.E. Madurai', logo: { '@type': 'ImageObject', url: 'https://timemadurai.com/TIME%20Logo%20White.png' } },
  };
}

// "Explore the rest of the hub" — shows all pillars, live ones linked, others as soon-badges.
export function exploreHubsGrid(currentSlug) {
  const cards = HUBS.filter(h => h.slug !== currentSlug).map(h => {
    if (!h.live) {
      return `<div class="hub-card hub-card-soon"><h3 class="text-navy font-semibold text-sm mb-2">${h.label}</h3><p class="text-navy/40 text-xs leading-relaxed">${h.blurb}</p><span class="badge badge-navy mt-3 inline-block">Coming soon</span></div>`;
    }
    return `<a href="/${h.slug}/" class="hub-card block"><h3 class="text-navy font-semibold text-sm mb-2">${h.label}</h3><p class="text-navy/40 text-xs leading-relaxed">${h.blurb}</p></a>`;
  }).join('\n            ');
  return `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${cards}
        </div>`;
}

export function sectionHeader({ eyebrow, title, subtitle }) {
  return `
        <div class="mb-10 fu">
            <span class="pill-label text-navy/35">${eyebrow}</span>
            <h2 class="font-sans font-bold text-navy mt-3" style="font-size:clamp(26px,4vw,42px);line-height:1.2;">${title}</h2>
            ${subtitle ? `<p class="text-navy/45 mt-4 max-w-2xl text-sm leading-relaxed">${subtitle}</p>` : ''}
        </div>`;
}

export function ctaBand({ heading, sub, courseLabel }) {
  return `
<section class="bg-navy relative overflow-hidden" style="padding:80px 0;">
    <div class="absolute top-0 left-0 right-0 h-px" style="background:linear-gradient(90deg,transparent,rgba(249,199,79,.3),transparent);"></div>
    <div class="max-w-2xl mx-auto px-6 md:px-12 text-center fu relative z-10">
        <h2 class="font-sans font-bold text-white mb-4" style="font-size:clamp(26px,4.5vw,44px);line-height:1.2;">${heading}</h2>
        <p class="text-white/40 text-sm leading-relaxed max-w-md mx-auto mb-10">${sub}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onclick="openCounsellingForm()" class="btn-gold inline-flex items-center gap-3 font-medium px-8 py-4 rounded-full text-sm tracking-wide">
                Book a free counselling session
            </button>
            <a href="https://wa.me/919159900266" target="_blank" rel="noopener" class="btn-outline inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-wide">WhatsApp us</a>
        </div>
    </div>
</section>`;
}
