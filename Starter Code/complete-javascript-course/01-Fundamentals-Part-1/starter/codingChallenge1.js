//JavaScript Fundamentals - Part 1
//Coding Challenge #1

//TEST DATA 1
console.log("-------- TEST DATA 1 ---------");
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log("Does Mark have a higher BMI than John ? " + markHigherBMI);

//TEST DATA 2
console.log("-------- TEST DATA 2 ---------");
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark ** 2);
BMIJohn = massJohn / (heightJohn ** 2);

console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log("Does Mark have a higher BMI than John ? " + markHigherBMI);
