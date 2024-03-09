const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

//validate password matching
function validatePasswordMatch() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "Passwords do not match";
  } else {
    passwordError.textContent = "";
  }
}

//check if passwords are correct when user clicks outside
confirmPasswordInput.addEventListener("blur", validatePasswordMatch);
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  //don't submit because we're just testing
  event.preventDefault();
});
