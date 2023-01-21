'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Using the Geolocation API
// The function takes in two callback functions, the first one that will be called on success ('Success Callback'). So whenever the browser successfully got the coordinates of the current position of the user and the second callback is the 'Error Callback' which is the one that is going to be called when there happened an error while getting the coordinates.

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
        // console.log(position);
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        // console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        // The second parameter (13) is the zoom level
        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }, function(){
        alert('Could not get your position')
    });
}

// We are able to access the firstName variable declared in other.js as its a global variable in that script. So any variable that is global in any script, will be available to all the other scripts. 
// console.log(firstName);