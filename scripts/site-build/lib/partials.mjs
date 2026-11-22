import { HUBS, NAV_GROUPS } from './hubs.mjs';

const SITE_URL = 'https://timemadurai.com';
const WHATSAPP_NUMBER = '919159900266'; // Knowledge Hive Learning Services / TIME UG helpline
const PHONE_DISPLAY = '91599 00266';

// ── <head> ──────────────────────────────────────────────────────────────────
// Same Tailwind CDN + navy/gold config + fonts as index.html, plus the shared
// component CSS every hub/cluster page needs (callouts, comparison tables,
// mega-menu, sticky TOC, breadcrumb, floating CTA). Per-page SEO metadata and
// JSON-LD schema are passed in, not hand-written per file.
export const GTM_ID = 'GTM-5GP3GTJV';

export const GTM_HEAD = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');</script>
<!-- End Google Tag Manager -->`;

export const GTM_BODY = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

export function renderHead({ title, description, canonical, ogImage, schema = [] }) {
  const url = `${SITE_URL}${canonical}`;
  const image = ogImage || `${SITE_URL}/TIME%20Logo%20White.png`;
  const schemaTags = schema
    .map(obj => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n    ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
${GTM_HEAD}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${url}">

    <meta property="og:type" content="article">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta property="og:site_name" content="T.I.M.E. Madurai">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">

    ${schemaTags}

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Borel&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/site.css">
    <style>${SHARED_CSS}</style>
</head>`;
}

