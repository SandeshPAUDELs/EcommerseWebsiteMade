  const loginForm = document.querySelector('#loginForm');
  const loginUsername = document.querySelector('#loginName');
  const loginButton = document.querySelector('#loginButton');
  const loginPasswordInput = document.querySelector('#loginPassword');

  // Function to handle login  
  loginButton.addEventListener('click', (e) => {
    const login = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginUsername.value,
        password: loginPasswordInput.value,
      }),
    };
    fetch('https://dummyjson.com/auth/login', login)
    .then(res => {
      if (res.ok) {
        return res.json();
      
      } else {
        throw new Error('Invalid username or password');
      }
    })
    .then(data => {
      console.log(data);
      localStorage.setItem('userloginData', JSON.stringify(data));
      window.open('index.html', '_self');

    })
    .catch(error => {
      console.error(error);
      // alert("Error");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid username or password!',
        footer: '<a href="">Remember your username and password</a>'
      })
    });
});

  



  function myFunction() {
    var x = document.getElementById("loginPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
    

