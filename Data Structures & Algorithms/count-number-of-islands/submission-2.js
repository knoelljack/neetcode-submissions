class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let res = 0;

        var search = (x, y) => {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || grid[x][y] !== "1") return;
            grid[x][y] = "0";
            search(x+1,y);
            search(x-1,y);
            search(x,y+1);
            search(x,y-1);
        }

        for(let i=0; i<ROWS; i++) {
            for(let j=0; j<COLS; j++) {
                if(grid[i][j] === "1") {
                    res++;
                    search(i, j);
                }
            }
        }


        return res;
    }
}
