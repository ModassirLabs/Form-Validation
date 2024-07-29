document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;

    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    // Validate Name
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailPattern = /^[^@]+@\w+(\.\w+)+\w$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }

    // Validate Password
    const password = document.getElementById('password');
    if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        valid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        valid = false;
    }

    // Validate Mobile Number
    const mobile = document.getElementById('mobile');
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile.value)) {
        document.getElementById('mobileError').textContent = 'Invalid mobile number';
        valid = false;
    }

    // Validate Checkbox
    const agree = document.getElementById('agree');
    if (!agree.checked) {
        document.getElementById('agreeError').textContent = 'You must agree to the terms';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
