class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let curr = [];
        this.backtrack(nums, target, ans, curr, 0);
        return ans;
    }

    backtrack(nums, target, ans, curr, index) {
        if(index >= nums.length || target < 0) return;
        if(target === 0) {
            ans.push(curr.slice());
            return;
        }
        curr.push(nums[index]);
        target -= nums[index];
        this.backtrack(nums, target, ans, curr, index);
        curr.pop();
        target += nums[index];
        this.backtrack(nums, target, ans, curr, index + 1);
    }
}
