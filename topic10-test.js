// Hueco reservado para el test del TEMA 10.
const topic10Curated = [];
window.topic10Curated = topic10Curated;

const previousTopicMenu10 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu10();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  const existing = [...cards.querySelectorAll('button.module-card')].find(b => (b.textContent || '').includes('TEMA 10'));
  if(existing) return;
  const button = document.createElement('button');
  button.className = 'module-card';
  button.type = 'button';
  button.disabled = true;
  button.innerHTML = `<span class="module-number">TEMA 10</span><h3>${esc((topics[10]||{}).title||'TEMA 10')}</h3><p>0 preguntas · en preparación</p><span class="module-action">Próximamente</span>`;
  const before = [...cards.querySelectorAll('button.module-card')].find(b => {
    const m = (b.textContent || '').match(/TEMA\s+(\d+)/);
    return m && Number(m[1]) > 10;
  });
  if(before) cards.insertBefore(button, before); else cards.appendChild(button);
};