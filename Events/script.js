// Part 1
// Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
document.addEventListener("DOMContentLoaded", function(){
    })

// Replace the text "Change me" with "Hello World!".
var change_heading = document.getElementById("change_heading");
    change_heading.innerHTML = "Hello World!"

// When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
var section = document.querySelector("section");
section.addEventListener("mouseover", function(event){
   var selectedColor = document.querySelector('.selected');
   selectedColor.innerText = event.target.className;
 })

// Create a new div element.
var newDiv = document.createElement("div");

// Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.className = "Purple"

// Append your new div to the page to the section tag.
section.appendChild(newDiv)


// Part 2
var startRace = document.querySelector('button');

startRace = addEventListener('click', () => {
    var pageWidth = document.body.offsetWidth;

    let carMovement = [{transform: `translate(${pageWidth-50}px,0)`}];
    
    let car1Speed = Math.floor(Math.random() * (3500 - 3000 + 1)) + 4000;
    let car2Speed = Math.floor(Math.random() * (3500 - 3000 + 1)) + 4000;

    document.querySelector(".car1").animate(
        carMovement,
        {duration: car1Speed}
    );
     
    document.querySelector(".car2").animate(
        carMovement,
        {duration: car2Speed}
    );
    
    setTimeout(()=> {
        if (car1Speed < car2Speed) {
            alert ("Car 1 WINS");
        }else{
            alert("Car 2 WINS")
        }
    },4500)
});
