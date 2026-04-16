class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length: n}, () => []);
        for(let [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const visited = Array(n).fill(false);

        function dfs(n) {
            if(visited[n]) return;
            visited[n] = true;
            for(let nei of adj[n]) {
                dfs(nei);
            }
            return;
        }

        let count = 0;

        for(let i=0; i < n; i++) {
            if(!visited[i]) {
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
