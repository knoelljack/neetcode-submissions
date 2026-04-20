class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length: n}, () => []);
        const visited = Array(n).fill(false);

        for(let [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        function visit(n) {
            if(visited[n]) return;
            visited[n] = true;
            for(let nei of adj[n]) {
                visit(nei);
            }
            return;
        }

        let count = 0;

        for(let i=0; i < n; i++) {
            if(!visited[i]) {
                count++;
                visit(i);
            }
        }

        return count;
    }
}
