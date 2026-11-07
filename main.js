// Enclosed Frames — small, dependency-free interactions.
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Viewfinder timecode (HH:MM:SS:FF at 24 fps), running from page load.
  var tc = document.getElementById('tc'), t0 = performance.now();
  var pad = function (n) { return String(n).padStart(2, '0'); };
  function tick(now) {
    var f = Math.max(0, Math.floor((now - t0) / (1000 / 24))), s = Math.floor(f / 24);
    tc.textContent = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60) + ':' + pad(f % 24);
    if (!reduce) requestAnimationFrame(tick);
  }
  if (tc) requestAnimationFrame(tick);

  // Sections ease in as they enter the viewport.
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  // Brief form: preview only until the studio inbox is connected at launch.
  var form = document.getElementById('briefForm'), note = document.getElementById('briefNote');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var missing = ['brand', 'name', 'email'].filter(function (k) { return !form.elements[k].value.trim(); });
    note.textContent = missing.length ? 'Add your ' + missing.join(', ') + ' so we can reply.'
      : 'Preview — not sent yet. The form connects to the studio inbox at launch.';
  });

  // Footer wordmark: scale to fill the line exactly (no clipping at any width).
  var wm = document.querySelector('.wordmark');
  function fit() { if (!wm) return; wm.style.fontSize = ''; var fs = parseFloat(getComputedStyle(wm).fontSize);
    if (wm.scrollWidth > 0) wm.style.fontSize = Math.floor(fs * wm.clientWidth / wm.scrollWidth * 0.99) + 'px'; }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(fit); addEventListener('resize', fit);

  var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
