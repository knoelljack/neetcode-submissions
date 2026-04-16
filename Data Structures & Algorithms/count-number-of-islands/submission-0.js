class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        const search = (x, y, grid) => {
            if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === "0") return;
            grid[x][y] = "0";
            search(x+1, y, grid);
            search(x-1, y, grid);
            search(x, y+1, grid);
            search(x, y-1, grid);
            return;
        }

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[0].length; j++) {
                if(grid[i][j] == "1") {
                    search(i, j, grid);
                    count++;
                }
            }
        }

        return count;
    }
}
