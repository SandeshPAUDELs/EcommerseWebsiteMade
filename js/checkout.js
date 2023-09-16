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
      checkoutData.push(checkoutForm);
      // Store the updated array back in local storage
      localStorage.setItem('checkOutData', JSON.stringify(checkoutData));
    }
  }



  const storedCheckoutData = JSON.parse(localStorage.getItem('checkOutData'));

if (storedCheckoutData) {
  let tableHtml = `
    <table>
      <tr>
        <th>FirstName</th>
        <th>lastName</th>
        <th>PhoneNo.</th>
        <th>Email</th>
        <th>Address</th>
        <th>Delivery Status</th>
      </tr>
  `;

  // Loop through the stored data and add rows to the table
  for (const data of storedCheckoutData) {
    tableHtml += `
      <tr>
        <td>${data.FirstName2}</td>
        <td>${data.LastName2}</td>
        <td>${data.PhoneNO}</td>
        <td>${data.userEmail}</td>
        <td>${data.userAddress}</td>
  <td>
    <select name="Status" id="yourSelectElement">
      <option style="color: red;" value="1">Pending</option>
      <option value="2">Awating payment</option>
      <option value="3">Awating Shipping</option>
      <option value="4">Awating Fulfilment</option>
      <option value="5">Cancelled</option>
      <option value="6">Declined</option>
      <option value="7" disabled>Refunded</option>
      <option value="8">Manual Verification Required</option>
      <option value="9">Partially Refunded</option>
    </select>
  </td>
      </tr>
    `;
 
  }

  document.getElementById('displayCheckout').innerHTML = tableHtml;
  tableHtml += `</table>`;

} 



document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('yourSelectElement');

  if (selectElement) {
    selectElement.addEventListener('change', function () {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const selectedOptionText = selectedOption.text;
      console.log(selectedOptionText)

      localStorage.setItem('selectedOptionText', selectedOptionText);
    });
  }
});