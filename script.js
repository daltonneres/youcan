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

  // Envio formulário Aula Experimental para WhatsApp
  const formAula = document.getElementById('form-aula');
  formAula.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = formAula.nome.value;
    const idade = formAula.idade.value;
    const faixa = formAula.faixa.value;
    const cidade = formAula.cidade.value;

    const mensagem = `Olá, quero agendar minha aula experimental!\nNome: ${nome}\nIdade: ${idade}\nFaixa etária: ${faixa}\nCidade: ${cidade}`;

    const numeroWhatsApp = "5546999253296"; // seu número
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});
