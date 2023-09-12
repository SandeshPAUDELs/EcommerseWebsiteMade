/* 
const userId = 5;
const apiUrl = `https://dummyjson.com/carts/user/${userId}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Now 'data' contains the user's cart information
  })
  .catch((error) => {
    console.error('Error:', error);
  });
 */


document.addEventListener('DOMContentLoaded', () => {
  fetch('https://dummyjson.com/carts/user/5')
      .then(res => {
          if (res.ok) {
              return res.json();
          } else {
              throw new Error('Failed to fetch user details');
          }
      })
      .then(cartData => {
          const CartInfoContainer = document.getElementById('Cart-Items');

          const userDiv = document.createElement('table');
          userDiv.classList.add('cart-info');
          const cartItemsContainer = document.createElement('tbody');
          cartItemsContainer.classList.add('cart-items');
          cartData.carts[0].products.forEach(product => {
              const productDiv = document.createElement('tr');
              productDiv.classList.add('product');

              const productTitle = document.createElement('td');
              productTitle.textContent = product.title;

              const productPrice = document.createElement('td');
              productPrice.textContent = `Price: Rs${product.price.toFixed(2)}`;

              const productQuantity = document.createElement('td');
              productQuantity.textContent = `Quantity: ${product.quantity}`;

              const productTotal = document.createElement('td');
              productTotal.textContent = `Total: Rs${(product.price * product.quantity).toFixed(2)}`;

              productDiv.appendChild(productTitle);
              productDiv.appendChild(productPrice);
              productDiv.appendChild(productQuantity);
              productDiv.appendChild(productTotal);

              cartItemsContainer.appendChild(productDiv);
          });
          userDiv.appendChild(cartItemsContainer);

          CartInfoContainer.appendChild(userDiv);

          console.log(cartData)
      })
      .catch(error => {
          console.error(error);
      });
});
