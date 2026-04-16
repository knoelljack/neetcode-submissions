class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        const dfs = (curr, i, sum) => {
            if(i >= nums.length || sum > target) return;
            if(sum === target) {
                res.push([...curr]);
                return;
            }
            curr.push(nums[i]);
            dfs(curr, i, sum + nums[i]);
            curr.pop();
            dfs(curr, i + 1, sum);
        }

        dfs([], 0, 0);

        return res;
    }
}
