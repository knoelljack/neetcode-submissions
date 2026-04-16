class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0];
        let currSum = nums[0];

        for(let i=1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSub = Math.max(maxSub, currSum);
        }

        return maxSub;
    }
}
