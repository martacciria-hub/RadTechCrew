const modules = [
  { n: 1, title: 'Radiología convencional: Las bases del procedimiento radiológico.', desc: 'Temas de estudio del módulo' },
  { n: 2, title: 'Radiología digital.', desc: 'Temas de estudio del módulo' },
  { n: 3, title: 'Fármacos en radiología.', desc: 'Temas de estudio del módulo' },
  { n: 4, title: 'Técnicas de radiología convencional.', desc: 'Temas de estudio del módulo' },
  { n: 5, title: 'Ecografía.', desc: 'Temas de estudio del módulo' },
  { n: 6, title: 'Tomografía computarizada.', desc: 'Temas de estudio del módulo' },
  { n: 7, title: 'Resonancia magnética.', desc: 'Temas de estudio del módulo' },
  { n: 8, title: 'Radiología vascular e intervencionista.', desc: 'Temas de estudio del módulo' },
  { n: 9, title: 'Medicina nuclear.', desc: 'Temas de estudio del módulo' },
  { n: 10, title: 'Protección radiológica.', desc: 'Temas de estudio del módulo' },
  { n: 11, title: 'Funciones del técnico.', desc: 'Temas de estudio del módulo' }
];

const modulesContainer = document.getElementById('modules');
const moduleView = document.getElementById('module-view');
const moduleViewTitle = document.getElementById('module-view-title');
const moduleViewDesc = document.getElementById('module-view-desc');

modulesContainer.innerHTML = modules.map(m => `
  <button class="module-card" type="button" data-module="${m.n}">
    <span class="module-number">MÓDULO ${m.n}</span>
    <h3>${m.title}</h3>
    <p>${m.desc}</p>
    <span class="module-action">Entrar →</span>
  </button>
`).join('');

document.querySelectorAll('.module-card').forEach(card => {
  card.addEventListener('click', () => {
    const module = modules.find(m => m.n === Number(card.dataset.module));
    moduleViewTitle.textContent = `Módulo ${module.n} · ${module.title}`;
    moduleViewDesc.textContent = 'Aquí incorporaremos los temas de estudio del módulo, sin tests dentro del módulo.';
    moduleView.hidden = false;
    moduleView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('close-module').addEventListener('click', () => {
  moduleView.hidden = true;
  document.getElementById('estudio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
