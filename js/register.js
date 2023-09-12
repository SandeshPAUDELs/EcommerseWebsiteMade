const registerUsername = document.querySelector('#registerUsername');
const registerForm = document.querySelector('#registerForm');
const registerButton = document.querySelector('#registerButton');
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
          const registerUsername = registerForm.registerUsername.value;
          const registerPassword = registerPasswordInput.value;
          const userEmail = registerEmail.value;

          let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
          const userExists = usersData.some(user => user.email === userEmail);
          
          if (userExists) {
            // alert('email is already taken.');
            Swal.fire({
              title: 'Registration Failed',
              text: 'This registration is failed because email or User name is already taken',
              icon: 'info'
            });
          } else {
              const userData = {
              userName: registerUsername,
              password: registerPassword,
              email: userEmail,
              };
              usersData.push(userData);
              localStorage.setItem('usersData', JSON.stringify(usersData));
              window.open('login.html', '_self');
            }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });

  function validatePassword(password) {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return passwordRegex.test(password);
  }

