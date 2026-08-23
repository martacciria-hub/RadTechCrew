// Integración visual del Tema 17 en el Módulo 3
function addTopic17Card() {
  const module3 = document.querySelector('.module-card[data-module="3"]');
  if (!module3 || module3.dataset.topic17Ready === '1') return;
  module3.dataset.topic17Ready = '1';
  module3.addEventListener('click', () => {
    setTimeout(() => {
      const list = document.querySelector('.module-topics .topic-list');
      if (!list || list.querySelector('[data-topic="17"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '17';
      card.innerHTML = `<span class="module-number">TEMA 17</span><h3>TEMA 17. COMPLICACIONES Y REACCIONES ADVERSAS</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', () => {
        const topic = topics[17];
        const view = document.getElementById('module-view');
        const content = view && view.querySelector('.module-topics');
        if (!topic || !content) return;
        content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
        content.querySelector('.topic-back').addEventListener('click', () => module3.click());
        view.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic17Card); else addTopic17Card();
