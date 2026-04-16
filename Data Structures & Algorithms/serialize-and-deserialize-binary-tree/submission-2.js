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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let str = "";

        const dfs = (node) => {
            if(!node) {
                str += "N,";
                return;
            }
            str += node.val + ",";
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);

        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let nodes = data.split(",");
        let i = 0;

        const build = () => {
            if(nodes[i] === "N") {
                i++;
                return null;
            }
            let node = new TreeNode(parseInt(nodes[i]));
            i++;
            node.left = build();
            node.right = build();
            return node;
        }

        return build();
    }
}
