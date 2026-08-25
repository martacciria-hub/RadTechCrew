(() => {
  const KEY='radtech_xp_v1';
  const TEST_KEY='radtech_tests_v2';
  const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
  const save=x=>localStorage.setItem(KEY,JSON.stringify(x));
  const state=()=>{const x=load();return {xp:x.xp||0,level:x.level||1,days:x.days||[],achievements:x.achievements||[]}};
  const calcLevel=xp=>Math.max(1,Math.floor(xp/250)+1);
  const achievements=[
    ['primer-paso','🚀 Primer paso','Completa tu primera pregunta',s=>s.answered>=1],
    ['diez','🎯 En racha','Responde 10 preguntas',s=>s.answered>=10],
    ['cincuenta','🧠 En entrenamiento','Responde 50 preguntas',s=>s.answered>=50],
    ['centenar','💪 Cien preguntas','Responde 100 preguntas',s=>s.answered>=100],
    ['precision','🎯 Buena puntería','Alcanza al menos un 80% de aciertos con 20 preguntas',s=>s.answered>=20&&s.correct/s.answered>=.8],
    ['simulacro','🏥 Modo oposición','Completa un simulacro ICS',s=>s.ics>=1],
    ['constancia','🔥 Constancia','Estudia en 3 días diferentes',s=>s.days>=3]
  ];
  function updateFromTest(data){
    const old=state(), stats=data.stats||{}, answered=stats.answered||0, correct=stats.correct||0;
    const today=new Date().toISOString().slice(0,10); const days=new Set(old.days); days.add(today);
    const oldAnswered=old.answered||0; const delta=Math.max(0,answered-oldAnswered);
    const next={...old,answered,correct,days:[...days]};
    if(delta>0) next.xp=old.xp+delta*10;
    next.level=calcLevel(next.xp);
    const earned=new Set(next.achievements);
    const s={...stats,days:days.size,ics:old.ics||0};
    achievements.forEach(a=>{if(a[3](s))earned.add(a[0])}); next.achievements=[...earned];
    save(next);
  }
  const originalSet=Storage.prototype.setItem;
  Storage.prototype.setItem=function(k,v){
    originalSet.call(this,k,v);
    if(k===TEST_KEY){try{updateFromTest(JSON.parse(v))}catch(e){}}
  };
  window.radTechXP={
    addICS(){const x=state();x.ics=(x.ics||0)+1;x.xp+=100;x.level=calcLevel(x.xp);save(x)},
    get:state
  };
  function renderProfile(){
    const p=document.getElementById('perfil'); if(!p)return;
    const x=state(); const next=x.level*250; const prev=(x.level-1)*250; const pct=Math.max(0,Math.min(100,Math.round(((x.xp-prev)/(next-prev))*100)));
    const earned=new Set(x.achievements); const test=(()=>{try{return JSON.parse(localStorage.getItem(TEST_KEY)||'{}')}catch(e){return {}}})(); const s=test.stats||{};
    p.innerHTML=`<p class="eyebrow">TU ESPACIO</p><div class="profile-head"><div class="profile-avatar">🩻</div><div><h2>👤 Tu perfil</h2><p>Tu progreso de entrenamiento, siempre contigo.</p></div></div><div class="profile-level"><div><strong>Nivel ${x.level}</strong><span>${x.xp} XP</span></div><div class="xp-track"><i style="width:${pct}%"></i></div><small>${Math.max(0,next-x.xp)} XP para el nivel ${x.level+1}</small></div><div class="profile-stats"><article><b>${s.answered||0}</b><span>Preguntas</span></article><article><b>${s.correct||0}</b><span>Aciertos</span></article><article><b>${s.answered?Math.round((s.correct||0)/(s.answered)*100):0}%</b><span>Precisión</span></article></div><div class="achievements"><div class="profile-section-title"><h3>🏅 Logros</h3><span>${x.achievements.length}/${achievements.length}</span></div><div class="achievement-grid">${achievements.map(a=>{const ok=earned.has(a[0]);return `<article class="achievement ${ok?'unlocked':'locked'}"><div>${ok?a[1].split(' ')[0]:'🔒'}</div><strong>${a[1].replace(/^\S+\s/,'')}</strong><small>${a[2]}</small></article>`}).join('')}</div></div>`;
  }
  document.addEventListener('DOMContentLoaded',()=>{renderProfile();window.addEventListener('hashchange',renderProfile);const obs=new MutationObserver(renderProfile);const p=document.getElementById('perfil');if(p)obs.observe(p,{attributes:true,attributeFilter:['hidden']})});
})();