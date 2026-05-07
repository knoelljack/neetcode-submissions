class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let count = 0;

        function spread(r, c) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] !== "1") return;
            grid[r][c] = "0";
            spread(r+1, c);
            spread(r-1, c);
            spread(r, c+1);
            spread(r, c-1);
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === "1") {
                    spread(r,c);
                    count++;
                }
            }
        }

        return count;
    }
}
