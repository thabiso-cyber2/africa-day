(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    }));
  }

  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const currentFile = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  document.querySelectorAll('.primary-nav a').forEach(link => {
    const target = (link.getAttribute('href') || '').split('/').pop().replace(/\.html$/, '');
    if (target === currentFile) link.setAttribute('aria-current', 'page');
  });

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const dialog = document.querySelector('.lightbox');
  if (dialog) {
    const image = dialog.querySelector('img');
    const caption = dialog.querySelector('figcaption span');
    const close = dialog.querySelector('.lightbox-close');
    document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
      image.src = item.dataset.full;
      image.alt = item.querySelector('img')?.alt || '';
      caption.textContent = item.dataset.caption || '';
      dialog.showModal();
    }));
    close?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => image.removeAttribute('src'));
  }

  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Africa Day enquiry: ${data.get('interest')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nArea of interest: ${data.get('interest')}\n\nMessage:\n${data.get('message')}`;
    const mailto = `mailto:Vuyimdana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Opening your email application with the enquiry details.';
    window.location.href = mailto;
  });
})();
