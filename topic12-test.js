// Banco curado del TEMA 12.
const topic12Curated = [
  ['¿Cuál es la finalidad principal de los medios de contraste radiológicos?',['Sustituir la radiación utilizada en las técnicas de imagen.','Aumentar la capacidad diagnóstica de las técnicas de imagen.','Reducir siempre la dosis de radiación administrada al paciente.','Evitar la necesidad de realizar diferentes proyecciones.'],1,'TEMA 12','fácil'],
  ['¿Qué combinación de medio de contraste y técnica de imagen es correcta?',['Rayos X — gadolinio.','Resonancia magnética — sulfato de bario.','Rayos X — bario o yodo.','Ecografía — gadolinio.'],2,'TEMA 12','fácil'],
  ['¿Qué medio de contraste se utiliza habitualmente para estudiar el tubo digestivo por vía oral?',['Gadolinio.','Sulfato de bario.','Microburbujas.','Yodo intraarterial.'],1,'TEMA 12','fácil'],
  ['En un paciente con sospecha de perforación del tubo digestivo, ¿qué contraste debe evitarse habitualmente por vía oral?',['Sulfato de bario.','Gadolinio.','Microburbujas.','Aire.'],0,'TEMA 12','medio'],
  ['Ante la sospecha de una perforación del tubo digestivo, ¿qué medio de contraste se utiliza habitualmente como alternativa al sulfato de bario?',['Gadolinio.','Microburbujas.','Gastrografin.','Aire exclusivamente.'],2,'TEMA 12','medio'],
  ['¿Para qué estructuras se utiliza principalmente la administración de contraste por vía oral?',['Colon y recto exclusivamente.','Esófago, estómago e intestino delgado.','Vejiga y uréteres.','Articulaciones y partes blandas.'],1,'TEMA 12','fácil'],
  ['¿En qué situación está especialmente indicada la administración de contraste por vía oral?',['En pacientes conscientes que pueden colaborar.','Exclusivamente en pacientes anestesiados.','Únicamente en pacientes con una sonda arterial.','Solo en pacientes con una ostomía.'],0,'TEMA 12','fácil'],
  ['Para realizar un estudio del intestino grueso mediante un enema opaco convencional, ¿qué contraste se utiliza?',['Gadolinio.','Sulfato de bario.','Gastrografin exclusivamente.','Microburbujas.'],1,'TEMA 12','fácil'],
  ['¿Qué diferencia fundamental existe entre un enema opaco convencional y uno de doble contraste?',['El convencional utiliza gadolinio y el de doble contraste yodo.','El convencional utiliza aire y el de doble contraste únicamente bario.','El convencional utiliza sulfato de bario y el de doble contraste utiliza sulfato de bario y aire.','No existe ninguna diferencia en los medios utilizados.'],2,'TEMA 12','medio'],
  ['¿Qué debe comprobarse antes de administrar contraste a través de una sonda nasogástrica?',['Que la sonda esté conectada a una bomba de contraste.','Que el extremo esté correctamente colocado y alejado de la unión esofagogástrica.','Que la sonda llegue necesariamente al intestino grueso.','Que el paciente esté siempre en decúbito prono.'],1,'TEMA 12','medio'],
  ['¿Qué actuación se recomienda al finalizar la administración de contraste por una sonda nasogástrica?',['Retirar inmediatamente la sonda sin realizar ninguna otra actuación.','Limpiar la sonda con suero para evitar obstrucciones.','Introducir aire a presión para eliminar el contraste.','Mantener la sonda cerrada durante 24 horas.'],1,'TEMA 12','fácil'],
  ['Para administrar contraste a través de un estoma, ¿qué procedimiento se describe?',['Introducir una sonda Foley y administrar el contraste diluido con agua.','Introducir siempre una sonda nasogástrica.','Administrar el contraste exclusivamente por vía intravenosa.','Utilizar únicamente aire sin contraste.'],0,'TEMA 12','medio'],
  ['¿Cómo se administra habitualmente el contraste por vía intravenosa?',['Mediante una arteria femoral.','A través de una vena periférica, habitualmente del antebrazo.','Directamente en una cavidad articular.','Mediante una cánula introducida en el colon.'],1,'TEMA 12','fácil'],
  ['La administración de contraste por vía intravenosa puede realizarse:',['Únicamente de forma manual.','Únicamente mediante bomba.','De forma manual o mediante una bomba de inyección.','Exclusivamente mediante catéter arterial.'],2,'TEMA 12','fácil'],
  ['¿Cuál es la arteria utilizada con mayor frecuencia para la administración de contraste por vía intraarterial?',['Arteria radial.','Arteria femoral.','Arteria carótida.','Arteria humeral distal.'],1,'TEMA 12','fácil'],
  ['Si la arteria femoral no es viable para una administración intraarterial, ¿qué alternativa se contempla?',['Arteria braquial proximal (transaxilar).','Vena cefálica.','Vena femoral.','Arteria radial distal exclusivamente.'],0,'TEMA 12','medio'],
  ['¿En qué consiste una artrografía?',['En administrar contraste dentro de una vena periférica.','En introducir contraste directamente en una cavidad articular para mejorar la visualización de sus estructuras.','En administrar contraste dentro del tubo digestivo.','En introducir contraste en una arteria.'],1,'TEMA 12','fácil'],
  ['Para realizar una artro-TC, ¿qué combinación es la adecuada?',['Gadolinio diluido con agua.','Sulfato de bario y aire.','Yodo no iónico diluido con suero.','Microburbujas de aire.'],2,'TEMA 12','medio'],
  ['¿Qué medio de contraste se utiliza en una artro-RM?',['Sulfato de bario.','Yodo no iónico.','Gadolinio.','Gastrografin.'],2,'TEMA 12','fácil'],
  ['¿Cuál de las siguientes asociaciones entre técnica y vía de administración es correcta?',['Histerosalpingografía — contraste intracavitario.','Dacriografía — contraste intraarticular.','Galactografía — contraste intraarterial.','Fistulografía — contraste intravenoso.'],0,'TEMA 12','medio']
];

window.topic12Curated = topic12Curated;

const previousTopicMenu12 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu12();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 12'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 12</span><h3>${esc((topics[12]||{}).title||'TEMA 12')}</h3><p>${topic12Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 12', topic12Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card'; button.type = 'button'; button.disabled = false;
  button.innerHTML = `<span class="module-number">TEMA 12</span><h3>${esc((topics[12]||{}).title||'TEMA 12')}</h3><p>${topic12Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 12', topic12Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1])>12; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
