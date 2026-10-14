(()=>{
  const C=window.TripCo;if(!C)return;
  const $=C.$,$$=C.$$;
  function l(ar,en){return C.lang==='ar'?ar:en}
  function injectSkip(){if(document.querySelector('.skip-link'))return;const a=document.createElement('a');a.className='skip-link';a.href='#mainContent';a.textContent=l('تجاوز إلى المحتوى','Skip to content');document.body.prepend(a);document.querySelector('main')?.setAttribute('id','mainContent')}
  function mobileDock(){if(document.querySelector('.tc4-mobile-dock'))return;const p=document.body.dataset.page;const rows=[['home','index.html','⌂','الرئيسية','Home'],['explore','destinations.html','⌖','استكشف','Explore'],['planner','planner.html','≋','خطط','Plan'],['ar','ar.html','◎','AR','AR'],['cart','cart.html','▣','السلة','Cart']];const n=document.createElement('nav');n.className='tc4-mobile-dock';n.innerHTML=rows.map(r=>`<a class="${p===r[0]?'active':''}" href="${r[1]}"><b>${r[2]}</b><span>${l(r[3],r[4])}</span></a>`).join('');document.body.appendChild(n)}
  function updateVersion(){document.querySelectorAll('.footer-bottom span:last-child').forEach(el=>el.textContent='TripCo v4.6 · Saudi Journey OS · Preview Notice Edition')}
  function projectPreviewNotice(){
    const key='tripco_project_notice_seen';
    try{if(sessionStorage.getItem(key)==='1')return}catch{}
    const modal=document.createElement('div');
    modal.className='project-notice-backdrop';
    modal.innerHTML=`<section class="project-notice" role="dialog" aria-modal="true" aria-labelledby="projectNoticeTitle">
      <button class="project-notice-close" type="button" aria-label="Close">×</button>
      <div class="project-notice-icon">!</div>
      <span class="project-notice-kicker" data-ar="تنبيه قبل الدخول" data-en="Preview notice"></span>
      <h2 id="projectNoticeTitle" data-ar="هذا الموقع مخصص لعرض فكرة TripCo فقط" data-en="This website is only a presentation of the TripCo concept"></h2>
      <p data-ar="الموقع نموذج أولي لعرض الفكرة، وما زال غير مكتمل من الناحية البرمجية والفكرية. بعض الصفحات والخدمات والبيانات والحجوزات والتذاكر والأسعار وميزات الواقع المعزز تجريبية أو تصورية، ولا تمثل خدمة تشغيلية أو عملية شراء أو حجز حقيقية." data-en="This website is a concept prototype and is still incomplete from both a technical and product-concept perspective. Some pages, services, data, bookings, tickets, prices and augmented-reality features are illustrative or experimental and do not represent an operational service or a real purchase or booking."></p>
      <div class="project-notice-points"><span data-ar="عرض فكرة فقط" data-en="Concept preview only"></span><span data-ar="غير مكتمل برمجيًا وفكريًا" data-en="Technically and conceptually incomplete"></span><span data-ar="لا توجد حجوزات أو مدفوعات حقيقية" data-en="No real bookings or payments"></span></div>
      <button class="btn primary project-notice-accept" type="button" data-ar="فهمت، متابعة إلى الموقع" data-en="I understand, continue to the website"></button>
    </section>`;
    document.body.appendChild(modal);C.applyI18n(modal);document.body.classList.add('notice-open');
    const close=()=>{try{sessionStorage.setItem(key,'1')}catch{};modal.classList.add('leaving');document.body.classList.remove('notice-open');setTimeout(()=>modal.remove(),220)};
    modal.querySelector('.project-notice-accept')?.addEventListener('click',close);
    modal.querySelector('.project-notice-close')?.addEventListener('click',close);
    modal.addEventListener('click',e=>{if(e.target===modal)close()});
    document.addEventListener('keydown',function esc(e){if(e.key==='Escape'&&document.body.contains(modal)){close();document.removeEventListener('keydown',esc)}});
    setTimeout(()=>modal.querySelector('.project-notice-accept')?.focus(),80);
  }
  function quickTelemetry(){const key='tripco_v4_views';C.store.set(key,(C.store.get(key,0)||0)+1)}
  function plannerDraftIndicator(){if(!C.store.get('tripco_current_plan'))return;document.querySelectorAll('a[href="planner.html"]').forEach(a=>{if(a.querySelector('.draft-dot'))return;const i=document.createElement('i');i.className='draft-dot';i.style.cssText='width:6px;height:6px;border-radius:50%;background:#d66e52;display:inline-block;margin-inline-start:5px';a.appendChild(i)})}
  document.addEventListener('DOMContentLoaded',()=>{injectSkip();mobileDock();updateVersion();projectPreviewNotice();quickTelemetry();plannerDraftIndicator()});
  document.addEventListener('tripco:lang',()=>{document.querySelector('.skip-link')?.remove();document.querySelector('.tc4-mobile-dock')?.remove();injectSkip();mobileDock();const m=document.querySelector('.project-notice-backdrop');if(m)C.applyI18n(m)});
})();
