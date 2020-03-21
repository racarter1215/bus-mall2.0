/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
var cart = new Cart(cartItems);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
    var selectElement = document.getElementById('items');
    for (var i = 0; i < Product.allProducts.length; i++) {
  //TODO: Add an <option> tag inside the form's select for each product
        var optionEl = document.createElement('option');
        optionEl.setAttribute("value", Product.allProducts[i].name);
        optionEl.textContent = Product.allProducts[i].name;
        selectElement.appendChild(optionEl);
    }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
    event.preventDefault();
    addSelectedItemToCart();
    cart.saveToLocalStorage();
    updateCounter();
    updateCartPreview();
    // TODO: Prevent the page from reloading
    
  // Do all the things ...
  
  
  
//   updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    var itemValue = document.getElementById("items").value;
    var quantityValue = document.getElementById("quantity").value;
    cart.addItem(itemValue, quantityValue);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    var itemCountEl = document.getElementById=("itemCount");
    itemCountEl.textContent = cart.items.length;
    
}


// // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
    var product = null;
    var previewEl = document.getElementById("cartContents");
    previewEl.innerHTML = null;
    var itemName = document.getElementById("items").value;
    for (var i = 0; i < Product.allProducts.length; i++) {
        if (Product.allProducts[i].name == itemName) {
            product = Product.allProducts[i];
        };
    }
    var imgEl = document.createElement('img');
    imgEl.src = product.filePath;
    previewEl.appendChild(imgEl);
//   // TODO: Get the item and quantity from the form
//   // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
updateCounter();