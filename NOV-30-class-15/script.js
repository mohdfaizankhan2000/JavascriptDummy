var para = "Hello";
var name = "John";
var data = `this is a string`;

let h1 = document.getElementById("demo");
let div = document.getElementById("trial");
h1.innerHTML = `Hi this is the ans ${para} ${name} ${data}`;

// template literal or string literal

div.innerHTML = `<h1>${name}</h1>`;

function nameage() {
  name = `MOHD FAIZAN KHAN`;
  city = `BHOPAL`;

  let p = document.getElementById("demo1");

  p.innerHTML = `${name} ${city}`;
}

nameage();
