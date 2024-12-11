var age = 45;
console.log(typeof age);
var newAge = age.toString();
console.log(typeof newAge);

var data = "Javascript";
var text = "is a very easy and simple language";
var combined = data.concat(text);
console.log(combined);
// returns the number of characters in a string
var dataLen = data.length;
console.log(dataLen);
// charAt() returns the character at a specific index number
var newChar = data.charAt(0);
console.log(newChar);
// charAtcode It returns UTF/ASSCI code of string
var newChar1 = data.charCodeAt(2);
console.log(newChar1);
// return uppercase character
var newChar = data.toUpperCase();
console.log(newChar);
// return lowercase character
var newChar = data.toLowerCase();
console.log(newChar);
