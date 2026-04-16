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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false;
        if(this.isSame(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSame(node1, node2) {
        if(!node1 && !node2) return true;
        if(!node1 || !node2 || node1.val !== node2.val) return false;
        return this.isSame(node1.left, node2.left) && this.isSame(node1.right, node2.right);
    }
}
