class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({length: n}, () => []);
        const visited = new Set();

        for(let [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        function graph(node, parent) {
            if(visited.has(node)) return false;
            visited.add(node);

            for(let child of adj[node]) {
                if(child === parent) continue;
                if(!graph(child, node)) return false;
            }

            return true;
        }

        return graph(0, -1) && visited.size === n;

    }
}
