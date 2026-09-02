// Banco curado del TEMA 16.
const topic16Curated = [
["¿Cuál es una característica fundamental que debe cumplir el carro de paros?",["Estar ubicado en una zona de acceso restringido.","Permanecer accesible, con el contenido visible y ordenado.","Utilizarse únicamente durante procedimientos quirúrgicos.","Contener exclusivamente material farmacológico."],1,"TEMA 16","medio"],
["¿Con qué finalidad debe realizarse una revisión periódica del carro de paros?",["Para sustituir todos los medicamentos después de cada revisión.","Para comprobar que su contenido está preparado para atender una parada cardiorrespiratoria.","Para reducir el material disponible en el carro.","Para comprobar únicamente el funcionamiento del desfibrilador."],1,"TEMA 16","medio"],
["¿Cuál de los siguientes elementos forma parte de la dotación básica del carro de paros?",["Pulsioxímetro.","Equipo de resonancia magnética.","Inyector automático de contraste.","Ecógrafo."],0,"TEMA 16","medio"],
["¿Cuál de los siguientes grupos corresponde a fármacos incluidos en la dotación básica del carro de paros?",["Adrenalina, atropina y salbutamol.","Furosemida, secretina y gadolinio.","Midazolam, diazepam y lidocaína.","Nitroglicerina, dobutamina y adenosina."],0,"TEMA 16","medio"],
["¿Cuál de los siguientes elementos permite valorar la saturación de oxígeno del paciente?",["Electrocardiógrafo.","Pulsioxímetro.","Desfibrilador.","Monitor de presión arterial."],1,"TEMA 16","fácil"],
["Antes de realizar un estudio radiodiagnóstico, especialmente una resonancia magnética, es importante:",["Evitar explicar al paciente las características de la prueba.","Proporcionar información y apoyo psicológico y, cuando sea necesario, farmacológico.","Administrar siempre un anestésico general.","Administrar siempre un opioide."],1,"TEMA 16","medio"],
["¿Cuál de los siguientes fármacos pertenece al grupo de las benzodiacepinas utilizadas para sedación?",["Fentanilo.","Midazolam.","Lidocaína.","Furosemida."],1,"TEMA 16","fácil"],
["¿Cuál de los siguientes es un anestésico local utilizado en radiología?",["Bupivacaína.","Morfina.","Midazolam.","Salbutamol."],0,"TEMA 16","fácil"],
["En una cardio-RM de estrés, ¿cuál es la finalidad del estrés farmacológico?",["Disminuir la frecuencia cardíaca hasta valores mínimos.","Evaluar la respuesta del corazón ante el estrés inducido farmacológicamente.","Conseguir la relajación de la musculatura intestinal.","Aumentar la producción de orina."],1,"TEMA 16","medio"],
["¿Qué efecto producen el dipiridamol y la adenosina utilizados en la cardio-RM de estrés?",["Vasoconstricción coronaria y aumento de la presión arterial.","Vasodilatación coronaria e inducción de isquemia miocárdica relativa.","Disminución de la contractilidad y de la frecuencia cardíaca.","Aumento de la producción de orina."],1,"TEMA 16","medio"],
["¿Cuál de las siguientes situaciones constituye una contraindicación para el uso de dipiridamol o adenosina en una cardio-RM de estrés?",["Taquicardia sinusal.","Bloqueo auriculoventricular de segundo o tercer grado.","Hipertensión arterial leve.","Aumento de la contractilidad miocárdica."],1,"TEMA 16","difícil"],
["¿Qué efecto produce la dobutamina durante una cardio-RM de estrés?",["Disminuye la contractilidad miocárdica.","Aumenta la contractilidad miocárdica y la frecuencia cardíaca.","Produce relajación de la musculatura intestinal.","Produce vasodilatación coronaria sin modificar la frecuencia cardíaca."],1,"TEMA 16","medio"],
["Durante una cardio-RM de estrés con dobutamina, ¿qué se valora mediante las secuencias de cine?",["La eliminación renal del fármaco.","La contractilidad segmentaria del corazón.","La distensión de la vía urinaria.","La motilidad intestinal."],1,"TEMA 16","medio"],
["Para realizar una angio-TAC de las arterias coronarias, ¿por qué puede ser necesario administrar betabloqueantes?",["Para aumentar la frecuencia cardíaca por encima de 100 lpm.","Para conseguir una frecuencia cardíaca adecuada para la adquisición.","Para producir diuresis.","Para relajar el intestino."],1,"TEMA 16","medio"],
["¿Qué efecto se busca conseguir mediante la administración de nitroglicerina sublingual antes de una angio-TAC coronaria?",["Vasodilatación de las arterias coronarias.","Vasoconstricción de las arterias coronarias.","Disminución de la producción de orina.","Aumento de la contractilidad cardíaca."],0,"TEMA 16","medio"],
["¿Cuál es la finalidad de administrar furosemida en determinados estudios del aparato urinario?",["Disminuir la producción de orina.","Aumentar la producción de orina y favorecer la distensión de la vía urinaria.","Relajar la musculatura del intestino.","Aumentar la frecuencia cardíaca."],1,"TEMA 16","medio"],
["¿Para qué se utilizan los fármacos antiperistálticos en los estudios del aparato digestivo?",["Para aumentar el movimiento intestinal.","Para relajar la musculatura lisa del esófago, estómago e intestino.","Para aumentar la secreción pancreática.","Para favorecer la producción de orina."],1,"TEMA 16","medio"],
["¿En qué tipo de estudios pueden utilizarse fármacos antiperistálticos?",["Únicamente en resonancia magnética cerebral.","En estudios baritados y en entero-RM.","Exclusivamente en estudios urológicos.","Únicamente en angio-TAC coronaria."],1,"TEMA 16","medio"],
["¿Cuál es la finalidad de utilizar secretina en determinados estudios de RM?",["Evaluar la respuesta secretora del páncreas y cuantificar su reserva exocrina.","Aumentar la producción de orina.","Disminuir la contractilidad cardíaca.","Eliminar restos fecales del colon."],0,"TEMA 16","difícil"],
["¿Para qué se utilizan los laxantes antes de determinados estudios digestivos?",["Para aumentar la secreción exocrina pancreática.","Para eliminar restos fecales y mejorar la visualización de las paredes intestinales.","Para producir vasodilatación coronaria.","Para aumentar la frecuencia cardíaca."],1,"TEMA 16","medio"]
];
window.topic16Curated = topic16Curated;

const previousTopicMenu16 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu16();
  if(!ws || ws.hidden) return;
  const cards=ws.querySelector('.cards');
  if(!cards) return;
  const existing=[...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 16'));
  const setCard=b=>{b.disabled=false;b.innerHTML=`<span class="module-number">TEMA 16</span><h3>${esc((topics[16]||{}).title||'TEMA 16. OTROS FÁRMACOS EN RADIOLOGÍA Y CARRO DE PAROS')}</h3><p>${topic16Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;b.onclick=()=>session('TEMA 16',topic16Curated)};
  if(existing){setCard(existing);return;}
  const button=document.createElement('button');
  button.className='module-card';button.type='button';setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>16});
  if(before)cards.insertBefore(button,before);else cards.appendChild(button);
};

// El Tema 16 deja de participar en el banco automático de preguntas.
const previousBuildTopicBank16 = window.buildTopicBank;
window.buildTopicBank = function(){ return previousBuildTopicBank16().filter(q=>q[3]!=='TEMA 16'); };
