class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};

        for(let i=0; i < nums.length; i++) {
            const compliment = target - nums[i];
            if(compliment in seen) return [seen[compliment], i];
            seen[nums[i]] = i;
        }

        return [-1,-1];
    }
}
