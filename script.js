const game = (() => {
    function createPlayer(name, marker) {
        return { name, marker };
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
    return { createBoard, createPlayer };
})();
