
  // Sample product data
  const products = [
    {
      id: 1,
      price: 'Rs 1200',
      name: "Product 1",
      description: "Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      price: 'Rs 800',
      name: "Product 2",
      description: "3 x 3 Qi Yi Cube Rubik's Cube",
      imageUrl: "https://static-01.daraz.com.np/p/7db622855d63680388aa73051de8f50c.jpg_400x400q75-product.jpg_.webp"

    },
    {
      id: 3,
      price: 'Rs 2400',
      name: "Product 3",
      description: "Luminious Rainbow RBG Back-lit Gaming Keyboard",
      imageUrl: "https://static-01.daraz.com.np/p/ce06ad27a48e01f293a0fa49699b23ec.jpg"
    },
    {
      id: 4,
      price: 'Rs 1095',
      name: "Product 4",
      description: "M19 TWS Wireless Bluetooth 5.1 | Charging Time 2 Hours",
      imageUrl: "https://static-01.daraz.com.np/p/1de0dcf4086608e93bac9acf32f09198.jpg",
    },
    {
      id: 5, 
      price: 'Rs 1834',
      name: "Product 5",
      description: "Set Of Three Men's Summer Thin Lightweight Windcheater Jacket ",
      imageUrl: "https://static-01.daraz.com.np/p/2ef7222f7ca367f45dc6c581d92afedf.jpg_400x400q75-product.jpg_.webp"
    },
    {
      id: 6, 
      price: 'Rs 1095',
      name: "Product 6",
      description: "TWS Wireless Earbuds Pro Bluetooth Connectivity With Charging Case",
      imageUrl: "https://static-01.daraz.com.np/p/297ae3a98a1c5fe5d7c2f0c0b01cf597.jpg"
    }
  ];

  
  function generateCards() {
    const cardContainer = document.getElementById("card-container");
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <a href="productDetails.html?id=${product.id}" class="btn btn-primary">Learn More</a>
            <a href="#" class="btn btn-primary add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</a>
          </div>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  }
  
  function addToCart(event) {
    event.preventDefault();
    const productName = event.target.dataset.name;
    const productPrice = event.target.dataset.price;
    const productImageUrl = event.target.closest('.card').querySelector('.card-img-top').src;
    // const productImageUrl = event.target.dataset.imageUrl;
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      // cartItems.push({ name: productName, price: productPrice, ImageUrl: productImageUrl});
      cartItems.push({ name: productName, price: productPrice, ImageUrl: productImageUrl, quantity: 1 });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Item added to cart!');
  }
  
  window.addEventListener("load", generateCards);
