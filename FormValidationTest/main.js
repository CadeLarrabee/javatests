const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

// Function to validate password match
function validatePasswordMatch() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "Passwords do not match";
    document.appendChild(passwordError);
  } else {
    passwordError.textContent = "";
    document.removeChild(passwordError);
  }
}

// Add event listeners to trigger validation on blur
passwordInput.addEventListener("blur", validatePasswordMatch);
confirmPasswordInput.addEventListener("blur", validatePasswordMatch);
