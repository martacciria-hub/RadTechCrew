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

// Material de estudio recuperado del Tema 1 que ya estaba trabajado en Opos-Radio.
// Dentro de los módulos solo se muestran los temas y su material de estudio.
const topics = {
  1: {
    title: 'TEMA 1. HISTORIA, INTRODUCCIÓN Y TÉCNICA RADIOGRÁFICA',
    content: `TEMA 1. HISTORIA, INTRODUCCIÓN Y TÉCNICA RADIOGRÁFICA

INTRODUCCIÓN:

Radiología es la especialidad médica que diagnóstica o trata una enfermedad, utilizando métodos de imágenes basadas en radiaciones ionizantes u otras fuentes de energía. El trabajo del técnico es obtener las imágenes adecuadas para la lectura posterior por parte del radiólogo, de la excelencia de ambos depende el resultado final.

HISTORIA:

las investigaciones previas al descubrimiento de los Rx, se centraban en los estudios de la corriente eléctrica, a través de gases encerrados en tubos con distintos grados de vacío en su interior.

Los primeros avances en la radiología se centraron en perfeccionar el generador de corriente eléctrica, el tubo y las placas, la inclinación del ánodo cambió 20º y finalmente, se ideó el ánodo giratorio para disminuir la superficie de impacto. A finales de los 70, llegó el estudio de RM aunque no en hospitales, en cuanto a antecedentes a los ultrasonidos (ECO) se menciona a Pierre Curie, cuyas primeras aplicaciones fueron para estudios militares como el sónar.

CRONOLOGÍA:

1845: Nace en Alemania W.C Röntgen.
1895 (8/Nov): Descubre los RX
1895 (22/Dic): 1ª radiografía a la mano de su mujer.
1911: Marie Curie ⟶ Radio
1913: Salomon ⟶ Mamografía
1952: F.Bloch y Purcell ⟶ Fenómeno Resonancia Magnética
1961 ⟶ Se regula en España (enfermeros especialistas en rayos)
1972: 1er protocolo de TAC cerebral
1973: Lauterbur y Ter-Pogossian ⟶ PET
1977 ⟶ 1ª promoción de TECNICOS DE RAYOS
1979: Hounsfield y Cormack ⟶ Imágenes de TAC
1981 ⟶ Radiología
1990 ⟶ TAC Helicoidal
1995 ⟶ TSID
2003: Lautebur y Mansfield ⟶ Imágenes de Resonancia Magnética
2014 ⟶ TECNICO SUPERIOR EN IMAGEN PARA EL DIAGNÓSTICO Y MEDICINA NUCLEAR`
  }
};

const modulesContainer = document.getElementById('modules');
const moduleView = document.getElementById('module-view');
const moduleViewTitle = document.getElementById('module-view-title');
const moduleViewDesc = document.getElementById('module-view-desc');

function renderModuleTopics(moduleNumber) {
  const moduleTopics = moduleNumber === 1 ? [1] : [];

  if (!moduleTopics.length) {
    return '<div class="coming-soon">📚 Los temas de este módulo se incorporarán aquí.</div>';
  }

  return `<div class="topic-list">${moduleTopics.map(topicNumber => `
    <button class="topic-card" type="button" data-topic="${topicNumber}">
      <span class="module-number">TEMA ${topicNumber}</span>
      <h3>${topics[topicNumber].title}</h3>
      <span class="module-action">Abrir material →</span>
    </button>
  `).join('')}</div>`;
}

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
    moduleViewDesc.textContent = 'Selecciona un tema para acceder a su material de estudio.';
    moduleViewContent.innerHTML = renderModuleTopics(module.n);
    moduleView.hidden = false;
    moduleView.scrollIntoView({ behavior: 'smooth', block: 'start' });

    moduleViewContent.querySelectorAll('.topic-card').forEach(topicCard => {
      topicCard.addEventListener('click', () => openTopic(Number(topicCard.dataset.topic)));
    });
  });
});

document.getElementById('close-module').addEventListener('click', () => {
  moduleView.hidden = true;
  document.getElementById('estudio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const moduleViewContent = document.createElement('div');
moduleViewContent.className = 'module-topics';
moduleView.appendChild(moduleViewContent);

function openTopic(topicNumber) {
  const topic = topics[topicNumber];
  if (!topic) return;

  moduleViewContent.innerHTML = `
    <button class="secondary-button topic-back" type="button">← Volver a temas</button>
    <article class="study-material">
      <div class="topic-heading">
        <p class="eyebrow">MATERIAL DE ESTUDIO</p>
        <h2>${topic.title}</h2>
      </div>
      <div class="topic-content">${formatStudyText(topic.content)}</div>
    </article>
  `;

  moduleViewContent.querySelector('.topic-back').addEventListener('click', () => {
    const currentModule = modules.find(m => m.n === 1);
    moduleViewTitle.textContent = `Módulo ${currentModule.n} · ${currentModule.title}`;
    moduleViewDesc.textContent = 'Selecciona un tema para acceder a su material de estudio.';
    moduleViewContent.innerHTML = renderModuleTopics(1);
    moduleViewContent.querySelector('.topic-card').addEventListener('click', () => openTopic(1));
  });

  moduleView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function formatStudyText(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}
