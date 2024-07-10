/*let currentRole = '';

function showLoginInterface(role) {
    currentRole = role;
    document.getElementById('roleSelection').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        if (currentRole === 'user') {
            showUserInterface();
        } else if (currentRole === 'admin') {
            showAdminInterface();
        }
    } else {
        alert('Please enter both username and password');
    }
}

function showUserInterface() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'block';
    document.getElementById('adminDashboard').style.display = 'none';
    generateNumbers();
}

function showAdminInterface() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
}

function showRoleSelection() {
    document.getElementById('roleSelection').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'none';
}
*/



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('lotto');
// create span

    for (let num = 1; num <= 13; num++) {
        const span = document.createElement('span');
        const id = 'number'+num;
        span.id = id;
       span.classList.add('spana');
       span.innerText = num;
       container.appendChild(span);
    }

    for (let num = 14; num <= 25; num++) {
        const span = document.createElement('span');
        const id = 'number'+num;
        span.id = id;
       span.classList.add('spanb');
       span.innerText = num;
       container.appendChild(span);
    }

    for (let num = 26; num <= 37; num++) {
        const span = document.createElement('span');
        const id = 'number'+num;
        span.id = id;
       span.classList.add('spanc');
       span.innerText = num;
       container.appendChild(span);
    }
 
    for (let num = 38; num < 53; num++) {
        const span = document.createElement('span');
        const id = 'number'+num;
        span.id = id;
       span.classList.add('spand');
       span.innerText = num;
       container.appendChild(span);
    }
    //for selcted numbers
    const container1 = document.getElementById('lottoBets');
    for (let num = 1; num <= 7; num++) {
        const span = document.createElement('spana');
        const id = 'lotto'+num;
        span.id = id;
       span.classList.add('spana');
       span.innerText = num;
       container1.appendChild(span);
    }

});


function bet(){

    // only bets if you are logged else logged
}

function login(){

}

function selectedNumbers(){

}