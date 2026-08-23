topics[6]={title:'TEMA 6. INTRODUCCIÓN A LA IMAGEN DIGITAL',content:`TEMA 6 INTRODUCCIÓN A LA IMAGEN DIGITAL

INTRODUCCIÓN

Ya sabemos que para obtener imágenes disponemos de diferentes técnicas Radiaciones Ionizantes/Ondas de Radiofrecuencia/ Ultrasonidos...

En los inicios las imágenes eran analógicas y se necesitaba un fluoroscopio para poder visualizarlas, con el tiempo aparecieron otras modalidades en las que el proceso era electrónico como la ECO, o por ordenador como el TAC y la RESO. Con ellas se inició la digitalización, produciendo la aparición, el desarrollo y perfeccionamiento de los sistemas de informática en diagnóstico por imagen, que permiten SISTEMIZAR, ORGANIZAR y GESTIONAR (Ris y PACS) la ingente cantidad de imágenes producidas.

IMAGEN ANALÓGICA E IMAGEN DIGITAL

TERMINOLOGÍA BÁSICA (leguaje informático)

Bit ⟶ (binary digit) es la unidad básica de información

Byte ⟶ (B) es la unidad básica de almacenamiento de información, es una secuencia de 8 bits.

Píxel ⟶ (elemento de imagen) es la unidad más pequeña de color homogéneo en una imagen.

Profundidad de color ⟶ Indica el número de colores diferentes puede tener un píxel (se indica en bits)

Matriz ⟶ Es el número total de píxel de una imagen

Resolución ⟶ Es la densidad de píxeles por unidad de superficie => Pixeles por pulgada (ppi)

DIFERENCIAS ENTRE ANALÓGICA Y DIGITAL

ANALÓGICA: Los Rx impresionan la placa después de atravesar al paciente.

DIGITAL: Los Rx, se recogen y cuantifican a la llegada a cada pixel y se les da un valor numérico. Como resultado tenemos un archivo electrónico en el que están cuantificados los valores de color de cada píxel.`};

const previousRenderModuleTopics6=renderModuleTopics;
renderModuleTopics=function(moduleNumber){
  const result=previousRenderModuleTopics6(moduleNumber);
  if(moduleNumber!==2)return result;
  const moduleTopics=[6];
  return `<div class="topic-list">${moduleTopics.map(topicNumber=>`<button class="topic-card" type="button" data-topic="${topicNumber}"><span class="module-number">TEMA ${topicNumber}</span><h3>${topics[topicNumber].title}</h3><span class="module-action">Abrir material →</span></button>`).join('')}</div>`;
};
