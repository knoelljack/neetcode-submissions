class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let hi = nums.length - 1;

        while(low < hi) {
            const mid = Math.floor((low + hi) / 2);
            if(nums[mid] < nums[hi]) hi = mid;
            else low = mid + 1;
        }

        return nums[low];
    }
}
