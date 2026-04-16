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

        const clone = (node) => {
            if(!node) return null;
            if(nodeMap.has(node)) return nodeMap.get(node);
            let cloned = new Node(node.val);
            nodeMap.set(node, cloned);
            for(let nei of node.neighbors) {
                cloned.neighbors.push(clone(nei));
            }
            return cloned;
        }

        return clone(node);
    }
}