// CSS carried over verbatim from index.html (nav, cards, buttons, fade-up,
// pill-label, etc.) plus new component classes for the content-hub pages.
const SHARED_CSS = `
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .fu { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
        .fu.show { opacity:1; transform:translateY(0); }
        .fu.d1 { transition-delay:.1s; } .fu.d2 { transition-delay:.2s; } .fu.d3 { transition-delay:.3s; }
        .fu.d4 { transition-delay:.4s; } .fu.d5 { transition-delay:.5s; } .fu.d6 { transition-delay:.6s; }
        #nav { transition: background .5s ease, box-shadow .5s ease, padding .3s ease; }
        #nav.scrolled { background: rgba(13,45,110,.96); backdrop-filter: blur(12px); box-shadow: 0 1px 40px rgba(0,0,0,.25); padding-top: 14px; padding-bottom: 14px; }
        /* Content/hub pages don't open on a full-bleed navy hero like the homepage does,
           so the nav needs a permanent solid backing (not just on scroll) for contrast. */
        #nav.nav-content { background: rgba(13,45,110,.97); backdrop-filter: blur(12px); box-shadow: 0 1px 30px rgba(0,0,0,.15); }
        .nav-link { position: relative; transition: color .3s; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#f9c74f; transition:width .3s; }
        .nav-link:hover::after { width:100%; }
        .pill-label { font-size:11px; letter-spacing:.12em; text-transform:uppercase; font-weight:500; }
        .btn-gold { background:#f9c74f; color:#0d2d6e; transition: background .3s, transform .3s, box-shadow .3s; }
        .btn-gold:hover { background:#fdd87a; transform:translateY(-2px); box-shadow:0 10px 28px rgba(249,199,79,.35); }
        .btn-outline { border:1px solid rgba(255,255,255,.25); color:white; transition: border-color .3s, color .3s; }
        .btn-outline:hover { border-color:#f9c74f; color:#f9c74f; }
        .sec { padding: 80px 0; }
        @media(max-width:768px){ .sec { padding:52px 0; } }
        .dot-bg { background-image: radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px); background-size: 48px 48px; }
        .gold-line { display:inline-block; width:32px; height:2px; background:#f9c74f; }

        /* ── MEGA MENU ── */
        .mega-trigger { position:relative; }
        .mega-panel { position:absolute; top:100%; left:50%; transform:translateX(-50%) translateY(8px); width:280px;
            background:#0d2d6e; border:1px solid rgba(255,255,255,.1); border-radius:16px; padding:10px;
            opacity:0; pointer-events:none; transition:opacity .2s, transform .2s; box-shadow:0 24px 60px rgba(0,0,0,.4); z-index:60; }
        .mega-trigger:hover .mega-panel, .mega-trigger:focus-within .mega-panel { opacity:1; pointer-events:auto; transform:translateX(-50%) translateY(4px); }
        .mega-item { display:block; padding:9px 12px; border-radius:10px; font-size:13px; color:rgba(255,255,255,.65); transition:background .2s,color .2s; }
        .mega-item:hover { background:rgba(249,199,79,.08); color:#f9c74f; }
        .mega-soon { padding:14px 12px; }
        /* Wide panels group several related hubs under one nav trigger — each
           hub gets its own sub-column so its cluster links stay visually
           distinct from its siblings. Anchored to the trigger's right edge
           (not centered) since these triggers sit right-of-center in the bar
           and a centered wide panel would run off the viewport edge. */
        .mega-trigger .mega-panel.mega-panel-wide { left:auto; right:-16px; width:auto; max-width:calc(100vw - 32px); display:flex; gap:2px; padding:14px 8px; transform:translateY(8px); }
        .mega-trigger:hover .mega-panel.mega-panel-wide, .mega-trigger:focus-within .mega-panel.mega-panel-wide { transform:translateY(4px); }
        .mega-col { width:168px; padding:0 3px; }
        .mega-col + .mega-col { border-left:1px solid rgba(255,255,255,.08); }
        .mega-col-head { display:block; padding:6px 12px 10px; font-size:11px; font-weight:700; letter-spacing:.05em; text-transform:uppercase; color:#f9c74f; }
        a.mega-col-head:hover { color:#fdd87a; }

        /* ── BREADCRUMB ── */
        .crumb-link { color:rgba(13,45,110,.4); transition:color .2s; }
        .crumb-link:hover { color:#0d2d6e; }

        /* ── STICKY TOC + PROGRESS ── */
        #toc-progress { position:fixed; top:0; left:0; height:3px; background:#f9c74f; width:0%; z-index:70; transition:width .1s linear; }
        .toc-link { display:block; padding:7px 0; font-size:13px; color:rgba(13,45,110,.45); border-left:2px solid rgba(13,45,110,.08); padding-left:14px; transition:color .2s,border-color .2s; }
        .toc-link.active, .toc-link:hover { color:#0d2d6e; border-left-color:#f9c74f; }

        /* ── CALLOUT BOXES ── */
        .callout { border-radius:16px; padding:20px 22px; font-size:14px; line-height:1.7; }
        .callout-tip { background:rgba(249,199,79,.06); border:1px solid rgba(249,199,79,.25); }
        .callout-tip .callout-label { color:#b8860b; }
        .callout-mistake { background:rgba(220,38,38,.04); border:1px solid rgba(220,38,38,.18); }
        .callout-mistake .callout-label { color:#dc2626; }
        .callout-info { background:rgba(13,45,110,.04); border:1px solid rgba(13,45,110,.12); }
        .callout-info .callout-label { color:#0d2d6e; }
        .callout-label { font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; display:block; margin-bottom:8px; }

        /* ── KPI / STAT CARDS ── */
        .kpi-card { border:1px solid rgba(13,45,110,.08); border-radius:16px; padding:20px; text-align:center; }
        .kpi-num { font-weight:700; color:#0d2d6e; font-size:clamp(22px,3vw,30px); line-height:1; }
        .kpi-label { color:rgba(13,45,110,.4); font-size:11px; text-transform:uppercase; letter-spacing:.08em; margin-top:8px; }

        /* ── DATA / COMPARISON TABLES ── */
        .data-table-wrap { overflow-x:auto; border:1px solid rgba(13,45,110,.08); border-radius:16px; }
        table.data-table { width:100%; border-collapse:collapse; font-size:13px; min-width:560px; }
        table.data-table th { background:rgba(13,45,110,.04); color:#0d2d6e; text-align:left; padding:12px 16px; font-weight:600; white-space:nowrap; }
        table.data-table td { padding:12px 16px; border-top:1px solid rgba(13,45,110,.06); color:rgba(13,45,110,.65); }
        table.data-table tr:hover td { background:rgba(249,199,79,.04); }
        .badge { display:inline-block; font-size:10px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; padding:3px 9px; border-radius:999px; }
        .badge-navy { background:rgba(13,45,110,.08); color:#0d2d6e; }
        .badge-gold { background:rgba(249,199,79,.18); color:#8a6412; }

        /* ── HUB / CLUSTER CARDS ── */
        .hub-card { border:1px solid rgba(13,45,110,.1); border-radius:16px; padding:24px; transition:border-color .3s, transform .3s, box-shadow .3s; }
        .hub-card:hover { border-color:#f9c74f; transform:translateY(-4px); box-shadow:0 20px 50px rgba(13,45,110,.08); }
        .hub-card-soon { opacity:.45; }

        /* ── FLOATING CTA CLUSTER ── */
        #floating-cta { position:fixed; right:20px; bottom:20px; z-index:80; display:flex; flex-direction:column; gap:10px; align-items:flex-end; }
        .fab { width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 10px 30px rgba(0,0,0,.25); transition:transform .25s; }
        .fab:hover { transform:scale(1.08); }
        .fab-whatsapp { background:#25D366; }
        .fab-call { background:#0d2d6e; border:1px solid rgba(249,199,79,.4); }

        /* ── FAQ ACCORDION ── */
        .faq-item summary { cursor:pointer; list-style:none; font-weight:600; color:#0d2d6e; padding:18px 0; display:flex; justify-content:space-between; gap:12px; }
        .faq-item summary::-webkit-details-marker { display:none; }
        .faq-item { border-bottom:1px solid rgba(13,45,110,.08); }
        .faq-item p { padding-bottom:18px; color:rgba(13,45,110,.55); font-size:14px; line-height:1.7; }
        .faq-item .chev { transition:transform .25s; color:rgba(13,45,110,.3); flex-shrink:0; }
        .faq-item[open] .chev { transform:rotate(45deg); }
`;

