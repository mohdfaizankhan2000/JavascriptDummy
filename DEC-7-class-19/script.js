let output;
output = Math.sign(-56);
// Math.sign(x) return if x is negative(-1), null or positive(1);
output = Math.pow(2, 3);
// Math.pow (x,y) returns the value of x to power of y.

output = Math.sqrt(90);
//return the sqrt of the number

output = Math.min(34, 89, 7247, 63268, 87266, 6246);
output = Math.max(34, 89, 7247, 63268, 87266, 6246);
// Math.min() and Math.max() can be used to find the lowest or highest value ina list of argument.

output = Math.random();
// return random number between 0 and 1;

output = Math.floor(Math.random() * 10);
// return random number between 0 to 10
output = Math.floor(Math.random() * 100);

output = Math.floor(Math.random() * 10) + 1;
console.log(output);

// min included max excluded
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(200, 300));

//Both number included

function getIncludedNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getIncludedNumber(200, 400));

// Map/ higherorder function
const numbers = [1, 2, 3, 4, 5];

//double is call back function
const newNumbers = numbers.map(double);

function double(x) {
  return x * x;
}

console.log(numbers);
console.log(newNumbers);

const cars = ["Audi", "Mercedes", "Jaguar", "BMW", "Honda"];

let text = "<ul>";

cars.map((key) => {
  text <= "<li>${key}</li>";
});

text <= "</ul>";

document.body.innerHTML =  text;



