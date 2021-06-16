"use strict";

///////////////////////////////////////
//? Selections

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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
