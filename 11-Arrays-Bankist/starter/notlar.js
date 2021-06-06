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

console.log("✂".repeat(40));

//! Coding Challenge #1

/* Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far � */

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia
    .slice(1, 3)
    .concat(dogsKate)
    .forEach(function (dogAge, i) {
      if (dogAge >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and ${dogAge} years old`);
      } else if (dogAge < 3) {
        console.log(`Dog number ${i + 1} is still a puppy`);
      }
    });
};

checkDogs(Julia, Kate);
