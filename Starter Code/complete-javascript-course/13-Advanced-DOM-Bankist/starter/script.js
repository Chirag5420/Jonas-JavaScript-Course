'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // To prevent the default behaviour of the page going up when clicking on the anchor tag
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// NOTE: 'btnsOpenModal' is of type nodeList because of querySelectorAll() method. So like arrays, it does not have all the methods. However, it has the forEach() method. 
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// How the DOM Really Works
/*
  Review: What is the DOM?
  - DOM is basically the interface between all JavaScript code and the browser, or more specifically HTML documents that are rendered in and by the browser.  

  - Allows us to make JavaScript interact with the browser;
  - We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events; 
  - DOM tree is generated from an HTML document, which we can then interact with; 
  - DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree. For example:
    - .querySelector() / .addEventListener() / .createElement() / .innerHTML / .textContent / .children / etc ...

  How the DOM API is organized behind the scenes?
  - Every single node in the DOM tree is of the type, node. Each node is represented in JavaScript by an object. 
  - This object gets access to special node methods and properties, such as .textContent, .childNodes, .parentNode, and .cloneNode(). 
  - The node type has a couple of child types 
    - element
      - element has the element type of node. 
      - This type of node gives each HTML element access to a ton of useful properties such as:
        - innerHTML
        - classList
        - children
        - parentElement
        - append()
        - remove()
        - insertAdjacentHTML()
        - querySelector()
        - closest()
        - matches()
        - scrollIntoView()
        - setAttribute()
    - text
      - So whenever there is text inside any element, we already know that it gets its own node and will be of type text
    - comment
      - same happens for comments as well
    - document
      - It is just another type of node
      - It contains important methods such as:
        - querySelector()
        - createElement()
        - getElementById()
  - EventTarget
    - It's a special node type which is a parent of both the Node type and also the Window node type. 
    - Due to inheritance we can invoke the following two methods on every node:
      - addEventListener()
      - removeEventListener()

  NOTE: The rule is that everything that's inside the HTML has to go into the DOM as well. 
*/

