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