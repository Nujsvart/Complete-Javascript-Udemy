"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
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

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // naming

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

const {
  fri: { open, close },
} = openingHours;
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
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // rest element en sonda tanimlanmasi gerekiyor
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours; // sat haricindeki gunler rest operatoruyle weekdays'e atandi.
console.log(weekdays);

// REST IN FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  /*   for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  } */
  return sum;
};

console.log(add(2, 5));

const x = [23, 5, 7];
console.log(add(...x)); // Spread operator ile array`in icindekiler function'a aktarildi.

restaurant.orderPizza(
  "mushrooms",
  "zeytin",
  "salam",
  "sucuk",
  "misir",
  "cheddar"
);

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
console.log("------FOR OF-------");
// for of - Loop

const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuNew);

for (const item of menuNew) {
  console.log(item);
}

for (const item of menuNew.entries()) {
  // her elemani indexleriyle birlikte array olarak donduruyor.
  console.log(item);
}

for (const [i, el] of menuNew.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//****************************************************************************************** */

// ES2020 Optional Chaining

// Old way

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With Optional chaining
console.log(restaurant.openingHours.mon?.open); // mon varsa open'i yaz. yoksa undefined dondur.
console.log(restaurant.openingHours?.mon?.open);

// Practical Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Boyle bir method yok");
console.log(
  restaurant.orderPizza?.("mushroom", "sucuk", "salam") ??
    "Boyle bir method yok"
);

// Arrays

const users = [
  {
    name: "Esra",
    email: "hello@hello.com",
  },
];

console.log(users[0]?.name ?? "User array is empty");
console.log(users[1]?.name ?? "User array is empty");

//****************************************************************************************** */

// Object.keys() (Property NAMES)

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Object.values() (Property VALUES)

const values = Object.values(openingHours);
console.log(values);

for (const value of values) {
  console.log(value);
}

// Object.entries() (Entire Object) Array'e donduruyor

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//****************************************************************************************** */

console.log("-------SETS---------");

// SETS

// Set'lerin indexi yoktur ve bir set icinden value almanin yolu yoktur.
// Bunun yerine array kullanilir.
// Genelde array'deki duplicateleri temizlemek icin kullanilir.

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet); // All the duplicates are gone.

console.log(new Set("Esra Discordia"));

console.log(ordersSet.size);

console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
/* ordersSet.clear(); */
console.log(ordersSet);

// Sets are iterable.
for (const order of ordersSet) {
  console.log(order);
}

// Example Array

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
/* const staffUnique = new Set(staff); */
const staffUnique = [...new Set(staff)]; // array formatina spread operatoru ile extract edildi.
console.log(staffUnique);

console.log(new Set("esradiscordia").size); // ayni harfleri cikararak sayiyor.

//****************************************************************************************** */

console.log("-------MAPS---------");

// MAPS

// objelerde key'ler string olmak zorundadir. map'de her turden property olabilir.
// map olusturmanin en iyi yolu bos bir map olusturup, sonradan set etmektir.

const rest = new Map();

// set
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

// get

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // unreadable..

const arr2 = [1, 2];
rest.set(arr, "Test");

rest.set(document.querySelector("h1"), "heading");
rest.set("heading", document.querySelector("h1"));

// methods
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
/* rest.clear(); */

// *****************

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct :)"],
  [false, "Try again!"],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iteration

for (const [i, val] of question) {
  console.log(i, val);
}

console.log(question.get("question"));

for (const [i, val] of question) {
  if (typeof i === "number") {
    console.log(`Answer ${i}: ${val}`);
  }
}

/* const answer = Number(prompt("Your answer"));
console.log(answer);

if (answer === question.get("correct")) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

question.get("correct") === answer ? console.log(question.get(true)) : console.log(question.get(false)); */

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

//****************************************************************************************** */

// Sources of Data
// 1) From the program itself: Data written directly in source code(status messages)
// 2) From the UI: Data input from the user or data written in DOM (tasks in todo app)
// 3) From external sources: Data fetched for example from web API(recipe objects)

// -> Collection of data --> Data structure

// Simple List? use -> ARRAY OR SETS
// Key/Value Pairs? use -> OBJECTS OR MAPS

// ARRAYS: Use when you need ordered list of values (might cointain duplicates) & Use when you need to manipulate data

// SETS: Use when you need to work with unique values && Use when high-performance is really important && Use to remove duplicates from arrays

//************ */

// OBJECTS: More "traditional" key/value store ("abused" objects) && Easier to write annd access values with . and []
// Use when you need to include functions (methods)
// Use when working with JSON (can convert to map)

//*************** */

// MAPS: Better performance && Keys can have any data type && Easy to iterate && Easy to compute size
// Use when you simply need to map key to values
// Use when you need keys that are not strings

//****************************************************************************************** */

// WORKING WITH STRINGS

const airline = "Tap Air Portugal";

// indexOf() , lastIndexOf()

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

// slice()

console.log(airline.slice(4)); // Hard-coded
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" "))); // first word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // last word

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");

// toLowerCase() , toUpperCase()

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = "eSrA"; // Esra
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// function

const duzelt = function (n) {
  const nLower = n.toLowerCase();
  const nCorrect = nLower[0].toUpperCase() + nLower.slice(1);
  console.log(nCorrect);
};

duzelt("eSrA diSCordiA");

// Comparing emails // trim()

const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io  \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const duzgunMail = function (mail) {
  const duzgun = mail.toLowerCase().trim();
  if (duzgun === email) {
    console.log("Correct");
  } else {
    console.log("Wrong");
  }
};

duzgunMail(loginEmail);
duzgunMail("eSRa@DiSCordia.oRG");

// Replacing // replace()

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", "."); // chaining
console.log(priceUS);

const announcement =
  "All passengers come to barding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); // with regexp

// Booleans

const plane = "Airbus A320neo";

console.log(plane.includes("A320")); // true
console.log(plane.includes("Boeing")); // false

console.log(plane.startsWith("Air")); // true
console.log(plane.startsWith("A32")); // false

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // her zaman kullanilmali
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// split() -- parametreye gore kelimeleri bolerek arrey'e ceviriyor.

console.log("a+very+nice+string".split("+")); // + lardan bolerek her kelimeyi array'e depoluyor.
console.log("Esra Discordia".split(" ")); // ["Esra", "Discordia"]

const [firstName, lastName] = "Esra Discordia".split(" "); // destructuring
console.log(firstName, lastName);

// join() -- split()`in tam tersi array'i string'e ceviriyor.

const newName = ["Mrs.", firstName, lastName.toUpperCase()].join(" "); //
console.log(newName);

// capitalizing names function

const capitalizeName = function (name) {
  const names = name.split(" "); // isimler bosluklar cikarilarak array'e atandi
  const namesUpper = [];

  for (const n of names) {
    /*     namesUpper.push(n[0].toUpperCase() + n.slice(1)); // bas harfler buyutulerek yeni array'e push edildi. */
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" ")); // join () ile string'e cevirildi
};
capitalizeName("esra discordia duman delibas");

// Padding

const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Esra".padStart(20, "+").padEnd(30, "+"));

// example function

const maskCreditCard = function (number) {
  const str = number + ""; // String()`in kisa yolu.
  const last = str.slice(-4);
  return last.padStart(str.length, "*"); // son 4 numaranin basina, gelen numaranin uzunlugu kadar * koy.
}

console.log(maskCreditCard(198239817498127));

// Repeat

const message2 = "Bad weather... All Departues Delayed... ";
console.log(message2.repeat(5));

// example function

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
}

planesInLine(3);



