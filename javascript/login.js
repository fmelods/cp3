document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (!localStorage.getItem('users')) {
        const users = [
            { email: 'user1@example.com', password: 'password123' },
            { email: 'user2@example.com', password: 'mypassword' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                sessionStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../index.html';
            } else {
                errorMessage.textContent = 'Invalid login credentials';
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }
        });
    }
});
