// THis script tag will be to fetch data from API

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
  const productAllData = document.getElementById('product-details');
  const products = data.products;
  if (Array.isArray(products)) {
    products.forEach(product => {
      const newData = document.createElement('div');
      newData.innerHTML = `
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class = "card-title">${product.title}</p>
        <p class="card-text">${product.category}</p>
        <p>Rs${product.price.toFixed(2)}</p>
              </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  
      `;
      productAllData.appendChild(newData);
    });
  }
})