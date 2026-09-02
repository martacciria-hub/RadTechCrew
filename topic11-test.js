// Banco curado del TEMA 11.
const topic11Curated = [
  ['¿En qué se basa el Departamento de Radiología Digital?',['Exclusivamente en las imágenes obtenidas mediante radiología convencional.','En las imágenes digitales generadas por las diferentes modalidades de imagen.','Únicamente en los sistemas de gestión administrativa.','Exclusivamente en los sistemas de archivo de imágenes.'],1,'TEMA 11','fácil'],
  ['¿Qué modalidades pueden generar imágenes digitales gestionadas en un Departamento de Radiología Digital?',['Solo radiología simple y TAC.','Solo TAC y resonancia magnética.','Radiología simple, TAC, resonancia, medicina nuclear y modalidades de fusión.','Exclusivamente modalidades de radiología convencional.'],2,'TEMA 11','fácil'],
  ['¿Cuál es una de las funciones principales del PACS?',['Gestionar las citas de los pacientes.','Archivar, visualizar, manipular y comunicar imágenes.','Gestionar exclusivamente el material sanitario.','Realizar la administración económica del servicio.'],1,'TEMA 11','fácil'],
  ['¿Cuál de las siguientes actividades corresponde principalmente al RIS?',['Archivar las imágenes a largo plazo.','Manipular las imágenes obtenidas por las modalidades.','Agendar y citar a los pacientes.','Generar directamente las imágenes radiológicas.'],2,'TEMA 11','fácil'],
  ['¿Qué sistema se encarga de gestionar toda la actividad del sistema de radiología, tanto asistencial como administrativa y de gestión?',['PACS.','RIS.','Servidor central de imágenes.','Estación de diagnóstico.'],1,'TEMA 11','fácil'],
  ['¿Cuál de las siguientes funciones pertenece al RIS?',['Gestionar la actividad administrativa y asistencial del servicio de radiología.','Generar imágenes mediante las distintas modalidades.','Sustituir las estaciones de diagnóstico.','Realizar exclusivamente el almacenamiento físico de imágenes.'],0,'TEMA 11','fácil'],
  ['¿Cuál de las siguientes opciones recoge correctamente algunas funciones de gestión del RIS?',['Agendar, citar, registrar procesos y gestionar materiales.','Adquirir, irradiar, reconstruir y almacenar imágenes.','Diagnosticar, informar, archivar y transmitir imágenes.','Manipular, comprimir, imprimir y eliminar imágenes.'],0,'TEMA 11','medio'],
  ['¿Qué función del RIS está relacionada directamente con el seguimiento de la actividad realizada durante el proceso radiológico?',['Registro de procesos.','Archivo de imágenes a largo plazo.','Manipulación de imágenes.','Generación de imágenes.'],0,'TEMA 11','fácil'],
  ['¿Cuál de los siguientes elementos forma parte de los componentes principales de un PACS?',['Servidor central.','Únicamente terminales administrativos.','Exclusivamente sistemas de citación.','Solo estaciones de impresión.'],0,'TEMA 11','fácil'],
  ['¿Qué función cumple el sistema de archivo dentro de un PACS?',['Gestionar las citas de los pacientes.','Permitir el almacenamiento de las imágenes durante diferentes periodos de tiempo.','Generar las imágenes radiológicas.','Registrar los procesos administrativos del RIS.'],1,'TEMA 11','fácil'],
  ['¿Qué modalidades forman parte de la estructura de un PACS como fuentes de imágenes?',['Las modalidades que generan imágenes.','Únicamente las estaciones de diagnóstico.','Los sistemas administrativos.','Los sistemas de citación.'],0,'TEMA 11','fácil'],
  ['¿Cuál es la función de las estaciones de diagnóstico y revisión dentro de un PACS?',['Generar las imágenes radiológicas.','Permitir el trabajo con las imágenes para su diagnóstico y revisión.','Gestionar las citas de los pacientes.','Administrar los materiales del servicio.'],1,'TEMA 11','fácil'],
  ['¿Qué componente del PACS permite la transmisión de información entre los diferentes elementos del sistema?',['Sistema de archivo.','Estación de diagnóstico.','Red de transmisión de datos.','Modalidad de adquisición.'],2,'TEMA 11','fácil'],
  ['¿Cuál de las siguientes opciones recoge correctamente los principales componentes de un PACS?',['Servidor central, sistema de archivo, modalidades, estaciones de diagnóstico y red de transmisión de datos.','RIS, sistema de citación, almacén de materiales y estaciones administrativas.','Servidor central, únicamente estaciones de diagnóstico y sistema de impresión.','Modalidades, RIS, agenda y gestión de materiales.'],0,'TEMA 11','medio'],
  ['¿Qué característica debe presentar un RIS para responder adecuadamente a las necesidades de un servicio de radiología?',['Ser exclusivamente administrativo.','Ser completo, personalizado, robusto, flexible e integrado.','Ser independiente del resto de sistemas.','Ser rígido y específico para una única modalidad.'],1,'TEMA 11','fácil'],
  ['¿Cuál de las siguientes NO es una característica indicada para un RIS?',['Flexible.','Robusto.','Personalizado.','Aislado.'],3,'TEMA 11','fácil'],
  ['¿Qué significa que un RIS sea flexible?',['Que solo pueda utilizarse con una modalidad concreta.','Que pueda adaptarse a las necesidades y cambios del servicio.','Que no pueda modificarse una vez implantado.','Que gestione únicamente la actividad administrativa.'],1,'TEMA 11','medio'],
  ['¿Qué relación existe entre el RIS y el PACS dentro de un Departamento de Radiología Digital?',['Ambos realizan exactamente la misma función.','El RIS gestiona la actividad radiológica y el PACS se centra en la gestión de las imágenes digitales.','El PACS gestiona las citas y el RIS almacena las imágenes.','Son sistemas independientes que no intervienen en el proceso radiológico.'],1,'TEMA 11','medio'],
  ['Un servicio de radiología necesita gestionar citas, registrar procesos y controlar materiales, además de dar soporte al proceso informado. ¿Qué sistema debe realizar principalmente estas funciones?',['PACS.','RIS.','Estación de diagnóstico.','Sistema de archivo.'],1,'TEMA 11','medio'],
  ['Un Departamento de Radiología Digital necesita almacenar, visualizar, manipular y comunicar las imágenes generadas por sus diferentes modalidades. ¿Qué sistema cumple principalmente estas funciones?',['RIS.','PACS.','Sistema de gestión de materiales.','Agenda radiológica.'],1,'TEMA 11','medio']
];

window.topic11Curated = topic11Curated;

const previousTopicMenu11 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu11();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 11'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 11</span><h3>${esc((topics[11]||{}).title||'TEMA 11')}</h3><p>${topic11Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 11', topic11Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card'; button.type = 'button'; button.disabled = false;
  button.innerHTML = `<span class="module-number">TEMA 11</span><h3>${esc((topics[11]||{}).title||'TEMA 11')}</h3><p>${topic11Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 11', topic11Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1])>11; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
