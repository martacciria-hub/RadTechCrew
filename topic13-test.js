// Banco curado del TEMA 13.
const topic13Curated = [
["¿Cuál es la finalidad principal de los medios de contraste en las exploraciones radiográficas?",["Disminuir la dosis de radiación administrada al paciente.","Mejorar la visualización de las estructuras del organismo.","Sustituir la radiación por ondas ultrasónicas.","Evitar la necesidad de realizar distintas proyecciones."],1,"TEMA 13","medio"],
["¿Cuál de los siguientes se considera un medio de contraste negativo o radiotransparente?",["Sulfato de bario.","Contraste yodado.","Aire.","Gadolinio."],2,"TEMA 13","medio"],
["¿Qué función desempeñan principalmente los contrastes negativos en las exploraciones digestivas?",["Aumentar la absorción de radiación de la mucosa.","Distender las paredes intestinales y separarlas de la mucosa.","Recubrir la mucosa con una capa radiopaca.","Reducir la viscosidad del contenido intestinal."],1,"TEMA 13","medio"],
["¿En cuál de las siguientes exploraciones se utiliza habitualmente un contraste negativo como el aire?",["Enema opaco de doble contraste.","Urografía intravenosa.","Histerosalpingografía.","Artrografía."],0,"TEMA 13","medio"],
["En una arteriografía con dióxido de carbono, su administración debe realizarse:",["Siempre por encima del diafragma.","Únicamente por vía intravenosa.","Por debajo del diafragma.","Exclusivamente por vía oral."],2,"TEMA 13","medio"],
["¿Cuál de los siguientes es un contraste positivo no yodado utilizado en exploraciones intestinales?",["Sulfato de bario.","Dióxido de carbono.","Lipiodol.","Contraste yodado no iónico."],0,"TEMA 13","medio"],
["Para que el sulfato de bario sea adecuado para una exploración digestiva debe ser:",["Poco viscoso y de rápida eliminación.","Suficientemente viscoso para fluir y recubrir la mucosa.","Insoluble y completamente sólido.","Altamente osmolar para producir distensión intestinal."],1,"TEMA 13","medio"],
["¿Cuál de las siguientes puede ser una complicación del sulfato de bario?",["Neumonitis química por aspiración.","Hipoglucemia grave.","Insuficiencia hepática inmediata.","Hipertensión arterial permanente."],0,"TEMA 13","medio"],
["¿Qué puede producir la extravasación peritoneal de sulfato de bario debido a una perforación intestinal?",["Fibrosis extensa.","Hiperventilación.","Edema cerebral.","Bradicardia."],0,"TEMA 13","medio"],
["Los contrastes yodados hidrosolubles son ampliamente utilizados porque:",["Solo pueden administrarse por vía intravenosa.","Pueden utilizarse en diferentes cavidades, naturales o patológicas.","Son siempre liposolubles.","No presentan ninguna interacción con el organismo."],1,"TEMA 13","medio"],
["¿Cuál de los siguientes factores influye en el grado de opacificación producido por un contraste yodado hidrosoluble?",["La velocidad de inyección.","El color del contraste.","El tamaño del recipiente utilizado.","La posición del paciente exclusivamente."],0,"TEMA 13","medio"],
["¿Cómo se clasifican los contrastes yodados hidrosolubles según el radical asociado?",["Hidrosolubles y liposolubles.","Monómeros y dímeros.","Iónicos y no iónicos.","Positivos y negativos."],2,"TEMA 13","medio"],
["¿Qué característica presentan los contrastes yodados iónicos al entrar en contacto con la sangre?",["No generan partículas con carga eléctrica.","Generan partículas con carga eléctrica y pueden producir alteraciones hidroelectrolíticas.","Se convierten inmediatamente en gases.","Disminuyen siempre la osmolaridad plasmática."],1,"TEMA 13","medio"],
["¿Por qué se ha reducido el uso de los contrastes yodados iónicos?",["Porque no contienen yodo.","Por su elevada osmolaridad y mayor incidencia de efectos secundarios y reacciones adversas.","Porque son demasiado poco radiopacos.","Porque solo pueden utilizarse por vía oral."],1,"TEMA 13","medio"],
["¿Qué característica distingue a los contrastes yodados no iónicos?",["Generan numerosas partículas con carga eléctrica.","Contienen radicales hidrofílicos que permiten la hidrosolubilidad sin carga eléctrica.","Son derivados del aceite de dormidera.","Son siempre dímeros iónicos."],1,"TEMA 13","medio"],
["¿Qué diferencia fundamental existe entre un monómero y un dímero en los contrastes yodados?",["El monómero contiene dos anillos de benceno y el dímero uno.","El monómero contiene un anillo de benceno y el dímero dos.","Los monómeros son siempre iónicos y los dímeros siempre no iónicos.","Los monómeros son liposolubles y los dímeros hidrosolubles."],1,"TEMA 13","medio"],
["¿Cuál de los siguientes factores influye en la viscosidad de un contraste?",["La concentración de la solución.","La edad del paciente exclusivamente.","El número de proyecciones realizadas.","El tamaño del detector."],0,"TEMA 13","medio"],
["Respecto a la osmolaridad de los contrastes yodados, ¿cuál de las siguientes asociaciones es correcta?",["Isoosmolares — monómeros iónicos.","Hiperosmolares — monómeros iónicos.","Hiperosmolares — dímeros no iónicos.","Baja osmolaridad — exclusivamente dímeros no iónicos."],1,"TEMA 13","medio"],
["¿Cuál de los siguientes es un uso actual de los contrastes yodados liposolubles?",["Urografía intravenosa convencional.","Fistulografía.","Enema opaco.","Exploración oral del tracto gastrointestinal."],1,"TEMA 13","medio"],
["¿Cuál de las siguientes afirmaciones sobre los contrastes yodados es correcta?",["Tienen una vida media aproximada de 24 horas y se eliminan exclusivamente por vía biliar.","Tienen una vida media aproximada de 2 horas y la mayoría se elimina por vía renal.","Se elimina únicamente el 10 % durante las primeras 24 horas.","Su eliminación se produce exclusivamente por vía intestinal."],1,"TEMA 13","medio"]
];
window.topic13Curated = topic13Curated;

const previousTopicMenu13 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu13();
  if(!ws || ws.hidden) return;
  const cards=ws.querySelector('.cards');
  if(!cards) return;
  const existing=[...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 13'));
  const setCard=b=>{b.disabled=false;b.innerHTML=`<span class="module-number">TEMA 13</span><h3>${esc((topics[13]||{}).title||'TEMA 13')}</h3><p>${topic13Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;b.onclick=()=>session('TEMA 13',topic13Curated)};
  if(existing){setCard(existing);return;}
  const button=document.createElement('button');
  button.className='module-card';button.type='button';setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>13});
  if(before)cards.insertBefore(button,before);else cards.appendChild(button);
};

// El Tema 13 deja de participar en el banco automático de preguntas.
const previousBuildTopicBank13 = window.buildTopicBank;
window.buildTopicBank = function(){ return previousBuildTopicBank13().filter(q=>q[3]!=='TEMA 13'); };
