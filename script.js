

const sections=document.querySelectorAll('section')
const trans=document.querySelector(".trans")
const grandiants=["coral","green","chocolate","tomato"]

const option={
  threshold:0.7
}



const observer=new IntersectionObserver(navScroll,option)

function navScroll(entries){
  entries.forEach(function(entry){

    const className=entry.target.className;

    const  activeLink=document.querySelector(`[data-page="${className}"]`)
    const elementIndex=entry.target.getAttribute('data-index')
    const coordinates=activeLink.getBoundingClientRect();
      const directions={
        height:coordinates.height,
        width:coordinates.width,
        top:coordinates.top,
        left:coordinates.left,
      }
      if(entry.isIntersecting){
        trans.style.setProperty('height',`${directions.height}px`)
        trans.style.setProperty('width',`${directions.width}px`)
        trans.style.setProperty('top',`${directions.top}px`)
        trans.style.setProperty('left',`${directions.left}px`)
        trans.style.backgroundColor=grandiants[elementIndex]
      }
  })
}

sections.forEach(function(section){
  observer.observe(section)
})
