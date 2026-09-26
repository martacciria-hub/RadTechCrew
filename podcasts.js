(() => {
  const AUDIO_URL = 'https://github.com/martacciria-hub/RadtechcrewTTS/releases/download/prova-podcast-tema2/La_batalla_cuantica_de_una_radiografia.m4a';

  function initPodcastStudy() {
    const study = document.getElementById('estudio');
    const modules = document.getElementById('modules');
    const moduleView = document.getElementById('module-view');
    if (!study || !modules) return;

    const intro = study.querySelector('h2');
    const introText = intro?.nextElementSibling;

    const podcastShell = document.createElement('div');
    podcastShell.id = 'podcast-study-shell';
    podcastShell.innerHTML = `
      <div class="study-mode-screen" data-screen="chooser">
        <div class="study-mode-intro">
          <p class="eyebrow">ZONA DE ESTUDIO</p>
          <h3>¿Dónde quieres estudiar?</h3>
          <p>Elige cómo quieres estudiar hoy.</p>
        </div>
        <div class="study-mode-cards">
          <button class="study-mode-card" type="button" data-study-mode="written">
            <span class="study-mode-icon" aria-hidden="true">📖</span>
            <strong>Temario</strong>
            <span>Estudia el material escrito.</span>
            <em>Entrar →</em>
          </button>
          <button class="study-mode-card" type="button" data-study-mode="podcasts">
            <span class="study-mode-icon" aria-hidden="true">🎧</span>
            <strong>Podcasts</strong>
            <span>Estudia escuchando.</span>
            <em>Entrar →</em>
          </button>
        </div>
      </div>

      <div class="study-mode-screen podcast-screen" data-screen="podcasts" hidden>
        <div class="podcast-area-head">
          <p class="eyebrow">PODCASTS</p>
          <h3>🎧 Elige un módulo</h3>
          <p>Selecciona el módulo que quieres escuchar.</p>
        </div>
        <div class="podcast-modules">
          <button class="podcast-module-card" type="button" data-podcast-module="1">
            <span class="module-number">MÓDULO 1</span>
            <h4>Radiología convencional: Las bases del procedimiento radiológico.</h4>
            <p>1 podcast disponible</p>
            <span class="module-action">Entrar →</span>
          </button>
        </div>
        <button class="secondary-button podcast-back-to-chooser" type="button">← Volver</button>
      </div>

      <div class="study-mode-screen podcast-screen" data-screen="topics" hidden>
        <button class="secondary-button podcast-back-modules" type="button">← Volver a módulos</button>
        <div class="podcast-area-head compact">
          <p class="eyebrow">MÓDULO 1</p>
          <h3>🎙️ Elige un tema</h3>
          <p>Selecciona el podcast que quieres escuchar.</p>
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
    `;

    intro?.after(podcastShell);
    if (introText) introText.hidden = true;

    const chooser = podcastShell.querySelector('[data-screen="chooser"]');
    const podcastScreen = podcastShell.querySelector('[data-screen="podcasts"]');
    const topicsScreen = podcastShell.querySelector('[data-screen="topics"]');

    const showScreen = (screen) => {
      chooser.hidden = screen !== 'chooser';
      podcastScreen.hidden = screen !== 'podcasts';
      topicsScreen.hidden = screen !== 'topics';
    };

    const enterWritten = () => {
      showScreen('chooser');
      modules.hidden = false;
      if (moduleView) moduleView.hidden = true;
    };

    const enterPodcasts = () => {
      modules.hidden = true;
      if (moduleView) moduleView.hidden = true;
      showScreen('podcasts');
    };

    chooser.querySelector('[data-study-mode="written"]').addEventListener('click', enterWritten);
    chooser.querySelector('[data-study-mode="podcasts"]').addEventListener('click', enterPodcasts);

    podcastScreen.querySelector('[data-podcast-module="1"]').addEventListener('click', () => {
      showScreen('topics');
    });

    podcastScreen.querySelector('.podcast-back-to-chooser').addEventListener('click', enterWritten);
    topicsScreen.querySelector('.podcast-back-modules').addEventListener('click', () => showScreen('podcasts'));

    document.querySelectorAll('[data-view="estudio"]').forEach(link => {
      link.addEventListener('click', enterWritten);
    });

    showScreen('chooser');
  }

  document.addEventListener('DOMContentLoaded', initPodcastStudy);
})();