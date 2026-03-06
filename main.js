// ── NAV SCROLL ──
const nav=document.getElementById('mainNav');
if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));

// ── REVEAL ──
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ── LANG ──
let curLang='en';
function setLang(l){
  if(l===curLang)return;curLang=l;
  document.getElementById('btnEN').classList.toggle('active',l==='en');
  document.getElementById('btnFR').classList.toggle('active',l==='fr');
  document.documentElement.lang=l;
  document.title=l==='fr'?'Carreh — Voyage, Conciergerie & Visas':'Carreh — Travel, Concierge & Visa Services';
  document.querySelectorAll('[data-en]').forEach(el=>{
    const v=el.getAttribute('data-'+l);
    if(!v)return;
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA'){const ph=el.getAttribute('data-'+l+'-ph');if(ph)el.placeholder=ph;return;}
    el.innerHTML=v;
  });
}

// ── VISA TABS ──
function switchTab(id,btn){
  document.querySelectorAll('.vsec').forEach(s=>s.style.display='none');
  document.querySelectorAll('.vntab').forEach(b=>b.classList.remove('active'));
  const sec=document.getElementById(id);
  if(sec){
    sec.style.display='block';
    sec.querySelectorAll('.reveal').forEach(el=>{
      el.classList.remove('visible');
      void el.offsetWidth;
      el.classList.add('visible');
    });
  }
  if(btn)btn.classList.add('active');
}
function initVisaTabs(){
  const tabs=document.querySelectorAll('.vntab');
  if(!tabs.length)return;
  tabs.forEach((b,i)=>{if(i===0)b.classList.add('active');else{const id=b.getAttribute('data-target');const sec=document.getElementById(id);if(sec)sec.style.display='none';}});
}
initVisaTabs();

// ── MODAL ──
let curVisaService='';
function openModal(service){
  curVisaService=service||'';
  const bg=document.getElementById('modalBg');
  if(!bg)return;
  if(service){
    const title=document.getElementById('modalTitle');
    const sub=document.getElementById('modalSub');
    if(title)title.textContent='Request '+service;
    if(sub)sub.textContent='Our Carreh visa specialists will review your profile and get back to you within 24 hours.';
    const svcSel=document.getElementById('modalService');
    if(svcSel)svcSel.value=service;
  }
  bg.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  const bg=document.getElementById('modalBg');
  if(bg)bg.classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
const modalBg=document.getElementById('modalBg');
if(modalBg)modalBg.addEventListener('click',e=>{if(e.target===modalBg)closeModal();});

// ── FORM SUBMIT (modal) ──
function submitModal(e){
  e.preventDefault();
  const f=document.getElementById('modalForm');
  const ok=document.getElementById('modalOk');
  const btn=f.querySelector('.fsub');
  if(btn){btn.textContent='Sending...';btn.disabled=true;}
  fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
  .then(res=>{
    if(res.ok){if(f&&ok){f.style.display='none';ok.style.display='block';}}
    else{alert('Something went wrong. Please try again or contact us on WhatsApp.');if(btn){btn.textContent='Send Request →';btn.disabled=false;}}
  })
  .catch(()=>{alert('Network error. Please try again or contact us on WhatsApp.');if(btn){btn.textContent='Send Request →';btn.disabled=false;}});
  return false;
}

// ── CONTACT FORM ──
function submitContact(e){
  e.preventDefault();
  const f=document.getElementById('contactForm');
  const ok=document.getElementById('contactOk');
  const btn=f.querySelector('.fsub');
  if(btn){btn.textContent='Sending...';btn.disabled=true;}
  fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
  .then(res=>{
    if(res.ok){if(f&&ok){f.style.display='none';ok.style.display='block';}}
    else{alert('Something went wrong. Please try again or contact us on WhatsApp.');if(btn){btn.textContent='Send Message →';btn.disabled=false;}}
  })
  .catch(()=>{alert('Network error. Please try again or contact us on WhatsApp.');if(btn){btn.textContent='Send Message →';btn.disabled=false;}});
  return false;
}
