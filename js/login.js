  const loginForm = document.querySelector('#loginForm');
  const loginUsername = document.querySelector('#loginName');
  const loginButton = document.querySelector('#loginButton');
  const loginPasswordInput = document.querySelector('#loginPassword');
  


  // Function to handle login  
  loginButton.addEventListener('click', (e) => {
    // console.log(loginUsername, loginPasswordInput)
    const login = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: loginUsername.value,
        password: loginPasswordInput.value,
      }),
    };
    fetch('https://dummyjson.com/auth/login', login)
    .then(res => res.json())
    .then(console.log);
  });

  
  function myFunction() {
    var x = document.getElementById("loginPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
    

  
