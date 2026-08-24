// TEMA 21. RADIOLOGÍA CONVECIONAL MIEMBRO INFERIOR
const topic21Content = `TEMA 21. RADIOLOGÍA CONVECIONAL MIEMBRO INFERIOR

TELERADIOGRAFÍA EEII

El estudio global de ambos miembros inferiores, se realiza para medir los ejes de carga y las posibles desmetrías. Esta próyección debe abarcar desde crestas ilíacas hasta los tobillos, y ambas extremidades deben estar en extensión completa y paralelas entre sí.

PROYECCIÓN FÉMUR AP

PROYECCIÓN FÉMUR MEDIOLATERAL

Está contraindicada para casos de traumatismo agudo.

PROYECCIÓN FÉMUR LATEROMEDIAL

Está indicada en casos de traumatismo agudo o inmovilización de la extremidad. Colocamos al paciente en decubito supino con la extremidad en extensión y el chasis entre las piernas

RODILLA

PROYECCIÓN RODILLA AP

Útil para valorar y comparar los compartimentos femerotibiales

PROYECCIÓN RODILLA LATERAL

Útil para valorar los compartimentos de la rodilla, especialmente el femororotuliano.

PROYECCIÓN RODILLA OBLICUAS

Se utilizan en casos de traumatismos o para valorar material de osteosíntesis. Son complementarias a la AP ya que permiten desplegar la articulación tibioperonea y completar el estudio de códilo externo y rótula (rotación interna)

PROYECCIÓN RODILLA AXIAL PA (FICK)

Indicada para valorar comportamientos femorotibiales posteriores

PROYECCIÓN POSTEROANTERIOR EN CARGA (SCHUSS)

Explora la parte porsterior de la articulación femorotibial, que es donde aparecen los primeros signos de enfermedades degenerativas.

PROYECCIÓN AXIAL (TANGENCIAL) DE RÓTULA

TIBIA Y PERONÉ

PROYECCIÓN AP

PROYECCIÓN LATERAL

Tobillo en rot.int. 5/15º

DFP: Puede augmentar a 120 para atenuar los efectos de la divergencia del haz de rx sobre las articulaciones.

63kVp 3 mAs

Complementa la AP

DFP: Puede augmentar a 120 para atenuar los efectos de la divergencia del haz de rx sobre las articulaciones.

63kVp 3 mAs

Técnica esencial para visualizar el espacio articular femoropatelar, detectar fx verticales y evaluar subluxaciones o malformaciones de rótula

TOBILLO

PROYECCIÓN AP MORTAJA

Para visualizar bien la mortaja

Rot.Int pie a 5/15º. 55kVp 3mAs

Debemos ver la mortaja con el espacio totalmente abierto y sin superposición de los maléolos

PROYECCIÓN LATERAL

Para valorar otras áreas del retropié

55kVp 3mAs

Debemos apreciar el peroné superpuesto en la parte posterior de la tibia. Los espacios articulares .

PROYECCIÓN OBLICUA INTERNA

PROYECCIÓN AP NEUTRA

55kVp 3mAs

Debemos apreciar, meloelo medial, espacio claro medial menos a 5mm., superficie articular tibioartragalina, superposición tibioperonea mayor a 10mm. y el maleolo lateral

Para estudiar la mortaja del tobillo y estructuras del retropié

PROYECCIONES DE BRODEN (tobillo en 45º, el haz se va inclinando desde los 10º a los 40º “tomosintesis”) 55kVp 3mAs

Veremos el espacio articular de la mortaja totalmente abierto, el astrágalo y la base del 5º metatarsiano y parte de la articulación subastragalina

PIE

Es un área anatómicamente compleja, que dividimos en dos zona, el RETROPIÉ formado por los huesos cortos del tarso y las articulaciones subastragalina, intertarsiana (Chopart) y metotarsiana, y el ANTEPIÉ formado por los huesos largos de los dedos desde la articulación cuneometotarsiana (Lisfranc).

Debido a que la afección ortopédica de los pies es frecuente, a menudo se exploran bilateralmente y en bipedestación (carga)

PROYECCIÓN AP

Se estudian las zonas medias y anterior del pie, ya que la zona posterior queda superpuesta al tobillo.

50kVP 2mAs. rayo 10º caudocraneal

PROYECCIÓN LATERAL

Es útil para ver cuerpos extraños, debe incluir la articulación del tobillo

50kVP 2mAs.

PROYECCIÓN OBLICUA INTERNA

Esta proyección separa las estructuras óseas que se superponen en perfil. Y muestra las estructuras osteoarticulares del antepié sin supeposición. Es la más utilizada. 65kVp 3mAs

PROYECCIÓN OBLICUA EXTERNA

Sirve para ver el primer y segundo dedo sin superposición. 65kVp 3mAs

PROYECCIONES DE DEDOS

En casos de afección muy focal de los dedos, 45kVp 2mAs

PROYECCIONES EN BIPE O CARGA

Objetivo es valorar los arcos del pie cuando soportan todo el peso corporal. Será necesario elevar los pies del suelo con soportes a una altura suficiente para poder centrar el haz de rayos. Los pies deben repartir el peso por igual. 50kVp 2mAs`;

if (typeof topics !== 'undefined') {
  topics[21] = { title: 'TEMA 21. RADIOLOGÍA CONVECIONAL MIEMBRO INFERIOR', content: topic21Content };
}

function renderTopic21() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[21];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic21Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic21Ready === '1') return;
  module4.dataset.topic21Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="21"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '21';
      card.innerHTML = `<span class="module-number">TEMA 21</span><h3>TEMA 21. RADIOLOGÍA CONVECIONAL MIEMBRO INFERIOR</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic21);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic21Card); else addTopic21Card();
