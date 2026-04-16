class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        return this.search(0,0,m,n);
    }

    search(x, y, rows, cols) {
        if(x < 0 || y < 0 || x >= rows || y >= cols) return 0;
        if(x == rows - 1 && y == cols - 1) return 1;
        return this.search(x+1, y, rows, cols) + this.search(x, y+1, rows, cols);
    }
}
