// Test curado del TEMA 31 · RADIOLOGÍA CONVENCIONAL EN PORTÁTIL, UCI Y QUIRÓFANO
const topic31Curated = [
  ["La radiología portátil se utiliza principalmente para realizar exploraciones:", ["En cualquier sala de radiología convencional", "Fuera de una sala plomada, cuando el paciente no puede desplazarse", "Exclusivamente dentro de quirófano", "Solo en UCI"], 1, "TEMA 31", "medio"],
  ["¿Cuál es una indicación característica de la radiología portátil en la UCI?", ["Pacientes que pueden desplazarse sin dificultad", "Pacientes que necesitan únicamente estudios dentales", "Pacientes críticos que no pueden ser movilizados", "Pacientes que precisan exclusivamente mamografía"], 2, "TEMA 31", "medio"],
  ["En quirófano, la función principal de la radiología portátil es:", ["Realizar exclusivamente estudios preoperatorios", "Proporcionar control radiológico durante la intervención", "Sustituir siempre al ecógrafo", "Evitar cualquier procedimiento fluoroscópico"], 1, "TEMA 31", "medio"],
  ["Antes de introducir un chasis o detector en una habitación de aislamiento o en un entorno con exigencias higiénicas, lo adecuado es:", ["Dejarlo descubierto para evitar artefactos", "Cubrirlo con una bolsa protectora adecuada", "Sumergirlo en líquido desinfectante", "Utilizarlo sin protección si es digital"], 1, "TEMA 31", "medio"],
  ["¿Qué característica de la fluoroscopia pulsada contribuye a reducir la dosis respecto a una emisión continua equivalente?", ["Aumenta el número de imágenes por segundo", "Elimina la necesidad de colimar", "Emite radiación de forma intermitente", "Aumenta automáticamente el tamaño del campo"], 2, "TEMA 31", "difícil"],
  ["Durante una exploración con arco en C, la magnificación electrónica mediante el intensificador puede:", ["Eliminar la radiación dispersa", "Reducir siempre la dosis al paciente", "Incrementar la dosis necesaria", "Sustituir la colimación"], 2, "TEMA 31", "difícil"],
  ["El zoom digital de una imagen obtenida con un sistema digital:", ["Aumenta directamente la dosis al paciente", "Amplía la imagen sin aumentar por sí mismo la dosis", "Obliga a repetir la exposición", "Solo puede utilizarse en fluoroscopia"], 1, "TEMA 31", "difícil"],
  ["El arco en C es:", ["Un equipo fijo de radiología convencional", "Un equipo móvil de fluoroscopia", "Un detector portátil exclusivamente", "Un sistema de revelado automático"], 1, "TEMA 31", "medio"],
  ["En un arco en C convencional, el intensificador de imagen actúa como:", ["Generador de alta tensión", "Receptor de imagen", "Colimador", "Transformador"], 1, "TEMA 31", "medio"],
  ["El sistema automático de control de dosis de un equipo de fluoroscopia tiene como finalidad principal:", ["Regular la tasa de dosis a la entrada del paciente", "Determinar la posición del paciente", "Eliminar toda la radiación dispersa", "Aumentar siempre el tiempo de exposición"], 0, "TEMA 31", "difícil"],
  ["La proyección más habitual en una radiografía portátil de tórax es:", ["PA", "AP", "Lateral derecha", "Oblicua posterior"], 1, "TEMA 31", "medio"],
  ["En un paciente encamado, la posición más habitual para realizar una radiografía portátil de tórax es:", ["Bipedestación", "Decúbito prono", "Decúbito supino", "Sedestación obligatoria"], 2, "TEMA 31", "medio"],
  ["Si el estado clínico del paciente lo permite, para una radiografía portátil de tórax es preferible intentar:", ["Mantener siempre el decúbito supino", "La sedestación", "El decúbito prono", "La posición de Trendelenburg"], 1, "TEMA 31", "medio"],
  ["La sedestación, cuando es posible en una radiografía portátil de tórax, puede mejorar el estudio porque:", ["Elimina la necesidad de inspiración", "Favorece una representación más adecuada y evita ciertas diferencias morfológicas del decúbito", "Permite utilizar siempre menos colimación", "Hace innecesaria la distancia foco-paciente"], 1, "TEMA 31", "difícil"],
  ["Para una radiografía portátil de tórax, se solicita una inspiración profunda principalmente para:", ["Reducir el tamaño del mediastino", "Conseguir una mayor expansión pulmonar", "Aumentar la magnificación cardíaca", "Visualizar mejor el colon"], 1, "TEMA 31", "medio"],
  ["La distancia foco-paciente (DFP) recomendada para la radiografía portátil de tórax es aproximadamente:", ["50 cm", "100 cm", "150 cm", "180 cm"], 3, "TEMA 31", "difícil"],
  ["La proyección más habitual en la radiografía portátil de abdomen es:", ["AP", "PA", "Lateral", "Oblicua"], 0, "TEMA 31", "medio"],
  ["La posición más habitual para la radiografía portátil de abdomen es:", ["Decúbito supino", "Bipedestación", "Decúbito prono", "Sedestación"], 0, "TEMA 31", "medio"],
  ["La adquisición de la radiografía portátil de abdomen se realiza habitualmente:", ["Al final de la inspiración", "Al final de la espiración", "Durante una inspiración máxima mantenida", "Independientemente del ciclo respiratorio"], 1, "TEMA 31", "difícil"],
  ["En la radiografía portátil de abdomen, la flexión de las rodillas tiene como objetivo principal:", ["Aumentar la lordosis lumbar", "Relajar la musculatura abdominal", "Reducir la distancia foco-paciente", "Elevar el diafragma"], 1, "TEMA 31", "medio"],
  ["¿Por qué se recomienda colocar los brazos fuera del campo de irradiación en la radiografía portátil de abdomen?", ["Para aumentar la dosis", "Para evitar superposiciones sobre la imagen", "Para mejorar la inspiración", "Para reducir la distancia foco-paciente"], 1, "TEMA 31", "medio"],
  ["En el estudio lateral de tórax, una adquisición en inspiración puede ser especialmente útil para valorar:", ["Derrame pleural", "Cálculos renales", "Fracturas de coxis", "Sacroilíacas"], 0, "TEMA 31", "difícil"],
  ["En el estudio de tórax, una proyección lateral en espiración puede ayudar especialmente a demostrar:", ["Derrame pleural", "Neumotórax", "Escoliosis", "Litiasis vesicular"], 1, "TEMA 31", "difícil"],
  ["En un paciente inmovilizado con sospecha de neumoperitoneo, una técnica complementaria adecuada es:", ["Abdomen AP con rayo horizontal", "Abdomen PA en bipedestación obligatoria", "Tórax AP exclusivamente", "Abdomen en inspiración profunda exclusivamente"], 0, "TEMA 31", "difícil"],
  ["Durante una exploración portátil, la distancia mínima recomendada entre el técnico y el paciente durante la exposición es de aproximadamente:", ["50 cm", "1 m", "2 m", "5 m"], 2, "TEMA 31", "medio"],
  ["Antes de realizar una exposición portátil, una medida de protección fundamental es:", ["Avisar verbalmente antes del disparo", "Avisar solo después de la exposición", "Aumentar el campo irradiado", "Mantener al personal innecesario dentro de la habitación"], 0, "TEMA 31", "medio"],
  ["Respecto al personal presente durante una exposición portátil, la actuación correcta es:", ["Mantener a todo el personal en la sala", "Hacer que abandone la sala cuando sea posible o permanezca adecuadamente protegido si es imprescindible", "Situarlo junto al tubo", "Colocarlo siempre detrás del detector sin protección"], 1, "TEMA 31", "difícil"],
  ["La colimación en radiología portátil debe utilizarse para:", ["Irradiar un campo lo más amplio posible", "Limitar el campo al mínimo necesario para el estudio", "Aumentar la radiación dispersa", "Compensar una mala posición del paciente"], 1, "TEMA 31", "medio"],
  ["Para reducir la dosis en fluoroscopia, ¿qué combinación es más adecuada?", ["Aumentar el tiempo de escopia y usar fluoroscopia continua", "Reducir el tiempo de escopia y utilizar fluoroscopia pulsada", "Aumentar la magnificación electrónica y el tiempo", "Mantener siempre el intensificador alejado del paciente"], 1, "TEMA 31", "difícil"],
  ["Durante la utilización del arco en C, para optimizar la protección radiológica se recomienda colocar el intensificador:", ["Lo más alejado posible del paciente", "Lo más próximo posible al paciente", "Siempre fuera del quirófano", "A la altura de la cabeza del técnico"], 1, "TEMA 31", "difícil"],
  ["En la disposición habitual del arco en C, el tubo de rayos X debe situarse preferentemente:", ["Por encima del paciente", "Por debajo del paciente", "Siempre lateral al paciente", "Siempre detrás del cirujano"], 1, "TEMA 31", "difícil"],
  ["Cuando se realizan proyecciones oblicuas con fluoroscopia, una medida de protección adecuada es:", ["Acercarse al tubo", "Aumentar la distancia respecto al tubo", "Eliminar el delantal plomado", "Aumentar el tiempo de exposición"], 1, "TEMA 31", "difícil"],
  ["Durante una exposición radiológica, el técnico debe:", ["Manipular el equipo si es necesario para ganar tiempo", "Evitar manipular al paciente o el equipo durante la exposición", "Permanecer junto al tubo", "Aumentar el campo para no repetir"], 1, "TEMA 31", "medio"],
  ["En quirófano, una actuación correcta del técnico de radiología es:", ["Invadir el campo estéril para colocar el arco en C", "Evitar contaminar el campo estéril y utilizar la protección radiológica correspondiente", "Retirar la ropa quirúrgica para trabajar con mayor comodidad", "Colocar el monitor donde no pueda verlo el cirujano"], 1, "TEMA 31", "difícil"],
  ["Durante una intervención con arco en C, ¿qué conjunto de medidas ofrece una mejor protección radiológica?", ["Intensificador alejado, tubo arriba, fluoroscopia continua y muchas imágenes", "Intensificador próximo, tubo debajo del paciente, fluoroscopia pulsada, tiempo mínimo y número mínimo de imágenes", "Magnificación electrónica máxima y campo abierto", "Tubo próximo al personal y exposición prolongada"], 1, "TEMA 31", "difícil"]
];

window.topic31Curated = topic31Curated;

const previousTopicMenu31 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu31();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 31'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 31</span><h3>${esc((topics[31]||{}).title||'TEMA 31')}</h3><p>${topic31Curated.length} preguntas · portátil, UCI y quirófano</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 31', topic31Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 31</span><h3>${esc((topics[31]||{}).title||'TEMA 31')}</h3><p>${topic31Curated.length} preguntas · portátil, UCI y quirófano</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 31', topic31Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1]) > 31; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
