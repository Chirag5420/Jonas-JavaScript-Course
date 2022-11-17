'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE method
console.log(arr.slice(2)); // OUTPUT: ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // OUTPUT: ['c', 'd']
console.log(arr.slice(-1)); // OUTPUT: ['e']
console.log(arr.slice(1, -1)); // OUTPUT: ['b', 'c', 'd']

// Create a shallow copy of any array using slice method
console.log(arr.slice()); // OUTPUT: ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // OUTPUT: ['a', 'b', 'c', 'd', 'e']

// SPLICE method (it is quite similar to the slice method, but it also mutates the original array. So the extracted elements are gone from the original array)
// console.log(arr.splice(2)); // OUTPUT: ['c', 'd', 'e']
console.log(arr.splice(-1)); // OUTPUT: ['e']
console.log(arr); // OUTPUT: ['a', 'b', 'c', 'd']
console.log(arr.splice(1, 2)); // OUTPUT: ['b', 'c'] (So the second parameter in splice() method is deleteCount. So in this example, we go to index 1 and extract 2 elements 'b' and 'c')
console.log(arr); // OUTPUT: ['a', 'd']

// REVERSE 
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // Please Note: reverse() method mutates the original array
console.log(arr2); // OUTPUT: ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // OUTPUT: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // OUTPUT: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN 
console.log(letters.join(' - ')); // OUTPUT: a - b - c - d - e - f - g - h - i - j
*/

/*
/////////////////////////
// The new at Method 
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Advantage of at() method over the square brackets
// Suppose, we do not know the length of the array. We can use the following two traditional ways of getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

// Alternative way to get the last element using at() method which is one usefulness. Besides, we should also make use of the at() method whenever we want to do method chaining (so basically combining multiple methods at the same time)
console.log(arr.at(-1));

// at method also works for string
console.log('jonas'.at(0)); // OUTPUT: j
*/

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const movement of movements){
// This is how we used to access the counter variable in for-of loop
for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// When would the callback function be invoked? 
// So basically the forEach method loops over the array and in each iteration it would call this callback function. Also as the forEach method calls this callback function in each iteration it would pass in the current element of the array as an argument. 

//forEach method passes in the current element, index and entire array that we are passing. The names of the variables do not matter but the order matters. So the first element needs to be the element in an array, the second one the index and the third one the entire array that we are looping over
console.log('----- FOREACH ----');
movements.forEach(function(movement, index, array) {
  if(movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// Behind the Scenes
// Iteration 0: function (200)
// Iteration 1: function(450)
// Iteration 2: function(400)
// ...

// for-of loop vs. forEach loop
// One fundamental difference between them is that we cannot break out of forEach loop. So the continue and break statements do not work in a forEach loop at all. So forEach would always loop over the entire array. 