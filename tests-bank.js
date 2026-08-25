const official = (typeof exams !== 'undefined') ? [...exams[2019].questions, ...exams[2022].questions] : [];
const curated = [
  ['¿Dónde tiene lugar principalmente la emisión termoiónica en el tubo de rayos X?',['Filamento del cátodo','Blanco del ánodo','Colimador','Detector'],0,'TEMA 3','fácil'],
  ['¿Cuál es la función principal de la copa de enfoque?',['Concentrar y dirigir los electrones hacia el blanco','Refrigerar el detector','Filtrar el haz útil','Medir la dosis'],0,'TEMA 3','fácil'],
  ['¿Qué unidad corresponde a la dosis absorbida?',['Gray','Sievert','Becquerel','Tesla'],0,'Protección radiológica','fácil'],
  ['¿Qué unidad corresponde a la actividad radiactiva?',['Becquerel','Gray','Sievert','Tesla'],0,'Medicina nuclear','fácil'],
  ['¿Qué sistema se encarga de gestionar, almacenar y distribuir imágenes médicas?',['PACS','Generador','Colimador','Doppler'],0,'Radiología digital','fácil'],
  ['¿Qué agente se utiliza como contraste paramagnético en RM?',['Gadolinio','Bario','Yodo','Microburbujas'],0,'Resonancia magnética','fácil'],
  ['¿Qué parámetro de TC relaciona el avance de la mesa por rotación con la colimación total?',['Pitch','FOV','Matriz','Ventana'],0,'Tomografía computarizada','medio'],
  ['¿Qué permite valorar el Doppler en ecografía?',['El flujo sanguíneo y determinados flujos como el jet ureteral','La dosis absorbida','El número atómico','La actividad radiactiva'],0,'Ecografía','fácil'],
  ['¿Qué efecto de la radiación implica la absorción del fotón incidente por el átomo?',['Efecto fotoeléctrico','Dispersión Thomson','Dispersión coherente exclusivamente','Efecto Doppler'],0,'TEMA 2','medio'],
  ['¿Qué principio de protección radiológica exige que una exposición aporte un beneficio que la justifique?',['Justificación','Optimización','Dosimetría','Colimación'],0,'Protección radiológica','medio']
];
const key='radtech_tests_v2';
const load=()=>JSON.parse(localStorage.getItem(key)||'{}');
const save=x=>localStorage.setItem(key,JSON.stringify(x));
const ws=document.getElementById('workspace');
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function shuffle(a){return a.slice().sort(()=>Math.random()-0.5)}
function topicFacts(topic){
  const lines=topic.content.replace(/\r/g,'').split('\n').map(x=>x.trim()).filter(Boolean), facts=[];
  for(const line of lines){
    if(line.length<18 || /^[A-ZÁÉÍÓÚÜÑ0-9 .·→⟶()/-]{3,80}$/.test(line)) continue;
    const m=line.match(/^(.{2,70}?)\s*(?:⟶|→|:)\s*(.{10,220})$/);
    if(m) facts.push({term:m[1].replace(/[•→⟶]/g,'').trim(),def:m[2].trim(),raw:line});
    else if(line.length>=45 && !line.includes('→') && !line.includes('⟶')) facts.push({term:'el contenido descrito',def:line,raw:line});
  }
  const seen=new Set();
  return facts.filter(f=>{const k=f.term+'|'+f.def;if(seen.has(k))return false;seen.add(k);return true;});
}
function buildTopicBank(){
  const out=[]; if(typeof topics==='undefined') return out;
  Object.keys(topics).sort((a,b)=>+a-+b).forEach(n=>{
    const t=topics[n], facts=topicFacts(t); if(!facts.length)return;
    shuffle(facts).slice(0,24).forEach((f,i)=>{
      const others=facts.filter(x=>x!==f&&x.def!==f.def&&x.term!=='el contenido descrito'); if(others.length<3)return;
      const reverse=i%3===1;
      const question=reverse?`¿Qué concepto corresponde a la siguiente descripción? «${f.def}»`:`¿Cuál de las siguientes afirmaciones describe correctamente ${f.term}?`;
      const answers=reverse?[f.term,...shuffle(others).slice(0,3).map(x=>x.term)]:[f.def,...shuffle(others).slice(0,3).map(x=>x.def)];
      const difficulty=/\d|%|mm|cm|kg|kV|mA|MHz|seg|años|min|veces/i.test(f.raw)?'medio':(f.def.length>140?'difícil':'fácil');
      out.push([question,answers,0,`TEMA ${n}`,difficulty]);
    });
  }); return out;
}
function prepare(q){const opts=shuffle(q[1].map((text,i)=>({text,i})));return[q[0],opts.map(x=>x.text),opts.findIndex(x=>x.i===q[2]),q[3],q[4]]}
function record(q,correct){const d=load();d.errors=d.errors||{};d.stats=d.stats||{};const id=q[0];if(correct){if(d.errors[id])d.errors[id]=Math.max(0,d.errors[id]-1)}else d.errors[id]=(d.errors[id]||0)+1;d.stats.answered=(d.stats.answered||0)+1;d.stats.correct=(d.stats.correct||0)+(correct?1:0);save(d)}
function session(title,items){let qs=shuffle(items).map(prepare),pos=0,score=0;ws.hidden=false;const render=()=>{if(pos>=qs.length){ws.innerHTML=`<div class="study-material"><p class="eyebrow">${esc(title).toUpperCase()}</p><h2>🏆 Sesión terminada</h2><p class="final-score">${score} / ${qs.length}</p><p>${Math.round(score/qs.length*100)}% de aciertos</p><button class="secondary-button" id="again">Repetir</button></div>`;document.getElementById('again').onclick=()=>session(title,items);return}const q=qs[pos];ws.innerHTML=`<div class="study-material"><p class="eyebrow">${esc(title).toUpperCase()}</p><h2>Pregunta ${pos+1} de ${qs.length}</h2><p>${esc(q[0])}</p><div class="answer-grid">${q[1].map((a,i)=>`<button class="answer-option" data-i="${i}">${String.fromCharCode(65+i)}) ${esc(a)}</button>`).join('')}</div><p class="exam-progress">Aciertos: ${score}</p></div>`;ws.querySelectorAll('.answer-option').forEach(b=>b.onclick=()=>{const chosen=+b.dataset.i;ws.querySelectorAll('.answer-option').forEach((x,i)=>{x.disabled=true;if(i===q[2])x.classList.add('correct');if(i===chosen&&chosen!==q[2])x.classList.add('wrong')});const ok=chosen===q[2];if(ok)score++;record(q,ok);setTimeout(()=>{pos++;render()},450)})};render()}
function topicMenu(){const generated=buildTopicBank(),byTopic={};generated.forEach(q=>(byTopic[q[3]]??=[]).push(q));const entries=Object.keys(byTopic).sort((a,b)=>+a.split(' ')[1]-+b.split(' ')[1]);ws.hidden=false;ws.innerHTML=`<div class="study-material"><p class="eyebrow">TEST POR TEMAS</p><h2>📚 Elige un tema</h2><p>Cada tema tiene un banco propio de preguntas generado a partir del contenido de estudio.</p><div class="cards">${entries.map((n,i)=>`<button class="module-card" data-topic="${i}"><span class="module-number">${n}</span><h3>${esc((topics[n.split(' ')[1]]||{}).title||n)}</h3><p>${byTopic[n].length} preguntas disponibles</p><span class="module-action">Entrenar →</span></button>`).join('')}</div></div>`;ws.querySelectorAll('[data-topic]').forEach((b,i)=>b.onclick=()=>session(entries[i],byTopic[entries[i]]))}
function menu(title,buttons){ws.hidden=false;ws.innerHTML=`<div class="study-material"><p class="eyebrow">${esc(title).toUpperCase()}</p><h2>${esc(title)}</h2><div class="cards">${buttons.map((b,i)=>`<button class="module-card" data-pick="${i}"><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p><span class="module-action">Elegir →</span></button>`).join('')}</div></div>`;ws.querySelectorAll('[data-pick]').forEach((b,i)=>b.onclick=()=>buttons[i][2]())}
document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{const generated=buildTopicBank(),bank=[...generated,...curated,...official.map((q,i)=>[q[0],q[1],q[2],`ICS ${i<60?'2019':'2022'}`,i%4===0?'difícil':'medio'])],a=b.dataset.action;if(a==='quick')session('⚡ Reto rápido',shuffle(bank).slice(0,10));if(a==='topics')topicMenu();if(a==='difficulty')menu('Por dificultad',[['🌱 Aprende','Preguntas fáciles',()=>session('Aprende',bank.filter(q=>q[4]==='fácil').slice(0,15))],['⚡ Entrena','Dificultad media',()=>session('Entrena',bank.filter(q=>q[4]==='medio').slice(0,15))],['🔥 Reto','Preguntas difíciles',()=>session('Reto',bank.filter(q=>q[4]==='difícil').slice(0,15))]]);if(a==='errors'){const d=load(),errs=d.errors||{},items=bank.filter(q=>errs[q[0]]>0);if(!items.length)menu('Mis errores',[['✨ Todavía no hay errores','Haz algunos tests y aquí aparecerán las preguntas que falles.',()=>{}]]);else session('🎯 Mis errores',shuffle(items).slice(0,15))}if(a==='smart'){const d=load(),errs=d.errors||{},weak=bank.filter(q=>errs[q[0]]>0),fresh=shuffle(bank.filter(q=>!errs[q[0]])).slice(0,8);session('🔄 Repaso inteligente',shuffle([...weak,...fresh]).slice(0,15))}if(a==='progress'){const d=load(),s=d.stats||{},answered=s.answered||0,correct=s.correct||0;menu('Mi progreso',[[`📊 ${correct} / ${answered}`,'Aciertos acumulados',()=>{}],[`🎯 ${Object.keys(d.errors||{}).length}`,'Preguntas con errores pendientes',()=>{}],[`🧠 ${answered?Math.round(correct/answered*100):0}%`,'Porcentaje global',()=>{}]])}});