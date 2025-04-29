function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone-number").value;

    // Check if the fields are not empty
    if (name === "" || email === "" || message === "" || phone === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone number validation (ensure it's only 10 digits)
    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If everything is correct
    alert("Your message has been sent!");
    return true;
}

// Function to restrict phone number input to digits only
function restrictPhoneInput(event) {
    const phoneInput = event.target;
    let phoneValue = phoneInput.value;
    phoneValue = phoneValue.replace(/[^0-9]/g, '');  // Remove non-numeric characters
    phoneInput.value = phoneValue;
}