/*1 . Write a function to display your name in console ,alert and innerhtml of any element.
  2 . Write a function to get the value of an input tag and display it in alert , console and innerhtml.
  3 . Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).*/

//1 . Write a function to display your name in console ,alert and innerhtml of any element.
function displayname() {
  let myname = document.getElementById("input").value;

  console.log(myname);
  alert(myname);
  document.getElementById("demo").innerHTML = myname;
}

// 2 . Write a function to get the value of an input tag and dis , console and innerhtml.

function values() {
  let myvalue = document.getElementById("input1").value;

  console.log(myvalue);
  document.getElementById("demo1").innerHTML = myvalue;
}

// 3 . Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).

function displayvalues() {
  let value1 = document.getElementById("input2").value;
  let value2 = document.getElementById("input3").value;
  let value3 = document.getElementById("input4").value;

  document.getElementById("demo2").innerHTML =
    value1 + " " + value2 + " " + value3;
}
