// document.addEventListener('DOMContentLoaded', function () {
//   const selectedProductDiv = document.getElementById('selected-product');
//   let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

//   function updateCart(productName, productImage, productPrice) {
//     const existingItem = cartItems.find(item => item.name === productName);
    
//     if (existingItem) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Items is already in the cart',
//         footer: '<a href="">Why do I have this issue?</a>'
//       })
//       return;
//     }
    
//     cartItems.push({
//       name: productName,
//       image: productImage,
//       price: productPrice
//     });

//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     // alert("Added to cart!");
//     Swal.fire({
//       position: 'top-end',
//       icon: 'success',
//       title: 'Items is added to cart',
//       showConfirmButton: false,
//       timer: 1500
//     })
//   }
  
//   const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
//   addToCartButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const productDiv = this.closest('.card');
//       const productName = productDiv.querySelector('.card-text').textContent;
//       const productImage = productDiv.querySelector('.card-img-top').getAttribute('src');
//       const productPrice = productDiv.querySelector('.card-title').textContent;
      
//       updateCart(productName, productImage, productPrice);
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const selectedProductDiv = document.getElementById('selected-product');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart(productName, productImage, productPrice, isRemoveButton) {
    const existingItemIndex = cartItems.findIndex(item => item.name === productName);

    if (isRemoveButton) {
      if (existingItemIndex !== -1) {
        cartItems.splice(existingItemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCart();
      }
      return;
    }

    const existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
      // alert("Item is already in the cart.");
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Items is already in the cart',
  showConfirmButton: false,
  timer: 1500
})
      return;
    }

    cartItems.push({
      name: productName,
      image: productImage,
      price: productPrice,
      quantity: selectedQuantity
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
    // alert("Added to cart!");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is added to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  function renderCart() {
    selectedProductDiv.innerHTML = '';
    cartItems.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'cart-item';

      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productImage.style.width = '150px';
      productImage.style.height = '150px';

      const priceDisplay = document.createElement('h5');
      priceDisplay.className = 'left cart-item-price';
      priceDisplay.textContent = `Rs ${product.price}/-`;


      if (product.multiplier === undefined) {
        product.multiplier = 1;
      }

     let totalPrice = 0;
      const multiplyButton = document.createElement('button');
      const multiplyButton1 = document.createElement('button');
      const totalDisplay = document.getElementById('totalPrice');
      multiplyButton.textContent = `+1 items`;
      multiplyButton1.textContent = '-1 items';
      const iconContainer1 = document.getElementById('iconContainer1');
      const iconContainer2 = document.getElementById('iconContainer2');
      
      multiplyButton.className = 'multiply-button';
      multiplyButton1.className = 'multiply-button1';
      multiplyButton.dataset.productName = product.name;
      multiplyButton1.dataset.productName = product.name;

      multiplyButton.addEventListener('click', function () {
        const productName = this.dataset.productName;

        const priceDisplay = productDiv.querySelector('.cart-item-price');
        if (priceDisplay) {
          product.multiplier += 1;
          const displayedPrice = product.price * product.multiplier;
          priceDisplay.innerHTML = `Rs ${displayedPrice.toFixed(2)} /- <div class = "perItem">Rs ${product.price}/- /perItem</div>`;
          totalPrice = totalPrice + displayedPrice;
          totalDisplay.textContent = `Rs ${totalPrice.toFixed(2)} /-`;
        }
      });
      
      multiplyButton1.addEventListener('click', function(){
        const productName = this.dataset.productName;

        const priceDisplay = productDiv.querySelector('.cart-item-price');
        if(priceDisplay && product.multiplier >= 2){
          product.multiplier -= 1;
          const displayedPrice = product.price * product.multiplier;
          priceDisplay.innerHTML = `Rs ${displayedPrice.toFixed(2)} /- <div class = "perItem">Rs ${product.price}/- /perItem</div>`;

          totalPrice = totalPrice - displayedPrice;
          totalDisplay.textContent = `Rs ${totalPrice.toFixed(2)}/-`;        
        }
      });

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-button';
      removeButton.dataset.productName = product.name;

      removeButton.addEventListener('click', function () {
        Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Item is removed from the cart',
      showConfirmButton: false,
      timer: 1500
    })
        const productName = this.dataset.productName;
        updateCart(productName, null, null, true);
      });
      productDiv.appendChild(productImage);
      productDiv.appendChild(multiplyButton);
      productDiv.appendChild(multiplyButton1);
      productDiv.appendChild(priceDisplay);
      productDiv.appendChild(removeButton);
      selectedProductDiv.appendChild(productDiv);
    });
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-button');
    removeFromCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productDiv = this.closest('.cart-item');
        const productName = productDiv.querySelector('.cart-item-name').textContent;
        updateCart(productName, null, null, true);
      });
    });
  }
  renderCart();
});

// Add to cart javascript code are under shopping-cart.html bhitra <script> 


// These code are for payment form





const paymentform_control = document.querySelector('form');
const main = document.querySelector('.main');
let indexx = 1; 
let submittedForm = [];
if(localStorage.getItem('submittedForm')){
submittedForm = JSON.parse(localStorage.getItem('submittedForm'));
}
Display();
paymentform_control.addEventListener("submit", function(event){
event.preventDefault();
const Firstname = document.getElementById('form6Example1').value;
const Lastname = document.getElementById('form6Example2').value;
const BankName = document.getElementById('form6Example3').value;
const AccountNumber = document.getElementById('form6Example4').value;
const PaymentGateway = document.querySelector('input[name="payment Gateway"]:checked').value;

const Data = {Firstname, Lastname, BankName, AccountNumber, PaymentGateway};
submittedForm.push(Data);
localStorage.setItem('submittedForm', JSON.stringify(submittedForm));
Display();
indexx ++;
});
function Display(){
  main.innerHTML = "";
const NewsubmittedForm = submittedForm[submittedForm.length - 1];
const table = document.createElement("table");
table.innerHTML = 
`
<table class="table align-middle  mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th class = "text-center">First Name</th>
      <th class = "text-center">Last Name</th>
      <th class = "text-center">Bank Name</th>
      <th class = "text-center">Purchased Product</th>
      <th class = "text-center">Price</th>
      <th class = "text-center"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class = "text-center">${NewsubmittedForm.Firstname}</td>
      <td class = "text-center">${NewsubmittedForm.Lastname}</td>
      <td class = "text-center">${NewsubmittedForm.BankName}</td>
      <td class = "text-center">${NewsubmittedForm.AccountNumber}</td>
      <td class = "text-center">${NewsubmittedForm.PaymentGateway}</td>
      <td><span onclick = 'deleteSubmission()'>Remove</span></td>
  </tbody>
</table>
`;
main.appendChild(table);
}


function deleteSubmission(index) {
submittedForm.splice(index, 1); 
localStorage.setItem("submittedForm", JSON.stringify(submittedForm));
main.innerHTML = "";
Display();
}