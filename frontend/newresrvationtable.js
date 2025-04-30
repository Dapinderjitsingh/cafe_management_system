// Validate Phone Number
function validatePhoneNumber() {
    let phoneValue = document.getElementById("phone").value;
    phoneValue = phoneValue.replace(/[^0-9]/g, '');  // Remove non-numeric characters
    document.getElementById("phone").value = phoneValue;
}

// Form Submission Logic
const reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    // Collect the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const requests = document.getElementById("requests").value;

    // Save the data to localStorage
    localStorage.setItem("reservationData", JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        people: people,
        requests: requests
    }));

    // Redirect to the confirmation page
    window.location.href = "./done.html";
});