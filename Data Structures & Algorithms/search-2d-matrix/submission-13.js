class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let currRow = 0;

        while(currRow < matrix.length) {
            let lo = 0, hi = matrix[currRow].length - 1;

            if (target < matrix[currRow][lo]) return false;
            else if(target > matrix[currRow][hi]) {
                currRow++;
                continue;
            }
            else {
                while(lo <= hi) {
                    const mid = Math.floor((lo + hi) / 2);
                    if(matrix[currRow][mid] === target) return true;
                    if(matrix[currRow][mid] > target) hi = mid - 1;
                    else lo = mid + 1;
                }
            }

            return false;
        }

        return false;
    }
}
