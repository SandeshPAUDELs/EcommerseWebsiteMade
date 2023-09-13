function fetchAndDisplayUserDetails(userId) {
  fetch(`https://dummyjson.com/auth/users/${userId}`)
      .then(res => res.json())
      .then(userDetails => {
          const userDetailsHTML = `
              <p><strong>ID:</strong> ${userDetails.id}</p>
              <p><strong>First Name:</strong> ${userDetails.firstName}</p>
              <p><strong>Last Name:</strong> ${userDetails.lastName}</p>
              <p><strong>Maiden Name:</strong> ${userDetails.maidenName}</p>
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
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY5NDYxODU3NSwiZXhwIjoxNjk0NjIyMTc1fQ.V4m7bGqAKrQ3SMyySzbNn0CHXfSruzPWQ-cNGVkkcAA', 
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
                      { data: 'lastName' },
                      { data: 'email' },
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