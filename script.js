// Selects Output Element
const output = document.getElementById('output');

// Generation
function generatePassword() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV';
  const length = document.getElementById('length').value - 1;
  let password = '';

  // Generation
  for (let i = 0; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomIndex, randomIndex + 1);
  }

  // Updates

  output.value = password;
}

// Function to copy password which was generated

function copyPassword() {
  output.select();
  document.execCommand('copy');
  alert(`Copied the password: ${output.value}`);
}