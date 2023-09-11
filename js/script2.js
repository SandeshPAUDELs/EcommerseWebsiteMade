
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
        <th class="text-center">Account Number</th>
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





const StoredCartItems = JSON.parse(localStorage.getItem('cart'));
const StoredUserData = JSON.parse(localStorage.getItem('submittedForm'));
 // Now combinf Data into neew object 
 const CombinedData = {
  cart: StoredCartItems,
  user: StoredUserData
 };
 // Convert to JSON string
 const CombinedUserJSONData = JSON.stringify(CombinedData);
 // Create a New key and store Data
 const NewKey = 'combinedUserDataAndCart';
 localStorage.setItem(NewKey, CombinedUserJSONData);

const CombinedStoredData = localStorage.getItem('combinedUserDataAndCart');
if(CombinedStoredData) {
  // This is added for
  const parsedCombinedData = JSON.parse(CombinedStoredData);
  let totalPrice = 0;
  const DisplayUserDataAndCartItems = document.querySelector('.displayCombinedData');
  DisplayUserDataAndCartItems.innerHTML = `
  <div class = 'stordData'>
  <p class = "text-center">ProductImage</p>
  <p>FirstName</p>
  <p>LastName</p>
  <p>Paymenthrough</p>
  <p>ProductName</p>
  <p class = "text-center">Price</p>
  </div>
  <hr>
  `;

  if (CombinedStoredData) {
    const parsedCombinedData = JSON.parse(CombinedStoredData);
    // console.log(JSON.stringify(parsedCombinedData));
    for (let i = 0; i < parsedCombinedData.cart.length; i++) {
      const userData = parsedCombinedData.user[0];
      const cartItem = parsedCombinedData.cart[i];

      DisplayUserDataAndCartItems.innerHTML += `
      <div class = 'stordData'>
      <p class = "text-center"><img class = "product" src="${cartItem.image}" alt="Product Image"></p>
        <p>${userData.Firstname}</p>
        <p>${userData.Lastname}</p>
        <p>${userData.PaymentGateway}</p>
        <p>${cartItem.name}</p>
        <p class = "text-center"> Rs ${cartItem.price} /-</p>  
        </div>
        <hr>      
      `;
    }
  }
}
 



// Now for checkOut.html

function CheckOutContinue() {
  const FirstName2 = document.getElementById("typeText").value;
  const LastName2 = document.getElementById('typeText2').value;
  const PhoneNO = document.getElementById('typePhone').value;
  const userEmail = document.getElementById('typeEmail').value;
  const userAddress = document.getElementById('typeText3').value;
  const UserHouse = document.getElementById('typeText4').value;
  const PostalCode = document.getElementById('typeText5').value;
  const Zip = document.getElementById('typeText6').value;
  const Checkbox = document.getElementById('flexCheckDefault').checked ? document.getElementById('flexCheckDefault').value : '';
  const RadioButton = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  const CitytoPick = document.querySelector('.form-select').value;
  const TextArea = document.getElementById('textAreaExample1').value;

  let checkoutForm = { FirstName2, LastName2, PhoneNO, userEmail, userAddress, UserHouse, PostalCode, Zip, Checkbox, RadioButton, CitytoPick, TextArea };

  // Check if there is already data in local storage
  let checkoutData = JSON.parse(localStorage.getItem('checkOutData')) || [];

  // Check if the new data is the same as any existing data
  const isDataSame = checkoutData.some((data) => {
    return (
      data.FirstName2 === FirstName2 &&
      data.LastName2 === LastName2 &&
      data.PhoneNO === PhoneNO ||
      data.userEmail === userEmail
    );
  });

  if (isDataSame) {
    alert("Your Email or PhoneNo is already present");
   
  } else {
    // Add the current set of data to the array
    checkoutData.push(checkoutForm);
    // Store the updated array back in local storage
    localStorage.setItem('checkOutData', JSON.stringify(checkoutData));
  }
}


// funtion to implement add to cart logic 
function addToCart(button) {
  const productId = button.getAttribute('data-product-id');
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cartData.find(item => item.productId === productId);
  if (existingItem) {
    // existingItem.quantity++;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is already in the cart',
      showConfirmButton: false,
      timer: 1000
    })
  } else {
    const newItem = {
      productId: productId,
      quantity: 1,
    };
    cartData.push(newItem);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Items is added to cart',
      showConfirmButton: false,
      timer: 1000
    })
  }
  localStorage.setItem('cart', JSON.stringify(cartData));
  displayProductsFromLocalStorage();
}


// Function to display products
function displayProductsFromLocalStorage() {
  const productDisplayContainer = document.getElementById('product-container');
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];

  if (Array.isArray(cartData) && cartData.length > 0) {
    cartData.forEach(item => {
      const productTitle = item.title; 
      const productCategory = item.category; 
      const productPrice = item.price;
      const productQuantity = item.quantity;

      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <div class="product">
          <h3>${productTitle}</h3>
          <p>Category: ${productCategory}</p>
          <p>Price: Rs. ${productPrice.toFixed(2)}</p>
          <p>Quantity: ${productQuantity}</p>
        </div>
      `;

      productDisplayContainer.appendChild(productElement);
    });
  } else {
    productDisplayContainer.innerHTML = '<p>Your cart is empty.</p>';
  }
}
displayProductsFromLocalStorage();
