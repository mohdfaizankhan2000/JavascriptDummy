const person = //object name
  {
    name: "john",
    age: 32,
    city: "London",
  };

let text = "";
for (let x in person) {
  text += person[x] + "<br>";
}

document.getElementById("demo").innerHTML = text;

const number = [345, 45, 78, 87, 25];
let text1 = "";
for (let i in number) {
  text1 += number[i] + "<br>";
}

// in for in loop variable will contain index of each persons
document.getElementById("demo").innerHTML = text1;

// in for of loop variable will contain value of each persons
const name = "Javascript";
let text2 = "";
for (let x of name) {
  text2 += x + "<br>";
}

document.getElementById("demo").innerHTML = text2;

const persons = ["Faizan", "Zeeshan", "Aadil"];
for (let z of persons) {
  text2 += z + "<br>";
}

document.getElementById("demo").innerHTML = text2;

const addition = [10, 20, 30, 40, 50];

let text3 = "";
for (let a of addition) {
  text3 += [a * 10] + "<br>";
}

document.getElementById("demo").innerHTML = text3;
