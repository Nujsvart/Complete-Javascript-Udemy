'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }


};


/* restaurant.orderDelivery({
  time: "22:30",
  adress: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2
}) */


// DESTRUCTURING

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant; // naming

const { menu = [], starterMenu: starters = [] } = restaurant; // objede olmayan property olusturup, default value verildi. starterMenu isim degisitirilip default value verildi.

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // parantezlerin icine almak, gerekli.
console.log(a, b);

// Nested objects

const { fri } = openingHours;
console.log(fri);

const { fri: {open, close}} = openingHours;
console.log(open, close);

// *************************************************************************************

// SPREAD OPERATOR

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menuS = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuS);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Esra";
const letters = [...str, "Discordia"];
console.log(letters);

/* const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("ingredient 2?"), prompt("ingredient 3?")];
restaurant.orderPasta(...ingredients); // ES6
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Old way */

// Objects 
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Restorant Roma"; // Orjinalini bozmuyor
console.log(restaurantCopy.name);
console.log(restaurant.name);

// **********************************************************************************************

// REST OPERATOR
const arrK = [1, 2, ...[3, 4]]; // Spread, = in sag tarafinda

// Rest ='in sol tarafinda, destructuring isleminde kullaniliyor
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; // rest element en sonda tanimlanmasi gerekiyor
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours; // sat haricindeki gunler rest operatoruyle weekdays'e atandi.
console.log(weekdays);

// REST IN FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(number => sum += number);
/*   for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  } */
  return sum;
};

console.log(add(2, 5));

const x = [23, 5, 7];
console.log(add(...x)); // Spread operator ile array`in icindekiler function'a aktarildi.

restaurant.orderPizza("mushrooms", "zeytin", "salam", "sucuk", "misir", "cheddar");

// **********************************************************************************************

// * Short Circuiting (&& and ||)

console.log("---- OR ----");

console.log(3 || "Esra"); // ilk deger true bir deger ise, sadece ilk degeri dondurup digerlerini gormezden gelir.
console.log("" || "Esra");
console.log(true || 0); 
console.log(undefined || null); // ikisi de false, son degeri dondurdu.
console.log(undefined || 0 || "" || "Hello" || 23 || null);

//********************** */

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // yukardakinin kisa hali.
console.log(guests2);

// && operator
console.log("---- AND ----");

console.log(0 && "Esra"); // ilk value false ise, direk ilk degeri dondurup digerlerini gormezden gelir.

console.log(7 && "Esra"); // Hepsi true deger ise, sadece son true degeri dondurur.

console.log("Hello" && 23 && null && "Esra"); // bir tane bile false varsa sadece false degeri dondurur.

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach"); // yukardakinin kisa hali.


// Nullish Operator (??)
console.log("---- ?? ----");

// Nullish: null and undefined (NOT 0 or "")

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // or operatoru 0'i false olarak gordugu icin 10 dondurdu.

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // nullish operator, 0 null bir deger olmadigi icin sonucu 0 dondurdu.

//****************************************************************************************** */

// for of - Loop

const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuNew) {
  console.log(item);
}

for (const item of menuNew.entries()) { // her elemani indexleriyle birlikte array olarak donduruyor.
  console.log(item);
}

for (const [i, el] of menuNew.entries()) {
  console.log(`${i + 1}: ${el}`);
}










