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

const topics = {
  1: { title: 'TEMA 1. HISTORIA, INTRODUCCIÓN Y TÉCNICA RADIOGRÁFICA', content: `TEMA 1. HISTORIA, INTRODUCCIÓN Y TÉCNICA RADIOGRÁFICA\n\nINTRODUCCIÓN:\n\nRadiología es la especialidad médica que diagnóstica o trata una enfermedad, utilizando métodos de imágenes basadas en radiaciones ionizantes u otras fuentes de energía. El trabajo del técnico es obtener las imágenes adecuadas para la lectura posterior por parte del radiólogo, de la excelencia de ambos depende el resultado final.\n\nHISTORIA:\n\nlas investigaciones previas al descubrimiento de los Rx, se centraban en los estudios de la corriente eléctrica, a través de gases encerrados en tubos con distintos grados de vacío en su interior.\n\nLos primeros avances en la radiología se centraron en perfeccionar el generador de corriente eléctrica, el tubo y las placas, la inclinación del ánodo cambió 20º y finalmente, se ideó el ánodo giratorio para disminuir la superficie de impacto. A finales de los 70, llegó el estudio de RM aunque no en hospitales, en cuanto a antecedentes a los ultrasonidos (ECO) se menciona a Pierre Curie, cuyas primeras aplicaciones fueron para estudios militares como el sónar.\n\nCRONOLOGÍA:\n\n1845: Nace en Alemania W.C Röntgen.\n1895 (8/Nov): Descubre los RX\n1895 (22/Dic): 1ª radiografía a la mano de su mujer.\n1911: Marie Curie ⟶ Radio\n1913: Salomon ⟶ Mamografía\n1952: F.Bloch y Purcell ⟶ Fenómeno Resonancia Magnética\n1961 ⟶ Se regula en España (enfermeros especialistas en rayos)\n1972: 1er protocolo de TAC cerebral\n1973: Lauterbur y Ter-Pogossian ⟶ PET\n1977 ⟶ 1ª promoción de TECNICOS DE RAYOS\n1979: Hounsfield y Cormack ⟶ Imágenes de TAC\n1981 ⟶ Radiología\n1990 ⟶ TAC Helicoidal\n1995 ⟶ TSID\n2003: Lautebur y Mansfield ⟶ Imágenes de Resonancia Magnética\n2014 ⟶ TECNICO SUPERIOR EN IMAGEN PARA EL DIAGNÓSTICO Y MEDICINA NUCLEAR` },
  2: { title: 'TEMA 2. RAYOS X, GENERALIDADES', content: `TEMA 2. RAYOS X, GENERALIDADES\n\nINTRODUCCIÓN:\n\nÁTOMO\nEl átomo es la unidad básica de toda materia, su estructura se divide en:\nNÚCLEO ⟶ Formado por protones y neutrones ( con la misma carga)\nCORTEZA ⟶ Electrones (-), tienen 200 veces menos masa que un protón.\nEl diámetro de un átomo es de 10 elevado a -10 m.\nDenominamos “número atómico” (Z) a la cantidad de protones presentes en un elemento.\nCorteza Eléctrica ⟶ Los electrones que se encuentran en las capas más cerca del núcleo tienen una energía de ligadura mayor a los que están en las capas más externas del átomo. Cada electrón tiene una energía dependiendo de la capa en la que esté.\nCERCA DEL NÚCLEO ⟶ Poco energéticos, mucha ligadura.\nLEJOS DEL NÚCLEO ⟶ Muy energéticos, poca ligadura.\n\nTRANSICIONES ELECTRÓNICAS\nLos electrones de un átomo, pueden saltar de unas capas a otras, siempre que, no se sobrepase la cantidad de electrones asignada a la capa.\nEn estas transiciones, los electrones tienen que ganar energía (si “sube”) o perder energía (si “baja”).\n\nRADIACIÓN ELECTROMAGNÉTICA\nEs la emisión y transmisión de energía en forma de ONDA MAGNÉTICA, transformando la energía a través del espacio, en forma de vibración de campos eléctricos y magnéticos, y lo hace a la velocidad de la luz.\n\nABSORCIÓN Y EMISION DE ENERGÍA POR LOS ÁTOMOS ( EXCITACIÓN Y DESEXCITACIÓN )\nCuando se da energía a un átomo, alguno de los electrones que están en las capas más internas, pueden saltar a capas superiores ⟶ ÁTOMO EXCITADO.\n\nIONIZACIÓN: Cuando la energía que se da al átomo es más fuerte que la de ligadura del electrón, “arrancamos” el electrón del átomo. Dando como resultado un átomo con carga positiva por un lado, y un electrón con carga negativa por otro.\n\nRADIACIÓN DE FRENADO: Descubierto por Nicola Tesla, es otro fenómeno físico, involucrado en la generación de Rx. Se define como radiación electromagnética por la deceleración de una partícula cargada.\nEj: Un electrón, cuando se desvía “por culpa” de otra partícula cargada como el núcleo.\nA éste fenómeno también se lo llama “Free-Free radiation”, porque es producido por una partícula libre y cargada, antes y después de la aceleración que produce la emisión.\n\nPROCEDENCIA DE LOS Rx\nAlgunas transiciones electrónicas de las capas de fuera hacia dentro, llevan asociada la emisión de fotones de Rx.\nSegún la energía de desexcitación del átomo (energía que emite al pasar a estado Neutro), se tendrá como resultado una radiación electromagnética de una u otra naturaleza.\n⟶ Rayos Gamma\n⟶ Rayos X\n⟶ Ultravioleta...\n\nINTERACCIÓN CON LA MATERIA\nLos Rayos X, pueden atravesar cuerpos impermeables a la luz, aunque ésta propiedad es limitada, ya que los Rx se atenúan cuando atraviesan materia.\nUn principio general de la interacción de la radiación con su entorno, es que ésta suele acontecer con partículas o estructuras de tamaño cercanos a los de su longitud de onda.\nRayos de BAJA ENERGÍA ⟶ Interactúan con átomos enteros\nRayos de ENERGÍA MODERADA ⟶ Interactúan con los electrones.\nRayos de ALTA ENERGÍA ⟶ Interactúan con el núcleo del átomo.\n\nEFECTOS DE RADIACIÓN\nDISPERSIÓN COHERENTE / THOMSON\nNo vale la pena para el radiodiagnóstico, el fotón que incide, es reemitido con la misma energía pero desviado ligeramente\n\nEFECTO COMPTON\nEl fotón que incide, interacciona con los electrones más externos y lo arranca, perdiendo parte de su energía y variando su trayectoria.\nEl átomo se ioniza, y tanto el fotón incidente como el electrón arrancado pueden seguir ionizando, hasta que son absorbidos.\n\nEFECTO FOTOELÉCTRICO\nEl fotón incidente choca con los electrones más cercanos al núcleo es absorbido por el átomo arrancando un electrón que puede ir ionizando otros átomos hasta su absorción por otro átomo que también será ionizado.\n\nPRODUCCIÓN DE PARES\nUn fotón X con mucha energía, llega cerca del núcleo y sufre una “materialización” en un par de partículas (electrón y positrón), para ello es necesaria una energía mínima de 1.020 KeV\n\nDESINTEGRACIÓN FOTÓNICA\nEl núcleo absorbe el fotón que incide y se produce la emisión de un nucleón u otro fragmento nuclear, eso supone usar una energía superior a 10.000 KeV.\n\nNota:\n⟶ El E. Thomson y el E. Compton, son procesos de dispersión (el fotón que incide “sigue vivo”)\n⟶ El E.Fotoeléctrico, La Producción de Pares y La Desintegración Fotónica, son procesos de absorción del fotón incidente (el fotón que incide “desaparece”).\n** Para el uso de los Rx en medicina, sólo serán de interés el E. Thomson y el E. Fotoeléctrico\n\nATENUACIÓN DIFERENCIAL DE LOS Rx\n1.GEOMÉTRICO: La intensidad de la Radiación decrecerà con el inverso del cuadrado a la distancia entre el foco y el punto de medida. Es decir, alejarse 2 veces es dividir por 4 la intensidad radiactiva. “LEY DEL INVERSO DEL CUADRADO DE LA DISTANCIA”\n2.INTERACCIÓN: Cuando el Haz de Rx atraviesa un medio, sus fotones interaccionan con algún tipo de materia (gas, líquido, solido, aire). Los fotones desaparecen por procesos de absorción y lo que llega al receptor de imagen es aprox. el 1% de los Rx.\n\nFACTORES QUE INFLUYEN:\n⟶ Energía de Rx: + Energía - Atenuación / + Energía + Longitud de Onda / + Penetración - Atenuación\n⟶ Número Atómico (Z): + Nº + Atenuación.\n⟶ Densidad másica del medio: +Densidad + Atenuación\n\nPROPIEDADES DE LOS Rx\nPRINCIPALES:\n⟶ Son radiación electromagnética, van en línea recta a la velocidad de la luz, transportan energía y se atenúan con el inverso del cuadrado a la distancia.\n⟶ No tienen ni masa ni carga\n⟶ Radiación ionizante` },
  3: { title: 'TEMA 3. PRODUCCIÓN DE RAYOS X. GENERADORES Y TUBOS', content: `TEMA 3. PRODUCCIÓN DE RAYOS X. GENERADORES Y TUBOS\n\nSe trata de una ampolla de cristal en la que se realiza vacío, donde se generan los rayos X, sus partes son:\n\nCORAZA tiene dos funciones: PROTECCIÓN RADIOLÓGICA ( es de plomo y evita la radiación de fuga), PROTECCIÓN ELÉCTRICA ( aporta aislamiento eléctrico y además contiene aceite para refrigerar el tubo).\n\nAMPOLLA: Se encuentra dentro de la coraza, está hecha de cristal de PYREX, genera el vacío electrónico, sus partes más destacables son:\n⟶ Cátodo: Lado negativo del tubo tiene dos partes\n1. Filamento: Es una espiral de alambre de TUNGSTENO, de donde son “arrancados” los electrones con corriente\n2. Copa de Enfoque: Es un recipiente metálico que cubre el filamento y deja una apertura para que salgan los electrones ( se carga negativamente para repelerlos)\n⟶ Ánodo: Lado positivo del tubo, donde impactan los electrones del filamento. Existen ánodos estacionarios rotatorios y suelen estar fabricados de cobre.\n⟶ Funciones de la Ampolla: Es conductor eléctrico, proporciona soporte mecánico al blanco, deber ser buen conductor térmico.\n\nINTRODUCCIÓN\n\nMODALIDAD es la terminología actual para referirnos a cualquier equipo de radiodiagnóstico.\n\nPARTES COMUNES DE UN EQUIPO CONVENCIONAL DE RADIODIAGNÓSTICO:\n⟶ TUBO DE Rx: Emisor de la radiación que proporcionará la imagen\n⟶ GENERADOR ELÉCTRICO: Transformadores y rectificadores (armario eléctrico)\n⟶ SUSPENSIÓN DE TECHO: Carriles que permiten el desplazamiento del Tubo\n⟶ MESA DE EXPLORACIÓN: Para proyecciones en decúbito ( Bucky mesa)\n⟶ DISPOSITIVO MURAL: Para proyecciones en decúbito ( Bucky mural)\n⟶ COLIMADORES: Plomos móviles que permiten dar forma y tamaño al haz de Rx.\n\nTUBO DE RAYOS X\n\nDIFERENCIAS ENTRE ÁNODOS\n\nÁnodo Rotatorio: Aumenta el punto focal (blanco) donde impactan los electrones y el área de interacción es mayor.\n\nÁnodo Estacionario: Se Suelen usar en aparatos portátiles y en odontológicos.\n\nPunto Focal (área del blanco), casi todos los tubos de Rx, tienen dos puntos focales (fino/grueso), cuando más pequeño sea el punto focal, más nítidas y con mayor resolución serán las imágenes que se obtengan.\n\nSuele ser de tungsteno, por su alto nº atómico, su alta conductividad térmica y su punto de fusión alto (lo que evita que se funda)\n\nEFECTO TALÓN: Es una consecuencia del ángulo de construcción que se le da al ánodo. Se define como una falta de homogeneidad en el campo de Rx, en la dirección ánodo ⟶ cátodo. El Haz es más intenso en el cátodo, debido a la interacción de los electrones y los átomos de tungsteno pueden producir “profundidad” en el blanco.\n\nEs decir, los fotones que salen del ánodo, tienen que recorrer más distancia que los que salen del cátodo. Por tanto los fotones del ánodo serán menos intensos y estarán más filtrados.\n\nNormalmente es un efecto indeseado, pero lo usamos a nuestro favor en estudios como la MAMOGRAFÍA, para compensar las propias desigualdades de la estructura de la mama.\n\nGENERADOR DEL EQUIPO DE RX\n\nEs el conjunto de dispositivos eléctricos que permiten la comunicación con el tubo de Rayos X, éstos dispositivos, son variados y se dividen en 2 grandes áreas.\n\n1. Zona de Bajo Voltaje: Integrado en la consola, mide el voltaje de llegada a la unidad y lo ajusta a 220V, convierte la tensión en dos diferentes, una para el tubo y otra para el filamento ( con la selección de milis y kilos), y proporciona corriente al filamento para arrancar los electrones, los mA se refiere al nº de electrones que cruzan por segundo.\n\nEstá compuesta por: ⟶ compensación de línea\n⟶ Autotransformador\n⟶ Control de corriente\n\n2. Zona de Alto Voltaje: Alojada en armarios eléctricos especiales, esta compuesta por:\n⟶ (1)Transformador de Alta Tensión (kV)\n⟶ (2)Rectificador de Tensión\n\n(1) El AUTOTRANSFORMADOR, proporciona tal diferencia de potencial, que consigue que la señal de salida tenga el valor en kV exacto al que se ha seleccionado en la consola.\n\n(2) Los tubos de RX, sólo funcionan con corriente continua, dado que el flujo de electrones sólo puede ser en dirección ánodo ⟶ cátodo, es necesario rectificar la tensión secundaria del trafico de alta tensión. Haciendo una conversión de corriente alterna a corriente continua.\n\nTIPOS DE TENSIONES:\nNo Rectificada ⟶ Muy primitivo, el tubo hacía de rectificador, pero no rectificaba la Alta Tensión.\nRectificada de Media Onda ⟶ Uno o dos diodos dentro del circuito de Alta Tensión, evitan que la tensión negativa llegue al tubo, pero no evitan que la radiación (emisión) sea pulsada.\nRectificada de Onda Completa ⟶ 4 o más diodos, permiten invertir las partes negativas de la corriente de tensión alterna, con ellos se consigue que la emisión sea continua.\n\nNota:\n* Corriente alterna, los electrones circulan en viajes muy cortos de ida y vuelta, en lugar de recorrer el circuito completo.\n* La frecuencia de una corriente alterna, es igual al nº de veces por segundo que acontece la Ida y Vuelta de los electrones. Se mide en hercios (Hz), que equivales a veces/segundo o ciclos/segundo.\n\nEMISIÓN DE RX\n\nFÍSICA: Los electrones que van desde el cátodo al ánodo, constituyen la “corriente del tubo”, cuando chocan contra los átomos del metal del blanco, interaccionan y transfieren su energía cinética.\n\nConforme suceden esas interacciones, los electrones disminuyen su velocidad y quedan casi en reposo, el ánodo los conduce hacia el circuito eléctrico, para que vuelvan por el transformador de alta tensión al filamento del cátodo y cerrar el circuito.\n\nEstas interacciones dan lugar a emisiones de energía diferentes:\n\nEmisión de calor ⟶ Casi toda la energía cinética que generan los electrones proyectil, se convierte en calor (99%)\n\nEmisión de Radiación Característica ⟶ Un electrón proyectil, interactúa con un electrón de una capa interna del átomo, con tanta fuerza como para ionizar el átomo => RAD. CARACTERÍSTICA\n\nEl electrón de la capa K que se ioniza, deja un hueco que se ocupa con otro de una capa externa, el Tungsteno por sus características permite que el hueco que queda, pueda ser ocupado por un electrón de cualquiera de las capas más externas (no tiene porque ser la inmediata).\n\nLa “transición” entre capas, va acompañada de la emisión de fotones de Rx, de energía igual a la diferencia entre la energía de enlace del electrón en la capa de origen y la energía de la capa de destino.\n\nSólo los Rayos X característicos de la capa K, son útiles ya que tienen una energía media de 69KeV.\n\nEmisión de Radiación de Frenado (Espectro Continuo) ⟶ El electrón proyectil pasa lo suficientemente cerca del núcleo del átomo del blanco como para interactuar con él “ATRACCIÓN ELECTROSTÁTICA”, entonces el electrón se frena y se desvía de su trayectoria perdiendo energía cinética y creando un fotón de Rx. El rayo producido tendrá una energía entre 0 y 70 KeV, por tanto en diagnóstico casi todos los rayos serán generados por Radiación de Frenado.` }
};

