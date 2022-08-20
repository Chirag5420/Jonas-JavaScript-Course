'use strict';

// Selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Setting the score to 0 
score0El.textContent = 0;
score1El.textContent = 0;

// Disappearing the class by including the 'hidden' class 
diceEl.classList.add('hidden');