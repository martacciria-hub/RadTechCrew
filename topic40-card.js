// TEMA 40 - integración en el Módulo 5 siguiendo el mismo sistema que los temas anteriores
if (typeof topics !== 'undefined' && typeof topic40Content !== 'undefined') {
  topics[40] = {
    title: 'TEMA 40. EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL FEMENINO',
    content: topic40Content
  };
}

function renderTopic40() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content || !topics[40]) return;
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topics[40].title}</h2></div><div class="topic-content">${formatStudyText(topics[40].content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => {
    const module5 = document.querySelector('.module-card[data-module="5"]');
    if (module5) module5.click();
  });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic40Card() {
  const module5 = document.querySelector('.module-card[data-module="5"]');
  if (!module5 || module5.dataset.topic40Ready === '1') return;
  module5.dataset.topic40Ready = '1';
  module5.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content || !topics[40]) return;
      let list = content.querySelector('.topic-list');
      if (!list) return;
      if (list.querySelector('[data-topic="40"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '40';
      card.innerHTML = `<span class="module-number">TEMA 40</span><h3>${topics[40].title}</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic40);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addTopic40Card);
} else {
  addTopic40Card();
}
