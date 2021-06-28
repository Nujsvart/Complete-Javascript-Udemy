"use strict";

//! ASYNCHRONUS JAVASCRIPT, AJAX AND APIs

//* Synchronous

//? Most code is synchronous
//? Synchronous code is executed line by line
//? Each line of code waits for previous line to finish

//* Asynchronous

//? Asynchronous code is executed after a task that runs in the "background" finishes
//? Asynchronous code is non-blocking // setTimeout()
//? Execution doesn't wait for an asynchronous task to finish its work
//? addEventListener and Callback functions alone do NOT make code asynchronous

//? Asynchronous programming coordinating behavior of a program over a period of time
//? Asynchronous literally means not occuring at the same time

//* AJAX

//? Asynchronous Javascript And XML: Allows us to communicate with remote web servers in an synchronous way. With AJAX calls, we can request data from web servers dynamically.

//* How Ajax Works:

//? With ajax, we can do an HTTP request to the server, which has this data. And the server will then set back a response containing that data we requested. And this back and forth between Client and server all happens assynchronously in the background.

//? There can even be different types of requests, like get requests to receive data or post requests to send data to a server.

//* API

//? Application Programming Interface: Piece of software thaht can be used by another piece of software, in order to allow applications to talk to each other.

//? There are be many types of APIs in web development: DOM API, Geolocation API, Own Class API, Online API

//? Online API: Application running on a server, that receives requests for data, and sends data back as response

//? We can build our own web APIs (requites back-end development, e.g. with node.js) or use 3rd-party APIs.

//? There is an API fpr everything:
//? Weather data, Data about countries, Flights data, Currency conversion data, APIs for sending email or SMS, Google Maps, Millions of possibilities...

//? Most popular API data format --> JSON data format

//! OUR FIRST AJAX CALL: XMLHttpRequest

