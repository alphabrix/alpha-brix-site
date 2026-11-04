import { company, heroSlides, products, ppe, fumigation, pillars, commitments, testimonials } from './data/site.js';
import { esc, icon, brandIcon } from './layout.js';
import { pageHead, credStrip, productCard, ctaBand, quoteForm, waLink } from './partials.js';

const pad = (n) => String(n).padStart(2, '0');

const testimonialGrid = () => `
<div class="quotes">
  ${testimonials.map((t, i) => `
  <figure class="quote${i === 0 ? ' quote--lead' : ''}">
    <blockquote><p>${esc(t.quote)}</p></blockquote>
    <figcaption><strong>${esc(t.name)}</strong><span>${esc(t.role)}, ${esc(t.company)}</span></figcaption>
  </figure>`).join('')}
</div>`;

const fumiTypes = () => `
<ol class="types">
  ${fumigation.types.map((t, i) => `<li><span class="types__icon">${icon[t.icon]}</span><div><span class="types__n">${pad(i + 1)}</span><h3>${t.title}</h3><p>${t.note}</p></div></li>`).join('')}
</ol>`;

const specTable = () => `
<table class="spec">
  <caption>Service specification</caption>
  <tbody>${fumigation.spec.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody>
</table>`;

export const pages = [
  {
    id: 'home', path: '/',
    title: 'Alpha Brix Company Limited | Engineered Solutions, Accra',
    description: 'Fumigation and disinfection with EPA approved chemicals, industrial alcohol, agrochemicals, hygiene products, packaging and safety PPE. PPA certified. Accra, Ghana, 24/7.',
    body: (L, a) => `
<section class="hero">
  <div class="container hero__grid">
    <div class="hero__copy">
      <p class="eyebrow">Accra, Ghana &middot; Manufacturing, trading and fumigation</p>
      <h1>Engineered chemical and hygiene solutions.</h1>
      <p class="lede">From fumigation and agrochemicals to industrial alcohol, hygiene products and packaging. Each solution is built around the problem in front of us, with eco-conscious precision.</p>
      <div class="hero__actions">
        <a class="btn btn--accent" href="${L('/products/')}">Explore products ${icon.arrow}</a>
        <a class="btn btn--outline" href="${L('/fumigation/')}">Fumigation services</a>
      </div>
    </div>
    <div class="slider" data-slider aria-roledescription="carousel" aria-label="Product photos">
      ${heroSlides.map((s, i) => `
      <figure class="slide${i === 0 ? ' is-active' : ''}" data-slide aria-hidden="${i !== 0}">
        <img src="${a('img/' + s.img)}" alt="${s.label}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} width="900" height="900">
      </figure>`).join('')}
      <div class="slider__bar">
        <span class="slider__label" data-slide-label>${pad(1)} / ${pad(heroSlides.length)} &middot; ${heroSlides[0].label}</span>
        <div class="slider__dots">
          ${heroSlides.map((s, i) => `<button type="button" data-dot="${i}" aria-label="Show ${s.label}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>
${credStrip()}

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Who we are</p>
      <h2>An innovative company crafting custom solutions.</h2>
      <dl class="stats">
        <div><dt>Support line</dt><dd>24/7</dd></div>
        <div><dt>Fumigation response</dt><dd>&lt;24<small>h</small></dd></div>
        <div><dt>Product lines</dt><dd>${products.length}</dd></div>
        <div><dt>PPE items</dt><dd>${ppe.length}</dd></div>
      </dl>
    </div>
    <div class="prose">
      <p>Alpha Brix Limited uses advanced chemical and non-chemical means to solve problems by crafting custom solutions. We render eco-conscious services where necessary and manufacture smart products using a targeted approach.</p>
      <p>Our business is built on creativity, modern technology and good manufacturing practices and procedures.</p>
      <a class="textlink" href="${L('/about/')}">More about us ${icon.arrow}</a>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Product lines AB-01 to AB-06</p>
        <h2>What we make and supply</h2>
      </div>
      <a class="textlink" href="${L('/products/')}">All products and PPE ${icon.arrow}</a>
    </div>
    <div class="pgrid">${products.map((p) => productCard(p, L, a)).join('')}</div>
  </div>
</section>

<section class="band">
  <div class="container band__grid">
    <div>
      <p class="eyebrow eyebrow--light">Fumigation and disinfection</p>
      <h2>Lasting protection through solid follow-up procedures.</h2>
      <p>Safe, effective treatment for homes, restaurants, offices and industrial sites, using EPA approved chemicals and a targeted approach.</p>
      <a class="btn btn--accent" href="${L('/fumigation/')}">See fumigation services ${icon.arrow}</a>
    </div>
    ${specTable()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Client trust</p>
        <h2>Trusted by local businesses</h2>
      </div>
    </div>
    ${testimonialGrid()}
  </div>
</section>
${ctaBand(L)}`,
  },

  {
    id: 'products', path: '/products/',
    title: 'Products & PPE | Alpha Brix Company Limited',
    description: 'Industrial alcohol, agrochemicals, hygiene products, packaging boxes, Wellington boots and certified safety PPE from Alpha Brix, Accra.',
    body: (L, a) => `
${pageHead({ eyebrow: 'Products', title: 'Manufactured and traded products', intro: 'A range of products, each made and handled under good manufacturing practice. Ask us about grades, volumes and delivery.',
  facts: [[products.length, 'Product lines'], [ppe.length, 'PPE items'], ['EPA', 'Approved chemicals'], ['GMP', 'Manufacturing practice']] }, L)}
<section class="section section--tight">
  <div class="container">
    <nav class="jump" aria-label="Product lines" data-jump>
      <div class="jump__in">
        ${products.map((p) => `<a href="#${p.slug}"><span class="code">${p.code}</span>${esc(p.short || p.title)}</a>`).join('')}
        <a href="#ppe"><span class="code">TR</span>Safety &amp; PPE</a>
      </div>
    </nav>
    <div class="plist">
      ${products.map((p) => `
      <article class="prow" id="${p.slug}">
        <div class="prow__media"><img src="${a('img/' + p.img)}" alt="${esc(p.title)}" loading="lazy" width="800" height="600"></div>
        <div class="prow__body">
          <span class="code">${p.code}</span>
          <h2>${esc(p.title)}</h2>
          <p>${esc(p.summary)}</p>
          <ul class="ticks">${p.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
          <div class="prow__actions">
            ${p.link
              ? `<a class="btn btn--accent" href="${L(p.link)}">See fumigation services ${icon.arrow}</a>`
              : `<a class="btn btn--accent" href="${L('/contact/')}?topic=${encodeURIComponent(p.title)}#quote">Ask for a quote ${icon.arrow}</a>`}
            <a class="btn btn--outline" href="${waLink('Hello Alpha Brix, I would like to ask about ' + p.title + '.')}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
          </div>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="section section--alt" id="ppe">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Trading division</p>
        <h2>Safety &amp; PPE</h2>
      </div>
      <p class="sechead__note">Certified personal protective equipment for industrial, agricultural and field operations. Single items or full crew kits.</p>
    </div>
    <ul class="ppe">
      ${ppe.map((p) => `<li><span class="code">${p.code}</span><span class="ppe__t">${p.title}</span><a href="${L('/contact/')}?topic=${encodeURIComponent('Safety & PPE')}#quote" aria-label="Enquire about ${p.title}">Enquire ${icon.arrow}</a></li>`).join('')}
    </ul>
  </div>
</section>
${ctaBand(L, 'Tell us what you need and how much of it.')}`,
  },

  {
    id: 'fumigation', path: '/fumigation/',
    title: 'Fumigation & Disinfection in Accra | Alpha Brix',
    description: 'Wood, reptile, flying and crawling insect, tree and underground fumigation using EPA approved chemicals. On-the-spot or scheduled. 24/7 support in Accra.',
    body: (L, a) => `
<section class="band band--hero">
  <img class="band__bg" src="${a('img/fumigation.png')}" alt="" aria-hidden="true">
  <div class="container band__grid">
    <div>
      <p class="eyebrow eyebrow--light">Fumigation and disinfection</p>
      <h1>Shield and service, on call around the clock.</h1>
      <p>We use a targeted approach to deliver safe, effective fumigation and disinfection in residential, commercial and industrial spaces, with lasting protection through solid follow-up procedures.</p>
      <ul class="chips"><li>EPA approved chemicals</li><li>Targeted approach</li><li>24/7 response</li></ul>
      <div class="hero__actions">
        <a class="btn btn--accent" href="${L('/contact/')}?topic=${encodeURIComponent('Fumigation service')}#quote">Book a fumigation ${icon.arrow}</a>
        <a class="btn btn--ghost-light" href="tel:${company.phones[0].tel}">${icon.phone} ${company.phones[0].display}</a>
      </div>
    </div>
    ${specTable()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Services</p>
        <h2>Types of fumigation we do</h2>
      </div>
    </div>
    ${fumiTypes()}
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Booking</p>
        <h2>Two ways to book</h2>
      </div>
    </div>
    <div class="booking">
      ${fumigation.booking.map((b, i) => `
      <div class="booking__item">
        <div class="booking__head"><span class="booking__icon">${icon[b.icon]}</span><span class="types__n">Option ${pad(i + 1)}</span></div>
        <h3>${b.title}</h3>
        <p>${b.note}</p>
        <ul class="booking__list">${b.points.map((pt) => `<li>${icon.check}<span>${pt}</span></li>`).join('')}</ul>
        <a class="btn ${i ? 'btn--outline' : 'btn--accent'}" href="${L('/contact/')}?topic=${encodeURIComponent('Fumigation service')}#quote">${b.cta} ${icon.arrow}</a>
      </div>`).join('')}
    </div>
  </div>
</section>
${ctaBand(L, 'Pests today? We can usually be there within 24 hours.')}`,
  },

  {
    id: 'about', path: '/about/',
    title: 'About Alpha Brix | Innovation, Safety & Responsibility',
    description: 'Alpha Brix Company Limited uses advanced chemical and non-chemical means to craft custom solutions. EPA approved chemicals, PPA certified, skilled local experts.',
    body: (L, a) => `
${pageHead({ eyebrow: 'About us', title: 'An innovative company crafting custom solutions.', intro: 'Alpha Brix Limited uses advanced chemical and non-chemical means to solve problems by crafting custom solutions. We render eco-conscious services where necessary and manufacture smart products using a targeted approach.',
  facts: [['24/7', 'Support line'], ['EPA', 'Approved chemicals'], ['PPA', 'Certified supplier'], ['GMP', 'Manufacturing practice']] }, L)}
<section class="section section--tight">
  <div class="container split split--media">
    <img class="split__img" src="${a('img/hero-distillation.png')}" alt="Distillation equipment at an Alpha Brix facility" loading="lazy" width="900" height="900">
    <div class="prose">
      <p>Our business is built on creativity, modern technology and good manufacturing practices and procedures. We work with skilled local experts who understand the conditions people live and work in across Ghana.</p>
      <ol class="pillars">
        ${pillars.map((p, i) => `<li><span class="types__n">${pad(i + 1)}</span><div><h3>${p.title}</h3><p>${p.text}</p></div></li>`).join('')}
      </ol>
    </div>
  </div>
</section>

<section class="section section--alt" id="responsibility">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Corporate responsibility</p>
        <h2>Safety and health commitments</h2>
      </div>
    </div>
    <div class="commit">
      ${commitments.map((c) => `<div class="commit__item"><span class="commit__icon">${icon[c.icon]}</span><h3>${c.title}</h3><p>${c.text}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sechead">
      <div>
        <p class="eyebrow">Client trust</p>
        <h2>What clients say</h2>
      </div>
    </div>
    ${testimonialGrid()}
  </div>
</section>
${ctaBand(L)}`,
  },

  {
    id: 'contact', path: '/contact/',
    title: 'Contact Alpha Brix | 24/7 Phone, WhatsApp & Email',
    description: 'Call +233 559 582 044 or WhatsApp Alpha Brix any time. Email alphabrixgh@gmail.com. Request a quote for fumigation, alcohol, hygiene products and PPE.',
    body: (L) => `
${pageHead({ eyebrow: 'Contact', title: 'Always on. Always ready.', intro: 'Business enquiries, quotes and emergency call-outs by phone, WhatsApp or email, day or night.',
  facts: [['24/7', 'Phone and WhatsApp'], ['&lt;24h', 'Fumigation response'], [company.phones.length, 'Phone lines'], ['Accra', 'Ghana']] }, L)}
<section class="section section--tight">
  <div class="container contact">
    <div class="contact__info">
      <ul class="clist">
        ${company.phones.map((p) => `
        <li>${icon.phone}<div><span class="clist__k">${p.label} phone${p.whatsapp ? ' &middot; WhatsApp' : ''}</span><a href="tel:${p.tel}">${p.display}</a></div></li>`).join('')}
        <li>${icon.mail}<div><span class="clist__k">Email</span><a href="mailto:${company.email}">${company.email}</a></div></li>
        <li>${icon.pin}<div><span class="clist__k">Location</span><span>${company.name}<br>${company.city}</span></div></li>
        <li>${icon.clock}<div><span class="clist__k">Hours</span><span>${company.hours}</span></div></li>
      </ul>
      <div class="live">
        <span class="dot" aria-hidden="true"></span>
        <span>Accra time <strong data-clock>--:--</strong></span>
        <span class="live__state">Support active</span>
      </div>
      <div class="socials">
        <h2 class="socials__title">Follow and message us</h2>
        <ul class="socials__grid">
          ${[{ name: 'WhatsApp', key: 'whatsapp', handle: company.phones[0].display, href: waLink(), cta: 'Chat now' },
             ...company.socials.map((s) => ({ ...s, cta: 'Follow' }))].map((s) => `
          <li>
            <a class="social social--${s.key}" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.name}: ${s.handle}">
              <span class="social__icon">${brandIcon[s.key]}</span>
              <span class="social__text"><strong>${s.name}</strong><span>${s.handle}</span></span>
              <span class="social__cta">${s.cta} ${icon.external}</span>
            </a>
          </li>`).join('')}
        </ul>
      </div>
    </div>
    ${quoteForm()}
  </div>
</section>`,
  },

  {
    id: 'notfound', path: '/404.html', file: '404.html', absolute: true,
    title: 'Page not found | Alpha Brix',
    description: 'This page could not be found.',
    body: (L) => `
${pageHead({ eyebrow: 'Error 404', title: 'We could not find that page.', intro: 'The link may be out of date. Try the home page or get in touch.' })}
<section class="section section--tight"><div class="container hero__actions">
  <a class="btn btn--accent" href="${L('/')}">Go to the home page ${icon.arrow}</a>
  <a class="btn btn--outline" href="${L('/contact/')}">Contact us</a>
</div></section>`,
  },
];
