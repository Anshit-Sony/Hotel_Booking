let timer;
let flashMessage = document.getElementById('flash-message');

function closeFlashMessage() {
  flashMessage.style.display = 'none';
  clearTimeout(timer); // Stop the 5-second timeout if "X" is clicked
}

function showFlashMessage() {
  flashMessage.style.display = 'flex'; // Show the message

  // Set up the timer to hide the message after 5 seconds
  timer = setTimeout(() => {
    flashMessage.style.display = 'none';
  }, 5000);
}

// Call the showFlashMessage function when needed
showFlashMessage();

