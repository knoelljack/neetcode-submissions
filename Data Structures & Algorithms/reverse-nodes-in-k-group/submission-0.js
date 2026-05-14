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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(-1);
        dummy.next = head;

        let groupPrev = dummy;
        
        while(true) {
            let kth = this.getKth(groupPrev, k);
            if(!kth) break;

            let groupNext = kth.next;

            let prev = groupNext;
            let curr = groupPrev.next;

            while(curr !== groupNext) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            let tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }

    getKth(curr, k) {
        while(curr && k > 0) {
            curr = curr.next;
            k--;
        }

        return curr;
    }
}
