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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const res = [];
        const q = [root];

        while(q.length) {
            const levelSize = q.length;
            
            for(let i=0; i < levelSize; i++) {
                const curr = q.shift();

                if(i === levelSize - 1) {
                    res.push(curr.val);
                }

                if(curr.left) q.push(curr.left);
                if(curr.right) q.push(curr.right);
            }
        }
        
        return res;
    }
}
