(() => {
  const AUDIO_URL = 'https://github.com/martacciria-hub/RadtechcrewTTS/releases/download/prova-podcast-tema2/La_batalla_cuantica_de_una_radiografia.m4a';

  function initPodcastStudy() {
    const study = document.getElementById('estudio');
    const choice = document.getElementById('study-choice-screen');
    const modules = document.getElementById('modules');
    const podcastView = document.getElementById('podcast-study');
    const moduleView = document.getElementById('module-view');
    if (!study || !choice || !modules || !podcastView) return;

    podcastView.innerHTML = `
      <div class="podcast-screen" data-screen="modules">
        <p class="eyebrow">PODCASTS</p>
        <h2>🎧 Podcasts</h2>
        <p>Elige un módulo</p>
        <div class="podcast-modules">
          <button class="podcast-module-card" type="button" data-podcast-module="1">
            <span class="module-number">MÓDULO 1</span>
            <h3>Radiología convencional</h3>
            <p>Las bases del procedimiento radiológico.</p>
            <span class="module-action">Entrar →</span>
          </button>
        </div>
        <button class="secondary-button podcast-back-choice" type="button">← Atrás</button>
      </div>

      <div class="podcast-screen" data-screen="topics" hidden>
        <button class="secondary-button podcast-back-modules" type="button">← Atrás</button>
        <p class="eyebrow podcast-level-label">MÓDULO 1</p>
        <h2>Elige un tema</h2>
        <div class="podcast-topics">
          <button class="podcast-topic-card" type="button" data-podcast-topic="2">
            <span>🎧</span>
            <strong>Tema 2</strong>
            <small>La batalla cuántica de una radiografía</small>
          </button>
        </div>
      </div>

      <div class="podcast-screen" data-screen="player" hidden>
        <button class="secondary-button podcast-back-topics" type="button">← Atrás</button>
        <p class="eyebrow podcast-level-label">TEMA 2</p>
        <h2>🎙️ Tema 2</h2>
        <article class="podcast-player-card">
          <h3>La batalla cuántica de una radiografía</h3>
          <p>Podcast de prueba · NotebookLM</p>
          <audio controls preload="metadata">
            <source src="${AUDIO_URL}" type="audio/mp4">
            Tu navegador no puede reproducir este audio.
          </audio>
        </article>
      </div>
    `;

    const screens = [...podcastView.querySelectorAll('[data-screen]')];
    const showPodcastScreen = name => screens.forEach(screen => {
      screen.hidden = screen.dataset.screen !== name;
    });

    const showChoice = () => {
      podcastView.hidden = true;
      moduleView.hidden = true;
      choice.hidden = false;
      modules.hidden = true;
    };

    const showWritten = () => {
      podcastView.hidden = true;
      choice.hidden = true;
      modules.hidden = false;
      moduleView.hidden = true;
    };

    const showPodcasts = () => {
      choice.hidden = true;
      modules.hidden = true;
      moduleView.hidden = true;
      podcastView.hidden = false;
      showPodcastScreen('modules');
    };

    choice.querySelector('[data-study-choice="written"]').addEventListener('click', showWritten);
    choice.querySelector('[data-study-choice="podcasts"]').addEventListener('click', showPodcasts);

    podcastView.querySelector('[data-podcast-module="1"]').addEventListener('click', () => {
      showPodcastScreen('topics');
      window.scrollTo({top:0, behavior:'smooth'});
    });
    podcastView.querySelector('[data-podcast-topic="2"]').addEventListener('click', () => {
      showPodcastScreen('player');
      window.scrollTo({top:0, behavior:'smooth'});
    });
    podcastView.querySelector('.podcast-back-choice').addEventListener('click', showChoice);
    podcastView.querySelector('.podcast-back-modules').addEventListener('click', () => {
      showPodcastScreen('modules');
      window.scrollTo({top:0, behavior:'smooth'});
    });
    podcastView.querySelector('.podcast-back-topics').addEventListener('click', () => {
      showPodcastScreen('topics');
      window.scrollTo({top:0, behavior:'smooth'});
    });

    document.querySelectorAll('[data-view="estudio"]').forEach(link => {
      link.addEventListener('click', () => {
        showChoice();
      });
    });

    document.querySelectorAll('[data-view]').forEach(link => {
      if (link.dataset.view !== 'estudio') {
        link.addEventListener('click', () => {
          podcastView.hidden = true;
        });
      }
    });

    showChoice();
  }

  document.addEventListener('DOMContentLoaded', initPodcastStudy);
})();