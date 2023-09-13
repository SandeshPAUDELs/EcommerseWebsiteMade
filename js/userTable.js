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

        const idCell = document.createElement('td');
        idCell.textContent = `${user.id}`;

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


// import { fetchDataAndDisplay, getUrlParameter } from './utils.js';

// function displayUsers(data) {
//   const userDetailsTable = document.getElementById('user-details-table');
//   const users = data.users;

//   if (Array.isArray(users)) {
//     const tbody = document.createElement('tbody');

//     users.forEach((user) => {
//       const row = document.createElement('tr');

//       const imageCell = document.createElement('td');
//       imageCell.innerHTML = `<img src="${user.image}" width="50" height="50" />`;

//       const nameCell = document.createElement('td');
//       nameCell.textContent = `${user.firstName} ${user.maidenName} ${user.lastName}`;

//       const emailCell = document.createElement('td');
//       emailCell.textContent = user.email;

//       const phoneCell = document.createElement('td');
//       phoneCell.textContent = user.phone;

//       const genderCell = document.createElement('td');
//       genderCell.textContent = user.gender;

//       const ageCell = document.createElement('td');
//       ageCell.textContent = user.age;

//       const usernameCell = document.createElement('td');
//       usernameCell.textContent = user.username;

//       const passcodeCell = document.createElement('td');
//       passcodeCell.textContent = user.password;

//       row.appendChild(imageCell);
//       row.appendChild(nameCell);
//       row.appendChild(emailCell);
//       row.appendChild(phoneCell);
//       row.appendChild(genderCell);
//       row.appendChild(ageCell);
//       row.appendChild(usernameCell);
//       row.appendChild(passcodeCell);

//       tbody.appendChild(row);
//     });

//     userDetailsTable.appendChild(tbody);
//   }
// }

// $(document).ready(function () {
//   const search = getUrlParameter('search');

//   if (search !== null) {
//     fetchDataAndDisplay('https://dummyjson.com/users/search?q='+search, displayUsers);
//     document.getElementById('search').value = search;
//   }
//   if(search !== null) {
//     fetchDataAndDisplay('https://dummyjson.com/users', displayUsers);
//   }
// });
