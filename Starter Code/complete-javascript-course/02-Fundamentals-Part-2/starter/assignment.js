'use strict'; 

// LECTURE : Functions 
// Task 1
function describeCountry(country, population, capitalCity){
    const countryDetails = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return countryDetails; 
}

// Task 2
// TEST DATA 
const countrySG = describeCountry("Singapore", 5.74, "Singapore"); 
console.log(countrySG); 

const countryUS = describeCountry("United States of America", 331.4, "Washington D.C."); 
console.log(countryUS); 

const countryUK = describeCountry("United Kingdom", 67.44, "London");
console.log(countryUK);

//LECTURE : Function Declarations vs Expressions 
// Task 1 
// Function Declaration 
const worldPopulation = 7900;
function percentageOfWorld1(population){
    return (population / worldPopulation) * 100; 
}

const populationSG = percentageOfWorld1(5.74); 
console.log("Percentage of world (Singapore) : " + populationSG);

const populationUS = percentageOfWorld1(331.4); 
console.log("Percentage of world (United States of America) : " + populationUS);

const populationUK = percentageOfWorld1(67.44); 
console.log("Percentage of world (United Kingdom) : " + populationUK);

// Function Expression 
const percentageOfWorld2 = function (population){
    return (population / worldPopulation) * 100; 
}

const populationSG2 = percentageOfWorld2(5.74); 
console.log("Percentage of world (Singapore) : " + populationSG2);

const populationUS2 = percentageOfWorld2(331.4); 
console.log("Percentage of world (United States of America) : " + populationUS2);

const populationUK2 = percentageOfWorld1(67.44); 
console.log("Percentage of world (United Kingdom) : " + populationUK2);

//LECTURE : Arrow Functions 
const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const populationSG3 = percentageOfWorld3(5.74); 
console.log("Percentage of world (Singapore) : " + populationSG3);

const populationUS3 = percentageOfWorld2(331.4); 
console.log("Percentage of world (United States of America) : " + populationUS3);

const populationUK3 = percentageOfWorld1(67.44); 
console.log("Percentage of world (United Kingdom) : " + populationUK3);

// LECTURE : Functions Calling Other Functions 
function describePopulation(country, population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

const describeSG = describePopulation("Singapore", 5.74); 
console.log(describeSG);

const describeUS = describePopulation("United States of America", 331.4); 
console.log(describeUS);

const describeUK = describePopulation("United Kingdom", 67.44); 
console.log(describeUK);

// LECTURE : Introduction to Arrays 
// Task 1 
const populations = [5.74, 331.4, 67.44, 32.7];

// Task 2
console.log(populations.length === 4);

// Task 3
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
 
console.log(percentages);