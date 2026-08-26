// Banco curado del TEMA 7. Preguntas redactadas directamente a partir del contenido real del tema.
const topic7Curated = [
  ['¿Qué significa CR en radiología digital?', ['Radiografía Computarizada','Radiografía Convencional','Reconstrucción Computarizada','Radiografía de Contraste'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué soporte utiliza la radiografía computarizada (CR) para capturar la imagen?', ['Un soporte de imagen sensible a los rayos X dentro de un chasis','Un panel plano integrado exclusivamente en el tubo','Una película convencional sin soporte de imagen','Una gamma cámara'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué característica de profundidad de bits se indica para CR y DX en el tema?', ['12 bits','8 bits','16 bits','24 bits'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué diferencia básica se señala entre CR y DX?', ['En CR la captura se realiza mediante un soporte de imagen en un chasis, mientras que en DX el chasis es digital','CR utiliza resonancia magnética y DX rayos X','DX utiliza película y CR utiliza ultrasonidos','No existe ninguna diferencia entre ambos sistemas'], 0, 'TEMA 7', 'medio'],
  ['¿Qué modalidad corresponde a la fluoroscopia por rayos X?', ['RF','XA','MG','BD'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué dispositivos de captura puede utilizar la fluoroscopia digital (RF)?', ['Panel plano o intensificador','Únicamente película radiográfica','Solo una gamma cámara','Únicamente un transductor ecográfico'], 0, 'TEMA 7', 'medio'],
  ['¿Qué permite hacer la modalidad de fluoroscopia además de visualizar la imagen en pantalla?', ['Almacenarla y crear secuencias dinámicas','Convertirla en una imagen de medicina nuclear','Medir exclusivamente la densidad ósea','Generar únicamente imágenes estáticas'], 0, 'TEMA 7', 'medio'],
  ['¿Qué integra el arco en C utilizado en fluoroscopia?', ['El tubo y el dispositivo de captura','El tubo y la gamma cámara','La mesa y la consola únicamente','El transductor y el detector de densidad ósea'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modalidad se identifica con las siglas XA?', ['Angiografía Digital','Mamografía','Tomografía Computarizada','Medicina Nuclear'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué característica tiene el dispositivo de captura de la angiografía digital (XA)?', ['Es un panel plano digital de alta resolución','Es una película radiográfica convencional','Es un transductor de ultrasonidos','Es un detector de una gamma cámara'], 0, 'TEMA 7', 'medio'],
  ['¿Por qué las imágenes de angiografía digital son fundamentalmente secuencias dinámicas?', ['Porque se utilizan para estudios vasculares y para guiar procedimientos intervencionistas en tiempo real','Porque solo pueden almacenar una imagen','Porque estudian exclusivamente estructuras óseas','Porque no permiten revisar ni procesar las imágenes'], 0, 'TEMA 7', 'medio'],
  ['¿Cuál de los siguientes forma parte de los componentes de un sistema de angiografía digital?', ['Bombas inyectoras de contraste','Transductor ecográfico','Bobina de radiofrecuencia exclusivamente','Colimador de mamografía exclusivamente'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modalidad corresponde a la mamografía?', ['MG','MR','NM','PT'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué materiales pueden utilizarse en el ánodo del tubo de mamografía según el tema?', ['Molibdeno o rodio','Tungsteno o cobre exclusivamente','Plomo o aluminio','Hierro o níquel'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué elemento se utiliza para facilitar la correcta captura de la imagen mamográfica?', ['Palas de compresión','Gamma cámara','Gantry de TAC','Transductor Doppler'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modalidad utiliza un haz de radiación fino que gira en el plano axial?', ['CT (TAC)','MR','US','NM'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué obtienen los detectores de un equipo de TAC tras captar los rayos X que han atravesado el organismo?', ['Información volumétrica que se procesa y reconstruye','Únicamente una imagen plana sin posibilidad de reconstrucción','Información exclusivamente funcional','Una señal acústica'], 0, 'TEMA 7', 'medio'],
  ['¿Qué permite realizar el procesamiento de las imágenes de TAC?', ['Reconstrucciones en otros planos y estudios 3D, entre otras aplicaciones','Únicamente imágenes mamográficas','Solo mediciones de densidad ósea','Exclusivamente secuencias fluoroscópicas'], 0, 'TEMA 7', 'medio'],
  ['¿Cuál es uno de los componentes principales de un equipo de TAC?', ['Gantry','Gamma cámara','Palas de compresión mamográfica','Transductor'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué ocurre dentro del gantry de un equipo de TAC?', ['Giran el tubo y los detectores','Se introduce únicamente el contraste','Se procesa exclusivamente el informe radiológico','Se genera el campo magnético de una RM'], 0, 'TEMA 7', 'fácil'],
  ['¿Cómo se obtiene la imagen en resonancia magnética (MR) según el tema?', ['Analizando la respuesta de los tejidos a ondas electromagnéticas tras someter al paciente a una magnetización fija','Detectando exclusivamente radiación gamma','Midiendo únicamente la radiación X transmitida','Analizando el eco de ultrasonidos'], 0, 'TEMA 7', 'medio'],
  ['¿Para qué tipo de estudios destaca especialmente la utilidad clínica de la resonancia magnética?', ['Estudio de partes blandas','Estudio exclusivo de huesos','Estudio exclusivo de vasos mediante rayos X','Estudio exclusivo de densidad cálcica'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modalidad analiza la reflexión de un haz de ultrasonidos al atravesar los tejidos?', ['US (ecografía)','PT','BD','XA'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modo ecográfico proporciona una imagen anatómica de los tejidos?', ['Modo B','Modo A','Modo M','Modo D'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modo ecográfico permite detectar el flujo interno de los vasos sanguíneos?', ['Modo D (Doppler)','Modo B','Modo A','Modo M'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué evalúa principalmente la densitometría (BD)?', ['La densidad cálcica de los huesos','La actividad metabólica tumoral','La respuesta de los tejidos a ondas electromagnéticas','El flujo sanguíneo mediante ultrasonidos'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué utiliza la densitometría para valorar la densidad cálcica del hueso?', ['Rayos X de dos energías','Ondas de radiofrecuencia','Radiación gamma de un radioisótopo','Ultrasonidos de dos frecuencias'], 0, 'TEMA 7', 'medio'],
  ['¿Qué puntuación corresponde al adulto joven en la interpretación de la densitometría?', ['T-score','Z-score','D-score','M-score'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué puntuación corresponde al adulto ajustado en la interpretación de la densitometría?', ['Z-score','T-score','B-score','C-score'], 0, 'TEMA 7', 'fácil'],
  ['¿Cuál de las siguientes es una zona habitual de estudio en densitometría?', ['Columna lumbar','Pulmón exclusivamente','Tiroides exclusivamente','Cráneo exclusivamente'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué estudia la modalidad de Medicina Nuclear (NM)?', ['La distribución de un compuesto en el organismo mediante la detección de la radiación emitida por un isótopo radiactivo','La densidad cálcica mediante dos energías de rayos X','La reflexión de ultrasonidos en los tejidos','La respuesta de los tejidos a un campo magnético fijo'], 0, 'TEMA 7', 'medio'],
  ['¿Qué radionúclido se menciona como ejemplo en Medicina Nuclear?', ['Tecnecio 99 (Tc99)','Flúor 18 exclusivamente','Yodo 131 exclusivamente','Carbono 14'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué dispositivo detecta la radiación gamma emitida en Medicina Nuclear?', ['La gamma cámara','El gantry','El panel plano mamográfico','El transductor'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué modalidad corresponde a la Tomografía por Emisión de Positrones?', ['PT (PET)','NM','BD','RF'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué ocurre cuando un positrón se aniquila con un electrón en PET?', ['Se forman dos fotones que se liberan en sentidos opuestos','Se forma un único fotón','Se generan dos ondas de ultrasonidos','Se produce una imagen radiográfica directa'], 0, 'TEMA 7', 'medio'],
  ['¿Qué radiofármaco se menciona como ejemplo en PET?', ['18-fluorodesoxiglucosa (18-FDG)','Tecnecio 99','Gadolinio','Bario'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué indica una mayor cantidad de fotones liberados en el contexto de PET?', ['Una mayor actividad metabólica de la célula','Una menor actividad metabólica','Una mayor densidad cálcica','Un mayor flujo de ultrasonidos'], 0, 'TEMA 7', 'medio'],
  ['¿Qué caracteriza a la imagen final de PET según el tema?', ['La fusión de una imagen anatómica de TAC o RM con una imagen funcional','Una imagen exclusivamente anatómica de rayos X','Una imagen exclusivamente ecográfica','Una imagen únicamente de densidad ósea'], 0, 'TEMA 7', 'medio'],
  ['¿Cuál es uno de los usos fundamentales de PET?', ['Oncología para valorar la extensión tumoral','Únicamente mamografía','Únicamente densitometría','Únicamente radiografía convencional'], 0, 'TEMA 7', 'fácil'],
  ['¿Por qué surge la norma DICOM?', ['Por la necesidad de compatibilidad e interoperabilidad entre diferentes fabricantes','Para sustituir todos los sistemas de radiología por película','Para aumentar la dosis de radiación','Para eliminar los metadatos de las imágenes'], 0, 'TEMA 7', 'fácil'],
  ['¿Qué significa DICOM?', ['Imágenes y comunicaciones en medicina','Diagnóstico informatizado de comunicaciones médicas','Digitalización interna de comunicaciones ópticas médicas','Dispositivo integrado de control de operaciones médicas'], 0, 'TEMA 7', 'fácil'],
  ['¿Cuál de las siguientes es una función principal del estándar DICOM?', ['Transmisión y almacenamiento de objetos completos','Generación de rayos X','Producción de radiofármacos','Compresión física del paciente'], 0, 'TEMA 7', 'medio'],
  ['¿Qué principio de comunicación utiliza DICOM según el tema?', ['Cliente (SCU) / servidor (SCP)','Emisor / película','Tubo / paciente','Transductor / gantry'], 0, 'TEMA 7', 'medio'],
  ['En una transacción DICOM, ¿qué función corresponde al cliente (SCU)?', ['Solicitar qué acción realizar sobre el objeto','Ejecutar siempre físicamente la acción solicitada','Generar los rayos X','Almacenar exclusivamente la imagen en película'], 0, 'TEMA 7', 'medio'],
  ['¿Qué función corresponde al servidor (SCP) en el modelo DICOM descrito?', ['Ejecutar y llevar a cabo la acción solicitada por el cliente','Solicitar siempre la acción al cliente','Generar el campo magnético','Producir el contraste intravenoso'], 0, 'TEMA 7', 'medio'],
  ['¿Qué afirmación describe correctamente DICOM?', ['No es solo un formato de imagen, sino una sintaxis de transferencia para la comunicación entre equipos de radiología','Es únicamente un formato gráfico sin información adicional','Es un sistema de adquisición de rayos X','Es un protocolo exclusivo de resonancia magnética'], 0, 'TEMA 7', 'difícil'],
  ['¿Qué contiene un archivo DICOM además de los datos propios de la imagen?', ['Los metadatos de la imagen','Solo los valores de los píxeles','Únicamente el nombre del paciente','Exclusivamente la dosis administrada'], 0, 'TEMA 7', 'fácil'],
  ['¿Cuántos bytes ocupa el preámbulo de un archivo DICOM según el tema?', ['128 bytes','64 bytes','256 bytes','512 bytes'], 0, 'TEMA 7', 'medio'],
  ['¿Qué elemento del archivo DICOM identifica el data element?', ['TAG (etiqueta)','Value Length','Value Representation','Value'], 0, 'TEMA 7', 'medio'],
  ['¿Qué indica Value Representation (VR) en un archivo DICOM?', ['La forma de codificación del elemento de datos','La longitud del campo','El valor del elemento','La posición del píxel'], 0, 'TEMA 7', 'medio'],
  ['¿Qué indica Value Length en un archivo DICOM?', ['La longitud del campo','La forma de codificación','El valor del data element','El número de imágenes del estudio'], 0, 'TEMA 7', 'medio'],
  ['¿Qué representa Value en un data element DICOM?', ['El valor del elemento de datos','La etiqueta que lo identifica','La longitud del campo','El tipo de modalidad'], 0, 'TEMA 7', 'fácil']
];

// Sustituye únicamente la tarjeta del TEMA 7 que ya genera el sistema.
// No crea una segunda tarjeta ni modifica el motor de tests.
const topic7OriginalTopicMenu = topicMenu;
topicMenu = function(){
  topic7OriginalTopicMenu();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const buttons = [...cards.querySelectorAll('button.module-card')];
  const existing = buttons.find(btn => (btn.textContent || '').includes('TEMA 7'));
  if(existing){
    existing.onclick = () => session('TEMA 7', topic7Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 7</span><h3>${esc((topics[7]||{}).title||'TEMA 7')}</h3><p>${topic7Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 7', topic7Curated);
  cards.appendChild(button);
};
