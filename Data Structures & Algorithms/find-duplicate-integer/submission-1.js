class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while(slow !== fast);

        let p1 = slow;
        let p2 = nums[0];

        while(p1 !== p2) {
            p1 = nums[p1];
            p2 = nums[p2];
        }

        return p1;
    }
}
