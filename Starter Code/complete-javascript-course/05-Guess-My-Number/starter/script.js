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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
('click', function (){
    const guess = Number(document.querySelector('.guess').value); // using Number() function because by default when we input anything its treated as as string
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    } else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
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