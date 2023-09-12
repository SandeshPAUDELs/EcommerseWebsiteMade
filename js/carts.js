const userId = 5;
const apiUrl = `https://dummyjson.com/carts/user/${userId}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Now 'data' contains the user's cart information
  })
  .catch((error) => {
    console.error('Error:', error);
  });