// ── NAV (mega-menu) ─────────────────────────────────────────────────────────
// Renders one trigger per NAV_GROUPS entry. A group with a single hub behaves
// exactly as a plain hub trigger always has (narrow panel, flat cluster list).
// A group with multiple hubs renders a wider panel with one sub-column per
// hub, so related-but-distinct hubs (e.g. Reservation/Scholarships/Loans)
// share a slot in the bar without losing their own identity or cluster links.
function groupHubs(group) {
  return group.hubs.map(slug => HUBS.find(h => h.slug === slug)).filter(Boolean);
}

function megaMenuDesktop() {
  return NAV_GROUPS.map(group => {
    const hubs = groupHubs(group);
    if (hubs.length === 1) {
      const hub = hubs[0];
      if (!hub.live) {
        return `<div class="mega-trigger">
                <span class="nav-link text-white/30 text-xs tracking-wide cursor-default">${group.label}</span>
                <div class="mega-panel"><div class="mega-soon"><div class="text-gold text-[10px] uppercase tracking-widest mb-1">Coming soon</div><div class="text-white/40 text-xs leading-relaxed">${hub.blurb}</div></div></div>
            </div>`;
      }
      const items = hub.clusters.map(c => `<a href="${c.href}" class="mega-item">${c.label}</a>`).join('');
      return `<div class="mega-trigger">
                <a href="/${hub.slug}/" class="nav-link text-white/60 hover:text-white text-xs tracking-wide">${group.label}</a>
                <div class="mega-panel">${items}</div>
            </div>`;
    }
    const cols = hubs.map(hub => {
      if (!hub.live) {
        return `<div class="mega-col"><div class="mega-col-head text-white/25">${hub.label} <span class="pill-label" style="font-size:9px;">soon</span></div><div class="text-white/35 text-xs leading-relaxed px-3 pb-2">${hub.blurb}</div></div>`;
      }
      const items = hub.clusters.map(c => `<a href="${c.href}" class="mega-item">${c.label}</a>`).join('');
      return `<div class="mega-col"><a href="/${hub.slug}/" class="mega-col-head">${hub.label}</a>${items}</div>`;
    }).join('');
    return `<div class="mega-trigger">
                <span class="nav-link text-white/60 hover:text-white text-xs tracking-wide cursor-default">${group.label}</span>
                <div class="mega-panel mega-panel-wide">${cols}</div>
            </div>`;
  }).join('\n            ');
}

