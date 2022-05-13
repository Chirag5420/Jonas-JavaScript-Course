// LECTURE : Values and Variables
// Task 1
const COUNTRY = "India";
const CONTINENT = "Asia";
let population = 1381;

// Task 2
console.log("Country : " + COUNTRY + "\nContinent : " + CONTINENT + "\nPopulation : " + population + " (in millions)");

// LECTURE : Data Types
// Task 1
const isISLAND = false;
let language;

//Task 2
console.log("isIsland Data Type : " + typeof isISLAND);
console.log("population Data Type : " + typeof population);
console.log("country Data Type : " + typeof COUNTRY);
console.log("language Data Type : " + typeof language);

//LECTURE : let, const, and var
//Task 1
language = "Hindi";

//Task 3 : Get an error as constant assignment cannot be altered
//COUNTRY = "SINGAPORE";

console.log("language Data Type : " + typeof language);

// LECTURE : Basic Operators
//Task 1
console.log("Number of people in each half of the country : (in millions) " + (population/2));

//Task 2
console.log("Increased the population by 1 : " + ++population);

//Task 3
console.log("Does India have more population than Finland (6 million)? : " + (population > 6));

//Task 4
console.log("Does India have less people than the average population of a country (33 million)? : " + (population < 33));

//Task 5 
let description = COUNTRY + " is in " + CONTINENT + ", and its " + population + " million people speak " + language;
console.log(description);

