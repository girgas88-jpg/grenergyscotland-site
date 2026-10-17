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

/* Recent work strip: arrow buttons scroll one photo at a time */
(function () {
  var strip = document.getElementById('work-strip');
  if (!strip) return;
  var nav = strip.parentNode.querySelectorAll('.work-nav button');
  for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function () {
      var fig = strip.querySelector('figure');
      var step = fig ? fig.getBoundingClientRect().width + 16 : 300;
      strip.scrollBy({ left: step * Number(this.getAttribute('data-dir')), behavior: 'smooth' });
    });
  }
})();

/* Before/after slider: the range input sets --pos, which clips the after image */
(function () {
  var boxes = document.querySelectorAll('.ba');
  for (var i = 0; i < boxes.length; i++) (function (box) {
    var r = box.querySelector('input[type=range]');
    if (!r) return;
    var set = function () { box.style.setProperty('--pos', r.value + '%'); };
    r.addEventListener('input', set); set();
  })(boxes[i]);
})();
