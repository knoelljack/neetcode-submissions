class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({length: n}, () => []);
        
        for(let [n1,n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const visited = new Set();

        function check(node, parent) {
            if(visited.has(node)) return false;
            
            visited.add(node);

            for(let nei of adj[node]) {
                if(nei === parent) continue;
                if(!check(nei, node)) return false;
            }

            return true;
        }

        return check(0, -1) && visited.size === n;
    }
}
