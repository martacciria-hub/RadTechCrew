// Test curado del TEMA 30: Radiología convencional dental.
const topic30Curated = [
  ["¿Cuántas piezas componen la dentición decidua?", ["16", "20", "24", "32"], 1, "TEMA 30", "fácil"],
  ["¿Cuántas piezas forman la dentición permanente?", ["20", "28", "30", "32"], 3, "TEMA 30", "fácil"],
  ["¿Cuál de las siguientes piezas NO forma parte de la dentición decidua?", ["Incisivos", "Caninos", "Premolares", "Molares temporales"], 2, "TEMA 30", "medio"],
  ["La dentición permanente comienza aproximadamente:", ["Al nacimiento", "A los 2 años", "A los 6 años", "A los 12 años"], 2, "TEMA 30", "fácil"],
  ["Los terceros molares reciben también el nombre de:", ["Premolares", "Cordales", "Incisivos", "Caninos"], 1, "TEMA 30", "fácil"],
  ["En odontología, el término mesial indica una estructura:", ["Alejada del plano sagital medio", "Situada hacia la superficie oclusal", "Próxima al plano sagital medio", "Dirigida hacia la cara vestibular"], 2, "TEMA 30", "fácil"],
  ["¿Qué término indica que una estructura se aleja del plano sagital medio?", ["Mesial", "Distal", "Lingual", "Palatino"], 1, "TEMA 30", "fácil"],
  ["La cara del diente orientada hacia el exterior, hacia el vestíbulo de la boca, se denomina:", ["Lingual", "Palatina", "Vestibular", "Mesial"], 2, "TEMA 30", "fácil"],
  ["El término lingual se utiliza específicamente para referirse a la cara interna de los dientes de:", ["La arcada superior", "La arcada inferior", "Ambas arcadas indistintamente", "Los incisivos exclusivamente"], 1, "TEMA 30", "medio"],
  ["El término palatino hace referencia a la cara interna de los dientes de:", ["La arcada superior", "La arcada inferior", "Ambas arcadas", "Los molares exclusivamente"], 0, "TEMA 30", "fácil"],
  ["Una lesión situada en la superficie masticatoria de un diente afecta a su superficie:", ["Vestibular", "Lingual", "Distal", "Oclusal"], 3, "TEMA 30", "fácil"],
  ["¿Cuál de las siguientes NO es una de las tres funciones principales atribuidas a los dientes?", ["Digestiva", "Fonética", "Estética", "Respiratoria"], 3, "TEMA 30", "fácil"],
  ["En la función digestiva de los dientes, los incisivos se encargan principalmente de:", ["Triturar", "Desgarrar", "Cortar", "Deglutir"], 2, "TEMA 30", "fácil"],
  ["¿Qué técnica intraoral permite visualizar las coronas y las crestas alveolares de dientes superiores e inferiores?", ["Periapical", "Bite-wing o aleta de mordida", "Oclusal", "Teleradiografía"], 1, "TEMA 30", "medio"],
  ["La aleta de mordida resulta especialmente útil para el estudio de:", ["La articulación temporomandibular", "La base del cráneo", "Caries y alteraciones de las coronas/crestas alveolares", "Las estructuras neurovasculares profundas"], 2, "TEMA 30", "medio"],
  ["En una radiografía periapical se estudian:", ["Exclusivamente las coronas dentales", "Diente, membrana periodontal y hueso circundante", "Únicamente las estructuras óseas maxilares", "Ambas arcadas completas"], 1, "TEMA 30", "medio"],
  ["En las radiografías periapicales, para incisivos y caninos la placa se coloca habitualmente:", ["Horizontal", "Oblicua", "Vertical", "En el plano sagital"], 2, "TEMA 30", "medio"],
  ["Para premolares y molares, la placa periapical se coloca habitualmente:", ["Vertical", "Horizontal", "Paralela al plano sagital medio", "Perpendicular al plano oclusal"], 1, "TEMA 30", "medio"],
  ["¿Qué dos técnicas pueden utilizarse para realizar una radiografía periapical?", ["Bisectriz y paralelismo", "Waters y Caldwell", "Schüller y Hirtz", "Towne y Caldwell"], 0, "TEMA 30", "fácil"],
  ["La técnica de la bisectriz y la técnica del paralelismo son técnicas propias de:", ["Radiografía panorámica", "Radiografía periapical", "Teleradiografía lateral", "TAC dental"], 1, "TEMA 30", "fácil"],
  ["En una radiografía oclusal maxilar, la placa se sitúa:", ["En el plano oclusal superior", "En el plano oclusal inferior", "Fuera de la boca", "En posición vertical junto a la mejilla"], 0, "TEMA 30", "medio"],
  ["Respecto a las radiografías oclusales, según el material de estudio:", ["Son actualmente la técnica intraoral más utilizada", "Se utilizan exclusivamente en niños", "Están prácticamente en desuso", "Han sustituido a las radiografías periapicales"], 2, "TEMA 30", "fácil"],
  ["En las técnicas intraorales actuales, el detector puede ser:", ["Exclusivamente una película convencional", "Exclusivamente una pantalla intensificadora", "Un detector digital intraoral", "Únicamente una placa panorámica"], 2, "TEMA 30", "medio"],
  ["Debido a la escasa DFP en radiología dental intraoral, resulta especialmente importante:", ["Utilizar siempre una parrilla antidifusora", "Aumentar al máximo el campo irradiado", "Una adecuada colimación y protección radiológica", "Utilizar siempre proyecciones oblicuas"], 2, "TEMA 30", "medio"],
  ["El diámetro externo aproximado del cono delimitador del haz mencionado para estas técnicas es de:", ["2 cm", "4 cm", "6 cm", "10 cm"], 2, "TEMA 30", "medio"],
  ["¿Cuál de las siguientes técnicas es extraoral?", ["Bite-wing", "Periapical", "Oclusal", "Ortopantomografía"], 3, "TEMA 30", "fácil"],
  ["La radiografía oblicua lateral dental:", ["Es actualmente la técnica extraoral de elección", "Está prácticamente en desuso gracias a la ortopantomografía", "Se utiliza exclusivamente para cefalometría", "Es una técnica intraoral"], 1, "TEMA 30", "medio"],
  ["La teleradiografía lateral de cara y cráneo se utiliza fundamentalmente para:", ["Estudiar exclusivamente caries", "Cefalometría y estudio ortodóncico", "Valorar únicamente el hueso alveolar", "Detectar alteraciones de la pulpa dental"], 1, "TEMA 30", "fácil"],
  ["En la teleradiografía lateral, además de las estructuras óseas del macizo facial, pueden visualizarse:", ["Exclusivamente los dientes", "Las partes blandas de la cara", "Únicamente las estructuras intracraneales", "Solo las raíces dentales"], 1, "TEMA 30", "medio"],
  ["¿Qué exploración permite visualizar en una sola imagen las dos arcadas dentarias completas y sus tejidos de soporte?", ["Radiografía periapical", "Bite-wing", "Ortopantomografía", "Teleradiografía lateral"], 2, "TEMA 30", "fácil"],
  ["Una de las principales ventajas de la ortopantomografía es:", ["Permitir estudiar un único diente con máximo detalle", "Obtener una visión global de ambas arcadas", "Evitar completamente cualquier distorsión geométrica", "Sustituir siempre al TAC dental"], 1, "TEMA 30", "medio"],
  ["Para la planificación de implantes dentales y la valoración de la calidad ósea, una técnica especialmente indicada es:", ["Bite-wing", "Radiografía oclusal", "TAC dental", "Teleradiografía lateral"], 2, "TEMA 30", "medio"],
  ["Una ventaja importante del TAC dental respecto a una radiografía convencional es que:", ["No utiliza radiación ionizante", "Elimina las superposiciones y permite reconstrucciones multiplanares", "Solo proporciona imágenes bidimensionales", "No permite valorar estructuras óseas"], 1, "TEMA 30", "difícil"],
  ["¿Cuál de las siguientes asociaciones es INCORRECTA?", ["Bite-wing → estudio de caries", "Periapical → diente y estructuras de soporte", "Teleradiografía lateral → ortodoncia", "Ortopantomografía → estudio exclusivo de un único diente"], 3, "TEMA 30", "medio"],
  ["Caso integrado: un paciente acude para planificación de un implante dental. Se necesita conocer la calidad del hueso, la situación de estructuras neurovasculares y disponer de reconstrucciones en diferentes planos. ¿Cuál sería la opción más adecuada?", ["Radiografía bite-wing", "Radiografía periapical", "Ortopantomografía exclusivamente", "TAC dental"], 3, "TEMA 30", "difícil"]
];
window.topic30Curated = topic30Curated;

const previousTopicMenu30 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu30();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b=>(b.textContent||'').includes('TEMA 30'));
  const setCard = b => {
    b.disabled = false;
    b.innerHTML = `<span class="module-number">TEMA 30</span><h3>${esc((topics[30]||{}).title||'TEMA 30')}</h3><p>${topic30Curated.length} preguntas disponibles</p><span class="module-action">Entrenar →</span>`;
    b.onclick = () => session('TEMA 30', topic30Curated);
  };
  if(existing){ setCard(existing); return; }
  const button = document.createElement('button');
  button.className='module-card';
  button.type='button';
  setCard(button);
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>30;});
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
