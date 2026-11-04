import { company, quoteTopics } from './data/site.js';
import { esc, icon, waLink } from './layout.js';

export const pageHead = ({ eyebrow, title, intro }) => `
<section class="pagehead">
  <div class="container">
    <p class="eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    ${intro ? `<p class="lede">${intro}</p>` : ''}
  </div>
</section>`;

export const credStrip = () => `
<section class="creds" aria-label="Certifications and support">
  <div class="container creds__in">
    ${company.credentials.map((c) => `<div class="cred"><strong>${c.code}</strong><span>${c.text}</span></div>`).join('')}
  </div>
</section>`;

export const productCard = (p, L, a) => `
<article class="pcard" id="${p.slug}">
  <div class="pcard__media">
    <img src="${a('img/' + p.img)}" alt="${esc(p.title)}" loading="lazy" width="640" height="480">
    <span class="code">${p.code}</span>
  </div>
  <div class="pcard__body">
    <h3>${esc(p.title)}</h3>
    <ul class="ticks">${p.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <a class="textlink" href="${p.link ? L(p.link) : L('/contact/') + '?topic=' + encodeURIComponent(p.title) + '#quote'}">
      ${p.link ? 'See services' : 'Ask for a quote'} ${icon.arrow}
    </a>
  </div>
</article>`;

export const ctaBand = (L, heading = 'Need fumigation today, or a supply quote this week?') => `
<section class="cta">
  <div class="container cta__in">
    <div>
      <h2>${heading}</h2>
      <p>Call, WhatsApp or email any time. We respond to fumigation requests within 24 hours.</p>
    </div>
    <div class="cta__actions">
      <a class="btn btn--accent" href="${L('/contact/')}#quote">Request a quote ${icon.arrow}</a>
      <a class="btn btn--ghost-light" href="tel:${company.phones[0].tel}">${icon.phone} ${company.phones[0].display}</a>
    </div>
  </div>
</section>`;

export const quoteForm = () => `
<form class="qform" id="quote" novalidate data-wa="${company.whatsapp}" data-email="${company.email}">
  <h2>Request a quote</h2>
  <p class="qform__note">Fill in the form and choose how to send it. It opens WhatsApp or your email app with the message ready.</p>
  <div class="qform__grid">
    <div class="field">
      <label for="q-name">Your name</label>
      <input id="q-name" name="name" autocomplete="name" required>
    </div>
    <div class="field">
      <label for="q-company">Business <span class="opt">(optional)</span></label>
      <input id="q-company" name="company" autocomplete="organization">
    </div>
    <div class="field">
      <label for="q-topic">What do you need?</label>
      <select id="q-topic" name="topic">
        ${quoteTopics.map((t) => `<option>${esc(t)}</option>`).join('')}
      </select>
    </div>
    <div class="field">
      <label for="q-location">Location</label>
      <input id="q-location" name="location" placeholder="e.g. Dzorwulu, Accra">
    </div>
    <div class="field field--full">
      <label for="q-details">Details</label>
      <textarea id="q-details" name="details" rows="4" placeholder="Quantities, grade, size of the space, preferred date"></textarea>
    </div>
  </div>
  <p class="qform__error" id="q-error" role="alert" hidden>Add your name so we know who to reply to.</p>
  <div class="qform__actions">
    <button class="btn btn--accent" type="submit" id="q-wa">${icon.whatsapp} Send on WhatsApp</button>
    <button class="btn btn--outline" type="button" id="q-mail">${icon.mail} Send by email</button>
  </div>
</form>`;

export { waLink };
