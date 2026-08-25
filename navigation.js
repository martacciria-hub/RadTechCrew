document.addEventListener('DOMContentLoaded',()=>{
  const views={inicio:document.getElementById('inicio'),perfil:document.getElementById('perfil'),estudio:document.getElementById('estudio')};
  const moduleView=document.getElementById('module-view');
  const navLinks=document.querySelectorAll('[data-view]');
  const showView=(name,updateHash=true)=>{
    Object.entries(views).forEach(([key,el])=>{if(el)el.hidden=key!==name});
    if(moduleView)moduleView.hidden=name!=='estudio';
    navLinks.forEach(a=>a.classList.toggle('active',a.dataset.view===name));
    if(updateHash)history.replaceState(null,'','#'+name);
    window.scrollTo({top:0,behavior:'smooth'});
  };
  navLinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showView(a.dataset.view)}));
  const initial=(location.hash||'#inicio').slice(1);
  showView(views[initial]?initial:'inicio',false);
});