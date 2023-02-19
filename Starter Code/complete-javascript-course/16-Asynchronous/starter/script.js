'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// XMLHttpRequest
// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//         </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('portugal');
// getCountryData('usa');

/*
// Welcome to Callback Hell 

const renderCountry = function(data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        
        // Render country 1
        renderCountry(data);

        // Get neigbour country
        const [neighbour] = data.borders;

        if(!neighbour) return; 

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        });
    });
}

// getCountryAndNeighbour('portugal'); 
getCountryAndNeighbour('usa'); 

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
        }, 1000);
    }, 1000);
}, 1000);

*/

// Promises and the Fetch API
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

/*
    Promise: An object that is used as a placeholder for the future result of an asynchronous operation 

    Less Formal
    Promise: A container for an asynchronously delivered value. 

    Less Formal 
    Promise: A container for a future value (e.g.: response coming from an AJAX call)

    Advantages of using Promises:
    - We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results 
    - Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell 

    The PROMISE lifecycle 
    - PENDING: Before the future value is available
    - SETTLED: Asynchrnous task has finished 
      - FULFILLED: Success! The value is now available 
      - REJECTED: An error happened

    CONSUME PROMISE
    - For example, the promise that was returned from the fetch function 
    - However, in order for a promise to exist it must be build. In the case of fetch function, it is the fetch function that builds the promise and returns it for us to consume. 
*/

