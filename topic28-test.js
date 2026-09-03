// Test curado del TEMA 28: Radiología convencional del aparato urinario.
const topic28Curated = [
  ["¿Cuál de las siguientes estructuras NO forma parte del aparato urinario?", ["Riñón", "Uréter", "Vejiga", "Glándula suprarrenal"], 3, "TEMA 28", "fácil"],
  ["Además de su función en la formación de orina, el riñón participa en la producción de:", ["Insulina", "Eritropoyetina", "Tiroxina", "Cortisol"], 1, "TEMA 28", "fácil"],
  ["La renina producida por el riñón interviene principalmente en:", ["La regulación de la presión arterial", "La digestión de proteínas", "La coagulación sanguínea", "La formación de bilis"], 0, "TEMA 28", "medio"],
  ["¿Cuál es la función principal de los uréteres?", ["Filtrar la sangre", "Almacenar la orina", "Transportar la orina hasta la vejiga", "Eliminar la orina al exterior"], 2, "TEMA 28", "fácil"],
  ["Respecto a la uretra, ¿cuál de las siguientes afirmaciones es correcta?", ["La uretra femenina mide aproximadamente 20-25 cm", "La uretra masculina mide aproximadamente 2,5-4 cm", "La uretra femenina es más corta que la masculina", "Ambas tienen la misma longitud"], 2, "TEMA 28", "medio"],
  ["En el varón, ¿en qué segmento de la uretra se encuentra el veru montanum?", ["Uretra peneana", "Uretra bulbar", "Uretra prostática", "Uretra membranosa"], 2, "TEMA 28", "medio"],
  ["El veru montanum se relaciona directamente con:", ["La desembocadura de los conductos eyaculadores", "Las glándulas de Skene", "Las glándulas de Cowper", "El cuello vesical"], 0, "TEMA 28", "medio"],
  ["Las glándulas de Cowper se localizan relacionadas con:", ["La uretra bulbar", "La uretra prostática", "La vejiga", "El uréter"], 0, "TEMA 28", "medio"],
  ["¿Qué estructura se corresponde con las glándulas parauretrales femeninas?", ["Glándulas de Littre", "Glándulas de Cowper", "Glándulas de Skene", "Glándulas de Bartholin"], 2, "TEMA 28", "medio"],
  ["El sistema pielocalicial está constituido fundamentalmente por:", ["Uréter y vejiga", "Pelvis renal y cálices", "Uretra y cuello vesical", "Corteza y cápsula renal"], 1, "TEMA 28", "fácil"],
  ["¿Qué contraste se utiliza habitualmente en los estudios radiológicos del aparato urinario descritos en el tema?", ["Sulfato de bario", "Contraste yodado", "Gadolinio", "Aire"], 1, "TEMA 28", "fácil"],
  ["¿Qué elemento se utiliza específicamente para realizar una pielografía retrógrada?", ["Catéter de nefrostomía", "Catéter ureteral", "Sonda nasogástrica", "Sonda rectal"], 1, "TEMA 28", "medio"],
  ["En una pielografía anterógrada, el acceso utilizado habitualmente es:", ["La uretra", "La vejiga", "Una nefrostomía", "La ileostomía"], 2, "TEMA 28", "medio"],
  ["¿Cuál de las siguientes asociaciones es INCORRECTA?", ["Catéter ureteral → pielografía retrógrada", "Nefrostomía → pielografía anterógrada", "Sonda Foley → cistografía", "Catéter ureteral → pielografía anterógrada"], 3, "TEMA 28", "difícil"],
  ["La urografía intravenosa se caracteriza por:", ["Introducir el contraste directamente en la vejiga", "Administrar contraste por vía intravenosa", "Introducir el contraste mediante nefrostomía", "Administrar exclusivamente contraste oral"], 1, "TEMA 28", "fácil"],
  ["¿Cuál es el objetivo principal de la urografía IV?", ["Estudiar exclusivamente la uretra", "Valorar funcionalmente el aparato urinario", "Estudiar únicamente la vejiga", "Valorar exclusivamente el colon"], 1, "TEMA 28", "medio"],
  ["En la urografía IV se pueden valorar:", ["Riñones, sistema pielocalicial, uréteres y vejiga", "Únicamente riñones y uretra", "Únicamente vejiga y uretra", "Riñones y colon"], 0, "TEMA 28", "medio"],
  ["Una paciente presenta incontinencia urinaria y se solicita un estudio radiológico para valorar vejiga y dinámica miccional. ¿Qué exploración se corresponde con esta indicación?", ["Pielografía retrógrada", "Cistografía", "Ileografía", "Urografía IV"], 1, "TEMA 28", "medio"],
  ["El cistocele constituye una indicación de:", ["Cistografía", "Pielografía anterógrada", "Ileografía", "Urografía IV exclusivamente"], 0, "TEMA 28", "medio"],
  ["En la cistografía, la secuencia descrita en el tema comienza por:", ["Micción", "Radiografía postmiccional", "Llenado de la vejiga", "Proyección oblicua"], 2, "TEMA 28", "fácil"],
  ["Durante una cistografía, ¿qué debe registrarse cuando el paciente refiere el primer deseo miccional?", ["La dosis de radiación", "El volumen de contraste introducido", "La presión arterial", "El tiempo de exposición"], 1, "TEMA 28", "medio"],
  ["Una vez alcanzada la máxima capacidad vesical durante una cistografía, el siguiente paso indicado es:", ["Finalizar inmediatamente el estudio", "Realizar las proyecciones oblicuas", "Retirar la sonda sin más imágenes", "Realizar únicamente una radiografía de tórax"], 1, "TEMA 28", "medio"],
  ["¿Cuál es la finalidad principal de la radiografía postmiccional?", ["Valorar el sistema pielocalicial", "Valorar el residuo vesical", "Valorar la uretra prostática", "Valorar la permeabilidad intestinal"], 1, "TEMA 28", "fácil"],
  ["Durante una cistografía en una mujer se quiere valorar específicamente la presencia de un cistocele. ¿Qué maniobra puede resultar de utilidad?", ["Valsalva", "Müller", "Trendelenburg", "Valsalva invertida"], 0, "TEMA 28", "medio"],
  ["En un paciente que no consigue miccionar después de la exploración, según el protocolo del tema:", ["Se suspende definitivamente cualquier actuación", "Se realiza un nuevo tránsito intestinal", "Se procede al sondaje", "Se administra contraste oral"], 2, "TEMA 28", "medio"],
  ["La uretrocistografía retrógrada y miccional está especialmente indicada para estudiar:", ["Únicamente los cálices renales", "Uretra y vejiga", "Únicamente el colon", "Riñón y uréter exclusivamente"], 1, "TEMA 28", "fácil"],
  ["¿Cuál de las siguientes situaciones constituye una contraindicación de la uretrocistografía?", ["Estenosis uretral", "Uretrorragia", "Infección aguda", "Alteraciones miccionales"], 2, "TEMA 28", "medio"],
  ["Durante la realización de una uretrocistografía masculina, la tracción del pene tiene como finalidad:", ["Aumentar la presión vesical", "Evitar falsas estenosis o acodamientos uretrales", "Facilitar el llenado renal", "Evitar el reflujo vesicoureteral"], 1, "TEMA 28", "difícil"],
  ["¿Cuál es el orden correcto de las fases descritas para la uretrocistografía?", ["Micción → abdomen simple → cistografía → uretrografía", "Abdomen simple → uretrografía → cistografía → micción → postmiccional", "Cistografía → abdomen simple → micción → uretrografía", "Uretrografía → abdomen simple → postmiccional → cistografía"], 1, "TEMA 28", "difícil"],
  ["Un paciente presenta una uropatía obstructiva y se desea estudiar el sistema pielocalicial y el uréter mediante administración de contraste desde la vejiga hacia arriba. ¿Qué técnica corresponde?", ["Pielografía anterógrada", "Urografía IV", "Pielografía retrógrada", "Ileografía"], 2, "TEMA 28", "difícil"],
  ["La diferencia fundamental en la dirección del contraste entre las pielografías retrógrada y anterógrada es:", ["Retrógrada: riñón → vejiga / Anterógrada: vejiga → riñón", "Ambas siguen la misma dirección", "Retrógrada: vejiga → riñón / Anterógrada: riñón → vejiga", "Retrógrada: uretra → vejiga / Anterógrada: uretra → riñón"], 2, "TEMA 28", "difícil"],
  ["¿Qué situación orientaría especialmente hacia una pielografía anterógrada?", ["Necesidad de estudiar el cuello vesical", "Existencia de una nefrostomía que permite acceder desde el riñón", "Sospecha de cistocele", "Estudio de una uretrorragia"], 1, "TEMA 28", "medio"],
  ["Un paciente ha sido sometido a una derivación urinaria en la que un asa intestinal sustituye a la vejiga. ¿Qué exploración del tema está indicada para valorar dicha derivación?", ["Cistografía", "Ileografía", "Uretrocistografía", "Pielografía retrógrada"], 1, "TEMA 28", "medio"],
  ["En la ileografía, el contraste se administra mediante:", ["Una sonda situada en la ileostomía", "Una sonda uretral", "Un catéter ureteral", "Una nefrostomía"], 0, "TEMA 28", "medio"],
  ["Caso práctico: paciente con traumatismo pélvico y sospecha de lesión uretral. Se decide realizar una uretrocistografía. ¿Cuál de las siguientes afirmaciones es correcta según el protocolo estudiado?", ["La exploración está indicada porque permite estudiar uretra y vejiga", "La infección aguda no supone contraindicación alguna", "La tracción del pene debe evitarse porque provoca falsas estenosis", "La primera fase debe ser siempre la micción antes del abdomen simple"], 0, "TEMA 28", "difícil"]
];
window.topic28Curated = topic28Curated;

const previousTopicMenu28 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu28();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 28'));
  const setCard = b => {
    b.disabled = false;
    b.innerHTML = `<span class="module-number">TEMA 28</span><h3>${esc((topics[28]||{}).title||'TEMA 28')}</h3><p>${topic28Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
    b.onclick = () => session('TEMA 28', topic28Curated);
  };
  if(existing){ setCard(existing); return; }
  const button = document.createElement('button');
  button.className='module-card';
  button.type='button';
  setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>28;});
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
