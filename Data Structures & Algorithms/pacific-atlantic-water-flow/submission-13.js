class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const pac = new Set();
        const atl = new Set();
        const res = [];

        function dfs(r, c, prevHeight, set) {
            const key = `${r},${c}`;
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevHeight || set.has(key)) return;
            set.add(key);
            dfs(r+1, c, heights[r][c], set);
            dfs(r-1, c, heights[r][c], set);
            dfs(r, c+1, heights[r][c], set);
            dfs(r, c-1, heights[r][c], set);
        }

        for(let r=0; r < ROWS; r++) {
            dfs(r, 0, heights[r][0], pac);
            dfs(r, COLS - 1, heights[r][COLS-1], atl);
        }

        for(let c=0; c < COLS; c++) {
            dfs(0, c, heights[0][c], pac);
            dfs(ROWS-1, c, heights[ROWS-1][c], atl);
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                const key = `${r},${c}`;
                if(pac.has(key) && atl.has(key)) res.push([r,c]);
            }
        }

        return res;
    }
}
