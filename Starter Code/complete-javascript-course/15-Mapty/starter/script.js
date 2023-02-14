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

// Declaring Global Variables so that in can be used in the submit event listener function
let map, mapEvent;

// Managing Workout Data: Creating Classes 
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    type = 'cycling';

    constructor(coords, distance, duration){
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in mins
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed() {
        // km/hr
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);
///////////////////////////
// APPLICATION ARCHITECTURE 
// Refactoring for Project Architecture 
class App {
    #map;
    #mapEvent;
    #workouts = [];
    
    constructor(){
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
                alert('Could not get your position')
            });
        }
    }

    _loadMap(position) {
        // console.log(position);
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        // console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        // The second parameter (13) is the zoom level
        this.#map = L.map('map').setView(coords, 13);
        // console.log(map); 

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // Displaying a Map Marker
        // The on() method is similar to the addEventListener method and this method had been declared by the Leaflet library 
        
        // Handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        // Rendering Workout Input Form
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validInputs = (...inputs) => 
        inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => 
        inputs.every(inp => inp > 0);

        e.preventDefault();
        
        // Get data from form
        const type = inputType.value;

        // Converting the type from String to Integer 
        const distance = +inputDistance.value; 
        const duration = +inputDuration.value;

        const {lat, lng} = this.#mapEvent.latlng;

        let workout;

        // If workout running, create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;

            // Check if data is valid 
            if (
                // !Number.isFinite(distance) || 
                // !Number.isFinite(duration) || 
                // !Number.isFinite(cadence) 
                !validInputs(distance, duration, cadence) || 
                !allPositive(distance, duration, cadence))
                return alert('Inputs have to be positive numbers!');

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        // If workout cycling, create cycling object
        if (type === 'cycling') {
            const elevation = +inputElevation.value;

            // Check if data is valid 
            if (
                !validInputs(distance, duration, elevation) ||
                !allPositive(distance, duration))
                return alert('Inputs have to be positive numbers!');

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        // Add new object to workout array
        this.#workouts.push(workout);
        console.log(this.#workouts);

        // Render workout on map as marker
        this.renderWorkoutMarker(workout);

        // Render workout on list

        // Hide form + clear input fields

        //Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    
        // Display the marker
        // console.log(this.#mapEvent);
        // const {lat, lng} = this.#mapEvent.latlng;
    }

    renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 200,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        }))
        .setPopupContent(`${workout.type}`)
        .openPopup();
    }
}

const app = new App();
// We are able to access the firstName variable declared in other.js as its a global variable in that script. So any variable that is global in any script, will be available to all the other scripts. 
// console.log(firstName);