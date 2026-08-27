
document.addEventListener('DOMContentLoaded', function () {
  const page = document.querySelector('.guides-page');
  if (!page) return;

  // Image-slot contract: show the real image only when it successfully loads;
  // otherwise retain the branded placeholder field.
  page.querySelectorAll('[data-guide-image]').forEach(function (img) {
    const wrap = img.closest('.guide-card-image');
    function reveal() { wrap && wrap.classList.add('has-real-image'); }
    function fallback() { wrap && wrap.classList.remove('has-real-image'); img.removeAttribute('src'); }
    img.addEventListener('load', reveal, {once:true});
    img.addEventListener('error', fallback, {once:true});
    if (img.complete && img.naturalWidth > 0) reveal();
  });

  // Success panels are never visible on first open; they are revealed only after a valid submission.
  page.querySelectorAll('.form-success').forEach(function (success) { success.hidden = true; });

  const modals = Array.from(page.querySelectorAll('.guide-modal'));
  const openers = Array.from(page.querySelectorAll('[data-guide-open]'));
  let lastFocus = null;

  function closeAll() {
    modals.forEach(function (modal) { modal.hidden = true; });
    document.body.classList.remove('guide-modal-open');
    if (lastFocus) { lastFocus.focus(); lastFocus = null; }
  }

  openers.forEach(function (button) {
    button.addEventListener('click', function () {
      const id = button.getAttribute('data-guide-open');
      const modal = document.getElementById(id);
      if (!modal) return;
      lastFocus = button;
      modals.forEach(function (m) { m.hidden = true; });
      modal.hidden = false;
      document.body.classList.add('guide-modal-open');
      const close = modal.querySelector('.guide-modal-close');
      if (close) close.focus();
    });
  });

  page.querySelectorAll('[data-guide-modal-close]').forEach(function (el) {
    el.addEventListener('click', closeAll);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeAll();
  });

  // Present the proposed success state without inventing a backend/mail delivery.
  // The forms remain standard HTML forms so the future mail service can be attached cleanly.
  page.querySelectorAll('.guide-modal form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (form.querySelector('input[name="website"]')?.value) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      const modal = form.closest('.guide-modal');
      const success = modal && modal.querySelector('.form-success');
      if (!success) return;
      form.hidden = true;
      success.hidden = false;
      const heading = success.querySelector('h3');
      if (heading) heading.focus?.();
    });
  });
});
