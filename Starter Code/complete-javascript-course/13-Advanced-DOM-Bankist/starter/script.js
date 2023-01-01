'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

// Implementing Smooth Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // Modern Way
  section1.scrollIntoView({behavior: 'smooth'})
})

///////////////////////////////////////
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// });

// Alternative solution (using Events Delegation)
// 1. Add event listener to common parent element
// 2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})

// Building a Tabbed Component

// Using Events Delegation 
tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');

  // Guard clause 
  if(!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation 
// NOTE: a big difference with 'mouseenter' is that, 'mouseenter' event does not bubble up. 
// Opposite of mouseenter --> mouseleave
// Opposite of mouseover --> mouseout

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Alternative
// nav.addEventListener('mouseover', function(e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function(e){
//   handleHover(e, 1);
// });

// Another alternative
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
/*
// Sticky navigation
// This event would be fired everytime we scroll in our page

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function(){
  console.log(window.scrollY);

  if(window.scrollY > initialCoords.top) nav.classList.add('sticky'); 
  else nav.classList.remove('sticky');
});
*/
// Sticky Navigation 
// A Better Way: The Intersection Observer API

// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// NOTE: In the current example, whenever the first section (our target -- section1) is intersecting the viewport at 10%, so the viewport because that's the root and 10% because that's the threshold, then the obsCallback function would be invoked. 

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observer(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Revealing Elements on Scroll
const allSection = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null, 
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

const slider = function() {
  // Slider - Building a Slider Component: Part 1
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function(){
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', 
      `<button class="dots__dot" data-slide="${i}"></button>`);
    })
  };

  createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  }

  const nextSlide = function(){
    if(curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const prevSlide = function(){
    if(curSlide ===  0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const init = function(){
    goToSlide(0);
    activateDot(0);
  }

  init();

  // Event Handlers
  // Next slide
  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', prevSlide);

  //Building a Slider Component: Part 2
  document.addEventListener('keydown', function(e){
    console.log(e);

    if(e.key === 'ArrowLeft') prevSlide();

    if(e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
      const slide = e.target.dataset.slide;

      goToSlide(slide);
      activateDot(slide);
    }
  });
}

slider();
// -100%, 0%, 100%, 200%
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

// Selecting, Creating, and Deleting Elements

// For selecting the entire document of any webpage
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // all the elements with name button
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML -- insertAdjacentHTML(position, text)
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// header.prepend(message); // prepend() adds the element as the first child of the element
header.append(message); // append() adds the element as the last child of the element. 
// NOTE: We first prepended the element and then appended it. And this append() method basically moved the element from being the first child to being the last child. 

// Now if we want it at both the places, we need to include the below code
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete element
document.querySelector('.btn--close--cookie').addEventListener('click', function(){
  // message.remove();
  // Previously before the remove() method had been introduced, we used to remove elements like this:
  message.parentElement.removeChild(message);
})

// Styles, Attributes, and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // OUTPUT:  (Since the height property does not exist in inline style)
console.log(message.style.backgroundColor); // OUTPUT: rgb(55, 56, 61)

// Another way to get the styles
console.log(getComputedStyle(message).color); // We get all of the properties with all of the values

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // OUTPUT: undefined

// Alternative
console.log(logo.getAttribute('designer')); // OUTPUT: Jonas
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src')); // OUTPUT: img/logo.png (it returns the relative path instead of the absolute path)

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // OUTPUT: http://127.0.0.1:8080/# (returns the absolute path)
console.log(link.getAttribute('href')); // OUTPUT: # (returns the relative path)

// Data attributes (Data attributes are special kind of attributes that start with the words data)
console.log(logo.dataset.versionNumber); // the attribute starts with data and then we use camel-case where we have dash) -- So data-version-number got transformed to versionNumber

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
// logo.className = 'jonas'; // As this would overwrite the existing classes and only allow one class to be there 
/*
// Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // Modern Way
  section1.scrollIntoView({behavior: 'smooth'})
})
*/
/*
// Types of Events and Event Handlers
// An event is basically a signal that is generated by a certain DOM node and the signal means that something has happened. For example, a click somewhere or the mouse moving or the user triggering the full screen mode.

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// Another way to attach an eventListener to an element (Old Way)
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// Advantage of addEventListener over the on-mouse events is it allows us to add multiple event listeners to the same event. So we can perform the same action as we had done with addEventListener again below. However, if we did it with the onmouseenter property, the second one would overwrite the first one. 
// Second advantage is we can remove an event handler in case we do not need it anymore. 

// We can remove the eventListener anywhere, let's say after 3 seconds have passed
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/

// Event Propagation: Bubbling and Capturing
// For example, the click happens on an anchor element and as we know that the DOM then generates a click event right away. However, this event is actually not generated at the target element (so at the element where the event happened). Instead the event is actually generated at the root of the document, so at the very top of the DOM tree. 
// From there the so-called capturing phase happens, where the event then travels all the way down from the document root to the target element. As the event travels down the tree, it will pass through every single parent element of the target element. 
// As soon as the event reaches the target element, the target phase begins where events can be handled right at the target (using event-listeners). So event-listeners wait for a certain event to happen on a certain element, and as soon as the event occurs, it runs the attached callback function. 
// After reaching the target, the event actually travels all the way up to the document root again in the so-called bubbling phase. So we say events bubble up from the target to the document root. And just like in the capturing phase, the event passes through all its parents elements. And only through the parent elements, not the sibling elements. 
// It is very important to know about the above flow, because basically its as if the event also happened in each of the parent elements. So again, as the event bubbles through a parent element, its as if the event had happened right in that very element. What this means is that if we attach the same event listener, also for example to section element (parent to the anchor element), then it would get the exact same alert window for the section element as well. 
/*
// Event Propagation in Practice 

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
})

// NOTE: In order to activate the capturing phase, we need to add a third parameter (boolean) to the addEventListener method. 
*/
// Event Delegation: Implementing Page Navigation 
/*
// DOM Traversing 
const h1 = document.querySelector('h1');

// Going downwards: selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // to get direct children of h1
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
// console.log(h1.closest('.header'));

// Going sidways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)'
});
*/

// Lifecycle DOM Events
// DOM Content Loaded - This event is fired by the document as soon as the HTML is completely parsed, which means that the HTML has been downloaded and been converted to the DOM tree. Also, all scripts must be downloaded and executed before the DOM content loaded event can happen. 

document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree built!', e);
});

// Load Event - The load event is fired by the window, as soon as not only the HTML is parsed, but also all the images and external resources like CSS files are also loaded. So basically when the complete page has finished loading is when this event gets fired. 

window.addEventListener('load', function(e){
  console.log('Page fully loaded', e);
});

// Before Unload Event - This event is created immediately before a user is about to leave a page. So for example, after clicking this close button in the browser tab. 
// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();

//   console.log(e);

//   e.returnValue = '';
// });

// Efficient Script Loading: defer and async
/*
  In the HTML, we can write the script tag in the document head, or usually at the end of the body. 

  REGULAR: <script src="script.js">
  -- HEAD [NOT IDEAL]
  When we include the script without any attribute in the head, as the user loads the page and receives the HTML, the HTML code will start to be parsed by the browser and parsing the HTML is basically building the DOM tree from the HTML elements. 
  Then at certain point, it will find our script tag, and start to fetch the script, and then execute it. Now during all this time, the HTML parsing will actually stop. So it will be waiting for the script to get fetched and executed. Only after that, the rest of the HTML can be parsed. And at the end of that parsing, the DOM Content Loaded event will finally get fired. 

  -- END OF BODY 
  That is the reason, we usually always put the script tag at the end of the body, so that all of the HTML is already parsed when it finally reaches the script tag. The HTML is parsed, then the script tag is found at the end of the document, then the script is fetched. And then finally, the script gets executed. 

  ASYNC: <script async src="script.js">
  -- HEAD 
  When we use async script loading in the head of the document, the script is loaded at the same time as the HTML is being parsed. So in an asynchronous way. However, the HTML parsing still stops for the script execution. So the script is downloaded asynchronously, then its executed right away in a synchronous way. And so the HTML code has to wait to be parsed. 

  -- BODY 
  MAKES NO SENSE 🤷🏻‍♂️

  DEFER: <script defer src="script.js">
  -- HEAD 
  When deffering, what happens is that the script is still loaded asynchronously. But the execution of the script, is deferred until the end of the HTML parsing. So in practice, loading time is similar to the async attribute, but with the key difference that with defer, the HTML parsing is never interrupted, because the script is only executed at the end.
  
  -- BODY 
  MAKES NO SENSE 🤷🏻‍♂️

  REGULAR VS ASYNC VS DEFER
  END OF BODY                
  - Scripts are fetched and executed after the HTML is completely parsed 

  ASYNC IN HEAD
  - Scripts are fetched asynchronously and executed immediately
  - Usually the DOMContentLoaded event waits for all scripts to execute, except for async scripts. So
  DOMContentLoaded does not wait for an async script
  - Scripts not guaranteed to execute in order
  - Use for 3rd-party scripts where order doesn't matter (e.g. Google Analytics)

  DEFER IN HEAD
  - Scripts are fetched asynchronously and executed after the HTML is completely parsed
  - DOMContentLoaded event fires after defer script is executed
  - Scripts are executed in order
  - This is overall the best solution! Use for your own scripts, and when order matters (e.g. including a library)
*/