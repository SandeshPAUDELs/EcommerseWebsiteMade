document.addEventListener('DOMContentLoaded', function () {
  const selectedProductDiv = document.getElementById('selected-product');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart(productName, productImage, productPrice) {
    const existingItem = cartItems.find(item => item.name === productName);
    
    if (existingItem) {
      // alert("Item is already in the cart.");
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
const Data = {Firstname, Lastname, BankName, AccountNumber};
submittedForm.push(Data);
localStorage.setItem('submittedForm', JSON.stringify(submittedForm));
Display();
indexx ++;
});
function Display(){
const NewsubmittedForm = submittedForm[submittedForm.length - 1];
const table = document.createElement("table");
table.innerHTML = 
`
<tr>
<th><span onclick = 'deleteSubmission()'>Remove</span></th>
</tr>
<tr>
<td>FirstName: ${NewsubmittedForm.Firstname} </td>
</tr>
<tr>
<td>LastName: ${NewsubmittedForm.Lastname} </td>
</tr>
<tr>
<td>BankName: ${NewsubmittedForm.BankName} </td>
</tr>
<tr>
<td>AccountNumber: ${NewsubmittedForm.AccountNumber}</td>
</tr>
`;
main.appendChild(table);
}

function deleteSubmission(index) {
submittedForm.splice(index, 1); // Remove the submission at the given index
localStorage.setItem("submittedForm", JSON.stringify(submittedForm));
main.innerHTML = ""; // Clear the container
Display();
}