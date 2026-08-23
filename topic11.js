topics[11]={title:'TEMA 11. SISTEMAS DE INFORMACIÓN EN RADIOLOGÍA (RIS, PACS) Y SU COMUNICACIÓN CON EL RESTO DE SISTEMAS DE INFORMACIÓN SANITARIOS.',content:`TEMA 11. SISTEMAS DE INFORMACIÓN EN RADIOLOGÍA (RIS, PACS) Y SU COMUNICACIÓN CON EL RESTO DE SISTEMAS DE INFORMACIÓN SANITARIOS.

DEPARTAMENTO DE RADIOLOGÍA DIGITAL

Se basa en las imágenes digitales generadas por cualquier modalidad tanto de radiología simple como TAC, Reso, MN y modalidades de fusión, trabaja con PACS para Archivar/ Ver/ Manipular y Comunicar. La gestión de RIS es Agendar/Citar/Registrar procesos/Soporte al proceso informado y Gestión de materiales.

PACS

Los principales componentes son:

⟶ Servidor central

⟶ Sistema de archivo (corto, medio y largo plazo)

⟶ Modalidades que generan imágenes

⟶ Estaciones de diagnóstico y revisión

⟶ Red de transmisión de datos.

RIS

Gestiona toda la actividad del sistema de radiología, tanto de forma asistencial como administrativa y de gestión.

Debe ser: Completo/ Personalizado/ Robusto/ Flexible e integrado.`};

const previousRenderModuleTopics11=renderModuleTopics;
renderModuleTopics=function(moduleNumber){
  const result=previousRenderModuleTopics11(moduleNumber);
  if(moduleNumber!==2)return result;
  const moduleTopics=[6,7,8,9,10,11];
  return `<div class="topic-list">${moduleTopics.map(topicNumber=>`<button class="topic-card" type="button" data-topic="${topicNumber}"><span class="module-number">TEMA ${topicNumber}</span><h3>${topics[topicNumber].title}</h3><span class="module-action">Abrir material →</span></button>`).join('')}</div>`;
};
