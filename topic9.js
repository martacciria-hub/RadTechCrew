topics[9]={title:'TEMA 9. FUNDAMENTOS DEL PROCESADO Y APLICACIONES BÁSICAS Y AVANZADAS',content:`TEMA 9 FUNDAMENTOS DEL PROCESADO Y APLICACIONES BÁSICAS Y AVANZADAS.

INTRODUCCIÓN

La radiografía digital, facilita y optimiza todos los procesos, permitiendo obtener imágenes con mayor capacidad diagnóstica.

VENTAJAS

1. Calidad de imagen y reducción de dosis: Mejora la calidad, reduce la dosis, ofrece mayor rango dinámico (permite valorar todas las estructuras) y disminuye la tasa de rechazo de imágenes por mala calidad.
2. Separación entre adquisición y presentación: Al separarlos, permite optimizarlos por separado y de forma independiente, lo que ayuda a que se complementen y no interfieran entre si. las herramientas del procesado permiten: Modificar contraste/Brillo, Manejar ventana/nivel, Realzar bordes, Hacer Zoom, Recortar, Invertir todos, etc.
3. Archivo Digital: Permite hacer duplicados perfectos, realiza copias de seguridad, permite transferir y consultar en remoto y posibilita el uso de la imagen en paralelo.
4. Desarrollo de aplicaciones adaptadas, como la sustracción dual, la detección asistida por ordenador, o la tomosíntesis.

CARACTERÍSTICAS DEL DETECTOR DIGITAL

⟶ Rango dinámico: El rango es la capacidad de detectar distintas densidades del organismo, el rango de exposición del que dispone es 4 veces mayo que el de la rx analógica. El rango se presenta en forma de “curva característica”, la cual representa la cantidad de Rx que atraviesan un tejido y la cantidad de señal obtenida por el detector.

⟶ Eficiencia de detección cuántica: Hay factores que condicionan la visibilidad de la estructura en la imagen digital. El tamaño y el Contraste con el fondo, son factores inherentes a la propia estructura, por tanto no son manipulables. El Ruido de la imagen en cambio es el factor fundamental para mejorar la visibilidad de una estructura, y depende de las características del propio detector.

DETECTOR: La magnitud que cuantifica la calidad de la DQE (relación entre el ruido que entra y el que sale del detector) viene determinada por la tecnología de construcción y por el tamaño del píxel, contra más pequeño es el píxel menos DQE y más ruido.

Por tanto el objetivo es llegar a un compromiso de resolución espacial (tamaño de píxel) y un ruido aceptables.

PROCESAMIENTO BÁSICO DE LA IMAGEN.

FASES:

Imagen ADQUIRIDA ⟶ Es la imagen tal cual sale del detector, para corregir deficiencias y corregir el propio desgaste del detector, se hacen una serie de procesos automáticos.

Imagen DICOM ⟶ Es la imagen “bruta” que se obtiene después de las correcciones de la adquirida.

Imagen DICOM para PRESENTACIÓN ⟶ es la imagen final ya procesada, lista para su visualización y archivo.

PROCESADOS DE LA IMAGEN DICOM (BRUTA)

1.Realce de contraste (ajuste del ancho y el nivel de la ventana): La imagen bruta es grisácea y con poco contraste, con aspecto plano y con poca información para diagnóstico. Para poder percibir toda la información, tenemos que “realzar” los tonos grises que nos interesan en cada momento (AJUSTE DE VENTANA)

⟶ VENTANA ⟶ el Nivel, determina el tipo de tejido mostrado en la imagen, y la Anchura determina la escala de grises.

· NIVEL ⟶ Los Niveles BAJOS corresponden a densidades como aire o grasa, los Niveles INTERMEDIOS se asocian a partes blandas y los Niveles ALTOS serán las densidades de huesos y metales.

· ANCHO ⟶ Las ventanas Anchas, ofrecen muchos grises y poco contraste. Mientras que las ventanas Estrechas, tienes menos grises y por tanto ofrecen mayor contraste.

2.Corrección de Sobreexposición: Si una imagen está sobreexpuesta, el procesado intenta compensarlo, aunque se puede generar una imagen con más ruido del habitual.

Para evitar ducha corrección, hay que tener en cuenta que puede obtenerse una imagen correcta, con menos dosis y evitar radiar al paciente de más sin necesidad.

3.Ecualización Tisular: Con ella, se intenta que es una misma imagen, se puedan diferenciar los tejidos con distintas densidades.

El equipo detecta automáticamente el tipo de tejido que hay en cada parte de la imagen y aplica procesados distintos para cada zona, así podemos ves la imagen en conjunto de la zona de estudio.

4.Realce de Bordes: Es útil para ver las interfaces entre las estructuras de diferente atenuación y permite valorar contornos y el tamaño de los objetos. TODO REALCE IMPLICA AUMENTO DE RUIDO.

5.Específicos para Mamografía: Usan algoritmos de reconstrucción capaces de detectar pequeñas diferencias de densidad de las estructuras de las partes blandas, ya que el rango de densidades es muy pequeño y es necesario acentuar las diferencias de los tejidos grasos/glandulares/Fibrosos/ Cálcio.

PROCESAMIENTO AVANZADO DE LA IMAGEN (DUAL)

Su objetivo es visualizar de forma diferenciada las estructuras de una parte del cuerpo basándose es sus diferencias de atenuación a los Rx.

BASES FÍSICAS ⟶ Se basa en que la atenuación de los rayos por parte de los tejidos depende de la energía de los fotones. Fotones de alta energía (+100kV “efecto compton” = poca diferencia de atenuación) Fotones de baja energía (“efecto fotoeléctrico” = mucha diferencia de atenuación).

Por eso, usando Rx de diferentes energías, podemos influir en la absorción y con el procesado informñatico, podemos ver las diferencias.

ENERGÍA DUAL DE DOBLE DISPARO ⟶ Un chasis especial con dos soportes de imagen separados por un filtro de cobre, cada uno de los soportes se procesa por separado. El soporte ANTERIOR aporta la imagen “normal” los Rx que recibe son de energía completa, al soporte POSTERIOR llegan los rayos de ALTA energía que se procesa para hueso, y para partes blandas. Al final tendremos 3 imágenes, la “normal” la imagen para valorar hueso, y la imagen para valorar partes blandas.

· PROCESO DE OBTENCIÓN DE LA IMAGEN:

1er. Disparo con una energía de 120 KeV. ⟶ Genera la imagen convencional

Pausa para que el detector vuelva al estado de reposo y se prepare

2do. Disparo con una energía de 60 KeV.

Se procesan las 2 imágenes obtenidas, la convencional la sacamos del primer disparo, las otras dos se obtienen de la imagen principal y son procesadas de distinto modo, para poder obtener las distintas valoraciones.

ENERGÍA DUAL EN MAMOGRAFÍA ⟶ Mamografías con contraste yodado, para detectar lesiones metabólicamente activas, mejorando la definición respecto a la mama normal, incluso en mamas muy densas. Gracias al yodo, que absorbe de forma diferente los RX, según sean de alta o baja energía.

1er. Dispraro (baja energía. 28/33kV) nos mostrará el parénquima mamario

2do. Dispraro (alta energía. 45/49kV) nos mostrará ekl parénquima y la captación del yodo

Con la combinación de estas dos imágenes obtenemos información exclusiva de las zonas de captación.

TOMOSINTESIS ⟶ Obteniendo planos tomográficos de una estructura, podemos aproximar a la imagen volumétrica de una estructura. Gracias a ella se pueden separar estructuras que en convencional aparecen superpuestas y en consecuencia mejorar su visualización.

Bases Físicas ⟶ Muchos disparos en distintos ángulos (de -15º a +15º)

Permite ⟶ obtener imágenes en múltiples planos y en diferentes grosores de corte y navegar fácilmente entre ellos.

Usos ⟶ Radiología Torácica y Mamografía.

· Tomo en CONVENCIONAL ⟶ Tórax (para diferencias estructuras y delimitar nódulos con mayor precisión)

⟶ Musculoesquelética (para valorar con mayor precisión el hueso)

⟶ Tomo en MAMOGRAFÍA ⟶ Mejora la detección de patologías

Tipos de Estudios de la mama : 2D ( estudio convencional 2 proyecciones CC + MLO)

3D ( estudio Tomografía 2 proyecciones CC + ML)

Combo ( Mamografía en CC + MLO y Tomo en ML)`};

const previousRenderModuleTopics9=renderModuleTopics;
renderModuleTopics=function(moduleNumber){
  const result=previousRenderModuleTopics9(moduleNumber);
  if(moduleNumber!==2)return result;
  const moduleTopics=[6,7,8,9];
  return `<div class="topic-list">${moduleTopics.map(topicNumber=>`<button class="topic-card" type="button" data-topic="${topicNumber}"><span class="module-number">TEMA ${topicNumber}</span><h3>${topics[topicNumber].title}</h3><span class="module-action">Abrir material →</span></button>`).join('')}</div>`;
};
