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
        if(!root && !subRoot) return true;
        if(!root || !subRoot) return false;
        if(this.isSame(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSame(p, q) {
        if(!p && !q) return true;
        if(!p || !q || p.val !== q.val) return false;
        return this.isSame(p.left, q.left) && this.isSame(p.right, q.right);
    }
}
