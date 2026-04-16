/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let curr = head;

        while(curr) {
            length++;
            curr = curr.next;
        }

        if(n === length) return head.next;

        let steps = length - n - 1;
        let prev = head;

        while(steps-- > 0) {
            prev = prev.next;
        }

        prev.next = prev.next?.next || null;

        return head;
    }
}
