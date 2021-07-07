"use strict";

//! An Overview of Modules in JavaScript

//? Module: Reusable piece of code that encapsulates implementation details.

//? IMPORT (Dependency) // EXPORT (Public API)

//* Why Modules?

//? Compose Software: Modules are small building blocks that we put together to build complex applications

//? Isolate components: Modules can be developed in isolation without thinking about the entire codebase.

//? Abstract code: Implement low-level code in modules and import these abstractions into other modules.

//? Organized code: Modules naturally lead to a more organized codebase.

//? Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

//! Writing Clean and Modern JavaScript

//* Readable Code
//? Write code so that others can understand it
//? Write code so that you can understand it in 1 year
//? Avoid too "clever" and overcomplicated solutions
//? Use descriptive variable names: what they contain
//? Use descriptive function names: what tey do

//* General
//? Use DRY principle (refactor your code)
//? Don't pollute global namespace, encapsulate instead
//? Don't use var
//? Use strong type checks (=== and !==)

//* Functions
//? Generally, functions should do only one thing
//? Don't use more than 3 function parameters
//? Use default parameters whenever possible
//? Generally, return same data type as received
//? Use arrow functions when they make code more readable

//* OOP
//? Use ES6 classes
//? Encapsulate data and don't mutate it from outside the class
//? Implement method chaining
//? Do not use arrow functions as methods (in regular objects) (this)

//* Avoid Nested Code
//? Use early return (guard clauses)
//? Use ternary (conditional) or logical operators instead of if
//? Use multiple if instead of if/else-if
//? Avoid for loops, use array methods instead
//? Avoid callback-based asynchronous APIs

//* Asynchronous Code
//? Consume promises with async/await for best readability
//? Whenever possible, run promises in parallel (Promise.all)
//? Handle errors and promise rejections

//! Declarative and Functional JavaScript Principles

//* Two Fundamentally Different Ways of Writing Code (Paradigms) IMPERATIVE - DECLARATIVE

//* Imperative:
//? Programmer explains " HOW to do things"
//? We explain the computer every single step it has to follow to achieve a result
//? Example: Step-by-step recipe of cake

/* const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled[i] = arr[i] * 2;
}
 */

//* Declarative:
//? Programmer tells "WHAT to do"
//? We simply describe the way the computer should achieve the result
//? The HOW (step-by-step instructions) gets abstracted away
//? Example: Description of a cake

/* const arr = [2, 4, 6, 8];
const doubled = arr.map(n => n * 2); */

//* FUNCTIONAL PROGRAMMING

//? Declarative programming paradigm
//? Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data

//* Side effect: Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc.)

//* Pure function: Function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs.

//* Immutability: State (data) is never modified! Instead state is copied and the copy is mutated and returned.

//! Functional Progrraming Techniques
//? Try to avoid data mutations
//? Use build-in methods that don't produce side effects
//? Do data transformations with methods such as .map(), .filter(), and .reduce()
//? Try to avoid side effects in functions: this is of course not always possible!

//* Declarative Syntax
//? Use array and object destructuring
//? Use the spread operator (...)
//? Use the ternary (conditional) operator
//? Use template literals