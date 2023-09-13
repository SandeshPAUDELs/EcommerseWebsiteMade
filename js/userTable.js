
// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(data => {
//   const UsersAllData = document.getElementById('user-details-table');
//   const users = data.users;
//   if (Array.isArray(users)) {
//     users.forEach(user => {
//       const newData = document.createElement('div');
//       newData.innerHTML = `
//       <div class="row row-cols-1 row-cols-md-3 g-4">
//         <div class="col">
            
//                 <img src="${user.image}" width = "50" height = "50" />
//                 <p class="card-text">Name: ${user.firstName} ${user.maidenName} ${user.lastName}</p>
//                 <p class="card-text">Email: ${user.email}</p>
//                 <p class="card-text">Contact NO: ${user.phone}</p>
//                 <p class="card-text">Gender: ${user.gender}</p>
//                 <p class="card-text">Age: ${user.age}</p>
//         </div>
//         </div>
  
//       `;
//       UsersAllData.appendChild(newData);
//     });
//   }
// })



fetch('https://dummyjson.com/users')
  .then((res) => res.json())
  .then((data) => {
    const UsersAllData = document.getElementById('user-details-table');
    const users = data.users;

    if (Array.isArray(users)) {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = ['Image', 'Name', 'Email', 'Contact NO', 'Gender', 'Age', 'Username', 'passcode'];

      headers.forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      const tbody = document.createElement('tbody');

      users.forEach((user) => {
        const row = document.createElement('tr');

        const imageCell = document.createElement('td');
        imageCell.innerHTML = `<img src="${user.image}" width="50" height="50" />`;

        const nameCell = document.createElement('td');
        nameCell.textContent = `${user.firstName} ${user.maidenName} ${user.lastName}`;

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;

        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phone;

        const genderCell = document.createElement('td');
        genderCell.textContent = user.gender;

        const ageCell = document.createElement('td');
        ageCell.textContent = user.age;
        
        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;

        const passcodeCell = document.createElement('td');
        passcodeCell.textContent = user.password;

        row.appendChild(imageCell);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);
        row.appendChild(genderCell);
        row.appendChild(ageCell);
        row.appendChild(usernameCell);
        row.appendChild(passcodeCell);

        tbody.appendChild(row);
      });

      table.appendChild(thead);
      table.appendChild(tbody);

      UsersAllData.appendChild(table);
    }
  });
