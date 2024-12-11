printEvenNumber();
function printEvenNumber() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// for (let num = 1; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
// }

// //while loop
// let text = "";
// let y = 1;
// while (y <= 10);
// {
//   text += `The number is ${y} <br>`;
//   console.log(y);
//   y++;
// }
// document.getElementById("demo").innerHTML = text;

//do while loop

let text1 = "";
let z = 1;
do {
  text1 += `The number is ${z} <br>`;
  console.log(z);
  z++;
} while (z <= 10);

document.getElementById("demo").innerHTML = text1;

for (let r = 1; r <= 10; r++) {
  for (let c = 1; c <= r; c++) {
    console.log("* ");
  }
}
