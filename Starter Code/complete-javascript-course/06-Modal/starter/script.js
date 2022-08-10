'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Whenever we use querySelector () with a selector, which actually matches multiple elements, only the first one will get selected. So we make use of querySelectorAll() method
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

for(let i = 0; i < btnsShowModal.length; i++)
    console.log(btnsShowModal[i].textContent);