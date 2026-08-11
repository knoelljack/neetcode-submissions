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
        if (!lists.length) return null;

        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null;

                mergedLists.push(this.merge(l1, l2));
            }

            lists = mergedLists;
        }

        return lists[0];
    }

    merge(list1, list2) {
        const dummy = new ListNode();
        let curr = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
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
