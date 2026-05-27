class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        function dfs(idx, curr) {
            res.push(curr.slice());

            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i - 1]) continue;
                curr.push(nums[i]);
                dfs(i + 1, curr);
                curr.pop();
            }
        }

        dfs(0, []);
        return res;
    }
}
