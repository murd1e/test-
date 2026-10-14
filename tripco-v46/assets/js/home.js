(()=>{
  const C=window.TripCo,D=C.DATA;
  function render(){
    const launch=document.querySelector('#homeServices');if(launch)launch.innerHTML=D.SERVICES.filter(x=>x.phase==='launch').slice(0,6).map(C.renderServiceCard).join('');
    const dest=document.querySelector('#homeDestinations');if(dest)dest.innerHTML=D.DESTINATIONS.slice(0,6).map(C.renderDestinationCard).join('');
    const exp=document.querySelector('#homeExperiences');if(exp)exp.innerHTML=D.EXPERIENCES.map(x=>`<article class="experience-tile"><div class="experience-icon">${x.icon}</div><h3>${C.getText(x.title)}</h3><p>${C.getText(x.desc)}</p></article>`).join('');
    const market=document.querySelector('#homeMarket');if(market)market.innerHTML=D.BOOKABLES.slice(0,4).map(C.renderMarketCard).join('');
    const ar=document.querySelector('#homeAR');if(ar){const a=D.AR_LANDMARKS[1];ar.innerHTML=`${C.media(a.image,a.fallback,C.getText(a.name))}<div class="visual-panel-copy"><span class="chip dark">TripCo AR</span><h3>${C.getText(a.name)}</h3><p>${C.getText(a.summary)}</p><a class="btn sand" href="ar.html?id=${a.id}">${C.t('arCta')}</a></div>`}
    C.bindDynamic();C.applyI18n();
  }
  document.addEventListener('DOMContentLoaded',render);document.addEventListener('tripco:lang',render);
})();
