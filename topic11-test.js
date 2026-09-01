// Hueco reservado para el test del TEMA 11.
const topic11Curated = [];
window.topic11Curated = topic11Curated;

const previousTopicMenu11 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu11();
  if(!ws || ws.hidden) return;
  const cards = ws.querySelector('.cards');
  if(!cards) return;
  if([...cards.querySelectorAll('button.module-card')].some(b => (b.textContent || '').includes('TEMA 11'))) return;
  const button = document.createElement('button');
  button.className = 'module-card'; button.type = 'button'; button.disabled = true;
  button.innerHTML = `<span class="module-number">TEMA 11</span><h3>${esc((topics[11]||{}).title||'TEMA 11')}</h3><p>0 preguntas · en preparación</p><span class="module-action">Próximamente</span>`;
  const before = [...cards.querySelectorAll('button.module-card')].find(b => { const m=(b.textContent||'').match(/TEMA\s+(\d+)/); return m && Number(m[1])>11; });
  if(before) cards.insertBefore(button,before); else cards.appendChild(button);
};