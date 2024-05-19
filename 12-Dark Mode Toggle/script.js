const inputEl=document.querySelector('.input');
const bodyEl=document.querySelector('body');

inputEl.checked=true;
updateBody()
function updateBody(){
  if(inputEl.checked){
    bodyEl.style.backgroundColor = 'black'
  }else{
    bodyEl.style.backgroundColor = 'white'
  }
}

inputEl.addEventListener('change',updateBody)


