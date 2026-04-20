class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0], currSum = nums[0];

        for(let i=1; i < nums.length; i++) {
            currSum = Math.max(nums[i], nums[i] + currSum);
            maxSub = Math.max(maxSub, currSum);
        }

        return maxSub;
    }
}
