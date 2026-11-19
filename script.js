(function () {
  var root = document.documentElement;

  function get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function applyLang(l) {
    root.lang = l;
    root.dir = l === 'ar' ? 'rtl' : 'ltr';
    set('lang', l);
    var b = document.getElementById('langBtn');
    if (b) b.textContent = l === 'ar' ? 'EN' : 'عربي';
  }

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    set('theme', t);
    var b = document.getElementById('themeBtn');
    if (b) b.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // apply early to avoid a flash
  applyLang(get('lang', 'ar'));
  applyTheme(get('theme', 'dark'));

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(root.lang);
    applyTheme(root.getAttribute('data-theme'));

    document.getElementById('langBtn').addEventListener('click', function () {
      applyLang(root.lang === 'ar' ? 'en' : 'ar');
    });
    document.getElementById('themeBtn').addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
