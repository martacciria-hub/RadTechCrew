// Test curado del TEMA 27: Radiología convencional del aparato digestivo y vía biliar.
const topic27Curated = [
  ["¿En qué tipo de sala se realizan habitualmente los estudios radiológicos convencionales del aparato digestivo descritos en el tema?", ["Sala convencional de radiografía", "Sala telecomandada", "Sala exclusiva de TC", "Quirófano"], 1, "TEMA 27", "fácil"],
  ["La fluoroscopia resulta especialmente importante en estos estudios porque:", ["Permite eliminar la radiación dispersa", "Permite observar estudios dinámicos en tiempo real", "Sustituye siempre las radiografías convencionales", "Evita la utilización de medios de contraste"], 1, "TEMA 27", "medio"],
  ["En un esofagograma, el objetivo principal es valorar:", ["Únicamente la morfología del estómago", "La deglución, función y anatomía del esófago", "Exclusivamente el vaciamiento gástrico", "La permeabilidad de la vía biliar"], 1, "TEMA 27", "fácil"],
  ["Un paciente presenta disfagia y se solicita un estudio radiológico específico del esófago. ¿Cuál sería el más adecuado?", ["Enema opaco", "Defecografía", "Esofagograma", "Enteroclisis"], 2, "TEMA 27", "fácil"],
  ["En el esofagograma, la utilización de una proyección oblicua anterior derecha (ADO) tiene como finalidad principal:", ["Superponer el esófago sobre la columna", "Evitar la superposición del esófago con la columna vertebral", "Visualizar exclusivamente el fundus gástrico", "Estudiar la vía biliar"], 1, "TEMA 27", "medio"],
  ["Durante un esofagograma, si se observa paso del contraste hacia la vía aérea, la actuación indicada es:", ["Aumentar la cantidad de contraste", "Cambiar inmediatamente a decúbito prono", "Suspender el estudio", "Continuar hasta completar la exploración"], 2, "TEMA 27", "difícil"],
  ["¿Cuál de las siguientes estructuras constituye una referencia anatómica del esofagograma?", ["Ángulo esplénico", "Botón aórtico", "Ciego", "Conducto cístico"], 1, "TEMA 27", "medio"],
  ["¿Cuál es la asociación correcta?", ["Esófago → enema opaco", "Colon → esofagograma", "Recto y mecanismo de defecación → defecografía", "Vía biliar → TEGD"], 2, "TEMA 27", "fácil"],
  ["El enema opaco simple se utiliza fundamentalmente para estudiar:", ["Esófago", "Colon", "Duodeno", "Vesícula biliar"], 1, "TEMA 27", "fácil"],
  ["En el enema opaco de doble contraste se emplean:", ["Contraste yodado y agua", "Bario y aire", "Bario y contraste paramagnético", "Aire y contraste intravenoso"], 1, "TEMA 27", "fácil"],
  ["¿Qué aporta fundamentalmente el doble contraste frente al enema opaco simple?", ["Una mejor valoración del patrón mucoso", "La valoración exclusiva de la vía biliar", "La visualización de la deglución", "El estudio de la función del suelo pélvico"], 0, "TEMA 27", "medio"],
  ["En un enema opaco de doble contraste, una de las actuaciones características consiste en:", ["Llenar completamente el colon con agua", "Vaciar parcialmente el colon e introducir aire", "Administrar contraste exclusivamente por vía intravenosa", "Introducir únicamente aire sin contraste"], 1, "TEMA 27", "medio"],
  ["Un paciente presenta una lesión pequeña de la mucosa colónica que podría pasar desapercibida con menor detalle. ¿Qué técnica ofrece mayor capacidad para valorar el patrón mucoso?", ["Enema opaco simple", "Enema opaco de doble contraste", "Esofagograma", "Defecografía"], 1, "TEMA 27", "difícil"],
  ["¿Cuál de las siguientes asociaciones es INCORRECTA?", ["Enema opaco → colon", "TEGD → esófago, estómago y duodeno", "Enteroclisis → intestino delgado", "Defecografía → vía biliar"], 3, "TEMA 27", "fácil"],
  ["El tránsito intestinal está dirigido principalmente al estudio de:", ["Yeyuno e íleon", "Recto y canal anal", "Esófago y estómago", "Vesícula y colédoco"], 0, "TEMA 27", "medio"],
  ["¿Cuál de las siguientes puede constituir una indicación del tránsito intestinal?", ["Malabsorción", "Litiasis vesicular exclusivamente", "Fractura vertebral", "Disfagia orofaríngea exclusivamente"], 0, "TEMA 27", "medio"],
  ["Respecto a la enteroclisis, ¿cuál es la afirmación correcta?", ["Es menos precisa que el tránsito intestinal", "Es una técnica para estudiar exclusivamente el colon", "Permite un estudio más preciso del intestino delgado", "Se utiliza principalmente para estudiar el recto"], 2, "TEMA 27", "medio"],
  ["Una característica de la enteroclisis frente al tránsito intestinal convencional es que:", ["Es más precisa, pero puede resultar más molesta", "No utiliza contraste", "Solo permite estudiar el esófago", "No requiere fluoroscopia"], 0, "TEMA 27", "medio"],
  ["El TEGD corresponde a:", ["Tránsito rectosigmoideo", "Tránsito esófago-gastro-duodenal", "Tránsito entero-gástrico distal", "Técnica de exploración de la vía biliar"], 1, "TEMA 27", "fácil"],
  ["¿Qué estructuras se estudian mediante un TEGD?", ["Colon, sigma y recto", "Esófago, estómago y duodeno", "Yeyuno, íleon y ciego", "Vesícula, colédoco y conducto cístico"], 1, "TEMA 27", "fácil"],
  ["Un paciente con sospecha de patología gástrica y duodenal es remitido para un estudio que incluya también el esófago. ¿Qué exploración corresponde?", ["TEGD", "Enema opaco", "Defecografía", "Enteroclisis"], 0, "TEMA 27", "medio"],
  ["La defecografía se caracteriza principalmente por ser:", ["Un estudio exclusivamente anatómico del colon", "Un estudio dinámico de la defecación", "Un estudio de la vía biliar", "Una exploración estática del estómago"], 1, "TEMA 27", "fácil"],
  ["Durante una defecografía, ¿qué estructura o mecanismo tiene especial interés?", ["Ángulo anorrectal y mecanismo de defecación", "Conducto hepático común", "Unión esofagogástrica exclusivamente", "Ángulo hepático del colon exclusivamente"], 0, "TEMA 27", "medio"],
  ["¿Cuál de las siguientes combinaciones corresponde a la técnica descrita para una defecografía?", ["Paciente de pie + contraste intravenoso", "Paciente sentado + expulsión del contraste grabada en vídeo", "Paciente en decúbito prono + contraste oral", "Paciente en bipedestación + aire intraluminal"], 1, "TEMA 27", "medio"],
  ["En relación con la preparación de la defecografía, ¿qué opción es correcta?", ["Enema de limpieza aproximadamente 2 horas antes", "Ayuno absoluto durante 24 horas", "Preparación exclusivamente con contraste intravenoso", "No precisa ninguna preparación"], 0, "TEMA 27", "medio"],
  ["¿Cuál de las siguientes asociaciones anatómicas es correcta?", ["Fundus → porción superior del estómago", "Bulbo duodenal → última porción del intestino delgado", "Ángulo esplénico → flexura derecha del colon", "Colédoco → conducto que comunica faringe y estómago"], 0, "TEMA 27", "medio"],
  ["El ángulo de Treitz corresponde a:", ["La unión entre esófago y estómago", "La unión entre duodeno y yeyuno", "La unión entre íleon y ciego", "La unión entre colon y recto"], 1, "TEMA 27", "difícil"],
  ["¿Cuál de las siguientes relaciones de la vía biliar es correcta?", ["El conducto cístico comunica la vesícula con la vía biliar", "El colédoco desemboca directamente en el esófago", "El conducto hepático común pertenece al intestino delgado", "La ampolla de Vater se encuentra en el colon"], 0, "TEMA 27", "medio"],
  ["El objetivo principal de los estudios de la vía biliar descritos en el tema es:", ["Valorar la permeabilidad de la vía biliar", "Estudiar la deglución", "Valorar el mecanismo de defecación", "Determinar la motilidad del colon"], 0, "TEMA 27", "fácil"],
  ["En un estudio de la vía biliar aparece un defecto de repleción. ¿Qué posibilidad puede representar?", ["Litiasis", "Fractura", "Neumotórax", "Hernia discal"], 0, "TEMA 27", "medio"],
  ["Durante un estudio de la vía biliar es especialmente importante purgar correctamente la jeringa de contraste porque:", ["El aire puede simular una litiasis", "El aire aumenta la concentración de bilirrubina", "El aire impide siempre el paso del contraste al estómago", "El aire produce automáticamente una perforación"], 0, "TEMA 27", "difícil"],
  ["En un control tras colecistectomía mediante el procedimiento descrito en el tema, el contraste permite valorar, entre otras estructuras:", ["Conducto cístico, colédoco y vías biliares intrahepáticas", "Esófago, fundus y sigma", "Recto, suelo pélvico y canal anal", "Yeyuno, íleon y ciego exclusivamente"], 0, "TEMA 27", "difícil"],
  ["¿Cuál de las siguientes afirmaciones sobre la situación actual de los estudios radiológicos de la vía biliar es correcta según el tema?", ["Son las únicas técnicas utilizadas actualmente", "Han quedado prácticamente en desuso por el desarrollo de la ecografía y la RM", "Han sustituido completamente a la ecografía", "Solo se realizan en pacientes pediátricos"], 1, "TEMA 27", "medio"],
  ["Una paciente presenta pérdida de peso y molestias digestivas, y se solicita una exploración para valorar esófago, estómago y duodeno. ¿Cuál de las siguientes sería la opción más coherente?", ["TEGD", "Defecografía", "Enema opaco", "Estudio aislado de vía biliar"], 0, "TEMA 27", "medio"],
  ["Caso de examen: un paciente presenta una alteración de la deglución. Durante el estudio radiológico se administra contraste oral bajo control fluoroscópico y se observa paso del contraste hacia la vía aérea. ¿Cuál es la actuación correcta?", ["Continuar el estudio para completar todas las proyecciones", "Cambiar a enema opaco", "Suspender inmediatamente el estudio", "Administrar más contraste para delimitar mejor el esófago"], 2, "TEMA 27", "difícil"]
];
window.topic27Curated = topic27Curated;

const previousTopicMenu27 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu27();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 27'));
  const setCard = b => {
    b.disabled = false;
    b.innerHTML = `<span class="module-number">TEMA 27</span><h3>${esc((topics[27]||{}).title||'TEMA 27')}</h3><p>${topic27Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
    b.onclick = () => session('TEMA 27', topic27Curated);
  };
  if(existing){ setCard(existing); return; }
  const button = document.createElement('button');
  button.className='module-card';
  button.type='button';
  setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>27;});
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
