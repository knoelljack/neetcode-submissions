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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [];
        this.search(root, res);
        return res[k-1];
    }

    search(root, res) {
        if(!root) return;
        this.search(root.left, res)
        res.push(root.val);
        this.search(root.right, res);
    }
}
