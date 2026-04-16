class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let ROWS = board.length;
        let COLS = board[0].length;

        const search = (x, y, i) => {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || board[x][y] !== word[i]) return false;
            if(i === word.length - 1) return true;
            const temp = board[x][y];
            board[x][y] = '#';
            const found = 
            search(x+1, y, i + 1) ||
            search(x-1, y, i + 1) ||
            search(x, y+1, i + 1) ||
            search(x, y-1, i + 1);
            board[x][y] = temp;
            return found;
        }

        for(let i=0; i<ROWS; i++) {
            for(let j=0; j<COLS; j++) {
                if(search(i,j,0)) return true;
            }
        }

        return false;
    }
}
