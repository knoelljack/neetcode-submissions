class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        function dfs(r, c) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== "O") return;
            board[r][c] = "T";
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }

        for(let r=0; r < ROWS; r++) {
            dfs(r, 0);
            dfs(r, COLS - 1);
        }

        for(let c=0; c < COLS; c++) {
            dfs(0, c);
            dfs(ROWS-1, c);
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(board[r][c] === "O") {
                    board[r][c] = "X";
                } else if(board[r][c] === "T") {
                    board[r][c] = "O";
                }
            }
        }

    }
}
