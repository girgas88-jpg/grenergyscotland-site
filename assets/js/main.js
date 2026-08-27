// GR Energy Scotland — minimal progressive enhancement, no dependencies.
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu when a link is followed or Escape is pressed.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Guard against the form being live before the Web3Forms key is set.
  var form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      var key = form.querySelector('input[name="access_key"]');
      if (key && key.value.indexOf('REPLACE_WITH') === 0) {
        e.preventDefault();
        alert('This form is not connected yet. Please email grenergyscotland@gmail.com instead.');
      }
    });
  }
})();

// Ghost drum: vertical scroll drives horizontal, cylindrical rotation.
(function () {
  'use strict';
  var drum = document.getElementById('drum');
  if (!drum) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var band = drum.closest('.ghost-band');
  var ghosts = drum.querySelectorAll('.ghost');
  var ticking = false;

  function layout() {
    var vw = document.documentElement.clientWidth;
    var travel = Math.max(0, drum.scrollWidth - vw);
    var rect = band.getBoundingClientRect();
    var vh = window.innerHeight;
    // progress: 0 when band enters viewport bottom, 1 when it leaves the top
    var p = (vh - rect.top) / (vh + rect.height);
    p = Math.min(1, Math.max(0, p));
    var x = -travel * p;
    drum.style.transform = 'translateX(' + x + 'px)';
    // cylindrical drum: rotate each figure by its distance from viewport centre
    var centre = vw / 2;
    for (var i = 0; i < ghosts.length; i++) {
      var g = ghosts[i].getBoundingClientRect();
      var mid = g.left + g.width / 2;
      var d = (mid - centre) / centre;        // -1 .. 1 across the screen
      d = Math.max(-1.4, Math.min(1.4, d));
      var ry = d * -38;                        // degrees around the cylinder
      var tz = -Math.abs(d) * 90;              // recede as they wrap round
      ghosts[i].style.transform = 'rotateY(' + ry + 'deg) translateZ(' + tz + 'px)';
      var svg = ghosts[i].querySelector('svg');
      if (svg) svg.style.opacity = Math.max(0.18, 0.55 - Math.abs(d) * 0.28); // art fades round the drum, captions stay
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(layout); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  layout();
})();
