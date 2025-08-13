async function includePartials() {
  const hosts = document.querySelectorAll('[data-include]');
  await Promise.all([...hosts].map(async host => {
    const url = host.getAttribute('data-include');
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error(res.status);
      const html = await res.text();
      host.outerHTML = html; // заміна контейнера на вміст
    } catch (err) {
      console.error('Include failed:', url, err);
    }
  }));
  document.dispatchEvent(new CustomEvent('partials:loaded'));
}
document.addEventListener('DOMContentLoaded', includePartials);
