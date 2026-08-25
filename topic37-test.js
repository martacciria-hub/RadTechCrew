// Banco manual del Tema 37 · RadTechCrew
// Preguntas redactadas como examen, sin referencias al temario ni plantillas automáticas.
const topic37Curated = [
  ['¿Cuál es la preparación estrictamente necesaria para realizar correctamente el estudio ecográfico de la vesícula biliar?', ['Ayuno de 6 horas', 'Hidratación abundante durante las 2 horas previas', 'Administración de contraste oral', 'Reposo en decúbito prono durante 30 minutos'], 0, 'TEMA 37', 'fácil'],
  ['Durante una ecografía abdominal, ¿qué posición se utiliza habitualmente como punto de partida?', ['Decúbito supino', 'Decúbito prono', 'Bipedestación', 'Sedestación'], 0, 'TEMA 37', 'fácil'],
  ['¿Qué maniobra puede facilitar la visualización de estructuras abdominales situadas por detrás de los últimos arcos costales?', ['Realizar una inspiración profunda y mantenida', 'Realizar una espiración máxima y rápida', 'Mantener al paciente en apnea después de una espiración forzada', 'Colocar siempre al paciente en decúbito prono'], 0, 'TEMA 37', 'medio'],
  ['¿Cuál es el valor máximo aproximado considerado normal para el diámetro de la vena porta en condiciones basales?', ['12 mm', '5 mm', '20 mm', '30 mm'], 0, 'TEMA 37', 'medio'],
  ['¿Qué característica presenta normalmente el flujo de la vena porta en el estudio Doppler?', ['Hepatópeto y monofásico', 'Hepatófugo y trifásico', 'Pulsátil y de alta resistencia', 'Bidireccional y continuo'], 0, 'TEMA 37', 'medio'],
  ['¿Qué velocidad máxima aproximada puede presentar normalmente el flujo portal?', ['15-35 cm/s', '1-5 cm/s', '50-80 cm/s', '100-150 cm/s'], 0, 'TEMA 37', 'medio'],
  ['¿Qué estructura vascular drena la sangre del parénquima hepático hacia la vena cava inferior?', ['Las venas suprahepáticas', 'La arteria hepática', 'La vena porta', 'La arteria mesentérica superior'], 0, 'TEMA 37', 'fácil'],
  ['¿Cuál de las siguientes estructuras forma parte de la tríada portal?', ['La vena porta', 'La vena cava inferior', 'La vena suprahepática media', 'La arteria renal'], 0, 'TEMA 37', 'fácil'],
  ['En el estudio Doppler de la arteria hepática, ¿qué característica es esperable?', ['Flujo arterial pulsátil de baja resistencia', 'Flujo venoso monofásico hepatópeto', 'Flujo trifásico propio de las venas suprahepáticas', 'Ausencia de flujo detectable en condiciones normales'], 0, 'TEMA 37', 'medio'],
  ['¿Qué referencia anatómica se utiliza para dividir funcionalmente el hígado en ocho segmentos?', ['La distribución de los pedículos portales y las venas suprahepáticas', 'La distribución de las arterias renales', 'La posición de la vesícula exclusivamente', 'La división anatómica del intestino delgado'], 0, 'TEMA 37', 'medio'],
  ['¿Qué característica ecográfica es típica de una litiasis vesicular?', ['Movilidad y sombra acústica posterior', 'Fijación a la pared y ausencia de sombra', 'Contenido anecogénico sin movilidad', 'Flujo interno detectable con Doppler color'], 0, 'TEMA 37', 'fácil'],
  ['¿Cuál es la principal diferencia ecográfica entre un pólipo vesicular y una litiasis?', ['El pólipo suele estar anclado a la pared y no produce sombra posterior', 'La litiasis siempre está adherida a la pared', 'El pólipo siempre se desplaza con los cambios de posición', 'La litiasis no presenta ecogenicidad'], 0, 'TEMA 37', 'medio'],
  ['¿Qué hallazgo es compatible con barro biliar?', ['Material de menor ecogenicidad que la litiasis, sin sombra posterior y con movilidad lenta', 'Imagen hiperecogénica fija con sombra intensa', 'Lesión sólida vascularizada adherida a la pared', 'Contenido completamente anecogénico que no cambia con la posición'], 0, 'TEMA 37', 'medio'],
  ['¿Qué grosor de la pared vesicular se considera normal en condiciones habituales?', ['Inferior a 3 mm', 'Entre 5 y 7 mm', 'Entre 8 y 10 mm', 'Superior a 10 mm'], 0, 'TEMA 37', 'fácil'],
  ['¿Cuál de los siguientes hallazgos puede formar parte de la presentación ecográfica de una colecistitis aguda?', ['Murphy ecográfico positivo', 'Ausencia obligatoria de litiasis', 'Desaparición completa de la pared vesicular', 'Vesícula siempre colapsada'], 0, 'TEMA 37', 'medio'],
  ['¿Qué diámetro aproximado presenta normalmente el conducto hepático común?', ['6 mm', '2 mm', '15 mm', '25 mm'], 0, 'TEMA 37', 'medio'],
  ['En pacientes de edad avanzada, ¿qué diámetro puede alcanzar la vía biliar extrahepática sin que necesariamente implique una dilatación patológica?', ['8-9 mm', '2-3 mm', '15-18 mm', '20-25 mm'], 0, 'TEMA 37', 'difícil'],
  ['¿Qué hallazgo define la coledocolitiasis?', ['La presencia de cálculos en la vía biliar', 'La presencia de aire en el árbol biliar', 'La inflamación aislada del páncreas', 'La ausencia congénita de la vesícula'], 0, 'TEMA 37', 'fácil'],
  ['¿Qué situación puede dificultar especialmente la valoración ecográfica de la vía biliar extrahepática?', ['La interposición de aire duodenal', 'La presencia de líquido libre exclusivamente', 'La ausencia de tejido adiposo', 'La inspiración profunda mantenida'], 0, 'TEMA 37', 'medio'],
  ['¿Cuál es una de las principales utilidades del Doppler durante el estudio de una posible dilatación de la vía biliar?', ['Diferenciar estructuras vasculares de los conductos biliares', 'Medir directamente la cantidad de bilis almacenada', 'Identificar exclusivamente cálculos vesiculares', 'Sustituir por completo el estudio ecográfico convencional'], 0, 'TEMA 37', 'medio']
];

