class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const q = [];

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === 0) {
                    q.push([r,c]);
                }
            }
        }

        const dirs = [
            [0,1],
            [1,0],
            [-1,0],
            [0,-1]
        ];

        while(q.length) {
            const [r,c] = q.shift();

            for(let [dr, dc] of dirs) {
                const nr = dr + r;
                const nc = dc + c;

                if(nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !== 2147483647) continue;
                grid[nr][nc] = grid[r][c] + 1;
                q.push([nr,nc]);
            }
        }
    }
}
