// TEMA 29. HISTEROSALPINGOGRAFIA
const topic29Content = `Objetivo: Permite la evaluación del útero y las trompas de falopio tras introducir contraste radiopaco a través del canal cervical. Es una técnica fundamental en el estudio de infertilidad femenina, para el estudio morfológico y funcional de las trompas de falopio.

Aunque se le atribuye cierto efecto terapéutico, es un procedimiento con finalidad diagnóstica.

Indicaciones: Estudio de infertilidad

Estudio de abortos de repetición.

Estudio de malformaciones uterinas congénitas.

Valoración de la efectividad de métodos anticonceptivos como la ligadura de trompas o dispositivos intratubáricos.

Contraindicaciones: Posible embarazo

Enfermedad pélvica inflamatoria activa o sangrado uterino activo.

Alergia grave a los contrastes yodados (aunque se puede administrar una pauta de premedicación)

Requisitos previos: No es necesaria una preparación especial, aunque es aconsejable la administración de un antiinflamatorio no esteroideo 1h antes de la prueba.

Citación: Es importante realizar la prueba en la fase folicular del ciclo para tener un endometrio fino, para que sea más fácil la interpretación de las imágenes, ideal es entre el 7º y 12º día (contando a partir del primer día de la menstruación).

Material: ⟶ Solución antiséptica (povidona yodada o clarhexidina)

⟶ Catéter puede ser S. Floey o Sistema de vacío desechable.

⟶ Contraste yodado hidrosoluble 5-10ml de baja osmolaridad.

⟶ Espéculo

⟶ Pinzas pozzi para traccionar el cérvix si es necesario.

⟶ Medicación espasmolítica (buscapina 10mg).

Técnica: Tumbamos a la paciente en posición ginecológica y hacemos una RX de PELVIS.

Limpiamos la zona genital externa y localizamos el cuello uterino mediante tacto vaginal y se coloca el espéculo.

Después de purgar la sonda, se introduce por el orificio cervical externo. (si es necesario usamos las pinzas para ponerla).

Rellenamos el balón con aire, y retiramos el espéculo.

Empezamos a introducir el contraste a baja presión y controlando por fluoroscopio, generalmente son suficientes 5-10 ml.

Secuencia de imágenes:

Se obtienen 4 proyecciones básicas:

1. Postcontraste inicial, con ella podremos ver los defectos de repleción o alteraciones del controno uterino.
2. Postcontraste con distensión completa de la cavidad.
3. Visualización de ambos conductos tubáricos.
4. Paso del contraste a la cavidad peritoneal en cantidad suficiente por ambas trompas.
5. Una vez obtenidas las imágenes, se retira el catéter y se realiza una rx postevacuación para comprobar la distribución libre del contraste en la cavidad peritoneal.

Nota: Pueden ser necesarias proyecciones complementarias como:

1. Con tracción del cuello, en casos de marcada anteflexión o retroreflexión
2. Proyecciones oblicuas para desplegar el trayeco tubárico.
3. En decúbito lateral o prono en caso de no opacificarse una o ambas trompas.`;

if (typeof topics !== 'undefined') {
  topics[29] = { title: 'TEMA 29. HISTEROSALPINGOGRAFIA', content: topic29Content };
}

function renderTopic29() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[29];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic29Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic29Ready === '1') return;
  module4.dataset.topic29Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="29"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '29';
      card.innerHTML = `<span class="module-number">TEMA 29</span><h3>TEMA 29. HISTEROSALPINGOGRAFIA</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic29);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic29Card); else addTopic29Card();
