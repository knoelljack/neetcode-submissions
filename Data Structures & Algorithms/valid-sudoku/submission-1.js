class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i < board.length; i++) {
            let rowSet = new Set();
            let colSet = new Set();
            let sqSet = new Set();
            for(let j=0; j < board[0].length; j++) {
                //rows & cols
                let rowSq = board[i][j];
                let colSq = board[j][i];
                if(rowSq !== "." && rowSet.has(rowSq)) return false;
                if(colSq !== "." && colSet.has(colSq)) return false;
                rowSet.add(rowSq);
                colSet.add(colSq);

                // squares
                let rowStart = Math.floor(i / 3) * 3;
                let colStart = (i % 3) * 3;
                let rowIdx = rowStart + Math.floor(j / 3);
                let colIdx = colStart + (j % 3);
                let sqVal = board[rowIdx][colIdx];
                if(sqVal !== '.' && sqSet.has(sqVal)) return false;
                sqSet.add(sqVal);
            }
        }

        return true;
    }
}
