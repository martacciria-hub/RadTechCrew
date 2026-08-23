// TEMA 11 — SISTEMAS DE INFORMACIÓN EN RADIOLOGÍA (RIS, PACS)
const topic11 = `
<h2>TEMA 11. SISTEMAS DE INFORMACIÓN EN RADIOLOGÍA (RIS, PACS) Y SU COMUNICACIÓN CON EL RESTO DE SISTEMAS DE INFORMACIÓN SANITARIOS.</h2>

<h3>DEPARTAMENTO DE RADIOLOGÍA DIGITAL</h3>
<p>Se basa en las imágenes digitales generadas por cualquier modalidad tanto de radiología simple como TAC, Reso, MN y modalidades de fusión, trabaja con PACS para Archivar/ Ver/ Manipular y Comunicar. La gestión de RIS es Agendar/Citar/Registrar procesos/Soporte al proceso informado y Gestión de materiales.</p>

<h3>PACS</h3>
<p>Los principales componentes son:</p>
<p>⟶ Servidor central</p>
<p>⟶ Sistema de archivo (corto, medio y largo plazo)</p>
<p>⟶ Modalidades que generan imágenes</p>
<p>⟶ Estaciones de diagnóstico y revisión</p>
<p>⟶ Red de transmisión de datos.</p>

<h3>RIS</h3>
<p>Gestiona toda la actividad del sistema de radiología, tanto de forma asistencial como administrativa y de gestión.</p>
<p>Debe ser: Completo/ Personalizado/ Robusto/ Flexible e integrado.</p>
`;

// Registro para el visor de temas
if (typeof topics !== 'undefined') {
  topics[11] = topic11;
}
