document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'test@example.com' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform another action here
    } else {
        alert('Invalid email or password.');
        // Highlight the input fields or provide more specific feedback
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('password').style.borderColor = 'red';
    }
});
