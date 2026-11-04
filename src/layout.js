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
<meta property="og:image" content="${company.url}/assets/img/hero-distillation.png">
<meta name="theme-color" content="#002D62">
<link rel="icon" href="${a('img/emblem.svg')}" type="image/svg+xml">
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
      <img src="${a('img/emblem.svg')}" alt="" width="40" height="40">
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
        <img src="${a('img/emblem.svg')}" alt="" width="40" height="40">
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
        ${company.socials.map((s) => `<li><a href="${s.href}" target="_blank" rel="noopener">${s.name}</a></li>`).join('')}
        <li><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp</a></li>
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
