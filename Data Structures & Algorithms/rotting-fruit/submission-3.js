class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0;
        let fresh = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const q = [];
        const dirs = [[0,1], [1,0], [-1,0], [0,-1]];

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(grid[r][c] === 2) q.push([r,c]);
                else if (grid[r][c] === 1) fresh++;
            }
        }

        while(q.length && fresh) {
            const levelSize = q.length;
            minutes++;

            for(let i=0; i < levelSize; i++) {
                const [r,c] = q.shift();
                
                for(let dir of dirs) {
                    const nr = dir[0] + r;
                    const nc = dir[1] + c;

                    if(nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !== 1) continue;
                    grid[nr][nc] = 2;
                    q.push([nr,nc]);
                    fresh--;
                }
            }
        }


        return fresh ? -1 : minutes;
    }
}
