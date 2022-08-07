'use strict';

// For selecting an element in JavaScript, we need to use the document.querySelector() function
// In this method, we need to pass in a selector in the same format as we would use in CSS. 
// As 'message' is a class, we write .message. Had it been an id, we would write #message.

// We would get the paragraph (p) element with class 'message' selected and output in the console
console.log(document.querySelector('.message')); 

// If we only want to fetch the data inside this p element, we need to add .textContent() function
console.log(document.querySelector('.message').textContent); 