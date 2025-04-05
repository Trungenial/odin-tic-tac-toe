const game = (() => {
    function createPlayer(name, marker, color) {
        return { name, marker, color };
    }

    const boardSizeInput = document.querySelector("#board-size-input");
    const gameBoard = document.querySelector("#game-board");
    const confirmButton = document.querySelector(".js-confirm-button");
    const startGameButton = document.querySelector("#start-game-button");
    const player1Input = document.querySelector("#player1-name-input");
    const player2Input = document.querySelector("#player2-name-input");
    const modal = document.querySelector("#modal-name");
    const resultModal = document.querySelector("#modal-result");
    const resultContent = document.querySelector("#result");
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");
    const consecutiveInput = document.querySelector("#consecutive-input");
    const viewMatch = document.querySelector(".view-match");

    document.addEventListener("DOMContentLoaded", () => {
        modal.showModal();
    });

    modal.addEventListener("close", () => {
        const player1Name = player1Input.value;
        const player2Name = player2Input.value;
        renderBoard(player1Name, player2Name);
    });

    boardSizeInput.addEventListener("input", (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, "");
    });

    consecutiveInput.addEventListener("input", (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, "");
    });

    startGameButton.addEventListener("click", () => {
        gameBoard.classList.remove("disable-click");
        startGameButton.style.display = "none";
    });

    viewMatch.addEventListener("click", () => {
        resultModal.close();
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

    function renderPlayer(player1Obj, player2Obj) {
        player1.textContent = `${player1Obj.name}`;
        player2.textContent = `${player2Obj.name}`;

        marker1 = document.createElement("div");
        marker1.textContent = player1Obj.marker;
        marker1.style.fontSize = "200px";

        marker2 = document.createElement("div");
        marker2.textContent = player2Obj.marker;
        marker2.style.fontSize = "200px";

        player1.appendChild(marker1);
        player2.appendChild(marker2);
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

    function checkWin(board, player, iIndex, jIndex) {
        const rows = board.length;
        const cols = board[0].length;
        const n = parseInt(consecutiveInput.value);
        cells = document.querySelectorAll("#game-board div");

        function countDirection(iStep, jStep) {
            const clonedBoard = board.map((row) => row.map(() => ""));

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
                clonedBoard[i][j] = board[i][j];
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
                clonedBoard[i][j] = board[i][j];
                i -= iStep;
                j -= jStep;
            }

            if (count >= n) {
                for (let n = 0; n < rows; n++) {
                    for (let m = 0; m < cols; m++) {
                        if (clonedBoard[m][n] !== "") {
                            cells.forEach((cell) => {
                                if (
                                    (m === parseInt(cell.dataset.iindex) &&
                                        n === parseInt(cell.dataset.jindex)) ||
                                    (iIndex === parseInt(cell.dataset.iindex) &&
                                        jIndex ===
                                            parseInt(cell.dataset.jindex))
                                ) {
                                    cell.style.color = "yellow";
                                }
                            });
                        }
                    }
                }
                return true;
            } else return false;
        }

        return (
            countDirection(0, 1) || // Horizontal
            countDirection(1, 0) || // Vertical
            countDirection(1, 1) || // Main diagonal
            countDirection(1, -1) // Anti- diagonal
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

    function swapCurrentPlayer(gameState, player1, player2) {
        if (gameState.currentPlayer === player1) {
            gameState.currentPlayer = player2;
        } else if (gameState.currentPlayer === player2) {
            gameState.currentPlayer = player1;
        } else {
            gameState.currentPlayer = player1;
        }

        return gameState;
    }

    function renderBoard(player1Name, player2Name) {
        const player1 = createPlayer(player1Name, "X", "red");
        const player2 = createPlayer(player2Name, "O", "blue");

        renderPlayer(player1, player2);
        reRenderBoard(player1, player2);

        confirmButton.addEventListener("click", () => {
            reRenderBoard(player1, player2);
            startGameButton.style.display = "inline-block";
            gameBoard.classList.add("disable-click");
        });
    }

    function reRenderBoard(player1, player2) {
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
        createMechanism(board, player1, player2);
    }

    function countBoardElements(board) {
        return board.reduce((count, row) => count + row.length, 0);
    }

    let gameState = {
        currentPlayer: {},
        steps: 0,
    };

    function createClickCellHander(cell, total, board, player1, player2) {
        return function clickCellHandler() {
            if (cell.textContent === "") {
                // Each step add steps variable 1 value until steps reachs total cells
                gameState.steps++;

                // assign player1 to currentPlayer in default
                gameState = swapCurrentPlayer(gameState, player1, player2);

                cell.textContent = gameState.currentPlayer.marker;
                cell.style.color = gameState.currentPlayer.color;

                const iIndex = parseInt(cell.dataset.iindex);
                const jIndex = parseInt(cell.dataset.jindex);
                addMark(gameState.currentPlayer, board, iIndex, jIndex);

                const isWin = checkWin(
                    board,
                    gameState.currentPlayer,
                    iIndex,
                    jIndex
                );
                const isTie = checkTie(total, gameState.steps);

                if (isWin || isTie) {
                    printResult(isWin, isTie, gameState.currentPlayer);
                    removeClickHandler();
                    gameState.steps = 0;
                }
            }
        };
    }

    let eventHandlers = [];

    function removeClickHandler() {
        eventHandlers.forEach(({ cell, clickCellHandler }) => {
            cell.removeEventListener("click", clickCellHandler); // Loại bỏ event listener
            cell.style.cursor = "not-allowed";
        });
        // Xóa mảng eventHandlers để giải phóng bộ nhớ
        eventHandlers = [];
    }

    function createMechanism(board, player1, player2) {
        cells = document.querySelectorAll("#game-board div");
        const total = countBoardElements(board);
        cells.forEach((cell) => {
            const clickCellHandler = createClickCellHander(
                cell,
                total,
                board,
                player1,
                player2
            );

            cell.addEventListener("click", clickCellHandler);

            // Save event listener for removing in the future
            eventHandlers.push({ cell, clickCellHandler });
        });
    }

    function reset() {
        return 0;
    }
})();
