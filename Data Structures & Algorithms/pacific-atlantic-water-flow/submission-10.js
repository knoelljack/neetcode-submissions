class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pac = new Set();
        const atl = new Set();
        const res = [];
        const ROWS = heights.length;
        const COLS = heights[0].length;

        function spread(r, c, prevHeight, visited) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevHeight) return;
            const key = `${r},${c}`;
            if(visited.has(key)) return;
            visited.add(key);
            spread(r+1, c, heights[r][c], visited);
            spread(r-1, c, heights[r][c], visited);
            spread(r, c+1, heights[r][c], visited);
            spread(r, c-1, heights[r][c], visited);
        }

        for(let r=0; r < ROWS; r++) {
            spread(r, 0, heights[r][0], pac);
            spread(r, COLS-1, heights[r][COLS-1], atl);
        }

        for(let c=0; c < COLS; c++) {
            spread(0, c, heights[0][c], pac);
            spread(ROWS-1, c, heights[ROWS-1][c], atl);
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
