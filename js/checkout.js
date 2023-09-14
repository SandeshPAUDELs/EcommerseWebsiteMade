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
      // Store the updated data in local storage
      localStorage.setItem('checkOutData', JSON.stringify(checkoutData));
    }
  }
  