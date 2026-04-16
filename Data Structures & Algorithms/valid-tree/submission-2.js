class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({length: n}, () => []);
        for(const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }
        const visited = new Set();

        const dfs = (node, parent) => {
            if(visited.has(node)) return false;
            visited.add(node);
            for(const nei of adj[node]) {
                if(nei === parent) continue;
                if(!dfs(nei, node)) return false;
            }
            return true;
        }

        return dfs(0, -1) && n === visited.size;
    }
}
