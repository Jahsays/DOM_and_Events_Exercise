// Select the section with an id of container without using querySelector.
var container = document.getElementById("container");
// Select the section with an id of container using querySelector.
var container = document.querySelector("#container");
// Select all of the list items with a class of "second".
var listItemsWithClassOfSecond = document.getElementsByClassName("second");
// Select a list item with a class of third, but only the list item inside of the ol tag.
var listItemsWithClassOfThird = document.querySelector("ol .third");
// Give the section with an id of container the text "Hello!".
var section = document.getElementById("container");
section.innnerHTML = "Hello!";

// Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.add("main");
// Remove the class main on the div with a class of footer.
footer.classList.remove("main");
// Create a new li element.
var newLi = document.createElement("li");
// Give the li the text "four".
newLi.innerText = "four";
// Append the li to the ul element.
var ul = document.querySelector("ul");
ul.appendChild(newLi);
// Loop over all of the lis inside the ol tag and give them a background color of "green".
var ol = document.querySelectorAll("ol");
for (var i = 0; i < ol.length; i++) {
    ol[i].style.backgroundColor = "green";
}

// Remove the div with a class of footer.
var body = document.querySelector('body');
var footer = document.querySelector(".footer");
    body.removeChild(footer);

