// fetch('https://dummyjson.com/carts')

import {fetchDataAndDisplay, getUrlParameter} from './utils.js';
function displayCart(data) {
    const CartDisplayRow = document.getElementById('Cart-Items');
    const carts = data.carts;
    if(Array.isArray(carts)) {
        let currentRow = null;

    }

}