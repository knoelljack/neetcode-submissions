class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        function search(x, y, index) {
            if(x >= rows || x < 0 || y < 0 || y >= cols || board[x][y] !== word[index]) return false;
            if(index === word.length - 1) return true;
            const temp = board[x][y];
            board[x][y] = '#';
            const found = search(x+1, y, index + 1)
            || search(x-1, y, index + 1)
            || search(x, y+1, index + 1)
            || search(x, y-1, index + 1);
            board[x][y] = temp;
            return found;
    }
        for(let i=0; i < rows; i++) {
            for(let j=0; j < cols; j++) {
                if(search(i, j, 0)) return true;
            }
        }
        return false;
    }
}
