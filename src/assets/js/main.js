(function () {
  var root = document.documentElement;

  /* ---- Opened straight from a folder (file://): there is no server to turn
     "products/" into "products/index.html", so add it to internal links. ---- */
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (/^(https?:|mailto:|tel:|#)/.test(href)) return;
      var url = new URL(href, location.href);
      if (url.pathname.slice(-1) === '/') {
        url.pathname += 'index.html';
        a.href = url.href;
      }
    });
  }
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Theme: follows the system until the visitor picks one ---- */
  var toggle = document.getElementById('themeToggle');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() {
    return root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');
  }
  function syncToggle() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    toggle.title = 'Switch to ' + next + ' theme';
  }
  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('ab-theme', next); } catch (e) {}
    syncToggle();
  });
  systemDark.addEventListener('change', syncToggle);
  syncToggle();

  /* ---- Header shadow ---- */
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---- Hero slider ---- */
  var slider = document.querySelector('[data-slider]');
  if (slider) {
    var slides = slider.querySelectorAll('[data-slide]');
    var dots = slider.querySelectorAll('[data-dot]');
    var label = slider.querySelector('[data-slide-label]');
    var index = 0, timer = null;
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var show = function (i) {
      index = i;
      slides.forEach(function (s, k) {
        s.classList.toggle('is-active', k === i);
        s.setAttribute('aria-hidden', String(k !== i));
      });
      dots.forEach(function (d, k) {
        if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
      label.textContent = pad(i + 1) + ' / ' + pad(slides.length) + ' · ' + slides[i].querySelector('img').alt;
    };
    var start = function () {
      if (reduceMotion) return;
      clearInterval(timer);
      timer = setInterval(function () { show((index + 1) % slides.length); }, 4500);
    };
    dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', start);
    start();
  }

  /* ---- Products tab bar: highlight the section in view ---- */
  var jump = document.querySelector('[data-jump]');
  if (jump && 'IntersectionObserver' in window) {
    var links = jump.querySelectorAll('a');
    var byId = {};
    links.forEach(function (l) { byId[l.getAttribute('href').slice(1)] = l; });
    var setActive = function (id) {
      links.forEach(function (l) { l.classList.remove('is-active'); });
      var link = byId[id];
      if (!link) return;
      link.classList.add('is-active');
      var bar = link.parentElement;
      var left = link.offsetLeft - bar.clientWidth / 2 + link.clientWidth / 2;
      bar.scrollTo({ left: left, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* ---- Accra clock ---- */
  var clock = document.querySelector('[data-clock]');
  if (clock) {
    var tick = function () {
      clock.textContent = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Accra', hour: '2-digit', minute: '2-digit', second: '2-digit',
      });
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---- Quote form: WhatsApp or email ---- */
  var form = document.getElementById('quote');
  if (form) {
    var topic = form.querySelector('#q-topic');
    var wanted = new URLSearchParams(location.search).get('topic');
    if (wanted) {
      for (var i = 0; i < topic.options.length; i++) {
        var t = topic.options[i].text.toLowerCase();
        var w = wanted.toLowerCase();
        if (t === w || t.indexOf(w) === 0 || w.indexOf(t) === 0) { topic.selectedIndex = i; break; }
      }
    }
    var name = form.querySelector('#q-name');
    var contact = form.querySelector('#q-contact');
    var error = form.querySelector('#q-error');
    var status = form.querySelector('#q-status');
    var mailBtn = form.querySelector('#q-mail');
    var fail = function (field, msg) {
      error.textContent = msg;
      error.hidden = false;
      field.setAttribute('aria-invalid', 'true');
      field.focus();
      return null;
    };
    var clear = function () {
      error.hidden = true;
      name.removeAttribute('aria-invalid');
      contact.removeAttribute('aria-invalid');
    };
    var say = function (msg, state) {
      status.textContent = msg;
      status.dataset.state = state || '';
      status.hidden = !msg;
    };
    // needContact: an emailed request must say how to reply; WhatsApp already carries the number.
    var build = function (needContact) {
      var d = new FormData(form);
      var get = function (k) { return String(d.get(k) || '').trim(); };
      clear();
      if (!get('name')) return fail(name, 'Add your name so we know who to reply to.');
      if (needContact && !get('contact')) return fail(contact, 'Add a phone number or email so we can reply to you.');
      var lines = ['Hello Alpha Brix, I would like a quote.', '', 'Name: ' + get('name')];
      if (get('contact')) lines.push('Contact: ' + get('contact'));
      if (get('company')) lines.push('Business: ' + get('company'));
      lines.push('Need: ' + get('topic'));
      if (get('location')) lines.push('Location: ' + get('location'));
      if (get('details')) lines.push('', get('details'));
      return { text: lines.join('\n'), subject: 'Quote request: ' + get('topic'), get: get, bot: d.get('botcheck') };
    };
    var openMailApp = function (m) {
      location.href = 'mailto:' + form.dataset.email + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.text);
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = build(false);
      if (m) window.open('https://wa.me/' + form.dataset.wa + '?text=' + encodeURIComponent(m.text), '_blank', 'noopener');
    });
    mailBtn.addEventListener('click', function () {
      var key = form.dataset.key;
      var m = build(!!key);
      if (!m) return;
      if (!key) return openMailApp(m);
      if (m.bot) return say('Thanks, your request has been sent.', 'ok');
      var get = m.get;
      var payload = {
        access_key: key,
        subject: m.subject,
        from_name: get('name') + ' via alpha-brix.com',
        name: get('name'),
        contact: get('contact'),
        business: get('company'),
        need: get('topic'),
        location: get('location'),
        details: get('details'),
      };
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('contact'))) payload.replyto = get('contact');
      mailBtn.disabled = true;
      say('Sending…');
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (!res.success) throw new Error(res.message || 'Failed');
          form.reset();
          say('Thanks, your request has been sent. We will get back to you shortly.', 'ok');
        })
        .catch(function () {
          say('');
          error.textContent = 'We could not send that just now. Try WhatsApp, or call ' + (form.dataset.phone || 'us') + '.';
          error.hidden = false;
        })
        .then(function () { mailBtn.disabled = false; });
    });
    name.addEventListener('input', function () { if (name.value.trim()) clear(); });
    contact.addEventListener('input', function () { if (contact.value.trim()) clear(); });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
