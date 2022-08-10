'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Whenever we use querySelector () with a selector, which actually matches multiple elements, only the first one will get selected. So we make use of querySelectorAll() method
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard events are called global events because they do not happen on one specific element. So no matter where they happen on the page, they will always trigger the event handler that we are specifying below ('keydown' for example). 

// Three types of events for the keyboard :
// - keydown --> is fired as soon as we just press down the key 
// - keypress --> is fired continuously as we keep our finger on a certain key 
// - keyup  --> this one only happens when we lift our finger off the keyboard or off the key

// The function would be executed for any key being pressed, unless we add additional validations using the Event object e.
// Information about which key was pressed is stored in the event that is going to occur as soon as any key is pressed, so a key down event is generated. 
// So whenever a key down event occurs, JavaScript passes in the event object (e) as an argument
document.addEventListener('keydown', function(e){
    //console.log('A key was pressed!');
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        //console.log('Esc was pressed');
        closeModal();
    }
});