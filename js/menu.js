function initMenu() {
  const modal  = document.querySelector('[data-menu]');        // overlay
  const open   = document.querySelector('[data-menu-open]');   // burger
  const close  = document.querySelector('[data-menu-close]');  // X
  if (!modal || !open || !close) return;

  const openMenu = () => { modal.classList.add('is-open'); document.body.classList.add('menu-open'); };
  const closeMenu = () => { modal.classList.remove('is-open'); document.body.classList.remove('menu-open'); };

  open.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // клік по якірним лінкам у моб-меню — закрити
  modal.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', closeMenu));
}
document.addEventListener('partials:loaded', initMenu);
document.addEventListener('DOMContentLoaded', initMenu);
