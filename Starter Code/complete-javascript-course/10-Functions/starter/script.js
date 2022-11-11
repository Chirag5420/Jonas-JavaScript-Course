'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers){
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers, 
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// If we want to skip providing the value for some parameter, we need to pass 'undefined'
createBooking('LH123', undefined, 1000);
*/

/*
// How Passing Arguments Works: Value vs. Reference 
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann', 
    passport: 24739479284
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284){
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing ...
// const flightNum = flight;
// const passenger = jonas;

// In summary, passing a primitive type to a function is really just the same as creating a copy like in line 51. So the value is simply copied. On the other hand, when we pass an object to a function it is really just copying an ibject like this on line 52. And so whatever we change in the copy, will also happen in the original. 

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

// NOTE : JavaScript does not have Pass by Reference, it only has Pass by Value. So even for reference types like objects, we pass in a reference (so the memory address of the object). However, that reference is still a value. It's simply a value that contains a memory address. So basically, we pass a reference to the function but we do not pass by reference.
*/

// First-Class and Higher-Order Functions
/*
    First-Class vs. Higher-Order Functions

    First-Class Functions
    - JavaScript treats functions as first-class citizens
    - This means that functions are simply values
    - Functions are just another "type" of object

    Store functions in variables or properties:
    const add = (a, b) => a + b;
    const counter = {
        value: 23,
        inc: function() { this.value++; }
    }

    Pass functions as arguments to OTHER functions:
    const greet = () => console.log('Hey Jonas');
    btnClose.addEventListener('click', greet);

    Return functions FROM functions

    Call methods on functions:
    counter.inc.bind(someOtherObject);

    ----------------------------------------------------

    Higher-Order Functions
    - A function that receives another function as an argument, that returns a new function, or both
    - This is only possible because of first-class functions

    1. Function that receives another function
    const greet = () => console.log('Hey Jonas');
    btnClose.addEventListener('click', greet); // addEventListener is a higher-order function because it receives another function (greet()) as input. greet() is a callback function because the callback function will be called later by the higher order function (here as soon as the button is clicked)

    2. Function that returns new function
    function count(){
        let counter = 0;
        return function() {
            counter++;
        }
    }

    //count() is a higher-order function 

    Summary:
    - First class functions is just a feature that programming languages either has or does not have. All it means is that all functions are values. 
*/

// Functions Accepting Callback Functions
const oneWord = function(str){
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order function as it takes a function as input
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function(){
    console.log('👋🏻');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// NOTE: upperFirstWord, oneWord, high5 these functions are called callback functions as they are later called inside the transformer function. JS uses callbacks all the time.

/*
    Reasons why JS uses callback functions:
    - First big advantage, is it allows the developers to split up the code into more reusable and interconnected parts.
    - Callback functions allows to create abstraction. So basically what abstraction means is that we hide the detail of some code implementation. 

    Therefore it also makes sense to call transformer a higher-order function because this function here operates at a higher level of abstraction, leaving the low level details to this low level functions (oneWord and upperFirstWord). 
*/