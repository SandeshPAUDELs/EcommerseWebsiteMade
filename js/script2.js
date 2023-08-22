
// const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         alert("Added to cart!");
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
//     const cart = [];
  
//     if (localStorage.getItem('cart')) {
//         cart = JSON.parse(localStorage.getItem('cart'));
//     }
  
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const productDiv = this.closest('.card');
//             const productName = productDiv.querySelector('.nav-link').textContent;
//             const isProductAdded = cart.some(item => item.name === productName);
  
//             if (isProductAdded) {
//                 alert("Product is already in the cart.");
//             } else {
//                 const productImage = productDiv.querySelector('.card-img-top').getAttribute('src');
//                 const productPrice = productDiv.querySelector('.price-wrap strong').textContent;
  
//                 cart.push({
//                     name: productName,
//                     image: productImage,
//                     price: productPrice
//                 });
  
//                 localStorage.setItem("cart", JSON.stringify(cart));
//             }
//         });
//     });
//   });
document.addEventListener('DOMContentLoaded', function () {
    const selectedProductDiv = document.getElementById('selected-product');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    function updateCart(productName, productImage, productPrice) {
      const existingItem = cartItems.find(item => item.name === productName);
      
      if (existingItem) {
        alert("Item is already in the cart.");
        return;
      }
      
      cartItems.push({
        name: productName,
        image: productImage,
        price: productPrice
      });
  
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert("Added to cart!");
    }
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productDiv = this.closest('.card');
        const productName = productDiv.querySelector('.card-title').textContent;
        const productImage = productDiv.querySelector('.card-img-top').getAttribute('src');
        const productPrice = productDiv.querySelector('.card-text').textContent;
        
        updateCart(productName, productImage, productPrice);
      });
    });
  });
