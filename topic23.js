// TEMA 23. RADIOLOGÍA CONVECIONAL CRANEO CARA Y CUELLO
const topic23Content = `TEMA 23. RADIOLOGÍA CONVECIONAL CRANEO CARA Y CUELLO

PROYECCIÓN POSTEROANTERIOR CALDWELL

Las proyecciones básicas de cráneo incluyen lateral y la posteroanterior (occipitofrotal) Ya que con la lateral podemos visualizar la silla turca, mientras que con la posteroanterior podemos estudiar las orbitas en su totalidad.

La indicación fundamental para hacer una RX de cráneo es la evaluación de las estructuras óseas en traumatismos craneales, heridas punzantes o para la evaluación de cuerpos extraños, también permite estudiar enfermedades como Paget, mielomas o metástasis.

PROYECCIÓN ANTEROPOSTERIOR

Deben observarse el h.Frontal, la crista galli, las celdas etmoidales, peñasco y tempotales. 70/75kVp 20mAs DFP 1m

Objetivo proyectar los peñascos en las orbitas y valorar la bóveda en su totalidad. 70/75kVp 20mAs DFP 1m

PROYECCIÓN LATERAL

PROYECCIÓN TOWNE (frontoocipital) AXIAL AP

Deben observarse la bóveda en su totalidad, sirve para observar calcificaciones y la profundidad de las lesiones 65/70kVp 20mAs DFP 1m

Valorar el occipital y los peñascos proyectando el macizo facial por debajo de ellos. 65/70kVp 20mAs DFP 1m

PROYECCIÓN HIRTZ (submentovertical) BASE CRÁNEO

HUESOS FACIALES

Podemos estudiar la base del cráneo y el macizo facial, fracturas, tumores, agujero magno, procesos tumorales en las pirámides, y neuralgia del trigémino 70/75kVp 20mAs DFP 1m

PROYECCIÓN H.PROPIOS NARIZ

1. Sutura frontonasal
2. Sutura nasomaxilar
3. Cartílago nasal
4. Vestíbulo de la nariz
5. Espina nasal anterior

PROYECCIÓN TANGENCIAL ARCOS CIGOMÁTICOS

Podemos estudiar los arcos cigomáticos completos

70/75kVp 20mAs DFP 1m

PROYECCIÓN LATERAL ATM (SCHÜLLER)

PROYECCIÓN PA DE WATERS

Podemos estudiar los senos paranasales

70/75kVp 20mAs DFP 1m

PROYECCIÓN PA AXIAL DE ÓRBITAS (MAHONEY)

Para visualizar la articulación y su comportamiento, y encontrar patologías propias de la articulación

Para la localización de cuerpos extraños en las órbitas

70/75kVp 20mAs DFP 1m`;

if (typeof topics !== 'undefined') {
  topics[23] = { title: 'TEMA 23. RADIOLOGÍA CONVECIONAL CRANEO CARA Y CUELLO', content: topic23Content };
}

function renderTopic23() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[23];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic23Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic23Ready === '1') return;
  module4.dataset.topic23Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="23"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '23';
      card.innerHTML = `<span class="module-number">TEMA 23</span><h3>TEMA 23. RADIOLOGÍA CONVECIONAL CRANEO CARA Y CUELLO</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic23);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic23Card); else addTopic23Card();
