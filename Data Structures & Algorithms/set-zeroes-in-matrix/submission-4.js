class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let rowZero = false;

        for(let i=0; i < ROWS; i++) {
            for(let j=0; j < COLS; j++) {
                if(matrix[i][j] === 0) {
                    matrix[0][j] = 0;

                    if(i > 0) {
                        matrix[i][0] = 0;
                    } else {
                        rowZero = true;
                    }
                }
            }
        }

        for(let i=1; i < ROWS; i++) {
            for(let j=1; j < COLS; j++) {
                if(matrix[0][j] === 0 || matrix[i][0] === 0) matrix[i][j] = 0;
            }
        }

        if(matrix[0][0] === 0) {
            for(let r=0; r < ROWS; r++) {
                matrix[r][0] = 0;
            }
        }

        if(rowZero) {
            for(let c=0; c < COLS; c++) {
                matrix[0][c] = 0;
            }
        }
    }
}
