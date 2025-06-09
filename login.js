// Toggle password visibility
const passwordInput = document.getElementById('password');
const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.textContent = '🙈'; // Icon changes to "Hide"
  } else {
    passwordInput.type = 'password';
    togglePassword.textContent = '👁️'; // Icon changes to "Show"
  }
});