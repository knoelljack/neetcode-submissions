class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        function dfs(curr, sum, i) {
            if(i >= nums.length || sum > target) {
                return;
            }
            if(sum === target) {
                res.push(curr.slice());
                return;
            }
            curr.push(nums[i]);
            dfs(curr, sum + nums[i], i);
            curr.pop();
            dfs(curr, sum, i + 1);
        }

        dfs([], 0, 0);
        return res;
    }
}
