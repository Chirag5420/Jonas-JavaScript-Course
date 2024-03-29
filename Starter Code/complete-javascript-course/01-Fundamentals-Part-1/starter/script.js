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
/*
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
*/

// -------- IF/ELSE STATEMENTS --------
/*
const age = 15; 

//If-Else Control Structure
if(age >= 18){
    console.log("Sarah can start driving license 🚗");
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years. :)`);
}

const birthYear = 2001; 

let century;
if(birthYear <= 2000){
    century = 20; 
}
else{
    century = 21; 
}

console.log(century);
*/

// -------- TYPE CONVERSION / TYPE COERCION --------
/* 
    Type Conversion : Type Conversion is when we manually convert from one type to another. 
    Type Coercion : Type Coercion is when JavaScript automatically converts types behind the scenes for us, so it happens implicitly. 
*/
//TYPE CONVERSION 
/*
const inputYear = "1991";

//Convert Strings to Number using this function 'Number()'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //Output : NaN (Not a Number) Since 'Jonas' cannot be converted to a number

//Convert Number to Strings using this function 'String()'
console.log(String(23));

//TYPE COERCION 
console.log("I am " + 23 + " years old"); 
console.log('23' - '10' - 3); //Output : 10 (JavaScript automatically converts from String to Number)
console.log('23' + '10' + 3); //Output  : 23103 (JavaScript now converts Number to String)
console.log('23' * '2'); //Output : 46

//GUESS THE OUTPUT 
let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); // '95'

console.log('10' - '4' - '3' - 2 + '5'); // '15'
*/ 

// -------- TRUTHY AND FALSY VALUES --------
/*
    5 Falsy Values : 0, '', undefined, null, NaN
    All of the above 5 values are not false but would be converted to false when we attempt to convert them to boolean

    Truthy Values : Any number that is not 0 or any string that is not empty would be converted to true
*/
/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if(money){
    console.log("Don't spend it all ;)");
}
else{
    console.log("You should get a job!");
}

let height; 
if(height){
    console.log("YAY! Height is defined");
}
else{
    console.log("Height is UNDEFINED");
}
*/

// --------- EQUALITY OPERATORS (== vs ===)
// === - Strict Equality Operator (does not perform type coercion) [PREFERRED]
// == - Loose Equality Operator (performs type coercion)
/*
const age = 18; 
if(age === 18) console.log("You just became an adult :D (strict)");

if(age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); // 23

if(favourite === 23){
    console.log("Cool! 23 is an amazing number!");
} else if(favourite === 7){
    console.log("7 is also a cool number!");
} else if(favourite === 9){
    console.log("9 is also a cool number!");
} else{
    console.log("Number is not 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");
*/

// ------- LOGICAL OPERATOR --------
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); 

console.log(hasDriversLicense || hasGoodVision); 

console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive!");
// } else{
//     console.log("Someone else should drive...");
// }

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!");
} else{
    console.log("Someone else should drive...");
}
*/

// --------- SWITCH STATEMENT ---------
const day = 'monday'; 

switch(day){
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

// WRITE THE ABOVE CODE AS IF-ELSE
if(day === 'monday'){
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day === 'tuesday'){
    console.log("Prepare theory videos");
} else if(day === 'wednesday' || day === 'thursday'){
    console.log("Write code examples");
} else if(day === 'friday'){
    console.log("Record videos");
} else if(day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}

//--------- The CONDITIONAL (TERNARY) OPERATOR -------
const age = 23; 
age >= 18 ? console.log("I like to drink wine 🍷 ") : console.log("I like to drink water 💧 ");

const drink = age >= 18 ? "wine 🍷 " : "water 💧 ";
console.log(drink); 

let drink2;

if(age >= 18){
    drink2 = "wine 🍷 ";
} else {
    drink2 = "water 💧 ";
}

console.log(drink2);

//We can use ternary operator inside Template Literals as its an expression 
console.log(`I like to drink ${age >= 18 ? "wine 🍷 " : "water 💧 "}`);