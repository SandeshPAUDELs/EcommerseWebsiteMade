export function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  export function fetchDataAndDisplay(url, displayFunction) {
    fetch(url)
        .then(res => res.json())
        .then(data => displayFunction(data))
        .catch(error => console.error('Error fetching data:', error));
  }
  

  