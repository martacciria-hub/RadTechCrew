// TEMA 26. RADIOLOGÍA CONVECIONAL ABDOMEN
const topic26Content = `TEMA 26. RADIOLOGÍA CONVECIONAL ABDOMEN

I**NTRODUCCIÓN :**

La adquisición de una rx simple de abdomen debe realizarse con miliamperaje alto y tiempo de exposición corto, con un kilovotaje aproximado entre 60/80 kV.

Normal básicas:

1. Siempre se realiza en decúbito supino (en bipe solo para ver niveles hidroaéreos o neumoperitoneo)
2. En pacientes con MEG que no toleran bipe, puede hacerse en decúbito lateral izq. 
3. En mujeres en edad fértil hay que preguntar posibilidad de embarazo.
4. En equipos digitales con exposimetria automática. usaremos las 3 cámaras para compensar las densidades del centro del abd. con la columna y las densidades de los flancos.

**AP ABDOMEN EN DECÚBITO SUPINO CON R.VERTICAL**

Es la proyección obligada, ya que logramos ver con nitidez la morfología de las vísceras y el aire contenido en las asas intestinales

**AP ABDOMEN EN BIPEDESTACIÓN**

Es la proyección complementaria útil **para ver niveles hidroaéreos**, sospecha de oclusiones intenstinales o perforaciones del tubo digestivo.

**LATERAL ABDOMENT EN DECÚBITO SUPINO CON R.HORIZONTAL**

Sólo se realiza en pacientes que no se pueden movilizar y en los que resulta imposible hacer otras proyecciones

**ABDOMENT EN DECÚBITO LATERAL IZQ CON R. HORIZONTAL**

Sustituye la proyección en bipe, cuando el paciente no se puede poner de pie, veremos los niveles hidroaéreos, en caso de neumoperitoneo. El aire se localiza entre el borde hepático derecho y la pared abdomina.`;

if (typeof topics !== 'undefined') {
  topics[26] = { title: 'TEMA 26. RADIOLOGÍA CONVECIONAL ABDOMEN', content: topic26Content };
}

function renderTopic26() {
  const view = document.getElementById('module-view');
  const content = view && view.querySelector('.module-topics');
  if (!content) return;
  const topic = topics[26];
  content.innerHTML = `<button class="secondary-button topic-back" type="button">← Volver a temas</button><article class="study-material"><div class="topic-heading"><p class="eyebrow">MATERIAL DE ESTUDIO</p><h2>${topic.title}</h2></div><div class="topic-content">${formatStudyText(topic.content)}</div></article>`;
  content.querySelector('.topic-back').addEventListener('click', () => { const module4 = document.querySelector('.module-card[data-module="4"]'); if (module4) module4.click(); });
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addTopic26Card() {
  const module4 = document.querySelector('.module-card[data-module="4"]');
  if (!module4 || module4.dataset.topic26Ready === '1') return;
  module4.dataset.topic26Ready = '1';
  module4.addEventListener('click', () => {
    setTimeout(() => {
      const content = document.querySelector('#module-view .module-topics');
      if (!content) return;
      let list = content.querySelector('.topic-list');
      if (!list) {
        content.innerHTML = '<div class="topic-list"></div>';
        list = content.querySelector('.topic-list');
      }
      if (list.querySelector('[data-topic="26"]')) return;
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';
      card.dataset.topic = '26';
      card.innerHTML = `<span class="module-number">TEMA 26</span><h3>TEMA 26. RADIOLOGÍA CONVECIONAL ABDOMEN</h3><span class="module-action">Abrir material →</span>`;
      card.addEventListener('click', renderTopic26);
      list.appendChild(card);
    }, 0);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addTopic26Card); else addTopic26Card();
