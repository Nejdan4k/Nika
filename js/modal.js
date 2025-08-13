function initModal() {
  const openBtn  = document.querySelector('[data-modal-open]');
  const closeBtn = document.querySelector('[data-modal-close]');
  const overlay  = document.querySelector('[data-modal]');
  if (!openBtn || !closeBtn || !overlay) return;

  const open  = () => { overlay.classList.add('is-open'); document.body.classList.add('menu-open'); };
  const close = () => { overlay.classList.remove('is-open'); document.body.classList.remove('menu-open'); };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}
document.addEventListener('partials:loaded', initModal);
document.addEventListener('DOMContentLoaded', initModal);
