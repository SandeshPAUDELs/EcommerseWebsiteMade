
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/users/2')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to fetch user details');
            }
        })
        .then(userData => {
            const userInfoContainer = document.getElementById('userInfo');

            const userDiv = document.createElement('div');
            userDiv.classList.add('user-info');

            userDiv.innerHTML = `
            <div class="container">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="text-center">
                   <img src = "${userData.image}" class="rounded-circle"
                   height="200" />
                   <h5 class="mb-3">Customer Name</h5>
                    <p class="mb-3">${userData.firstName} ${userData.maidenName} ${userData.lastName}</p>
                    <p class="mb-3"></p>
                    <p  class="mb-3">Email: ${userData.email}</p>
                    <p class = "mb-3">Phone no: ${userData.phone}</p>
                    <hr>
                    <p>To change any details after verification please contact out support Team at <a href = "!#">Support@example.com</a> or +977 98*******</p>
                  </div>
                </div>
              </div>
                
            `;
            console.log(userData)
            userInfoContainer.appendChild(userDiv);
        })
        .catch(error => {
            console.error(error);
        });
});
