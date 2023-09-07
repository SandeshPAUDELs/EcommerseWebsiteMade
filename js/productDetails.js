import {fetchDataAndDisplay, getUrlParameter} from './utils.js';

const productId = getUrlParameter('id');
function displayProductDetails(productDetails){
    var detailsDiv = document.getElementById('product-details')
    var sliderImageString = ``;
    sliderImageString += `
      <div class="carousel-item active">
      <img src="${productDetails.thumbnail}" class="d-block w-100" alt="#"/>
    </div>`;
    productDetails.images.forEach(image => {
      sliderImageString += `
      <div class="carousel-item ">
      <img src="${image}" class="d-block w-100" alt="#"/>
    </div>
      `;
    })
    var sliderHTML = `
    <div id="productCarousel" class="carousel slide" data-mdb-ride="carousel">
    <div class="carousel-indicators">
    `;
    for(var i =0 ; i < productDetails.images.length; i ++){
      sliderHTML += `
      <button
      type="button"
      data-mdb-target="#productCarousel"
      data-mdb-slide-to="${i}"
      class="active"
      aria-current="true"
      aria-label="${productDetails.title}"
    ></button>
      `
    }
    sliderHTML += `</div> <div class="carousel-inner"> ${sliderImageString} `
    sliderHTML += `
    </div>
    
    <button class="carousel-control-prev" type="button" data-mdb-target="#productCarousel" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#productCarousel" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `
    detailsDiv.innerHTML = `
      <div class="container">
      <div class="row">
        <div class="col-md">
      
          ${sliderHTML}
        </div>
        <div class="col-md">
          <h3>${productDetails.title}</h3>
              <br>
              <p>${productDetails.category}</p>
              <p>Here need to add Reviews</p>
              <br><br>
              <p style = "text-decoration: bold; font-size: 20px;">Rs${productDetails.price.toFixed(2)} <span style = "font-size: 15px;">/piece</span></p>
              <p>${productDetails.description}</p>
        <hr>
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="Third group">
            <a style = "text-decoration: none; color: white;" href = "productsForyou.html"><button type="button" class="btn btn-success">Go Back</button></a>
          </div>
        </div>
          
          </div>
        
      </div>
    </div>
    `;
}

fetchDataAndDisplay(`https://dummyjson.com/products/${productId}`, displayProductDetails)
