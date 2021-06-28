"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = " ") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
       <h3 class="country__name">${data.name}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${(
         +data.population / 1000000
       ).toFixed(1)} people</p>
       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
   </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//* Old Way

/* const request = new XMLHttpRequest(); //? Oldschool way
request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`); //? request actik
request.send(); //? API'ye istek gonderdik. */

//* Modern way: Promise and the Fetch API

//const request = fetch("https://restcountries.eu/rest/v2/name/turkey"); //? Promise
//console.log(request);

//! Consuming Promises

//? then(callback(response)) ==> promise fullfilled oldugunda calisacak.
//? json() methodu fetch'e ozel bir method. response body'nin icindeki data'yi alip yeni bir promise donduruyor. sonrasinda chaining (then()) ile handle etmek gerekiyor.

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData("Turkey");
