// TEMA 30. RADIOLOGÍA CONVENCIONAL DENTAL
const topic30Content = `FÓRMULA Y NOMENCLATURA DENTALES

En el ser humano existen dos denticiones:

⟶ DENTICIÓN DECIDUA (dientes de leche): Constituida por 20 piezas: 8 incisivos, 4 caninos y 8 molares.

Divididos en dos arcadas sup/inf.

Empieza sobre los 6 meses con los incisivos inf. y termina a los 6 años.

⟶ DENTICIÓN PERMANENTE: Constituida por 32 piezas: 8 incisivos, 4 caninos, 8 premolares y 12 molares.

Comienza a los 6 años y termina con la aparición de los terceros molares “cordales” o muelas del juicio.

NOMENCLATURAS DE USO MÁS COMÚN ⟶ Nomenclatura por cuadrantes de Palmer

⟶ Nomenclatura de la American Dental Association

⟶ Nomenclatura de la Federación Dental Internacional

TEMA 30. RADIOLOGÍA CONVENCIONAL DENTAL

INTRODUCCIÓN

Los dientes son pequeños órganos, duros, de color blanco amarillento que se disponen en forma de arco en ambos maxilares donde están incrustados en unas cavidades llamadas alveolos.

Tienen 3 funciones: ⟶ Digestiva: al realizar la masticación, los incisivos cortan, los caninos desgarran y premolares y molares trituran.

⟶ Fonética: es una función pasiva, dan apoyo a la lengua y los labios para facilitar la pronunciación.

⟶ Estética: gran parte de la estructura facial está condicionada por el soporte de los dientes a labios y mejillas. La falta de piezas (edentulismo) altera de manera significativa la morfología facial.

TERMINOLOGÍA: En odontología hay una “jerga” que todo técnico debe conocer para realizar correctamente las técnicas de radiología dental.

⟶ Mesial: Es aquello que se ACERCA al plano sagital medio.

⟶ Distal: Es aquello que se ALEJA del plano sagital medio.

⟶ Vestibular/labial/bucal: Es la cara del diente que mira hacia FUERA, “hacia el vestíbulo de la boca”.

⟶ Lingual: Es la cara del diente que mira hacia DENTRO, “lo que toca la lengua” se usa para la arcada inferior.

⟶ Palatino: Es la cara del diente que mira hacia DENTRO, “lo que mira al paladar” se usa para la arcada superior.

⟶ Planos Oclusales: Son los que pasan por la superficie masticatoria de las dos arcadas.

⟶ Oclusal superior: discurre 4 cm por debajo de una línea que une el trago y el ala de la nariz.

⟶ Oclusal inferior: pasa 2 cm por debajo de la línea que une el trago y la comisura labial cuando la boca está muy abierta.

TÉCNICAS CONVENCIONALES DE RAD. DENTAL

Estas técnicas se dividen en Intraorales y Extraorales, según la placa o el detector digital se sitúe dentro o fuera de la boca.

INTRAORALES

Incluyen: ⟶ Aleta de mordida (proyección bucolingual de las coronas y las crestas alveolares de los dientes tanto superiores como inferiores. Se usan para el estudio de caries o alteraciones de la pulpa.)

⟶ Rx Periapicales (proyección bucolingual de los dientes, de la membrana periodontal y del hueso circundante. Con esta técnica los dientes se estudian por separado, la angulación del tubo variará en función de la pieza que se estudia usando de referencia los planos oclusales. Para incisivos y caninos la placa irá vertical, para premolares y molares en horizontal.)

Hay dos técnicas para esta proyección: 1. Técnica de la bisectriz del ángulo

2. Técnica del paralelismo

⟶ Rx Oclusales (proyección intraoral que se caracteriza por situar la placa en el plano oclusal superior en el caso de las oclusales maxilares, o en el plano oclusal inferior en las oclusales mandibulares. (ESTÁ EN DESUSO PRÁCTICAMENTE).

Hoy en día las suelen hacer los odontólogos con tubos de RX incorporados al sillón. Usando placas especiales envueltas en plástico a prueba de humedad, aunque lo que más se utiliza es la técnica digital con detectores intraorales.

Es importante la protección radiológica por la escasa DFP, se suelen usar conos delimitadores de haz con un diámetro externo de 6 cm, las placas las mantiene en posición el propio paciente con un dedo o unas pinzas.

Bisectriz del ángulo

Paralelismo

EXTRAORALES

Incluyen: ⟶ Rx Oblicua Lateral (técnica en desuso, gracias a la ortopanto). Se hacían Rx de las piezas desde el canino hasta el tercer molar.

Era una proyección directa (sin parrilla) en la que el borde del chasis queda alineado con nariz, labios y mentón. La cabeza rota hacia el lado de estudio para desenfilar la rama mandibular contralateral, y levantar el mentón para aumentar la ventana radiológica entre rama y cervicales.

⟶ Teleradiografía lateral de cara y cráneo (cefalometría): Junto con la ortopanto son las exploraciones básicas en odontología y en el estudio de patologías maxilofaciales. Es una proyección de las estructuras óseas del macizo facial y de las partes blandas de la cara. Se usa para el estudio de ortodoncia, tanto para el diagnóstico como para la planificación.

⟶ Rx Ortopantomografía: proyección muy usada, por facilidad, rapidez y baja dosis y que en una sola imagen se pueden ver las dos arcadas enteras y los tejidos de soporte.

⟶ TAC DENTAL: se usa para implantes dentales, para planificación de precirugía, ya que permite estudiar la situación de las estructuras neurovasculares y la calidad del hueso, así como lesiones en el hueso. Evita superposiciones, tiene mayor resolución de contraste y permite reconstrucciones multiplanares en 2D y 3D. Estos estudios se pueden realizar con TC Helicoidal o TC de haz cónico.`;

if (typeof topics !== 'undefined') {
  topics[30] = { title: 'TEMA 30. RADIOLOGÍA CONVENCIONAL DENTAL', content: topic30Content };
}

function renderTopic30() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[30];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic30Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic30Ready === '1') return;
  module4.dataset.topic30Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="30"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '30';
      card.innerHTML = `<span class="module-number">TEMA 30</span><h3>TEMA 30. RADIOLOGÍA CONVENCIONAL DENTAL</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic30);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic30Card); else addTopic30Card();
