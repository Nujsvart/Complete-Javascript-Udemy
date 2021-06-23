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

console.log(esra.hasOwnProperty("fullName")); // true
console.log(esra.hasOwnProperty("species")); // false

//! PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN

//? Object [esra] (__proto__ : Person.prototype) ->
//? Prototype [Person] -> (__proto__: Object.prototype) ->
//? Prototype [Object](__proto__: null)

//? {...} === new Object(...) // Built-in contructor function for objects. This is used when we write an object literal.

//! PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

console.log(esra.__proto__); // Person.prototype
console.log(esra.__proto__.__proto__); // Object.prototype (top of prototype chain)
console.log(esra.__proto__.__proto__.__proto__); // null

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // Object.prototype (top)

//? Array'in prototype'ine etki ederek method olusturmak (Kullanma)

/* Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); */

const h1 = document.querySelector("h1");
console.dir(x => x + 1);

//! ES6 CLASSES

//? JavaScript'te classlar fonksiyonlarin farkli bir turudur.

// class expression
// const PersonCl = class {}

// class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //! Instance Methods
  // Methods will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //! Set a property that already exists

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //! Static method
  //? Objelerden erisilemiyor

  static hey() {
    console.log("Hey there");
    // console.log(this) // PersonCl
  }
}

//? all of these methods that we write in the class, outside of the constructor, will be on the prototype of the objects.

const jessica = new PersonCl("Jessica Davis", 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype); // true

console.log(jessica.age); //? getting
console.log(jessica.fullName);
console.log(jessica._fullName);

/* PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
}
 */
jessica.greet();
PersonCl.hey(); //! Static method

//? 1. Classes are NOT hoisted
//? 2. Classes are first-class citizes (fonksiyonlara arguman olarak verilebilir, return edilebilir)
//? 3. Classes are executed in strict mode

//! SETTERS AND GETTERS

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //? getting

account.latest = 50; //? setting
console.log(account.movements);

//! Object.create()

//?? Class inheritance icin kullaniliyor.

//? Onceden yazilan prototype'i Object.create() ile kopyalayarak yeni obje olusturuyoruz.

//? Prototype ->

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); //? steven objesi`nin protosu PersonProto'nun fonksiyonlarini kopyaladi.
console.log(steven); //? Su anda bos bir obje

//? Manual olarak propertyleri giriyoruz
steven.name = "Steven";
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979); //? propertyleri init fonksiyonu ile ayarladik.
sarah.calcAge();

//! INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS

/*const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; */

const Student = function (firstName, birthYear, course) {
  /*   this.firstName = firstName;
  this.birthYear = birthYear; */
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//? Burada Person.prototype dan inherit oluyor fakat objeleri farkli oluyor.
//! Linking Prototypes

Student.prototype = Object.create(Person.prototype); //? empty object, methodlari sonradan eklemek gerekiyor. asagidaki gibi.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");

mike.introduce();
mike.calcAge(); //? inherit yoluyla Person classinin bu methoduna eristik.

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); // true

Student.prototype.constructor = Student; //? Onceden Person gosterdigi icin fixledik.

console.dir(Student.prototype.constructor);

//! INHERITANCE BETWEEN CLASSES: ES6 CLASSES
//* extends - super()

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //? mutlaka once super() (parent) cagirmak gerekiyor.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //? Polymorphsism (Overwrite)
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
console.log(martha);

martha.introduce();
martha.calcAge();

//! INHERITANCE BETWEEN CLASSES: Object.create()

const StudentProto = Object.create(PersonProto); //? PersonProto'dan inherit edildi.

//? constructor
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

//? method
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); //? StudentProto'dan inherit edildi.
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();

//! ANOTHER CLASS EXAMPLE

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //? input olmadan tanimlayabiliyoruz.
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
