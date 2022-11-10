'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Enhanced Object Literals

// Third Enhancement : We can now even compute property names. So for example, now instead of writing 'thu', we used weekdays[3]
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // First Enhancement : ES6 enhanced object literals
  openingHours,

  // Second Enhancement: In ES6, we no longer need to write the keyword 'function', we can exclude the colon and function keyword to get it to work as a function 
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// Working With Strings - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate')); // In regex g flag stands for global

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection')
/*
/////////////////////////////////
// Working With Strings - Part 1 
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // OUTPUT: A
console.log(plane[1]); // OUTPUT: 3
console.log(plane[2]); // OUTPUT: 2
console.log('B737'[0]); // OUTPUT: B

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // OUTPUT: 6
console.log(airline.lastIndexOf('r')); // OUTPUT: 10
console.log(airline.indexOf('Portugal')); // OUTPUT: 8

console.log(airline.slice(4)); // OUTPUT: Air Portugal (position at which the extraction will start)
console.log(airline.slice(4, 7)); // OUTPUT: Air (it stops extracting before reaching index 7. Besides the length of the extracted string is always the end - begin, so 7 - 4 = 3)

console.log(airline.slice(0, airline.indexOf(' '))); // OUTPUT: TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // OUTPUT: Portugal

console.log(airline.slice(-2)); // OUTPUT: al
console.log(airline.slice(1, -1)); // OUTPUT: AP Air Portuga

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){ 
    console.log('You got the middle seat 😬');
  } else {
    console.log('You got lucky 😎');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

///////////////////////////////////////
// Summary: Which Data Structure to Use?
/*
  Sources of Data:
  - From the program itself: Data written directly in source code (e.g. status messages)
  - From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
  - From external sources: Data fetched for example from web API (e.g. recipe objects)

  API stands for Application Programming Interface and we can use a Web API to get data from other web
  applications. For example, we can use web API to get the current weather in any city or data about movies or currency conversion rates and almost every kind of data we can imagine. 

  Data comes in as a Collection of data which is stored in Data Structure. There are four built-in data structures in JavaScript:
  - Array / Set : If we want a simple list of values
  - Object / Map : If we want key-value pairs 

  Data from Web API usually comes in a special data format called JSON.

  Other Built-In:
  - WeakMap
  - WeakSet

  Non-Built In:
  - Stacks
  - Queues
  - Linked Lists
  - Trees
  - Hash Tables

  Arrays vs. Sets
  --------------------------------
  Array:
  tasks = ['Code', 'Eat', 'Code'];
  // ["Code", "Eat", "Code"]

  - Use when you need ordered list of values (might contain duplicates)
  - Use when you need to manipulate data

  Set:
  tasks = new Set(['Code', 'Eat', 'Code']);
  // {"Code", "Eat"}
  
  - Use when you need to work with unique values
  - Use when high-performance is really important 
  - Use to remove duplicates from arrays 

  Objects vs. Maps
  -------------------------------
  Objects:
  task = {
    task: 'Code',
    date: 'today',
    repeat: true
  };

  - More traditional key/value store ("abused" objects)
  - Easier to write and access values with . and []

  - Use when you need to include functions (methods)
  - Use when working with JSON (can convert to map)

  Maps:
  task = new Map([
    ['task', 'Code'],
    ['date', 'today'],
    [false, 'Start coding!']
  ]);

  - Better performance
  - Keys can have any data type
  - Easy to iterate
  - Easy to compute size

  - Use when you simply need to map key to values
  - Use when you need keys that are not strings 
*/
/*
//////////////////////////////
//Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!']
]);

console.log(question);

// Convert objects to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

if(answer === question.get('correct')){
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
///////////////////////////////
// Maps: Fundamentals
// A map is a data structure that can be used to map values to keys. So just like an object, data is stored in key-value pairs in maps. Now, the big difference between object and maps, is that in maps the keys can have any type. So in objects, the keys are always strings. But in map, we can have any type of key. 

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest);
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // OUTPUT : true
rest.delete(2);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size); // OUTPUT : 9

console.log(rest.get(arr));
*/
/*
//////////////////////////////
// Sets 
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

// Strings are also iterable
console.log(new Set('Jonas')); // OUTPUT : Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size); // OUTPUT : 3
console.log(ordersSet.has('Pizza')); // OUTPUT : true
console.log(ordersSet.has('Bread')); // OUTPUT : false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); 
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet){
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

const staffArray = [...staffUnique];
console.log(staffArray);

console.log(staffUnique.size);

console.log(new Set('jonasschmedtmann').size);
*/
/*
////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries 
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  openStr += ` ${day}, `
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`  );
}

//console.log(restaurant);
*/

/*
/////////////////////////
// Optional Chaining (?.)
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);
// So here's how optional chaining works. So only if the property that is before the ? exists, so if monday exists then the open property will be read from there. But if not, immediately undefined will be returned

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}
];
console.log(users[0]?.name ?? 'User array empty');
*/

/*
//////////////////////////////////
// Looping Arrays: The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); // OUTPUT : 1: Foccacia (because item.entries() returns a key-value pair)
}

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // OUTPUT : 1: Foccacia (because item.entries() returns a key-value pair)
}

console.log([...menu.entries()]);
*/

