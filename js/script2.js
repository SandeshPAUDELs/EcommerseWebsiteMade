
document.querySelector(".logoutButton").addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  // alert("Local storage has been cleared.");
});



const StoredCartItems = JSON.parse(localStorage.getItem('cart'));
const StoredUserData = JSON.parse(localStorage.getItem('submittedForm'));
 // Now combinf Data into neew object 
 const CombinedData = {
  cart: StoredCartItems,
  user: StoredUserData
 };
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
 