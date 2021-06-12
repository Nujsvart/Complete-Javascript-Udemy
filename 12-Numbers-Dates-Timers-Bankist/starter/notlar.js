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

console.log((2.7).toFixed()); // 3 //? toFixed her zaman string dondurur
console.log((2.7).toFixed(3)); // 2.700

console.log(+(2.755).toFixed(2)); // 2.700 //? number'a cevirdik

console.log("✂".repeat(40));

//! THE REMAINDER OPERATOR

//? is even or odd?
//? sayinin 2'ye bolumunden kalan 0 ise even, degilse odd.

console.log(6 % 2); // 0 -> even
console.log(5 % 2); // 1 -> odd

//? function

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "gray";
  });
});

console.log("✂".repeat(40));

//! WORKING WITH BigInt

//? js'deki en buyuk sayi. bundan buyuk sayilarla calismanin yolu es2020 ile gelen BigInt primitive'ine kadar yoktu.

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(402893190840918409818829048109248);
console.log(402893190840918409818829048109248n); //? BigInt'e cevirdi - n
console.log(BigInt(40289319));

//? Operations
console.log(10000n + 10000n);

const huge = 945890435093485094905n;
const num1 = 23;
/* console.log(huge * num1); */ //? BigInt ve normal rakamlari mixleyemiyor. ERROR

console.log(huge * BigInt(num1)); //? bu sekilde kullanilabilir.

//? Exceptions

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true

console.log("✂".repeat(40));

//! CREATING DATES

//? Create a date / 4 ways

const now1 = new Date();
console.log(now1);

console.log(new Date("Jun 11 2021 23:37:42"));

console.log(new Date("August 1, 2014"));
console.log(new Date("July 21, 1985"));

console.log(new Date(account1.movementsDates[0]));

//? Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate());
console.log(future.getDay()); // 0-> sun, 1-> mon, 2-> tue, 3-> wed, 4-> thu, 5-> fri, 6 -> sat
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());

console.log(future.getTime()); // timestamp

console.log(Date.now()); // su anin timestamp'i

//? set

future.setFullYear(2040);
console.log(future);

console.log("✂".repeat(40));
