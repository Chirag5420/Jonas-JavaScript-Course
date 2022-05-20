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