const radioModules = [
  { n: 1, title: 'Radiología convencional: Las bases del procedimiento radiológico.' },
  { n: 2, title: 'Radiología digital.' },
  { n: 3, title: 'Fármacos en radiología.' },
  { n: 4, title: 'Técnicas de radiología convencional.' },
  { n: 5, title: 'Ecografía.' },
  { n: 6, title: 'Tomografía computarizada.' },
  { n: 7, title: 'Resonancia magnética.' },
  { n: 8, title: 'Radiología vascular e intervencionista.' },
  { n: 9, title: 'Medicina nuclear.' },
  { n: 10, title: 'Protección radiológica.' },
  { n: 11, title: 'Funciones del técnico.' }
];

const radioPodcasts = {
  1: [
    {
      topic: 'Tema 1',
      title: 'De la mano de Röntgen al TAC',
      description: 'Podcast de estudio sobre el Tema 1.',
      audio: 'https://github.com/martacciria-hub/RadtechcrewTTS/releases/download/prueba-tema1/De_la_mano_de_Rontgen_al_TAC.m4a'
    },
    {
      topic: 'Tema 2',
      title: 'La batalla cuántica de una radiografía',
      description: 'Podcast de estudio sobre el Tema 2.',
      audio: 'https://github.com/martacciria-hub/RadtechcrewTTS/releases/download/prova-podcast-tema2/La_batalla_cuantica_de_una_radiografia.m4a'
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('radio-rayos-list');
  const moduleView = document.getElementById('radio-module-view');
  const moduleViewTitle = document.getElementById('radio-module-view-title');
  const moduleViewDesc = document.getElementById('radio-module-view-desc');
  const moduleTopics = document.getElementById('radio-module-topics');
  const radioHome = document.getElementById('radio-rayos');

  if (!container || !moduleView || !moduleViewTitle || !moduleViewDesc || !moduleTopics || !radioHome) return;

  container.innerHTML = radioModules.map(module => `
    <button class="module-card radio-module-card" type="button" data-radio-module="${module.n}">
      <span class="module-number">MÓDULO ${module.n}</span>
      <h3>${module.title}</h3>
      <p>Podcasts de estudio del módulo</p>
      <span class="module-action">Entrar →</span>
    </button>
  `).join('');

  const showRadioModule = moduleNumber => {
    const module = radioModules.find(item => item.n === moduleNumber);
    if (!module) return;

    const podcasts = radioPodcasts[moduleNumber] || [];
    moduleViewTitle.textContent = `Módulo ${module.n} · ${module.title}`;
    moduleViewDesc.textContent = 'Selecciona un podcast para empezar a escuchar.';
    moduleTopics.innerHTML = podcasts.length
      ? `<div class="topic-list">${podcasts.map(podcast => `
          <article class="topic-card radio-podcast-card">
            <span class="module-number">${podcast.topic}</span>
            <h3>${podcast.title}</h3>
            <p>${podcast.description}</p>
            <audio controls preload="metadata" src="${podcast.audio}"></audio>
          </article>
        `).join('')}</div>`
      : '<div class="coming-soon">📻 Los podcasts de este módulo se incorporarán aquí.</div>';

    radioHome.hidden = true;
    moduleView.hidden = false;
    moduleView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  container.querySelectorAll('[data-radio-module]').forEach(card => {
    card.addEventListener('click', () => showRadioModule(Number(card.dataset.radioModule)));
  });

  const backButton = document.createElement('button');
  backButton.className = 'secondary-button radio-topic-back';
  backButton.type = 'button';
  backButton.textContent = '← Volver a módulos';
  moduleView.querySelector('.module-view-head').prepend(backButton);

  backButton.addEventListener('click', () => {
    moduleView.hidden = true;
    radioHome.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
