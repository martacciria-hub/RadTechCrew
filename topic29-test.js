// Test curado del TEMA 29: Histerosalpingografía.
const topic29Curated = [
  ["¿Cuál es el objetivo fundamental de la histerosalpingografía?", ["Valorar exclusivamente la morfología uterina", "Estudiar la morfología del útero y la permeabilidad de las trompas de Falopio", "Estudiar exclusivamente la función ovárica", "Valorar la vascularización pélvica"], 1, "TEMA 29", "fácil"],
  ["¿Cuál de las siguientes constituye la indicación principal de la histerosalpingografía?", ["Dolor pélvico agudo", "Infertilidad femenina", "Infección urinaria recurrente", "Endometriosis"], 1, "TEMA 29", "fácil"],
  ["Una paciente es remitida para estudio de abortos de repetición. ¿Cuál de las siguientes pruebas puede estar indicada para valorar la cavidad uterina y las trompas?", ["Urografía intravenosa", "Histerosalpingografía", "Cistografía", "Uretrocistografía"], 1, "TEMA 29", "medio"],
  ["¿Cuál de las siguientes situaciones constituye una contraindicación para realizar una HSG?", ["Mioma uterino conocido", "Infertilidad de larga evolución", "Posible embarazo", "Antecedentes de abortos de repetición"], 2, "TEMA 29", "fácil"],
  ["Además del posible embarazo, ¿cuál de las siguientes situaciones contraindica la realización de una HSG?", ["Sangrado uterino activo", "Antecedente de ligadura de trompas", "Infertilidad", "Malformación uterina congénita"], 0, "TEMA 29", "medio"],
  ["En relación con la enfermedad pélvica inflamatoria, la HSG:", ["Está indicada durante la fase aguda", "Está contraindicada si existe enfermedad pélvica inflamatoria activa", "Solo está contraindicada si existe fiebre", "No presenta ninguna relación con la infección pélvica"], 1, "TEMA 29", "medio"],
  ["Respecto a la alergia a los contrastes yodados, ¿cuál es la afirmación correcta según el tema?", ["Nunca puede realizarse una HSG en una paciente con antecedentes de alergia", "La alergia grave constituye una contraindicación", "El contraste utilizado es siempre gadolinio", "La alergia al yodo no tiene ninguna importancia en esta exploración"], 1, "TEMA 29", "medio"],
  ["¿Cuándo se recomienda realizar idealmente la HSG?", ["Durante la menstruación", "En la fase lútea", "En la fase folicular, aproximadamente entre los días 7 y 12", "Exclusivamente el día de la ovulación"], 2, "TEMA 29", "fácil"],
  ["¿Por qué se prefiere realizar la HSG en la fase folicular?", ["Porque las trompas están fisiológicamente dilatadas", "Porque el endometrio es más fino y facilita la interpretación", "Porque aumenta la producción de contraste", "Porque disminuye la visualización de la cavidad uterina"], 1, "TEMA 29", "medio"],
  ["Una paciente acude para una HSG el día 10 desde el inicio de su menstruación. Esta fecha:", ["Se encuentra dentro del intervalo recomendado", "Es demasiado precoz", "Es demasiado tardía", "Solo sería válida si la paciente está ovulando"], 0, "TEMA 29", "medio"],
  ["Respecto a la preparación previa de la paciente:", ["Es necesaria una preparación intestinal completa", "Es obligatorio el ayuno de 12 horas", "No requiere una preparación especial, aunque puede administrarse un AINE previamente", "Debe realizarse siempre una limpieza vaginal con contraste"], 2, "TEMA 29", "fácil"],
  ["¿Cuál es la finalidad principal de administrar un AINE aproximadamente una hora antes de la exploración?", ["Prevenir una reacción alérgica", "Reducir el dolor asociado al procedimiento", "Aumentar la permeabilidad tubárica", "Disminuir el grosor endometrial"], 1, "TEMA 29", "medio"],
  ["¿Qué tipo de contraste se utiliza en la HSG descrita en el tema?", ["Sulfato de bario", "Contraste yodado hidrosoluble de baja osmolaridad", "Contraste paramagnético", "Aire exclusivamente"], 1, "TEMA 29", "fácil"],
  ["¿Cuál es aproximadamente el volumen habitual de contraste utilizado durante la HSG?", ["1–2 ml", "5–10 ml", "20–30 ml", "50–100 ml"], 1, "TEMA 29", "fácil"],
  ["¿Cuál es la función del espéculo durante la técnica?", ["Fijar el balón del catéter", "Visualizar el cuello uterino", "Introducir directamente el contraste en el útero", "Desplegar las trompas de Falopio"], 1, "TEMA 29", "fácil"],
  ["¿Qué elemento puede utilizarse para realizar tracción del cuello uterino cuando sea necesario?", ["Pinzas Pozzi", "Pinzas Kocher", "Pinzas Foerster", "Pinzas de Magill"], 0, "TEMA 29", "medio"],
  ["¿Cuál de los siguientes catéteres puede utilizarse en una HSG?", ["Catéter Foley", "Catéter de Swan-Ganz", "Catéter ureteral exclusivamente", "Catéter nasogástrico"], 0, "TEMA 29", "fácil"],
  ["Una vez introducido el catéter y correctamente colocado, se infla su balón con el objetivo de:", ["Dilatar las trompas", "Fijarlo", "Aumentar la presión del contraste", "Visualizar directamente los ovarios"], 1, "TEMA 29", "medio"],
  ["¿Cuál es el orden correcto de actuación durante la técnica?", ["Contraste → espéculo → asepsia → catéter → balón", "Asepsia → espéculo → catéter → inflado del balón → retirada del espéculo → contraste", "Espéculo → contraste → catéter → asepsia → balón", "Catéter → contraste → balón → espéculo → asepsia"], 1, "TEMA 29", "difícil"],
  ["Tras la colocación del catéter, el contraste debe introducirse:", ["Rápidamente y a alta presión", "Lentamente y bajo control fluoroscópico", "Sin control radiológico", "Únicamente después de retirar el catéter"], 1, "TEMA 29", "medio"],
  ["La primera radiografía de pelvis antes de introducir el contraste sirve principalmente como:", ["Imagen postevacuación", "Imagen inicial de referencia", "Prueba de permeabilidad tubárica", "Imagen exclusiva de las trompas"], 1, "TEMA 29", "fácil"],
  ["En la primera fase postcontraste, antes de conseguir una distensión completa, pueden valorarse especialmente:", ["Defectos de repleción y alteraciones del contorno uterino", "Únicamente los ovarios", "Exclusivamente la cavidad peritoneal", "Solo la vejiga urinaria"], 0, "TEMA 29", "medio"],
  ["Durante la progresión del estudio se observa el paso del contraste desde la cavidad uterina hacia ambas trompas y posteriormente hacia la cavidad peritoneal. Este último hallazgo indica:", ["Obstrucción bilateral", "Permeabilidad tubárica", "Malformación cervical", "Embarazo intrauterino"], 1, "TEMA 29", "difícil"],
  ["¿Cuál de las siguientes secuencias representa mejor la progresión de las imágenes de la HSG?", ["Trompas → útero → peritoneo", "Útero → distensión uterina → trompas → cavidad peritoneal", "Peritoneo → trompas → útero → cérvix", "Útero → peritoneo → trompas → distensión uterina"], 1, "TEMA 29", "difícil"],
  ["Una vez finalizada la obtención de las imágenes durante la inyección, ¿qué procedimiento adicional contempla el protocolo?", ["Repetir la HSG inmediatamente con doble volumen", "Retirar el catéter y realizar una radiografía postevacuación", "Realizar una urografía intravenosa", "Realizar una radiografía exclusivamente de tórax"], 1, "TEMA 29", "medio"],
  ["¿Qué se pretende valorar con la radiografía postevacuación?", ["La posición de los ovarios", "La distribución libre del contraste en la cavidad peritoneal", "El vaciamiento de la vejiga", "La función renal"], 1, "TEMA 29", "medio"],
  ["Durante la exploración, la paciente presenta una marcada anteflexión uterina que dificulta la correcta representación de la cavidad. ¿Qué maniobra puede ser necesaria?", ["Tracción del cuello uterino", "Tracción de la vejiga", "Compresión abdominal intensa", "Decúbito exclusivamente lateral"], 0, "TEMA 29", "difícil"],
  ["¿Qué finalidad tienen principalmente las proyecciones oblicuas durante una HSG?", ["Visualizar mejor el trayecto de las trompas", "Valorar exclusivamente el cuello uterino", "Sustituir siempre a la proyección inicial", "Visualizar los riñones"], 0, "TEMA 29", "medio"],
  ["Durante la HSG no se consigue opacificar correctamente una de las trompas. ¿Cuál de las siguientes puede utilizarse como proyección complementaria?", ["Decúbito lateral o prono", "Bipedestación obligatoria", "Trendelenburg exclusivamente", "Decúbito supino sin ninguna modificación"], 0, "TEMA 29", "difícil"],
  ["Una paciente con antecedente de ligadura tubárica es remitida para comprobar la efectividad del método anticonceptivo. La HSG:", ["Está contraindicada por definición", "Puede estar indicada para valorar la permeabilidad tubárica", "Solo permite estudiar el útero", "No permite estudiar las trompas"], 1, "TEMA 29", "medio"],
  ["¿Cuál de las siguientes asociaciones es INCORRECTA?", ["Pinzas Pozzi → tracción cervical", "Espéculo → visualización del cuello uterino", "Contraste yodado hidrosoluble → opacificación del aparato genital", "Buscapina → contraste radiopaco"], 3, "TEMA 29", "medio"],
  ["¿Cuál de las siguientes asociaciones es CORRECTA?", ["Fase lútea → momento ideal para la HSG", "Día 7–12 → fase folicular recomendada", "Embarazo posible → indicación de HSG", "EIP activa → condición favorable para realizar la exploración"], 1, "TEMA 29", "fácil"],
  ["Durante la HSG se observa una cavidad uterina correctamente distendida, pero el contraste no progresa a través de una trompa. ¿Qué estructura está siendo evaluada específicamente en este momento?", ["Endometrio", "Conducto tubárico", "Ovario", "Vagina"], 1, "TEMA 29", "medio"],
  ["¿Cuál de las siguientes afirmaciones sobre la HSG es FALSA?", ["Utiliza fluoroscopia para controlar la introducción del contraste", "Permite valorar la morfología uterina", "El paso del contraste a la cavidad peritoneal puede demostrar permeabilidad tubárica", "Su objetivo principal es valorar la función ovárica"], 3, "TEMA 29", "medio"],
  ["Caso práctico: una mujer en estudio de infertilidad acude para HSG. Se encuentra en el día 9 del ciclo, no presenta sangrado ni signos de infección y se ha descartado embarazo. Se realiza la radiografía inicial de pelvis, se coloca el espéculo y posteriormente el catéter. Tras inflar el balón se retira el espéculo y se comienza a introducir contraste bajo escopia. Se observa inicialmente la cavidad uterina, después las trompas y finalmente paso de contraste a la cavidad peritoneal. ¿Cuál de las siguientes interpretaciones es la más correcta?", ["El procedimiento se ha realizado fuera del momento recomendado y el paso peritoneal indica obstrucción", "La secuencia es compatible con una HSG correctamente realizada y el paso del contraste al peritoneo indica permeabilidad tubárica", "El balón debe inflarse después de introducir todo el contraste", "La HSG debería haberse realizado durante la fase lútea"], 1, "TEMA 29", "difícil"]
];
window.topic29Curated = topic29Curated;

const previousTopicMenu29 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu29();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 29'));
  const setCard = b => {
    b.disabled = false;
    b.innerHTML = `<span class="module-number">TEMA 29</span><h3>${esc((topics[29]||{}).title||'TEMA 29')}</h3><p>${topic29Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
    b.onclick = () => session('TEMA 29', topic29Curated);
  };
  if(existing){ setCard(existing); return; }
  const button = document.createElement('button');
  button.className='module-card';
  button.type='button';
  setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>29;});
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
