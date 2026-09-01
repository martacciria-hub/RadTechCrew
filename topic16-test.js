// Hueco reservado para el test del TEMA 16.
const topic16Curated = [];
window.topic16Curated = topic16Curated;
const previousTopicMenu16 = window.topicMenu;
window.topicMenu = function(){
  previousTopicMenu16(); if(!ws||ws.hidden)return; const cards=ws.querySelector('.cards'); if(!cards)return;
  if([...cards.querySelectorAll('button.module-card')].some(b=>(b.textContent||'').includes('TEMA 16')))return;
  const button=document.createElement('button'); button.className='module-card'; button.type='button'; button.disabled=true;
  button.innerHTML=`<span class="module-number">TEMA 16</span><h3>${esc((topics[16]||{}).title||'TEMA 16')}</h3><p>0 preguntas · en preparación</p><span class="module-action">Próximamente</span>`;
  const before=[...cards.querySelectorAll('button.module-card')].find(b=>{const m=(b.textContent||'').match(/TEMA\s+(\d+)/);return m&&Number(m[1])>16;});
  if(before)cards.insertBefore(button,before);else cards.appendChild(button);
};