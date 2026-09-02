// Banco curado del TEMA 14.
const topic14Curated = [
["¿Cuál es la finalidad principal de los contrastes utilizados en ecografía?",["Reducir la frecuencia de los ultrasonidos.","Aumentar la señal ecográfica y mejorar la capacidad diagnóstica.","Sustituir la ecografía convencional en todos los estudios.","Eliminar los ecos procedentes de los tejidos."],1,"TEMA 14","medio"],
["¿Cómo pueden administrarse los contrastes ecográficos?",["Exclusivamente por vía oral.","Por vía intravenosa o intracavitaria.","Únicamente por vía intraarterial.","Exclusivamente por vía rectal."],1,"TEMA 14","medio"],
["¿En qué se basa el mecanismo de acción de las microburbujas utilizadas como contraste ecográfico?",["En la absorción completa de los ultrasonidos.","En la interacción de las ondas de ultrasonidos con las burbujas de gas.","En la emisión de radiación ionizante.","En la captación del contraste por el tejido óseo."],1,"TEMA 14","medio"],
["¿Qué comportamiento de las microburbujas favorece la generación de ecos armónicos?",["La oscilación mediante compresión y expansión.","La inmovilización completa de las burbujas.","La transformación de las burbujas en partículas sólidas.","La absorción completa de la onda ultrasónica."],0,"TEMA 14","medio"],
["¿Cuál de las siguientes características debe presentar un contraste ecográfico?",["Ser tóxico para aumentar la señal.","Ser inerte y no tóxico.","Tener un diámetro elevado.","No interactuar con el haz de ultrasonidos."],1,"TEMA 14","medio"],
["¿Cuál de los siguientes gases puede formar parte de un contraste ecográfico?",["Hexafluoruro de azufre.","Sulfato de bario.","Gadolinio.","Yodo molecular."],0,"TEMA 14","medio"],
["¿Cómo se prepara habitualmente un contraste ecográfico antes de su administración?",["Mezclando la molécula de gas con suero salino.","Mezclándolo con sulfato de bario.","Diluyéndolo siempre con contraste yodado.","Administrándolo sin ningún tipo de preparación."],0,"TEMA 14","medio"],
["¿Cuál es la dosis intravenosa habitual de contraste ecográfico indicada en estos estudios?",["0,2 ml, seguida de 1 ml de suero.","2,4 ml, seguida de 5-10 ml de suero.","10 ml, seguida de 20 ml de suero.","24 ml, sin lavado posterior."],1,"TEMA 14","medio"],
["En pacientes con enfermedad de Crohn, la dosis de contraste ecográfico debe ser:",["Mayor que la dosis habitual.","Menor que la dosis habitual.","Idéntica siempre a la dosis habitual.","Administrada exclusivamente por vía intracavitaria."],1,"TEMA 14","medio"],
["¿Cuál de los siguientes puede aparecer como efecto adverso de un contraste ecográfico?",["Cefalea o mareos.","Fractura ósea.","Hipoglucemia grave de forma obligatoria.","Pérdida permanente de audición."],0,"TEMA 14","medio"],
["¿Cuál de las siguientes situaciones constituye una contraindicación para el uso de contrastes ecográficos?",["Síndrome coronario agudo.","Lesión focal hepática.","Trasplante renal.","Nódulo hepático incidental."],0,"TEMA 14","medio"],
["¿Cuál de las siguientes situaciones cardiovasculares puede contraindicar el uso de contrastes ecográficos?",["Un cortocircuito cardíaco de derecha a izquierda o de izquierda a derecha.","Una exploración ecográfica abdominal normal.","Una lesión focal hepática aislada.","Una alteración leve del gusto."],0,"TEMA 14","medio"],
["¿Cuál de las siguientes afirmaciones sobre los contrastes ecográficos es correcta?",["Son nefrotóxicos y alteran la función tiroidea.","No son nefrotóxicos y no interaccionan con la función tiroidea.","Están contraindicados siempre en pacientes con alteraciones renales.","Requieren control sistemático de la función tiroidea antes de cada exploración."],1,"TEMA 14","medio"],
["¿Qué órgano se considera especialmente adecuado para la evaluación con contraste ecográfico?",["Hígado.","Tiroides.","Cerebro.","Pulmón."],0,"TEMA 14","medio"],
["¿Cuándo se produce aproximadamente la fase arterial en el estudio hepático con contraste ecográfico?",["A los 10-35 segundos después de la inyección.","A los 60-120 segundos.","A los 240-360 segundos.","A las 24 horas."],0,"TEMA 14","medio"],
["¿Qué intervalo corresponde aproximadamente a la fase portal en el estudio hepático con contraste ecográfico?",["1-5 segundos.","10-35 segundos.","60-120 segundos.","240-360 segundos."],2,"TEMA 14","medio"],
["¿Qué intervalo corresponde aproximadamente a la fase tardía del estudio hepático con contraste ecográfico?",["10-35 segundos.","30-60 segundos.","60-120 segundos.","240-360 segundos."],3,"TEMA 14","medio"],
["¿Cuál de las siguientes situaciones puede indicar la utilización de contraste ecográfico para caracterizar una lesión focal hepática?",["Un hallazgo incidental durante una ecografía convencional.","Únicamente la presencia de una enfermedad renal.","Exclusivamente un traumatismo óseo.","Solo pacientes sin antecedentes clínicos."],0,"TEMA 14","medio"],
["¿Para cuál de las siguientes finalidades puede utilizarse el contraste ecográfico en el hígado además de la caracterización de lesiones?",["Guiar y monitorizar tratamientos ablativos percutáneos.","Valorar exclusivamente la densidad mineral ósea.","Sustituir siempre a la anatomía patológica.","Realizar únicamente estudios del aparato respiratorio."],0,"TEMA 14","medio"],
["¿Cuál de las siguientes es una indicación del contraste ecográfico fuera del estudio hepático?",["Valoración de trombosis de la vena renal.","Diagnóstico exclusivo de fracturas óseas.","Valoración de caries dentales.","Estudio de la densidad mineral ósea."],0,"TEMA 14","medio"]
];
window.topic14Curated = topic14Curated;

const previousTopicMenu14 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu14();
  if(!ws || ws.hidden) return;
  const cards=ws.querySelector('.cards');
  if(!cards) return;
  const existing=[...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 14'));
  const setCard=b=>{b.disabled=false;b.innerHTML=`<span class="module-number">TEMA 14</span><h3>${esc((topics[14]||{}).title||'TEMA 14')}</h3><p>${topic14Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;b.onclick=()=>session('TEMA 14',topic14Curated)};
  if(existing){setCard(existing);return;}
  const button=document.createElement('button');
  button.className='module-card';button.type='button';setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>14});
  if(before)cards.insertBefore(button,before);else cards.appendChild(button);
};

// El Tema 14 deja de participar en el banco automático de preguntas.
const previousBuildTopicBank14 = window.buildTopicBank;
window.buildTopicBank = function(){ return previousBuildTopicBank14().filter(q=>q[3]!=='TEMA 14'); };
