// var cartItems = [];
// var totalPrice = 0;


const Navs = document.querySelector(".nav-list");
const cart = document.querySelector(".cart-dis")
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  //  e.preventDefault();
  Navs.classList.add('focused')
  console.log(e, Navs)
}

function closeNav() {
  Navs.classList.remove('focused')
  console.log(e, Navs)
}
// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }

function openCart() {

  cart.classList.toggle('showCart')
  console.log(e, cart)
}





// // Get references to the anchor tag and the target div
// var anchor = document.getElementById("cart");
// var div = document.getElementsByClassName("cart-dis");

// // Add a click event listener to the anchor tag
// anchor.addEventListener("click", function () {
//   // Display the target div by modifying its CSS display property
//   div.style.display = "block";
// });

