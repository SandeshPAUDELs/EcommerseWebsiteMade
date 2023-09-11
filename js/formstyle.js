function myFunction1() {
    var x = document.getElementById("registerPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  


  // yedi user le space click garyo bhane space click garna didainan
  const inputElement = document.querySelector('#registerUsername');
  console.log(inputElement)
  const spaceWarning = document.getElementById("spaceWarning");

  inputElement.addEventListener("keydown", function () {
    if (e.key === " " || e.keyCode === 32) {
      e.preventDefault();
      spaceWarning.style.display = "block";
    } else {
      spaceWarning.style.display = "none";
    }
  });



