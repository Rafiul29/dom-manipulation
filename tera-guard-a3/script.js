"use strict";

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const cookieBody = document.querySelector(".cookie");
const cookieCloseBtn = document.querySelector(".cookie__close");
const imgTargets = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");


// Cookie
cookieBody.addEventListener('click',function(){
  cookieBody.classList.add('hidden');
  cookieBody.style.bottom="-12rem"
})


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
observer.unobserver(entry.target);
}
const sectionObs= new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.3,
})

allSections.forEach(section=>{
  sectionObs.observe(section);
  section.classList.add("section--hidden");

})