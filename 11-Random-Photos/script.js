const imageContainerEl=document.querySelector('.image-container')

const btnEl=document.querySelector('.btn')

btnEl.addEventListener('click',()=>{
  for(let i=1;i<10;i++){
    addNewImages()
  }
})

function addNewImages(){
  const newImg=document.createElement('img')
  newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
  imageContainerEl.appendChild(newImg)
}

addNewImages()