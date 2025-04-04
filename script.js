const game = (() => {
    function createPlayer(name, marker, indexValue) {
        return { name, marker, indexValue };
    }

    function createBoard(size) {
        const board = [];
        for (let i = 0; i < size; i++) {
            board[i] = [];
            for (let j = 0; j < size; j++) {
                board[i][j] = "";
            }
        }
        return board;
    }

    function start() {
        return 1;
    }

    function addMark(player, board) {
        //Coordinate of the current marker of the player
        const i = player.indexValue.i;
        const j = player.indexValue.j;

        board[i][j] = player.marker;
    }

    function checkWin(board, player, n) {
        const rows = board.length;
        const cols = board[0].length;

        function countDirection(iStep, jStep) {
            let count = 1;
            let i = player.indexValue.i + iStep,
                j = player.indexValue.j + jStep;

            // Go forward
            while (
                i >= 0 &&
                j >= 0 &&
                i < rows &&
                j < cols &&
                board[i][j] === player.marker
            ) {
                count++;
                i += iStep;
                j += jStep;
            }

            // Go backward
            i = player.indexValue.i - iStep;
            j = player.indexValue.j - jStep;
            while (
                i >= 0 &&
                j >= 0 &&
                i < rows &&
                j < cols &&
                board[i][j] === player.marker
            ) {
                count++;
                i -= iStep;
                j -= jStep;
            }

            return count >= n;
        }

        return (
            countDirection(0, 1) || // Horizontal
            countDirection(1, 0) || // Vertical
            countDirection(1, 1) || // Main diagonal
            countDirection(-1, -1) // Anti- diagonal
        );
    }

    function swapCurrentPlayer({
        currentPlayer = player1,
        player1,
        player2,
    } = {}) {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else if (currentPlayer === player2) {
            currentPlayer = player1;
        }

        return currentPlayer;
    }

    const boardSizeInput = document.querySelector("#js-board-size-input");
    const gameBoard = document.querySelector("#js-game-board");
    const confirmButton = document.querySelector(".js-confirm-button");

    function renderBoard() {
        gameBoard.textContent = "";

        // The N x N. boardSize = N
        const boardSize = parseInt(boardSizeInput.value);

        const board = game.createBoard(boardSize);

        //get width and height of the board in pixel
        let gameBoardWidth = gameBoard.offsetWidth || 500;
        let gameBoardHeight = gameBoard.offsetHeight || 500;

        board.forEach((row) => {
            row.forEach(() => {
                let cellElement = document.createElement("div");
                cellElement.textContent = "";

                //set the actual width and height of each cell in the board
                cellElement.style.width = `${gameBoardWidth / boardSize}px`;
                cellElement.style.height = `${gameBoardHeight / boardSize}px`;

                gameBoard.appendChild(cellElement);
            });
        });
    }

    confirmButton.addEventListener("click", renderBoard);

    boardSizeInput.addEventListener("input", (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, "");
    });

    function reset() {
        return 0;
    }

    return {
        createBoard,
        createPlayer,
        start,
        addMark,
        checkWin,
        reset,
        renderBoard,
    };
})();

game.renderBoard();
