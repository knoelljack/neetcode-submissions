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
        const res = [-Infinity];
        this.search(root, res);
        return res[0];
    }

    search(node, arr) {
        if(!node) return 0;
        const leftMax = Math.max(this.search(node.left, arr), 0);
        const rightMax = Math.max(this.search(node.right, arr), 0);
        arr[0] = Math.max(arr[0], leftMax + node.val + rightMax);
        return node.val + Math.max(leftMax, rightMax);
    }

}
