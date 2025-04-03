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
    return { createBoard, createPlayer, addMark, checkWin };
})();
