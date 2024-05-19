"use strict";

// const title= document.getElementById('main-heading')
// const secondTtile = document.getElementById('second-heading')

// // querySelector ---most of the case
// const title2 = document.querySelector("#main-heading")
// const btn = document.querySelector('.btn')

// const country = document.querySelectorAll('.country')
// console.log(country)


// ==============styles element..........

// const title= document.querySelector('#main-heading')
// title.style.color="crimson";
// title.style.fontSize="3rem"
// title.style.backgroundColor="black"

// const countires =document.querySelectorAll('.country')

// for(let i=0; i<countires.length; i++){
//     countires[i].style.color="hotpink";
//     countires[i].style.fontSize="2rem";
// }


//============create elements
// const ul =document.querySelector('ul')
// const li =document.createElement('li')
// const li2 =document.createElement('li')
// li.innerText="Itali"
// li2.textContent="Pakisthan"
// append
// ul.append(li)
// ul.appendChild(li2)
//ul.insertAdjacentElement('afterbegin',li)
//ul.insertAdjacentElement('afterbegin',li2)

// const firstCountry= document.querySelector('.country')
// firstCountry.innerText="BD"
// firstCountry.textContent="BD"
// firstCountry.innerHTML="BD"
// console.log(ul.innerHTML)

// const container =document.querySelector('.container')
// container.innerHTML=`
// <h1 id="main-heading">
// Countries
// </h1>
// <h2 id="second-heading">List</h2>
// <ul>
// <li class="country">Bangladesh</li>
// <li class="country">India</li>
// <li class="country">USA</li>
// <li class="country">Uk</li>
// </ul>
// <input type="text" class="input">
// <button class="btn">Add Country</button>
// `;

// ==========set artibutes
//const h1= document.querySelector("#main-heading")
// h1.setAttribute('class', 'main-headLine')
// h1.setAttribute("width","300px")
// =========get artibute
//console.log(h1.getAttribute("width"))
// ========remove artibute
//h1.removeAttribute("width")






// class
// h1.classList.add("main-heading","first-country")
// //h1.classList.remove("#main-heading");

// const a=7;
// if(a>=10) h1.classList.toggle("main-heading");

// console.log(h1.classList.contains('main-heading'))

// // elelemt remove

// const h2= document.getElementById("second-heading");
// h2.remove()


// ===============Node Traversal=============

// const ul =document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.parentNode);

// console.log(ul.childNodes)
// console.log(ul.children)

// console.log(ul.firstChild)
// console.log(ul.lastChild)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)


// const h1= document.querySelector("#main-heading")

// console.log(h1.nextSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.previousElementSibling)


// Event handler .................

const btn =document.querySelector(".btn")
const input =document.querySelector('.input');
const ul =document.querySelector('ul');


btn.addEventListener("click",function(){
  const li= document.createElement('li');
  li.classList.add("country");
 li.textContent = input.value;
 console.log(input.value)
//  ul.append(li);

ul.insertAdjacentElement("beforeend",li)
input.value="";

})