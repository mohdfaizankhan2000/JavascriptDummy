//for of loop
let header = "Template Literals";
let tags = ["Template Strings", "Javascript", "Es6"];
let text = ` <h2>${header}</h2>
  <ul>`;
for (let x of tags) {
  text += `<li>${x}</li>`;
}

text += `</ul>`;

document.body.innerHTML = text;

/* call back function
 A function passed as an argument to another function is called as call back function*/

//for each loop

const numbers = [23, 45, 65, 678];

numbers.forEach(calculate);

function calculate(y) {
  console.log(y * 100);
}

//Math Function

//math.round function
let output = Math.PI;
output = Math.round(45.236565);
//math.round to the nearest whole number

//math.ceil function
output = Math.ceil(45.454);
//math.ceil the nearest higher whole number

//math.floor function
output = Math.floor(35.677);
//math.floor the down nearest higher whole number

//math.trunc function
output = Math.trunc(48.877);
//It returns only interger value and it ignore point/float value

console.log(output);
