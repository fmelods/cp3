document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!user) {
        window.location.href = './paginas/login.html';
    } else {
        document.getElementById('welcomeMessage').textContent = 'Bem-vindo, ' + user.email;
    }

    document.getElementById('logoutButton').addEventListener('click', () => {
        sessionStorage.removeItem('user');
        window.location.href = './paginas/login.html';
    });
});
