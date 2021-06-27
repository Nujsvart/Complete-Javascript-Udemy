"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//* Refactoring

//! APP ARCHITECTURE

class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #workouts = [];

  constructor() {
    //? page yuklenir yuklenmez calisacak.
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    //* Event listener'da callback function tanimlanirken her zaman sonuna .bind(this) eklenmelidir.
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    //? Cagirilan callback'in icinde this gecmedigi icin bind etmeye gerek yok.
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Konum alinamadi");
        }
      );
    }
  }

  _loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);

    //? Leaflet API
    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.#map
    );

    //? Leaflet'de tanimli event listener methodunu cagiriyoruz.
    //* Map'e tiklandiginda:
    this.#map.on("click", this._showForm.bind(this));

    //? harita yuklendikten sonra localstorage'deki datanin markerlarini haritada gostermesi icin:
    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    // Empty Inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    form.style.display = "none";
    form.classList.add("hidden");

    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    //? Get data from from
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //? If workout running, create running object
    if (type === "running") {
      const cadence = +inputCadence.value;
      //? Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Pozitif bir rakam girmelisiniz!");

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //? If workout cycling, create cycling object
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      //? Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert("Pozitif bir rakam girmelisiniz!");

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //? Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    //? Render workout on map as marker
    //* Display marker
    //* Marker koordinati olarak mapEvent.latlng' den aldigimiz, map'te tikladigimiz yeri gosteren koordinatlari tanimliyoruz.

    this._renderWorkoutMarker(workout);

    //? Render workout on list
    this._renderWorkout(workout);

    //? Hide form + Clear input fields
    this._hideForm();

    //? Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">dk</span>
      </div>
      `;

    if (workout.type === "running") {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">dk/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">adım/dk</span>
        </div>
      </li>
          `;
    }

    if (workout.type === "cycling") {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    }

    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout");

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    //? Leaflet
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface

    /*     workout.click();
    console.log(workout) */
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
    //? obje olarak alip json string'e cevirdik.
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));
    //? parse ile stringi tekrar objeye cevirdik.
    console.log(data);

    if (!data) return; //? data yoksa asagidaki kodlari calistirma.

    this.#workouts = data;
    //? baslangicta calistridigimiz bos workouts arrayini, localstorage'de saklayip cektigimiz data'ya esitledik.

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });

    //? gelen her data elemanini render methodu ile UI'da gosteriyoruz.
  }

  /*   reset() {
    localStorage.removeItem("workouts");
    location.reload();
  } */
}

const app = new App(); //? objeyi olusturduk.

//********************************************************************* */

//! WORKOUT ARCHITECTURE

//* Parent

class Workout {
  date = new Date();
  id = Date.now().toString(36) + Math.random().toString(36).slice(2);
  //? generating unique ID
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // km
    this.duration = duration; // min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    this.description = `${
      this.type === "running" ? "Koşu" : "Bisiklet"
    } 🌈 ${this.date.getDate()} ${months[this.date.getMonth()]}`;
  }

  /*   click() {
    this.clicks++;
  } */
}

//* Child

class Running extends Workout {
  type = "running";

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

//* Child

class Cycling extends Workout {
  type = "cycling";

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

/* const run1 = new Running([39, -25], 120, 60, 20);
const cyc1 = new Cycling([39, -24], 110, 20, 30);

console.log(run1);
console.log(cyc1); */
