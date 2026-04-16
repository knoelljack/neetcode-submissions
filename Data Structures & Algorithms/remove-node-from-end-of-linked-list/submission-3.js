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
        let dummy = new ListNode(-1);
        dummy.next = head;
        let slow = dummy;
        let fast = dummy;

        while(n-- >= 0) {
            fast = fast.next;
        }

        while(fast) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next?.next;
        return dummy.next;
    }
}
