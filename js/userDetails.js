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
            <div class="d-flex justify-content-center align-items-center">
              <div class="text-center">
                <img src="${userDetails.image}" class="rounded-circle" height="200" />
                <h5 class="mb-3">Customer Name:</h5>
                <p class="mb-3">${userDetails.firstName} ${userDetails.lastName}</p>
                <p class="mb-3">Email: ${userDetails.email}</p>
                <hr>
                <p>To change any details after verification please contact our support Team at <a href="#">Support@example.com</a> or +977 98*******</p>
              </div>
            </div>
          </div>
        `;
  
        userInfoContainer.appendChild(userDiv);
      })
      .catch(error => {
        console.error(error);
      });
  });
  