function megaMenuMobile() {
  return NAV_GROUPS.map(group => {
    const hubs = groupHubs(group);
    if (hubs.length === 1) {
      const hub = hubs[0];
      if (!hub.live) {
        return `<div class="text-white/25 text-sm py-2.5 border-b border-white/5 flex items-center justify-between"><span>${group.label}</span><span class="pill-label" style="font-size:9px;">soon</span></div>`;
      }
      return `<a href="/${hub.slug}/" class="text-white/70 text-sm py-2.5 border-b border-white/5 block font-medium">${group.label}</a>` +
        hub.clusters.map(c => `<a href="${c.href}" class="text-white/45 text-xs py-2 pl-4 border-b border-white/5 block">${c.label}</a>`).join('');
    }
    const groupHeader = `<div class="text-gold/60 text-[10px] uppercase tracking-widest pt-4 pb-1">${group.label}</div>`;
    const hubBlocks = hubs.map(hub => {
      if (!hub.live) {
        return `<div class="text-white/25 text-sm py-2 pl-2 border-b border-white/5 flex items-center justify-between"><span>${hub.label}</span><span class="pill-label" style="font-size:9px;">soon</span></div>`;
      }
      return `<a href="/${hub.slug}/" class="text-white/70 text-sm py-2 pl-2 border-b border-white/5 block font-medium">${hub.label}</a>` +
        hub.clusters.map(c => `<a href="${c.href}" class="text-white/45 text-xs py-2 pl-6 border-b border-white/5 block">${c.label}</a>`).join('');
    }).join('');
    return groupHeader + hubBlocks;
  }).join('\n        ');
}

export function renderNav() {
  return `
<nav id="nav" class="nav-content fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center">
            <img src="/TIME%20Logo%20White.png" alt="T.I.M.E. Madurai" style="height:36px;width:auto;display:block;">
        </a>
        <div class="hidden lg:flex items-center gap-5">
            <a href="/" class="nav-link text-white/60 hover:text-white text-xs tracking-wide">Home</a>
            ${megaMenuDesktop()}
            <div class="w-px h-4 bg-white/15"></div>
            <a href="/cat/" class="nav-link text-white/60 hover:text-white text-xs tracking-wide">CAT Program</a>
            <button onclick="openCounsellingForm()" class="btn-gold text-xs font-medium px-4 py-2 rounded-full">Book a Session</button>
        </div>
        <button id="hamburger" class="lg:hidden text-white p-1">
            <svg id="ham-icon" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>
            <svg id="close-icon" class="hidden" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round"/></svg>
        </button>
    </div>
    <div id="mobile-menu" class="hidden lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col px-2 pb-4 max-h-[75vh] overflow-y-auto">
        <a href="/" class="text-white/70 text-sm py-2.5 border-b border-white/5">Home</a>
        ${megaMenuMobile()}
        <button onclick="openCounsellingForm()" class="btn-gold text-sm font-medium px-5 py-2.5 rounded-full w-fit mt-4">Book a Session</button>
    </div>
</nav>`;
}

// ── BREADCRUMB ──────────────────────────────────────────────────────────────
// items: [{label, href}] — last item has no href (current page)
export function renderBreadcrumb(items) {
  const linkItems = items.map((it, i) => {
    const isLast = i === items.length - 1;
    return isLast
      ? `<span class="text-navy/70 text-xs font-medium">${it.label}</span>`
      : `<a href="${it.href}" class="crumb-link text-xs">${it.label}</a><span class="text-navy/20 text-xs">/</span>`;
  }).join(' ');
  return `<nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4 flex items-center gap-2 flex-wrap">${linkItems}</nav>`;
}

