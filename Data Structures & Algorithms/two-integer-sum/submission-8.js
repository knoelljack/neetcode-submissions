class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};
        for(let i=0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(seen[diff] !== undefined) return [seen[diff], i];
            else seen[nums[i]] = i;
        }
        return [-1,-1]
    }
}
