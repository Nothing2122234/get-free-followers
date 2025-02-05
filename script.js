  function validateEmail() {
      const emailInput = document.getElementById('email');
      const errorMessage = document.getElementById('error-message');
      const loader = document.getElementById('loader');
      const loadingBg = document.getElementById('loading-bg');
      const nextButton = document.querySelector('.next-button');
      const loadingLine = document.getElementById('loading-line');
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailInput.value.trim()) {
        showError(emailInput, errorMessage, "Email is required.");
      } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, errorMessage, "Please enter a valid email.");
      } else {
        hideError(emailInput, errorMessage);
        
        // Show loading background and blue line
        loadingBg.style.display = 'block';
        nextButton.classList.add('loading');
        
        // Start the animation of the blue line (its width will animate)
        loadingLine.style.display = 'block';
        loadingLine.style.animation = 'loadLine 2s ease-in-out infinite'; // Add animation on button click

        // Simulate a 4-second delay before redirecting
        setTimeout(() => {
          window.location.href = "password.html"; // Redirect to YouTube
        }, 4000); // 4000 milliseconds = 4 seconds
      }
    }

    function showError(inputField, errorMessage, message) {
      inputField.classList.add('input-error');
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }

    function hideError(inputField, errorMessage) {
      inputField.classList.remove('input-error');
      errorMessage.style.display = 'none';
    }
    

      