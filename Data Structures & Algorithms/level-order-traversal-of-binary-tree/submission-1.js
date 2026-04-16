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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let levels = [];
        let q = [root];

        while(q.length) {
            let level = [];
            let levelSize = q.length;

            for(let i=0; i<levelSize; i++) {
                let node = q.shift();
                level.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }

            levels.push(level);
        }

        return levels;
    }
}
