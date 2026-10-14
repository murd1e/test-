(()=>{
  const C=window.TripCo,D=C.DATA;
  const $=s=>document.querySelector(s);
  const L=(ar,en)=>C.lang==='ar'?ar:en;
  let filter='all', sort='recommended', compare=[];

  function setDefaultDates(){
    const a=$('#hotelCheckin'),b=$('#hotelCheckout'); if(!a||!b||a.value)return;
    const d=new Date(); d.setDate(d.getDate()+14); const e=new Date(d); e.setDate(e.getDate()+3);
    a.value=d.toISOString().slice(0,10); b.value=e.toISOString().slice(0,10);
  }
  function hotelNights(){const a=$('#hotelCheckin')?.value,b=$('#hotelCheckout')?.value;if(!a||!b)return 1;return Math.max(1,Math.round((new Date(b)-new Date(a))/86400000)||1)}
  function stars(n){return '★'.repeat(n)}
  function render(){
    const city=$('#hotelCity')?.value||'all'; const budget=Number($('#hotelBudget')?.value||0); const nights=hotelNights();
    let rows=D.HOTELS.filter(h=>(city==='all'||h.city===city)&&(filter==='all'||String(h.stars)===filter)&&(!budget||h.price<=budget));
    if(sort==='price')rows.sort((a,b)=>a.price-b.price); else if(sort==='rating')rows.sort((a,b)=>b.rating-a.rating); else rows.sort((a,b)=>b.rating-a.rating||a.price-b.price);
    $('#hotelCount').textContent=L(`${rows.length} خيارات إقامة · ${nights} ليلة`,` ${rows.length} stays · ${nights} night${nights>1?'s':''}`);
    $('#hotelGrid').innerHTML=rows.length?rows.map(h=>`<article class="hotel-card"><div class="hotel-card-media">${C.media(h.image,h.image,C.getText(h.name))}<span class="rating-pill">${h.rating} / 5</span></div><div class="hotel-card-body"><div class="hotel-stars">${stars(h.stars)}</div><h3>${C.getText(h.name)}</h3><div class="hotel-meta">${C.getText(h.area)} · ${C.money(h.reviews)} ${L('تقييم','reviews')}</div><div class="hotel-features">${h.features[C.lang].map(x=>`<span class="hotel-feature">${x}</span>`).join('')}</div><div class="hotel-price-row"><div class="hotel-price"><small>${L('السعر التجريبي لليلة يبدأ من','Demo nightly rate from')}</small><strong>${C.money(h.price)} ${C.t('sar')}</strong>${h.oldPrice?` <span class="old-inline">${C.money(h.oldPrice)}</span>`:''}<small>${L(`إجمالي ${nights} ليلة: ${C.money(h.price*nights)} ${C.t('sar')}`,`${nights}-night estimate: ${C.money(h.price*nights)} ${C.t('sar')}`)}</small></div><div style="display:grid;gap:7px"><button class="btn primary small" data-hotel-book="${h.bookableId}">${L('أضف الإقامة للسلة','Add stay')}</button><button class="btn small hotel-compare ${compare.includes(h.id)?'active':''}" data-hotel-compare="${h.id}">${compare.includes(h.id)?L('تمت المقارنة','Compared'):L('قارن','Compare')}</button></div></div></div></article>`).join(''):`<div class="empty">${L('لا توجد خيارات مطابقة للفلاتر.','No stays match these filters.')}</div>`;
    document.querySelectorAll('[data-hotel-book]').forEach(b=>b.addEventListener('click',()=>C.addToCart(b.dataset.hotelBook,hotelNights())));
    document.querySelectorAll('[data-hotel-compare]').forEach(b=>b.addEventListener('click',()=>toggleCompare(b.dataset.hotelCompare)));
    renderCompare();
  }
  function toggleCompare(id){const i=compare.indexOf(id);if(i>=0)compare.splice(i,1);else{if(compare.length>=3)compare.shift();compare.push(id)}render()}
  function renderCompare(){const el=$('#hotelCompare');if(!el)return;if(compare.length<2){el.classList.add('hidden');return}el.classList.remove('hidden');const rows=compare.map(id=>D.HOTELS.find(h=>h.id===id)).filter(Boolean);el.innerHTML=`<div class="tc4-panel"><div class="kicker">TripCo Compare</div><h3>${L('مقارنة الإقامات','Stay comparison')}</h3><div class="planner-v4-summary">${rows.map(h=>`<div class="metric"><b>${C.getText(h.name)}</b><span>${h.stars}★ · ${h.rating}/5 · ${C.money(h.price)} ${C.t('sar')}</span></div>`).join('')}</div></div>`}
  function bind(){
    setDefaultDates();
    ['hotelCity','hotelCheckin','hotelCheckout','hotelGuests','hotelBudget','hotelSort'].forEach(id=>$('#'+id)?.addEventListener('change',()=>{if(id==='hotelSort')sort=$('#hotelSort').value;render()}));
    $('#hotelSearch')?.addEventListener('click',render);
    document.querySelectorAll('[data-hotel-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-hotel-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.hotelFilter;render()}));
    render();
  }
  document.addEventListener('DOMContentLoaded',bind);document.addEventListener('tripco:lang',render);
})();
