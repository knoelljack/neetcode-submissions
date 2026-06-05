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

        const nodeMap = new Map();

        let curr = head;

        while(curr) {
            nodeMap.set(curr, new Node(curr.val));
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
