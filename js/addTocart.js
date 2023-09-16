//funtion to implement add to cart logic 
function addToCart(button) {
  const productId = button.getAttribute('data-product-id');
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cartData.find(item => item.productId === productId);
  if (existingItem) {
    // existingItem.quantity++;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is already in the cart',
      showConfirmButton: false,
      timer: 1000
    })
  } else {
    const newItem = {
      productId: productId,
      quantity: 1,
    };
    cartData.push(newItem);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is added to cart',
      showConfirmButton: false,
      timer: 1000
    })
  }
  localStorage.setItem('cart', JSON.stringify(cartData));
  displayProductsFromLocalStorage();
}


// Function to display products
function displayProductsFromLocalStorage() {
  const productDisplayContainer = document.getElementById('product-container');
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];

  if (Array.isArray(cartData) && cartData.length > 0) {
    cartData.forEach(item => {
      const productTitle = item.title; 
      const productCategory = item.category; 
      const productPrice = item.price;
      const productQuantity = item.quantity;

      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <div class="product">
          <h3>${productTitle}</h3>
          <p>Category: ${productCategory}</p>
          <p>Price: Rs. ${productPrice.toFixed(2)}</p>
          <p>Quantity: ${productQuantity}</p>
        </div>
      `;

      productDisplayContainer.appendChild(productElement);
    });
  } else {
    productDisplayContainer.innerHTML = '<p>Your cart is empty.</p>';
  }
}
displayProductsFromLocalStorage();