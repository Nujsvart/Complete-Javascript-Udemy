"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
 */
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////

//! SIMPLE ARRAY METHODS

//* slice()
//? orjinal array'i bozmadan, yeni array donduruyor.

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice()); //? bos birakinca tum array'i kopyaliyor. spread op. gibi (chaining yaparken bunu kullanmak mantikli)

//* splice()
//? orjinal array'i bozuyor. array'dan istemedigimiz elemanlari parametre vererek silmek icin kullanilir.

//console.log(arr.splice(2)); //? 2den basla hepsini sil.
//console.log(arr); //? splice edilen elemanlar, orjinal array'den silindi.

arr.splice(1, 2); //? 1'den basla 2'yi dahil ederek sil.
console.log(arr);

//* reverse()
//? orjinal array'i bozuyor.

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

//* concat()

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //? aynisi

//* join()
//? verilen parametreyi elemanlarin arasina ekleyerek array'i string'e ceviriyor.

console.log(letters.join(" - "));

console.log("✂".repeat(40));

//! LOOPING ARRAYS: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//? for of ornegi:

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//? forEach ornegi:
console.log("-----FOR EACH------");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//**************************************************************** */

console.log("------INDEX-------");

//* her iki method ile indexlere erismek

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You deposited ${i + 1} ${movement}`);
  } else {
    console.log(`You withdrew ${i + 1} ${Math.abs(movement)}`);
  }
}

console.log("-----FOR EACH------");

//? forEach callback function'u sirasiyla 3 parametre aliyor. hepsini kullanmak zorunda degiliz. (1-value, 2-index, 3-array)

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${index + 1} ${movement}`);
  } else {
    console.log(`You withdrew ${index + 1} ${Math.abs(movement)}`);
  }
});

console.log("✂".repeat(40));

//! ForEach with Maps and Sets

//* Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//* Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value) {
  console.log(`${value}`);
});
