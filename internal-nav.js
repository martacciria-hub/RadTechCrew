document.addEventListener('DOMContentLoaded',()=>{
 const isTests=location.pathname.endsWith('tests.html');
 const main=document.querySelector('main'); if(!main)return;
 const show=(el)=>{el.hidden=false; el.classList.add('focus-screen'); window.scrollTo(0,0);};
 const hide=(el)=>{el.hidden=true;};
 const removeBack=(el)=>{const b=el.querySelector(':scope > .internal-back');if(b)b.remove();};
 if(isTests){
  const launcher=main.querySelector('.panel:not(#workspace)'),ws=document.getElementById('workspace');
  if(!launcher||!ws)return;
  launcher.addEventListener('click',e=>{
   if(!e.target.closest('[data-action]'))return;
   setTimeout(()=>{hide(launcher);show(ws);removeBack(ws);},0);
  });
 }else{
  const study=document.getElementById('estudio'),mv=document.getElementById('module-view');
  if(!study||!mv)return;
  study.addEventListener('click',e=>{
   if(!e.target.closest('.module-card'))return;
   setTimeout(()=>{hide(study);show(mv);removeBack(mv);},0);
  });
 }
});