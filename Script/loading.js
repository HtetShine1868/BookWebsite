
// Hide the elements initially
document.getElementById("loading-overlay").style.display = "block";
document.getElementById("the-whole-container").style.display = "none";

// Start the animation
window.addEventListener("load", function () {
  var gifImage = document.getElementById('gif-image');
  gifImage.src = gifImage.src;

  // Show the elements after the animation is finished
  setTimeout(function () {
    document.getElementById("loading-overlay").style.display = "none";
    document.getElementById("the-whole-container").style.display = "block";
  },1100);
});



