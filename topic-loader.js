// CARGADOR DE TEMAS DE RADTECHCREW
// Módulo 4: temas 18-34. Módulo 5: temas 35-39.
(function () {
  const moduleTopics = {
    4: [18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    5: [35, 36, 37, 38, 39]
  };

  function getTopicContent(n) {
    try {
      return eval('typeof topic' + n + 'Content !== "undefined" ? topic' + n + 'Content : null');
    } catch (_) {
      return null;
    }
  }

  function getModuleNumber(titleText) {
    const title = titleText.trim().toLowerCase();
    if (title.includes('técnicas de radiología convencional')) return 4;
    if (title.includes('ecografía')) return 5;
    return null;
  }

  function renderTopics() {
    const title = document.getElementById('module-view-title');
    const container = document.getElementById('module-topics');
    if (!title || !container) return;

    const moduleNumber = getModuleNumber(title.textContent);
    if (!moduleNumber) return;

    container.innerHTML = '';

    (moduleTopics[moduleNumber] || []).forEach((n) => {
      const content = getTopicContent(n);
      if (!content) return;

      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'topic-card';
      card.dataset.topic = String(n);
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
