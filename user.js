// user.js

let selectedNumbers = [];

function generateNumbers() {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';

    for (let i = 1; i <= 52; i++) {
        const numberElement = document.createElement('div');
        numberElement.className = 'number';

        if (i >= 1 && i <= 13) {
            numberElement.classList.add('red');
        } else if (i >= 14 && i <= 25) {
            numberElement.classList.add('yellow');
        } else if (i >= 26 && i <= 37) {
            numberElement.classList.add('green');
        } else {
            numberElement.classList.add('blue');
        }

        numberElement.textContent = i;
        numberElement.onclick = () => selectNumber(i);
        numbersContainer.appendChild(numberElement);
    }
}

function selectNumber(number) {
    if (selectedNumbers.includes(number)) {
        selectedNumbers = selectedNumbers.filter(num => num !== number);
    } else {
        if (selectedNumbers.length < 6) {
            selectedNumbers.push(number);
        } else {
            alert('You can only select 6 numbers');
        }
    }

    updateNumberSelection();
}

function updateNumberSelection() {
    const numbersContainer = document.getElementById('numbers');
    const numberElements = numbersContainer.getElementsByClassName('number');

    for (let i = 0; i < numberElements.length; i++) {
        const numberElement = numberElements[i];
        const number = parseInt(numberElement.textContent, 10);

        if (selectedNumbers.includes(number)) {
            numberElement.classList.add('selected');
        } else {
            numberElement.classList.remove('selected');
        }
    }
}

function submitNumbers() {
    if (selectedNumbers.length === 6) {
        localStorage.setItem('selectedNumbers', JSON.stringify(selectedNumbers));
        document.getElementById('numberSelection').style.display = 'none';
        document.getElementById('boardSelection').style.display = 'block';
    } else {
        alert('Please select 6 numbers');
    }
}

function generateBoards() {
    const boardCount = parseInt(document.getElementById('boardCount').value, 10);
    let boardSize =5;
    if (boardCount >= 1 && boardCount <= 10) {
        localStorage.setItem('boardCount', boardCount);
        alert(`You have chosen ${boardCount} board(s)`);

    } else {
        alert('Please select a valid number of boards between 1 and 10');
    }
}

// Call generateNumbers on page load
window.onload = generateNumbers;
