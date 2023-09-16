import {fetchDataAndDisplay, getUrlParameter} from './utils.js';

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
              <div class="card h-auto p-3 m-3  ">
                  <img src="${product.thumbnail}" class="card-img-top " alt="${product.title}" >
                  <div class="card-title px-3 py-2 ">
                      <a href="productDetails.html?id=${product.id}" ><h6 class="card-title text-danger">${product.title}</a>
                      <span class="card-text badge badge-info ">${product.category}</span>
                      </h5>
                      <p class="text-warning text-bold">Rs. ${product.price.toFixed(2)}</p>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto justify-content-between">
                 
                  <a href="productDetails.html?id=${product.id}" style="text-decoration: none; color: white;">
                  <button class="btn btn-primary details-button" data-product-id="${product.id}">
                    Details
                </button>
                </a>
                 <button class="btn btn-success add-to-cart-button" data-type="product" data-product-id="${product.id}" onclick="addToCart(this)"><i class="fa fa-cart-plus"></i></button>
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
          categoryItem.style.listStyle = "none";
          categoryItem.innerHTML = `
          <form class="" method="GET">
          <input  type="hidden" name="category" value="${category}" />
          <button class="ml-auto  m-1 btn-lg category-names btn btn-outline-secondary" type="submit" data-mdb-ripple-color="dark" >
            ${category}
          </button>
        </form>
        `;
          categoryList.appendChild(categoryItem);
      });

      displayProductCategories.appendChild(categoryList);
  }
}



$(document).ready(function (){
  const category = getUrlParameter('category');
  const search = getUrlParameter('search');


  if (category !== null){
    fetchDataAndDisplay('https://dummyjson.com/products/category/'+category, displayProducts);
  }
  else if( search !== null){
    fetchDataAndDisplay('https://dummyjson.com/products//search?q='+search, displayProducts);
    document.getElementById('search').value = search;
  }
  else{
    fetchDataAndDisplay('https://dummyjson.com/products', displayProducts);
  }
  fetchDataAndDisplay('https://dummyjson.com/products/categories', displayCategories);
})


const detailsButtons = document.querySelectorAll('.details-button');
detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    window.location.href = `productDetails.html?id=${productId}`;
  });
});



document.querySelector(".logoutButton").addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  // alert("Local storage has been cleared.");
});