const btnEl=document.getElementById("btn");

btnEl.addEventListener("mouseover",(event)=>{
  console.log(btnEl.offsetLeft)
  const x=(event.clientX-btnEl.offsetLeft);
  const y=(event.clientY-btnEl.offsetTop);
  btnEl.style.setProperty("--xpos",x+"px");
  btnEl.style.setProperty("--ypos",y+"px");
})