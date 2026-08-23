topics[8]={title:'TEMA 8. RADIOGRAFÍA SIMPLE Y MAMOGRAFÍA DIGITAL (DISPOSITIVOS DE CAPTURA)',content:`INTRODUCCIÓN

PRINCIPALES SISTEMAS DE CAPTURA:

1. SISTEMA CR: Fue el primer sistema desarrollado para la radiografía digital.

· Elementos principales: CHASIS ⟶ (convencional) aptos para cualquier equipo, se pueden usar tanto en bucky como en uso directo.

SOPORTE DE IMAGEN ⟶ Está dentro del chasis, necesita ser procesado por un lector después de ser expuesto a los rx.

LECTOR ⟶ Una vez disparada la placa, se coloca el chasis en el lector, que abre el chasis y saca el soporte de imagen, lo lee y extrae la información. Obteniendo la imagen digital NO procesada, la información inútil se borra. El chasis se a cargar con un soporte virgen. (30\"/45\")

ARCHIVO BRUTO ⟶ Se procesa en la estación de trabajo, que procesa la imagen con filtros y algoritmos de reconstrucción hasta ofrecer la imagen diagnóstica. La imagen, se podrá ver, archivar, transmitir, imprimir, etc

· Principios básicos para obtener la imagen:

⟶ La CAPTURA se basa en compuestos químicos capaces de reaccionar ante la energía de los Rx, el FLUOROBROMURO DE BARIO es el compuesto más usado porque al ser irradiado por el haz de fotones absorbe parte de su energía, aumentando la suya propia. Cuando la luz láser del lector los ilumina, liberan la “energía de más” en forma de luz ultravioleta => LUMINISCENCIA FOTOESTIMULADA.

⟶ LECTURA del soporte de imagen: La luz láser lo recorre, y este libera la luz ultravioleta. El fotomultiplicador, recoge esa luz UV, que es proporcional a la radiación recibida.

Una vez recogida toda la información, se pasa a un conversor analógico/digital, que pasa la info. de luz a números. Después de leerlo, el soporte se borra exponiéndolo a luz blanca intensa, se vuelve a colocar en el chasis y ya está listo para volverlo a usar.

Procesado Digital:

Se realiza en la estación de trabajo, que contiene todo el software de análisis y transformación de imágenes, además de todos los sistemas de identificación de pacientes, lista de trabajo y los sistemas de comunicaciones DICOM.

TEMA 8 RADIOGRAFÍA SIMPLE Y MAMOGRAFÍA DIGITAL (DISPOSITIVOS DE CAPTURA).

2. SISTEMA DX: Se caracteriza por usar en un mismo dispositivo (chasis), el material de captura de Rx y la electrónica de lectura (“FLAT PANEL”). Realiza todo el proceso en tiempo real, después de la exposición, en pocos segundos se obtiene la imagen digital lista para ser procesada.

TECNOLOGÍAS DE CAPTURA:

1. Captura directa ⟶ la radiación se transforma directamente en una señal eléctrica.

· Componentes: Capa de selenio amorfo (captura los Rx), Capa Matriz de condensadores y transistores (tft) (cada conjunto forma la imagen de 1 píxel), Base de cristal (sobre la que se colocan el resto de componentes y sirve de soporte y aislamiento) y el conversor A/D (que transforma la carga eléctrica de la matriz a una magnitud digital y la transmite para su procesado.

· Proceso de captura: Los fotones inciden en el selenio, entre las dos caras de esta capa se establece una diferencia de potencias de 10.000 V, para la radiografía convencional. Esa diferencia de potencial se trasfiere a la matriz y después se encuentra con el conversor.

2. Captura Indirecta ⟶ Para obtener la imagen, los fotones de Rx, se tienen que convertir en fotones de luz y después ser detectados y transformados en carga eléctrica por el sistema.

· Componentes: Centelleador de yoduro de cesio y oxisulfuro de gadolinio, matriz (en lugar de condensadores tiene fotodiodos de silicio amorfo, base de cristal y conversor A/D.

· Proceso de captura: Los fotones inciden en el centelleador, produciendo luz que es absorbida por los fotodiodos de la matriz y pasa al transistor (imagen brutal) que lo lleva al conversor A/D y nos ofrece la imagen final.

3. Paneles planos (Flat-Panel) ⟶

· Paneles integrados: El panel está incluido en la mesa o en el dispositivo mural, el tubo se sincroniza con el detector.

· Paneles portátiles: El panel es móvil y se conecta al procesador mediante cable.

· Casete inalámbrico: Tiene un tamaño estándar que permite su uso tanto en los bucky como en disparo libre, llevan batería recargable y un sistema de transmisión de datos inalámbrico.

· Usos: ⟶ Radiografía general de todo tipo
⟶ Radiología Vascular
⟶ Mamografía ( con modificaciones específicas para mejorar la resolución espacial).

3.SISTEMA DDC: Se usa principalmente en sistemas con intensificadores de imagen, estos sistemas obtienen una resolución espacial de entre 512x512 y 1024x1024 píxeles.

· Componentes: Material centelleador, Panel CCD (formado por pequeñas celdas, sensibles a la luz generada por el cetelleador, se ocupa de recibir la luz y generar una carga), conversos A/D (que recoge la carga de cada celda y la transforma en magnitud digital.

· Usos: En sistemas de radioscopia/radiografía Ej: Telemando, arco quirúrgico
En Rx de pequeñas estructuras Ej: Dental/Maxilo, o animales.
En Mx, solo para localizaciones de zonas de biopsia.

4.SISTEMAS ADAPTADOS PARA MAMOGRAFÍA DIGITAL: Deban cumplir unos requisitos especiales, para mejorar la resolución espacial y el contraste para que la calidad de la imagen sea óptima.

· Tecnologías principales: Sistemas CR/DX/DX de captura directa y acoplamiento óptico/ Recuento de fotones`};

const previousRenderModuleTopics8=renderModuleTopics;
renderModuleTopics=function(moduleNumber){
  const result=previousRenderModuleTopics8(moduleNumber);
  if(moduleNumber!==2)return result;
  const moduleTopics=[6,7,8];
  return `<div class="topic-list">${moduleTopics.map(topicNumber=>`<button class="topic-card" type="button" data-topic="${topicNumber}"><span class="module-number">TEMA ${topicNumber}</span><h3>${topics[topicNumber].title}</h3><span class="module-action">Abrir material →</span></button>`).join('')}</div>`;
};
