class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const res = [];
        let left = 0;
        let right = matrix[0].length;
        let top = 0;
        let bottom = matrix.length;

        while(top < bottom && left < right) {
            for(let i=left; i < right; i++) {
                res.push(matrix[top][i]);
            }

            top++;

            for(let i=top; i < bottom; i++) {
                res.push(matrix[i][right-1]);
            }

            right--;

            if(top >= bottom || left >= right) break;

            for(let i=right-1; i >= left; i--) {
                res.push(matrix[bottom-1][i]);
            }

            bottom--;

            for(let i=bottom-1; i >= top; i--) {
                res.push(matrix[i][left]);
            }

            left++;
        }

        return res;
    }
}
