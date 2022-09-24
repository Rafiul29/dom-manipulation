
const btns=document.querySelectorAll(".btn");
const modal =document.querySelector(".modal")
const closebtn = document.querySelector('.close')
const overley = document.querySelector('.overley')

function modalShow(){
    modal.style.opacity=1;
    modal.style.visibility="visible";
}

function modalHide(){
    modal.style.opacity=0;
    modal.style.visibility="hidden";
}

function overleyHide(){
    overley.style.opacity=0;
    overley.style.visibility="hidden"
}

function overleyShow(){
    overley.style.opacity=1;
    overley.style.visibility="visible"
}
for(let i=0; i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        modalShow()
        overleyShow()
    })
}
closebtn.addEventListener("click",function(){
    modalHide()
    overleyHide()
    
})

overley.addEventListener("click",function(){
    modalHide()
    overleyHide()
})