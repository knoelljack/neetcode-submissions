// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;

        let curr = head;
        const nodeMap = new Map();

        while(curr) {
            const node = new Node(curr.val);
            nodeMap.set(curr, node);
            curr = curr.next;
        }

        curr = head;

        while(curr) {
            const node = nodeMap.get(curr);

            node.next = nodeMap.get(curr.next) || null;
            node.random = nodeMap.get(curr.random) || null;

            curr = curr.next;
        }

        return nodeMap.get(head);
    }
}
