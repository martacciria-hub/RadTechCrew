document.addEventListener('DOMContentLoaded',()=>{
 const isTests=location.pathname.endsWith('tests.html');
 const main=document.querySelector('main'); if(!main)return;
 const show=(el)=>{el.hidden=false; el.classList.add('focus-screen'); window.scrollTo({top:0,behavior:'auto'});};
 const hide=(el)=>{el.hidden=true;};
 const addBack=(el,label,backFn)=>{let b=el.querySelector(':scope > .internal-back');if(!b){b=document.createElement('button');b.className='secondary-button internal-back';b.type='button';b.textContent='← '+label;el.prepend(b)}b.onclick=backFn;};
 if(isTests){const launcher=main.querySelector('.panel:not(#workspace)'),ws=document.getElementById('workspace');if(!launcher||!ws)return;launcher.addEventListener('click',e=>{if(e.target.closest('[data-action]'))setTimeout(()=>{hide(launcher);show(ws);addBack(ws,'Volver a Zona de Tests',()=>{hide(ws);show(launcher)})},0)});
 }else{
  const study=document.getElementById('estudio'),mv=document.getElementById('module-view');
  if(!study||!mv)return;
  study.addEventListener('click',e=>{if(e.target.closest('.module-card'))setTimeout(()=>{hide(study);show(mv);addBack(mv,'Volver a módulos',()=>{hide(mv);show(study)})},0)});
 }
});