document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const selectedProductContainer = document.getElementById('selected-product');
    const cart = [];

    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productDiv = this.closest('.card');
            const productImage = productDiv.querySelector('.card-img-top').getAttribute('src');
            const productName = productDiv.querySelector('.nav-link').textContent;
            const productPrice = productDiv.querySelector('.price-wrap strong').textContent;
            const isProductAdded = cart.some(item => item.name === productName);
                if (isProductAdded) {
                   alert("Already Items is present");
                }
                 else {
                cart.push({
                    name: productName,
                    image: productImage,
                    price: productPrice
                });
                localStorage.setItem("cart",JSON.stringify(cart))
                updateSelectedProductContainer();
            }
        });
    });

    function updateSelectedProductContainer() {
        selectedProductContainer.innerHTML = '';
        cart.forEach(item => {
            const content = document.createElement('div');
            content.innerHTML = `<img src="${item.image}" class="selected-product-image" />
                                <p class = "text-center"><strong>Product Name:</strong> ${item.name}</p>
                                <p><strong>Product Price:</strong> ${item.price}</p>`;
            
            selectedProductContainer.appendChild(content.cloneNode(true));
        });
    }
});

