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

//LECTURE : Strings and Template Literals
//Task 1
let newDescription = `${COUNTRY} is in ${CONTINENT}, and its ${population} million people speak ${language}`;
console.log(newDescription);

//LECTURE : Taking Decisions : if / else statements
//Task 1

//Test Data 1
//population = 13;

//Test Data 2
//population = 130;
if(population > 33){
    console.log(`${COUNTRY}'s population is above average`);
}
else{
    const lessPopulation = 33 - population; 
    console.log(`${COUNTRY}'s population is ${lessPopulation} million below average`);
}

//LECTURE : Type Conversion and Coercion 
//Task 1
/*
    Predict the result 
    '9' - '5'; --> 4
    '19' - '13' + '17'; --> '617'
    '19' - '13' + 17; --> 23
    '123' < 57; --> false
    5 + 6 + '4' + 9 - 4 - 2; --> 1143
*/

//LECTURE : Equality Operators : == vs ===
//Task 1
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if(numNeighbours === 1){
//     console.log("Only 1 border!");
// } else if(numNeighbours > 1){
//     console.log("More than 1 border");
// } else{
//     console.log("No borders");
// }

//Task 8 
//We use === because it is a strict equality operator so it compares both value and type. Initially when we had used == then it only to used to check for value. But once we included ===, then the test case used to fail because by default the prompt() function returns 'String' type. So now we had to convert the type manually using Number() function. 

//LECTURE : Logical Operators
//Task 2
const speaksEnglish = false; 
const lessThan50Population = population < 50;
const isIsland = false; 

if(speaksEnglish && lessThan50Population && isIsland){
    console.log(`You should live in ${COUNTRY} :)`); 
} else {
    console.log(`${COUNTRY} does not meet your criteria :(`);
}

//LECTURE : The switch statement
switch(language){
    case 'Chinese':
    case 'Mandarin':
        console.log("MOST number of native speakers!");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'English': 
        console.log("3rd place");
        break;
    case 'Hindi':
        console.log("Number 4");
        break;
    case 'Arabic':
        console.log("5th most spoken language");
        break;
    default: 
        console.log("Great languages too :D");
}