
  const loginForm = document.querySelector('#loginForm');
  const loginUsername = document.querySelector('loginName');
  const registerUsername = document.querySelector('#registerUsername');
  const registerForm = document.querySelector('#registerForm');
  const loginButton = document.querySelector('#loginButton');
  const registerButton = document.querySelector('#registerButton');
  const loginPasswordInput = document.querySelector('#loginPassword');
  const registerPasswordInput = document.querySelector('#registerPassword');
  const registerRepeatPasswordInput = document.querySelector('#registerRepeatPassword');
  const passwordError = document.getElementById("passwordError");

  // function to handle registration
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    // this is for password validation
    const isPasswordValid = validatePassword(registerPasswordInput.value);

    if (!isPasswordValid) {
      passwordError.style.display = "block";
      return;
    } else {
      passwordError.style.display = "none";
    }
    
    // Check if passwords match
    if (registerPasswordInput.value !== registerRepeatPasswordInput.value) {
      // alert('Passwords do not match');
      Swal.fire({
        title: 'Your Password Donot match',
        text: 'This password is incorrect',
        icon: 'info'
      });
      return;
    }



    const registration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: registerForm.registerName.value,
        userName: registerForm.registerUsername.value,
        email: registerForm.registerEmail.value,
        password: registerPasswordInput.value,
      }),
    };

    // Make an API call for registration
    fetch('https://dummyjson.com/auth/register', registration)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          // alert('Registration failed');
          
          Swal.fire({
            title: 'Registration Failed',
            text: 'This registration is failed',
            icon: 'info'
          });
        } else {
          // alert('Registration successful');

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registration Successful',
            showConfirmButton: false,
            timer: 1500
          })
          // this is to store data in local sotrage 
          const userData = {
            userName: registerForm.registerUsername.value,
            password: registerPasswordInput.value,
          };
            let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
            usersData.push(userData);
            localStorage.setItem('usersData', JSON.stringify(usersData));
            
          // if all the condition meets the go to loginRegister.html page
          window.open('loginRegister.html', '_self');

        }
      })
      .catch((err) => {
        console.error(err);
      });
  });

  function validatePassword(password) {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return passwordRegex.test(password);
  }

  // Function to handle login  
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(enteredUsername));

    if (loginPasswordInput.value !== registerPasswordInput.value ){
      Swal.fire({
        title: 'Your Password or Email Donot match',
        text: 'This password is incorrect',
        icon: 'info'
      });
      return;
    }
  });
  
    const login = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization' : //get token from LS which is stored after login.
      },
      body: JSON.stringify({
        userName: loginForm.loginName.value,
        password: loginPasswordInput.value,
      }),
    };

    fetch('https://dummyjson.com/auth/login', login)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          // alert('Error Password or Username');
          Swal.fire({
            title: 'Your Password or Email Donot match',
            text: 'This password or email is incorrect',
            icon: 'info'
          });
        } else {
          window.open('index.html', '_self');
        }
      })
      .catch((err) => {
        console.error(err);
      });


  
