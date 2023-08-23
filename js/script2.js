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


