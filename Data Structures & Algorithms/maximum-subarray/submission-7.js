class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0], currSub = nums[0];

        for(let i=1; i < nums.length; i++) {
            currSub = Math.max(nums[i], currSub + nums[i]);
            maxSub = Math.max(maxSub, currSub);
        }

        return maxSub;

    }
}
