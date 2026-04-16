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
        const oldToNew = new Map();

        const clone = (node) => {
            if(!node) return null;
            if(oldToNew.has(node)) return oldToNew.get(node);
            let copy = new Node(node.val);
            oldToNew.set(node, copy);
            for(let nei of node.neighbors) {
                copy.neighbors.push(clone(nei));
            }
            return copy;
        }

        return clone(node);
    }
}