(function(){
  const workspace=document.getElementById('workspace');
  const launcher=document.querySelector('.tests-launcher');
  const card=document.querySelector('[data-action="topic37"]');
  if(!workspace||!launcher||!card)return;
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const shuffle=a=>a.slice().sort(()=>Math.random()-0.5);
  const prepare=q=>{const opts=shuffle(q[1].map((text,i)=>({text,i})));return [q[0],opts.map(x=>x.text),opts.findIndex(x=>x.i===q[2])];};
  function start(){
    const qs=shuffle(topic37Curated).map(prepare); let pos=0,score=0;
    launcher.hidden=true;
    workspace.hidden=false;
    window.scrollTo({top:0,behavior:'instant'});
    function render(){
      if(pos>=qs.length){
        workspace.innerHTML=`<div class="study-material"><p class="eyebrow">TEST · TEMA 37</p><h2>🏆 Test terminado</h2><p class="final-score">${score} / ${qs.length}</p><p>${Math.round(score/qs.length*100)}% de aciertos</p><button class="secondary-button" id="pilot-again">Repetir</button><button class="secondary-button" id="pilot-menu">Volver a Tests</button></div>`;
        document.getElementById('pilot-again').onclick=start;
        document.getElementById('pilot-menu').onclick=()=>{workspace.hidden=true;launcher.hidden=false;window.scrollTo({top:0,behavior:'instant'});};
        return;
      }
      const q=qs[pos];
      workspace.innerHTML=`<div class="study-material"><p class="eyebrow">TEST · TEMA 37</p><h2>Pregunta ${pos+1} de ${qs.length}</h2><p>${esc(q[0])}</p><div class="answer-grid">${q[1].map((a,i)=>`<button class="answer-option" data-i="${i}">${String.fromCharCode(65+i)}) ${esc(a)}</button>`).join('')}</div><p class="exam-progress">Aciertos: ${score}</p></div>`;
      workspace.querySelectorAll('.answer-option').forEach(b=>b.onclick=()=>{
        const chosen=+b.dataset.i; workspace.querySelectorAll('.answer-option').forEach((x,i)=>{x.disabled=true;if(i===q[2])x.classList.add('correct');if(i===chosen&&chosen!==q[2])x.classList.add('wrong')});
        if(chosen===q[2])score++; setTimeout(()=>{pos++;render();window.scrollTo({top:0,behavior:'instant'});},450);
      });
    }
    render();
  }
  card.addEventListener('click',start);
})();
