const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');
const modeToggle = document.getElementById('mode-toggle');
const calcCard = document.querySelector('.calculator-card');
const modeLabels = document.querySelectorAll('.mode-label');

let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let shouldResetScreen = false;

modeToggle.addEventListener('change', () => {
    calcCard.classList.toggle('scientific');
    modeLabels[0].classList.toggle('active-mode');
    modeLabels[1].classList.toggle('active-mode');
});
modeLabels[0].classList.add('active-mode');

function appendNumber(number) {
    if (currentOperand === 'Error') clear();
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return;
    
    if (currentOperand.length >= 16) return;

    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
}

function chooseOperation(op) {
    if (currentOperand === 'Error') clear();
    
    if (operation !== undefined && !shouldResetScreen) {
        compute();
    }
    
    operation = op;
    previousOperand = currentOperand;
    shouldResetScreen = true;
}

function compute() {
    if (currentOperand === 'Error' || operation === undefined) return;

    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '×': computation = prev * current; break;
        case '÷':
            if (current === 0) {
                handleError();
                return;
            }
            computation = prev / current;
            break;
        case '^': computation = Math.pow(prev, current); break;
        default: return;
    }

    computation = Math.round(computation * 1e12) / 1e12;
    
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    shouldResetScreen = true;
}

function computeInstantAction(action) {
    if (currentOperand === 'Error') clear();
    
    let current = parseFloat(currentOperand);
    if (isNaN(current) && !['π', 'e'].includes(action)) return;

    let result;
    switch (action) {
        case 'sin': result = Math.sin(current * Math.PI / 180); break; // Gradis
        case 'cos': result = Math.cos(current * Math.PI / 180); break;
        case 'tan': result = Math.tan(current * Math.PI / 180); break;
        case 'log': result = Math.log10(current); break;
        case '√': result = current < 0 ? 'Error' : Math.sqrt(current); break;
        case 'x²': result = Math.pow(current, 2); break;
        case '1/x': result = current === 0 ? 'Error' : 1 / current; break;
        case '%': result = current / 100; break;
        case '±': result = current * -1; break;
        case 'π': result = Math.PI; shouldResetScreen = true; break;
        case 'e': result = Math.E; shouldResetScreen = true; break;
    }

    if (result === 'Error') {
        handleError();
    } else {
        currentOperand = (Math.round(result * 1e12) / 1e12).toString();
        shouldResetScreen = true;
    }
}

function clear() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    shouldResetScreen = false;
}

function deleteNumber() {
    if (currentOperand === 'Error') { clear(); return; }
    if (shouldResetScreen) return;
    
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '' || currentOperand === '-') {
        currentOperand = '0';
    }
}

function handleError() {
    currentOperand = 'Error';
    previousOperand = '';
    operation = undefined;
}

function updateDisplay() {
    currentDisplay.textContent = currentOperand;
    if (operation != null) {
        previousDisplay.textContent = `${previousOperand} ${operation}`;
    } else {
        previousDisplay.textContent = '';
    }
    
    currentDisplay.scrollLeft = currentDisplay.scrollWidth;
}

document.querySelectorAll('[data-num]').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.getAttribute('data-num'));
        updateDisplay();
    });
});

document.querySelectorAll('[data-op]').forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.getAttribute('data-op'));
        updateDisplay();
    });
});

document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        if (action === 'clear') clear();
        else if (action === 'delete') deleteNumber();
        else if (action === 'compute') compute();
        else computeInstantAction(action);
        updateDisplay();
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;
    
    if (key === 'Enter') { e.preventDefault(); key = 'Enter'; }
    if (key === ',') key = '.';

    const btn = document.querySelector(`[data-key="${key}"]`);
    if (btn) {
        btn.click();
        btn.classList.add('active-key'); // Feedback visual
        setTimeout(() => btn.classList.remove('active-key'), 100);
    }
});