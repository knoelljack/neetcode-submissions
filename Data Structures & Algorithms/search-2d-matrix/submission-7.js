class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let currRow = 0;

        while(matrix[currRow]) {
            let lo = 0, hi = matrix[currRow].length - 1;

            if(matrix[currRow][lo] > target) return false;
            if(matrix[currRow][hi] < target) {
                currRow++;
                continue;
            } else {
                while(lo <= hi) {
                    const mid = Math.floor((lo + hi) / 2);

                    if(matrix[currRow][mid] === target) return true;
                    if(matrix[currRow][mid] < target) lo = mid + 1;
                    else hi = mid - 1;
                }
            }

            return false;
        }

        return false;
    }
}
