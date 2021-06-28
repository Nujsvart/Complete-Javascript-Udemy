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

const getCountryAndNeighbourData = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest(); //? Oldschool way
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`); //? request actik
  request.send(); //? API'ye istek gonderdik.

  //? Yukaridaki kodlarin calismasi tamamlandiktan sonra:

  request.addEventListener("load", function () {
    /* console.log(this.responseText); */
    const [data] = JSON.parse(this.responseText);
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

getCountryAndNeighbourData("Turkey");
