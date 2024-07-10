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
        alert('Numbers submitted!');
        // Add further functionality for ticket creation here
    } else {
        alert('Please select 6 numbers');
    }
}
