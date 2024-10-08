document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Your message has been sent!');
    // Here you could add a call to send the form data to your backend server
  } else {
    alert('Please fill out all fields.');
  }
});
