class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = {};

        function search(r, c) {
            if(r >= m || c >= n) return 0;
            if(r === m-1 && c === n-1) return 1;
            const key = `${r},${c}`;
            if(key in memo) return memo[key];
            memo[key] = search(r+1,c) + search(r, c+1);
            return memo[key];
        }

        return search(0,0);

    }
}
