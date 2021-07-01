"use strict";

//! ASYNCHRONUS JAVASCRIPT, AJAX AND APIs

//* Synchronous

//? Most code is synchronous
//? Synchronous code is executed line by line
//? Each line of code waits for previous line to finish

//* Asynchronous

//? Asynchronous code is executed after a task that runs in the "background" finishes
//? Asynchronous code is non-blocking // setTimeout()
//? Execution doesn't wait for an asynchronous task to finish its work
//? addEventListener and Callback functions alone do NOT make code asynchronous

//? Asynchronous programming coordinating behavior of a program over a period of time
//? Asynchronous literally means not occuring at the same time

//* AJAX

//? Asynchronous Javascript And XML: Allows us to communicate with remote web servers in an synchronous way. With AJAX calls, we can request data from web servers dynamically.

//* How Ajax Works:

//? With ajax, we can do an HTTP request to the server, which has this data. And the server will then set back a response containing that data we requested. And this back and forth between Client and server all happens assynchronously in the background.

//? There can even be different types of requests, like get requests to receive data or post requests to send data to a server.

//* API

//? Application Programming Interface: Piece of software thaht can be used by another piece of software, in order to allow applications to talk to each other.

//? There are be many types of APIs in web development: DOM API, Geolocation API, Own Class API, Online API

//? Online API: Application running on a server, that receives requests for data, and sends data back as response

//? We can build our own web APIs (requites back-end development, e.g. with node.js) or use 3rd-party APIs.

//? There is an API fpr everything:
//? Weather data, Data about countries, Flights data, Currency conversion data, APIs for sending email or SMS, Google Maps, Millions of possibilities...

//? Most popular API data format --> JSON data format

//! PROMISES AND THE FETCH API

//* Promise: An object that is used as a placeholder for the future result of an asynchronous operation.

//? in less formal, Promise: A container for an asynchronously delivered value. ==> A container for a future value.

//? Promises ES6 futures.

//* Promise advantages:
//? We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.
//? Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

//* The Promise Lifecycle

//? Before the future value is available ==> PENDING
//? Asynchronous task has finished ==> SETTLED
//? (There are two types of settled) ==> Fullfilled and Rejected
//? Fullfilled ==> Success! The value is available
//? Rejected ==> An error happened

//! OUR FIRST AJAX CALL: XMLHttpRequest

/* const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest(); //? Oldschool way
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`); //? request actik
  request.send(); //? API'ye istek gonderdik.

  //? Yukaridaki kodlarin calismasi tamamlandiktan sonra:

  request.addEventListener("load", function () {
    /* console.log(this.responseText); */
/*     const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
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
  });
};

getCountryData("Turkey");
getCountryData("USA"); */

//! BEFORE PROMISES AND THE FETCH API

/* const btn = document.querySelector(".btn-country");
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

const getCountryAndNeighbourData = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest(); //? Oldschool way
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`); //? request actik
  request.send(); //? API'ye istek gonderdik.

  //? Yukaridaki kodlarin calismasi tamamlandiktan sonra:

  request.addEventListener("load", function () {
    /* console.log(this.responseText); */
/*     const [data] = JSON.parse(this.responseText);
    // Render country
    renderCountry(data);

    // Get neighboor country (2)
    const neighbour = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    neighbour.forEach(n => {
      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${n}`);
      request2.send();

      request2.addEventListener("load", function () {
        const data2 = JSON.parse(this.responseText);
        renderCountry(data2, "neighbour");
      });
    });
  });
};

getCountryAndNeighbourData("Turkey");  */

//! THE EVENT LOOP IN PRACTICE

console.log("Test start");
setTimeout(() => {
  console.log("0 sec timer");
}, 0);
Promise.resolve("Resolved promise 1").then(res => console.log(res));
console.log("Test end");

//? once global synchronous code calisiyor. (Test start ve test end), sonra Promise calisiyor (event loop'ta microtask execute oncelikli oldugu icin). En son da setTimeoutt calisiyor.

//! BUILDING A SIMPLE PROMISE

//? Building

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WIN!");
    } else {
      reject(new Error("You lost your money!"));
    }
  }, 2000);
});

//? Consuming

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//* Promisifying setTimeout

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited 1 second"));

//? asagidakinin aynisi

/* setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("4 seconds passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 */

//? Immediately runs

Promise.resolve("abc").then(res => console.log(res));
Promise.reject("Problem!").catch(err => console.error(err));

//! PROMISIFYING THE GEOLOCATION API

/* navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);
 */

/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos)); */