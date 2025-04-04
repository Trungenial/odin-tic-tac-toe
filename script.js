const game = (() => {
    function createPlayer(name, marker) {
        return { name, marker };
    }

    const boardSizeInput = document.querySelector("#board-size-input");
    const gameBoard = document.querySelector("#game-board");
    const confirmButton = document.querySelector(".js-confirm-button");
    const startGameButton = document.querySelector("#start-game-button");
    const resetGameButton = document.querySelector("#start-game-button");
    const player1Input = document.querySelector("#player1-name-input");
    const player2Input = document.querySelector("#player2-name-input");
    const modal = document.querySelector("#modal-name");
    const resultModal = document.querySelector("#modal-result");
    const resultContent = document.querySelector("#result");
    const submitName = document.querySelector(".name-submit");

    document.addEventListener("DOMContentLoaded", () => {
        modal.showModal();
    });

    submitName.addEventListener("click", () => {
        const player1Name = player1Input.value;
        const player2Name = player2Input.value;

        renderBoard(player1Name, player2Name);
    });

    boardSizeInput.addEventListener("input", (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, "");
    });

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

    function addMark(player, board, iIndex, jIndex) {
        //Coordinate of the current marker of the player
        const i = parseInt(iIndex);
        const j = parseInt(jIndex);

        board[i][j] = player.marker;
    }

    function checkWin(board, player, iIndex, jIndex, n) {
        const rows = board.length;
        const cols = board[0].length;

        function countDirection(iStep, jStep) {
            let count = 1;
            let i = iIndex + iStep,
                j = jIndex + jStep;

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
            i = iIndex - iStep;
            j = jIndex - jStep;
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

    function checkTie(total, step) {
        return total === step;
    }

    function printResult(win = false, tie = false, currentPlayer) {
        if (win === true) {
            resultContent.textContent = `${currentPlayer.name} wins!
            Congratulations`;
        } else if (tie === true) {
            resultContent.textContent = "Tie";
        }

        resultModal.showModal();
    }

    function swapCurrentPlayer(currentPlayer, player1, player2) {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else if (currentPlayer === player2) {
            currentPlayer = player1;
        }

        return currentPlayer;
    }

    function renderBoard(player1Name, player2Name) {
        const player1 = createPlayer(player1Name, "X");
        const player2 = createPlayer(player2Name, "O");
        let currentPlayer = player1;

        gameBoard.textContent = "";

        // The N x N. boardSize = N
        const boardSize = parseInt(boardSizeInput.value);

        const board = createBoard(boardSize);

        //get width and height of the board in pixel
        let gameBoardWidth = gameBoard.offsetWidth || 500;
        let gameBoardHeight = gameBoard.offsetHeight || 500;

        const rows = board.length;
        const cols = board[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let cellElement = document.createElement("div");
                cellElement.textContent = "";
                cellElement.setAttribute("data-iindex", `${i}`);
                cellElement.setAttribute("data-jindex", `${j}`);

                //set the actual width and height of each cell in the board
                cellElement.style.width = `${gameBoardWidth / boardSize}px`;
                cellElement.style.height = `${gameBoardHeight / boardSize}px`;

                // Set the font-size of the mark
                cellElement.style.fontSize = `${gameBoardWidth / boardSize}px`;

                gameBoard.appendChild(cellElement);
            }
        }
        createMechanism(board, currentPlayer, player1, player2);

        confirmButton.addEventListener("click", () => {
            reRenderBoard(currentPlayer, player1, player2);
        });
    }

    function reRenderBoard(currentPlayer, player1, player2) {
        gameBoard.textContent = "";

        // The N x N. boardSize = N
        const boardSize = parseInt(boardSizeInput.value);

        const board = createBoard(boardSize);

        //get width and height of the board in pixel
        let gameBoardWidth = gameBoard.offsetWidth || 500;
        let gameBoardHeight = gameBoard.offsetHeight || 500;

        const rows = board.length;
        const cols = board[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let cellElement = document.createElement("div");
                cellElement.textContent = "";
                cellElement.setAttribute("data-iindex", `${i}`);
                cellElement.setAttribute("data-jindex", `${j}`);

                //set the actual width and height of each cell in the board
                cellElement.style.width = `${gameBoardWidth / boardSize}px`;
                cellElement.style.height = `${gameBoardHeight / boardSize}px`;

                // Set the font-size of the mark
                cellElement.style.fontSize = `${gameBoardWidth / boardSize}px`;

                gameBoard.appendChild(cellElement);
            }
        }
        createMechanism(board, currentPlayer, player1, player2);
    }

    function countBoardElements(board) {
        return board.reduce((count, row) => count + row.length, 0);
    }

    function createMechanism(board, currentPlayer, player1, player2) {
        cells = document.querySelectorAll("#game-board div");
        const total = countBoardElements(board);
        let steps = 0;
        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                if (cell.textContent === "") {
                    // Each step add steps variable 1 value until steps reachs total cells
                    steps++;

                    cell.textContent = currentPlayer.marker;
                    const iIndex = parseInt(cell.dataset.iindex);
                    const jIndex = parseInt(cell.dataset.jindex);
                    addMark(currentPlayer, board, iIndex, jIndex);

                    const isWin = checkWin(
                        board,
                        currentPlayer,
                        iIndex,
                        jIndex,
                        3
                    );
                    const isTie = checkTie(total, steps);

                    if (isWin || isTie) {
                        printResult(isWin, isTie, currentPlayer);
                    }

                    currentPlayer = swapCurrentPlayer(
                        currentPlayer,
                        player1,
                        player2
                    );
                }
            });
        });
    }

    function reset() {
        return 0;
    }
})();
