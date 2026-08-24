// Integración del Tema 34 en el listado real de temas del Módulo 4.
// No modifica el contenido ni la estructura de los demás temas.
(function () {
  function addTopic34Card() {
    const content = document.getElementById('module-topics');
    if (!content || !content.classList.contains('cards')) return;
    if (content.querySelector('[data-topic="34"]')) return;
    if (typeof renderTopic34 !== 'function') return;

    const card = document.createElement('button');
    card.className = 'topic-card';
    card.type = 'button';
    card.dataset.topic = '34';
    card.innerHTML = '<span class="module-number">TEMA 34</span><h3>TEMA 34. RADIOLOGÍA CONVENCIONAL. DENSITOMETRÍA</h3><span class="module-action">Abrir material →</span>';
    card.addEventListener('click', renderTopic34);
    content.appendChild(card);
  }

  function init() {
    const content = document.getElementById('module-topics');
    if (!content) return;
    addTopic34Card();
    const observer = new MutationObserver(addTopic34Card);
    observer.observe(content, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
