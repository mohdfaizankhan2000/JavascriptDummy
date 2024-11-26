function display() {
  alert("button was clicked");
}

function hover() {
  alert("Button Was Hovered");
}

var button = document.getElementById("btn1");

button.addEventListener("mouseover", hover);
