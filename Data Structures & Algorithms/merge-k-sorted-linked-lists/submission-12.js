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
        if(!lists || !lists.length) return null;
        let merged = lists[0];

        for(let i=1; i < lists.length; i++) {
            merged = this.merge(merged, lists[i]);
        }

        return merged;
    }

    merge(list1, list2) {
        const dummy = new ListNode();
        let curr = dummy;

        while(list1 && list2) {
            if(list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        curr.next = list1 || list2;

        return dummy.next;
    }
}
