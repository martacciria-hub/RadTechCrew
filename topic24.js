// TEMA 24. RADIOLOGÍA CONVECIONAL COLUMNA VERTEBRAL
const topic24Content = `TEMA 24. RADIOLOGÍA CONVECIONAL COLUMNA VERTEBRAL

PROYECCIÓN AP CERVICAL

Permite ver los cuerpos vertebrales, los espacios discales, los espacios interpediculares, las apófisis espinosas y las apófisis trasnversas desde C3 a T2-T3

60kVp 25mAs DFP 1m

PROYECCIÓN AP OTTONELLO

El disparo debe efectuarse abriendo y cerrando la boca sin mover la cabeza

60kVp 25mAs DFP 1m

CERVICALES PROYECCIÓN LATERAL DE CERVICAL

Permite demostrar los cuerpos vertebrales, los espacios discales intervertebrales, las apófisis espinosas, los pilares articulares y las articulaciones cigoapofisarias de C1 hasta C7

65kVp 32mAs DFP 150m

PROYECCIÓN AP CON BOCA ABIERTA (TRANSORAL)

Esta proyección permite valorar el sgmento cervical superior, especialmente importante en traumatismos para descartar fracturas, y en pacientes no traumáticos, se utiliza para descartar lesiones inflamatorias. 65kVp 32mAs 1m

PROYECCIONES OBLICUAS DE CERVICAL

Estas proyecciones permiten valorar los agujeros de conjunción, las articulaciones uncovertebrales de Luschka, las articulaciones cigoapofisarias y los pedículos desde C1 hasta C7

75kVp 25mAs DFP 150m

PROYECCIONES LATERAL NADADOR CERVICALES TORÁCICAS

El paciente suspenderá la respiración después de una espiración profunda.

75kVp 25mAs DFP 150m

PROYECCIONES EN FLEXIÓN Y EXTENSIÓN

Estas proyecciones “funcionales”, permiten valorar la movilidad global e intersegmentaria de la columna cervical, también permite valorar las estructuras ligamentosas, y otras patologías  75kVp 25mAs DFP 150m

DORSALES

PROYECCIÓN AP

Permite valorar cuerpos vertebrales, espacios discales intervertebrales, apófisis espinosas y transversas, articulaciones costovertebrales y las costillas posteriores

80kVp 32mAs DFP 1m

PROYECCIÓN LATERAL

Permite valorar cuerpos vertebrales, espacios discales intervertebrales, apófisis espinosas y transversas, articulaciones costovertebrales y las costillas posteriores

80kVp 50mAs DFP 1m

PROYECCIONES OBLICUAS

Con las **Oblicuas anteriores**, valoramos las articulasciones cigoapofisarias más próximas al receptor.

Con las **Oblicuas posteriores**, valoramos las articulaciones cigoapofisarias más alejadas al receptor.

80kVp 40mAs DFP 1m

LUMBARES

PROYECCIÓN AP EN MESA

Esta proyección permite mostrar los cuerpos vertebrales, los espacios discales intervertebrales, las láminas, apófisis espinosas, apófisis transversas, art. sacroilíacas y sacro.

60kVp 20mAs DFP 1m

PROYECCIÓN LATERAL

1.12ª Costilla
2.Pedículo
3.Lámina
4.Apóf.Espinosa
5.Apóf.Transversa
6.Espacio intervertebral
7.Cuerpo vertebral L5

Esta proyección permite mostrar los cuerpos vertebrales, los espacios discales intervertebrales, las láminas, apófisis espinosas, apófisis transversas, art. sacroilíacas y sacro.

60kVp 20mAs DFP 1m

1.Cuerpo L2
2.Espacio intervertebral
3.Agujero de conjunción
4.Cresta Ilíaca
5.Sacro

PROYECCIONES LATERALES EN FLEXIÓN Y EXTENSIÓN 

Estas proyecciones funcionales, permiten valorar la movilidad global e intersegmentaria de la C. Lumbar, y valorar la estabilidad de las estructuras ligamentosas. Incluyendo desde D11 hasta S5

60kVp 20mAs DFP 1m

PROYECCIONES OBLICUAS AP Y PA 

Con las **Oblicuas anteriores**, valoramos las articulasciones cigoapofisarias más próximas al receptor.

Con las **Oblicuas posteriores**, valoramos las articulaciones cigoapofisarias más alejadas al receptor.

80kVp 40mAs DFP 1m

1.Cuerpo Vertebral L2
2.Apóf. Trasnversa de L3 (nariz terrier escocés)
3.Pedículo L3 (ojo del terrier)
4.Art. Cigoapofisária L3-4 (cuello terrier)
5.Pars interarticular L4
6.Apóf. articular superior de L5 (oreja del terrier)
7.Apóf. Articular inferior de L4 (pata delantera del terrier)

PROYECCIONES AP Y LATERAL PARA ESCOLIOSIS

Permiten valorar anomalías en la curvatura lateral de la C. Vertebral. Se “prefiere” usar PA en bipedestación para reducir la dosis en las regiones radiosensibles

90kVp 25mAs DFP 1m

PROYECCIÓN AP SACRO

Permiten valorar el sacro, las Art. Sacroilíacas y la unión lumbosacra

70kVp 20mAs DFP 1m

1.Cuerpo L5
2.Apóf. Articular sup. del sacro
3.Ilíaco
4.Sacro
5.Art. Sacroilíaca Der

PROYECCIÓN AP CÓCCIX

PROYECCIÓN LATERAL SACRO

Permiten valorar el sacro, las Art. Sacroilíacas y la unión lumbosacra

90kVp 60mAs DFP 1m

SACRO Y CÓCCIX

1.Cuerpo L5
2.Apóf. Articular sup. del sacro
4.Sacro

70kVp 20mAs DFP 1m

PROYECCIÓN LATERA CÓCCIX

80kVp 50mAs DFP 1m`;

if (typeof topics !== 'undefined') {
  topics[24] = { title: 'TEMA 24. RADIOLOGÍA CONVECIONAL COLUMNA VERTEBRAL', content: topic24Content };
}

function renderTopic24() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[24];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic24Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic24Ready === '1') return;
  module4.dataset.topic24Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="24"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '24';
      card.innerHTML = `<span class="module-number">TEMA 24</span><h3>TEMA 24. RADIOLOGÍA CONVECIONAL COLUMNA VERTEBRAL</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic24);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic24Card); else addTopic24Card();
