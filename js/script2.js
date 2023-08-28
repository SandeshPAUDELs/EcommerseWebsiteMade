document.addEventListener('DOMContentLoaded', function () {
  const selectedProductDiv = document.getElementById('selected-product');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart(productName, productImage, productPrice) {
    const existingItem = cartItems.find(item => item.name === productName);
    
    if (existingItem) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Items is already in the cart',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return;
    }
    
    cartItems.push({
      name: productName,
      image: productImage,
      price: productPrice
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
    // alert("Added to cart!");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is added to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productDiv = this.closest('.card');
      const productName = productDiv.querySelector('.card-text').textContent;
      const productImage = productDiv.querySelector('.card-img-top').getAttribute('src');
      const productPrice = productDiv.querySelector('.card-title').textContent;
      
      updateCart(productName, productImage, productPrice);
    });
  });
});

  

// Add to cart contents are under shopping-cart.html 

// This  code is for payment form 


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

// This is function to display the Data in main div
function Display() {
  main.innerHTML = "";
  // this is to create a table
  const table = document.createElement("table");
  table.className = "table align-middle mb-0 bg-white";
  table.innerHTML = `
    <thead class="bg-light">
      <tr>
        <th class="text-center">First Name</th>
        <th class="text-center">Last Name</th>
        <th class="text-center">Bank Name</th>
        <th class="text-center">Purchased Product</th>
        <th class="text-center">Price</th>
        <th class="text-center"></th>
      </tr>
    </thead>
    <tbody id="table-body"></tbody>
  `;
  main.appendChild(table);
  const tableBody = document.getElementById("table-body");
  submittedForm.forEach(formData => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="text-center">${formData.Firstname}</td>
      <td class="text-center">${formData.Lastname}</td>
      <td class="text-center">${formData.BankName}</td>
      <td class="text-center">${formData.AccountNumber}</td>
      <td class="text-center">${formData.PaymentGateway}</td>
      <td><span onclick='deleteSubmission()'>Remove</span></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteSubmission(index) {
submittedForm.splice(index, 1); 
localStorage.setItem("submittedForm", JSON.stringify(submittedForm));
main.innerHTML = "";
Display();
}