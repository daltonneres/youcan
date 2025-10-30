// =======================================================
// You Can Inglês com Gamificação - script.js atualizado
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
  // ===== FAQ interativo =====
  const faqItems = document.querySelectorAll('.faq-item h3');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('active');
    });
  });

  // ===== Animações de entrada =====
  const elements = document.querySelectorAll('section, .curso-card, .depoimento-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));

  // ===== Menu mobile =====
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // =====================================================
  // 🟣 POP-UP DE MATRÍCULAS ABERTAS
  // =====================================================
  const modalBackdrop = document.getElementById('matriculas-modal-backdrop');
  const btnFechar = document.getElementById('matriculas-fechar');
  const btnCloseX = document.getElementById('matriculas-close');

  if (modalBackdrop) {
    // Exibe o pop-up sempre que o site carrega
    modalBackdrop.style.display = 'flex';

    // Função para fechar o pop-up
    const fecharModal = () => {
      modalBackdrop.style.display = 'none';
    };

    // Fechar clicando em botões
    if (btnFechar) btnFechar.addEventListener('click', fecharModal);
    if (btnCloseX) btnCloseX.addEventListener('click', fecharModal);

    // Fechar clicando fora do modal
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) fecharModal();
    });
  }

  // =====================================================
  // 💬 YOUCANTALK - Ajuste de fluxo
  // =====================================================
  const alunoSelect = document.getElementById('aluno-select');
  const extraFields = document.getElementById('extra-fields');
  const alunoMsg = document.getElementById('aluno-msg');

  if (alunoSelect) {
    alunoSelect.addEventListener('change', () => {
      if (alunoSelect.value === 'sim') {
        extraFields.style.display = 'none';
        alunoMsg.style.display = 'block';
      } else if (alunoSelect.value === 'nao') {
        alunoMsg.style.display = 'none';
        extraFields.style.display = 'block';
      } else {
        alunoMsg.style.display = 'none';
        extraFields.style.display = 'none';
      }
    });
  }
});