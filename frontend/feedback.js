document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Create feedback object
    const feedback = {
      name: name,
      email: email,
      phone: phone,
      rating: rating,
      comments: comments
    };

    // Get existing feedbacks from localStorage
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Add new feedback
    feedbacks.push(feedback);

    // Save back to localStorage
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    // Reset form
    document.getElementById('feedbackForm').reset();

    alert('Thank you for your feedback!');
  });