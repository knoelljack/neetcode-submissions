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
    maxPathSum(root) {
        let res = [root.val];
        this.dfs(root, res);
        return res[0];
    }

    dfs(node, res) {
        if(!node) return 0;
        let leftMax = Math.max(this.dfs(node.left, res), 0);
        let rightMax = Math.max(this.dfs(node.right, res), 0);
        res[0] = Math.max(res[0], node.val + leftMax + rightMax);
        return node.val + Math.max(leftMax, rightMax);
    }
}
