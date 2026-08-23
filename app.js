const modules = [
  { n: 1, title: 'Módulo 1 · Radiología Convencional', desc: 'Temas 1–5' },
  { n: 2, title: 'Módulo 2 · Radiología Digital', desc: 'Temas 6–11' },
  { n: 3, title: 'Módulo 3 · Fármacos y Medios de Contraste', desc: 'Temas 12–17' },
  { n: 4, title: 'Módulo 4 · Técnicas de Radiología Convencional', desc: 'Temas 18–34' }
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
    moduleViewTitle.textContent = module.title;
    moduleViewDesc.textContent = `${module.desc}. Aquí incorporaremos los temas de estudio del módulo, sin tests dentro del módulo.`;
    moduleView.hidden = false;
    moduleView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('close-module').addEventListener('click', () => {
  moduleView.hidden = true;
  document.getElementById('estudio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});