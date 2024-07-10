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

function submitBoards() {
    const validSelection = boards.every(board => board.selectedNumbers.length === maxNumbers);

    if (validSelection) {
        localStorage.setItem('boards', JSON.stringify(boards));
        alert('Boards submitted successfully');
    } else {
        alert('Please select 6 numbers on each board');
    }
}

window.onload = function() {
    document.getElementById('boardSelection').style.display = 'block';
}
