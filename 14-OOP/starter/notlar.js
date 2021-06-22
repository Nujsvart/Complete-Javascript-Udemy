"use strict";

//! What is Object Oriented Programming?

//* Abstraction
//? Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.
//? Ornek olarak addEventListener fonksiyonun arka planda nasil calistigi detayini onemsemioruz, sadece kullanioruz.

//* Encapsulation
//? Keeping properties and methods private inside the class, so they are not accesible from outside the class. Some methods can be exposed as a public intterface (API).

//* Inheritance
//? Parent Class -> Child Class
//? Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

//* Polymorphism
//? A child class can overwrite a method it inherited from a parent class.

//! OOP IN JAVASCRIPT

//* Prototypes

//? Objects are linked to a prototype object
//? Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype.

//* 1 - Constructor functions

//? Technique to create objects from a function
//? This is how built-in objects like Arrays, Maps or Sets are actually implemented

//* 2 - ES6 Classes

//? Modern alternative to constructor function syntax
//? "Syntactic sugar": behind the scenes, ES6 classes work exactyly like constructor functions
//? ES6 classes do NOT behave like classes in "classical OOP"

//* 3 - Object.create()

//? The easiest and most straightforward way of linking an object to prototype object.

//! Constructor Functions and the new Operator

//? Arrow function, kendi this keyword'u olmadigi icin, constructor function tanimlamak icin kullanilamior.

//? constructor function 'new' operatoru ile cagirilir.
//* new operatoru ile cagirildiginda sirasiyla:
//? 1. Yeni bir bos obje yaratilir. => {}
//? 2. Fonksiyon cagirilir, this keyword'u o obje olur => this = {}
//? 3. Bu obje prototype'e baglanir.
//? 4. Fonksiyon otomatik olarak objeyi return eder.

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside constructor
  /*     this.calcAge = function () {
        console.log(2037 - this.birthYear);
    } */
};

const esra = new Person("Esra", 1985);
console.log(esra);

const duman = new Person("Duman", 2014);
console.log(duman);

console.log(esra instanceof Person); // true

//! PROTOTYPES

console.log(Person.prototype);

//? Method'lari prototype icinde olustur:
//? Person constructor'indan yaratilan tum objeler bu methoda erisebilir.

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

duman.calcAge();

console.log(esra.__proto__);
console.log(esra.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(esra)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo Sapiens";
console.log(esra.species);

console.log(esra.hasOwnProperty("firstName")); // true
console.log(esra.hasOwnProperty("species")); // false


//! PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN

//? Object [esra] (__proto__ : Person.prototype) -> 
//? Prototype [Person] -> (__proto__: Object.prototype) -> 
//? Prototype [Object](__proto__: null)

//? {...} === new Object(...) // Built-in contructor function for objects. This is used when we write an object literal.

