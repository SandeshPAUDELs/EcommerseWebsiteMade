 // Fetch data from the API and populate the cards
fetch('https://dummyjson.com/products')
 .then(res => res.json())
.then(data => {
const productDisplayRow = document.getElementById('product-details');
 const products = data.products
 if (Array.isArray(products)) {
let currentRow = null; 
 products.forEach((product, index) => {
// Create a new row when starting a new set of three products
 if (index % 3 === 0) {
currentRow = document.createElement('div');
currentRow.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');
  productDisplayRow.appendChild(currentRow);
 }

// Create a product card for each product
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
  <a href="productDetails3.html" class = "btn btn-primary">Details</a>
 <button class="btn btn-outline-primary w-100 add-to-cart-button"
 data-type="product">Add to cart</button>
  </div>
 </div>
                
 `;
 currentRow.appendChild(productCard);
});
} 
    })
    .catch(error => console.error('Error fetching data:', error));



            // Now for product Categories

            fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                const displayProductCategories = document.getElementById('DisplayProductCategories');

                if (Array.isArray(data)) {
                    // Create a list (ul) to display the categories
                    const categoryList = document.createElement('ul');

                    data.forEach(category => {
                        // Create a list item (li) for each category
                        const categoryItem = document.createElement('li');
                        categoryItem.textContent = category;
                        categoryList.appendChild(categoryItem);
                    });

                    displayProductCategories.appendChild(categoryList);
                } 
            })
            .catch(error => console.error('Error fetching data:', error));
 

// Now this is for search Products by category
fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then(data => {

});



// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting as a traditional form

      // Fetch data based on the user's search query
      fetch(`https://dummyjson.com/products/search?q=${searchInput.value}`)
          .then(res => res.json())
          .then(data => {
              const products = data.products;

              if (Array.isArray(products)) {
                  // Clear previous search results
                  searchResults.innerHTML = '';

                  // Create and display search result items
                  products.forEach(product => {
                      const productItem = document.createElement('div');
                      productItem.innerHTML = `
                          <div class="card">
                              <div class="card-body">
                                  <h5 class="card-title">${product.title}</h5>
                                  <p class="card-text">${product.description}</p>
                                  <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                              </div>
                          </div>
                      `;
                      searchResults.appendChild(productItem);
                  });
              } else {
                  console.error('No search results found.');
              }
          })
          .catch(error => console.error('Error fetching search results:', error));
  });
});
