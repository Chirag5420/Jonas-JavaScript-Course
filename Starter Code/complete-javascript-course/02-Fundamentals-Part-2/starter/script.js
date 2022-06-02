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
/*
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
*/
/*
// ------- Functions Calling Other Functions --------
function cutFruitPieces(fruit){
    return fruit * 4; 
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges); 

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`; 
    return juice; 
}

console.log(fruitProcessor(2, 3)); 
*/
/*
// ------- Reviewing Functions --------
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1; 
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/
/*
// ------- Introduction to Arrays -------
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //to retrieve the last element in the array

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice'] --> TypeError (we cannot change the entire Array as its a const)

// We can mutate arrays even though we declared it as a const because it is of non-primitive type. The variables that are declared as primitive types with const keyword cannot be altered. 

// Array can hold different types of values all at the same time 
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "Teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018]; 

console.log(calcAge(years)); // NaN (Not a Number)

// years + 10
// The above syntax would convert the array into a string and append the number 10 at the last 
// Output : "1990,1967,2002,2010,201810"

// years - 10
// NaN

// This basically concludes that we cannot do operations with array 

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);
*/
/*
// -------- Basic Array Operations (Methods) ---------
const friends = ["Michael", "Steven", "Peter"];

// -------- ADD ELEMENTS -------
// push function is used to insert values at the end of the array and it returns the length of the array
const newLength = friends.push("Jay"); 
console.log(friends);
console.log(newLength);

// unshift function is used to insert values at the beginning of the array and it returns the length of the array
friends.unshift("John"); 
console.log(friends);

// ------- REMOVE ELEMENTS -------
// pop function is used to remove the last element of the array and it returns the removed element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift function is used to remove the first element and it returns the removed element 
friends.shift(); 
console.log(friends);

// indexOf function returns the first occurrence of the element in the array and if not present returns -1 
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes function (ES6 Function) returns true if the element is in the array and false otherwise. Besides it uses strict equality (does not do type coercion)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if(friends.includes("Steven")){
    console.log("You have a friend called Steven");
}
*/

// ------- Introduction to Objects --------
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991, 
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

// We use objects to define key-value pairs so that we can give each of the above values a name and going forward access them via their names instead of index numbers

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991, 
    job: 'Teacher', 
    friends: ['Michael', 'Peter', 'Steven']
};

// Each of the keys (firstName, lastName, age, job, friends) is also called a property. So we can say this object jonas has five properties. 
// Moreover, we should use arrays for more ordered data and objects for more unstructured data. 