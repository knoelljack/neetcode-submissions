class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0;
        let hi = nums.length - 1;

        while(lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if(nums[mid] < target) lo = mid + 1;
            else if (nums[mid] > target) hi = mid-1;
            else return mid;
        }
        return -1;
    }
}
