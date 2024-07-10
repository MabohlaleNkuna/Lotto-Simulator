function generateBoards() {
    const boardContainer = document.getElementById('boardContainer');
    boardContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) { // Example: Generate 10 boards
        const boardDiv = document.createElement('div');
        boardDiv.className = 'board';

        for (let j = 1; j <= 52; j++) {
            const numberElement = document.createElement('div');
            numberElement.className = 'number';

            // Assign color classes based on number ranges
            if (j >= 1 && j <= 13) {
                numberElement.classList.add('red');
            } else if (j >= 14 && j <= 25) {
                numberElement.classList.add('yellow');
            } else if (j >= 26 && j <= 37) {
                numberElement.classList.add('green');
            } else {
                numberElement.classList.add('blue');
            }

            numberElement.textContent = j;
            boardDiv.appendChild(numberElement);
        }

        boardContainer.appendChild(boardDiv);
    }
}

function selectNumber(boardIndex, number) {
    const board = boards[boardIndex];

    if (board.selectedNumbers.includes(number)) {
        board.selectedNumbers = board.selectedNumbers.filter(num => num !== number);
    } else {
        if (board.selectedNumbers.length < maxNumbers) {
            board.selectedNumbers.push(number);
        } else {
            alert('You can only select 6 numbers on this board');
        }
    }

    updateNumberSelection(boardIndex);
}

function updateNumberSelection(boardIndex) {
    const boardDiv = document.getElementsByClassName('board')[boardIndex];
    const numberElements = boardDiv.getElementsByClassName('number');

    for (let i = 0; i < numberElements.length; i++) {
        const numberElement = numberElements[i];
        const number = parseInt(numberElement.textContent, 10);

        if (boards[boardIndex].selectedNumbers.includes(number)) {
            numberElement.classList.add('selected');
        } else {
            numberElement.classList.remove('selected');
        }
    }
}

function calculateCost() {
    const boardCount = parseInt(localStorage.getItem('boardCount'), 10);
    const mainLottoCost = boardCount * 5;

    const addLottoPlus1 = confirm('Do you want to add Lotto Plus 1 for R2.50 per board?');
    const addLottoPlus2 = confirm('Do you want to add Lotto Plus 2 for R2.50 per board?');

    let totalCost = mainLottoCost;

    if (addLottoPlus1) {
        totalCost += boardCount * 2.5;
    }

    if (addLottoPlus2) {
        totalCost += boardCount * 2.5;
    }

    alert(`Total cost: R${totalCost.toFixed(2)}`);
    localStorage.setItem('boards', JSON.stringify(boards));
}

function submitBoards() {
    const validSelection = boards.every(board => board.selectedNumbers.length === maxNumbers);

    if (validSelection) {
        calculateCost();
        saveTicket();
        displayTickets();
    } else {
        alert('Please select 6 numbers on each board');
    }
}

function saveTicket() {
    const boardCount = parseInt(localStorage.getItem('boardCount'), 10);
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const currentDate = new Date().toLocaleDateString();
    const ticketId = tickets.length + 1;

    boards.forEach(board => {
        const ticket = {
            ticketId: ticketId,
            date: currentDate,
            selectedNumbers: board.selectedNumbers
        };
        tickets.push(ticket);
    });

    localStorage.setItem('tickets', JSON.stringify(tickets));
}

function displayTickets() {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.innerHTML = '';

    tickets.forEach(ticket => {
        const ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';
        ticketDiv.innerHTML = `
            <p>Ticket ID: ${ticket.ticketId}</p>
            <p>Date: ${ticket.date}</p>
            <p>Numbers: ${ticket.selectedNumbers.join(', ')}</p>
        `;
        ticketContainer.appendChild(ticketDiv);
    });

    ticketContainer.style.display = 'block';
}

function checkNotifications() {
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    if (notifications.length > 0) {
        alert(`You have ${notifications.length} new notification(s).`);
    } else {
        alert('No new notifications.');
    }
}

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
