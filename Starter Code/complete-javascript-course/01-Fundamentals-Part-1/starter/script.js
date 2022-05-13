// -------- VALUES AND VARIABLES ----------
/*
let js = "amazing";

if (js === "amazing") {
    alert("JavaScript is FUN!");
}


console.log(40 + 8 + 23 - 10);
console.log("Jonas Schmedtmann");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

//Variable Naming Conventions 

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas"; //start variable name with lowercase
let PI = 3.1415; //always write constants in uppercase 

//write descriptive variable names 
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

//instead of writing variable names like below
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// ---------- DATA TYPES ----------- 
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof operator
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 3);
// console.log(typeof "Jonas");

//dynamic typing 
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//'undefined' means a value taken by a variable that is not yet defined. So basically it means empty value
let year; 
console.log(year); //OUTPUT : undefined (value)
console.log(typeof year); //OUTPUT : undefined (type)

year = 2022;
console.log(typeof year); //OUTPUT : number

//error in typeof operator
console.log(typeof null); //null is like another data type, OUTPUT : object (regarded as a bug)
*/

// ------------ LET, CONST, VAR ------------
// let - We use the 'let' keyword to declare variables that can change later during the execution of the program 

let age = 30; 
age = 31; //so we can reassign (or mutate) the value to the variable 'age'

// const - We use the 'const' keyword to declare variables that are not suppsoed to change at any point in the future and must always have an initial value

const birthYear = 1991; //it cannot be reassigned (or immutable)

// var - This is should be completely avoided. 'var' keyword is the old way to declare variables prior to ES6. It works quite similar to 'let' keyword but they are quite different. For instance, 'let' keyword is block-scoped and 'var' keyword is function-scoped
var job = 'programmer';
job = 'teacher';