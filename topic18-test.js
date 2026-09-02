// Banco curado del TEMA 18.
const topic18Curated = [
["¿Cuáles son las cinco densidades radiológicas básicas?",["Aire, grasa, agua, calcio y metal.","Aire, músculo, sangre, hueso y metal.","Grasa, agua, músculo, calcio y contraste.","Aire, líquido, músculo, hueso y contraste."],0,"TEMA 18","fácil"],
["¿Qué densidad radiológica presenta menor atenuación de los rayos X?",["Metal.","Calcio.","Grasa.","Aire."],3,"TEMA 18","fácil"],
["En una radiografía, ¿qué material presenta habitualmente la mayor atenuación de los rayos X?",["Aire.","Grasa.","Agua.","Metal."],3,"TEMA 18","fácil"],
["La finalidad de reducir al máximo el tiempo de exposición durante una exploración radiográfica es:",["Aumentar siempre la magnificación.","Reducir el efecto de movimiento y mejorar la nitidez de la imagen.","Eliminar la necesidad de utilizar protección radiológica.","Aumentar la distancia foco-película."],1,"TEMA 18","medio"],
["Para conseguir una radiografía de calidad, además de controlar el movimiento, es importante:",["Inmovilizar o mantener correctamente al paciente durante la exposición.","Aumentar siempre el tiempo de exposición.","Colocar al paciente siempre en decúbito.","Utilizar siempre el mismo factor técnico."],0,"TEMA 18","fácil"],
["¿Qué efecto puede producir el movimiento del paciente durante la exposición radiográfica?",["Aumento de la resolución espacial.","Borrosidad de la imagen.","Disminución de la magnificación.","Aumento de la densidad del tejido."],1,"TEMA 18","fácil"],
["Al realizar una radiografía, la elección de la técnica debe tener en cuenta principalmente:",["Únicamente el tamaño del receptor.","El tamaño y las características de la zona anatómica que se va a estudiar.","Únicamente la edad del paciente.","Exclusivamente la distancia foco-receptor."],1,"TEMA 18","medio"],
["¿Qué información debe conocer el técnico para definir correctamente una proyección radiológica?",["Solo la posición del paciente.","La posición del paciente, la dirección y el punto de incidencia del haz.","Solo el tamaño del receptor de imagen.","Únicamente los factores técnicos."],1,"TEMA 18","medio"],
["¿Qué elemento describe la orientación del paciente respecto al receptor de imagen?",["La posición.","La incidencia.","La distancia foco-receptor.","La colimación."],0,"TEMA 18","fácil"],
["En la nomenclatura radiológica, una proyección debe definirse teniendo en cuenta:",["Únicamente la parte anatómica estudiada.","La dirección del haz de rayos X y su punto de entrada y salida.","Exclusivamente la posición del receptor.","Solo el lado anatómico explorado."],1,"TEMA 18","medio"],
["¿Cuál de las siguientes corresponde a una denominación de posición oblicua representada en el material?",["Oblicua anterior derecha.","Decúbito lateral inferior.","Supino posterior.","Vertical oblicua izquierda."],0,"TEMA 18","medio"],
["¿Cuál de las siguientes parejas corresponde a posiciones oblicuas diferentes?",["Oblicua anterior derecha y oblicua posterior derecha.","Supino anterior y supino posterior.","Decúbito superior y decúbito inferior.","Lateral anterior y lateral posterior."],0,"TEMA 18","medio"],
["En la denominación de una posición oblicua, ¿qué información permite diferenciar una oblicua anterior derecha de una oblicua anterior izquierda?",["El tamaño del receptor.","El lado hacia el que se orienta el paciente.","La distancia foco-paciente.","El tiempo de exposición."],1,"TEMA 18","medio"],
["¿Qué debe determinarse antes de realizar una proyección radiológica para conseguir una correcta representación anatómica?",["Únicamente el kilovoltaje.","La posición del paciente y la orientación del haz de rayos X.","Solo la distancia foco-receptor.","Únicamente el tamaño del campo."],1,"TEMA 18","medio"],
["¿Qué objetivo tiene adaptar correctamente la posición del paciente antes de realizar una radiografía?",["Conseguir una representación adecuada de la estructura anatómica que se quiere estudiar.","Aumentar siempre la dosis recibida.","Eliminar la necesidad de colimar.","Evitar cualquier tipo de inmovilización."],0,"TEMA 18","fácil"],
["¿Qué debe indicar una correcta descripción de una proyección radiológica?",["Únicamente el nombre de la región anatómica.","La posición del paciente, la dirección del haz y el punto de incidencia.","Solo el lado derecho o izquierdo.","Únicamente los valores de kV y mAs."],1,"TEMA 18","medio"],
["¿Por qué es importante conocer la terminología de las posiciones y proyecciones radiológicas?",["Porque permite utilizar una nomenclatura común y realizar correctamente las exploraciones.","Porque determina exclusivamente la dosis de radiación.","Porque sustituye la identificación anatómica del paciente.","Porque permite prescindir de las instrucciones al paciente."],0,"TEMA 18","fácil"],
["¿Qué aspectos deben tenerse en cuenta además de la posición y la proyección para realizar correctamente una radiografía?",["Únicamente el tamaño corporal del paciente.","Las medidas de protección radiológica y los factores técnicos.","Solo la distancia entre el paciente y el receptor.","Exclusivamente la edad del paciente."],1,"TEMA 18","medio"],
["Si una estructura anatómica no queda correctamente incluida o centrada en la imagen, ¿qué elemento relacionado con la realización de la radiografía debe revisarse especialmente?",["El punto de incidencia y la dirección del haz.","Únicamente la edad del paciente.","El color del receptor.","La marca del equipo."],0,"TEMA 18","medio"],
["¿Cuál de las siguientes afirmaciones resume correctamente los aspectos fundamentales para realizar una radiografía de calidad?",["Basta con elegir correctamente el receptor de imagen.","Es necesario controlar la posición e inmovilización del paciente, la proyección, el haz de rayos X, la colimación y los factores técnicos.","Lo más importante es aumentar el tiempo de exposición.","La posición del paciente no influye si los factores técnicos son correctos."],1,"TEMA 18","difícil"]
];
window.topic18Curated = topic18Curated;

const previousTopicMenu18 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu18();
  if(!ws || ws.hidden) return;
  const cards=ws.querySelector('.cards');
  if(!cards) return;
  const existing=[...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 18'));
  const setCard=b=>{b.disabled=false;b.innerHTML=`<span class="module-number">TEMA 18</span><h3>${esc((topics[18]||{}).title||'TEMA 18. INTRODUCCIÓN A LAS PROYECCIONES RADIOLÓGICAS, NOMENCLATURA ANATÓMICA Y RADIOGRAFÍA')}</h3><p>${topic18Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;b.onclick=()=>session('TEMA 18',topic18Curated)};
  if(existing){setCard(existing);return;}
  const button=document.createElement('button');
  button.className='module-card';button.type='button';setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>18});
  if(before)cards.insertBefore(button,before);else cards.appendChild(button);
};

// El Tema 18 deja de participar en el banco automático de preguntas.
const previousBuildTopicBank18 = window.buildTopicBank;
window.buildTopicBank = function(){ return previousBuildTopicBank18().filter(q=>q[3]!=='TEMA 18'); };
