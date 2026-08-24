function renderModuleTopics(moduleNumber) {
  const moduleTopics = moduleNumber === 5 ? [38, 39] : (moduleNumber === 1 ? [1, 2, 3] : []);
  if (!moduleTopics.length) return '<div class="coming-soon">📚 Los temas de este módulo se incorporarán aquí.</div>';
  return `<div class="topic-list">${moduleTopics.map(topicNumber => `
    <button class="topic-card" type="button" data-topic="${topicNumber}">
      <span class="module-number">TEMA ${topicNumber}</span>
      <h3>${topics[topicNumber].title}</h3>
      <span class="module-action">Abrir material →</span>
    </button>
  `).join('')}</div>`;
}

document.addEventListener('click', (event) => {
  const card = event.target.closest('#module-view .topic-card');
  if (!card) return;
  const topicNumber = Number(card.dataset.topic);
  if (topicNumber === 38 && typeof renderTopic38 === 'function') renderTopic38();
  if (topicNumber === 39 && typeof renderTopic39 === 'function') renderTopic39();
});

function cleanExtraTopic39Card() {
  document.querySelectorAll('[data-topic="39"]').forEach(card => {
    if (card.closest('#module-view')) return;
    card.remove();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', cleanExtraTopic39Card);
} else {
  cleanExtraTopic39Card();
}
