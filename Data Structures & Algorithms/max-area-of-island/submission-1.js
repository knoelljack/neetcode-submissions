class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let max = 0;

        function search(r, c) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) return 0;
            grid[r][c] = 0;
            const area = search(r+1,c) + search(r-1, c) + search(r, c+1) + search(r, c-1);
            return area + 1;
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    max = Math.max(max, search(r, c));
                }
            }
        }

        return max;
    }
}
