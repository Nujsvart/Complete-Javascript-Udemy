"use strict";

//! SELECTING, CREATING AND DELETING ELEMENTS

//* Selecting Elements

console.log(document.documentElement); //? tum html sayfasi
console.log(document.head); //? head
console.log(document.body); //? body

const header = document.querySelector(".header"); //? .header'la uyusan ilk element
const allSections = document.querySelectorAll(".section"); //? section'la uyusan tum elementler
console.log(allSections); //? NodeList olarak donuyor

document.getElementById("section--1"); //? id'ye gore

const allButtons = document.getElementsByTagName("button"); //? tag'i button olan tum elementler.
console.log(allButtons); //? HTML collection olarak donuyor.

document.getElementsByClassName("btn"); //? class'i btn olan tum elementler

//* Creating and Inserting Elements
// .insertAdjacentHTML

const message = document.createElement("div"); //? div el olusturduk.
message.classList.add("cookie-message"); //? class ekledik
/* message.textContent = "We use cookies for improved functionality and analytics."; */
message.innerHTML = `We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>`; //? innerHTML ile html kodu yazilabilir.

/* header.prepend(message); */ //? prepend first child olarak ekler
header.append(message); //? append last child olarak ekler
//? bu iki method eklemek disinda elementleri oynatmak icin de kullanilir.
//? ayni zamanda sadece bir tanesi gecerli olacaktir.

/* header.append(message.cloneNode(true)); */ //? prepend ile ayni anda kullanmak icin klonlanabilir.

/* header.before(message); */ //? header elementinden once sibling olarak ekler.
/* header.after(message); */ //? header elementinden sonra sibling olarak ekler.

//* Delete elements
// remove()

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

console.log("✂".repeat(30));
