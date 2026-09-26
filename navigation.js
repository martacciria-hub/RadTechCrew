document.addEventListener('DOMContentLoaded',()=>{
  const views={
    inicio:document.getElementById('inicio'),
    estudio:document.getElementById('estudio'),
    'radio-rayos':document.getElementById('radio-rayos')
  };
  const moduleView=document.getElementById('module-view');
  const podcastView=document.getElementById('podcast-study');
  const navLinks=document.querySelectorAll('[data-view]');

  const showView=(name,updateHash=true)=>{
    Object.entries(views).forEach(([key,el])=>{
      if(el)el.hidden=key!==name;
    });

    if(moduleView)moduleView.hidden=true;
    if(podcastView)podcastView.hidden=true;

    navLinks.forEach(a=>a.classList.toggle('active',a.dataset.view===name));

    if(updateHash)history.replaceState(null,'','#'+name);
    window.scrollTo({top:0,behavior:'smooth'});

    if(name==='estudio'){
      const choice=document.getElementById('study-choice-screen');
      const modules=document.getElementById('modules');
      if(choice)choice.hidden=false;
      if(modules)modules.hidden=true;
    }
  };

  navLinks.forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    showView(a.dataset.view);
  }));

  const initial=(location.hash||'#inicio').slice(1);
  showView(views[initial]?initial:'inicio',false);
});