// Banco específico del Tema 4 · preguntas redactadas manualmente.
// Se carga después del banco general y sustituye únicamente el entrenamiento del Tema 4.
const topic4Curated = [
  ['¿Qué función principal cumplen las pantallas intensificadoras en la radiología convencional?',['Convertir la energía de los rayos X en luz visible para impresionar la película','Convertir la luz visible en rayos X','Aumentar la energía de los rayos X antes de llegar al paciente','Eliminar toda la radiación dispersa'],0,'TEMA 4','fácil'],
  ['¿Qué material constituye principalmente la emulsión de una película radiográfica?',['Gelatina y cristales de halogenuro de plata','Poliéster y plomo','Oxisulfuro de gadolinio y aluminio','Dióxido de titanio y magnesio'],0,'TEMA 4','fácil'],
  ['¿Qué parte de la película radiográfica proporciona la resistencia mecánica y sirve de soporte a la emulsión?',['La base','El recubrimiento','La capa adhesiva','La capa luminiscente'],0,'TEMA 4','fácil'],
  ['¿Qué se obtiene inmediatamente después de que la película haya sido expuesta, antes del revelado?',['La imagen latente','La imagen visible definitiva','La densidad óptica final','La imagen digital'],0,'TEMA 4','fácil'],
  ['¿Qué instrumento se utiliza para medir la densidad óptica de una película radiográfica?',['Densitómetro','Colimador','Dosímetro','Espectrofotómetro'],0,'TEMA 4','fácil'],
  ['¿Qué relación existe entre la latitud y el contraste de una película radiográfica?',['Son inversamente proporcionales: al aumentar la latitud, disminuye el contraste','Son directamente proporcionales','La latitud aumenta siempre el contraste','No existe ninguna relación entre ambos'],0,'TEMA 4','medio'],
  ['¿Qué característica presenta una película de alta velocidad?',['Necesita menor exposición para producir una determinada densidad','Necesita siempre mayor exposición','Tiene necesariamente mayor contraste y menor latitud','No puede utilizarse con pantallas intensificadoras'],0,'TEMA 4','medio'],
  ['¿Qué establece la ley de reciprocidad aplicada a la película radiográfica?',['La densidad óptica depende de la exposición total y, dentro de ciertos límites, es independiente de cómo se reparta entre tiempo e intensidad','La densidad depende exclusivamente del tiempo de exposición','La densidad depende exclusivamente del mA','La densidad siempre disminuye al aumentar el mAs'],0,'TEMA 4','medio'],
  ['¿Qué ocurre con la ley de reciprocidad en exposiciones extremadamente cortas o largas con pantallas intensificadoras?',['Puede dejar de cumplirse','Se cumple de forma exacta','Se invierte completamente','Solo se cumple en películas de exposición directa'],0,'TEMA 4','difícil'],
  ['¿Qué efecto tiene el velo sobre una película radiográfica?',['Aumenta su densidad óptica por causas ajenas a la radiación útil que forma la imagen','Aumenta la resolución espacial','Reduce la densidad óptica hasta cero','Mejora el contraste de forma controlada'],0,'TEMA 4','medio'],
  ['¿Qué tipo de película es más sensible a la luz visible producida por una pantalla intensificadora?',['La película de pantalla','La película de exposición directa','La película de cámara multiformato sin pantalla','Todas tienen la misma sensibilidad'],0,'TEMA 4','fácil'],
  ['¿Qué característica corresponde a una película mamográfica tradicional?',['Emulsión simple y uso con una sola pantalla intensificadora','Doble emulsión obligatoria y dos pantallas','Ausencia de emulsión','Uso exclusivo con intensificador de imagen'],0,'TEMA 4','medio'],
  ['¿Qué tipo de luz utilizan las películas diseñadas para pantallas de línea verde?',['Luz verde','Luz roja','Luz ultravioleta','Luz infrarroja'],0,'TEMA 4','fácil'],
  ['¿Qué materiales luminiscentes se asocian a las pantallas de línea verde?',['Oxisulfuro de gadolinio y oxisulfuro de lantano','Tungstato de calcio exclusivamente','Plomo y aluminio','Halogenuro de plata y gelatina'],0,'TEMA 4','medio'],
  ['¿Qué función tiene la capa reflectante de una pantalla intensificadora?',['Dirigir hacia la película la luz producida por la capa luminiscente y reducir su dispersión','Proteger la pantalla de la humedad','Formar la imagen latente directamente','Absorber todos los rayos X que atraviesan el paciente'],0,'TEMA 4','medio'],
  ['¿Qué característica de los cristales de la capa luminiscente favorece una mayor velocidad de pantalla?',['Un mayor tamaño de cristal, aunque puede aumentar la borrosidad','Un menor tamaño de cristal siempre aumenta la velocidad','La ausencia de cristales','Una menor conversión de rayos X en luz'],0,'TEMA 4','medio'],
  ['¿Qué efecto tiene la fosforescencia de una pantalla intensificadora sobre la imagen?',['Puede producir borrosidad al mantenerse la emisión de luz después de finalizar la exposición','Mejora siempre la resolución','Reduce el moteado cuántico a cero','Aumenta exclusivamente el contraste'],0,'TEMA 4','fácil'],
  ['¿Qué sucede con el moteado cuántico cuando disminuye mucho el número de fotones que llegan al receptor?',['Aumenta el ruido o moteado cuántico','Disminuye siempre el ruido','Desaparece la borrosidad geométrica','Aumenta automáticamente la resolución'],0,'TEMA 4','medio'],
  ['¿Cuál es una causa de borrosidad relacionada con las pantallas intensificadoras?',['El tamaño de los cristales y el grosor de la capa luminiscente','El número de identificación del chasis','El color de la cubierta posterior','La posición vertical del chasis'],0,'TEMA 4','medio'],
  ['¿Qué función principal tiene el chasis radiográfico?',['Proteger la película y las pantallas y asegurar el contacto adecuado entre ellas','Generar los rayos X','Medir la dosis del paciente','Aumentar la tensión del tubo'],0,'TEMA 4','fácil'],
  ['¿Por qué la cara frontal del chasis debe fabricarse con un material de bajo número atómico?',['Para atenuar lo mínimo posible el haz de rayos X antes de que llegue al receptor','Para aumentar la radiación dispersa','Para impedir la entrada de luz','Para aumentar el peso del chasis'],0,'TEMA 4','medio'],
  ['¿Qué finalidad tiene el recubrimiento de plomo de la cara posterior del chasis?',['Reducir la radiación retrodispersada','Aumentar la sensibilidad de la película','Generar luz visible','Mejorar la velocidad de la pantalla'],0,'TEMA 4','fácil'],
  ['¿Qué problema puede producir una falta de contacto entre la película y la pantalla intensificadora?',['Pérdida de nitidez o zonas de imagen ensombrecidas','Aumento de la resolución','Eliminación del velo','Aumento automático del contraste'],0,'TEMA 4','medio'],
  ['¿Qué ventaja principal aporta el intensificador de imagen en fluoroscopia?',['Permite obtener una imagen visible de mayor intensidad y reducir la dosis necesaria respecto a la fluoroscopia convencional','Elimina completamente la radiación dispersa','Permite trabajar siempre sin colimación','Sustituye al tubo de rayos X'],0,'TEMA 4','fácil'],
  ['¿Qué ocurre al utilizar la magnificación electrónica del intensificador de imagen?',['Mejora la resolución y el contraste, pero puede aumentar la dosis al paciente','Reduce siempre la dosis y no modifica la imagen','Empeora necesariamente el contraste y reduce la dosis a cero','No produce ningún cambio en la imagen'],0,'TEMA 4','medio']
];

(function installTema4Test(){
  const workspace=document.getElementById('workspace');
  if(!workspace || typeof session!=='function') return;

  // Capturamos únicamente la selección de TEMA 4 para evitar tocar el resto del banco.
  document.addEventListener('click',function(event){
    const button=event.target.closest('#workspace [data-topic]');
    if(!button) return;
    const label=button.querySelector('.module-number');
    if(!label || label.textContent.trim()!=='TEMA 4') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    session('TEMA 4',topic4Curated);
  },true);
})();
