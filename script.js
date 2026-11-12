// FisioCorpo — interacciones mínimas
(function () {
  document.documentElement.classList.add('js');

  // ⚙️ CONFIGURA AQUÍ el número de WhatsApp (52 + 10 dígitos, sin espacios ni +)
  var WHATSAPP_NUMBER = '523328342890';
  var WHATSAPP_MSG = 'Hola Andrea, me gustaría agendar una cita de fisioterapia.';
  var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MSG);
  document.querySelectorAll('.js-wa').forEach(function (a) {
    var msg = a.getAttribute('data-wa-msg') || WHATSAPP_MSG;
    a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  });

  // Formulario de contacto → abre WhatsApp con los datos (GitHub Pages no procesa formularios)
  var form = document.querySelector('.js-wa-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name="bot-field"]').value) return;
      var v = function (n) { return (form.querySelector('[name="' + n + '"]').value || '').trim(); };
      var msg = 'Hola Andrea, me gustaría agendar una cita de fisioterapia.\n\n' +
        'Nombre: ' + v('nombre') + '\n' +
        'Teléfono: ' + v('telefono') + '\n' +
        'Motivo: ' + v('motivo');
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
        nav.classList.remove('is-open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { toggle.click(); toggle.focus(); }
    });
  }

  // Sombra del header al hacer scroll
  var header = document.querySelector('.header');
  var onScroll = function () { header && header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Animación de aparición
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Año en el footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
