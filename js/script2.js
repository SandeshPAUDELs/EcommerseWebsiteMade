document.addEventListener('DOMContentLoaded', function () {
  const selectedProductDiv = document.getElementById('selected-product');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart(productName, productImage, productPrice) {
    const existingItem = cartItems.find(item => item.name === productName);
    
    if (existingItem) {
      // alert("Item is already in the cart.");
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Items is already in the cart',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return;
    }
    
    cartItems.push({
      name: productName,
      image: productImage,
      price: productPrice
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
    // alert("Added to cart!");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is added to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productDiv = this.closest('.card');
      const productName = productDiv.querySelector('.card-text').textContent;
      const productImage = productDiv.querySelector('.card-img-top').getAttribute('src');
      const productPrice = productDiv.querySelector('.card-title').textContent;
      
      updateCart(productName, productImage, productPrice);
    });
  });
});

// Add to cart in Shopping cart.html
