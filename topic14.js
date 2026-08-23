// TEMA 14. CONTRASTES ECOGRÁFICOS
const topic14 = `TEMA 14. CONTRASTES ECOGRÁFICOS

INTRODUCCIÓN

Los contrastes ecográficos son microburbujas de gas, administradas por vía intravenosa o intracavitaria. Aumentan la señal ecográfica, lo que supone una herramienta añadida a la Eco convencional.

Permitiendo llegar de forma precoz, fiable y precisa al diagnóstico del paciente.

PROPIEDADES Y FARMACOCINÉTICA

El mecanismo de acción del contraste radica en la interacción de las ondas con las burbujas de gas, que además de reflejar el ultrasonido, reaccionan con un movimiento oscilatorio de compresión/expansión (ECOS ARMÓNICOS).

Debe ser:
⟶ Inerte y no tóxico.
⟶ Diámetro de la burbuja muy pequeño.
⟶ Microburbujas estables.
⟶ Buena interacción con el haz de ultrasonidos.

MOLÉCULAS, PREPARACIÓN Y DOSIS

1. Moléculas: Son gases poco solubles como el hexafluoruro de azufre y el octafluoruropropano.
2. Preparación: Suero salino + molécula.
3. Dosis: Lo habitual son 2,4 ml por vía intravenosa, seguido de 5/10 ml de suero.

** Crohn menos dosis **

EFECTOS ADVERSOS

Aunque son muy bien tolerados, los efectos pueden ser: Cefalea/Mareos, Náuseas/Vómitos, Alteración del gusto, Sensación de Calor, Parestesias, Edemas cutáneos, Escozor.

Están contraindicados en: Síndrome coronario agudo, miocardiopatía isquémica inestable, trastornos del ritmo cardíaco, derivaciones cardíacas D/I, síndrome de dificultad respiratoria.

** No es nefrotóxico y no interacciona con la función tiroidea. **

INDICACIONES

El órgano mejor evaluado con contraste ha sido el hígado (lesión focal hepática), se puede estudiar de forma continua en todas las fases del examen.

Arterial ⟶ 10/35 seg. después de la inyección del contraste.
Portal ⟶ 60/120 seg. después.
Tardía ⟶ 240/360 seg. hasta la desaparición de las burbujas.

Permite caracterizar las lesiones del hígado. El uso de contrastes radiográficos para caracterizar nódulos hepáticos en 4 situaciones clínicas:
1. Hallazgo incidental durante una eco normal (para completar el estudio y llegar al diagnóstico en un sólo paso).
2. Nódulo en paciente con hepatopatía crónica.
3. Nódulo en paciente neoplásico.
4. TC/RM o citología/Histología no concluyentes.

Otras indicaciones hepáticas: Guía y monitorización de tratamientos ablativos percutáneos/valoración de complicaciones vasculares en seguimiento de trasplante.

INDICACIONES PARA OTROS ÓRGANOS

⟶ Renales: Variantes anatómicas/Seudotumores renales/Cateterización de lesiones quísticas complejas/Trombosis de la vena renal/trasplante renal.

⟶ Reflujo vesiculo-uretral.

⟶ Lesiones en: Páncreas/Intestino/Mama/Pelvis femenina/Próstata/Valoración de adenopatías/Traumatismos Abd. leves.`;

if (typeof topics !== 'undefined') {
  topics[14] = { title: 'TEMA 14. CONTRASTES ECOGRÁFICOS', content: topic14 };
}

// Integra el Tema 14 en el Módulo 3 sin tocar la navegación de los módulos anteriores.
if (typeof renderModuleTopics === 'function') {
  const previousRenderModuleTopics = renderModuleTopics;
  renderModuleTopics = function(moduleNumber) {
    if (moduleNumber === 3) {
      const moduleTopics = [12, 13, 14].filter(topicNumber => topics[topicNumber]);
      if (!moduleTopics.length) return '<div class="coming-soon">📚 Los temas de este módulo se incorporarán aquí.</div>';
      return `<div class="topic-list">${moduleTopics.map(topicNumber => `
        <button class="topic-card" type="button" data-topic="${topicNumber}">
          <span class="module-number">TEMA ${topicNumber}</span>
          <h3>${topics[topicNumber].title}</h3>
          <span class="module-action">Abrir material →</span>
        </button>
      `).join('')}</div>`;
    }
    return previousRenderModuleTopics(moduleNumber);
  };
}
