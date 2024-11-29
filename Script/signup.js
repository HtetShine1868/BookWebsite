const signupForm = document.getElementById('signup-form');
const passwordField = document.getElementById('password');
const passwordToggleButton = document.getElementById('password-toggle-button');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const userData = {
    name: name,
    email: email,
    password: password
  };
  
  localStorage.setItem('userData', JSON.stringify(userData));
  
  // Redirect to the profile page
  window.location.href = '../profile/profile.html';
});

passwordToggleButton.addEventListener('click', function() {
  const type = passwordField.getAttribute('type');
  passwordField.setAttribute('type', type === 'password' ? 'text' : 'password');
  this.classList.toggle('active');
});

// Show the form with animation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  form.classList.add('show');
});