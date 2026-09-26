document.addEventListener('DOMContentLoaded',()=>{
  const container=document.getElementById('radio-rayos-list');
  if(!container)return;

  const podcasts=[
    {
      topic:'Tema 2',
      title:'La batalla cuántica de una radiografía',
      description:'Podcast de estudio sobre el Tema 2.',
      audio:'https://github.com/martacciria-hub/RadtechcrewTTS/releases/download/prova-podcast-tema2/La_batalla_cuantica_de_una_radiografia.m4a'
    }
  ];

  container.innerHTML=podcasts.map(podcast=>
    '<article class="quick-card radio-podcast-card">'+
      '<span class="eyebrow">'+podcast.topic+'</span>'+
      '<strong>'+podcast.title+'</strong>'+
      '<span>'+podcast.description+'</span>'+
      '<audio controls preload="metadata" src="'+podcast.audio+'"></audio>'+
    '</article>'
  ).join('');
});
