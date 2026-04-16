class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let h = nums.length - 1;
        while(l <= h) {
            const m = Math.floor((l + h) / 2);
            if(nums[m] === target) return m;
            if(nums[l] <= nums[m]) {
                if(nums[l] <= target && target <= nums[m]) h = m;
                else l = m + 1;
            } else {
                if(nums[m] <= target && target <= nums[h]) l = m;
                else h = m - 1;
            }
        }

        return -1;
    }
}
