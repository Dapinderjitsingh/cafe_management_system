const reservationData = JSON.parse(localStorage.getItem("reservationData"));
    if (reservationData) {
      document.getElementById("name").textContent = reservationData.name;
      document.getElementById("dateTime").textContent = `${reservationData.date} at ${reservationData.time}`;
      document.getElementById("guests").textContent = reservationData.people;
      document.getElementById("phone").textContent = reservationData.phone;
      document.getElementById("email").textContent = reservationData.email;
      document.getElementById("requests").textContent = reservationData.requests || "No special requests.";
    } else {
      alert("No reservation data found.");
    }