// 4 ways to display output from javascript.

console.log("Hello world");
window.alert("Hello World");
document.write("Hello World");

document.getElementById("demo").innerHTML = "Hello World";

// var , let , const.

// var has global scope and let and const has block scope or function scope.

// Global Variable
var global1 = "john";
var global2 = "dow";
var global3 = "harry";

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b);
}

console.log(a);

console.log(c);
