// CARGADOR DE TEMAS DE RADTECHCREW
// Se ejecuta después de cargar los archivos topicXX.js.
(function () {
  const topicNumbers = [18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

  function getTopicContent(n) {
    try {
      return eval('typeof topic' + n + 'Content !== "undefined" ? topic' + n + 'Content : null');
    } catch (_) {
      return null;
    }
  }

  function renderTopics() {
    const title = document.getElementById('module-view-title');
    const container = document.getElementById('module-topics');
    if (!title || !container) return;

    const isModule4 = title.textContent.trim().toLowerCase().includes('técnicas de radiología convencional');
    if (!isModule4) return;

    container.innerHTML = '';

    topicNumbers.forEach((n) => {
      const content = getTopicContent(n);
      if (!content) return;

      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'topic-card';
      card.innerHTML = `<strong>TEMA ${n}</strong><span>Ver tema completo</span>`;

      card.addEventListener('click', () => {
        const viewer = document.getElementById('module-view');
        const old = document.getElementById('topic-reader');
        if (old) old.remove();

        const reader = document.createElement('article');
        reader.id = 'topic-reader';
        reader.className = 'topic-reader';
        reader.innerHTML = `<button type="button" class="secondary-button" id="close-topic-reader">← Volver a los temas</button><pre></pre>`;
        reader.querySelector('pre').textContent = content;
        viewer.appendChild(reader);
        document.getElementById('close-topic-reader').addEventListener('click', () => reader.remove());
        reader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      container.appendChild(card);
    });
  }

  const observer = new MutationObserver(renderTopics);
  const title = document.getElementById('module-view-title');
  if (title) observer.observe(title, { childList: true, characterData: true, subtree: true });
  window.addEventListener('load', renderTopics);
  renderTopics();
})();