export function breadcrumbSchema(items, siteUrl = SITE_URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${siteUrl}${it.href}` } : {}),
    })),
  };
}

// ── COUNSELLING MODAL (reused verbatim from index.html) ─────────────────────
export function renderCounsellingModal() {
  return `
<div id="counselling-modal" class="fixed inset-0 z-[300] flex items-center justify-center px-4" style="background:rgba(5,14,40,.92);backdrop-filter:blur(12px);display:none!important;opacity:0;transition:opacity .35s;">
    <div class="relative w-full max-w-lg rounded-3xl overflow-hidden" style="background:#0d2d6e;border:1px solid rgba(249,199,79,.18);box-shadow:0 40px 80px rgba(0,0,0,.6);">
        <div class="h-1 w-full" style="background:linear-gradient(90deg,transparent,#f9c74f 30%,#f9c74f 70%,transparent);"></div>
        <button onclick="closeCounsellingForm()" class="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors" style="border:1px solid rgba(255,255,255,.1);">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div class="px-8 py-8">
            <div class="mb-7">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style="background:rgba(249,199,79,.12);border:1px solid rgba(249,199,79,.2);">
                    <span class="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                    <span class="text-gold text-xs font-medium tracking-wide">Free Counselling</span>
                </div>
                <h3 class="text-white font-bold text-2xl leading-snug">Let's talk about<br>your next move.</h3>
                <p class="text-white/40 text-sm mt-2">No pitch. Just a conversation. We'll call you back within 24 hours.</p>
            </div>
            <form id="counselling-form" onsubmit="submitCounsellingForm(event)" novalidate>
                <div class="mb-4">
                    <label class="block text-white/50 text-xs uppercase tracking-widest mb-2">Your Name *</label>
                    <input id="c-name" type="text" placeholder="Full name" required autocomplete="name" class="w-full text-white text-sm outline-none placeholder-white/25 rounded-xl px-4 py-3" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);">
                </div>
                <div class="mb-4">
                    <label class="block text-white/50 text-xs uppercase tracking-widest mb-2">Phone Number *</label>
                    <div id="c-phone-wrap" class="flex rounded-xl overflow-hidden" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);">
                        <select id="c-code" autocomplete="tel-country-code" class="text-white text-sm outline-none px-3 flex-shrink-0" style="background:transparent;border-right:1px solid rgba(255,255,255,.12);">
                            <option value="+91" selected style="background:#0d2d6e;">+91</option>
                            <option value="+1" style="background:#0d2d6e;">+1</option>
                            <option value="+44" style="background:#0d2d6e;">+44</option>
                            <option value="+971" style="background:#0d2d6e;">+971</option>
                        </select>
                        <input id="c-phone" type="tel" placeholder="98765 43210" required autocomplete="tel-national" class="flex-1 text-white text-sm outline-none placeholder-white/25 px-4 py-3" style="background:transparent;">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-white/50 text-xs uppercase tracking-widest mb-2">I'm preparing for *</label>
                    <select id="c-course" required class="w-full text-white text-sm outline-none rounded-xl px-4 py-3" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);">
                        <option value="" style="background:#0d2d6e;">Select exam / programme</option>
                        <optgroup label="── School / UG ──" style="background:#0d2d6e;">
                            <option value="JEE" data-type="ug" style="background:#0d2d6e;">JEE (IITs &amp; NITs)</option>
                            <option value="NEET" data-type="ug" style="background:#0d2d6e;">NEET</option>
                            <option value="CLAT" data-type="ug" style="background:#0d2d6e;">CLAT</option>
                            <option value="CUET" data-type="ug" style="background:#0d2d6e;">CUET</option>
                            <option value="Foundation" data-type="ug" style="background:#0d2d6e;">Foundation (Class VI–X)</option>
                        </optgroup>
                        <optgroup label="── College / PG ──" style="background:#0d2d6e;">
                            <option value="CAT" data-type="pg" style="background:#0d2d6e;">CAT (IIMs &amp; top B-Schools)</option>
                            <option value="MAT" data-type="pg" style="background:#0d2d6e;">MAT</option>
                            <option value="Bank Exams" data-type="pg" style="background:#0d2d6e;">Bank Exams (IBPS / SBI / RBI)</option>
                            <option value="GATE" data-type="pg" style="background:#0d2d6e;">GATE</option>
                        </optgroup>
                    </select>
                </div>
                <div class="mb-6">
                    <label class="block text-white/50 text-xs uppercase tracking-widest mb-2">Email <span class="normal-case opacity-60">(optional)</span></label>
                    <input id="c-email" type="email" placeholder="your@email.com" autocomplete="email" class="w-full text-white text-sm outline-none placeholder-white/25 rounded-xl px-4 py-3" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);">
                </div>
                <button type="submit" id="c-submit" class="w-full flex items-center justify-center gap-3 font-semibold text-sm rounded-full py-4 transition-all" style="background:#f9c74f;color:#0d2d6e;">
                    <span id="c-btn-text">Request My Free Counselling Session</span>
                    <svg id="c-btn-icon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    <svg id="c-btn-spin" class="hidden w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                </button>
            </form>
            <div id="c-success" class="hidden text-center py-6">
                <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style="background:rgba(249,199,79,.15);border:1px solid rgba(249,199,79,.3);">
                    <svg width="26" height="26" fill="none" stroke="#f9c74f" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div class="text-white font-bold text-xl mb-2">You're all set.</div>
                <p class="text-white/45 text-sm leading-relaxed">We'll call you back within 24 hours for a free, no-pressure conversation about your preparation journey.</p>
                <button onclick="closeCounsellingForm()" class="mt-6 text-gold text-sm hover:underline">Close</button>
            </div>
        </div>
    </div>
