const progressEl=document.querySelector('.progress-done');
setTimeout(function(){
  progressEl.style.width=progressEl.getAttribute('data-done')+"%"
 
  progressEl.style.opacity=1
},1000)

