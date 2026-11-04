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
    var error = form.querySelector('#q-error');
    var build = function () {
      var d = new FormData(form);
      var who = String(d.get('name') || '').trim();
      if (!who) {
        error.hidden = false;
        name.setAttribute('aria-invalid', 'true');
        name.focus();
        return null;
      }
      error.hidden = true;
      name.removeAttribute('aria-invalid');
      var lines = ['Hello Alpha Brix, I would like a quote.', '', 'Name: ' + who];
      var get = function (k) { return String(d.get(k) || '').trim(); };
      if (get('company')) lines.push('Business: ' + get('company'));
      lines.push('Need: ' + get('topic'));
      if (get('location')) lines.push('Location: ' + get('location'));
      if (get('details')) lines.push('', get('details'));
      return { text: lines.join('\n'), subject: 'Quote request: ' + get('topic') };
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = build();
      if (m) window.open('https://wa.me/' + form.dataset.wa + '?text=' + encodeURIComponent(m.text), '_blank', 'noopener');
    });
    form.querySelector('#q-mail').addEventListener('click', function () {
      var m = build();
      if (m) location.href = 'mailto:' + form.dataset.email + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.text);
    });
    name.addEventListener('input', function () { if (name.value.trim()) { error.hidden = true; name.removeAttribute('aria-invalid'); } });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