</div>`;
}

// ── FLOATING CTA CLUSTER (new — no prior equivalent existed) ────────────────
export function renderFloatingCta({ courseLabel = 'JEE/NEET' } = {}) {
  const waText = encodeURIComponent(`Hi! I'd like to know more about ${courseLabel} coaching at T.I.M.E. Madurai.`);
  return `
<div id="floating-cta">
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" target="_blank" rel="noopener" class="fab fab-whatsapp" aria-label="Chat on WhatsApp" title="WhatsApp Enquiry">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 01-1.27-4.35c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 012.42 5.83c0 4.55-3.7 8.21-8.25 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
    </a>
    <a href="tel:+${WHATSAPP_NUMBER}" class="fab fab-call" aria-label="Call us" title="Call ${PHONE_DISPLAY}">
        <svg width="20" height="20" fill="none" stroke="#f9c74f" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a.75.75 0 00-.57-.727l-4.28-1.07a.75.75 0 00-.756.198l-1.716 1.716a11.25 11.25 0 01-6.364-6.364l1.716-1.716a.75.75 0 00.198-.756l-1.07-4.28a.75.75 0 00-.727-.57H4.5A2.25 2.25 0 002.25 6.75z"/></svg>
    </a>
</div>`;
}

// ── FOOTER (existing structure + new hub sitemap column) ────────────────────
export function renderFooter() {
  const hubLinks = NAV_GROUPS.map(group => {
    const primary = groupHubs(group).find(h => h.live);
    if (!primary) return '';
    return `<a href="/${primary.slug}/" class="text-white/45 text-sm hover:text-gold transition-colors block">${group.label}</a>`;
  }).filter(Boolean).join('\n                    ');
  return `
<footer class="bg-navy border-t border-white/5 py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div class="col-span-2 md:col-span-1">
                <div class="font-sans font-bold text-white text-xl mb-1">T.I.M.E. Madurai</div>
                <div class="pill-label text-white/25 mb-5">Triumphant Institute of Management Education</div>
                <p class="text-white/28 text-sm leading-relaxed max-w-sm">Shaping trajectories across India since 1992. Madurai's home for premium competitive exam preparation.</p>
            </div>
            <div>
                <div class="pill-label text-white/25 mb-5">Knowledge Hub</div>
                <div class="space-y-2.5">
                    ${hubLinks}
                </div>
            </div>
            <div>
                <div class="pill-label text-white/25 mb-5">Programs</div>
                <div class="space-y-2.5">
                    <a href="/coaching/jee-coaching-madurai/" class="text-white/45 text-sm hover:text-gold transition-colors block">JEE Coaching</a>
                    <a href="/coaching/neet-coaching-madurai/" class="text-white/45 text-sm hover:text-gold transition-colors block">NEET Coaching</a>
                    <a href="/#courses" class="text-white/45 text-sm hover:text-gold transition-colors block">CAT / MAT</a>
                    <a href="/cat/" class="text-gold text-sm hover:text-gold-light transition-colors block flex items-center gap-1.5 mt-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-gold inline-block flex-shrink-0"></span>
                        CAT Program
                    </a>
                </div>
            </div>
            <div>
                <div class="pill-label text-white/25 mb-5">Visit Us</div>
                <div class="space-y-2.5">
                    <div class="text-white/45 text-sm">Madurai, Tamil Nadu</div>
                    <a href="tel:+${WHATSAPP_NUMBER}" class="text-white/45 text-sm hover:text-gold transition-colors block">${PHONE_DISPLAY}</a>
                    <a href="javascript:void(0)" onclick="openCounsellingForm()" class="text-white/45 text-sm hover:text-gold transition-colors block">Book a session &rarr;</a>
                    <div class="text-white/25 text-xs pt-2">Also serving Dindigul, Theni, Virudhunagar, Sivaganga, Karaikudi, Sivakasi &amp; Ramanathapuram</div>
                </div>
            </div>
        </div>
        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <div class="text-white/20 text-xs">&copy; 2024 T.I.M.E. Madurai. All rights reserved.</div>
            <div class="text-white/20 text-xs tracking-widest uppercase">Not just exams. Trajectories.</div>
        </div>
    </div>
</footer>`;
}

