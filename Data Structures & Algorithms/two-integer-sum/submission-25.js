class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};

        for(let i=0; i < nums.length; i++) {
            const comp = target - nums[i];

            if(seen[comp] !== undefined) return [seen[comp], i];
            else seen[nums[i]] = i;
        }

        return [];
    }
}
