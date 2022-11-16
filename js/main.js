// IIFE
(function(){
// start
document.getElementById("myHeading").innerHTML = "Martin"
let currentNav = document.querySelector("nav ul li")
console.info(currentNav)
currentNav.setAttribute("class", "currentPage")
// document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk")
// event example
let eventBtn = document.getElementById("myTestEvent")
eventBtn.addEventListener("click", myEvent)
function myEvent(ev){
    console.info(ev.target)
    ev.target.innerHTML = "Changed"
    // event handler
    console.info("I was clicked")
}
// background colour selector
//   document.querySelector(".red").addEventListener('click', function(ev){
//       document.querySelector('body').setAttribute('class', "redBack");
//   })
//   document.querySelector(".blue").addEventListener('click', function(ev){
//       document.querySelector('body').setAttribute('class', "blueBack");
//   })
//   document.querySelector(".green").addEventListener('click', function(ev){
//       document.querySelector('body').setAttribute('class', "greenBack");
//   })
//   document.querySelector(".reset").addEventListener('click', function(ev){
//       document.querySelector('body').removeAttribute('class');
//   })

let colourBtns = document.querySelectorAll(".colPicker")
for(let i=0; i<colourBtns.length; i++){
    colourBtns[i].addEventListener("click", chgColour)
}

function chgColour(ev){
    console.info(ev.target.classList[0])
    let newBgColour = ev.target.classList[0] + "Back"
    document.querySelector("body").setAttribute("class", newBgColour)
}

//end
})()