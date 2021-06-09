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

console.log("✂".repeat(40));

//! DATA TRANSFORMATIONS: map(), filter(), reduce()

//? donusturulmus yeni arrayler uretiyorlar
//? return
//? for loop ile yapilamayan chaining islemi yapilabilir.

//* map()

//? forEach e benzior ama farkli olarak o array'den yeni bir array uretiyor
//? her iteration'da aldigi function'in icerdigi koda gore islem yapior
//? map returns a new array containing the results of applying an operation on all original array elements

//* filter()

//? orjinal array'deki elemanlari function'da belirtilmis kosula gore filter edior.
//? mesela array'de 2'den buyuk elemanlar: current > 2
//? filter returns a new array containing the array elements that passed a specified test coindition

//* reduce()

//? dizinin her bir elemani icin, parametre olarak verilen callback fonksiyon dizinin tum elemanlarina methodta belirtilen islemi yapar ve TEK CIKTILI bir sonuc olusturur.
//? accumulator: toplayici, geri aramanin donus degelerlerini toplar
//? currentValue: gereklidir. mevcur elemanin degeri
//? currentIndex: istege bagli. gecerli elemanin dizi indexi.
//? arr: istege bagli. gecerli elemanin ait oldugu dizi nesnesi

//? reduce boils ("reduces") all array elements down to one single value (adding all elemnents together)

//! THE MAP METHOD

const eurToUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});

console.log(movements);
console.log(movementsUSD);

//? arrow function ile:

const movementsArrow = movements.map(mov => mov * eurToUSD);
console.log(movementsArrow);

//? for of ile:

const newARR = [];
for (mov of movements) {
  newARR.push(mov * eurToUSD);
}
console.log(newARR);

