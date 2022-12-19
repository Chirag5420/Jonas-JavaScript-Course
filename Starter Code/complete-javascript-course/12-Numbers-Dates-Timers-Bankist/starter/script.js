'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN 
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// Converting and Checking Numbers
console.log(23 === 23.0); // OUTPUT: true

// Base 10 - 0 to 9
// Binary Base 2 - 0 1
console.log(0.1 + 0.2); // OUTPUT: 0.30000000000000004

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing a number from String (NOTE: The string must start with a number and it accepts a second parameter called regex to specify the base type either decimal (10) or binary (2))
console.log(Number.parseInt('30px', 10)); // OUTPUT: 30
console.log(Number.parseInt('e23', 10)); // OUTPUT: NaN (Not a Number)
console.log(Number.parseInt('0101e', 2)); // OUTPUT: 5 

console.log(Number.parseFloat('2.5 rem')); // OUTPUT: 2.5
console.log(Number.parseInt('2.5 rem')); // OUTPUT: 2

// Check if value is NaN
console.log(Number.isNaN(20)); // OUTPUT: false
console.log(Number.isNaN('20')); // OUTPUT: false
console.log(Number.isNaN(+'20X')); // OUTPUT: true
console.log(Number.isNaN(23 / 0)); // OUTPUT: false (Since 23 / 0 results in Infinity value)

// Checking if value is a number
console.log(Number.isFinite(20)); // OUTPUT: true
console.log(Number.isFinite('20')); // OUTPUT: false
console.log(Number.isFinite(+'20X')); // OUTPUT: false
console.log(Number.isFinite(23 / 0)); // OUTPUT: false

console.log(Number.isInteger(23)); // OUTPUT: true
console.log(Number.isInteger(23.0)); // OUTPUT: true
console.log(Number.isInteger(23 / 0)); // OUTPUT: false
*/

/*
// Math and Rounding

console.log(Math.sqrt(25)); // OUTPUT: 5
console.log(25 ** (1 / 2)); // OUTPUT: 5
console.log(8 ** (1 / 3));  // OUTPUT: 2

console.log(Math.max(5, 18, 23, 11, 2)); // OUTPUT: 23
console.log(Math.max(5, 18, '23', 11, 2)); // OUTPUT: 23 (Due to type coercion)
console.log(Math.max(5, 18, '23px', 11, 2)); // OUTPUT: NaN (Since it cannot parse)

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3)); // OUTPUT: 23
console.log(Math.round(23.9)); // OUTPUT: 24

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.3));

console.log(Math.floor(23.3));
console.log(Math.floor(23.3));

console.log(Math.trunc(-23.3)); // OUTPUT: 23
console.log(Math.floor(-23.3)); // OUTPUT: 24

// Rounding decimals
console.log((2.7).toFixed(0)); // OUTPUT: 3 NOTE: toFixed() always returns a string and not a number
console.log((2.7).toFixed(3)); // OUTPUT: 2.700
console.log((2.345).toFixed(2)); // OUTPUT: 2.35
console.log(+(2.345).toFixed(2));
*/

/*
// The Remainder Operator
console.log(5 % 2); // OUTPUT: 1
console.log(8 % 3); // OUTPUT: 2

// Even and Odd Numbers
console.log(6 % 2); // OUTPUT: 0
console.log(7 % 2); // OUTPUT: 1

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')]
  .forEach(function(row, i){
    if(i % 2 === 0) row.style.backgroundColor = 'orangered';
    if(i % 3 === 0) row.style.backgroundColor = 'blue'
  });
});
*/

/*
// Numeric Separators (they are simply underscores to better understand a very long number)
const diameter = 287_460_000_000;
console.log(diameter); //OUTPUT: 287460000000

const price = 345_99;
console.log(price);

// the underscore gives different meanings. They both are equivalent to 1500, however the placement of 1_500 gives it a better meaning of One Thousand and Five Hundred Dollars
const transferFee1 = 15_00;
const transferFee2 = 1_500;

// NOTE: We are not allowed to place an underscore before a number starts or after a number ends or before / after the decimal point. So it can be placed only between numbers
const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // OUTPUT: NaN (Note: These numeric separators can only be used when we are writing down numbers, but not in strings because then JavaScript is not being able to parse the number correctly)

console.log(parseInt('230_000')); // OUTPUT: 230 (Note: Then JavaScript does not parse anything after the underscore)
*/

/*
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

console.log(483843024834203382340839483948320n); // Adding n to the end transforms a regular number into a BigInt number
console.log(BigInt(483843024834203382340839483948320));

// Operations
console.log(10000n + 10000n);
console.log(3628637253574574764903493285239435n * 10000n);

// NOTE: We cannot mix BigInt and other numbers 
const huge = 1243573500284248593435354n;
const num = 23;
console.log(huge * BigInt(num)); // OUTPUT: Uncaught TypeError (Then we must use the BigInt constructor function)

console.log(20n > 15); // OUTPUT: true
console.log(20n === 20); // OUTPUT: false
console.log(typeof 20n); // OUTPUT: bigint
console.log(20n == '20'); // OUTPUT: true

console.log(huge + 'is REALLY big!!!');

// Divisions
console.log(10n / 3n); // OUTPUT: 3n
console.log(10 / 3); // OUTPUT: 3.33333333333335
*/

/*
// Creating Dates 
/*
// Create a date
// There are four ways as below to create a date
// 1
const now = new Date();
console.log(now);

// 2
console.log(new Date('Dec 19 2022 22:57:58'));
console.log(new Date('Dec 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

// 3 (NOTE: Month in JS is zero-based)
console.log(new Date(2037, 10, 19, 15, 23, 5)); // OUTPUT: Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time) 

// 4
console.log(new Date(0)); // OUTPUT: Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) - Means 0 milliseconds since initial Unix Time
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142237180000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/