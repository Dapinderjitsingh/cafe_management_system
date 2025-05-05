// Handle form submission
document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get credit card details
    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Validate form fields
    const cardNumberRegex = /^[0-9]{16}$/;
    const cvvRegex = /^[0-9]{3}$/;
    const isCardNumberValid = cardNumberRegex.test(cardNumber);
    const isCvvValid = cvvRegex.test(cvv);

    if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill out all the fields.');
        return;
    }

    if (!isCardNumberValid) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    if (!isCvvValid) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    // If all validation passes
    alert('Payment Successful! Thank you for your purchase!');
    window.location.href = './newmenu.html'; // Redirect to order confirmation page
});