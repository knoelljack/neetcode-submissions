class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const q = [];

        const dirs = [[0,1], [1,0], [-1,0], [0,-1]];

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === 0) q.push([r,c]);
            }
        }

        while(q.length) {
            const curr = q.shift();

            for(let d of dirs) {
                const nr = d[0] + curr[0];
                const nc = d[1] + curr[1];

                if(nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !== 2147483647) continue;
                grid[nr][nc] = grid[curr[0]][curr[1]] + 1;
                q.push([nr, nc]);
            }
        }
    }
}
