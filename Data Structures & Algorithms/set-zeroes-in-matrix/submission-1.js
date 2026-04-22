class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const ROWS = matrix.length, COLS = matrix[0].length;
        let rowZero = false;

        // mark first row and column zeros to use
        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(matrix[r][c] === 0) {
                    matrix[0][c] = 0;

                    // keep track of first row zeroed or not
                    if(r > 0) matrix[r][0] = 0;
                    else rowZero = true;
                }
            }
        }

        // interate and change tiles to 0s based on first row/col
        for(let r=1; r < ROWS; r++) {
            for(let c=1; c < COLS; c++) {
                if(matrix[r][0] === 0 || matrix[0][c] === 0) matrix[r][c] = 0;
            }
        }

        // if top left square is set to 0, change all first column to 0
        if(matrix[0][0] === 0) {
            for(let r=0; r < ROWS; r++) {
                matrix[r][0] = 0;
            }
        }

        // finally change first row to zero if was zeroed in the first place
        if(rowZero) {
            for(let c=0; c < COLS; c++) {
                matrix[0][c] = 0;
            }
        }
    }
}
