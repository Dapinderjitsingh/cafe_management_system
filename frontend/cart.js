document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Get the cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Function to update the cart display and total price
    function updateCart() {
        cartItemsContainer.innerHTML = ''; // Clear current cart display
        totalPrice = 0; // Reset total price

        // If the cart is empty, show a message
        if (cart.length === 0 || cart.every(item => item.quantity === 0)) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
        } else {
            // Iterate over the items in the cart and display them
            cart.forEach(function (item, index) {
                const price = parseFloat(item.price) || 0;
                const quantity = parseInt(item.quantity) || 0;

                if (quantity > 0) {  // Show only items with quantity > 0
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.classList.add('cart-item');
                    cartItemDiv.innerHTML = `
        <span>${item.name} (x${quantity})</span>
        <span>$${(price * quantity).toFixed(2)}</span>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
                    cartItemsContainer.appendChild(cartItemDiv);

                    // Add to the total price
                    totalPrice += price * quantity;
                }
            });

            // Update the total price display
            totalPriceElement.textContent = totalPrice.toFixed(2);
        }
    }

    // Event listener for remove buttons
    cartItemsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const itemIndex = event.target.getAttribute('data-index');
            cart.splice(itemIndex, 1); // Remove item from cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
            updateCart(); // Re-render the cart
        }
    });

    // Initial update of the cart display
    updateCart();
});