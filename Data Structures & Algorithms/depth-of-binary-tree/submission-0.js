/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        return this.dfs(root);
    }

    dfs(node) {
        if(!node) return 0;
        return Math.max(this.dfs(node.left), this.dfs(node.right)) + 1;
    }
}
