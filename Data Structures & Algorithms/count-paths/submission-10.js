class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = {};

        function search(x, y) {
            if(x >= m || y >= n) return 0;
            if(x === m - 1 && y === n - 1) return 1;

            const key = x + "," + y;
            if(key in memo) return memo[key];

            memo[key] = search(x+1, y) + search(x, y + 1);
            return memo[key];
        }

        return search(0, 0);
    }
}
