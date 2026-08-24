// TEMA 31. RADIOLOGÍA CONVENCIONAL EN PORTÁTIL, UCI Y QUIRÓFANO
const topic31Content = `TEMA 31. RADIOLOGÍA CONVENCIONAL EN PORTÁTIL, UCI Y QUIRÓFANO

Los chasis, sean digitales o convencionales, se cubrirán con una bolsa de plástico u otro tipo de cubierta para que no entren en contacto directo con el paciente por cuestiones de higiene y manipulación.

PROTECCIÓN RADIOLÓGICA:

1. Delantal plomado
2. Protección gonadal a paciente si es posible
3. 2 m de distancia técnico-tubo al disparar
4. Avisar de viva voz que se va a disparar
5. No se dispara hasta que no se “haya ido todo el mundo”.

PROYECCIONES RADIOLÓGICAS:

TX PORTÁTIL: Se hace en AP y en decúbito supino la mayoría de las veces. Según la situación del paciente debemos intentar hacerla en sedestación para “mejorar” el diagnóstico y evitar las diferencias morfológicas. Es la prueba sujeta a mayor variabilidad de calidad de la imagen.

El foco debemos intentar que esté a la mayor distancia posible. (180 cm si es posible)

Retirar en la medida de lo posible cables y dispositivos externos. Intentar adquirir la imagen en inspiración profunda del paciente.

ABD PORTÁTIL: Se adquiere en AP y decúbito supino, teniendo en cuenta: colocar soporte en rodillas para relajar musculatura, brazos fuera del campo, procurar que esté centrado y sin rotaciones, adquisición un par de segundos después de terminar la espiración, para que el diafragma esté en su posición más elevada y por supuesto debemos incluir todo el abdomen.

PROYECCIONES COMPLEMENTARIAS:

Muchas ya no se usan por la complejidad de los pacientes y porque se sustituyen por otras técnicas como la eco.

⟶ Tx lateral en inspiración (derrame pleural)

⟶ Tx lateral en espiración (neumotórax)

⟶ Abd lateral (neumoperitoneo)

⟶ Abd supino y rayo lateral (neumoperitoneo en paciente no movilizable)

RX ESQUELÉTICAS

Para poder realizar los movimientos necesarios, el arco está provisto de sistemas de sujeción “en todos los planos”. El ajuste de los parámetros se hace habitualmente con un sist. automático que regula la tasa de dosis a la entrada del paciente. Los equipos más nuevos, tienen la opción de fluoroscopia pulsada, en la que la radiación se activa y desactiva en cortos intervalos de tiempo durante la exposición, con ello podemos reducir la dosis.

También permiten magnificar la imagen, ya sea con zoom (no aumenta dosis a paciente) o por magnificación en el intensificador de imagen (aumentando la radiación al paciente.)

PROTECCIÓN RADIOLÓGICA:

1. Exigible delantal y protección tiroidea plomada para todo el personal (en algunos casos también usaremos guantes y gafas plomados)
2. Restringir el uso de radioscopia.
3. El arco siempre por debajo del paciente (si es posible)
4. El intensificador de imagen lo más próximo al paciente que sea posible.
5. Usar siempre fluoroscopia pulsada sin magnificación.
6. Colimar al máximo al área de interés.
7. Evitar la manipulación del paciente durante el disparo
8. OJO con las oblicuas! alejarse más del tubo.
9. Reducir al máximo el nº de placas.

TRABAJO EN QUIRÓFANO:

El técnico de radiología es personal no estéril, se tendrá que mover con cuidado para no contaminar zonas estériles. Deberá ir vestido con ropa adecuada para el entorno quirúrgico y llevar el delantal plomado y las protecciones necesarias. En cuanto a la adquisición de imágenes, deberá procurar que el cirujano tenga una visión perfecta de los monitores y que el arco no interfiera la movilidad del personal de quirófano, velando por la radioprotección de todo el personal.`;

if (typeof topics !== 'undefined') {
  topics[31] = { title: 'TEMA 31. RADIOLOGÍA CONVENCIONAL EN PORTÁTIL, UCI Y QUIRÓFANO', content: topic31Content };
}

function renderTopic31() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[31];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic31Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic31Ready === '1') return;
  module4.dataset.topic31Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="31"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '31';
      card.innerHTML = `<span class="module-number">TEMA 31</span><h3>TEMA 31. RADIOLOGÍA CONVENCIONAL EN PORTÁTIL, UCI Y QUIRÓFANO</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic31);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic31Card); else addTopic31Card();
