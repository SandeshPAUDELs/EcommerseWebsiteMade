function myFunction1() {
    var x = document.getElementById("registerPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction() {
    var x = document.getElementById("loginPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



  // yedi user le space click garyo bhane space click garna didainan
  const inputElement = document.getElementById("registerUsername");
  const spaceWarning = document.getElementById("spaceWarning");

  inputElement.addEventListener("keydown", function (e) {
    if (e.key === " " || e.keyCode === 32) {
      e.preventDefault();
      spaceWarning.style.display = "block";
    } else {
      spaceWarning.style.display = "none";
    }
  });


  const InputSpace = document.querySelectorAll('.form-control');
  const warning = document.querySelectorAll('#spaceWarning2');
  InputSpace.addEventListener("submit", function(e){
    if(e.key === ""){
      e.preventDefault();
      warning.style.display = "none";
    }
    else {
      warning.style.display = "block";
    }
  });


