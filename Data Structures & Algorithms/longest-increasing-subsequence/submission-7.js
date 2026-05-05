class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const memo = {};

        function dfs(i, prev) {
            if(i === nums.length) return 0;

            const key = `${prev},${i}`;
            if(key in memo) return memo[key];

            let skip = dfs(i+1, prev);

            let take = 0;

            if(nums[i] > prev) {
                take = 1 + dfs(i+1, nums[i]);
            }

            const most = Math.max(skip, take);
            memo[key] = most;
            return memo[key];
        }

        return dfs(0, -Infinity);
    }
}
