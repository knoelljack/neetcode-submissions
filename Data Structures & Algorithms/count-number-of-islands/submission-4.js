class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const search = (r, c) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] !== "1") return;
            grid[r][c] = "0";
            search(r + 1, c);
            search(r - 1, c);
            search(r, c + 1);
            search(r, c - 1);
        }

        let res = 0;

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === "1") {
                    res += 1;
                    search(r, c);
                }
            }
        }
        
        return res;
    }
}
