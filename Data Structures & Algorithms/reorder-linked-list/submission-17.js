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
        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let curr = slow.next;
        let prev = null;
        slow.next = null;

        while(curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

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
    }
}
