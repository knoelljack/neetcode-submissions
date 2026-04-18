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
        let res = [];
        this.search(root, res);
        return res[k - 1];
    }

    search(node, arr) {
        if(!node) return;
        this.search(node.left, arr);
        arr.push(node.val);
        this.search(node.right, arr);
    }
}
