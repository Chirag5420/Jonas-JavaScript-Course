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

/*
////////////////////////////////////////
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
*/

// NOTE: upperFirstWord, oneWord, high5 these functions are called callback functions as they are later called inside the transformer function. JS uses callbacks all the time.

/*
    Reasons why JS uses callback functions:
    - First big advantage, is it allows the developers to split up the code into more reusable and interconnected parts.
    - Callback functions allows to create abstraction. So basically what abstraction means is that we hide the detail of some code implementation. 

    Therefore it also makes sense to call transformer a higher-order function because this function here operates at a higher level of abstraction, leaving the low level details to this low level functions (oneWord and upperFirstWord). 
*/

/*
////////////////////////////////
// Functions Returning Functions 
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey'); // this returns a function which is stored in the greeterHey variable
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge 
const greetArrow = (greeting) => {
    return (greetName) => {
        console.log(`${greeting} ${greetName}`);
    }
}

// Alternative way to write the above arrow function 
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hey there!')('Jonas Schmedtmann');
greetArr('Hi')('Jonas');
*/

/*
/////////////////////////////
// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function()
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name
        })
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings', 
    iataCode: 'EW', 
    bookings: [],
};

// here the book function is no longer a method as its not associated with any object. So we would get undefined for this.airline for example. 
const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Since functions are really just a object and objects have methods and therefore functions have methods such as call(). 

// Call method 
// In the call() method the first argument is exactly what we want the 'this' keyword to point to. In the below example, we passed eurowings object.
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines', 
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Mary Cooper');

// Apply method (it is not used much in modern JS)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

//////////////////////////
// The bind method
// Just like the call method, bind also allows us to manually set this keywords for any function call. The difference is that the bind method does not immediately call the function. Instead it returns a new function where the this keyword is bound. So it's set to whatever value we pass into bind. 

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams')

// we can use bind() function to create a function for one specific airline and specific flight number
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

// Since the addEventListener function, its the button element with buy id calling the function, the this keyword happens to point to the button element. But now since we want the this keyword to point to lufthansa, we make use of the bind function. Lastly, we do not use call() method because it would call the function immediately which is not what we want
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (means we can preset parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Since the first parameter in bind() function is always the object to which the this keyword should point to. But as the addTax method does not have this keyword, we pass in null. 
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTaxRate = function (rate){
    return function(value){
        return value + value * rate;
    }
}

console.log(addTaxRate(0.23)(100));
*/

/*
////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
// Sometimes in JavaScript, we need a function that is only executed once and then never again. So basically a function that disappears right after it's called once. It is useful when we would be discussing about async/await. 

const runOnce = function (){
    console.log('This will never run again');
}
runOnce();

// Initially the below function would not get executed because of not providing the function name. But we can trick JavaScript into believing it to be an expression simply by adding parantheses () around the function block. Now in order to call it, we just need to add () at the end. Since we call it immediately, this pattern here is called 'Immediately Invoked Function Expressions (IIFE)
(function () {
    console.log('This will never run again');
})();

// The same would also work for an arrow function 
(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate); // OUTPUT: ReferenceError (Since variables declared with let and const create their own scope inside a block)
// console.log(notPrivate);

// This is the reason that in modern JS, IIFE are not that used anymore. Because if all we want is to create a new scope for data privacy, all we need to do is to create a scope like above. On the other hand, if we really need to execute a function once then IIFE is the way to go.
*/

// Closures
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

// Explanation
/*
    Before we start running the secureBooking() function, our code is running the Global Execution Context. And in there we currently, only have this secureBooking() function. So we can also say, that the Global scope only contains secureBooking. 

    When secureBooking is actually executed, a new execution context is put on top of the execution stack. Remember, each execution context has a variable environment which contains all its local variables (passengerCount for example here). 

    Now the next line, we return a function which is stored in the booker variable which is also a part of the global execution context.

    So when the secureBooking function returns, its execution context is popped off the stack as it has played its role and finished its execution.

    So basically what a closure does is, it makes a function remember all the variables that existed at the function's birthplace essentially. So as secureBooking () can be considered as the birthplace for that function being returned (Booker function). 

    So when booker function execution starts, a new execution context is created and it is put on the top of the call stack and the variable environment of this context is emptied simply because there are no variables declared in this function. 

    Since booker function is in the global context, it's simply a child scope of the global scope. 

    Closure Explanation :
    A function always has access to the variable environment of the execution context in which it was created, even after that execution context has gone. 

    Closure: Variable Environment (VE) attached to the function, exactly as it was at the time and place the function was created

    More easier explanation, so a function never loses connection to the variables that existed at the function birthplace.
*/
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

/*
    Closure Summary:
    - A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.
    - A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
    - A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.
    - A closure is like a backpack that a function carries around wherever it goes. This bacpack has all the variables that were present in the environment where the function was created.

    NOTE: We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object. 
*/

// More Closure Examples

// Example 1
let f; 

const g = function () {
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

g();
f(); // OUTPUT : 46
console.dir(f); //closure is a 

// This proves that this f value here, so this f function really does close over any variables of the execution context in which it was defined. And that is true, even when the variable itself. 

const h = function() {
    const b = 777;
    f = function(){
        console.log(b * 2);
    }
}

// Re-assigning f function
h();
f();
console.dir(f); //closure is b as it was reassigned 

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

// const perGroup = 1000; // The perGroup in the console still happens to be 60. This proves that closure has priority over the scope chain. 
boardPassengers(180, 3);

// The callback function was able to use all the variables declared in the boardPassengers function execution context. This is a clear sign of a closure being created. 