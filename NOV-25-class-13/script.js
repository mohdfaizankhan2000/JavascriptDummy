// 1.
let change = document.getElementById("demo");

function changestyle() {
  change.style.color = "red";
  change.style.backgroundColor = "blue";
  change.style.fontFamily = "Arial";
}

// 2. Write a javascript program to calculate multiplication and division of two number (input from the user).

function calculate() {
  let number1 = document.getElementById(input1.value);

  let number2 = document.getElementById(input2.value);

  let result = number1 * number2 || number1 / number2;

  document.getElementById("demo").innerHTML = result;
}

// 3. Write a javascript program to find area of rectangle when width and height are given by user.

function areaofrectangle() {
  let length = prompt("Enter Lenght");

  let width = prompt("Enter Width");

  let areaofrectangle = length * width;

  alert(areaofrectangle);
}

areaofrectangle();
