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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong!") {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
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

//! Chaining Promises
//! Handling Rejected Promises
//? chain'in sonundaki catch() methodu tum promise chainde olusacak error'u yakalamak ve islem yapmak icin kullanir. catch(callback)

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found!"
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country not found!"
      );
    })
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
      console.error(`${err} ❗❗`);
      renderError(`Something went wrong ❗❗❗ ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

/* btn.addEventListener("click", function () {
  getCountryData("Turkey");
}); */

//getCountryData("asjhdashjjf");

//************************************* */

/* Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time �
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating �
3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the
console
5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31
Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
 */

/* const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=232923401965211798374x119646`
  )
    .then(response => {
      if (!response.ok) throw new Error(`Too many requests ${response.status}`);

      return response.json();
    })
    .then(data => {
      if (data.error)
        throw new Error(`Bir sorun olustu >> ${data.error.description}`);

      console.log(data);
      console.log(`You are in ${data.region}, ${data.country}`);

      return data.country;
    })
    .then(getCountryData)
    .catch(err => console.error(`${err.message}`));
};

btn.addEventListener("click", function () {
  whereAmI(-33.933, 18.474);
}); */

//! PROMISIFYING THE GEOLOCATION API

/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}; */

//***************************************** */

/* const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=232923401965211798374x119646`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Too many requests ${response.status}`);

      return response.json();
    })
    .then(data => {
      if (data.error)
        throw new Error(`Bir sorun olustu >> ${data.error.description}`);

      console.log(data);
      console.log(`You are in ${data.region}, ${data.country}`);

      return data.country;
    })
    .then(getCountryData)
    .catch(err => console.error(`${err.message}`));
}; */

// btn.addEventListener("click", whereAmI);

//! CONSUMING PROMISES WITH Async/Await

//* whereAmI fonksiyonun async ve await ile tekrar yapimi:

//? once fonksiyonu async olarak tanimliyoruz. sonra await ile fetch fullfilled olana kadar bekliyor ve sonucu variable'a depoluyoruz. (response icin .then'e gerek kalmadi)

//? async function her zaman promise dondurur..

//? OLD WAY:
//? fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=232923401965211798374x119646`
    );
    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem getting country");

    const data = await res.json();
    renderCountry(data[0]);

    //! Returning Values from Async Functions

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log("1: basladi");

//? OLD WAY

/* whereAmI()
  .then(city => console.log(city))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log("bitti")); */

//! challenge MODERN WAY

(async function () {
  try {
    const loc = await whereAmI();
    console.log(loc);
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("bitti");
  }
})();

btn.addEventListener("click", whereAmI);

//! ERROR HANDLING WITH try...catch

/* try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.log(err.message);
} */
