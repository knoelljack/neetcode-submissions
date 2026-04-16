class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const search = (x, y) => {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || grid[x][y] == "0") return;
            grid[x][y] = "0";
            search(x+1, y);
            search(x-1, y);
            search(x, y+1);
            search(x, y-1);
            return;
        }

        for(let i=0; i < ROWS; i++) {
            for(let j=0; j < COLS; j++) {
                if(grid[i][j] == "1") {
                    search(i, j);
                    res++;
                }
            }
        }

        return res;
    }
}
