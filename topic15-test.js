// Banco curado del TEMA 15.
const topic15Curated = [
["¿Cuál es la finalidad principal de los contrastes utilizados en resonancia magnética?",["Reducir las diferencias entre los tejidos.","Incrementar las diferencias de señal entre los tejidos.","Eliminar la señal de los líquidos.","Sustituir las secuencias de resonancia magnética."],1,"TEMA 15","medio"],
["¿Cuál de los siguientes es un ejemplo de contraste natural en resonancia magnética?",["El aire pulmonar.","El líquido amniótico.","El sulfato de bario.","El yodo intravenoso."],1,"TEMA 15","medio"],
["¿Qué líquido puede actuar como contraste natural en una colangiografía por resonancia magnética?",["La bilis.","El líquido sinovial exclusivamente.","El plasma sanguíneo.","El aire intestinal."],0,"TEMA 15","medio"],
["¿Cuál es el contraste químico más utilizado en resonancia magnética?",["El yodo unido a un quelante.","El gadolinio unido a un agente quelante.","El sulfato de bario.","El dióxido de carbono."],1,"TEMA 15","medio"],
["¿En qué pueden diferenciarse las distintas marcas de contrastes de gadolinio?",["En su osmolaridad, viscosidad y estabilidad.","Únicamente en el color de la solución.","Solo en la vía de administración.","Exclusivamente en su temperatura de almacenamiento."],0,"TEMA 15","medio"],
["¿Cuál es una función fundamental del agente quelante unido al gadolinio?",["Aumentar la producción de gadolinio libre.","Favorecer la estabilidad del compuesto.","Impedir su administración intravenosa.","Eliminar completamente su efecto paramagnético."],1,"TEMA 15","medio"],
["¿Qué tipo de quelante proporciona mayor estabilidad y menor tendencia a liberar gadolinio libre?",["El quelante cíclico o con estructura cónica.","Un quelante sin estructura definida.","Un quelante exclusivamente liposoluble.","Un quelante sin capacidad de unión al gadolinio."],0,"TEMA 15","medio"],
["¿Cuál es la vía de administración más frecuente de los contrastes en resonancia magnética?",["Oral.","Rectal.","Intravenosa.","Subcutánea."],2,"TEMA 15","medio"],
["¿Qué efecto produce principalmente el gadolinio sobre los tiempos de relajación?",["Alarga T1 y T2.","Acorta T1 y puede acortar T2.","Elimina completamente T1.","No modifica los tiempos de relajación."],1,"TEMA 15","medio"],
["¿Qué efecto sobre la imagen produce el acortamiento de T1 por el gadolinio?",["Hipointensidad en T1.","Hiperintensidad en T1.","Ausencia de señal en T1.","Hiperintensidad exclusivamente en T2."],1,"TEMA 15","medio"],
["¿Qué efecto sobre la imagen puede producir el acortamiento de T2 por el gadolinio?",["Hipointensidad en T2.","Hiperintensidad en T2.","Ausencia de señal exclusivamente en T1.","Aumento de la señal de todos los tejidos."],0,"TEMA 15","medio"],
["¿Cómo se visualiza el contraste de gadolinio en una exploración de resonancia magnética?",["Como una sustancia visible directamente por sí misma.","A través de sus efectos sobre la señal de los tejidos.","Mediante radiación ionizante.","Por su densidad radiológica."],1,"TEMA 15","medio"],
["¿Qué tipo de secuencias se utilizan habitualmente para obtener imágenes posteriores a la administración de gadolinio?",["Secuencias potenciadas en T1.","Exclusivamente secuencias potenciadas en T2.","Solo secuencias de difusión.","Únicamente secuencias de densidad protónica."],0,"TEMA 15","medio"],
["¿Para qué sirve la imagen previa a la administración de contraste en un estudio dinámico?",["Para utilizarla como máscara en la sustracción posterior.","Para eliminar todas las imágenes posteriores.","Para sustituir las fases dinámicas.","Para calcular exclusivamente el tiempo de exploración."],0,"TEMA 15","medio"],
["¿Qué tipo de secuencia permite habitualmente obtener múltiples fases durante un estudio dinámico con contraste?",["Una secuencia Gradient Echo rápida.","Una secuencia exclusivamente de eco de espín lenta.","Una secuencia sin codificación espacial.","Una secuencia de radiografía convencional."],0,"TEMA 15","medio"],
["¿Qué característica define a los contrastes intracelulares utilizados en el estudio hepático?",["Son captados por células hepáticas y pueden mejorar la caracterización de lesiones.","Permanecen exclusivamente en el espacio vascular.","No permiten estudiar el parénquima hepático.","Solo pueden administrarse por vía oral."],0,"TEMA 15","medio"],
["¿Qué característica presentan los contrastes mixtos utilizados en resonancia magnética hepática?",["Combinan propiedades extracelulares e intracelulares.","Actúan únicamente como contraste oral.","No presentan fase tardía.","Solo permiten estudiar vasos sanguíneos."],0,"TEMA 15","medio"],
["En las imágenes tardías hepáticas, ¿qué puede indicar la ausencia de captación del contraste intracelular?",["Ausencia de hepatocitos en la lesión.","Presencia obligatoria de hepatocitos normales.","Aumento de la función hepatocitaria.","Presencia de aire en la lesión."],0,"TEMA 15","medio"],
["¿Qué característica diferencia a los contrastes intravasculares de los agentes extracelulares inespecíficos?",["Permanecen más tiempo en el espacio vascular.","Se eliminan exclusivamente por vía biliar.","No producen aumento de señal sanguínea.","No pueden utilizarse en estudios angiográficos."],0,"TEMA 15","medio"],
["¿Qué son los contrastes superparamagnéticos mencionados en el tema?",["Partículas de óxido de hierro, actualmente en desuso.","Microburbujas de gas para ecografía.","Quelatos de yodo para TC.","Suspensiones de sulfato de bario."],0,"TEMA 15","medio"]
];
window.topic15Curated = topic15Curated;

const previousTopicMenu15 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu15();
  if(!ws || ws.hidden) return;
  const cards=ws.querySelector('.cards');
  if(!cards) return;
  const existing=[...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 15'));
  const setCard=b=>{b.disabled=false;b.innerHTML=`<span class="module-number">TEMA 15</span><h3>${esc((topics[15]||{}).title||'TEMA 15')}</h3><p>${topic15Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;b.onclick=()=>session('TEMA 15',topic15Curated)};
  if(existing){setCard(existing);return;}
  const button=document.createElement('button');
  button.className='module-card';button.type='button';setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>15});
  if(before)cards.insertBefore(button,before);else cards.appendChild(button);
};

// El Tema 15 deja de participar en el banco automático de preguntas.
const previousBuildTopicBank15 = window.buildTopicBank;
window.buildTopicBank = function(){ return previousBuildTopicBank15().filter(q=>q[3]!=='TEMA 15'); };
