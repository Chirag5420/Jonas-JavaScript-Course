'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// Short Circuiting (&& and ||)

/*
  Three Properties about Logical Operators :
  - Use ANY data type
  - Return ANY data type
  - Short-Circuiting 
*/

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

/*
  SUMMARIZE :
  - The OR (||) operator would return the first truthy value of all the operands or simply the last value if all of them are falsy
  - The AND (&&) operator would return the first falsy value or the last value if all of them are truthy

  As for practical applications :
  - We can use the OR operator to set default values
  - We can use the AND operator to execute code in the second operand
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