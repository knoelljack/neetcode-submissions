class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let steps = 0;
        let fresh = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = [];

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++){
                if(grid[r][c] === 2) q.push([r,c]);
                else if(grid[r][c] === 1) fresh++;
            }
        }

        const dirs = [[0,1], [1,0], [-1,0], [0,-1]];

        while(q.length && fresh > 0) {
            const size = q.length;

            for(let i=0; i < size; i++) {
                const [r,c] = q.shift();

                for(let d of dirs) {
                    const nr = d[0] + r;
                    const nc = d[1] + c;

                    if(nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !== 1) continue;

                    grid[nr][nc] = 2;
                    q.push([nr,nc]);
                    fresh--;
                }

            }
            steps++;
        }

        return fresh ? -1 : steps;

    }
}
