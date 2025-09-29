document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.querySelector('[data-modal-open]');

  if (orderBtn) {
    orderBtn.addEventListener('click', (e) => {
      e.preventDefault(); // блокуємо стандартну дію
      window.open('https://m.me/61571717985396', '_blank'); // твоє посилання на Messenger
    });
  }
});
