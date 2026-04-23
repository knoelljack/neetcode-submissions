class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let count = 0;

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === "1") {
                    spread(r, c);
                    count++;
                }
            }
        }

        return count;

        function spread(x, y) {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || grid[x][y] !== "1") return;
            grid[x][y] = "0";
            spread(x + 1, y);
            spread(x - 1, y);
            spread(x, y + 1);
            spread(x, y - 1);
        }
    }
}
