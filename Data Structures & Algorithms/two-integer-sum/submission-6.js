class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        for(let i=0; i < nums.length; i++) {
            if(seen.has(target - nums[i])) {
                return [seen.get(target-nums[i]), i];
            } else {
                seen.set(nums[i], i);
            }
        }

        return [];
    }
}
