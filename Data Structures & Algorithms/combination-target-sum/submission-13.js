class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        function dfs(sum, curr, i) {
            if(i == nums.length || sum > target) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }

            curr.push(nums[i]);
            dfs(sum + nums[i], curr, i);
            curr.pop();
            dfs(sum, curr, i + 1);
        }

        dfs(0, [], 0);
        return res;
    }
}
