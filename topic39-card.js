// TARJETA DEL TEMA 39
// Se integra en el Módulo 5 siguiendo la misma arquitectura de tarjetas existente.
if (typeof topics !== 'undefined' && typeof topic39Content !== 'undefined') {
  topics[39] = {
    title: 'TEMA 39. EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL MASCULINO',
    content: topic39Content
  };
}

function renderTopic39() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content || typeof topics === 'undefined' || !topics[39]) return;

  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topics[39].title}</h2></div><div class="topic-content">${formatStudyText(topics[39].content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => {
    const module5 = document.querySelector('.module-card[data-module="5"]');
    if (module5) module5.click();
  });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic39Card() {
  const module5 = document.querySelector('.module-card[data-module="5"]');
  if (!module5 || module5.dataset.topic39Ready === '1') return;
  module5.dataset.topic39Ready = '1';

  module5.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="39"]')) return;

      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '39';
      card.innerHTML = `<span class="module-number">TEMA 39</span><h3>TEMA 39. EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL MASCULINO</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic39);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addTopic39Card);
} else {
  addTopic39Card();
}
