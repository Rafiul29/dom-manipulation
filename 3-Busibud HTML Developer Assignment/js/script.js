"use strict";


//dom element selector
const nav=document.querySelector('.nav');
const header=document.querySelector('.hero');
const allSections=document.querySelectorAll('.section');
const btn_items=document.querySelectorAll('.btn-item')

// swiper js slider
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});



// Stick navbar
// nav's height
const navheight=nav.getBoundingClientRect().height;

function sticky(entries){
  const entry = entries[0];
  if(!entry.isIntersecting){
    nav.classList.add("sticky")
  }else{
    nav.classList.remove("sticky")
  }
}
const headerOberver=new IntersectionObserver(sticky,{
  root: null, // Viewport
  threshold:0,
  rootMargin: `-${navheight}px`,
})

headerOberver.observe(header);

// reveal section.
function revealSection(entries,observer){
const [entry]=entries;
if(!entry.isIntersecting) return;
entry.target.classList.remove("section--hidden")
// observer.unobserver(entry.target);
}
const sectionObs= new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.3,
})

allSections.forEach(section=>{
  sectionObs.observe(section);
  section.classList.add("section--hidden");
})


// button userinteract
btn_items.forEach((btn,i)=>(
  btn.addEventListener('click',()=>(
     alert(`Say Hello Web Developer ${i+1}`)
  ))
))



