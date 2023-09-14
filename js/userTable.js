const userDataJSON = localStorage.getItem('userloginData');
const userData = JSON.parse(userDataJSON);
const token = userData.token;

if (token) {
  console.log('Token:', token);
} else {
  console.log('Token not found in local storage data.');
}


// The above code is only to check if the token is present in the local storage or not. If it is present, then it will be displayed in the console. If not, then it will display the message "Token not found in local storage data." in the console.
// the actual code starts from here.
function fetchAndDisplayUserDetails(userId) {
   
  fetch(`https://dummyjson.com/auth/users/${userId}`,{
    method: 'GET', 
              headers: {
                  'Authorization': `Bearer ${token}`, 
                  'Content-Type': 'application/json'
              },
  })
    
      .then(res => {
            if (res.ok) {
                return res.json();
            } else {

                
                if (res.status === 401) {
                    console.log('Unauthorized access. Please log in.');
                 } else {
                throw new Error('Failed to fetch user details');
            }
        }
        })
      .then(userDetails => {
        console.log(userDetails)
          const userDetailsHTML = `
              <p><strong>ID:</strong> ${userDetails.id}</p>
              <p><strong>Name:</strong> ${userDetails.firstName} ${userDetails.maidenName} ${userDetails.lastName}</p>
              <p><strong>Age:</strong> ${userDetails.age}</p>
              <p><strong>Gender:</strong> ${userDetails.gender}</p>
              <p><strong>Email:</strong> ${userDetails.email}</p>
              <p><strong>Phone:</strong> ${userDetails.phone}</p>
              <p><strong>Username:</strong> ${userDetails.username}</p>
              <p><strong>Password:</strong> ${userDetails.password}</p>
              <p><strong>Birth Date:</strong> ${userDetails.birthDate}</p>
          `;
          document.getElementById('userDetailsBody').innerHTML = userDetailsHTML;
      });
}

function openUserDetailsModal(userId) {
  fetchAndDisplayUserDetails(userId);
  $('#userDetailsModal').modal('show');
}

function fetchDataAndInitializeDataTable() {
      fetch('https://dummyjson.com/auth/users', {
              method: 'GET', 
              headers: {
                  'Authorization': `Bearer ${token}`, 
                  'Content-Type': 'application/json'
              },
              })
          .then(res => res.json())
          .then(data => {
              const users = data.users;

              const dataTable = $('#userTable').DataTable({
                  data: users,
                  columns: [
                      { data: 'id' },
                      { data: 'firstName' },
                      { data: 'email' },
                      { data: 'phone' },
                      { data: 'username' },
                      { 
                          data: 'id',
                          render: function(data, type, row) {
                              return `<button class="btn btn-primary" onclick="openUserDetailsModal(${data})">View</button>`;
                          },
                      },
                  ]
              });
          });
  }

$(document).ready(function () {
      fetchDataAndInitializeDataTable();
  });
