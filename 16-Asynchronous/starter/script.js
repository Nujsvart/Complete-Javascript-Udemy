"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
//* Old Way

/* const request = new XMLHttpRequest(); //? Oldschool way
request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`); //? request actik
request.send(); //? API'ye istek gonderdik. */

//* Modern way: Promise and the Fetch API

const request = fetch("https://restcountries.eu/rest/v2/name/turkey"); //? Promise
console.log(request);
