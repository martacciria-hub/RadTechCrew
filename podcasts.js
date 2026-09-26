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
        <p class="eyebrow">ZONA DE ESTUDIO</p>
        <h3>¿Dónde quieres estudiar?</h3>
        <p>Elige entre el temario escrito de siempre o los podcasts para estudiar escuchando.</p>
      </div>
      <div class="study-mode-cards">
        <button class="study-mode-card active" type="button" data-study-mode="written">
          <span class="study-mode-icon" aria-hidden="true">📖</span>
          <strong>Temario</strong>
          <span>Estudia los temas escritos como hasta ahora.</span>
          <em>Ver módulos →</em>
        </button>
        <button class="study-mode-card" type="button" data-study-mode="podcasts">
          <span class="study-mode-icon" aria-hidden="true">🎧</span>
          <strong>Podcasts</strong>
          <span>Escucha los temas mientras haces otras cosas.</span>
          <em>Ver módulos →</em>
        </button>
      </div>
    `;

    const podcastArea = document.createElement('div');
    podcastArea.id = 'podcast-study';
    podcastArea.hidden = true;
    podcastArea.innerHTML = `
      <div class="podcast-area-head">
        <p class="eyebrow">PODCASTS</p>
        <h3>🎧 Elige un módulo</h3>
        <p>Los podcasts siguen la misma organización por módulos que el temario escrito.</p>
      </div>
      <div class="podcast-modules">
        <button class="podcast-module-card" type="button">
          <span class="module-number">MÓDULO 1</span>
          <h4>Radiología convencional: Las bases del procedimiento radiológico.</h4>
          <p>1 podcast disponible</p>
          <span class="module-action">Entrar →</span>
        </button>
      </div>
      <div class="podcast-topics" hidden>
        <button class="secondary-button podcast-back-topics" type="button">← Volver a módulos</button>
        <div class="podcast-area-head compact">
          <p class="eyebrow">MÓDULO 1</p>
          <h3>🎙️ Podcasts disponibles</h3>
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
      </div>
      <button class="secondary-button podcast-back" type="button">← Volver a Temario</button>
    `;

    intro?.after(chooser);
    if (introText) introText.hidden = true;
    study.insertBefore(podcastArea, modules);

    const podcastModules = podcastArea.querySelector('.podcast-modules');
    const podcastTopics = podcastArea.querySelector('.podcast-topics');

    const setMode = (mode) => {
      const written = mode === 'written';
      modules.hidden = !written;
      podcastArea.hidden = written;
      chooser.querySelectorAll('[data-study-mode]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.studyMode === mode);
      });
      const moduleView = document.getElementById('module-view');
      if (!written && moduleView) moduleView.hidden = true;
      if (written) {
        podcastModules.hidden = false;
        podcastTopics.hidden = true;
      }
    };

    chooser.querySelectorAll('[data-study-mode]').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.studyMode));
    });

    podcastArea.querySelector('.podcast-module-card').addEventListener('click', () => {
      podcastModules.hidden = true;
      podcastTopics.hidden = false;
    });

    podcastArea.querySelector('.podcast-back-topics').addEventListener('click', () => {
      podcastModules.hidden = false;
      podcastTopics.hidden = true;
    });

    podcastArea.querySelector('.podcast-back').addEventListener('click', () => setMode('written'));

    document.querySelectorAll('[data-view="estudio"]').forEach(link => {
      link.addEventListener('click', () => setMode('written'));
    });

    setMode('written');
  }

  document.addEventListener('DOMContentLoaded', initPodcastStudy);
})();