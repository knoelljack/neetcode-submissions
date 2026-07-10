class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i < board.length; i++) {
            const rowSet = new Set();
            const colSet = new Set();
            const sqSet = new Set();

            for(let j=0; j < board[0].length; j++) {
                const rowSq = board[i][j];
                if(rowSq !== "." && rowSet.has(rowSq)) return false;
                rowSet.add(rowSq);

                const colSq = board[j][i];
                if(colSq !== "." && colSet.has(colSq)) return false;
                colSet.add(colSq);

                const rowStart = Math.floor(i / 3) * 3;
                const colStart = (i % 3) * 3;
                const rowIdx = rowStart + Math.floor(j / 3);
                const colIdx = colStart + (j % 3);
                const sqSq = board[rowIdx][colIdx];

                if(sqSq !== "." && sqSet.has(sqSq)) return false;
                sqSet.add(sqSq);
            }

        }
    
        return true;
    }
}
