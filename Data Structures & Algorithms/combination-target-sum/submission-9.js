class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        const res = [];

        function dfs(idx, curr, sum) {
            if(idx >= nums.length || sum > target) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }
            curr.push(nums[idx]);
            dfs(idx, curr, sum + nums[idx]);
            curr.pop();
            dfs(idx + 1, curr, sum);
        }

        dfs(0, [], 0);

        return res;
    }
}
