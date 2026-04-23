class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length: n}, () => []);
        const visited = new Set();
        let components = 0;

        for(let [n1,n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        function visit(node) {
            if(visited.has(node)) return;
            visited.add(node);

            for(let nei of adj[node]) {
                visit(nei);
            }
        }

        for(let i=0; i < n; i++) {
            if(!visited.has(i)) {
                visit(i);
                components++;
            }
        }

        return components;
    }
}
