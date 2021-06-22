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

//* ES6 Classes

//? Modern alternative to constructor function syntax
//? "Syntactic sugar": behind the scenes, ES6 classes work exactyly like constructor functions
//? ES6 classes do NOT behave like classes in "classical OOP"

//* Object.create()

//? The easiest and most straightforward way of linking an object to prototype object.



