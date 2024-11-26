function display() {
  console.log("Hello World");
}

function show() {
  var name = "MOHD FAIZAN KHAN";
  var course = "FULL STACK JAVA DEVELOPMENT";

  var heading = document.getElementById("demo");

  heading.innerHTML = name + course;
}

function cube() {
  var number = prompt("Enter Any Number");
  var result = number * number * number;
  document.getElementById("cubes").innerHTML = result;
}

function change() {
  var heading1 = document.getElementById("change");
  heading1.style.color = "red";
  heading1.style.fontfamily = Arial;
}
