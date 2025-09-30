document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.querySelector('.hero-section-button');

  if (orderBtn) {
    orderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://m.me/61571717985396', '_blank');
    });
  }
});
