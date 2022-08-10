'use strict';

/*
// For selecting an element in JavaScript, we need to use the document.querySelector() function
// In this method, we need to pass in a selector in the same format as we would use in CSS. 
// As 'message' is a class, we write .message. Had it been an id, we would write #message.

// We would get the paragraph (p) element with class 'message' selected and output in the console
console.log(document.querySelector('.message')); 

// If we only want to fetch the data inside this p element, we need to add .textContent() function
console.log(document.querySelector('.message').textContent); 

// What is DOM?
// Document Object Model : Structured Representation of HTML documents. Allows Javascript to access HTML elements and styles to manipulate them (change text, HTML attributes and even CSS styles).

// DOM Methods and properties are NOT a part of JavaScript. They are a part of Web APIs. So Web APIs are libraries that browsers implements and that we can access from our JavaScript code. 

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value); // OUTPUT : 
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // OUTPUT : 23
*/

// ------ HANDLING CLICK EVENTS -------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener
('click', function (){
    const guess = Number(document.querySelector('.guess').value); // using Number() function because by default when we input anything its treated as as string
    console.log(guess, typeof guess);

    //When there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!';

        //When player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        document.querySelector('.number').textContent = secretNumber;

        // NOTE : Whenever we want to modify CSS styles, we always need to assign the values in a string format. And remember to write the style is camelCase notation for style names consisting of more than one word
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        //When guess is too high
    } else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        //When guess is too low
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        
    }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener(
    'click', function (){
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
);