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
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr = slow.next;
        slow.next = null;
        let prev = null;

        while(curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        const dummy = new ListNode();
        dummy.next = head;
        let first = head;
        let second = prev;

        while(first && second) {
            const firstNext = first.next;
            const secondNext = second.next;
            first.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }

        return dummy.next;
    }
}
