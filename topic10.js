topics[10]={title:'TEMA 10. INTEGRACIÓN DE LA IMAGEN DIGITAL EN EL PROCESO RADIOLÓGICO',content:`TEMA 10. INTEGRACIÓN DE LA IMAGEN DIGITAL EN EL PROCESO RADIOLÓGICO

DEFINICIÓN

Son una serie de actividades estructuradas que permiten obtener información con un valor añadido y así mejorar la atención al paciente.

PROCESO RADIOLÓGICO

1. Aplicación de la definición ⟶ Antes de poder hacer una radiografía, existe todo un proceso de actividades coordinadas, petición/ imagen (información de valor añadido) por consiguiente diagnóstico y tratamiento.

2. Ingeniería y reingeniería del proceso ⟶ INGENIERIA es la puesta en marcha del proceso, definiendo las acciones y los roles del personal, REINGENIERÍA es la actuación y modificación sobre el proceso ya definido.

**Muy necesario por la constante transformación, el paso de A/D, la aparición de RIS y PACS, etc.

2.1 Fases: ⟶ Análisis del sistema antiguo

⟶ Análisis del cambio tecnológico (Avances en las modalidades/Introducción de RIS/ Instalación de PACS/DICOM.)

⟶ Diseño del nuevo proceso

⟶ Gestión del cambio (Instalación y adecuación de los sistemas informáticos y el hardware asociado/ Introducción de datos maestros/ Plan de comunicación y formación/ Asegurarse del correcto funcionamiento de los sistemas.)

⟶ Evaluación y mejoras continuas`};

const previousRenderModuleTopics10=renderModuleTopics;
renderModuleTopics=function(moduleNumber){
  const result=previousRenderModuleTopics10(moduleNumber);
  if(moduleNumber!==2)return result;
  const moduleTopics=[6,7,8,9,10];
  return `<div class="topic-list">${moduleTopics.map(topicNumber=>`<button class="topic-card" type="button" data-topic="${topicNumber}"><span class="module-number">TEMA ${topicNumber}</span><h3>${topics[topicNumber].title}</h3><span class="module-action">Abrir material →</span></button>`).join('')}</div>`;
};
