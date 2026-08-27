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
        alert('This form is not connected yet. Please call 07915 458467 or email grenergyscotland@gmail.com.');
      }
    });
  }
})();
