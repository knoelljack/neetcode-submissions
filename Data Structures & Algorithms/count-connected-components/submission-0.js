class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length: n}, () => []);
        for (const [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        let visited = new Array(n).fill(false);
        let count = 0;

        function dfs(node) {
            if(visited[node]) return;
            visited[node] = true;
            for(const neighbor of adj[node]) {
                dfs(neighbor);
            }
        }

        for(let i=0; i < n; i++) {
            if(!visited[i]) {
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
