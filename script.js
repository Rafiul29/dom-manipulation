
//select dom element
const openBtn=document.querySelector(".open")
const modalContainer=document.querySelector(".modal-container")
const closeBtn=document.querySelector(".modal-btn")

//btn eventlistener

openBtn.addEventListener("click",function(){
  modalContainer.classList.add('show')
 
})

closeBtn.addEventListener("click",function(){
  modalContainer.classList.remove('show')
})

modalContainer.addEventListener("click",function(){
  modalContainer.classList.remove('show')
})
