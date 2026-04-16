class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, hi = nums.length - 1;
        
        while(low <= hi) {
            const mid = Math.floor((low + hi) / 2);
            if(nums[mid] == target) return mid;
            if(nums[low] <= nums[mid]) {
                if(nums[low] <= target && target <= nums[mid]) hi = mid;
                else low = mid + 1;
            } else {
                if(nums[mid] <= target && target <= nums[hi]) low = mid;
                else hi = mid - 1;
            }
        }

        return -1;
    }
}
