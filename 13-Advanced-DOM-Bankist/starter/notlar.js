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
/* header.append(message); */ //? append last child olarak ekler
//? bu iki method eklemek disinda elementleri oynatmak icin de kullanilir.
//? ayni zamanda sadece bir tanesi gecerli olacaktir.

/* header.append(message.cloneNode(true)); */ //? prepend ile ayni anda kullanmak icin klonlanabilir.

/* header.before(message); */ //? header elementinden once sibling olarak ekler.
/* header.after(message); */ //? header elementinden sonra sibling olarak ekler.

//* Delete elements
// remove()

/* document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  }); */

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

/* document.documentElement.style.setProperty("--color-primary", "orangered"); */ //? --color-primary var'i orangered yapildi.

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

//! IMPLEMENTING SMOOTH SCROLLING

/* const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1"); */

//? getBoundingClientRect() uygulandigi elementin viewporta gore koordinatlarini aliyor.

/* btnScrollTo.addEventListener("click", function (e) { */
/* const s1coords = section1.getBoundingClientRect(); */
//? section1'in koordinatlari:
/* console.table(s1coords); */

//? button'un koordinatlari:
/* console.table(e.target.getBoundingClientRect()); */

//? tum html dokumanina gore, yukardan 0, left 0 baslayarak hesaplanan koordinat:
/* console.log("Current scroll (X,Y)", window.pageXOffset, window.pageYOffset); */

//? sayfanin viewport'a gore hesaplanan yukseklik ve genisligi
/* console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
 */
//* Scrolling

//! Eski yontem ile hesaplayarak yapmak:

//? scrollTo(left koord, top koord)
//? hesaplanmasi: section1'in left ve top koordinatlari + html'e gore hesaplanan koordinatlar.
/*   window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  ); */

//? smooth scrolling (behavior)

/*   window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  }); */

//! Modern yontem:
//? element.scrollIntoView({behavior: "smooth"})
//? hesaplamaya gerek yok.

/* section1.scrollIntoView({ behavior: "smooth" }); */
/* }); */

console.log("✂".repeat(30));

//! TYPES OF EVENTS AND EVENT HANDLERS

//? mouseenter --> :hover

// const h1 = document.querySelector("h1");

/* h1.addEventListener("mouseenter", function (e) {
  alert("addEventListener: Great! You are reading the heading :D");
}) */

//? event listener olusturduktan sonra, onu birkez kullanip devredisi birakmak icin: removeEventListener iceren callback'i disarda tanimladiktan sonra arguman olarak verilir.

/* const alertH1 = function (e) {
  alert("Great! You are reading the heading :D");

  h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1); */

//? belli bir zaman sonra remove etmek icin :

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

//? MDN events javascript

console.log("✂".repeat(30));

//! EVENT PROPAGATION: BUBBLING AND CAPTURING PRACTICE

//? random color:
// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

/* console.log(randomColor());
 */

/* document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  //? Stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();

});
 */
//? en icteki element tum parentlerinin AYNI tanimlanmis eventini calistiriyor.
//? e.stopPropagation() ile bu onlenebiliyor.

console.log("✂".repeat(30));

//! DOM TRAVERSING

const h1 = document.querySelector("h1");

//* Going downwards: child

console.log(h1.querySelectorAll(".highlight")); //? h1 elementinin .hightlight classina sahip childlari secildi. h1 > .hightlight gibi

console.log(h1.childNodes); //? nodeList donduruyor. tum gereksiz nodelari da icerior.

console.log(h1.children); //? htmlCollection. sadece child olan elementler.

console.log(h1.firstElementChild); //? h1'in ilk child elementi
console.log(h1.lastElementChild); //? h1'in son child elementi

//* Going upwards : parents

console.log(h1.parentNode); //? h1'in parenti
console.log(h1.parentElement); //? h1'in parenti. bunu kullan

//? closest() -- important

console.log(h1.closest(".header")); //? h1'e en yakin olan .header classli element

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)"; //? h1'e en yakin olan h1 kendisi.

//* Going sideways : siblings

console.log(h1.previousElementSibling); //? h1'in kendinden once gelen kardes elementi.
console.log(h1.nextElementSibling); //? h1'in kendinden sonra gelen kardes elementi

console.log(h1.parentElement.children); //? h1'in tum kardes elementleri. oncne h1'in parentini secip, o parentin tum cocuk elementlerini yazdirdik.

//? htmlCollection'u array'e cevirip forEach kullanabiliriz:

/* [...h1.parentElement.children].forEach(el =>
  el !== h1 ? (el.style.transform = "scale(0.5)") : el
); */
