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

//! STYLES, ATTRIBUTES AND CLASSES

//* STYLES

message.style.backgroundColor = "#37383d";
message.style.width = "107%";

console.log(message.style.color); //? css dosyasinda tanimlanmis degere erisilemiyor.

/* console.table(getComputedStyle(message)); */ //? css dosyasinda message elementine tanimlanmis tum stilleri gosteren fonksiyon.
console.log(getComputedStyle(message).color); //? sadece color.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"; //? css de tanimlanmis heighti alip ustune ekledik.

//* css dosyasinda tanimlanmis variable'in degerini degistirmek:
//* document.documentElement ==> :root

document.documentElement.style.setProperty("--color-primary", "orangered"); //? --color-primary var'i orangered yapildi.

//* ATTRIBUTES

const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //? alt attribute'una erismek
console.log(logo.src); //? src attribute'u
console.log(logo.className); //? class attr

logo.alt = "Beautiful minimalist logo";

logo.setAttribute("company", "Bankist"); //? company adinda attr yaratip bankist valuesi verildi.
console.log(logo.getAttribute("company")); //? bankist

console.log(logo.src); //? absolute URL
console.log(logo.getAttribute("src")); //? relative URL

const link = document.querySelector(".twitter-link");

console.log(link.href);
console.log(link.getAttribute("href")); //? ikisi de absolute URL

//* Data attributes

console.log(logo.dataset.versionNumber); //? data-version-number attr. (dataset objesinin icinde) UI'da html kodunda data store etmek icin kullanilir.

//* CLASSES

logo.classList.add("c", "j"); //? class ekle
logo.classList.remove("c", "j"); //? class sil
logo.classList.toggle("c"); //? class goster/kapat
logo.classList.contains("c"); //? class icerior mu?

//? bunu kullanma! yukaridakileri kullan.
/* logo.className = 'kullanma'; */

console.log("✂".repeat(30));
