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

        const dfs = (x, y, visited, prevHeight) => {
            const key = `${x},${y}`;
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || visited.has(key) || heights[x][y] < prevHeight) return;
            visited.add(key);
            dfs(x+1,y,visited,heights[x][y]);
            dfs(x-1,y,visited,heights[x][y]);
            dfs(x,y+1,visited,heights[x][y]);
            dfs(x,y-1,visited,heights[x][y]);
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

        for(let i=0; i < ROWS; i++) {
            for(let j=0; j < COLS; j++) {
                const key = `${i},${j}`;
                if(atl.has(key) && pac.has(key)) res.push([i,j]);
            }
        }

        return res;
    }
}
