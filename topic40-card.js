// TEMA 40 — tarjeta del Módulo 5
(function () {
  function ensureTopic40Card() {
    const view = document.getElementById('module-view');
    const topicsContainer = document.getElementById('module-topics');
    if (!view || !topicsContainer) return;

    const moduleTitle = document.getElementById('module-view-title');
    if (!moduleTitle || !moduleTitle.textContent.toLowerCase().includes('ecografía')) return;

    if (document.getElementById('topic-40-card')) return;

    const card = document.createElement('button');
    card.id = 'topic-40-card';
    card.type = 'button';
    card.className = 'topic-card';
    card.innerHTML = '<span class="topic-card-number">TEMA 40</span><span class="topic-card-title">EXPLORACIÓN ECOGRÁFICA DEL APARATO GENITAL FEMENINO</span>';

    card.addEventListener('click', function () {
      if (typeof topics === 'undefined' || !topics[40]) return;
      const topic = topics[40];
      topicsContainer.innerHTML = '<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>' + topic.title + '</h2></div><div class="topic-content">' + formatStudyText(topic.content) + '</div></article>';
      topicsContainer.querySelector('.topic-back').addEventListener('click', function () {
        const module5 = document.querySelector('.module-card[data-module="5"]');
        if (module5) module5.click();
      });
      view.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    topicsContainer.appendChild(card);
  }

  function start() {
    ensureTopic40Card();
    const view = document.getElementById('module-view');
    if (!view) return;
    const observer = new MutationObserver(ensureTopic40Card);
    observer.observe(view, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
