// Test curado del TEMA 35 · PRINCIPIOS FÍSICOS Y TÉCNICOS DE LOS ULTRASONIDOS
const topic35Curated = [
  ["¿Qué elemento del ecógrafo genera y recibe las ondas de ultrasonidos?", ["Monitor", "Transductor", "Consola de control", "Unidad central"], 1, "TEMA 35", "fácil"],
  ["¿Qué fenómeno físico permite transformar energía eléctrica en energía mecánica y viceversa en el transductor?", ["Efecto Doppler", "Efecto piezoeléctrico", "Efecto fotoeléctrico", "Fenómeno de resonancia magnética"], 1, "TEMA 35", "fácil"],
  ["Los ultrasonidos se consideran ondas sonoras con una frecuencia:", ["Inferior a 20 Hz", "Entre 20 y 2.000 Hz", "Superior a 20.000 Hz", "Exactamente de 20.000 Hz"], 2, "TEMA 35", "fácil"],
  ["¿Cuál de las siguientes características corresponde a una onda mecánica?", ["Puede propagarse en el vacío", "Necesita un medio físico para propagarse", "Siempre es transversal", "No transporta energía"], 1, "TEMA 35", "fácil"],
  ["En una onda longitudinal, la vibración de las partículas es:", ["Perpendicular a la dirección de propagación", "Paralela a la dirección de propagación", "Circular respecto al haz", "Independiente de la propagación"], 1, "TEMA 35", "fácil"],
  ["¿Qué representa la frecuencia de una onda?", ["La distancia entre dos ciclos", "El tiempo que dura un ciclo", "El número de ciclos por segundo", "La máxima presión de la onda"], 2, "TEMA 35", "fácil"],
  ["La frecuencia y el período de una onda son:", ["Directamente proporcionales", "Inversamente proporcionales", "Siempre iguales", "Independientes entre sí"], 1, "TEMA 35", "fácil"],
  ["En ecografía médica, el rango de frecuencias utilizado aproximadamente es:", ["1–20 Hz", "1–20 kHz", "1–20 MHz", "20–200 MHz"], 2, "TEMA 35", "fácil"],
  ["Si aumenta la frecuencia del ultrasonido, manteniendo constantes los demás factores, ¿qué ocurre con la longitud de onda?", ["Aumenta", "Disminuye", "No cambia", "Se duplica siempre"], 1, "TEMA 35", "medio"],
  ["La presión de amplitud de una onda ultrasónica se expresa en:", ["Vatios", "Hertzios", "Pascales", "Rayl"], 2, "TEMA 35", "fácil"],
  ["La potencia de una onda representa:", ["La distancia recorrida por la onda", "La tasa con la que se produce o transporta energía", "El número de ciclos por segundo", "La presión máxima"], 1, "TEMA 35", "medio"],
  ["¿En qué unidad se expresa la potencia?", ["W", "Hz", "Pa", "Rayl"], 0, "TEMA 35", "fácil"],
  ["La intensidad de una onda ultrasónica se relaciona con:", ["La potencia por unidad de superficie", "La frecuencia por unidad de tiempo", "La longitud de onda por unidad de área", "La velocidad por unidad de presión"], 0, "TEMA 35", "medio"],
  ["En el transductor, ¿qué componente produce y detecta los ultrasonidos?", ["Lente acústica", "Capa adaptadora", "Elemento piezoeléctrico", "Capa amortiguadora"], 2, "TEMA 35", "fácil"],
  ["¿Cuál es la función principal de la capa amortiguadora o backing?", ["Aumentar la diferencia de impedancias", "Reducir las vibraciones posteriores del elemento piezoeléctrico", "Enfocar el haz", "Generar el Doppler"], 1, "TEMA 35", "medio"],
  ["La capa adaptadora (matching layer) tiene como función principal:", ["Disminuir la diferencia de impedancias", "Aumentar la frecuencia de resonancia", "Absorber todos los ecos", "Generar el campo cercano"], 0, "TEMA 35", "medio"],
  ["¿Qué componente del transductor ayuda a enfocar el haz y mejorar la resolución lateral?", ["Lente acústica", "Backing", "Electrodo", "Unidad central"], 0, "TEMA 35", "fácil"],
  ["Si el elemento piezoeléctrico es más fino, su frecuencia de resonancia será:", ["Más baja", "Más alta", "Igual a cero", "Independiente de su grosor"], 1, "TEMA 35", "medio"],
  ["La impedancia acústica depende principalmente de:", ["Densidad y velocidad del medio", "Frecuencia y período exclusivamente", "Potencia y amplitud exclusivamente", "Ganancia y FOV"], 0, "TEMA 35", "medio"],
  ["¿Qué ocurre cuando existe una diferencia de impedancia acústica entre dos tejidos?", ["Se genera un eco por reflexión", "Desaparece el ultrasonido", "La frecuencia siempre aumenta", "Se produce radiación ionizante"], 0, "TEMA 35", "fácil"],
  ["¿Qué transductor presenta un haz paralelo y se utiliza especialmente para estructuras superficiales?", ["Convexo", "Sectorial", "Lineal", "Phased Array"], 2, "TEMA 35", "fácil"],
  ["¿Qué transductor se utiliza habitualmente para estudios abdominales y obstétricos?", ["Lineal", "Convexo", "Sectorial exclusivamente", "Mecánico"], 1, "TEMA 35", "fácil"],
  ["¿Qué característica corresponde al transductor sectorial?", ["Haz paralelo y rectangular", "Haz en abanico", "Haz exclusivamente perpendicular", "Haz sin focalización"], 1, "TEMA 35", "fácil"],
  ["La zona de Fresnel corresponde al:", ["Campo lejano", "Campo cercano", "Punto focal exclusivamente", "Campo de visión"], 1, "TEMA 35", "medio"],
  ["La zona de Fraunhofer corresponde al:", ["Campo cercano", "Campo lejano", "Interior del transductor", "Punto de máxima presión"], 1, "TEMA 35", "medio"],
  ["¿Qué resolución depende principalmente de la longitud del pulso?", ["Resolución lateral", "Resolución axial", "Resolución temporal", "Resolución de contraste"], 1, "TEMA 35", "medio"],
  ["¿De qué depende principalmente la resolución lateral?", ["Del ancho del haz", "De la longitud del pulso", "Del período", "Del FOV"], 0, "TEMA 35", "medio"],
  ["¿Qué resolución permite representar correctamente estructuras en movimiento?", ["Axial", "Lateral", "Temporal", "De contraste"], 2, "TEMA 35", "fácil"],
  ["El Frame Rate indica:", ["El número de imágenes obtenidas por segundo", "La frecuencia del transductor", "El número de ecos por imagen", "La intensidad del haz"], 0, "TEMA 35", "fácil"],
  ["¿Qué interacción convierte la energía acústica en calor?", ["Reflexión", "Absorción", "Refracción", "Difracción"], 1, "TEMA 35", "fácil"],
  ["¿Qué fenómeno constituye la base del eco utilizado para formar la imagen ecográfica?", ["Absorción", "Reflexión", "Refracción", "Atenuación"], 1, "TEMA 35", "fácil"],
  ["La refracción del haz ultrasónico supone:", ["Pérdida completa de energía", "Cambio de dirección del haz", "Aumento obligatorio de frecuencia", "Conversión de sonido en radiación X"], 1, "TEMA 35", "fácil"],
  ["¿Qué modo ecográfico representa una imagen bidimensional en escala de grises?", ["Modo A", "Modo B", "Modo M", "Doppler continuo"], 1, "TEMA 35", "fácil"],
  ["En Doppler, ¿qué modalidad permite localizar el flujo y medir su velocidad, pudiendo presentar aliasing?", ["Doppler continuo", "Doppler pulsado", "Doppler potencia", "Doppler espectral continuo"], 1, "TEMA 35", "medio"],
  ["Respecto al Doppler potencia, ¿cuál es correcta?", ["Determina con precisión la dirección del flujo", "Es poco sensible a flujos débiles", "Es muy sensible y no depende del ángulo, pero no indica la dirección", "Solo puede utilizarse para medir velocidades muy altas"], 2, "TEMA 35", "difícil"]
];

window.topic35Curated = topic35Curated;

const previousTopicMenu35 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu35();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 35'));
  if(existing){
    existing.disabled = false;
    existing.innerHTML = `<span class="module-number">TEMA 35</span><h3>${esc((topics[35]||{}).title||'TEMA 35')}</h3><p>${topic35Curated.length} preguntas · ultrasonidos y ecografía</p><span class="module-action">Entrenar →</span>`;
    existing.onclick = () => session('TEMA 35', topic35Curated);
    return;
  }
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.innerHTML = `<span class="module-number">TEMA 35</span><h3>${esc((topics[35]||{}).title||'TEMA 35')}</h3><p>${topic35Curated.length} preguntas · ultrasonidos y ecografía</p><span class="module-action">Entrenar →</span>`;
  button.onclick = () => session('TEMA 35', topic35Curated);
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1]) > 35; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};
