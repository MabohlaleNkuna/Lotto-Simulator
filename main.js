// main.js

function showRoleSelection() {
    document.getElementById('roleSelection').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'none';
}

function showLoginInterface(role) {
    localStorage.setItem('role', role);
    document.getElementById('roleSelection').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = localStorage.getItem('role');

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        if (role === 'user') {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('userDashboard').style.display = 'block';
        } else if (role === 'admin') {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('adminDashboard').style.display = 'block';
        }
    } else {
        alert('Please enter valid credentials');
    }
}

// Initial call to show role selection on page load
window.onload = showRoleSelection;