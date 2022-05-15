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

/*
// ------------ LET, CONST, VAR ------------
// let - We use the 'let' keyword to declare variables that can change later during the execution of the program 

let age = 30; 
age = 31; //so we can reassign (or mutate) the value to the variable 'age'

// const - We use the 'const' keyword to declare variables that are not suppsoed to change at any point in the future and must always have an initial value

const birthYear = 1991; //it cannot be reassigned (or immutable)

// var - This is should be completely avoided. 'var' keyword is the old way to declare variables prior to ES6. It works quite similar to 'let' keyword but they are quite different. For instance, 'let' keyword is block-scoped and 'var' keyword is function-scoped
var job = 'programmer';
job = 'teacher';
*/

/*
// ----------- BASIC OPERATORS ----------
//Math Operators
const now = 2037;
const ageJonas = now - 1991; 
const ageSarah = now - 2020; 
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators 
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// --------- OPERATOR PRECEDENCE ----------
/*
const now = 2037;
const ageJonas = now - 1991; 
const ageSarah = now - 2018; 

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5); //executed LEFT-TO-RIGHT

let x, y;
x = y = 25 - 10 - 5; //assignment operators are executed RIGHT-TO-LEFT
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// --------- STRINGS AND TEMPLATE LITERALS -----------
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991; 
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

//Template Literals - We need to use the backticks (`) symbol to write a template literal
const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

//Use backticks (`) for any regular string 
console.log(`Just a regular string ...`);

//Multiline strings 
console.log("String with \n\
multiple \n\
lines");

//Use backticks (`) to create multiline string 
console.log(`String with
multiple
lines`);