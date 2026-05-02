class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let max = 0;

        function search(x,y) {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS || grid[x][y] === 0) return 0;
            grid[x][y] = 0;
            const total = search(x+1,y) + search(x, y+1) + search(x-1, y) + search(x, y-1);
            return total + 1;
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    max = Math.max(search(r,c),max);
                }
            }
        }

        return max;
    }
}
