// TEMA 20. RADIOLOGÍA CONVENCIONAL DE PELVIS Y ART. CADERA
const topic20Content = `TEMA 20. RADIOLOGÍA CONVENCIONAL DE PELVIS Y ART. CADERA

PROYECCIÓN AP PELVIS DECÚBITO

PROYECCIÓN AP PELVIS BIPEDESTACIÓN

Cuando es necesario valorar asimetrías en EEII.

Básica en cualquier estudio de pelvis.

PROYECCIÓN CRANEОCAUDAL INLET

PROYECCIÓN CAUDOCRANEAL OUTLET

Permite valorar la parte superior del anillo pélvico en traumatismos, y las diáfisis articulares.

Permite valorar la parte inferior y anterior del anillo pélvico (ramas iliopubianas, isquiopubianas y sínfisis del pubis).

PROYECCIÓN OBLICUA POST. “ALAR”

Permite valorar fracturas de acetábulos, y luxaciones de cadera en pacientes traumáticos.

PROYECCIÓN OBLICUA POST. “OBTURATRIZ”

Permite valorar mejor la zona del acetábulo y las ramas del pubis.

PROYECCIÓN OBLICUA AMBAS HEMIPELVIS

Se hace igual que la AP de pelvis, solo se modifica el centrage que se hace a la altura de los cuellos femorales. La “unilateral” se emplea para el post IQ o por seguimiento de algún proceso.

PROYECCIÓN AP BILATERAL CADERA (bipe)

PROYECCIÓN AP BILATERAL CADERA

PROYECCIÓN AXIAL BILATERAL (ANCAS DE RANA)

Esta proyección complementa la AP de cadera, cuando no hay fx.

PROYECCIÓN AXIAL QUIRÚRGICA (CROSS-TABLE)

Esta proyección complementa la AP de cadera, cuando el paciente no puede mover la articulación, debido a traumatismos o cirugía. Y para el estudio de las caderas con choque femoroacetabular.

PROYECCIÓN AXIAL UNILATERAL decúbito y bipe

PROYECCIÓN AXIAL DE DUNN Y DUNN MODIFICADA

Permite valorar la esferidad de la cabeza femoral en estudios de pacientes jóvenes con dolor, o sospecha de choque femoroacetabular.

Dunn modificada.

PROYECCIÓN LATERAL MODIFICADA

Esta proyección sustituye la Cross-table, cuando el paciente no se puede mover por traumatismo, cirugía, etc.

PROYECCIÓN FALSO PERFIL

Permite valorar la esferidad de la cabeza femoral en estudios de choque femoroacetabular.

PROYECCIONES ART. SACROILÍACAS

Tienen una doble angulación, que es importante para entender las proyecciones, una siguiendo el eje del sacro y la otra hacia posteromedial. Las proyecciones básicas incluyen la proyección axial de ambas art. y la proyección oblicua de cada una de ellas. Las proyecciones de las art. sacroilíacas se suelen pedir cuando el paciente refiere dolor o patología inflamatoria.

PROYECCIÓN AXIAL ART. SACROILÍACAS

PROYECCIÓN OBLICUA DE ART. SACROILÍACA

Es la proyección que más se utiliza, principalmente cuando se hacen controles, ya que con una única RX, se tiene la imagen de ambas art. con menor irradiación.

Con ella podemos ver más definido el espacio articular.`;

if (typeof topics !== 'undefined') {
  topics[20] = { title: 'TEMA 20. RADIOLOGÍA CONVENCIONAL DE PELVIS Y ART. CADERA', content: topic20Content };
}

function renderTopic20() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[20];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic20Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic20Ready === '1') return;
  module4.dataset.topic20Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="20"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '20';
      card.innerHTML = `<span class="module-number">TEMA 20</span><h3>TEMA 20. RADIOLOGÍA CONVENCIONAL DE PELVIS Y ART. CADERA</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic20);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic20Card); else addTopic20Card();
