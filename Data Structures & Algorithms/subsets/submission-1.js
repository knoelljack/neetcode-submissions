class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        function dfs(idx, curr) {
            if(idx === nums.length) {
                res.push(curr.slice());
                return;
            }

            curr.push(nums[idx]);
            dfs(idx+1, curr);
            curr.pop();
            dfs(idx+1, curr);
        }

        dfs(0, []);
        return res;
    }
}
