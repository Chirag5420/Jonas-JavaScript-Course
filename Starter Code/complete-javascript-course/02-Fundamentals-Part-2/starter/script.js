'use strict'; 
/* 
Should be the first line in the .js file and comments are allowed before writing this line
We activated strict mode for the entire script 
Strict mode has two benefits
- Forbids us to do certain things
- Creates visible errors in the developer console, wherein in other situations JS fails silently 
*/
/*
let hasDriversLicense = false; 
const passTest = true; 

if(passTest) hasDriversLicense = true; 

if(hasDriversLicense) console.log("I can drive :D");
*/

// The following variable names are invalid as they are reserved
//const interface = 'Audio';
//const private = 534; 

// ------ FUNCTIONS -------
// Function is a piece of code that we can reuse over and over again 
// Variable holds a value but a function can hold one or more complete lines of code 
/*
function logger(){
    console.log("My name is Jonas");
}

// invoking / running / calling the function 
// the logger() function doesn't return any value except for 'undefined' type 
logger(); 

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; 
    return juice; 
}

const appleJuice = fruitProcessor(5, 0); 
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4); 
console.log(appleOrangeJuice);
*/
// ------- Function Declarations vs Expressions -------
/*
// Function Declaration
function calcAge1(birthYear){
    return 2037 - birthYear; 
}

const age1 = calcAge1(1991); 

// Function Expression 
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991); 

console.log(age1, age2);

// Difference between Function Declaration and Function Expression 
// - We can call Function Declaration before they are defined in the code 
*/

// ------- Arrow Functions --------
// An Arrow Function is simply a form of Function Expression that is shorter and therefore faster to write

// Arrow Function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));