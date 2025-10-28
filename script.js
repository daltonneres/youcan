document.addEventListener('DOMContentLoaded', () => {
  // FAQ interativo
  const faqItems = document.querySelectorAll('.faq-item h3');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('active');
    });
  });

  // Animações de entrada
  const elements = document.querySelectorAll('section, .curso-card, .depoimento-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
