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
  console.log("🐕");
};
document.body.addEventListener("click", high5); //? addEventListener -> higher-order
["Jonas", "Martha", "Adam"].forEach(high5); //? forEach -> higher-order
