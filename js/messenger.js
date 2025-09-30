document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.querySelector('.hero-section-button');

  if (orderBtn) {
    orderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://m.me/61571717985396', '_blank');
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const msgLinks = document.querySelectorAll('[data-mmsg]');
  const base = 'https://m.me/61571717985396';
  const text = `Hi Veronika! I want to book a consultation. Page: ${document.title} · ${location.href}`;
  const url = `${base}?text=${encodeURIComponent(text)}`;
  msgLinks.forEach(a => a.setAttribute('href', url));
});
