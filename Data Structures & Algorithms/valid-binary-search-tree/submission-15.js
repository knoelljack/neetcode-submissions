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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.search(root, -Infinity, Infinity);
    }

    search(node, min, max) {
        if(!node) return true;
        if(node.val <= min || node.val >= max) return false;
        return this.search(node.left, min, node.val) && this.search(node.right, node.val, max);
    }
}
