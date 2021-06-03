"use strict";

//! DEFAULT PARAMETERS

const bookingArray = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArray.push(booking);
};

createBooking("LH213");
createBooking("LH213", 2, 800);
createBooking("LH213", 2);
createBooking("LH213", 5);
createBooking("LH213", undefined, 100); //? 2.argumani bos birakmak

console.log(bookingArray);

console.log("✂".repeat(30));

//! HOW PASSING ARGUMENTS WORKS: VALUE vs. REFERANCE

const flight = "LH214";
const esra = {
  name: "Esra",
  passport: 23761784,
};

//? arguman olarak primitive value verildiginde orjinali degismezken,
//? reference tipinde (object) arguman verildiginde orjinali degisiyor.

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999"; //? degisen orjinal flight degil, flightNum
  passenger.name = `Mrs. ${passenger.name}`; //? burda orjinal objeye etki ediyor.
  if (passenger.passport === 23761784) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, esra); //? checked in

console.log(flight);
console.log(esra);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(esra);
checkIn(flight, esra); //? passport degistigi icin wrong.

console.log("✂".repeat(30));

//! FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

//? Higher-order Functions
//? A function that receives another function as an argumen, that returns a new function, or both

//* 1 - Function that receives another function

/* const greet = () => console.log("Hey Esra");  //? Callback function
btnClose.addEventListener("click", greet);  */ //? Higher-order function

//* 2 - Function that returns new function

/* function count() { //? higher-order function
    let counter = 0;
    return function () {  //? returned function
        counter++;
    }
} */

//! FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//? Higher-order Function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); //! callback cagirior
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best", upperFirstWord);
//? transformer() -> higher-order, upperFirstWord() -> callback
transformer("Javascript is the best", oneWord);

//? same

const high5 = function () {
  /* console.log("🐕"); */
};
document.body.addEventListener("click", high5); //? addEventListener -> higher-order
["Jonas", "Martha", "Adam"].forEach(high5); //? forEach -> higher-order

console.log("✂".repeat(30));

//! FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); //? greet() fonk. arguman veriliyor ve return fonksiyonuna greeterHey() ismi verilip ataniyor.
greeterHey("Esra");

greet("Hello")("Esra");

// challenge arrow function

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

/* const greeterHello = greetArrow("Hello");
greeterHello("Esra"); */
greetArrow("Heyyo")("Esra");

console.log("✂".repeat(30));

//! The CALL and APPLY METHODS

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Esra Discordia");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; //? objedeki methodu first-class function olarak tanimladik.

/* book(23, "Duman Dora"); */ //? bu sekilde calismior cunku fonksiyondaki "this" undefined oluyor. call methodu ile hangi objede kullanilacagi belirtilmesi lazim.

//* Call method

book.call(eurowings, 23, "Duman Dora"); //* once obje, sirasina gore arg.
console.log(eurowings);

book.call(lufthansa, 54, "Duman Delibas:)");
console.log(lufthansa);

//* Apply method

//? call'dan farkli olarak, arguman yerine array aliyor. kullanisli degil

const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);

//? bunun yerine call methodu kullanilip, ...spread ile arguman verilebilir.

book.call(eurowings, ...flightData);

console.log("✂".repeat(30));

//! BIND METHOD

const bookEW = book.bind(eurowings); //?eurowings'e ozel atandi.
const bookLH = book.bind(lufthansa); //? lufthansa;ya ozel atandi.

bookEW(23, "Steven Williams"); //? invoke ederken obje(this) ismine gerek kalmadi.

//* flightNum parametresini ozel olarak ayarlayarak, o parametrenin degerine ozel fonksiyon atanabilir.

const bookEW23 = book.bind(eurowings, 23);

bookEW23("Esra Discordia"); //? simdi arguman olarak sadece isim gerekiyor.

//* With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  /* console.log(this); */ //! asagidaki ilk event listenerda; event handler fonksiyonlarinda "this", her zaman cagirildigi elementi isaret eder.
  this.planes++;
  console.log(this.planes);
};

/* document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); */

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); //? "this"'i lufthansa objesine isaret ettik.

//* Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //? burda "this"(obje) icin null biraktik cunku lazim degil, rate parametresini ayarlayarak yeni fonk olusturduk.
/* const addVAT = value => value + value * 0.23; */ //? bunun aynisi

console.log(addVAT(100)); //? sadece value argumani ile invoke edioruz.

//* yukardaki bind methodu ile olusturulan fonksiyonu, return fonksiyon ile yapmak:

const addReturn = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addReturn(0.23)(100));

/* const addRet = addReturn(0.23);
console.log(addRet(100));
 */

console.log("✂".repeat(30));
