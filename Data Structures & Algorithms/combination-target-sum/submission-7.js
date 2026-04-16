class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        const dfs = (i, curr, sum) => {
            if(sum > target || i >= nums.length) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }

            curr.push(nums[i]);
            dfs(i, curr, sum + nums[i]);
            curr.pop();
            dfs(i + 1, curr, sum);
        }

        dfs(0, [], 0);

        return res;
    }
}
