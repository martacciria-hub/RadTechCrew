// Test curado del TEMA 34 · DENSITOMETRÍA
const topic34Curated = [
  ["¿Qué caracteriza a la osteoporosis?", ["La disminución de la masa ósea y de la resistencia mecánica, con aumento de la incidencia de fracturas", "El aumento exclusivo de la masa muscular", "La disminución de la grasa corporal", "El aumento de la densidad mineral ósea"], 0, "TEMA 34", "fácil"],
  ["¿Qué permite medir la densitometría?", ["La densidad mineral del hueso", "Únicamente el grosor cortical", "La actividad osteoblástica directamente", "Solo la masa muscular"], 0, "TEMA 34", "fácil"],
  ["¿Cuál es la técnica de elección para cuantificar la densidad mineral ósea?", ["DXA o absorciometría con RX de doble energía", "Ecografía convencional", "RM sin contraste", "Radiografía simple"], 0, "TEMA 34", "fácil"],
  ["¿Para qué se utiliza la DMO obtenida mediante DXA?", ["Para el diagnóstico de osteoporosis y la monitorización de la respuesta al tratamiento", "Solo para valorar fracturas agudas", "Únicamente para estudiar tumores óseos", "Solo para calcular el IMC"], 0, "TEMA 34", "medio"],
  ["¿En qué principio se basa la DXA?", ["En la diferente absorción de los rayos X por los distintos componentes del organismo", "En la emisión de ultrasonidos por el hueso", "En la producción de campos magnéticos", "En la captación de radiación gamma exclusivamente"], 0, "TEMA 34", "medio"],
  ["¿Cómo puede obtenerse la energía dual en un equipo DXA?", ["Mediante emisión alternante de alto y bajo kilovoltaje o mediante un haz monoenergético con filtro de tierras raras", "Únicamente aumentando el mAs", "Solo mediante dos detectores de diferente tamaño", "Mediante un campo magnético variable"], 0, "TEMA 34", "difícil"],
  ["En el sistema de energía dual mediante filtro, ¿qué función cumple el filtro de tierras raras?", ["Absorber energía y separar los fotones de alta y baja energía", "Aumentar la dosis al paciente", "Colimar exclusivamente el haz secundario", "Sustituir al detector"], 0, "TEMA 34", "difícil"],
  ["¿Qué combinación corresponde a un equipo DXA de haz en lapicero?", ["Colimador puntual y un único detector", "Colimador en hendidura y detector múltiple", "Colimador múltiple y un detector puntual", "Sin colimador y dos tubos de RX"], 0, "TEMA 34", "medio"],
  ["¿Qué combinación corresponde a un equipo DXA de haz en abanico?", ["Colimador en hendidura y detector múltiple", "Colimador puntual y detector único", "Sin colimación y detector único", "Colimador circular y detector gamma"], 0, "TEMA 34", "medio"],
  ["Respecto a la DXA portátil de esqueleto periférico, ¿cuál es correcta?", ["Es más pequeña y barata, pero tiene menor fiabilidad y se utiliza como técnica de cribado", "Es más precisa que la DXA de mesa estable", "Es la técnica de elección para diagnosticar osteoporosis axial", "Solo se utiliza en niños"], 0, "TEMA 34", "medio"],
  ["¿Dónde se realiza el estudio con DXA portátil periférica según el material?", ["En la falange media del tercer dedo de la mano no dominante", "En el primer dedo de la mano dominante", "En la muñeca dominante", "En el quinto dedo del pie"], 0, "TEMA 34", "difícil"],
  ["¿Cuál es la principal utilidad de la DXA portátil periférica?", ["Realizar un cribado para seleccionar pacientes que deben someterse a un estudio con mesa estable", "Sustituir siempre al estudio axial", "Diagnosticar osteoporosis exclusivamente mediante el dedo", "Valorar únicamente la composición corporal"], 0, "TEMA 34", "medio"],
  ["¿Qué regiones se estudian habitualmente con la DXA de mesa estable para osteoporosis en adultos?", ["Columna lumbar y cadera", "Únicamente antebrazo", "Únicamente cráneo", "Columna cervical y hombro"], 0, "TEMA 34", "fácil"],
  ["¿Cuándo puede añadirse el estudio del antebrazo en un adulto?", ["Cuando una de las áreas principales no puede utilizarse o en pacientes con hiperparatiroidismo", "Siempre que el paciente sea menor de 20 años", "Solo después de una RM", "Únicamente cuando exista una fractura de cadera"], 0, "TEMA 34", "medio"],
  ["En niños y adolescentes menores de 20 años, ¿qué región se estudia mediante DXA según el material?", ["Solo el área lumbar", "Columna lumbar y ambas caderas", "Solo el antebrazo", "Todo el cuerpo para diagnosticar osteoporosis"], 0, "TEMA 34", "fácil"],
  ["¿Cuál de las siguientes situaciones debe investigarse antes de realizar una DXA de mesa estable?", ["Embarazo, administración reciente de contraste oral y estudios recientes de medicina nuclear", "Únicamente alergia al látex", "Solo antecedentes de hipertensión", "Únicamente el grupo sanguíneo"], 0, "TEMA 34", "medio"],
  ["¿Cuánto tiempo debe haber transcurrido, según el material, desde la administración de contraste oral antes de una DXA?", ["5 días", "12 horas", "2 días", "10 días"], 0, "TEMA 34", "difícil"],
  ["¿Cuánto tiempo debe haber transcurrido, según el material, desde un estudio de medicina nuclear antes de una DXA?", ["2 días", "5 días", "12 horas", "7 días"], 0, "TEMA 34", "difícil"],
  ["¿Qué debe hacerse con los objetos metálicos antes de una densitometría de mesa estable?", ["Retirarlos", "Dejarlos siempre puestos", "Colocarlos sobre la zona lumbar", "Sustituirlos por objetos de plomo"], 0, "TEMA 34", "fácil"],
  ["En la proyección de columna lumbar, ¿por qué se flexionan las rodillas sobre un soporte?", ["Para reducir la lordosis y acercar la columna a la mesa", "Para aumentar la lordosis lumbar", "Para elevar la pelvis y alejar la columna de la mesa", "Para rotar la columna 30°"], 0, "TEMA 34", "medio"],
  ["¿Entre qué niveles se realiza la adquisición de la columna lumbar según el material?", ["Desde la región inferior de L5 hasta D12", "Desde D1 hasta L1", "Desde L1 hasta el sacro exclusivamente", "Desde D12 hasta D1"], 0, "TEMA 34", "medio"],
  ["¿Qué debe incluir la imagen de columna lumbar correctamente adquirida?", ["D12 y costillas cranealmente, y L5 e ilíaco inferiormente", "Solo L1-L4 sin estructuras adyacentes", "Únicamente el sacro", "Solo las costillas inferiores"], 0, "TEMA 34", "medio"],
  ["¿Qué posición se utiliza para la cadera en la DXA según el material?", ["Pierna en abducción y rotación interna de 15-30°", "Pierna en aducción y rotación externa de 45°", "Pierna en flexión de 90° y rotación externa", "Pierna completamente inmóvil sin rotación"], 0, "TEMA 34", "medio"],
  ["¿Qué signo indica una correcta rotación interna de la cadera en la imagen?", ["El trocánter menor no debe ser visible", "El trocánter menor debe verse completamente", "Debe aparecer la rótula", "Debe desaparecer la cabeza femoral"], 0, "TEMA 34", "medio"],
  ["¿Qué debe incluir la imagen de cadera?", ["La cabeza femoral completa y al menos 1 cm por debajo de la región del trocánter menor", "Solo la cabeza femoral", "Solo el cuello femoral", "Únicamente la región acetabular"], 0, "TEMA 34", "difícil"],
  ["¿Qué antebrazo se estudia habitualmente mediante DXA?", ["El no dominante", "El dominante", "Siempre ambos", "El que tenga mayor perímetro"], 0, "TEMA 34", "fácil"],
  ["¿Cómo se coloca la mano durante el estudio densitométrico del antebrazo?", ["En pronación y sujeta con bandas", "En supinación y libre", "En posición neutra y cruzada sobre el tórax", "En flexión máxima"], 0, "TEMA 34", "medio"],
  ["¿Dónde se sitúa el centrado del estudio del antebrazo?", ["En el centro de la muñeca, a la altura de la estiloides cubital", "En el codo, sobre el olécranon", "En el centro de la mano", "En la cabeza del radio"], 0, "TEMA 34", "difícil"],
  ["¿Qué ROI se utiliza para valorar la columna lumbar?", ["Los cuerpos vertebrales L1-L4", "Solo L5", "D12-L1 exclusivamente", "Todo el sacro"], 0, "TEMA 34", "fácil"],
  ["¿Qué valor es especialmente útil en el estudio densitométrico lumbar?", ["La DMO media de las cuatro vértebras L1-L4", "La DMO de L5 exclusivamente", "La DMO máxima de una sola vértebra", "La suma de las áreas de las costillas"], 0, "TEMA 34", "medio"],
  ["¿Por qué deben excluirse del análisis las vértebras con fractura o lesión?", ["Porque pueden alterar la DMO media del conjunto", "Porque siempre tienen una DMO inferior a la normal", "Porque impiden medir el fémur", "Porque modifican la longitud del antebrazo"], 0, "TEMA 34", "medio"],
  ["¿Qué parámetro expresa la densidad mineral ósea (DMO)?", ["La cantidad media de calcio por unidad de área o volumen", "La cantidad concreta total de calcio sin relación con el tamaño", "El porcentaje de grasa corporal", "La masa muscular por unidad de longitud"], 0, "TEMA 34", "medio"],
  ["¿A qué población de referencia compara el T-score la DMO del paciente?", ["A una población adulta joven de la misma raza y sexo", "A personas de cualquier edad y sexo", "Solo a niños de la misma edad", "Exclusivamente a familiares del paciente"], 0, "TEMA 34", "medio"],
  ["Según los valores del material, ¿qué puntuación T corresponde a osteoporosis?", ["T < -2,5", "T > -1,0", "-1,0 < T < -2,5", "T = 0 exclusivamente"], 0, "TEMA 34", "fácil"],
  ["¿En qué grupo se utiliza especialmente la puntuación Z y qué indica un Z inferior a -2?", ["En niños y adolescentes hasta 20 años, mujeres premenopáusicas y hombres menores de 50; indica densidad ósea baja para la edad", "En todas las mujeres posmenopáusicas; indica osteoporosis", "Solo en hombres mayores de 50; indica fractura", "Solo en pacientes con hiperparatiroidismo; indica masa muscular baja"], 0, "TEMA 34", "difícil"],
  ["¿Cuál de las siguientes afirmaciones sobre el estudio DXA de cuerpo entero y el control de calidad es correcta?", ["Permite valorar masa grasa, masa magra y hueso; el control de calidad debe hacerse a diario y, si el densitómetro no se usa, como mínimo una vez por semana", "Permite diagnosticar por sí solo la osteoporosis y el control se hace una vez al año", "Solo mide masa ósea y no requiere calibración", "Solo se realiza en niños y se calibra después de cada paciente"], 0, "TEMA 34", "difícil"]
];

window.topic34Curated = topic34Curated;

const previousTopicMenu34 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu34();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 34'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 34</span><h3>${esc((topics[34]||{}).title||'TEMA 34')}</h3><p>${topic34Curated.length} preguntas · densitometría y DXA</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 34', topic34Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 34</span><h3>${esc((topics[34]||{}).title||'TEMA 34')}</h3><p>${topic34Curated.length} preguntas · densitometría y DXA</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 34', topic34Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1]) > 34; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
