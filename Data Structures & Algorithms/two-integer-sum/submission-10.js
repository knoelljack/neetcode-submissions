class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};
        for(let i=0; i < nums.length; i++) {
            const compliment = target - nums[i];
            if(seen[compliment] !== undefined) return [seen[compliment], i];
            seen[nums[i]] = i;
        }
        return [-1,-1];
    }
}
