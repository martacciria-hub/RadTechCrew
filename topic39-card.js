// TEMA 39 · TARJETA DEL MÓDULO 5
// Sigue exactamente el mismo patrón de carga que el tema 38.
function addTopic39CardFixed() {
  const module5 = document.querySelector('.module-card[data-module="5"]');
  if (!module5) return;

  module5.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;

      let list = content.querySelector('.topic-list');
      if (!list) {
        list = document.createElement('div');
        list.className = 'topic-list';
        content.appendChild(list);
      }

      if (list.querySelector('[data-topic="39"]')) return;

      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '39';
      card.innerHTML = `<span class="module-number">TEMA 39</span><h3>TEMA 39. EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL MASCULINO</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic39);
      list.appendChild(card);
    }, 50);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addTopic39CardFixed);
} else {
  addTopic39CardFixed();
}
