// TEMA 40 — integración en el Módulo 5, siguiendo la tarjeta normal de los temas
(function () {
  function addTopic40() {
    const view = document.getElementById('module-view');
    const content = view && view.querySelector('.module-topics');
    const title = document.getElementById('module-view-title');
    if (!view || !content || !title) return;
    if (!title.textContent.toLowerCase().includes('ecografía')) return;
    if (content.querySelector('[data-topic="40"]')) return;
    if (typeof topics === 'undefined' || !topics[40]) return;

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'topic-card';
    card.dataset.topic = '40';
    card.innerHTML = '<span class="topic-number">40</span><span><strong>TEMA 40. EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL FEMENINO</strong><small>Material de estudio</small></span>';
    card.addEventListener('click', function () {
      if (typeof renderTopic40 === 'function') renderTopic40();
    });
    content.appendChild(card);
  }

  function start() {
    addTopic40();
    const view = document.getElementById('module-view');
    if (!view) return;
    new MutationObserver(addTopic40).observe(view, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
