let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
const statusDisplay = document.getElementById('status');

// Possible winning combinations
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to handle user move
function makeMove(cell) {
    const cellIndex = cell.getAttribute('data-index');

    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWin()) {
            statusDisplay.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (board.every(cell => cell !== '')) {
            statusDisplay.textContent = "It's a draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Function to check for a win
function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

// Function to reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = "Player X's turn";
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
