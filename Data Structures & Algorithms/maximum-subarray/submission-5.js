class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = nums[0], maxSub = nums[0];

        for(let i=1; i < nums.length; i++) {
            // take max of current # or current # + the sum
            currSum = Math.max(currSum + nums[i], nums[i]);
            //maxSub is max of currSum or the maxSub
            maxSub = Math.max(maxSub, currSum);
        }

        return maxSub;
    }
}
