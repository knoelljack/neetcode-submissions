class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0];
        let currSum = 0;

        for(let num of nums) {
            if(currSum < 0) currSum = 0;
            currSum += num;
            maxSub = Math.max(maxSub, currSum);
        }

        return maxSub;
    }
}
