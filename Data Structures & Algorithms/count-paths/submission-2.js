class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const cache = {};

        const search = (x, y) => {
            if(x < 0 || y < 0 || x >= m || y >= n) return 0;
            if(x == m - 1 && y == n - 1) return 1;
            const key = `${x},${y}`;
            if(key in cache) return cache[key];
            cache[key] = search(x+1, y) + search(x, y+1);
            return cache[key];
        }

        return search(0,0);
    }
}
