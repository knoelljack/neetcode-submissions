class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const atl = new Set();
        const pac = new Set();
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const res = [];

        function spread(r, c, visited, prevHeight) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevHeight) return;
            const key = r + "," + c;
            if(visited.has(key)) return;
            visited.add(key);
            spread(r + 1, c, visited, heights[r][c]);
            spread(r - 1, c, visited, heights[r][c]);
            spread(r, c + 1, visited, heights[r][c]);
            spread(r, c - 1, visited, heights[r][c]);
        }

        for(let r=0; r < ROWS; r++) {
            spread(r, 0, pac, heights[r][0]);
            spread(r, COLS - 1, atl, heights[r][COLS - 1]);
        }

        for(let c=0; c < COLS; c++) {
            spread(0, c, pac, heights[0][c]);
            spread(ROWS - 1, c, atl, heights[ROWS - 1][c]);
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                const key = r + "," + c;
                if(atl.has(key) && pac.has(key)) res.push([r,c]);
            }
        }

        return res;
    }
}
