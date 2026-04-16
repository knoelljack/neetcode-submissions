class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0, hi = nums.length - 1;

        while(lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if(nums[mid] === target) return mid;
            if(nums[lo] <= nums[mid]) {
                if(nums[lo] <= target && target <= nums[mid]) hi = mid;
                else lo = mid + 1;
            } else {
                if(nums[mid] <= target && target <= nums[hi]) lo = mid;
                else hi = mid - 1;
            }

        }

        return -1;
    }
}
