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
        let levels = [];
        if(!root) return levels;
        let q = [root];

        while(q.length) {
            let levelSize = q.length;
            let level = [];
            for(let i=0; i < levelSize; i++) {
                let curr = q.shift();
                if(curr.left) q.push(curr.left);
                if(curr.right) q.push(curr.right);
                level.push(curr.val);
            }
            levels.push(level);
        }


        return levels;
    }
}
