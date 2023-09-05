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
                      <p>Rs${product.price.toFixed(2)}</p>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto justify-content-between">
                      <a href="productDetails3.html" class="btn btn-primary">Details</a>
                      <button class="btn btn-outline-primary w-100 add-to-cart-button" data-type="product">Add to cart</button>
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

