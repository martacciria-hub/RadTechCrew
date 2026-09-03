// Test curado del TEMA 41 · EXPLORACIÓN ECOGRÁFICA DE LA MAMA
const topic41Curated = [
  ["¿Qué frecuencia central mínima deben tener los transductores lineales utilizados en la ecografía mamaria?", ["5 MHz", "7 MHz", "10 MHz", "15 MHz"], 2, "TEMA 41", "fácil"],
  ["En la ecografía mamaria, la ganancia debe ajustarse inicialmente de forma que:", ["El músculo pectoral sea el valor central de referencia.", "La grasa sea el valor central.", "La lesión tenga siempre la máxima ecogenicidad.", "Los tejidos fibrosos aparezcan anecoicos."], 1, "TEMA 41", "medio"],
  ["¿Cuál de las siguientes asociaciones respecto a la ecogenicidad es CORRECTA?", ["Anecoica → masas sólidas.", "Hipoecogénica → quistes simples.", "Ecogénica → ligamentos de Cooper y tejido fibroso.", "Hiperecogénica → quistes simples."], 2, "TEMA 41", "medio"],
  ["Respecto a las zonas focales, señale la opción CORRECTA:", ["Deben situarse siempre por encima de la lesión.", "Deben situarse al mismo nivel que la lesión.", "Solo pueden utilizarse focos multifocales.", "El foco no influye en la visualización de la lesión."], 1, "TEMA 41", "medio"],
  ["En cuanto a la profundidad del campo de visión durante la ecografía mamaria:", ["Debe ser siempre inferior a 2 cm.", "Debe ser exactamente de 4 cm.", "Debe ser de al menos 4 cm y permitir visualizar el músculo pectoral en el margen posterior.", "Debe ser superior a 10 cm en todas las pacientes."], 2, "TEMA 41", "difícil"],
  ["La posición de la paciente en decúbito supino con el brazo por encima de la cabeza tiene como finalidad principal:", ["Aumentar el espesor mamario y visualizar mejor las lesiones profundas.", "Reducir el espesor mamario y estirar el pectoral.", "Evitar el movimiento respiratorio.", "Comprimir la mama contra la camilla."], 1, "TEMA 41", "fácil"],
  ["Para estudiar una lesión localizada lateralmente o en la axila, la posición recomendada es:", ["Decúbito prono.", "Decúbito supino estricto.", "Posición oblicua.", "Posición sentada obligatoriamente."], 2, "TEMA 41", "fácil"],
  ["Una paciente presenta una lesión que únicamente puede palparse cuando está de pie. ¿Qué posición puede utilizarse para la exploración?", ["Sentada.", "Decúbito prono.", "Trendelenburg.", "Decúbito lateral exclusivamente."], 0, "TEMA 41", "fácil"],
  ["En relación con la documentación de los hallazgos ecográficos, el tamaño de una lesión debe documentarse:", ["En un único plano.", "Solo mediante una imagen sin medidas.", "Mostrando los ejes en al menos dos planos.", "Únicamente mediante una medición del diámetro máximo."], 2, "TEMA 41", "medio"],
  ["Además de las imágenes con las medidas de la lesión, debe obtenerse al menos:", ["Una imagen sin medidas que incluya lateralidad, localización y orientación del transductor.", "Una imagen exclusivamente en plano radial.", "Una imagen sin información del paciente.", "Una imagen únicamente del músculo pectoral."], 0, "TEMA 41", "medio"],
  ["Una exploración ecográfica mamaria se considera reproducible cuando:", ["Se realiza siempre con el mismo ecógrafo.", "Se utilizan exclusivamente imágenes en tiempo real.", "Otro radiólogo puede reproducir el estudio tras visualizar las imágenes previas.", "Se realizan exactamente cuatro imágenes por mama."], 2, "TEMA 41", "medio"],
  ["Durante la exploración en tiempo real, ¿cuál de las siguientes posibilidades permite la ecografía?", ["Identificar artefactos y valorar la movilidad de las lesiones.", "Valorar únicamente la ecogenicidad.", "Evitar la valoración de la relación con otras estructuras.", "Sustituir siempre a la mamografía."], 0, "TEMA 41", "medio"],
  ["Respecto a la presión ejercida con el transductor:", ["Debe ser siempre máxima para mejorar la penetración.", "Debe ser mínima, aumentando únicamente cuando sea necesario valorar colapsabilidad o rigidez.", "Nunca debe modificarse durante el estudio.", "Debe ser suficiente para comprimir completamente la mama."], 1, "TEMA 41", "medio"],
  ["¿Qué estándar se utiliza para la superposición de los planos durante la exploración mamaria?", ["Longitudinal/transversal.", "Sagital/coronal.", "Radial/antirradial.", "Axial/oblicuo."], 2, "TEMA 41", "fácil"],
  ["El sistema BI-RADS de ultrasonidos fue introducido en 2003 por:", ["WHO.", "European Society of Radiology.", "American College of Radiology.", "FDA."], 2, "TEMA 41", "fácil"],
  ["Según la clasificación de los márgenes de una masa, un margen microlobulado presenta:", ["Líneas puntiagudas que se proyectan desde la masa.", "Esquinas afiladas.", "Aspecto festoneado.", "Transición abrupta y perfectamente definida."], 2, "TEMA 41", "medio"],
  ["¿Cuál de las siguientes características corresponde a un margen espiculado?", ["Aspecto festoneado.", "Líneas puntiagudas que se proyectan desde la masa.", "Ausencia de diferencia entre masa y tejido.", "Halo ecogénico bien definido."], 1, "TEMA 41", "medio"],
  ["En cuanto a la atenuación posterior, el realce se caracteriza por:", ["Disminución de los ecos posteriores.", "Ausencia completa de ecos internos.", "Aumento de los ecos posteriores.", "Presencia simultánea de sombra y realce."], 2, "TEMA 41", "fácil"],
  ["¿Cuál de las siguientes NO pertenece a los hallazgos descritos como posibles alteraciones del tejido adyacente?", ["Edema.", "Distorsión estructural.", "Engrosamiento cutáneo.", "Aumento de la frecuencia del transductor."], 3, "TEMA 41", "fácil"],
  ["¿Cuál de las siguientes es una indicación de la ecografía mamaria según el tema?", ["Exclusivamente el estudio de mujeres mayores de 50 años.", "Evaluación inicial de masas palpables en mujeres menores de 30 años, lactantes y embarazadas.", "Sustitución sistemática de la mamografía en el cribado.", "Exclusivamente la valoración de quistes simples."], 1, "TEMA 41", "medio"],
  ["Una lesión mamaria palpable ya identificada previamente mediante RM debe buscarse ecográficamente:", ["Sin tener en cuenta su localización en la RM, ya que la ecografía es independiente.", "Prestando especial atención para asegurar una correcta correlación con el hallazgo previo.", "Únicamente en posición sentada.", "Solo mediante Doppler."], 1, "TEMA 41", "difícil"],
  ["¿Cuál de las siguientes opciones describe CORRECTAMENTE una masa hipoecogénica?", ["Presenta ausencia de ecos internos.", "Tiene un bajo nivel de ecos en toda la lesión.", "Tiene la misma ecogenicidad que la grasa.", "Presenta mayor ecogenicidad que la grasa."], 1, "TEMA 41", "medio"],
  ["¿Cuál de las siguientes pertenece a los casos especiales contemplados en BI-RADS?", ["Distorsión estructural.", "Engrosamiento cutáneo.", "Microquistes agrupados.", "Margen angular."], 2, "TEMA 41", "medio"],
  ["En relación con la vascularización de una lesión, BI-RADS contempla:", ["Únicamente vascularización presente dentro de la lesión.", "Solo vascularización ausente o presente.", "Vascularización en la lesión, junto a ella o difusamente incrementada en el tejido adyacente, entre otras posibilidades.", "Exclusivamente vascularización arterial."], 2, "TEMA 41", "difícil"],
  ["¿Cuál de las siguientes NO figura entre las indicaciones de la ecografía mamaria recogidas en el tema?", ["Guía intervencionista de mama y axila.", "Planificación de radioterapia.", "Evaluación de implantes.", "Sustitución obligatoria de la mamografía en todas las mujeres."], 3, "TEMA 41", "fácil"]
];

window.topic41Curated = topic41Curated;

const previousTopicMenu41 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu41();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 41'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 41</span><h3>${esc((topics[41]||{}).title||'TEMA 41')}</h3><p>${topic41Curated.length} preguntas · ecografía mamaria</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 41', topic41Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 41</span><h3>${esc((topics[41]||{}).title||'TEMA 41')}</h3><p>${topic41Curated.length} preguntas · ecografía mamaria</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 41', topic41Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1]) > 41; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
