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
        return this.check(root, -Infinity, Infinity);
    }

    check(node, min, max) {
        if(!node) return true;
        if(node.val >= max || node.val <= min) return false;
        return this.check(node.left, min, node.val) && this.check(node.right, node.val, max);
    }
}
