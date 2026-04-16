class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            const mid = Math.floor((r + l) / 2);
            if (nums[mid] == target) return mid;

            if(nums[l] <= nums[mid]) {
                if(nums[l] <= target && target <= nums[mid]) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            } else {
                if(nums[mid] <= target && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }
        }

        return -1;
    }
}
