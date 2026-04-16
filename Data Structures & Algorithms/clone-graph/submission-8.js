/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const nodeMap = new Map();

        function clone(n) {
            if(!n) return null;
            if(nodeMap.has(n)) return nodeMap.get(n);
            const cloned = new Node(n.val);
            nodeMap.set(n, cloned);
            for(let nei of n.neighbors) {
                cloned.neighbors.push(clone(nei));
            }
            return cloned;
        }

        return clone(node);
    }
}
