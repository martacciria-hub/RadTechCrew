// TEMA 12. VÍAS DE ADMINISTRACIÓN DE CONTRASTE
const topic12 = `TEMA 12. VÍAS DE ADMINISTRACIÓN DE CONTRASTE

INTRODUCCIÓN

Los medios de contraste radiológicos son sustancias usadas para aumentar la capacidad diagnóstica de las técnicas de imagen y cada una requiere un contraste apropiado.

Rayos X ⟶ Bario/Yodo
Reso ⟶ Gadolinio
Eco ⟶ Microburbujas de aire y otros gases

CONTRASTES INTESTINALES

Se introducen directamente en el tubo digestivo.

⟶ Vía oral: Para contrastar esófago/estómago e intestino delgado.

Indicado en pacientes conscientes.

Sulfato de bario, habitualmente. ¡¡Contraindicado!! en sospecha de perforaciones ⟶ GASTROGRAFIN.

⟶ Vía Rectal: Para contrastar el intestino grueso.

Enema Opaco ⟶ sólo vemos el sulfato de bario.

Enema Opaco de doble contraste ⟶ se usa sulfato de bario y aire.

⟶ Sonda Nasogástrica: Siempre asegurarse de que el extremo está bien colocado y lejos de la unión esofagogástrica. Al acabar se limpia con suero para evitar obstrucciones.

⟶ Por el Estoma: Se coloca una sonda Foley y se introduce el contraste diluido con agua.

CONTRASTES INTRAVASCULARES

⟶ Vía Intravenosa: La inyección de contraste es a través de una vena periférica (antebrazo), puede ser manual o mediante bomba.

⟶ Vía Intraarterial: La más usada es la arteria femoral. Si ésta no es viable, se usa la arteria braquial proximal (transaxilar).

CONTRASTES INTRAARTICULARES

La inyección del contraste directamente dentro de una cavidad articular, para ver mejor sus estructuras ⟶ ARTROGRAFÍA.

USOS ⟶ Cuando existe dolor persistente e inexplicado y alteraciones funcionales de Hombro/Codo/Muñeca/Rodilla/Tobillo.

TÉCNICAS ⟶ CON RX (artro-TC): yodo no iónico diluido con suero.

CON RM (artro-RM): Gadolinio. Ofrece una mejor valoración de las estructuras intraarticulares y de las partes blandas adyacentes, incluida la médula ósea.

CONTRASTES INTRACAVITARIOS

Se administran en el interior de vísceras huecas. Mediante sonda se introduce un catéter en la cavidad a estudiar.

USOS ⟶ Histerosalpingografía / Cistografía retrógrada.

A TRAVÉS DE OTROS CONDUCTOS

⟶ Ureterografía (catéter)
⟶ Dacriografía
⟶ Sialografía
⟶ Galactografía
⟶ Fistulografía (cánulas)`;

if (typeof topics !== 'undefined') {
  topics[12] = { title: 'TEMA 12. VÍAS DE ADMINISTRACIÓN DE CONTRASTE', content: topic12 };
}

const previousRenderModuleTopics12 = renderModuleTopics;
renderModuleTopics = function(moduleNumber){
  const result = previousRenderModuleTopics12(moduleNumber);
  if(moduleNumber!==3) return result;
  const moduleTopics=[12];
  return `<div class="topic-list">${moduleTopics.map(topicNumber=>`<button class="topic-card" type="button" data-topic="${topicNumber}"><span class="module-number">TEMA ${topicNumber}</span><h3>${topics[topicNumber].title}</h3><span class="module-action">Abrir material →</span></button>`).join('')}</div>`;
};
