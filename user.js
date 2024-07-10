// user.js

let boards = [];
const maxNumbers = 6;

function generateBoards() {
    const boardCount = parseInt(document.getElementById('boardCount').value, 10);
    const boardContainer = document.getElementById('boardContainer');
    boardContainer.innerHTML = '';

    if (boardCount >= 1 && boardCount <= 10) {
        localStorage.setItem('boardCount', boardCount);
        alert(`You have chosen ${boardCount} board(s)`);

        for (let i = 0; i < boardCount; i++) {
            const boardDiv = document.createElement('div');
            boardDiv.className = 'board';
            boardDiv.id = `board-${i}`;

            for (let j = 1; j <= 52; j++) {
                const numberElement = document.createElement('div');
                numberElement.className = 'number';
                numberElement.classList.add("numberDiv")

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
                numberElement.onclick = () => selectNumber(i, j);
                boardDiv.appendChild(numberElement);
            }

            boards.push({ id: i, selectedNumbers: [] });
            boardContainer.appendChild(boardDiv);
        }
    } else {
        alert('Please select a valid number of boards between 1 and 10');
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
    const boardDiv = document.getElementById(`board-${boardIndex}`);
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
    } else {
        alert('Please select 6 numbers on each board');
    }
}

window.onload = function() {
    document.getElementById('boardSelection').style.display = 'block';
}
