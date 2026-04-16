class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        function search(x, y, idx) {
            if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== word[idx]) return false;
            if(idx === word.length - 1) return true;
            const temp = board[x][y];
            board[x][y] = '#';
            const found = search(x+1, y, idx + 1)
             || search(x-1, y, idx + 1)
             || search(x, y+1, idx + 1)
             || search(x, y-1, idx + 1)
            board[x][y] = temp;
            return found;
        }

        for(let i=0; i < board.length; i++) {
            for(let j=0; j < board[0].length; j++) {
                if(search(i,j,0)) return true;
            }
        }

        return false;
    }
}
