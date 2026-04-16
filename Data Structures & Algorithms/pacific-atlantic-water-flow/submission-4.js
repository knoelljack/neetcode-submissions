class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const atl = new Set();
        const pac = new Set();

        const dfs = (r, c, visited, prevHeight) => {
            const key = `${r},${c}`;
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || visited.has(key) || heights[r][c] < prevHeight) return;
            visited.add(key);
            dfs(r+1, c, visited, heights[r][c]);
            dfs(r-1, c, visited, heights[r][c]);
            dfs(r, c+1, visited, heights[r][c]);
            dfs(r, c-1, visited, heights[r][c]);
        }

        for(let r=0; r < ROWS; r++) {
            dfs(r, 0, pac, heights[r][0]);
            dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
        }
        for(let c=0; c < COLS; c++) {
            dfs(0, c, pac, heights[0][c]);
            dfs(ROWS - 1, c, atl, heights[ROWS-1][c]);
        }

        const res = [];

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                const key = `${r},${c}`;
                if(atl.has(key) && pac.has(key)) res.push([r,c]);
            }
        }

        return res;
    }
}
