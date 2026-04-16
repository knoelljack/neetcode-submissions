class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array.from({length: m}, () => new Array(n).fill(-1));
        return this.search(0,0,m,n,memo);
    }

    search(x, y, rows, cols, memo) {
        if(x >= rows || y >= cols) return 0;
        if(x == rows - 1 && y == cols - 1) return 1;
        if(memo[x][y] !== -1) return memo[x][y];
        memo[x][y] = this.search(x+1, y, rows, cols, memo) + this.search(x, y+1, rows, cols, memo);
        return memo[x][y];
    }
}
