// MÓDULO 5 — TEMA 39
// Mantiene intactos el menú principal y los temas anteriores.

function addTopic39Card() {
  const moduleView = document.getElementById('module-view');
  if (!moduleView || moduleView.hidden) return;

  const content = moduleView.querySelector('.module-topics');
  if (!content) return;
  if (content.querySelector('[data-topic="39"]')) return;

  const card = document.createElement('button');
  card.className = 'topic-card';
  card.type = 'button';
  card.dataset.topic = '39';
  card.innerHTML = `
    <span class="module-number">TEMA 39</span>
    <h3>TEMA 39. EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL MASCULINO</h3>
    <span class="module-action">Abrir material →</span>`;

  card.addEventListener('click', () => {
    if (typeof renderTopic39 === 'function') renderTopic39();
  });

  content.appendChild(card);
}

function ensureTopic39Card() {
  const moduleView = document.getElementById('module-view');
  if (!moduleView || moduleView.hidden) return;
  const title = document.getElementById('module-view-title');
  if (title && title.textContent.trim() === 'Ecografía.') addTopic39Card();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureTopic39Card);
} else {
  ensureTopic39Card();
}

const topic39Observer = new MutationObserver(ensureTopic39Card);
topic39Observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
