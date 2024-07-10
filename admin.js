function simulateDraw() {
    const drawnNumbers = [];

    while (drawnNumbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 52) + 1;
        if (!drawnNumbers.includes(randomNum)) {
            drawnNumbers.push(randomNum);
        }
    }

    localStorage.setItem('drawnNumbers', JSON.stringify(drawnNumbers));
    displayDrawResults(drawnNumbers);
    alert('Draw simulated!');
}

function displayDrawResults(drawnNumbers) {
    const drawResultsContainer = document.getElementById('drawResults');
    drawResultsContainer.innerHTML = '<h2>Draw Results</h2>';
    drawResultsContainer.innerHTML += drawnNumbers.join(', ');
}