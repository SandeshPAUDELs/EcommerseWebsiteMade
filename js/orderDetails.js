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

  for (const data of storedCheckoutData) {
    tableHtml += `
      <tr>
        <td class = "text-center">${data.FirstName2}</td>
        <td class = "text-center">${data.LastName2}</td>
        <td class = "text-center">${data.PhoneNO}</td>
        <td class = "text-center">${data.userEmail}</td>
        <td class = "text-center">${data.userAddress}</td>
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


// Now this is code for Storing the select option data in local storage

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

document.querySelector(".logoutButton").addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  // alert("Local storage has been cleared.");
});