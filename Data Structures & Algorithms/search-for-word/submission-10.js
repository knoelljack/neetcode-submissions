class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(board[r][c] === word[0]) {
                    if (search(r, c, 0)) return true;
                }
            }
        }

        return false;

        function search(x, y, i) {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || board[x][y] !== word[i]) return false;
            if(i === word.length - 1) return true;
            const temp = board[x][y];
            board[x][y] = "#";
            const found = search(x+1, y, i+1) ||
                search(x-1, y, i+1) ||
                search(x, y+1, i+1) ||
                search(x, y-1, i+1);

            board[x][y] = temp;
            return found;
        }
    }
}
