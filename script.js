// Change the background color by genderating random ragba color clicking follwing button

// step

//step 1 - create onload handler

window.onload=()=>{
  main()
  textRgb()
}
function main(){
  const root=document.getElementById("root")
  const btnEl=document.getElementById("change-btn")
  btnEl.addEventListener('click',function(){
    const bgColor=genderateRGBColor()
    root.style.backgroundColor=bgColor
  })

}


function  textRgb(){
  const btnEl=document.getElementById("change-btn")
  const headingEL=document.querySelector('.heading')
  btnEl.addEventListener('click',function(){
    const textcolor=genderateTextRGBColor();
    headingEL.style.color=textcolor
  })
}
// step-4 -random color gendertor function

function genderateRGBColor(){
  //rab(0,0,0,) , rgb(255,255,255)
  const red=Math.floor(Math.random()*255)
  const green=Math.floor(Math.random()*255)
  const blue=Math.floor(Math.random()*255)

  return `rgb(${red},${green},${blue})`
}

function genderateTextRGBColor(){
  //rab(0,0,0,) , rgb(255,255,255)
  const red=Math.floor(Math.random()*255)
  const green=Math.floor(Math.random()*255)
  const blue=Math.floor(Math.random()*255)

  return `rgb(${red},${green},${blue})`
}
