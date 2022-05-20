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