// ── SHARED JS (nav scroll/hamburger/fade-up, reused verbatim, plus new
// sticky-TOC scroll-spy + progress bar for content pages) ───────────────────
export function renderScripts() {
  return `
<script>
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); }, { passive: true });

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const hamIcon = document.getElementById('ham-icon');
const closeIcon = document.getElementById('close-icon');
hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden');
    hamIcon.classList.toggle('hidden', !open);
    closeIcon.classList.toggle('hidden', open);
});

const fuObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fu').forEach(el => fuObserver.observe(el));

// Sticky TOC progress bar + scroll-spy
const progressBar = document.getElementById('toc-progress');
if (progressBar) {
    window.addEventListener('scroll', () => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }, { passive: true });
}
const tocLinks = document.querySelectorAll('.toc-link');
if (tocLinks.length) {
    const sections = Array.from(tocLinks).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            const link = document.querySelector('.toc-link[href="#' + e.target.id + '"]');
            if (link) link.classList.toggle('active', e.isIntersecting);
        });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(s => spy.observe(s));
}
</script>`;
}

export function renderCounsellingScript() {
  return `
<script>
const CU_KEY = 'pk_152521978_7EHF7ITXDVC0YYXJYKYYGY85RBZF66CC';
const CU_WS_ID = '9016591512';
const CU_MKT_CH = '4-90162159784-8';
const CU_LIST_PG = '901611772550';
const CU_LIST_UG = '901605404845';
const CF = { mobile:'11e5ef8a-5870-4da1-9bc7-7fc5c72d8dfe', email:'046eee55-2753-4209-9e07-a57a472a0e92', leadSource:'49cdb879-1668-4e1a-a085-e27faacbd0c7', leadStatus:'dbc59886-963c-4a0f-8016-e96a7b6033e1' };
const CF_PG = { howKnow:'1c1eb4b5-fdbd-41f1-a71f-00a6b0d97bf6', sourceNotes:'eb042253-39ef-44da-bb36-e59b188d2abd' };
const CF_UG = { source:'840d0487-9a03-463a-be49-ccf47e1fd7c2' };
const OPT_LEAD_SOURCE_DIGITAL = 'f8748059-ce6e-4a59-bbb1-667b8f5fa2ab';
const OPT_LEAD_STATUS_HOT = '20f4598b-17da-4bf2-b320-760f8661f1f9';
const OPT_HOW_KNOW_WEBSITE = '998c3fda-d40b-48ea-8f63-046c3fb7462a';

const counselModal = document.getElementById('counselling-modal');
function openCounsellingForm() {
  counselModal.style.removeProperty('display');
  requestAnimationFrame(() => counselModal.style.opacity = '1');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('c-name').focus(), 350);
}
function closeCounsellingForm() {
  counselModal.style.opacity = '0';
  setTimeout(() => {
    counselModal.style.display = 'none';
    document.body.style.overflow = '';
    document.getElementById('counselling-form').classList.remove('hidden');
    document.getElementById('counselling-form').reset();
    document.getElementById('c-success').classList.add('hidden');
    const btn = document.getElementById('c-submit');
    btn.disabled = false;
    document.getElementById('c-btn-text').textContent = 'Request My Free Counselling Session';
    document.getElementById('c-btn-icon').classList.remove('hidden');
    document.getElementById('c-btn-spin').classList.add('hidden');
  }, 350);
}
counselModal.addEventListener('click', e => { if (e.target === counselModal) closeCounsellingForm(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && counselModal.style.display !== 'none') closeCounsellingForm(); });

async function submitCounsellingForm(e) {
  e.preventDefault();
  const name = document.getElementById('c-name').value.trim();
  const code = document.getElementById('c-code').value;
  const raw = document.getElementById('c-phone').value.trim();
  const phone = code + raw.replace(/^0+/, '').replace(/\\s+/g, '');
  const email = document.getElementById('c-email').value.trim();
  const sel = document.getElementById('c-course');
  const course = sel.value;
  const courseType = sel.options[sel.selectedIndex]?.dataset?.type || 'ug';
  if (!name || !raw || !course) { alert("Please fill in your name, phone number, and the exam you're preparing for."); return; }
  const btn = document.getElementById('c-submit');
  btn.disabled = true;
  document.getElementById('c-btn-text').textContent = 'Submitting…';
  document.getElementById('c-btn-icon').classList.add('hidden');
  document.getElementById('c-btn-spin').classList.remove('hidden');
  const isPG = courseType === 'pg';
  const listId = isPG ? CU_LIST_PG : CU_LIST_UG;
  const dbName = isPG ? 'TIME PG Database' : 'TIME Database';
  try {
    const customFields = [
      { id: CF.mobile, value: phone },
      { id: CF.leadSource, value: OPT_LEAD_SOURCE_DIGITAL },
      { id: CF.leadStatus, value: OPT_LEAD_STATUS_HOT },
      ...(email ? [{ id: CF.email, value: email }] : []),
    ];
    if (isPG) { customFields.push({ id: CF_PG.howKnow, value: OPT_HOW_KNOW_WEBSITE }); customFields.push({ id: CF_PG.sourceNotes, value: 'Website Counselling Form' }); }
    else { customFields.push({ id: CF_UG.source, value: 'Website Counselling Form' }); }
    const desc = ['Counselling enquiry from the TIME Madurai website.', '', 'Phone: ' + phone, 'Exam / Programme: ' + course, ...(email ? ['Email: ' + email] : [])].join('\\n');
    const taskRes = await fetch('https://api.clickup.com/api/v2/list/' + listId + '/task', { method: 'POST', headers: { 'Authorization': CU_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ name, description: desc, custom_fields: customFields }) });
    if (!taskRes.ok) { const errText = await taskRes.text(); throw new Error('ClickUp ' + taskRes.status + ': ' + errText); }
    const task = await taskRes.json();
    const taskUrl = task.url || ('https://app.clickup.com/t/' + task.id);
    const msg = ['New Counselling Request — timemadurai.com', '', 'Name: ' + name, 'Phone: ' + phone, 'Interested in: ' + course, ...(email ? ['Email: ' + email] : []), '', 'Added to: ' + dbName, '', '[View in ClickUp](' + taskUrl + ')'].join('\\n');
    await fetch('https://api.clickup.com/api/v3/workspaces/' + CU_WS_ID + '/chat/channels/' + CU_MKT_CH + '/messages', { method: 'POST', headers: { 'Authorization': CU_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ content: msg, content_format: 'text/md' }) });
    document.getElementById('counselling-form').classList.add('hidden');
    document.getElementById('c-success').classList.remove('hidden');
  } catch (err) {
    console.error('Counselling form error:', err);
    btn.disabled = false;
    document.getElementById('c-btn-text').textContent = 'Request My Free Counselling Session';
    document.getElementById('c-btn-icon').classList.remove('hidden');
    document.getElementById('c-btn-spin').classList.add('hidden');
    alert('Error: ' + err.message);
  }
}
</script>`;
}
