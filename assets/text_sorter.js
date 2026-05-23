const initialRandomText = document.getElementById('init-random-text');

function loadAndChooseRandomText() {
    fetch('/assets/texts.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading text file: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const textArray = data.split('\n').filter(line => line.trim() !== '');
            const indexRandom = Math.floor(Math.random() * textArray.length);
            initialRandomText.textContent = textArray[indexRandom];
        })
        .catch(error => {
            console.error('Error:', error);
            initialRandomText.textContent = ':)';
        });
}

loadAndChooseRandomText();