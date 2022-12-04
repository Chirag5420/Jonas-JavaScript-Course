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

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `        
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${Math.abs(mov)}</div>
    </div>
  `;
    // To include the html we would need to make use of a method called insertAdjacentHTML
    // The first parameter would be the position where we want the html to be added. So those are :
    // beforebegin, afterbegin, beforeend, afterend
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

// Computing Usernames
const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accs) {
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name.charAt(0))
    .join('');
  })
}

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

/*
///////////////////////////
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
*/

/*
/////////////////////////////
// forEach With Maps and Sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// The first element is the current value in the current iteration. The second element is the key and the third element that is the entire map that would be iterated on. 
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

// Set 
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // OUTPUT: USD: USD (Since sets do not have indexes or any keys, so the developers had set the second argument same as the first argument)
});
*/

// Data Transformations: map, filter, reduce
/*
  map: map returns a new array containing the results of applying an operation on all original array elements
  For example: 
  [3, 1, 4, 3, 2]
  
  current * 2

  [6, 2, 8, 6, 4]


  filter: filter returns a new array containing the array elements that passed a specified test condition
  For example:
  [3, 1, 4, 3, 2]
  
  current > 2

  [3, 4, 3] (filtered array)

  reduce: reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
  For example: 
  [3, 1, 4, 3, 2]

  acc (accumulator) + current 

  13 (reduced value)
*/

// The map method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
//   // return Math.round(Math.abs(mov) * eurToUsd);
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  // if(movement > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
)
console.log(movementsDescriptions);

// NOTE: One big difference between the forEach method and map method is that forEach used to log to the console the output one by one. Whereas by using the map method, we stored the output returned into an array and then logged it all together. 

// The filter method 
const deposits = movements.filter(function(mov){
  return mov > 0;
});

console.log(movements);
console.log(deposits);

// Alternative to filter() method, using for-of loop
const depositsFor = [];
for(const mov of movements) {
  if(mov > 0){
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// Challenge
const withdrawals = movements.filter(function(mov){
  return mov < 0;
});

console.log(withdrawals);