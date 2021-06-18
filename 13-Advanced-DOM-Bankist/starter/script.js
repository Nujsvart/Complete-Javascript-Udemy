"use strict";

///////////////////////////////////////
//? Selections

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");
//********************************************************************* */

//? Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//********************************************************************* */

//! Implementing Smooth Scrolling

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

//! EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

/* document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href"); //? o anki el'in href valuesunu aldik.
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
 */

//? 1. Add event listener to common parent element
//? 2. Determine what element oroginated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //? Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//! Building a Tabbed Component

// tabs.forEach(t => t.addEventListener("click", () => console.log("TAB"))); //? slow down the page

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //? Guard clause
  if (!clicked) return;

  //? Active tab
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));
  clicked.classList.add("operations__tab--active");

  //? Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//! Passing Arguments to Event Handlers

//? mouseover, mouseenter ile ayni. tek farki mouseover bubble olabiliyor.

//* Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

//? Event handler function'i sadece tek bir arguman alabilir. Eger baska valuelar gondermek istiyorsak, bunu addEventListener'da function'i bind ile tanimlayarak, arguman olarak istedigimiz degeri gondeririz. Ayri olusturdugumuz event handler functionunda ise bu value'leri this keywordu ile yakalariz. (Closure function ile de olabilir)

//! Intersection Observer API (Sticky Nav)

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

//? Callback fonksiyonu:

const stickyNav = function (entries) {
  const [entry] = entries; //? entries[0]
  //console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
  //? intersecting false oldugunda (header ekrandan ciktiginda) sticky classini ekle. ekrana girdiginde classi sil.
};

//? Observer tanimlama ve options:

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //? margin'i dinamik olarak ayarladik
});

//? Hedef belirleyip izlemek:

headerObserver.observe(header);

//! Revealing Elements on Scroll

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target); //? islem bittiginde o anki target icin observe islemini durdur.
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
