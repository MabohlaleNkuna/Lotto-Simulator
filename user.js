document.addEventListener('DOMContentLoaded', () => {
    const numbersDiv = document.getElementById('numbers');
    for (let num = 1; num <= 52; num++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.innerText = num;
        if (num <= 13) {
            numberDiv.classList.add('red');
        } else if (num <= 25) {
            numberDiv.classList.add('yellow');
        } else if (num <= 37) {
            numberDiv.classList.add('green');
        } else {
            numberDiv.classList.add('blue');
        }
        numberDiv.addEventListener('click', () => {
            numberDiv.classList.toggle('selected');
        });
        numbersDiv.appendChild(numberDiv);
    }
});

function submitNumbers() {
    const selectedNumbers = [];
    const numberDivs = document.querySelectorAll('.number.selected');
    for (let i = 0; i < numberDivs.length; i++) {
        selectedNumbers.push(parseInt(numberDivs[i].innerText));
    }

    if (selectedNumbers.length !== 6) {
        alert('Please select only 6 numbers from 1 to 52.');
        return;
    }

    const ticket = {
        numbers: selectedNumbers,
        date: new Date().toISOString()
    };
    localStorage.setItem('ticket', JSON.stringify(ticket));
    document.getElementById('ticketInfo').innerText = 'Your ticket: ' + selectedNumbers.join(', ');
}
// Function to switch between User and Admin roles
function switchRole() {
    window.location.href = "admin.html";
}

