const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status-text');
const resetBtn = document.getElementById('reset-btn');
const modeSelect = document.getElementById('game-mode');
const playerChoiceGroup = document.getElementById('player-choice-group');
const choiceBtns = document.querySelectorAll('.choice-btn');
const strike = document.getElementById('strike');
const scoreXEl = document.getElementById('score-x');
const scoreOEl = document.getElementById('score-o');

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let isCpuThinking = false;

let gameMode = "pvp"; // 'pvp', 'cpu-easy', 'cpu-hard'
let humanPlayer = "X";
let cpuPlayer = "O";
let scores = { X: 0, O: 0 };

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Mapped CSS victory line 
const strikeClasses = [
    'strike-row-0', 'strike-row-1', 'strike-row-2',
    'strike-col-0', 'strike-col-1', 'strike-col-2',
    'strike-diag-0', 'strike-diag-1'
];

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    resetBtn.addEventListener('click', resetBoard);
    modeSelect.addEventListener('change', changeMode);
    choiceBtns.forEach(btn => btn.addEventListener('click', changePlayerChoice));
    statusText.textContent = `Turno de ${currentPlayer}`;
}

function cellClicked() {
    const cellIndex = this.getAttribute('data-index');

    if (board[cellIndex] !== "" || !gameActive || isCpuThinking) return;

    updateCell(this, cellIndex, currentPlayer);
    checkWinner();

    if (gameActive && gameMode !== 'pvp' && currentPlayer === cpuPlayer) {
        isCpuThinking = true;
        statusText.textContent = "La computadora está pensando...";
        setTimeout(cpuMove, 600);
    }
}

function updateCell(cell, index, player) {
    board[index] = player;
    cell.textContent = player;
    cell.classList.add(player === 'X' ? 'x-mark' : 'o-mark');
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    if (!isCpuThinking) {
        statusText.textContent = `Turno de ${currentPlayer}`;
    }
}

function checkWinner() {
    let roundWon = false;
    let winningLineIndex = -1;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = board[condition[0]];
        const cellB = board[condition[1]];
        const cellC = board[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") continue;

        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            winningLineIndex = i;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `¡${currentPlayer} GANA!`;
        gameActive = false;
        updateScore(currentPlayer);
        drawStrike(winningLineIndex);
    } else if (!board.includes("")) {
        statusText.textContent = `¡Empate!`;
        gameActive = false;
    } else {
        changePlayer();
    }
}

function drawStrike(index) {
    strike.className = 'strike';
    window.requestAnimationFrame(() => {
        strike.classList.add(strikeClasses[index]);
    });
}

function updateScore(winner) {
    scores[winner]++;
    scoreXEl.textContent = scores.X;
    scoreOEl.textContent = scores.O;
}

function resetScores() {
    scores = { X: 0, O: 0 };
    scoreXEl.textContent = "0";
    scoreOEl.textContent = "0";
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    isCpuThinking = false;
    strike.className = 'strike'; // Oculta la raya
    statusText.textContent = `Turno de ${currentPlayer}`;
    
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('x-mark', 'o-mark');
    });

    if (gameMode !== 'pvp' && cpuPlayer === 'X') {
        isCpuThinking = true;
        statusText.textContent = "La computadora está pensando...";
        setTimeout(cpuMove, 600);
    }
}

function changeMode() {
    gameMode = modeSelect.value;
    if (gameMode === 'pvp') {
        playerChoiceGroup.style.display = 'none';
    } else {
        playerChoiceGroup.style.display = 'flex';
    }
    resetScores();
    resetBoard();
}

function changePlayerChoice(e) {
    choiceBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    humanPlayer = e.target.getAttribute('data-player');
    cpuPlayer = humanPlayer === 'X' ? 'O' : 'X';
    
    resetScores();
    resetBoard();
}

function cpuMove() {
    let moveIndex;

    if (gameMode === 'cpu-easy') {
        let emptyCells = [];
        board.forEach((val, index) => { if (val === "") emptyCells.push(index); });
        moveIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    } else if (gameMode === 'cpu-hard') {
        moveIndex = minimax(board, cpuPlayer).index;
    }

    const cell = document.querySelector(`.cell[data-index="${moveIndex}"]`);
    updateCell(cell, moveIndex, currentPlayer);
    
    isCpuThinking = false;
    checkWinner();
}

function minimax(newBoard, player) {
    let availSpots = [];
    newBoard.forEach((val, idx) => { if (val === "") availSpots.push(idx); });

    if (checkWinStrict(newBoard, humanPlayer)) {
        return { score: -10 };
    } else if (checkWinStrict(newBoard, cpuPlayer)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }

    let moves = [];

    for (let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = availSpots[i];
        newBoard[availSpots[i]] = player;

        if (player === cpuPlayer) {
            let result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, cpuPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = "";
        moves.push(move);
    }

    let bestMove;
    if (player === cpuPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

function checkWinStrict(boardArray, player) {
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (boardArray[a] === player && boardArray[b] === player && boardArray[c] === player) {
            return true;
        }
    }
    return false;
}