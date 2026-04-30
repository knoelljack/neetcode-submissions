class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        
        function search(r, c, i) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[i]) return false;
            if(i === word.length - 1) return true;
            let temp = board[r][c];
            board[r][c] = "#";
            const found = 
            search(r + 1, c, i + 1) ||
            search(r - 1, c, i + 1) ||
            search(r, c + 1, i + 1) ||
            search(r, c - 1, i + 1);
            board[r][c] = temp;
            return found;
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(board[r][c] === word[0]) {
                    if(search(r, c, 0)) return true;
                }
            }
        }

        return false;
    }
}
