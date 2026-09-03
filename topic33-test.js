// Test curado del TEMA 33 · ESTUDIO RADIOLÓGICO DE LA MAMA, MX Y GALACTO MX
const topic33Curated = [
  ["¿Cuál es el objetivo principal de la mamografía?", ["Obtener imágenes de alta resolución y buen contraste para detectar patología mamaria", "Valorar exclusivamente la movilidad de la mama", "Estudiar únicamente los ganglios axilares", "Sustituir siempre a la ecografía"], 0, "TEMA 33", "fácil"],
  ["¿Entre qué costillas se extiende aproximadamente la mama según el material?", ["De la segunda a la séptima costilla", "De la primera a la cuarta costilla", "De la cuarta a la décima costilla", "De la séptima a la duodécima costilla"], 0, "TEMA 33", "medio"],
  ["¿Qué estructuras forman una especie de picos que unen el tejido mamario con la piel?", ["Los ligamentos de Cooper", "Los conductos galactóforos", "La fascia retromamaria", "Los músculos pectorales"], 0, "TEMA 33", "fácil"],
  ["¿Cuántos conductos mayores se abren aproximadamente en el pezón?", ["Entre 8 y 20", "Entre 1 y 4", "Entre 20 y 40", "Más de 50"], 0, "TEMA 33", "medio"],
  ["¿Qué sucede con la mama durante la involución asociada a la edad?", ["Disminuyen las células acinares y aumenta el componente fibrótico", "Aumentan siempre los acinos y disminuye la fibrosis", "Desaparecen todos los conductos", "Se transforma exclusivamente en tejido muscular"], 0, "TEMA 33", "medio"],
  ["¿Qué sistema de nomenclatura se utiliza habitualmente para identificar y localizar lesiones mamarias?", ["División en cuadrantes tomando el pezón como centro", "División en ocho segmentos sin referencia anatómica", "Clasificación exclusivamente por profundidad", "Numeración según el tamaño de la lesión"], 0, "TEMA 33", "fácil"],
  ["¿Qué materiales puede utilizar el ánodo del equipo de mamografía para favorecer un buen contraste?", ["Molibdeno o rodio", "Plomo o aluminio", "Cobre o hierro", "Selenio o silicio"], 0, "TEMA 33", "medio"],
  ["¿Qué tamaño de puntos focales se indica en el material para mamografía?", ["0,3 y 0,1 mm", "1 y 2 mm", "3 y 5 mm", "0,8 y 1,5 mm"], 0, "TEMA 33", "medio"],
  ["¿Cuál es una de las principales ventajas de una buena compresión mamaria?", ["Reduce la dosis y la borrosidad por movimiento", "Aumenta la radiación dispersa", "Disminuye la resolución espacial", "Hace innecesaria la correcta colocación"], 0, "TEMA 33", "fácil"],
  ["¿Qué efecto tiene la compresión sobre la resolución espacial en mamografía?", ["La mejora al disminuir las distancias entre los tejidos", "La empeora siempre", "No tiene ningún efecto", "La elimina por completo"], 0, "TEMA 33", "medio"],
  ["¿Cómo se realiza habitualmente la mamografía respecto a la posición de la paciente?", ["En bipedestación", "En decúbito supino", "En decúbito prono", "Siempre sentada"], 0, "TEMA 33", "fácil"],
  ["¿Qué característica debe tener una mamografía técnicamente adecuada respecto a las dos mamas?", ["Deben estar lo más simétricas posible y proyectar la mayor cantidad de tejido posible", "Una mama debe quedar siempre fuera del campo", "Solo debe incluirse el pezón", "La simetría no tiene importancia"], 0, "TEMA 33", "medio"],
  ["En la proyección OML de mamografía, ¿qué angulación del tubo se indica en el material?", ["45°", "15°", "30°", "90°"], 0, "TEMA 33", "fácil"],
  ["En la proyección OML, ¿qué estructura debe visualizarse cruzando la mitad superior de la placa?", ["El pectoral mayor", "El esternón", "La clavícula completa", "El dorsal ancho"], 0, "TEMA 33", "medio"],
  ["En la proyección CC, el tubo se coloca con el rayo:", ["Perpendicular al suelo", "A 45° respecto al suelo", "Paralelo al suelo", "Siempre a 20°"], 0, "TEMA 33", "fácil"],
  ["¿Qué debe incluir idealmente la proyección CC?", ["Todo el tejido fibroglandular", "Solo el cuadrante superior externo", "Únicamente la región retroareolar", "Solo la cola axilar"], 0, "TEMA 33", "medio"],
  ["¿Qué proyección adicional es útil para estudiar lesiones de la mitad lateral de la mama?", ["CC exagerada lateralmente", "Proyección valle", "LM", "Caudo craneal modificada"], 0, "TEMA 33", "fácil"],
  ["¿Para qué sirve especialmente la proyección de cola axilar o Cleopatra?", ["Para separar y visualizar mejor la cola axilar y localizar lesiones en ella", "Para estudiar exclusivamente el tejido medial", "Para sustituir siempre a la proyección CC", "Para visualizar únicamente el pezón"], 0, "TEMA 33", "medio"],
  ["En la proyección Cleopatra, ¿qué angulación del tubo se indica?", ["20° y paralelo a la cola axilar", "45° y perpendicular a la cola", "90° y paralelo al esternón", "10° y paralelo al suelo"], 0, "TEMA 33", "difícil"],
  ["¿Qué objetivo tiene la proyección valle?", ["Visualizar el tejido situado cerca del esternón", "Separar exclusivamente la cola axilar", "Estudiar la región posterior del hombro", "Valorar únicamente el pezón"], 0, "TEMA 33", "fácil"],
  ["¿Cuándo puede ser especialmente útil la proyección ML de 90°?", ["Cuando una lesión se ve en la OML pero no en la CC y se quiere comprobar si es real o una superposición", "Solo para estudiar el esternón", "Únicamente en pacientes con prótesis", "Para sustituir la compresión"], 0, "TEMA 33", "medio"],
  ["¿Qué proyecciones perpendiculares pueden ser necesarias para la colocación de un arpón?", ["Dos proyecciones perpendiculares entre sí", "Dos proyecciones idénticas", "Solo una proyección CC", "Solo una proyección OML"], 0, "TEMA 33", "medio"],
  ["¿Cuándo puede ser preferible una proyección LM frente a una ML?", ["Cuando existe una lesión en los tejidos mediales de la mama", "Cuando solo interesa la cola axilar", "Cuando se quiere evitar toda compresión", "Solo en la mama masculina"], 0, "TEMA 33", "medio"],
  ["¿En qué pacientes puede utilizarse especialmente la proyección caudo-craneal modificada?", ["Mujeres con mucha cifosis, mamas pequeñas y varones", "Solo mujeres jóvenes", "Solo pacientes con prótesis", "Exclusivamente pacientes en decúbito"], 0, "TEMA 33", "difícil"],
  ["¿Qué sistema se utiliza para estandarizar los hallazgos y los informes mamográficos?", ["BIRADS", "PACS", "DICOM", "RIS"], 0, "TEMA 33", "fácil"],
  ["¿Cuál es la lesión sólida más frecuente de la mama según el material?", ["Fibroadenoma", "Quiste", "Carcinoma ductal", "Mastopatía fibroquística"], 0, "TEMA 33", "medio"],
  ["¿Qué característica es típica de los quistes mamarios según el material?", ["Suelen verse como densidades redondeadas y bien definidas", "Siempre presentan márgenes espiculados", "Solo aparecen después de la menopausia", "Son siempre lesiones malignas"], 0, "TEMA 33", "medio"],
  ["¿Cuál es el tipo histológico de cáncer de mama más frecuente indicado en el material?", ["Carcinoma ductal", "Carcinoma lobulillar", "Enfermedad de Paget", "Fibroadenoma"], 0, "TEMA 33", "fácil"],
  ["¿Dónde puede situarse una prótesis mamaria en relación con el músculo pectoral?", ["Retroglandular o retropectoral", "Intracutánea o intraósea", "Subdérmica o intrapulmonar", "Exclusivamente retroesternal"], 0, "TEMA 33", "fácil"],
  ["¿En qué consiste básicamente la técnica de Eklund en pacientes con prótesis mamarias?", ["Desplazar la prótesis hacia atrás y traccionar el tejido mamario hacia delante", "Comprimir directamente la prótesis con máxima fuerza", "Retirar temporalmente la prótesis", "Evitar todas las proyecciones estándar"], 0, "TEMA 33", "medio"],
  ["¿Qué procedimiento permite obtener cilindros de tejido para el diagnóstico de una lesión mamaria?", ["BAG (biopsia con aguja gruesa)", "PAAF exclusivamente", "Galactografía", "Tomosíntesis"], 0, "TEMA 33", "fácil"],
  ["¿Qué técnica intervencionista mamaria se basa en el cálculo de coordenadas de la lesión?", ["Estereotaxia mediante mamografía", "Ecografía Doppler", "Galactografía", "Técnica de Eklund"], 0, "TEMA 33", "medio"],
  ["En la galactografía, ¿qué tipo de contraste se utiliza y cómo se obtienen las imágenes?", ["Contraste yodado hidrosoluble radiopaco, con proyecciones CC y lateral sin compresión", "Bario, con proyecciones OML y CC con compresión", "Gadolinio, únicamente en lateral", "Microburbujas, sin radiografía"], 0, "TEMA 33", "difícil"],
  ["¿Cuál es una indicación de la galactografía?", ["Secreción patológica por el pezón", "Dolor mamario inespecífico como única indicación", "Cualquier fibroadenoma conocido", "Cribado rutinario de todas las mujeres"], 0, "TEMA 33", "medio"]
];

window.topic33Curated = topic33Curated;

const previousTopicMenu33 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu33();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 33'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 33</span><h3>${esc((topics[33]||{}).title||'TEMA 33')}</h3><p>${topic33Curated.length} preguntas · mama, mamografía y galactografía</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 33', topic33Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 33</span><h3>${esc((topics[33]||{}).title||'TEMA 33')}</h3><p>${topic33Curated.length} preguntas · mama, mamografía y galactografía</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 33', topic33Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1]) > 33; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