const modulesContainer = document.getElementById('modules');
const moduleView = document.getElementById('module-view');
const moduleViewTitle = document.getElementById('module-view-title');
const moduleViewDesc = document.getElementById('module-view-desc');
const moduleViewContent = document.createElement('div');
moduleViewContent.className = 'module-topics';
moduleView.appendChild(moduleViewContent);

function renderModuleTopics(moduleNumber) {
  const moduleTopics = moduleNumber === 1 ? [1, 2, 3] : moduleNumber === 5 ? [35, 36, 37, 38, 39, 40] : [];
  if (!moduleTopics.length) return '<div class="coming-soon">📚 Los temas de este módulo se incorporarán aquí.</div>';
  return `<div class="topic-list">${moduleTopics.map(topicNumber => `
    <button class="topic-card" type="button" data-topic="${topicNumber}">
      <span class="module-number">TEMA ${topicNumber}</span>
      <h3>${topics[topicNumber].title}</h3>
      <span class="module-action">Abrir material →</span>
    </button>
  `).join('')}</div>`;
}

function showModule(moduleNumber) {
  const module = modules.find(m => m.n === moduleNumber);
  moduleViewTitle.textContent = `Módulo ${module.n} · ${module.title}`;
  moduleViewDesc.textContent = 'Selecciona un tema para acceder a su material de estudio.';
  moduleViewContent.innerHTML = renderModuleTopics(module.n);
  moduleView.hidden = false;
  moduleView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  moduleViewContent.querySelectorAll('.topic-card').forEach(topicCard => {
    topicCard.addEventListener('click', () => openTopic(Number(topicCard.dataset.topic), module.n));
  });
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
  card.addEventListener('click', () => showModule(Number(card.dataset.module)));
});

document.getElementById('close-module').addEventListener('click', () => {
  moduleView.hidden = true;
  document.getElementById('estudio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function openTopic(topicNumber, moduleNumber) {
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
  moduleViewContent.querySelector('.topic-back').addEventListener('click', () => showModule(moduleNumber));
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
