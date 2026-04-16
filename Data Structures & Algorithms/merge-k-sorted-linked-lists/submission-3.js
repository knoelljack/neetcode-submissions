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
        if (!lists || !lists.length) return null;

        let merged = lists[0];
        for(let i = 1; i < lists.length; i++) {
            merged = this.mergeTwoLists(merged, lists[i]);
        }

        return merged;
    }

    mergeTwoLists(list1,list2) {
        let dummy = new ListNode(-1);
        let tail = dummy;

        while(list1 && list2) {
            if(list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
            tail.next = list1 || list2;
            return dummy.next;
    }
}
