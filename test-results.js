(function(){
const ws=document.getElementById('workspace');if(!ws)return;
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
new MutationObserver(()=>{const h=ws.querySelector('h2');if(h?.textContent==='🏆 Sesión terminada'&&!ws.querySelector('.mistakes-review'))render()}).observe(ws,{childList:true,subtree:true});
function render(){
 const mistakes=Array.isArray(window.lastTestMistakes)?window.lastTestMistakes:[];
 const box=document.createElement('div');box.className='mistakes-review';
 box.innerHTML='<div class="mistakes-header"><h3>🎯 Preguntas a revisar</h3><p>'+(mistakes.length?'Has fallado '+mistakes.length+' pregunta'+(mistakes.length===1?'':'s')+'. Repasa tus errores antes de volver al entreno.':'✨ ¡Perfecto! No has fallado ninguna pregunta.')+'</p></div>';
 if(mistakes.length){
   const list=document.createElement('div');list.className='mistakes-list';
   mistakes.forEach((m,i)=>{
     const a=document.createElement('article');a.className='mistake-card';
     a.innerHTML='<div class="mistake-number">Pregunta '+(i+1)+'</div><h4>'+esc(m.q)+'</h4><p class="mistake-wrong"><strong>❌ Tu respuesta:</strong> '+esc(m.w)+'</p><p class="mistake-correct"><strong>✅ Respuesta correcta:</strong> '+esc(m.c)+'</p><div class="mistake-explanation"><strong>💡 Explicación</strong><p>'+esc(m.explanation||'No hay una explicación asociada a esta pregunta.')+'</p></div>';
     list.appendChild(a);
   });
   box.appendChild(list);
 }
 const root=ws.querySelector('.study-material');if(root)root.appendChild(box);else ws.appendChild(box);
}
const style=document.createElement('style');style.textContent='.mistakes-review{margin-top:28px}.mistakes-header{padding:18px;border-radius:16px;background:#eef8fa;border:1px solid #d9edf0}.mistakes-header h3{margin:0 0 6px;color:#155e75}.mistakes-header p{margin:0;color:#52616b}.mistakes-list{display:grid;gap:16px;margin-top:16px}.mistake-card{padding:18px;border:1px solid #e2e8f0;border-radius:16px;background:#fff}.mistake-number{font-size:.75rem;font-weight:800;letter-spacing:.08em;color:#64748b;text-transform:uppercase}.mistake-card h4{margin:8px 0 16px;line-height:1.45;color:#24313a}.mistake-wrong,.mistake-correct{margin:8px 0;line-height:1.5}.mistake-explanation{margin-top:14px;padding:14px;border-radius:12px;background:#f8fbfc;border-left:4px solid #0e7490}.mistake-explanation p{margin:6px 0 0;line-height:1.55}@media(max-width:700px){.mistake-card{padding:15px}}';document.head.appendChild(style);
})();
