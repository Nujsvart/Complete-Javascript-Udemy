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