/*
///////////////////////////////
// Logical Assignment Operators 
const rest1 = {
  name: 'Capri',
  //numGuests:20,
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

// OR assignment operator 
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator (So basically the logical AND operator assigns a value to the variable only if it is currently truthy. So since rest1.owner doesn't exist it didn't do anything, whereas since rest2.owner exists it replaces it with the '<ANONYMOUS>' string)
rest1.owner &&= '<ANONYMOUS>'; 
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
///////////////////////////////
// Short Circuiting (&& and ||)

/*
  Three Properties about Logical Operators :
  - Use ANY data type
  - Return ANY data type
  - Short-Circuiting 
*/

/*
console.log('---- OR ----');
// Short Circuiting with OR (||) operator
// In the case of OR operator, short circuiting means that if the first operand is a truthy value, it will immediately return that first value and not evaluate the second operand.  
console.log(3 || 'Jonas'); // OUTPUT : 3
console.log('' || 'Jonas'); // OUTPUT : Jonas (Since '' is a falsy value)
console.log(true || 0); // OUTPUT : true (Since true is a truthy value)
console.log(undefined || null); // OUTPUT : null (Since undefined is a falsy value, the second operand null is returned even though null is also a falsy value. So there is no short-circuiting)
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // OUTPUT : Hello (Since it is the first truthy value in this chain of OR operations)

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // OUTPUT : 10 (Since restaurant.numGuests does not exist so as it is undefined and so therefore 10 is the result)
// OUTPUT : 23 (But if we set the restaurant.numGuests to 23 before then the output would be 23)

// Above Example with Short-Circuiting 
const guests2 = restaurant.numGuests || 10; // OUTPUT : 10 (If we hadn't set the restaurant.numGuests before we would get undefined. Since undefined is a falsy value, we get the output as 10)
console.log(guests2); 

console.log('---- AND ----');
// Short Circuiting with AND (&&) operator
console.log(0 && 'Jonas'); // OUTPUT : 0 (AND operator short circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand)
console.log(7 && 'Jonas'); // OUTPUT : Jonas (So when it is truthy, the evaluation continues and then simply the last value is returned)
console.log('Hello' && 23 && null && 'Jonas'); // OUTPUT : null (Since null is a falsy value and therefore the evaluation no longer continues and it short circuits the rest of the evaluation)

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

// With AND (&&) operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
  SUMMARIZE :
  - The OR (||) operator would return the first truthy value of all the operands or simply the last value if all of them are falsy
  - The AND (&&) operator would return the first falsy value or the last value if all of them are truthy

  As for practical applications :
  - We can use the OR operator to set default values
  - We can use the AND operator to execute code in the second operand
*/

/*
//////////////////////////////////////
// The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // OUTPUT : 0

// Now we are getting the correct output which is 0, because the idea behind the Nullish Coalescing Operator (??) is of checking for Nullish values instead of Falsy values. 

*/

/*
/////////////////////////////////
// Rest Pattern and Parameters
// Rest Pattern looks exactly like the spread operator. However, it does the opposite of what spread operator does. It is used to collect multiple elements and condense them into an array. So the spread operator is used to unpack an array while the rest is to pack elements into an array. 

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST pattern basically collects the elements that are unused in the destructuring assignment 
console.log(a, b, others); // OUTPUT : 1 2 [3, 4, 5]

// NOTE : REST element must always be at the last because otherwise it wouldn't know from where to collect until where 
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); 

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions 
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  //console.log(numbers);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // We unpacked the values at this line which is then condensed back into the array due to the REST syntax in the parameter list of add () function 

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

/*
/////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];

// Ways to add elements in the beginning 
// arr.unshift(1, 2);
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // OUTPUT : [1, 2, 7, 8, 9]
console.log(...newArr); // OUTPUT : 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

/*
  NOTE : Difference between Spread Operator and Destructuring 

  Spread Operator -> Spread Operator takes all the elements from the array and it does not create new variables. As a consequence, we can only use it in places where we would otherwise write values separated by commas.

// Spread Operator Use 1 : Create shallow copy of arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Spread Operator Use 2 : Merge two arrays together 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); // J o n a s
//console.log(`${...str} Schmedtmann`); OUTPUT: SyntaxError 

// Real-world example 
const ingredients = [
  // prompt('Let\'s make pasta! Ingredient 1?'), 
  // prompt('Ingredient 2?'), 
  // prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Better solution
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
/////////////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
});

// We need to write the exact property names as mentioned in the object in order to retrieve the values. The order of elements does not matter, so we do not need to manually skip as we had done for arrays. 
const {name, categories, openingHours} = restaurant;
console.log(name, categories, openingHours);

// We can different variable names compared to the one given in the object by the following way:
const {
  name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {
  menu = [], 
  starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj); // We give the round brackets because with only the curly braces without const, let JavaScript expects it to be a normal code block which cannot be assigned. Hence the round brackets are added. 
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/*
/////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an array 
const [x, y, z] = arr; // Destructuring assignment
console.log(x, y, z);
console.log(arr); // original array is not destroyed

const [first, second] = restaurant.categories;
console.log(first, second); // OUTPUT : Italian Pizzeria 

// Now if we want to take the first and third element, we can leave a hole in the destructuring operator

const [firstCat, , thirdCat] = restaurant.categories;
console.log(firstCat, thirdCat); // OUTPUT : Italian Vegetarian

// Switching elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching elements using Destructuring 
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive two return values from a function 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring 
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); 

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/