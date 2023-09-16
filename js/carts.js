

document.addEventListener('DOMContentLoaded', () => {
  const userData = JSON.parse(localStorage.getItem('userloginData'));

  if (!userData) {
    console.error('User data not found in local storage.');
    return;
  }

  const userId = userData.id;
  
  fetch(`https://dummyjson.com/users/${userId}/carts`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Failed to fetch cart items');
      }
    })
    .then(cartData => {
  if(cartData && cartData.carts && cartData.carts.length > 0) {
      const CartInfoContainer = document.getElementById('Cart-Items');
      const mainContainer = document.createElement('div');
      mainContainer.classList.add('main-container');
      

      const userTable = document.createElement('table');
      userTable.classList.add('cart-info');

      const tableHeader = document.createElement('thead');
      const headerRow = document.createElement('tr');

      const columns = ['Product', 'Price', 'Quantity', 'Total'];

      columns.forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName;
        headerRow.appendChild(th);
      });

      tableHeader.appendChild(headerRow);

      const cartItemsContainer = document.createElement('tbody');
      cartItemsContainer.classList.add('cart-items');

      cartData.carts[0].products.forEach(product => {
        const productRow = document.createElement('tr');
        productRow.classList.add('product');

        const productTitle = document.createElement('td');
        productTitle.textContent = product.title;

        const productPrice = document.createElement('td');
        productPrice.textContent = `Rs ${product.price.toFixed(2)} /-`;

        const productQuantity = document.createElement('td');
        productQuantity.textContent = product.quantity;

        const productTotal = document.createElement('td');
        const totalPrice = (product.price * product.quantity).toFixed(2);
        productTotal.textContent = `Rs ${totalPrice} /-`;

        productRow.appendChild(productTitle);
        productRow.appendChild(productPrice);
        productRow.appendChild(productQuantity);
        productRow.appendChild(productTotal);

        cartItemsContainer.appendChild(productRow);
      });

      userTable.appendChild(tableHeader);
      userTable.appendChild(cartItemsContainer);
      tableHeader.appendChild(headerRow);

      const purchasePriceSection = document.createElement('div');
      purchasePriceSection.classList.add('PurchasePrice');
      purchasePriceSection.innerHTML = `
        <div class="card shadow-0 border">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="mb-2">Total Price</p>
              <p class="mb-2 text-success">Rs ${cartData.carts[0].total}</p>
            </div>
            <div class="d-flex justify-content-between">
            <p class="mb-2">Discount:</p>
          </div>
            <div class="d-flex justify-content-between">
              <p class="mb-2">Price After Discount:</p>
              <p class="mb-2" id="totalPrice">Rs ${cartData.carts[0].discountedTotal}</p>
            </div>
            <div class="mt-3">
              <a href="payment.html" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
              <a href="checkout.html" class="btn btn-light w-100 border mb-2">Check Out</a>
            </div>
          </div>
        </div>
      `;

      mainContainer.appendChild(userTable);
      mainContainer.appendChild(purchasePriceSection);

      CartInfoContainer.appendChild(mainContainer);

      console.log(cartData);
    }
    else {

      Swal.fire('This user has no cart items.')

    }
    })
    .catch(error => {
      console.error(error);
    });
});





// document.addEventListener('DOMContentLoaded', () => {
//   const userData = JSON.parse(localStorage.getItem('userloginData'));

//   if (!userData) {
//     console.error('User data not found in local storage.');
//     return;
//   }

//   const userId = userData.id;

// fetch(`https://dummyjson.com/users/${userId}/carts`)
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error('Failed to fetch cart items');
//     }
//   })
//   .then(cartData => {
//     if (cartData && cartData.carts && cartData.carts.length > 0) {
//       const CartInfoContainer = document.getElementById('Cart-Items');
//       const mainContainer = document.createElement('div');
//       mainContainer.classList.add('main-container');
      

//       const userTable = document.createElement('table');
//       userTable.classList.add('cart-info');

//       const tableHeader = document.createElement('thead');
//       const headerRow = document.createElement('tr');

//       const columns = ['Product', 'Price', 'Quantity', 'Total'];

//       columns.forEach(columnName => {
//         const th = document.createElement('th');
//         th.textContent = columnName;
//         headerRow.appendChild(th);
//       });

//       tableHeader.appendChild(headerRow);

//       const cartItemsContainer = document.createElement('tbody');
//       cartItemsContainer.classList.add('cart-items');

//       cartData.carts[0].products.forEach(product => {
//         const productRow = document.createElement('tr');
//         productRow.classList.add('product');

//         const productTitle = document.createElement('td');
//         productTitle.textContent = product.title;

//         const productPrice = document.createElement('td');
//         productPrice.textContent = `Rs ${product.price.toFixed(2)} /-`;

//         const productQuantity = document.createElement('td');
//         productQuantity.textContent = product.quantity;

//         const productTotal = document.createElement('td');
//         const totalPrice = (product.price * product.quantity).toFixed(2);
//         productTotal.textContent = `Rs ${totalPrice} /-`;

//         productRow.appendChild(productTitle);
//         productRow.appendChild(productPrice);
//         productRow.appendChild(productQuantity);
//         productRow.appendChild(productTotal);

//         cartItemsContainer.appendChild(productRow);
//       });

//       userTable.appendChild(tableHeader);
//       userTable.appendChild(cartItemsContainer);
//       tableHeader.appendChild(headerRow);

//       const purchasePriceSection = document.createElement('div');
//       purchasePriceSection.classList.add('PurchasePrice');
//       purchasePriceSection.innerHTML = `
//         <div class="card shadow-0 border">
//           <div class="card-body">
//             <div class="d-flex justify-content-between">
//               <p class="mb-2">Total Price</p>
//               <p class="mb-2 text-success">Rs ${cartData.carts[0].total}</p>
//             </div>
//             <div class="d-flex justify-content-between">
//             <p class="mb-2">Discount:</p>
//           </div>
//             <div class="d-flex justify-content-between">
//               <p class="mb-2">Price After Discount:</p>
//               <p class="mb-2" id="totalPrice">Rs ${cartData.carts[0].discountedTotal}</p>
//             </div>
//             <div class="mt-3">
//               <a href="payment.html" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
//               <a href="checkout.html" class="btn btn-light w-100 border mb-2">Check Out</a>
//             </div>
//           </div>
//         </div>
//       `;

//       mainContainer.appendChild(userTable);
//       mainContainer.appendChild(purchasePriceSection);

//       CartInfoContainer.appendChild(mainContainer);

//       console.log(cartData);

//     } else {
//       console.error('Cart data is empty or missing.');
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });
// });





