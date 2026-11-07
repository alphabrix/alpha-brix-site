import { company, nav } from './data/site.js';

export const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const icon = {
  arrow: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  clock: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  sun: '<svg class="i i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg class="i i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>',
  menu: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  shield: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>',
  whatsapp: '<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5v-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>',
  leaf: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16Z"/><path d="M5 21 13 13"/></svg>',
  badge: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m9 14-2 7 5-3 5 3-2-7"/><path d="m9.5 9 1.8 1.8L14.8 7.5"/></svg>',
  headset: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M19 20a4 4 0 0 1-4 3h-2"/></svg>',
  factory: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V10l6 4V10l6 4V4h6v17Z"/><path d="M7 18h2M12 18h2M17 18h1"/></svg>',
  wood: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="7" cy="12" rx="3.5" ry="6"/><ellipse cx="7" cy="12" rx="1.2" ry="2.5"/><path d="M7 6h11a3.5 6 0 0 1 0 12H7"/></svg>',
  reptile: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18c2 2 5 2 7 0s1-5 3-6 5 1 6-1-1-5-4-5h-1"/><path d="M14 6l-2-1M14 6l-2 1"/><circle cx="16.5" cy="5.8" r=".5"/></svg>',
  fly: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="15" rx="2.8" ry="5"/><path d="M12 10c-2-4-7-5-8-2s3 5 5.5 5M12 10c2-4 7-5 8-2s-3 5-5.5 5"/><path d="m10.5 7-1-2.5M13.5 7l1-2.5"/></svg>',
  bug: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="14" rx="4" ry="6"/><path d="M12 8v12M8 11H4M8 15H3M8.5 18l-3 2.5M16 11h4M16 15h5M15.5 18l3 2.5M10 8.5 8 5M14 8.5l2-3.5"/></svg>',
  tree: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22v-6M9 19l3-3 3 3"/><path d="M12 16c-5 0-7.5-3-6.5-6 .3-2.5 2.5-4 4.5-4 1-3 5-3 6 0 2.2 0 4 2 3.5 5-.5 3-3 5-7.5 5Z"/></svg>',
  tunnel: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20v-8a9 9 0 0 1 18 0v8M7 20v-8a5 5 0 0 1 10 0v8M2 20h20"/></svg>',
  hardhat: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 18h20M4 18v-3a8 8 0 0 1 16 0v3"/><path d="M10 7.5V5h4v2.5M9 11V8M15 11V8"/></svg>',
  bolt: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>',
  calendar: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2"/></svg>',
  check: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>',
  external: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
};

// Brand marks (filled, 24x24)
export const brandIcon = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.57-5.71-.01-.33-.02-.66-.01-.99.13-2.15 1.32-4.2 3.04-5.39 1.61-1.11 3.71-1.43 5.58-.91.02 1.47-.01 2.94.01 4.41-.91-.3-1.96-.21-2.79.31-1.01.59-1.66 1.74-1.66 2.91 0 1.04.55 2.06 1.42 2.62.86.59 2.02.59 2.93.18.71-.31 1.26-.97 1.55-1.7.19-.46.16-.97.16-1.46 0-2.92 0-5.84-.01-8.77.01-1.43 0-2.87 0-4.31z"/></svg>',
  snapchat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="currentColor" stroke-width=".6" stroke-linejoin="round" d="M12 2c2.6 0 4.9 1.5 5.7 4 .4 1.3.3 3 .2 4.4.5.2 1 .1 1.5-.1.5-.2 1.1.1 1.1.6 0 .5-.6.8-1.3 1-.5.2-1.2.4-1.2.9.4 1.6 1.7 3.1 3.3 3.6.5.2.5.8 0 1-.8.4-1.8.4-2 .9-.1.4-.1.9-.6 1-.6.1-1.4-.2-2.3 0-1.1.3-1.9 1.7-4.4 1.7s-3.3-1.4-4.4-1.7c-.9-.2-1.7.1-2.3 0-.5-.1-.5-.6-.6-1-.2-.5-1.2-.5-2-.9-.5-.2-.5-.8 0-1 1.6-.5 2.9-2 3.3-3.6 0-.5-.7-.7-1.2-.9-.7-.2-1.3-.5-1.3-1 0-.5.6-.8 1.1-.6.5.2 1 .3 1.5.1-.1-1.4-.2-3.1.2-4.4C7.1 3.5 9.4 2 12 2z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.976-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
};

