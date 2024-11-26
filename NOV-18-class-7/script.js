// object literal

// const person = {
//   name: "john",
//   age: "30",
//   city: "Bhopal",
// };

// //to know the data type of person variable

// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// // Array

// const numbers = [10, 20, 30, 89];

// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);

// // Function
// // Fuction is a way to group a code together you can run it anytime anywhere.

// function sayHello() {
//   console.log("Hello Everyone");
//   alert("Hello EveryOne");
//   document.write("Hello EveryOne");
// }

// // Function Calling another name of calling is invoking

// sayHello();

// // parameter
// // Parameters when declaring function
// function addition(num1, num2) {
//   return num1 + num2;
// }

// //arguments
// // Argument while calling the function
// console.log(addition(100, 500));
// // document.getElementById("demo").innerHTML = addition(100, 700);

// let number = 67;

// function cube() {
//   return number * number * number;
// }

// console.log(cube());

// // Function Expression
// const multiply = function (x, y) {
//   return x * y;
// };

// console.log(multiply(2, 4));

// // Arrow Function

// const divide = (x, y) => {
//   return x / y;
// };
// console.log(divide(45, 7));

// Task

// 1. write a function that takes 3 parameters and perform arithmetic operations on that.
// 2. take 2 variables of your name and age and display it using the function in innerhtml and console

//  Task 1.
function arithmetic(num_1, num_2, num_3) {
  // return num_1 + num_2 + num_3;
  // return num_1 - num_2 - num_3;
  return num_1 * num_2 * num_3;
  // return num_1 / num_2 / num_3;
}

console.log(arithmetic(100, 200, 450));

// Task 2

var name = "MOHD FAIZAN KHAN";
function display(name) {
  return name;
}

var age = 24;
function display1(age) { 
  return age;
}

document.getElementById("demo1").innerHTML = display(name);

console.log(display(name));

document.getElementById("demo2").innerHTML = display1(age);

console.log(display1(age));
