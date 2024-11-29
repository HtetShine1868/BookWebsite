document.addEventListener('DOMContentLoaded', function() {
  // Existing code...
  
  const logoutButton = document.getElementById('logout-button');
  
  logoutButton.addEventListener('click', function() {
  // Redirect the user to another page
  window.location.href = '../landingpage/landingpage.html';
  });
  
  // Existing code...
  });
  document.addEventListener('DOMContentLoaded', function() {
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profilePassword = document.getElementById('profile-password');
    const profilePicture = document.querySelector('.profile-picture');
    const profilePictureUpload = document.getElementById('profile-picture-upload');
    const profileContainer = document.querySelector('.profile-container');
  
    const userData = localStorage.getItem('userData');
  
    if (userData) {
      const parsedData = JSON.parse(userData);
  
      profileName.textContent = parsedData.name;
      profileEmail.textContent = parsedData.email;
      profilePassword.textContent = '*'.repeat(parsedData.password.length);
  
      // Retrieve profile picture from local storage or set a default image
      const profilePictureData = localStorage.getItem('profilePicture');
      if (profilePictureData) {
        profilePicture.src = profilePictureData;
      } else {
        profilePicture.src = 'default-profile-picture.png';
      }
  
      // Show profile data with animation
      profileContainer.classList.add('show');
    } else {
      profileName.textContent = 'No data found.';
      profileEmail.textContent = '';
      profilePassword.textContent = '';
      profilePicture.src = 'default-profile-picture.png';
    }
  
    // Upload profile picture
    profilePictureUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        profilePicture.src = e.target.result;
        localStorage.setItem('profilePicture', e.target.result);
      };
  
      reader.readAsDataURL(file);
    });
  });