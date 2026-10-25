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

/* Recent work: open a job's full story and large photo in the dialog */
(function () {
  var dlg = document.getElementById('job-dialog');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img'), h = dlg.querySelector('h3'), p = dlg.querySelector('.job-dialog-text p');
  var jobs = document.querySelectorAll('.job');
  for (var i = 0; i < jobs.length; i++) jobs[i].addEventListener('click', function () {
    img.src = this.getAttribute('data-img'); img.alt = this.getAttribute('data-alt');
    h.textContent = this.querySelector('.job-text b').textContent;
    p.innerHTML = this.querySelector('.job-full').innerHTML;
    dlg.showModal();
  });
  dlg.querySelector('.job-close').addEventListener('click', function () { dlg.close(); });
  // a click on the dark backdrop (outside the box) closes it too
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
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

/* Old links to a services.html#section (search results, bookmarks) go to that
   service's own page - the sections moved out on 25 Oct 2026 */
(function () {
  var to = { boilers: 'gas-boilers.html', cylinders: 'unvented-cylinders.html', 'heat-pumps': 'heat-pumps.html',
    radiators: 'radiators.html', cookers: 'cookers-hobs-fires.html', landlord: 'landlords.html' };
  var h = location.hash.slice(1);
  if (/\/services\.html$/.test(location.pathname) && to[h]) location.replace(to[h]);
})();