// Relative link helper so the site works from any folder or sub-path.
export const linker = (depth) => (href) => {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  const up = depth ? '../'.repeat(depth) : './';
  const clean = href.replace(/^\//, '');
  return up + clean;
};

export const waLink = (text) =>
  `https://wa.me/${company.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;

export function layout({ page, depth, body }) {
  // 404 pages are served from any URL depth, so they use root-absolute links.
  const L = page.absolute ? (h) => h : linker(depth);
  const a = (p) => L('/assets/' + p);
  const current = page.path;
  const canonical = company.url + page.path;

  const navLinks = nav.map((n) =>
    `<a href="${L(n.href)}"${current === n.href ? ' aria-current="page"' : ''}>${n.label}</a>`).join('');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    email: company.email,
    telephone: company.phones[0].tel,
    address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
    openingHours: 'Mo-Su 00:00-23:59',
    url: company.url,
    logo: `${company.url}/assets/img/logo.jpg`,
    sameAs: company.socials.map((s) => s.href),
  };

  return `<!DOCTYPE html>
<html lang="en-GH">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${company.url}/assets/img/logo-full.jpg">
<meta name="theme-color" content="#002D62">
<link rel="icon" href="${a('img/favicon.png')}" type="image/png">
<link rel="apple-touch-icon" href="${a('img/apple-touch-icon.png')}">
<script>
  (function () {
    try { var t = localStorage.getItem('ab-theme'); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) {}
  })();
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300..800&family=Geist+Mono:wght@400..600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${a('css/main.css')}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body class="page-${page.id}">
<a class="skip" href="#main">Skip to content</a>

<div class="statusbar">
  <div class="container statusbar__in">
    <span class="statusbar__live"><span class="dot" aria-hidden="true"></span>Support line open 24/7</span>
    <span class="statusbar__links">
      <a href="tel:${company.phones[0].tel}">${company.phones[0].display}</a>
      <a href="mailto:${company.email}">${company.email}</a>
    </span>
  </div>
</div>

<header class="header" id="header">
  <div class="container header__in">
    <a class="brand" href="${L('/')}" aria-label="${company.short} home">
      <img src="${a('img/logo-emblem.png')}" alt="" width="44" height="44">
      <span class="brand__text"><strong>ALPHA BRIX</strong><small>Company Limited</small></span>
    </a>
    <nav class="nav" id="nav" aria-label="Main">
      ${navLinks}
    </nav>
    <div class="header__actions">
      <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to dark theme">${icon.sun}${icon.moon}</button>
      <a class="btn btn--accent btn--sm header__cta" href="${L('/contact/')}#quote">Request a quote</a>
      <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open menu">${icon.menu}</button>
    </div>
  </div>
</header>

<main id="main">
${body(L, a)}
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      <a class="brand brand--footer" href="${L('/')}">
        <img src="${a('img/logo-emblem.png')}" alt="" width="44" height="44">
        <span class="brand__text"><strong>ALPHA BRIX</strong><small>Company Limited</small></span>
      </a>
      <p>Chemical, hygiene and fumigation solutions from ${company.city}. EPA approved chemicals, PPA certified.</p>
    </div>
    <div>
      <h2 class="footer__h">Site</h2>
      <ul class="footer__list">
        <li><a href="${L('/')}">Home</a></li>
        ${nav.map((n) => `<li><a href="${L(n.href)}">${n.label}</a></li>`).join('')}
      </ul>
    </div>
    <div>
      <h2 class="footer__h">Contact</h2>
      <ul class="footer__list">
        ${company.phones.map((p) => `<li><a href="tel:${p.tel}">${p.display}</a></li>`).join('')}
        <li><a href="mailto:${company.email}">${company.email}</a></li>
        <li>${company.hours}</li>
      </ul>
    </div>
    <div>
      <h2 class="footer__h">Follow</h2>
      <ul class="footer__list">
        ${company.socials.map((s) => `<li><a class="footer__social" href="${s.href}" target="_blank" rel="noopener">${brandIcon[s.key]}${s.name}</a></li>`).join('')}
        <li><a class="footer__social" href="${waLink()}" target="_blank" rel="noopener">${brandIcon.whatsapp}WhatsApp</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer__base">
    <span>&copy; <span data-year>${new Date().getFullYear()}</span> ${company.name}</span>
    <span>${company.credentials.slice(0, 3).map((c) => c.code).join(' &middot; ')}</span>
  </div>
</footer>

<a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat with ${company.short} on WhatsApp">${icon.whatsapp}</a>
<script src="${a('js/main.js')}" defer></script>
</body>
</html>
`;
}
