// TEMA 25. RADIOLOGÍA CONVECIONAL TORAX parénquima, mediastino y tórax óseo
const topic25Content = `TEMA 25. RADIOLOGÍA CONVECIONAL TORAX parénquima, mediastino y tórax óseo

PA TORAX

LATERAL TORAX

AP TORAX

I**NTRODUCCIÓN :**

**El mediastino:** Espacio virtual situado entre los pulmones, las principales estructuras localizadas son la tráquea, el esófago, el timo (*interviene en el desarollo y maduración del sist. inmunitario*), el corazón y los grandes vasos.

**Seno costofrénico:** Es la zona de unión de la pared torácica con el diafragma

**Pleura:** Membrana serosa que envuelve cada pulmon y que tiene doble pared => dos capas (*pleura parietal* (ext.) y *pleura visceral* (int.) entre las dos capas tenemos la “cavidad pleural” y contiene liquido que evita la fricción entre los pulmones y la pared torácica durante la respiración.

Normalmente se realiza del lado Izq. para evitar la magnificación del corazón

**LATERAL ESTERNON**

Normalmente se realiza en pacientes encamados **COMPLEMENTARIAS DE TX**

Decúbito lateral con Rx horizontal (pancosat)

Inspiración y Espiración

Lordótica (Apicograma)

Cuando hay sospecha de derrame pleural

Cuando hay sospecha de neumotorax y atrapamientos de aire

Excluye las claviculas para poder ver los vertices si se sospecha de alguna patologia

Oblicuas

Elimina la superposición de la columna sobre la silueta cardíaca cuando se sospecha de alguna patología, como nódulos y patologías pleurales`;

if (typeof topics !== 'undefined') {
  topics[25] = { title: 'TEMA 25. RADIOLOGÍA CONVECIONAL TORAX parénquima, mediastino y tórax óseo', content: topic25Content };
}

function renderTopic25() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[25];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic25Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic25Ready === '1') return;
  module4.dataset.topic25Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="25"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '25';
      card.innerHTML = `<span class="module-number">TEMA 25</span><h3>TEMA 25. RADIOLOGÍA CONVECIONAL TORAX parénquima, mediastino y tórax óseo</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic25);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic25Card); else addTopic25Card();
