


  const loginForm = document.querySelector('#loginForm');
  const loginUsername = document.querySelector('loginName');
  const registerUsername = document.querySelector('#registerUsername');
  const registerForm = document.querySelector('#registerForm');
  const loginButton = document.querySelector('#loginButton');
  const registerButton = document.querySelector('#registerButton');
  const loginPasswordInput = document.querySelector('#loginPassword');
  const registerPasswordInput = document.querySelector('#registerPassword');
  const registerRepeatPasswordInput = document.querySelector('#registerRepeatPassword');

  // Function to handle login
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    const login = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
          alert('Error Password or Username');
        } else {
          window.open('index.html', '_self');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });

  // Function to handle registration
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Check if passwords match
    if (registerPasswordInput.value !== registerRepeatPasswordInput.value) {
      alert('Passwords do not match');
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
          alert('Registration failed');
        } else {
          alert('Registration successful');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });


