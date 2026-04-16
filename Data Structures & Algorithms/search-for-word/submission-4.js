class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const search = (x, y, i) => {
            if(x >= ROWS || y >= COLS || x < 0 || y < 0 || board[x][y] !== word[i]) return false;
            if(i == word.length - 1) return true;
            const temp = board[x][y];
            board[x][y] = '#';
            const found = search(x+1,y,i+1) ||
            search(x-1,y,i+1) ||
            search(x,y+1,i+1) ||
            search(x,y-1,i+1);
            board[x][y] = temp;
            return found;
        }

        for(let i=0; i < ROWS; i++) {
            for(let j=0; j < COLS; j++) {
                if(board[i][j] === word[0]) {
                    if(search(i, j, 0)) return true;
                }
            }
        }

        return false;
    }
}
