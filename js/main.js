/* =========================================================================
   Confiance Restaurante — comportamentos do site
   Sem bibliotecas. Funciona mesmo se algum recurso não for suportado.
   ========================================================================= */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobileMenuQuery = window.matchMedia('(max-width: 960px)');

  /* ---------- Menu mobile ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  function isMenuOpen() {
    return !!toggle && toggle.getAttribute('aria-expanded') === 'true';
  }

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(!isMenuOpen());
    });

    // Fecha ao escolher um link da gaveta
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    // Escape fecha o menu e devolve o foco ao botão
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isMenuOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Clique fora da gaveta fecha o menu
    document.addEventListener('click', function (event) {
      if (isMenuOpen() && !nav.contains(event.target) && !toggle.contains(event.target)) {
        setMenu(false);
      }
    });

    // Ao voltar para telas grandes, o menu fecha sozinho
    var handleQueryChange = function () {
      if (!mobileMenuQuery.matches) setMenu(false);
    };
    if (mobileMenuQuery.addEventListener) {
      mobileMenuQuery.addEventListener('change', handleQueryChange);
    } else {
      mobileMenuQuery.addListener(handleQueryChange);
    }
  }

  /* ---------- Sombra do cabeçalho ao rolar ---------- */
  if (header) {
    var updateHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* ---------- Seção ativa no menu ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.main-nav a[href^="#"]')
  );

  if ('IntersectionObserver' in window && navLinks.length) {
    var linkBySection = {};
    navLinks.forEach(function (link) {
      linkBySection[link.getAttribute('href').slice(1)] = link;
    });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.removeAttribute('aria-current');
        });
        var active = linkBySection[entry.target.id];
        if (active) active.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(linkBySection).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ---------- Entrada suave dos blocos ---------- */
  var revealItems = document.querySelectorAll('.reveal');

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var reveal = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (item) {
      reveal.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  /* ---------- Ano automático no rodapé ---------- */
  var year = document.getElementById('ano');
  if (year) year.textContent = String(new Date().getFullYear());
})();
