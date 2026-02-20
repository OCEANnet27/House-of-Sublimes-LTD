// Transfered from inline script in HOS.html
(function () {
  const nav = document.querySelector(".first-nav-list");
  if (!nav) return;
  const links = nav.querySelectorAll(".nav-link");
  const saved = localStorage.getItem("hos:selected") || "";
  let selectedFound = false;
  links.forEach((link) => {
    if (link.textContent === saved) {
      link.classList.add("selected");
      selectedFound = true;
    }
    link.addEventListener("click", function (e) {
      links.forEach((l) => l.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("hos:selected", this.textContent);
    });
  });
  if (!selectedFound && links[0]) links[0].classList.add("selected");
})();

/* Simple hero image slider */
(function(){
  const slider = document.querySelector('.hero-slider');
  if(!slider) return;
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(track.querySelectorAll('.slide'));
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  const dotsWrap = slider.querySelector('.slider-dots');
  let index = 0;
  let timer = null;

  slides.forEach((s,i)=>{
    const btn = document.createElement('button');
    btn.className = 'slider-dot';
    btn.setAttribute('aria-label','Go to slide '+(i+1));
    btn.addEventListener('click', ()=> goTo(i));
    dotsWrap.appendChild(btn);
  });

  const dots = Array.from(dotsWrap.children);

  function update(){
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i)=> d.classList.toggle('active', i===index));
  }

  function goTo(i){
    index = (i + slides.length) % slides.length;
    update();
    resetTimer();
  }

  prev.addEventListener('click', ()=> goTo(index-1));
  next.addEventListener('click', ()=> goTo(index+1));

  function startTimer(){ timer = setInterval(()=> goTo(index+1), 4500); }
  function resetTimer(){ clearInterval(timer); startTimer(); }

  update(); startTimer();
})();

/* Sticky nav with scroll-triggered logo */
(function(){
  const nav = document.querySelector('.main-nav');
  const header = document.querySelector('header');
  const scrollLogo = document.getElementById('scrollLogo');
  if(!nav || !header || !scrollLogo) return;

  const headerHeight = header.offsetHeight;
  let prevScrolled = false;

  window.addEventListener('scroll', ()=> {
    const scrolled = window.scrollY > headerHeight * 0.5;
    if(scrolled !== prevScrolled){
      scrollLogo.classList.toggle('show', scrolled);
      nav.classList.toggle('scrolled', scrolled);
      prevScrolled = scrolled;
    }
  }, { passive: true });
})();

/* Mobile nav toggle */
(function(){
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mainNav');
  if(!nav || !toggle || !menu) return;
  toggle.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();
