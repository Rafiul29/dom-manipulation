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
  const output=document.getElementById("output")
  const copyBtnEl=document.getElementById("copy-btn")

  btnEl.addEventListener('click',function(){
    const bgColor=genderateRGBColor()
    root.style.backgroundColor=bgColor
    output.value=bgColor
  })

  copyBtnEl.addEventListener("click",function(){
    navigator.clipboard.writeText(output.value)
  } )
  
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

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function genderateTextRGBColor(){
  //rab(0,0,0,) , rgb(255,255,255)
  const red=Math.floor(Math.random()*255)
  const green=Math.floor(Math.random()*255)
  const blue=Math.floor(Math.random()*255)

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
