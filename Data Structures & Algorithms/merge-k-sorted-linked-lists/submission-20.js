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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists.length) return null;
        let merged = lists[0];

        for(let i=1; i < lists.length; i++) {
            merged = this.merge(merged, lists[i]);
        }

        return merged;
    }

    merge(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;

        while(l1 && l2) {
            if(l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next;
        }

        curr.next = l1 || l2;

        return dummy.next;
    }
}
