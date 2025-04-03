const game = (() => {
    function createPlayer(name, marker, coordinate) {
        return { name, marker, coordinate };
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
        const x = player.coordinate.x;
        const y = player.coordinate.y;

        board[x][y] = player.marker;
    }
    return { createBoard, createPlayer, addMark };
})();
