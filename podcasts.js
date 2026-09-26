(() => {
  const AUDIO_URL = 'https://github.com/martacciria-hub/RadtechcrewTTS/releases/download/prova-podcast-tema2/La_batalla_cuantica_de_una_radiografia.m4a';

  function initPodcastStudy() {
    const study = document.getElementById('estudio');
    const modules = document.getElementById('modules');
    if (!study || !modules) return;

    const intro = study.querySelector('h2');
    const introText = intro?.nextElementSibling;

    const chooser = document.createElement('div');
    chooser.className = 'study-mode-chooser';
    chooser.innerHTML = `
      <div class="study-mode-intro">
        <p class="eyebrow">ELIGE CÓMO ESTUDIAR</p>
        <h3>Tu temario, a tu manera</h3>
        <p>Puedes seguir con el temario escrito de siempre o estudiar escuchando los temas en formato podcast.</p>
      </div>
      <div class="study-mode-cards">
        <button class="study-mode-card active" type="button" data-study-mode="written">
          <span class="study-mode-icon" aria-hidden="true">📖</span>
          <strong>Temario</strong>
          <span>Estudia los temas escritos como hasta ahora.</span>
          <em>Entrar →</em>
        </button>
        <button class="study-mode-card" type="button" data-study-mode="podcasts">
          <span class="study-mode-icon" aria-hidden="true">🎧</span>
          <strong>Podcasts</strong>
          <span>Escucha los temas mientras haces otras cosas.</span>
          <em>Escuchar →</em>
        </button>
      </div>
    `;

    const podcastArea = document.createElement('div');
    podcastArea.id = 'podcast-study';
    podcastArea.hidden = true;
    podcastArea.innerHTML = `
      <div class="podcast-area-head">
        <p class="eyebrow">AUDIO DE ESTUDIO</p>
        <h3>🎧 Podcasts</h3>
        <p>Los mismos temas, en formato conversación para estudiar mientras haces otras cosas.</p>
      </div>
      <div class="podcast-module">
        <span class="module-number">MÓDULO 1</span>
        <h4>Radiología convencional</h4>
      </div>
      <article class="podcast-card">
        <div class="podcast-card-icon" aria-hidden="true">🎙️</div>
        <div class="podcast-card-info">
          <span class="module-number">TEMA 2</span>
          <h4>La batalla cuántica de una radiografía</h4>
          <p>Podcast de prueba · NotebookLM</p>
          <audio controls preload="metadata">
            <source src="${AUDIO_URL}" type="audio/mp4">
            Tu navegador no puede reproducir este audio.
          </audio>
        </div>
      </article>
      <button class="secondary-button podcast-back" type="button">← Volver a Temario</button>
    `;

    intro?.after(chooser);
    if (introText) introText.hidden = true;
    study.insertBefore(podcastArea, modules);
    modules.hidden = false;

    const setMode = (mode) => {
      const written = mode === 'written';
      modules.hidden = !written;
      podcastArea.hidden = written;
      chooser.querySelectorAll('[data-study-mode]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.studyMode === mode);
      });
      const moduleView = document.getElementById('module-view');
      if (moduleView && !written) moduleView.hidden = true;
    };

    chooser.querySelectorAll('[data-study-mode]').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.studyMode));
    });

    podcastArea.querySelector('.podcast-back').addEventListener('click', () => setMode('written'));

    document.querySelectorAll('[data-view="estudio"]').forEach(link => {
      link.addEventListener('click', () => setMode('written'));
    });

    setMode('written');
  }

  document.addEventListener('DOMContentLoaded', initPodcastStudy);
})();