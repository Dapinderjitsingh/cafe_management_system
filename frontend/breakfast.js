document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('button.add-to-cart');
    
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const subBox = this.closest('.sub-box');
        const itemName = subBox.querySelector('h3').textContent;
        const itemPrice = parseFloat(subBox.querySelector('span').textContent.substring(1)); // Remove '$'
        const quantity = parseInt(subBox.querySelector('.qty-input').value);

        if (quantity > 0) {
          // Get the cart from localStorage or create an empty cart
          let cart = JSON.parse(localStorage.getItem('cart')) || [];

          // Add item to cart
          cart.push({ name: itemName, price: itemPrice, quantity: quantity });

          // Save updated cart to localStorage
          localStorage.setItem('cart', JSON.stringify(cart));

          // Show confirmation message
          alert(`${itemName} has been added to your cart!`);

          // Reset quantity input
          subBox.querySelector('.qty-input').value = 0;
        } else {
          alert('Please select a quantity greater than 0.');
        }
      });
    });

    // Quantity button functionality
    const plusBtns = document.querySelectorAll('.plus-btn');
    const minusBtns = document.querySelectorAll('.minus-btn');

    plusBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = this.previousElementSibling;
        input.value = parseInt(input.value) + 1;
      });
    });

    minusBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = this.nextElementSibling;
        if (parseInt(input.value) > 0) {
          input.value = parseInt(input.value) - 1;
        }
      });
    });
  });