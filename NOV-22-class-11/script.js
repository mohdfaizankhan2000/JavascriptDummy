// function expression

const display1 = function () {
  alert("function expression");
};

// whenever you pass a function as an argument to another function never use ()

let button = document.getElementById("btn");

button.addEventListener("click", display1);
