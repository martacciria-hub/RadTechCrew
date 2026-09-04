// Motor de tests de RadTechCrew · banco curado y presentación estable
(function(){
  const ws=document.getElementById('workspace');
  if(!ws)return;

  const key='radtech_tests_v2';
  const load=()=>JSON.parse(localStorage.getItem(key)||'{}');
  const save=x=>localStorage.setItem(key,JSON.stringify(x));
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const shuffle=a=>a.slice().sort(()=>Math.random()-0.5);

  function curatedBank(){
    const out=[];
    Object.keys(window).forEach(k=>{
      if(!/^topic\d+Curated$/.test(k)||!Array.isArray(window[k]))return;
      window[k].forEach(q=>{
        if(Array.isArray(q)&&q.length>=5&&typeof q[0]==='string'&&Array.isArray(q[1]))out.push(q);
      });
    });
    const seen=new Set();
    return out.filter(q=>{const id=q[0]+'|'+q[3];if(seen.has(id))return false;seen.add(id);return true;});
  }

  function prepare(q){
    const opts=shuffle(q[1].map((text,i)=>({text,i})));
    return [q[0],opts.map(x=>x.text),opts.findIndex(x=>x.i===q[2]),q[3],q[4]];
  }

  function record(q,correct){
    const d=load();
    d.errors=d.errors||{};
    d.stats=d.stats||{};
    const id=q[0];
    if(correct){if(d.errors[id])d.errors[id]=Math.max(0,d.errors[id]-1)}
    else d.errors[id]=(d.errors[id]||0)+1;
    d.stats.answered=(d.stats.answered||0)+1;
    d.stats.correct=(d.stats.correct||0)+(correct?1:0);
    save(d);
  }

  function session(title,items){
    const qs=shuffle(items).map(prepare);
    let pos=0,score=0;
    ws.hidden=false;
    const render=()=>{
      if(pos>=qs.length){
        ws.innerHTML=`<div class="study-material final-panel"><p class="eyebrow">${esc(title).toUpperCase()}</p><h2>🏆 Sesión terminada</h2><div class="final-score">${score} / ${qs.length}</div><p class="final-percent">${Math.round(score/qs.length*100)}% de aciertos</p><button class="secondary-button final-again" id="again">Repetir</button></div>`;
        document.getElementById('again').onclick=()=>session(title,items);
        return;
      }
      const q=qs[pos];
      ws.innerHTML=`<div class="study-material test-panel"><p class="eyebrow">${esc(title).toUpperCase()}</p><h2>Pregunta ${pos+1} de ${qs.length}</h2><p class="question-text">${esc(q[0])}</p><div class="answer-grid">${q[1].map((a,i)=>`<button type="button" class="answer-option" data-i="${i}">${String.fromCharCode(65+i)}) ${esc(a)}</button>`).join('')}</div><p class="exam-progress">Aciertos: ${score}</p></div>`;
      ws.querySelectorAll('.answer-option').forEach(b=>b.onclick=()=>{
        const chosen=+b.dataset.i;
        ws.querySelectorAll('.answer-option').forEach((x,i)=>{
          x.disabled=true;
          if(i===q[2])x.classList.add('correct');
          if(i===chosen&&chosen!==q[2])x.classList.add('wrong');
        });
        const ok=chosen===q[2];
        if(ok)score++;
        record(q,ok);
        setTimeout(()=>{pos++;render()},450);
      });
    };
    render();
  }

  function topicMenu(){
    const bank=curatedBank(),byTopic={};
    bank.forEach(q=>(byTopic[q[3]]??=[]).push(q));
    const entries=Object.keys(byTopic).sort((a,b)=>+a.split(' ')[1]-+b.split(' ')[1]);
    ws.hidden=false;
    ws.innerHTML=`<div class="study-material"><p class="eyebrow">TEST POR TEMAS</p><h2>📚 Elige un tema</h2><p>Preguntas elaboradas y revisadas para cada tema. El número disponible aparece en cada tarjeta.</p><div class="cards">${entries.map((n,i)=>`<button type="button" class="module-card" data-topic="${i}"><span class="module-number">${n}</span><h3>${esc((topics[n.split(' ')[1]]||{}).title||n)}</h3><p>${byTopic[n].length} preguntas disponibles</p><span class="module-action">Entrenar →</span></button>`).join('')}</div></div>`;
    ws.querySelectorAll('[data-topic]').forEach((b,i)=>b.onclick=()=>session(entries[i],byTopic[entries[i]]));
  }

  function menu(title,buttons){
    ws.hidden=false;
    ws.innerHTML=`<div class="study-material"><p class="eyebrow">${esc(title).toUpperCase()}</p><h2>${esc(title)}</h2><div class="cards">${buttons.map((b,i)=>`<button type="button" class="module-card" data-pick="${i}"><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p><span class="module-action">Elegir →</span></button>`).join('')}</div></div>`;
    ws.querySelectorAll('[data-pick]').forEach((b,i)=>b.onclick=()=>buttons[i][2]());
  }

  window.session=session;
  window.topicMenu=topicMenu;

  document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{
    const bank=curatedBank();
    const a=b.dataset.action;
    if(a==='quick')session('⚡ Reto rápido',shuffle(bank).slice(0,10));
    if(a==='topics')topicMenu();
    if(a==='difficulty')menu('Por dificultad',[
      ['🌱 Aprende','Preguntas fáciles',()=>session('Aprende',shuffle(bank.filter(q=>q[4]==='fácil')).slice(0,15))],
      ['⚡ Entrena','Dificultad media',()=>session('Entrena',shuffle(bank.filter(q=>q[4]==='medio')).slice(0,15))],
      ['🔥 Reto','Preguntas difíciles',()=>session('Reto',shuffle(bank.filter(q=>q[4]==='difícil')).slice(0,15))]
    ]);
    if(a==='errors'){
      const d=load(),errs=d.errors||{},items=bank.filter(q=>errs[q[0]]>0);
      if(!items.length)menu('Mis errores',[['✨ Todavía no hay errores','Haz algunos tests y aquí aparecerán las preguntas que falles.',()=>{}]]);
      else session('🎯 Mis errores',shuffle(items).slice(0,15));
    }
    if(a==='smart'){
      const d=load(),errs=d.errors||{},weak=bank.filter(q=>errs[q[0]]>0),fresh=shuffle(bank.filter(q=>!errs[q[0]])).slice(0,8);
      session('🔄 Repaso inteligente',shuffle([...weak,...fresh]).slice(0,15));
    }
    if(a==='progress'){
      const d=load(),s=d.stats||{},answered=s.answered||0,correct=s.correct||0;
      menu('Mi progreso',[
        [`📊 ${correct} / ${answered}`,'Aciertos acumulados',()=>{}],
        [`🎯 ${Object.keys(d.errors||{}).length}`,'Preguntas con errores pendientes',()=>{}],
        [`🧠 ${answered?Math.round(correct/answered*100):0}%`,'Porcentaje global',()=>{}]
      ]);
    }
  });
})();
