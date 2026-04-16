class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i < board.length; i++) {
            let rowSet = new Set();
            let colSet = new Set();
            for(let j=0; j < board[0].length; j++) {
                let rowSq = board[i][j];
                let colSq = board[j][i];
                if(rowSq !== "." && rowSet.has(rowSq)) return false;
                if(colSq !== "." && colSet.has(colSq)) return false;
                rowSet.add(rowSq);
                colSet.add(colSq);
            }
        }

        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let sqSet = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        let val = board[boxRow * 3 + i][boxCol * 3 + j];
                        if (val !== "." && sqSet.has(val)) return false;
                        sqSet.add(val);
            }
        }
    }
}

        return true;
    }
}