//? diger parametrelerle birlikte kullanim :

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )} `
);

/* {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
} */

console.log(movementsDescriptions);

console.log("✂".repeat(40));

//! THE FILTER METHOD

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

//? for of ornegi:

const depositOf = [];
for (const mov of movements) {
  if (mov > 0) {
    depositOf.push(mov);
  }
}
console.log(depositOf);

console.log("✂".repeat(40));

//! THE REDUCE METHOD

console.log(movements);

//? returns one single value, not an array
//? accumulator --> SNOWBALL
//? callback function sonrasi, parametre olarak, acc'in ilk iteration'da baslayacak degerini aliyor. asagidaki ornekte : 0

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

//? arrow function ornegi:

const balanceArrow = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balanceArrow);

//? for of ornegi:

let total = 0;

for (const [i, mov] of movements.entries()) {
  total += mov;
  console.log(`Iteration ${i}: ${total}`);
}
console.log(total);

// Maximum value exercise

const maxVal = movements.reduce(function (acc, mov) {
  return mov > acc ? mov : acc;
}, movements[0]);

console.log(maxVal);

console.log("✂".repeat(40));

//! Coding Challenge #2

/* Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(humanAge);
  const adultDogs = humanAge.filter(age => age >= 18);
  console.log(adultDogs);
  const avarageHumanAge = adultDogs.reduce(function (acc, cur) {
    return acc + cur / adultDogs.length;
  }, 0);
  console.log(avarageHumanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log("✂".repeat(40));

//! THE MAGIC OF CHAINING METHODS

//? we can only chain a method after another one, if the first one returns an array.

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

console.log("✂".repeat(40));
//! Coding Challenge #3

/* Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

const calcArrow = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(adult => adult >= 18)
    .reduce((acc, average, i, arr) => acc + average / arr.length, 0);

const avg1 = calcArrow([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcArrow([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

console.log("✂".repeat(40));

//! THE FIND METHOD

//? filter'dan farkli olarak yeni bir array dondurmuyor. kosula gore buldugu ilk elementi donduruyor.

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);

//? for of ornegi:

for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") {
    console.log(acc);
  }
}

console.log("✂".repeat(40));

//! THE findIndex METHOD

//? find'dan farkli olarak buldugu elementi degil indexi getiriyor.
//? bankist clossing account kisminda ornek mevcut.

//! some and every METHODS

console.log(movements);

//? includes'dan farkli olarak, includes verilen parametrenin aynisina uyan bir element var mi diye bakarken, some aldigi callback function'da yazilan kosula gore arama yapip boolean sonuc donduruyor.

//? EQUALITY
console.log(movements.includes(-130));

//* SOME: CONDITION
console.log(movements.some(mov => mov === -130)); // aynisi
//? equality icin includes kullanmak daha mantikli.

//? some -> hic kosula uyan var mi?
const anyDeposits = movements.some(mov => mov > 0); // true
console.log(anyDeposits);

//* EVERY
//? every -> hepsi kosula uyuyor mu?
//? some'dan farkli olarak every array'deki tum elementler kosula uyuyorsa true donduruyor.

console.log(movements.every(mov => mov > 0)); // false

//* Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

console.log("✂".repeat(40));

//! flat and flatMap METHODS

const arrF = [[1, 2, 3], [4, 5, 6], 7, 8];

//* FLAT: icice gecmis bir arayi tek bir array'de birlestirmek icin kullanilir.
console.log(arrF.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //? lvl 2 parametre verilerek birlestirildi.

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//? chaining ile:

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

//* flatMap: flat() ile map() i tek bir methodda kombine ediyor.
//? aslinda islemin sonunda flat eden bir map methodu.
//? sadece one level deep gidebilir. daha derin bir flat islemi icin flat(4) kullanilmasi gerekir.

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);

console.log("✂".repeat(40));

//! SORTING ARRAYS: sort()

//* Strings

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
//? orjinal array'i mutate ediyor.
console.log(owners);

//* Numbers
console.log(movements);

/* movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
}); */
//******************* */
/* movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
}); */

//? return < 0, A, B (keep order)
//? return > 0, B, A (switch order)

//* Ascending (kucukten buyuge dogru)

movements.sort((a, b) => a - b);
//? a, b den buyukse pozitif rakamdir. kucukse negatif rakamdir.
console.log(movements);

//* Descending (buyukten kucuge dogru)

movements.sort((a, b) => b - a);

console.log(movements);

console.log("✂".repeat(40));

//! MORE WAYS OF CREATING AND FILLING ARRAYS

//* fill()

const x = new Array(7); //? 7 uzunlugunda array yarattik
x.fill(1); //? tamamini 1 ile doldurduk.
console.log(x);

const arrS = [1, 2, 3, 4, 5, 6, 7];
arrS.fill(23, 2, 6); //? burda slice() gibi mutate ediyor.
console.log(arrS);

//* Array.from()

//? parametre olarak {length: }, map callback

const y = Array.from({ length: 7 }, () => 1); //? hepsini 1 ile dolrdu.
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //? [1,2,3,4,5,6,7]
console.log(z);

//? Exercise: 100 adet random rakam iceren array - 1den 100e kadar

const randomArray = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random(1) * 100) + 1
);
console.log(randomArray);

//* Array.from() ile UI'dan movements cekip, array'e donusturmek:
//? ilk parametre olarak donusturulecek obje, ikinci parametre map

//? balance etiketine tiklandiginda, ui'dan belirtilen class'daki tum verileri isaretleyip, sonundaki £ isaretini kaldirip ARRAY'e donusturduk.
//? querySelectorAll() array'e benzeyen bir nodeList dondurdugu icin, kolaylikla Array.from() ile gercek array'e donusturulebiliyor.

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    el => Number(el.textContent.replace("£", ""))
  );
  console.log(movementsUI);
});

//? destructuring ile de ayni islem yapilabilir. fakat map methodu ayri yazilmasi gerekior.

const movementsUI2 = [...document.querySelectorAll(".movements__value")].map(
  el => el.textContent.replace("€", "")
);

console.log(movementsUI2);

console.log("✂".repeat(40));

//! WHICH ARRAY METHOD TO USE?

//* Want to mutate original array

// Add to original:
//? .push(), unshift()

// Remove from original:
//? pop(), shift(), splice()

// Others:
//? reverse(), sort(), fill()

//************************************************************ */

//* Want a new array

// Computed from original:
//? map() (loop)

// Filtered using coindition:
//? filter()

// Portion of original:
//? slice()

// Adding original to other:
//? concat()

// Flattening the original:
//? flat(), flatMap()

//************************************************************ */

//* Want an array index

// Based on value:
//? indexOf()

// Based on test condition:
//? findIndex()

//************************************************************ */

//* Want an array element

// Based on test condition:
//? find()

//************************************************************ */

//* Want to know if array includes

// Based on value:
//? includes()

// Based on test condition:
//? some(), every()

//************************************************************ */

//* Want a new string

// Based on separator string:
//? join()

//************************************************************ */

//* Want to transform to value

// Based on accumulator:
//? reduce()
//? Boil down array to single value of any type: number, string, boolean, or even new array or object

//************************************************************ */

//* Want to just loop array

// Based on callback:
//? forEach()
//? Does not create a new array, just loops over it
