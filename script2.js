// script2.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation
  
    // Clear previous error messages and field styles
    clearErrors();
  
    // Validation flags
    let isValid = true;
  
    // Validate name
    const name = document.getElementById('name').value;
    if (!validateName(name)) {
      showError('name', 'Name must contain only letters and cannot be empty.');
      isValid = false;
    }
  
    // Validate email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      isValid = false;
    }
  
    // Validate password
    const password = document.getElementById('password').value;
    if (!validatePassword(password)) {
      showError('password', 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.');
      isValid = false;
    }
  
    // If everything is valid, submit the form
    if (isValid) {
      alert('Form submitted successfully!');
      // Normally, here you would submit the form to the server
    }
  });
  
  // Real-time validation event listeners
  document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    if (validateName(name)) {
      clearError('name');
    } else {
      showError('name', 'Name must contain only letters and cannot be empty.');
    }
  });
  
  document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    if (validateEmail(email)) {
      clearError('email');
    } else {
      showError('email', 'Please enter a valid email address.');
    }
  });
  
  document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    if (validatePassword(password)) {
      clearError('password');
    } else {
      showError('password', 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.');
    }
  });
  
  // Validation Functions
  
  function validateName(name) {
    const nameRegex = /^[A-Za-z]+(\s[A-Za-z]+)?$/;
    return name && nameRegex.test(name);
  }
  
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Helper Functions
  
  function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = message;
    const fieldElement = document.getElementById(fieldId);
    fieldElement.classList.add('invalid');
  }
  
  function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = '';
    const fieldElement = document.getElementById(fieldId);
    fieldElement.classList.remove('invalid');
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((errorElement) => {
      errorElement.textContent = '';
    });
  
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach((input) => {
      input.classList.remove('invalid', 'valid');
    });
  }  