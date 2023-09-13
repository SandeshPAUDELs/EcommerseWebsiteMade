document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userloginData'));
      if (!userData) {
      console.error('User data not found in local storage.');
      return;
    }
  
    const userId = userData.id;
  
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch user details');
        }
      })
      .then(userDetails => {
        const userInfoContainer = document.getElementById('userInfo');
  
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');
  
        userDiv.innerHTML = `
          <div class="container">
          <section class="vh-100">
            <div class="container-fluid h-custom">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                  <img src="${userDetails.image}"/>
                </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div class="d-flex">
              <div class="text-center">
                <h5 class="mb-3">Customer Details:</h5>
                <h6 class="mb-3">${userDetails.firstName} ${userDetails.maidenName} ${userDetails.lastName}</h6>
                <p class="mb-3">Email: ${userDetails.email}</p>
                <p class="mb-3">Phone: ${userDetails.phone}</p>
                <p class="mb-3">Address: ${userDetails.address}</p>
                <p class="mb-3">Age: ${userDetails.age}</p>
                <p class="mb-3">MAC Address: ${userDetails.macAddress}</p>
                <p class="mb-3">University: ${userDetails.university}</p>
                <p class="mb-3">Date of Birth: ${userDetails.birthDate}</p>
        
              </div>
              </div>
  
          </div>
          </div>
          </div>
          <hr>
        <p class = "text-center">To change any details after verification please contact our support Team at <a href="#">Support@example.com</a> or +977 98*******</p>
        <footer class="text-center text-white">
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-facebook-f"></i
        ></a>
  
        <!-- Twitter -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-twitter"></i
        ></a>
  
        <!-- Google -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-google"></i
        ></a>
  
        <!-- Instagram -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-instagram"></i
        ></a>
  
        <!-- Linkedin -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin"></i
        ></a>
        <!-- Github -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i
        ></a>
        
        <div class="text-center text-dark p-3">
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">t<span>l</span>0<span>0</span>.com</a>
    </div>
    
        </footer>
          </section>
          </div>
        `;
        userInfoContainer.appendChild(userDiv);
      })
      .catch(error => {
        console.error(error);
      });
  });
  

