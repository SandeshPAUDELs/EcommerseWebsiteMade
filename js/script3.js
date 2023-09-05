function fetchDataAndDisplay(url, displayFunction) {
  fetch(url)
      .then(res => res.json())
      .then(data => displayFunction(data))
      .catch(error => console.error('Error fetching data:', error));
}

function displayProducts(data) {
  const productDisplayRow = document.getElementById('product-details');
  const products = data.products;

  if (Array.isArray(products)) {
      let currentRow = null;
      products.forEach((product, index) => {
          if (index % 3 === 0) {
              currentRow = document.createElement('div');
              currentRow.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');
              productDisplayRow.appendChild(currentRow);
          }

          const productCard = document.createElement('div');
          productCard.classList.add('col');
          productCard.innerHTML = `
              <div class="card h-100">
                  <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                  <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.category}</p>
                      <p class="card-text">Product Id: ${product.id}</p>
                      <p>Rs${product.price.toFixed(2)}</p>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto justify-content-between">
                      <a href="productDetails3.html" class="btn btn-primary">Details</a>
                      <button class="btn add-to-cart-button" data-type="product" data-product-id="${product.id}" onclick="addToCart(this)">Add to cart</button>

                  </div>
              </div>
          `;
          currentRow.appendChild(productCard);
      });
  }
}

function displayCategories(data) {
  const displayProductCategories = document.getElementById('DisplayProductCategories');
  const categories = data;

  if (Array.isArray(categories)) {
      const categoryList = document.createElement('ul');

      categories.forEach(category => {
          const categoryItem = document.createElement('li');
          categoryItem.textContent = category;
          categoryList.appendChild(categoryItem);
      });

      displayProductCategories.appendChild(categoryList);
  }
}

// Fetch and display products
fetchDataAndDisplay('https://dummyjson.com/products', displayProducts);

// Fetch and display categories
fetchDataAndDisplay('https://dummyjson.com/products/categories', displayCategories);


// Now these are the code for add to cart logic
const addedItems = [];
function addToCart(button) {
  const productId = button.getAttribute('data-product-id');
  
  // Check if the item has already been added
  if (addedItems.includes(productId)) {
    Swal.fire({
      title: 'Item Already in Cart',
      text: 'This item is already in your cart.',
      icon: 'info'
    });
    return;
  }
  // local storage ma data set garna ko lagi
  const apicart = JSON.parse(localStorage.getItem('apicart')) || [];
  const existingProduct = apicart.find(item => item.productId === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    apicart.push({ productId, quantity: 1 });
  }

  localStorage.setItem('apicart', JSON.stringify(apicart));
  // Add the item to the list of added items
  addedItems.push(productId);
  Swal.fire({
    title: 'Item Added to Cart',
    text: 'The item has been added to your cart.',
    icon: 'success'
  });

  displayCart(); // Update the cart display
}

// Function to display cart contents in another HTML file
function displayCart() {
  const apicart = JSON.parse(localStorage.getItem('apicart')) || [];
  const cartDisplay = document.getElementById('cart-display');

  if (cartDisplay) {
    cartDisplay.innerHTML = ''; // Clear previous content

    if (apicart.length === 0) {
      cartDisplay.textContent = 'Your cart is empty.';
    } else {
      apicart.forEach(item => {
        const product = getProductById(item.productId);
        if (product) {
          const cartItem = document.createElement('div');
          cartItem.textContent = `${product.title} (Quantity: ${item.quantity})`;
          cartDisplay.appendChild(cartItem);
        }
      });
    }
  }
}

displayCart();