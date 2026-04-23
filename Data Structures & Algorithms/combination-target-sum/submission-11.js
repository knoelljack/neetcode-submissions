class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        function dfs(i, sum, curr) {
            if(i >= nums.length || sum > target) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }
            curr.push(nums[i]);
            dfs(i, sum + nums[i], curr)
            curr.pop()
            dfs(i+1, sum, curr);
        }

        dfs(0, 0, []);
        return res;
    }
}
