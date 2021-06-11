"use strict";

//! CONVERTING AND CHECKING NUMBERS

//? Conversion
console.log(Number("23"));
console.log(+"23");

//? Parsing
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e23", 10)); // NaN

console.log(Number.parseInt("2.5rem")); // 2
console.log(Number.parseFloat("2.5rem")); // 2.5

//* check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true

//* Check if value is Number
//? is better to check if something is a number or not - isFinite()

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false

//* isInteger()

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

console.log("✂".repeat(40));

//! MATH AND ROUNDING

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5 aynisi
console.log(8 ** (1 / 3)); // 2

//? en buyuk rakami bulmak?

console.log(Math.max(5, 18, 23, 11, 2)); // 23

//? en kucuk rakami bulmak?

console.log(Math.min(5, 18, 23, 11, 2)); // 2

//? dairenin cevresini hesaplamak

console.log(Math.PI * Number.parseFloat("10px") ** 2);

//? random numara uretmek

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) --> min...max
console.log(randomInt(10, 20));

//? Rounding integers

console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

//? Rounding decimals

console.log(2.7.toFixed()); // 3 //? toFixed her zaman string dondurur
console.log(2.7.toFixed(3)); // 2.700

console.log(+2.755.toFixed(2)); // 2.700 //? number'a cevirdik


