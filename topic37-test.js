// Test curado del TEMA 37 · EXPLORACIÓN DE HÍGADO, VÍA BILIAR, PÁNCREAS Y BAZO
const topic37Curated = [
  ["En una ecografía abdominal completa, además del abdomen superior, se debe explorar la pelvis principalmente para:", ["Valorar exclusivamente la vejiga urinaria", "Descartar la presencia de líquido libre", "Medir el tamaño prostático", "Valorar únicamente el colon"], 1, "TEMA 37", "medio"],
  ["Como norma general en la exploración ecográfica abdominal, los órganos deben estudiarse:", ["Exclusivamente en un plano transversal", "En un único eje para evitar artefactos", "Al menos en dos ejes, utilizando diferentes angulaciones del transductor cuando sea necesario", "Únicamente mediante Doppler"], 2, "TEMA 37", "medio"],
  ["¿Cuál es la posición habitual del paciente durante una ecografía abdominal?", ["Decúbito prono permanente", "Decúbito supino, realizando cambios laterales cuando sea necesario", "Sedestación obligatoria", "Bipedestación"], 1, "TEMA 37", "fácil"],
  ["¿Por qué pueden solicitarse inspiraciones profundas y mantenidas durante la exploración abdominal?", ["Para aumentar la frecuencia del transductor", "Para evitar la interposición de los arcos costales y disminuir el movimiento respiratorio de los órganos", "Para producir una mayor atenuación del haz", "Para provocar el vaciamiento de la vesícula"], 1, "TEMA 37", "medio"],
  ["¿Cuál es la preparación estrictamente necesaria para el estudio ecográfico de la vesícula biliar?", ["Beber 1 litro de agua inmediatamente antes", "Ayuno de 6 horas", "Dieta rica en grasas previamente", "Ayuno de 24 horas"], 1, "TEMA 37", "fácil"],
  ["El ayuno previo al estudio de la vesícula biliar tiene como finalidad principal:", ["Reducir el tamaño de la vesícula", "Limitar el aire gastrointestinal y favorecer la distensión vesicular", "Aumentar el flujo portal", "Vaciar completamente el estómago"], 1, "TEMA 37", "medio"],
  ["Para una exploración abdominal general, el transductor recomendado habitualmente es:", ["Lineal de muy alta frecuencia exclusivamente", "Convexo de frecuencia media", "Sectorial de frecuencia extremadamente baja exclusivamente", "Intracavitario"], 1, "TEMA 37", "fácil"],
  ["En un paciente muy delgado, ¿qué puede resultar especialmente útil para estudiar determinadas estructuras?", ["Una sonda lineal de alta frecuencia", "Una sonda de baja frecuencia exclusivamente", "Eliminar el gel acústico", "Utilizar únicamente Doppler pulsado"], 0, "TEMA 37", "medio"],
  ["¿Cuál de las siguientes constituye una limitación habitual de la ecografía abdominal?", ["La obesidad", "La ausencia de radiación ionizante", "La disponibilidad del equipo", "La posibilidad de realizar cambios de posición"], 0, "TEMA 37", "fácil"],
  ["Respecto a las contraindicaciones de la ecografía abdominal:", ["Existen numerosas contraindicaciones absolutas", "Está contraindicada en pacientes obesos", "No existen contraindicaciones absolutas para realizar una ecografía", "Está contraindicada si el paciente no puede realizar una inspiración profunda"], 2, "TEMA 37", "medio"],
  ["El hígado se localiza fundamentalmente:", ["En el hipocondrio izquierdo y epigastrio", "En el hipocondrio derecho y epigastrio", "Exclusivamente en la pelvis", "En el retroperitoneo izquierdo"], 1, "TEMA 37", "fácil"],
  ["La ecogenicidad normal del parénquima hepático se describe como:", ["Anecoica y homogénea", "Homogénea, similar a la corteza renal y menor que la del bazo", "Siempre hiperecogénica respecto al bazo", "Heterogénea por definición"], 1, "TEMA 37", "medio"],
  ["¿Cuál de las siguientes estructuras hepáticas aparece habitualmente como lineal e hiperecogénica?", ["Las ramas portales", "Los ligamentos hepáticos", "Las venas suprahepáticas", "Las ramas arteriales"], 1, "TEMA 37", "medio"],
  ["En condiciones basales, el diámetro de la vena porta:", ["No debe superar aproximadamente los 12 mm", "Debe ser siempre superior a 15 mm", "No debe superar los 5 mm", "No presenta variaciones con la respiración"], 0, "TEMA 37", "medio"],
  ["Respecto a la vena porta, señale la afirmación correcta:", ["Presenta flujo hepatófugo en condiciones normales", "Presenta flujo hepatópeto hacia el hígado", "Presenta siempre flujo arterial pulsátil", "No puede estudiarse mediante Doppler"], 1, "TEMA 37", "fácil"],
  ["El flujo normal de la vena porta se caracteriza por ser:", ["Monofásico, con ligeras variaciones respiratorias y cardíacas", "Siempre trifásico", "Pulsátil de alta resistencia", "Ausente durante la inspiración"], 0, "TEMA 37", "medio"],
  ["Las venas suprahepáticas se diferencian habitualmente de las ramas portales porque:", ["Las venas suprahepáticas presentan un borde hiperecogénico muy marcado", "Las venas suprahepáticas carecen habitualmente de borde hiperecogénico", "Las ramas portales no presentan trayecto vascular", "Las venas suprahepáticas siempre tienen flujo hepatópeto monofásico"], 1, "TEMA 37", "difícil"],
  ["La tríada portal está formada por:", ["Vena porta, arteria hepática y vía biliar", "Vena cava, arteria hepática y vena esplénica", "Vena porta, venas suprahepáticas y vía biliar", "Arteria hepática, vena cava y conducto pancreático"], 0, "TEMA 37", "fácil"],
  ["En el estudio Doppler de la arteria hepática, ¿qué característica es esperable?", ["Flujo arterial pulsátil y de baja resistencia", "Flujo venoso monofásico hepatópeto", "Flujo trifásico propio de las venas suprahepáticas", "Ausencia de flujo detectable en condiciones normales"], 0, "TEMA 37", "medio"],
  ["¿Por qué puede ser recomendable comenzar con Doppler color para localizar la arteria hepática?", ["Porque es una estructura de pequeño tamaño y tortuosa, difícil de localizar directamente con Doppler pulsado", "Porque carece de flujo sanguíneo", "Porque únicamente puede estudiarse mediante Doppler color", "Porque presenta flujo hepatófugo"], 0, "TEMA 37", "difícil"],
  ["Según la anatomía funcional de Couinaud, el hígado se divide en:", ["4 segmentos sin subdivisiones", "8 segmentos funcionales", "10 segmentos exclusivamente arteriales", "12 segmentos independientes"], 1, "TEMA 37", "medio"],
  ["El segmento I o lóbulo caudado se caracteriza por:", ["Situarse por delante del hilio hepático y recibir únicamente vascularización derecha", "Situarse por detrás del hilio, entre la porta y la cava inferior, y recibir vascularización de ramas derechas e izquierdas", "Ser exclusivamente parte del lóbulo izquierdo", "No recibir ramas de la tríada portal"], 1, "TEMA 37", "difícil"],
  ["Una lesión hepática focal se caracteriza por:", ["Afectar obligatoriamente a todo el hígado", "Presentar una alteración de la ecogenicidad respecto al parénquima adyacente y poder producir efecto de masa", "Ser siempre anecogénica", "Ser necesariamente maligna"], 1, "TEMA 37", "medio"],
  ["¿Cuál de las siguientes características corresponde a una lesión hepática quística?", ["Siempre es hiperecogénica y sin refuerzo posterior", "Es anecogénica, bien definida y puede presentar refuerzo posterior y lateral", "Siempre presenta calcificaciones", "Siempre es isoecogénica respecto al hígado"], 1, "TEMA 37", "medio"],
  ["Para valorar adecuadamente el grosor de la pared vesicular, la vesícula debe estar:", ["Contraída y estudiarse exclusivamente en transversal", "Distendida y medirse en un corte longitudinal", "Llena de aire", "Estudiarse únicamente mediante Doppler"], 1, "TEMA 37", "medio"],
  ["¿Cuál es el grosor normal de la pared de la vesícula biliar?", ["Inferior a 1 mm", "Inferior a 3 mm", "Inferior a 5 mm", "Inferior a 10 mm"], 1, "TEMA 37", "fácil"],
  ["¿Cuál de las siguientes características permite diferenciar una colelitiasis de un pólipo vesicular?", ["La litiasis suele ser móvil y producir sombra posterior, mientras que el pólipo suele estar anclado a la pared y no produce sombra", "La litiasis está siempre anclada a la pared y el pólipo es móvil", "Ambos son siempre anecogénicos", "Ambos producen sombra posterior"], 0, "TEMA 37", "medio"],
  ["El barro biliar se caracteriza por:", ["Ser más ecogénico que las litiasis y producir siempre sombra", "Presentar menor ecogenicidad que las litiasis, no producir sombra y desplazarse lentamente con el paciente", "Estar siempre adherido a la pared", "Ser completamente anecogénico"], 1, "TEMA 37", "difícil"],
  ["¿Cuál de los siguientes hallazgos es compatible con colecistitis aguda?", ["Pared vesicular inferior a 3 mm y ausencia de dolor", "Colelitiasis, Murphy ecográfico positivo, dilatación vesicular y engrosamiento de la pared", "Únicamente presencia de pólipos", "Vesícula contraída con pared irregular como único hallazgo"], 1, "TEMA 37", "medio"],
  ["El conducto hepático común presenta normalmente un diámetro aproximado de:", ["2 mm", "4 mm", "6 mm", "12 mm"], 2, "TEMA 37", "fácil"],
  ["En pacientes de edad avanzada, ¿qué diámetro puede alcanzar la vía biliar extrahepática sin que necesariamente implique una dilatación patológica?", ["8-9 mm", "2-3 mm", "15-18 mm", "20-25 mm"], 0, "TEMA 37", "difícil"],
  ["¿Qué hallazgo define la coledocolitiasis?", ["La presencia de cálculos en la vía biliar", "La presencia de aire en el árbol biliar", "La inflamación aislada del páncreas", "La ausencia congénita de la vesícula"], 0, "TEMA 37", "fácil"],
  ["¿Qué situación puede dificultar especialmente la valoración ecográfica de la vía biliar extrahepática?", ["La interposición de aire duodenal", "La presencia de líquido libre exclusivamente", "La ausencia de tejido adiposo", "La inspiración profunda mantenida"], 0, "TEMA 37", "medio"],
  ["¿Cuál es una de las principales utilidades del Doppler durante el estudio de una posible dilatación de la vía biliar?", ["Diferenciar estructuras vasculares de los conductos biliares", "Medir directamente la cantidad de bilis almacenada", "Identificar exclusivamente cálculos vesiculares", "Sustituir por completo el estudio ecográfico convencional"], 0, "TEMA 37", "medio"],
  ["¿Cuál de las siguientes maniobras puede ayudar a visualizar el páncreas cuando existe interposición de gas?", ["Mantener siempre al paciente inmóvil en decúbito supino", "Utilizar el lóbulo hepático izquierdo o el bazo como ventana acústica y modificar la posición del paciente", "Eliminar el gel de contacto", "Evitar cualquier cambio respiratorio"], 1, "TEMA 37", "medio"],
  ["Respecto al conducto pancreático principal o de Wirsung:", ["Su calibre normal debe superar los 5 mm", "Sigue el eje longitudinal del páncreas y normalmente no debe superar aproximadamente los 2 mm en el cuerpo", "Solo puede visualizarse en la cola", "No puede visualizarse ecográficamente"], 1, "TEMA 37", "medio"],
  ["¿Cuál de las siguientes asociaciones es correcta respecto a la pancreatitis?", ["Pancreatitis aguda grave — aumento de la glándula e hipoecogenicidad por edema", "Pancreatitis crónica — páncreas siempre anecoico", "Pancreatitis aguda — calcificaciones como hallazgo característico principal", "Pancreatitis crónica — ausencia de alteraciones del conducto de Wirsung"], 0, "TEMA 37", "difícil"],
  ["¿Cuál de las siguientes afirmaciones sobre el bazo es CORRECTA?", ["Se localiza en el hipocondrio derecho y se estudia habitualmente mediante una aproximación anterior", "Se localiza en el hipocondrio izquierdo, suele requerir una aproximación lateral y su diámetro longitudinal normal es de 13 cm o menos", "Se estudia mejor realizando inspiraciones profundas mantenidas en todos los casos", "Su diámetro normal siempre supera los 15 cm"], 1, "TEMA 37", "medio"]
];

window.topic37Curated = topic37Curated;

const previousTopicMenu37 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu37();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 37'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 37</span><h3>${esc((topics[37]||{}).title||'TEMA 37')}</h3><p>${topic37Curated.length} preguntas · hígado, vía biliar, páncreas y bazo</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 37', topic37Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 37</span><h3>${esc((topics[37]||{}).title||'TEMA 37')}</h3><p>${topic37Curated.length} preguntas · hígado, vía biliar, páncreas y bazo</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 37', topic37Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1]) > 37; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
