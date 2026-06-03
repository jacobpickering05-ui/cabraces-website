/* ============================================
   MAIN.JS — All Interactions
   California Braces
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── STICKY NAV ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 60);
  });

  /* ── MOBILE MENU ── */
  const ham      = document.getElementById('ham');
  const navLinks = document.getElementById('navlinks');

  ham.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── SCROLL REVEAL ── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.rv').forEach(el => observer.observe(el));

  /* ── FORM SUBMIT ── */
  const formBtn = document.getElementById('form-submit');
  if (formBtn) {
    formBtn.addEventListener('click', () => {
      const name  = document.getElementById('f-fname').value.trim();
      const phone = document.getElementById('f-phone').value.trim();

      if (!name || !phone) {
        formBtn.style.background = '#7A2020';
        formBtn.textContent = 'Please enter your name and phone number.';
        setTimeout(() => {
          formBtn.style.background = '';
          formBtn.textContent = 'Request My Free Consultation →';
        }, 3000);
        return;
      }

      formBtn.textContent = '✓ Received — we\'ll be in touch within 1 business day!';
      formBtn.style.background = '#2A5C2E';
      formBtn.disabled = true;
    });
  }

});
