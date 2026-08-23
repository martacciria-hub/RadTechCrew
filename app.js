const modules = [
  { n: 1, title: 'Módulo 1', desc: 'Contenidos de estudio' },
  { n: 2, title: 'Módulo 2 · Radiología Digital', desc: 'Temas 6–11' },
  { n: 3, title: 'Módulo 3', desc: 'Contenidos de estudio' },
  { n: 4, title: 'Módulo 4 · Técnicas de Radiología Convencional', desc: 'Temas 18 en adelante' }
];

document.getElementById('modules').innerHTML = modules.map(m => `
  <article class="module-card">
    <h3>${m.title}</h3>
    <p>${m.desc}</p>
  </article>
`).join('');