class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let steps = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let fresh = 0;

        const q = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        const dirs = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        while (q.length && fresh > 0) {
            let size = q.length;

            for (let i = 0; i < size; i++) {
                const [r, c] = q.shift();

                for (let [dr, dc] of dirs) {
                    const nr = dr + r;
                    const nc = dc + c;
                    if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !== 1)
                        continue;
                    q.push([nr, nc]);
                    grid[nr][nc] = 2;
                    fresh--;
                }
            }

            steps++;
        }

        return fresh === 0 ? steps : -1;
    }
}
