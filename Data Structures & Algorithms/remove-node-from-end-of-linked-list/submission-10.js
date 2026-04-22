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
        let dummy = new ListNode();
        dummy.next = head;
        let ahead = dummy, behind = dummy;

        while(n > 0) {
            ahead = ahead.next;
            n--;
        }

        while(ahead && ahead.next) {
            ahead = ahead.next;
            behind = behind.next;
        }

        behind.next = behind.next?.next;
        return dummy.next;
    }
}
