//? Importing module
//import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
console.log("Importing module");

//console.log(shippingCost); //? calismiyor cunku moduldeki variable'lar private'tir. kullanmak istedigimizde export etmeliyiz.

//addToCart("bread", 5); //? import edilen function'u calistirdik.

//console.log(price, tq);

//**************************** */

/* import * as ShoppingCart from "./shoppingCart.js"; //? shoppingCart modulundeki herseyi ShoppingCart ismiyle bir OBJENIN icine import et.

ShoppingCart.addToCart("bread", 5);

console.log(ShoppingCart.totalPrice); */

import add, { cart } from "./shoppingCart.js"; //? default export'u import etmek.
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart); //? modulun icindeki gercek cart arrayini mutate ediyoruz. (live connection)

//? imports are not copies of exports. they are instead like a live connection.

//! THE MODULE PATTERN

//? Moduldeki elemanlari IEFE fonskiyon icinde tanimlayip, public olmasini istediklerimizi obje olarak donduruyoruz.

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
console.log(ShoppingCart2);

//! Introduction to NPM

/* import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "pizza", quantity: 5 },
    { product: "bread", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
 */