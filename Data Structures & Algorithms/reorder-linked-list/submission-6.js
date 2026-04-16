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
        // split
        let slow = head, fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse 2nd half
        let curr = slow.next;
        slow.next = null;
        let prev = null;

        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // merge lists

        let first = head;
        let second = prev;

        while(second) {
            let firstNext = first.next;
            let secondNext = second.next;
            first.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }

        return first; 

    }
}
