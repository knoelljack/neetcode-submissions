class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        function dfs(curr, i) {
            if(i === nums.length) {
                res.push(curr.slice());
                return;
            }

            curr.push(nums[i]);
            dfs(curr, i+1);
            curr.pop();
            dfs(curr, i+1);
        }

        dfs([], 0);

        return res;
    }
}
