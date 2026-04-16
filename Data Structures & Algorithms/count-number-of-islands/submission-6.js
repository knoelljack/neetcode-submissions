class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands = 0;

        function search(r, c) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] !== "1") return;
            grid[r][c] = "0";
            search(r+1, c);
            search(r-1, c);
            search(r, c+1);
            search(r, c-1);
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === "1") {
                    search(r, c);
                    islands++;
                } 
            }
        }

        return islands;
    }
}
